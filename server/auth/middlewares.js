const jwt = require('jsonwebtoken');

const checkTokenSetUser = (req, res, next) => {
    //get authorisation header
    const authHeader = req.get('Authorization');
    //if it exists
    if(authHeader){
        const token = authHeader.split(' ')[1]
        console.log(token)
        if(token){
            //check if it's valid token
            jwt.verify(token,  process.env.TOKEN_SECRET, (err, user) => {
                if(err) console.log(err);
                req.user = user;
                next()
            })
        }else{
            next();
        }
    }else{
        //else continue
        next();
    }
}

module.exports = {
    checkTokenSetUser
};