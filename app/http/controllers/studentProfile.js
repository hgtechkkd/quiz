function studentProfileController(){
    return {
        index(req,res){
            res.render("studentProfile")
        }
    }
}


module.exports = studentProfileController