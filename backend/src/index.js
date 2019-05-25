const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Item = require("./resolvers/Item");
const Subscription = require("./resolvers/Subscription");
const Vote = require("./resolvers/Vote");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Item,
    Vote
  },
  context: request => {
    return { ...request, prisma };
  }
});

const options = {
  port: 4000
};

server.start(options, () =>
  console.log(`Server is running on http://localhost:4000`)
);
