function item(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).item();
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user();
}

module.exports = {
  item,
  user
};
