const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Si tout est ok, enregistrer l'utilisateur dans la requête pour les utilisations futures
    req.userId = decoded.sub;
    req.userRole = decoded.role;
    next();
  });
};

module.exports = verifyToken;
