const jwt = require("jsonwebtoken");

const createTokens = (email) => {
  const payload = {
    email: email,
  };

  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "24h",
  });
  return { accessToken, refreshToken };
};

module.exports = { createTokens };
