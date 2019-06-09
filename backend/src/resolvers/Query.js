const jwt = require("jsonwebtoken");

// const routines = (root, args, context) => {
//   return context.prisma.routines();
// };

const loggedInUser = async (parent, args, context) => {
  const authorization = context.request.get("Authorization");
  if (authorization) {
    const { id } = jwt.verify(
      authorization.replace("Bearer ", ""),
      process.env.APP_SECRET
    );
    const user = await context.prisma.user({
      id
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
