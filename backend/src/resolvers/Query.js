const routines = (root, args, context) => {
  return context.prisma.routines();
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
  users
};
