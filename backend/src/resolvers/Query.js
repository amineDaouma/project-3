const jwt = require("jsonwebtoken");

// const routines = (root, args, context) => {
//   return context.prisma.routines();
// };

const loggedInUser = async (root, args, context) => {
  console.log("Calling loggedInUser");
  const authorization = context.request.get("Authorization");
  if (authorization) {
    const { id } = jwt.verify(
      authorization.replace("Bearer ", ""),
      process.env.APP_SECRET
    );
    const user = await context.prisma.user({
      id
    });
    console.log(user);
    return user;
  }
  return null;
};

const user = (root, args, context) => {
  return context.prisma.user({
    id: args.id
  });
};

const users = (root, args, context) => {
  return context.prisma.users();
};

const routine = (root, args, context) => {
  return context.prisma.routine({
    id: args.id
  });
};

const routines = (root, args, context) => {
  console.log("Debug: Calling routines");
  const routines = context.prisma.routines({
    id: args.id
  });
  console.log(routines);
  return routines;
};

module.exports = {
  user,
  users,
  loggedInUser,
  routine,
  routines
};
