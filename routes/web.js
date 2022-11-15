const welcome = require('../app/http/controllers/welcome')
const profile = require('../app/http/controllers/profile')
const staffHome = require('../app/http/controllers/staffHome')
const staffAuth = require('../app/http/controllers/staffAuth')
const studentAuth = require('../app/http/controllers/studentAuth')
const questions = require('../app/http/controllers/questions')

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

function initRoutes(app) {
    app.get('/', welcome().index)
    app.get('/profile', profile().index)
    app.get('/staffHome', staffHome().index)


    app.get('/staffLogin', staffAuth().login)
    app.post('/staffLogin', staffAuth().postLogin)

    app.get('/staffRegister', staffAuth().register)
    app.post('/staffRegister', staffAuth().postRegister)


    app.get('/studentLogin', studentAuth().login)
    app.post('/studentLogin', studentAuth().postLogin)

    app.get('/studentRegister', studentAuth().register)
    app.post('/studentRegister', studentAuth().postRegister)

    app.get('/ques', questions().showQuestions)
    app.post('/ques', upload.single('file'), questions().postQuestions)



}

module.exports = initRoutes