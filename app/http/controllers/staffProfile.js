function staffProfileController(){
    return {
        index(req,res){
            res.render("staffProfile")
        }
    }
}


module.exports = staffProfileController