
module.exports.home =async function(req,res){
    try {
        return res.render('home',{
            title:"csv reader"
        });
    } catch (err) {
        console.log('error in rendering',err)
    }
}