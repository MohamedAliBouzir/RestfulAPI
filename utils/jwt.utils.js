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
    }
}