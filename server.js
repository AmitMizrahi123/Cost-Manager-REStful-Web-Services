require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user');
const costRouter = require('./routers/cost');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(userRouter);
app.use(costRouter);

app.listen(port, () => {
    console.log('App is running on port 3000!');
});