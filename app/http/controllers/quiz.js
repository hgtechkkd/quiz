function quizController(){
    return {
        index(req,res){
            res.render("quiz")
        }
    }
}


module.exports = quizController