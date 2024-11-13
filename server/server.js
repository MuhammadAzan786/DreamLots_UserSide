const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/db_connection");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
const app = express();

//database connection function
dbConnect();
const port = process.env.PORT;
//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use("/", authRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
