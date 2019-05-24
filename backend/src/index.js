const { GraphQLServer } = require("graphql-yoga");

let items = [
  {
    id: "item-0",
    description: "testing 123",
    completed: true
  }
];

let idCount = items.length;

const resolvers = {
  Query: {
    info: () => `This is the API for project-3`,
    item: (parent, args) => {
      let id = args.id;
      for (el of items) {
        if (el.id === id) {
          return el;
        }
      }
    },
    allItems: () => items
  },
  Mutation: {
    createItem: (parent, args) => {
      const item = {
        id: `item-${idCount++}`,
        description: args.description,
        completed: args.completed
      };
      items.push(item);
      return item;
    },
    updateItem: (parent, args) => {
      let id = args.id;
      let item = {};
      let { description, completed } = args;
      for (el of items) {
        if (el.id === id) {
          item = el;
          item.description = description || item.description;
          if (completed !== null) item.completed = completed;
          break;
        }
      }

      return item;
    },
    deleteItem: (parent, args) => {
      let id = args.id;
      let index = null;
      if (items.length === 0) return null;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          let deletedItem = items[i];
          items.splice(i, 1);
          return deletedItem;
        }
      }
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
