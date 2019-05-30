const routines = (root, args, context) => {
  return context.prisma.routines();
};

const loggedInUser = async (root, args, context) => {
  const id = await context.request.id;
  console.log("Calling loggedInUser");
  // console.log(context.request);

  // console.log(id);
  if (id) {
    return await context.prisma.user({
      id
    });
  }
  return null;
};

const user = (root, args, context) => {
  return context.prisma.user({
    id: args.id
  });
};

const users = (root, args, context) => {
  return context.prisma.users();
};

module.exports = {
  routines,
  user,
  users,
  loggedInUser
};
