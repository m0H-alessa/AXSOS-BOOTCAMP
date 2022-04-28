const express = require("express");
const cors = require("cors");
require("./config/mongoose.config"); // This is new

const app = express();

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require("./routes/manager.routes")(app);

app.listen(8080, () => {
  console.log("Listening at Port 8000");
});
