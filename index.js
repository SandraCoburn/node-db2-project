const server = require("./api/server.js/index.js");
const port = process.env.Port || 5000;
server.listen(port, () =>
  console.log(`\n*** Server running on port ${port} ***\n`)
);
