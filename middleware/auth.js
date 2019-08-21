const jwt = require('jsonwebtoken' )
// const config = require('config')
const jwtkey = process.env.jwtSecret
// config.get('jwtSecret')

module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token')

    // Check if there is no token
    if(!token) {
        return res.status(401). json({ msg: 'No Token, Authorization is Denies'})

    }

    //Verify Token
    try {
        const decoded = jwt.verify(token, jwtkey)

        req.user = decoded.user;
        next();

    } catch(err) {
        res.status(401).json({ msg: 'Token is not Valid'})
    }
}