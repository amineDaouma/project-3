require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");
const Routine = require("./resolvers/Routine");

// server instantiation

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: { Query, Mutation, User, Routine },
  context: req => ({ ...req, prisma })
});

// express middleware
server.express.use(cookieParser());

// middleware to get the currently logged in user via cookie
// server.express.use((req, res, next) => {
//   let token = req.cookies["Authorization"];
//   console.log(req.cookies);

//   // console.log(token);
//   if (token) {
//     token = token.replace("Bearer ", "");
//     const { id } = jwt.verify(token, process.env.APP_SECRET);
//     req.id = id;
//   }

//   next();
// });

const options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
  port: 4000
};

server.start(options, items =>
  console.log(`Server is running on localhost:4000`)
);
