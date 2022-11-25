function staffHomeController(){
    return {
        index(req,res){
            res.render("staffHome")
        }
    }
}


module.exports = staffHomeController