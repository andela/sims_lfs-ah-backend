require("dotenv").config();
const app = require("./server/api");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
