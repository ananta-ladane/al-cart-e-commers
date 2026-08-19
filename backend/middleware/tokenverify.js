const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {

    // 1. Get Authorization header
    const authHeader = req.headers.authorization;

    console.log(authHeader)
    // 2. Check whether token was sent
    if (!authHeader) {
        return res.status(401).json({
            status: 0,
            message: "Authorization token is missing"
        });
    }

    // 3. Extract token from "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 0,
            message: "Token is missing"
        });
    }

    // 4. Verify token
    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        
        req.user = decoded;

        
        next();

    } catch (error) {

        return res.status(401).json({
            status: 0,
            message: "Invalid or expired token"
        });
    }
};

