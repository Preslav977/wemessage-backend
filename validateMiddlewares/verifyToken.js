const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;

  console.log(bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerToken.split(" ");

    const bearerToken = bearer[1];

    console.log(bearerHeader);

    jwt.verify(req.token, process.env.SECRET, (err, authData) => {
      if (err) {
        res.status(403);
      } else {
        (req.authData = authData), next();
      }
    });
  } else {
    res.status(403);
  }
}

module.exports = verifyToken;
