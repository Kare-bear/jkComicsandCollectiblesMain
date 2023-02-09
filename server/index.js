require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

const port = 3001;

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
})
.catch(console.log)

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 525600 * 60 * 1000 
    } 
  })
)


app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}!`);
});