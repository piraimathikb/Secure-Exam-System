
const validRoles = [
  "platformAdmin",
  "collegeAdmin",
  "coordinator",
  "student",
];

const authorizeRoles = (...allowedRoles) => {
  if (
    allowedRoles.length === 0 ||
    allowedRoles.some((role) => !validRoles.includes(role))
  ) {
    throw new Error("Invalid or missing roles in authorizeRoles()");
  }

  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized for this action.",
      });
    }

    next();
  };
};

module.exports = authorizeRoles;
