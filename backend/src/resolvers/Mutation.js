const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorise = require("../utils/authorise");

const createRoutine = async (parent, { name }, context, info) => {
  const token = context.request.get("Authorization");
  const id = authorise(token);
  const clientDate = context.request.get("clientDate").slice(0, 10);
  if (id) {
    if (!name) throw new Error("Your habit name is empty.");
    await context.prisma.updateUser({
      where: {
        id
      },
      data: {
        isTrusted: false
      }
    });
    const routine = await context.prisma.createRoutine(
      {
        name,
        ownedBy: {
          connect: {
            id
          }
        },
        days: {
          create: {
            date: clientDate,
            isCompleted: false
          }
        }
      },
      info
    );
    return routine;
  } else throw Error("You are not logged in");
};

// temporary testing mutation
const testCreateRoutine = async (parent, args, context, info) => {
  const routine = await context.prisma.createRoutine(
    {
      name: "test routine",
      ownedBy: {
        connect: {
          id: "cjwonxco477y10b12iwxfbdh2"
        }
      },
      days: {
        create: {
          date: "2019-01-01",
          isCompleted: false
        }
      }
    },
    info
  );
  return routine;
};

const deleteRoutine = async (parent, { routineId }, context, info) => {
  const token = context.request.get("Authorization");
  const id = authorise(token);
  if (id) {
    await context.prisma.updateUser({
      where: {
        id
      },
      data: {
        isTrusted: false
      }
    });
    const routine = await context.prisma.deleteRoutine({ id: routineId });
    return routine;
  } else throw Error("You are not logged in");
};

const updateRoutine = async (parent, { routineId, name }, context, info) => {
  const token = context.request.get("Authorization");
  const id = authorise(token);
  if (id) {
    await context.prisma.updateUser({
      where: {
        id
      },
      data: {
        isTrusted: false
      }
    });
    const routine = await context.prisma.updateRoutine({
      data: {
        name
      },
      where: {
        id: routineId
      }
    });
    return routine;
  } else throw Error("You are not logged in");
};

const updateDay = async (parent, { isCompleted, dayId }, context, info) => {
  const token = context.request.get("Authorization");
  const id = authorise(token);
  if (id) {
    const day = await context.prisma.updateDay({
      data: {
        isCompleted: !isCompleted
      },
      where: {
        id: dayId
      }
    });
    return day;
  } else throw Error("You are not logged in");
};

const signup = async (parent, args, context) => {
  if (!args.username || !args.password)
    throw new Error("One or both fields are empty. Please fill them in.");

  // check if username exists and throw error if it does
  const usernameExists = await context.prisma.$exists.user({
    username: args.username
  });
  if (usernameExists) {
    throw new Error(
      `"${args.username}" is already taken. Please pick a different username.`
    );
  }

  // hash the given password
  args.password = await bcrypt.hash(args.password, 10);

  // create the user
  const user = await context.prisma.createUser({
    ...args,
    isTrusted: true
  });

  // create the JWT based on a secret key
  const token = await jwt.sign({ id: user.id }, process.env.APP_SECRET);

  //IMPORTANT
  // since nextjs + apollo cookie passing game is still wonky, I'll resort to localStorage until it's fixed
  // set the "Authorization" header of the cookie with the value of the token
  // context.response.cookie("Authorization", `Bearer ${token}`, {
  //   httpOnly: true,
  //   maxAge: 1000 * 60 * 60 * 24 * 30 // 1 month cookie
  // });

  return {
    user,
    token
  };
};

const login = async (parent, args, context) => {
  if (!args.username || !args.password)
    throw new Error("One or both fields are empty. Please fill them in.");
  // checks if the user exists and allows the user to login if that is true
  const user = await context.prisma.user({
    username: args.username
  });

  if (!user) {
    throw new Error(
      `The username "${args.username}" does not exist. Have you signed up?`
    );
  }

  // compares the stored password corresponding to the username and compares with the given password

  const isAuthenticated = await bcrypt.compare(args.password, user.password);

  if (!isAuthenticated)
    throw new Error("The password you entered is incorrect");

  const token = await jwt.sign({ id: user.id }, process.env.APP_SECRET);

  return {
    token,
    user
  };
};

module.exports = {
  createRoutine,
  testCreateRoutine,
  deleteRoutine,
  updateRoutine,
  signup,
  login,
  updateDay
};
