require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");

// graphQL middleware

// const test = async (resolve, root, args, context, info) => {
//   console.log(`test`);
//   console.log(context.request);
//   const result = await resolve(root, args, context, info);
//   return result;
// };

// server instantiation

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: { Query, Mutation, User },
  context: req => ({ ...req, prisma })
  // middlewares: [test]
});

// express middleware
server.express.use(cookieParser());

// middleware to get the currently logged in user via cookie
server.express.use((req, res, next) => {
  let token = req.cookies["Authorization"];
  console.log(req.cookies);
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  console.log("-------------");
  // console.log(token);
  if (token) {
    token = token.replace("Bearer ", "");
    const { id } = jwt.verify(token, process.env.APP_SECRET);
    req.id = id;
  }

  next();
});

const options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
};

server.start(options, items =>
  console.log(`Server is running on localhost:4000`)
);
