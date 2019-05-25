const routines = (parent, args, context) => {
  return context.prisma.user({ id: parent.id }).routines();
};

module.exports = {
  routines
};
