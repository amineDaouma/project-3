const jwt = require("jsonwebtoken");

const authorise = token => {
  const actualToken = token.replace("Bearer ", "");
  const { id } = jwt.verify(actualToken, process.env.APP_SECRET);
  if (id) return id;
  return null;
};

module.exports = authorise;
