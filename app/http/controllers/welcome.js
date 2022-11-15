function welcomeController(){
    return {
        index(req,res){
            res.render("welcome")
        }
    }
}


module.exports = welcomeController