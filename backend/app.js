require("dotenv").config();

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./router/router");
const mongoconnect = require("./utils/database").mongoconnect;
const cors = require("cors");
const session = require("express-session");
const mongosescon = require("connect-mongodb-session")(session);


const store = new mongosescon({
    uri: process.env.MONGO_URI,
    databaseName: "developer",
    collection: "sessions"
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        httpOnly: true
    }
}))

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/homepage", (req, res) => {
    res.send("hello this is the e-coomers backend check-up");
})

app.get("/server-info", (req, res) => {
    res.json({
        message: "Request handled successfully",
        processId: process.pid
    });
});

app.use(router);


mongoconnect(() => {
    app.listen(5000)
})
