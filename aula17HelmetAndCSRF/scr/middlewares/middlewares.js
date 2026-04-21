exports.globalMiddleware = (req, res, next) => {
    console.log("Middleware aqui");
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.send("CSRF token inválido");
    }
}
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}