// Imports
var jwt = require('jsonwebtoken');


//declarations
const JWT_SIGN_SECRET= '$2a$10$Cm1aHb/R4MMDdrF34qwxTuZyqWLnBxB9hod8QKAKefSVfUFHYbUwy';

// Exported functions
module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,{
            expiresIn: '1h'
        })
    },
    parseAuthorization: function(authorization){
        return (authorization != null)? authorization.replace('Bearer ',''):null;
    },
    getUserId: function(authorization){
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization);
        if(token != null){
            try{
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken != null)
                userId = jwtToken.userId;
            }catch(err){ }
        }
        return userId;
    }
}