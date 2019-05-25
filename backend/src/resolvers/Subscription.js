function newItemSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.item({ mutation_in: ["CREATED"] }).node();
}

const newItem = {
  subscribe: newItemSubscribe,
  resolve: payload => {
    return payload;
  }
};

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe
    .vote({
      mutation_in: ["CREATED"]
    })
    .node();
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload;
  }
};

module.exports = {
  newItem,
  newVote
};
