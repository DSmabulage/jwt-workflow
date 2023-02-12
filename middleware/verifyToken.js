const jwt = require("jsonwebtoken");

const verifyAccessToken = (req, res, next) => {
  if (
    req.headers["authorization"] &&
    req.headers.authorization.split(" ")[0].toLowerCase() === "bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];

    if (token == null) return res.status(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403);
      req.user = user;
      next();
    });
  } else res.status(401).send();
};

module.exports = verifyAccessToken;
