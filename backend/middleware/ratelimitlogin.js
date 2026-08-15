const rateLimit = require("express-rate-limit");


exports.loginratelimit = rateLimit({

    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        message: "Too many requests. Please try again later."
    }
})