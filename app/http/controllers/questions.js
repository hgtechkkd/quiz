const Question = require('../../models/questions')
const csv = require('csvtojson')
const multer = require('multer');
const { raw } = require('body-parser');

function questionsController() {
    return {
        showQuestions(req, res) {
            Question.find({}, (err, items) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({ items: items });
                }
            });

        },
        postQuestions(req, res, next) {
            csv().fromFile(req.file.path)
                .then((jsonObj) => {
                    // console.log(jsonObj)
                    var que = [];
                    for (var i = 0; i < jsonObj.length; i++) {
                        var obj = {};
                        obj.question = jsonObj[i]['Question'];
                        obj.optionA = jsonObj[i]['Option A'];
                        obj.optionB = jsonObj[i]['Option B'];
                        obj.optionC = jsonObj[i]['Option C'];
                        obj.optionD = jsonObj[i]['Option D'];
                        obj.answer = jsonObj[i]['Answer'];
                        obj.explanation = jsonObj[i]['Explanation'];
                        que.push(obj);
                    }
                    console.log(que)
                    Question.insertMany(que).then(function () {
                        res.status(200).send({
                            message: "Successfully Uploaded!"
                        });
                    }).catch(function (error) {
                        res.status(500).send({
                            message: "failure",
                            error
                        });
                    });
                }).catch((error) => {
                    res.status(500).send({
                        message: "failure",
                        error
                    });
                })

        }
    }
}


module.exports = questionsController