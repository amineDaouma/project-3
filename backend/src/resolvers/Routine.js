const ownedBy = (parent, args, context) => {
  return context.prisma.routine({ id: parent.id }).ownedBy();
};

module.exports = {
  ownedBy
};
