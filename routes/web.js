const questions = require('../app/http/controllers/questions')
const quiz = require('../app/http/controllers/quiz')
const results = require('../app/http/controllers/results')
const staffHome = require('../app/http/controllers/staffHome')
const staffLogin = require('../app/http/controllers/staffLogin')
const staffProfile = require('../app/http/controllers/staffProfile')
const staffRegister = require('../app/http/controllers/staffRegister')
const studentHome = require('../app/http/controllers/studentHome')
const studentLogin = require('../app/http/controllers/studentLogin')
const studentProfile = require('../app/http/controllers/studentProfile')
const studentRegister = require('../app/http/controllers/studentRegister')
const welcome = require('../app/http/controllers/welcome')

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

function initRoutes(app) {
    app.get('/', welcome().index)
    app.get('/results', results().index)
    app.get('/staffHome', staffHome().index)
    app.get('/staffLogin', staffLogin().index)
    app.get('/staffProfile', staffProfile().index)
    app.get('/staffRegister', staffRegister().index)
    app.get('/studentHome', studentHome().index)
    app.get('/studentLogin', studentLogin().index)
    app.get('/studentProfile', studentProfile().index)
    app.get('/studentRegister', studentRegister().index)



    app.get('/quiz', questions().showQue)
    app.post('/ques', upload.single('file'), questions().postQuestions)



}

module.exports = initRoutes