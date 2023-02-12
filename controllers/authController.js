const { createTokens } = require("../helpers/createTokens");
const jwt = require("jsonwebtoken");
let refreshTokens = [];

const userRegister = async (req, res) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = createTokens(email);
  refreshTokens.push(refreshToken);

  res.send({ accessToken, refreshToken });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = createTokens(email);
  refreshTokens.push(refreshToken);

  res.send({ accessToken, refreshToken });
};

const refreshToken = (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (refreshToken == null) return res.status(401).send();
  if (!refreshTokens.includes(refreshToken)) return res.status(403).send();

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send();
    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.send({ accessToken });
  });
};

const logout = (req, res) => {
  const refreshToken = req.body.refreshToken;
  refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
  res.status(204).send();
};

module.exports = { userRegister, userLogin, refreshToken, logout };
