module.exports = (req, res, next) => {
    console.log("Middleware aqui");
    next();
}