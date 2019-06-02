const jwt = require("jsonwebtoken");

const routines = (root, args, context) => {
  return context.prisma.routines();
};

const loggedInUser = async (root, args, context) => {
  const authorization = context.request.get("Authorization");
  console.log(authorization);
  if (authorization) {
    const { id } = jwt.verify(
      authorization.replace("Bearer ", ""),
      process.env.APP_SECRET
    );
    return await context.prisma.user({
      id
    });
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

module.exports = {
  routines,
  user,
  users,
  loggedInUser
};
