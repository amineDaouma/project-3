function createdBy(parent, args, contexxt) {
  return context.prisma.item({ id: parent.id }).createdBy();
}

function votes(parent, args, context) {
  return context.prisma.item({ id: parent.id }).votes();
}

module.exports = {
  createdBy,
  votes
};
