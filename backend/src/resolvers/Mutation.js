const createRoutine = (parent, args, context) => {
  return context.prisma.createRoutine({
    name: args.name,
    ownedBy: {
      connect: { id: args.ownedBy }
    }
  });
};

const signup = (parents, args, context) => {
  return context.prisma.createUser({
    ...args
  });
};

module.exports = {
  createRoutine,
  signup
};
