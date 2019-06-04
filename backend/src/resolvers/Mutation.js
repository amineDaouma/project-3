const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorise = require("../utils/authorise");

const createRoutine = (parent, args, context) => {
  const token = context.request.get("Authorization");
  // console.log(token);
  const id = authorise(token);
  if (id) console.log("You are authorised");
  else throw Error("You are not logged in");
};

const signup = async (parent, args, context) => {
  if (!args.username || !args.password)
    throw new Error("One or both fields are empty. Please fill them in.");

  // check if username exists and throw error if it does
  const usernameExists = await context.prisma.$exists.user({
    username: args.username
  });
  if (usernameExists) {
    throw new Error(
      `"${args.username}" is already taken. Please pick a different username.`
    );
  }

  // hash the given password
  args.password = await bcrypt.hash(args.password, 10);

  // create the user
  const user = await context.prisma.createUser({
    ...args
  });

  // create the JWT based on a secret key
  const token = await jwt.sign({ id: user.id }, process.env.APP_SECRET);

  //IMPORTANT
  // since nextjs + apollo cookie passing game is still wonky, I'll resort to localStorage until it's fixed
  // set the "Authorization" header of the cookie with the value of the token
  // context.response.cookie("Authorization", `Bearer ${token}`, {
  //   httpOnly: true,
  //   maxAge: 1000 * 60 * 60 * 24 * 30 // 1 month cookie
  // });

  return {
    user,
    token
  };
};

const login = async (parent, args, context) => {
  if (!args.username || !args.password)
    throw new Error("One or both fields are empty. Please fill them in.");
  // checks if the user exists and allows the user to login if that is true
  const user = await context.prisma.user({
    username: args.username
  });

  if (!user) {
    throw new Error(
      `The username "${args.username}" does not exist. Have you signed up?`
    );
  }

  // compares the stored password corresponding to the username and compares with the given password

  const isAuthenticated = await bcrypt.compare(args.password, user.password);

  if (!isAuthenticated)
    throw new Error("The password you entered is incorrect");

  const token = await jwt.sign({ id: user.id }, process.env.APP_SECRET);

  return {
    token,
    user
  };
};

module.exports = {
  createRoutine,
  signup,
  login
};
