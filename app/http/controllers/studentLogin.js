function studentLoginController(){
    return {
        index(req,res){
            res.render("studentLogin")
        }
    }
}


module.exports = studentLoginController