async function allItems(root, args, context, info) {
  const where = args.boolFilter
    ? {
        OR: [{ completed: args.boolFilter }]
      }
    : {};

  const items = await context.prisma.items({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .itemsConnection({ where })
    .aggregate()
    .count();
  return {
    items,
    count
  };
}

module.exports = {
  allItems
};
