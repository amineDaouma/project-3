const ownedBy = (parent, args, context) => {
  return context.prisma.routine({ id: parent.id }).ownedBy();
};

const days = (parent, args, context) => {
  return context.prisma.routine({ id: parent.id }).days();
};

module.exports = {
  ownedBy,
  days
};
