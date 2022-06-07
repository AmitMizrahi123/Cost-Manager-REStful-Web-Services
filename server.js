require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const userRouter = require('./routers/user');
const userMiddleware = require("./middlewares/userMiddleware");
const port = 3000;

// Connect mongo db
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// App settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

// Routers
app.use("/api/user", userRouter);

// Middleware
app.use(userMiddleware);

app.listen(port, () => {
    console.log('App is running on port 3000!');
});