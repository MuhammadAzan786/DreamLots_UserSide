const jwt = require("jsonwebtoken");

//middleware to check token and verify user
const jwtAuthMiddleware = (req, res, next) => {
  //first check headers has authorization or not
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ error: "Token not found" });
  }
  //Extract the JWT from the req headers
  const token = authorization.split(" ")[1];
  //If the token doesnot exists
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  //if we get the token then
  try {
    //Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //attach the user info in payload to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error });
  }
};

//function to generate jwt token
const generateToken = (userData) => {
  //generate new jwt token using the userData
  return jwt.sign(userData, process.env.JWT_SECRET);
};

module.exports = { jwtAuthMiddleware, generateToken };
