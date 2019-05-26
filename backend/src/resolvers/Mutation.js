const createRoutine = (parent, args, context) => {
  return context.prisma.createRoutine({
    username: args.username,
    ownedBy: {
      connect: { id: args.ownedBy }
    }
  });
};

const signup = async (parents, args, context) => {
  const usernameExists = await context.prisma.$exists.user({
    username: args.username
  });
  if (usernameExists) {
    throw new Error(
      `${args.username} already exists. Please pick a different username.`
    );
  }

  return context.prisma.createUser({
    ...args
  });
};

module.exports = {
  createRoutine,
  signup
};
