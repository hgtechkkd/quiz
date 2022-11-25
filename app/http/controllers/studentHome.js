function studentHomeController(){
    return {
        index(req,res){
            res.render("studentHome")
        }
    }
}


module.exports = studentHomeController