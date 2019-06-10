const jwt = require("jsonwebtoken");

const loggedInUser = async (parent, { clientDate }, context, info) => {
  const authorization = context.request.get("Authorization");

  // I foresee problems here in the future
  // be prepared for future refactoring
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);
  const todayString = today.toISOString().slice(0, 10);
  const nextDayString = nextDay.toISOString().slice(0, 10);

  if (authorization) {
    const { id } = jwt.verify(
      authorization.replace("Bearer ", ""),
      process.env.APP_SECRET
    );
    const user = await context.prisma.user(
      {
        id
      },
      info
    );

    // debug
    // query for routines that don't have a day between today and the next day
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
