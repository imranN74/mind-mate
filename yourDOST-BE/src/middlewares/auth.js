//_____USER AUTH_______________________
function userAuthorization(req, res, next) {
  const bearerToken = req.headers.authorization;
  try {
    const token = bearerToken?.split(" ")[1];

    if (!JWT_SECRETE_KEY) {
      res.status(statusCode.notFound).json({
        message: "jwt secrete not found",
      });
    }
    if (token && JWT_SECRETE_KEY) {
      const userVerify = jwt.verify(token, JWT_SECRETE_KEY);

      //setting userId to sccesss on different routes and middlewares
      res.locals.userId = userVerify.userId;
      next();
    } else {
      res.status(statusCode.notAuthorized).json({
        message: "you are not authorized",
      });
    }
  } catch (error) {
    res.status(statusCode.notAuthorized).json({
      message: "session expired, try after login",
    });
  }
}
