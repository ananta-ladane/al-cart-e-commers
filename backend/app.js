require("dotenv").config();

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./router/router");
const mongoconnect = require("./utils/database").mongoconnect;
const cors = require("cors");
// const session = require("express-session");
// const mongosescon = require("connect-mongodb-session")(session);




app.set("trust proxy", 1);

app.use(cors({ origin: "https://ananta-ladane.github.io/", credentials: true }));

app.use(express.json());

// const store = new mongosescon({
//     uri: process.env.MONGO_URI,
//     databaseName: "developer",
//     collection: "sessions"
// })


// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     cookie: {
//         httpOnly: true,
//         secure: true,
//         sameSite: "none"
//     }
// }))


app.use(bodyparser.urlencoded({ extended: false }));



app.use(router);


mongoconnect(() => {
    app.listen(5000)
})
