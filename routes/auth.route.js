const authController = require('../controllers/auth.controller');

module.exports = function(app){
    app.post('/register',authController.signUp);
    app.post('/login', authController.login);
    app.post('/logout', authController.logout);
}  

/********** All Copyrights By prafulsmile29@gmail.com *********/
