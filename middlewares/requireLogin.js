module.exports = (req, res, next) => {
    if (!req.user) { //if req.user is not defined then throw auth errors
        return res.status(401).send({ error: 'You must log in!' });
    }
    next();
};