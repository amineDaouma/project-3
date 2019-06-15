const jwt = require("jsonwebtoken");
const computeWeeklyCompletion = require("../utils/computeWeeklyCompletion");

const loggedInUser = async (parent, args, context, info) => {
  const authorization = context.request.get("Authorization");

  if (authorization) {
    const { id } = jwt.verify(
      authorization.replace("Bearer ", ""),
      process.env.APP_SECRET
    );

    const clientDate = new Date(context.request.get("clientDate"));
    const clientOffsetHours = clientDate.getTimezoneOffset() / 60;
    // for reference, sunday-saturday is 0-6
    const dayOfTheWeek = clientDate.getDay();
    if (dayOfTheWeek === 0) {
      // TO-REFACTOR zone
      // This block definitely needs testing

      // if the client's day is sunday, the server will compute if he is allowed
      // to add a new routine
      let dateOfWeekBefore = new Date();
      dateOfWeekBefore.setDate(clientDate.getDate() - 6);

      // get all routines owned by the logged in user
      const allRoutines = await context.prisma.routines({
        where: {
          ownedBy: {
            id
          }
        }
      });

      // map through all those routines to get days
      // and compute completion percentage of all those routines
      // Lesson learnt: async/await is dodgy with reduce
      // Read this: https://stackoverflow.com/questions/41243468/javascript-array-reduce-with-async-await
      let finalPercentage = 0;
      for (let i = 0; i < allRoutines.length; i++) {
        const singleRoutine = allRoutines[i];
        const days = await context.prisma.days({
          where: {
            partOf: {
              id: singleRoutine.id
            }
          }
        });
        finalPercentage += computeWeeklyCompletion(days) / allRoutines.length;
      }
    }
    const nextDay = new Date();
    nextDay.setDate(clientDate.getDate() + 1);
    const todayString = clientDate.toISOString().slice(0, 10);
    const nextDayString = nextDay.toISOString().slice(0, 10);
    console.log(todayString);
    console.log(nextDayString);
    // query for routines that don't have a day between today and the next day
    // REFACTOR: make it so that this is only done once a day by checking if the user has logged in today
    const routines = await context.prisma.routines({
      where: {
        ownedBy: {
          id
        },
        days_none: {
          date_gte: todayString,
          date_lte: nextDayString
        }
      }
    });

    // map through the routines that have no record of today
    // create Day element that is dated Today and link it to the routine
    routines.map(async ({ id }) => {
      await context.prisma.createDay({
        date: todayString,
        isCompleted: false,
        partOf: {
          connect: {
            id
          }
        }
      });
    });

    // the logged-in user will only be queried once all operations are complete
    const user = await context.prisma.user(
      {
        id
      },
      info
    );
    return user;
  }
  return null;
};

const user = (parent, args, context) => {
  return context.prisma.user({
    id: args.id
  });
};

const users = (parent, args, context) => {
  return context.prisma.users();
};

const routine = (parent, args, context) => {
  return context.prisma.routine({
    id: args.id
  });
};

const routines = (parent, args, context) => {
  const routines = context.prisma.routines({
    id: args.id
  });
  return routines;
};

module.exports = {
  user,
  users,
  loggedInUser,
  routine,
  routines
};
