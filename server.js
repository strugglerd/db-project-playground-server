const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 6969;

const app = require("./app");

app.listen(PORT, function () {
  console.log(`app live at http://localhost:${PORT}`);
});
