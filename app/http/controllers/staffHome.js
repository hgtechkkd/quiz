function profileController(){
    return {
        index(req,res){
            res.render("staffHome")
        }
    }
}


module.exports = profileController