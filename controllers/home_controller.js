const csvjson = require('csvjson');
const fs = require('fs');
const path= require('path');

const options = {
    delimiter : ',' , // optional
    quote     : '"' // optional
};

module.exports.home =async function(req,res){
    try {
        return res.render('home',{
            title:"csv reader"
        });
    } catch (err) {
        console.log('error in rendering',err)
    }
}


module.exports.reader = async function(req,res){
    try {
        // if(fs.existsSync(path.join(__dirname,'../assets/uploads/rev.csv'))) {
        //     fs.unlinkSync(path.join(__dirname,'../assets/uploads/rev.csv'));
        // }
        
        var file_data = fs.readFileSync(path.join(__dirname,'../assets/uploads/rev.csv'), { encoding : 'utf8'});
        // console.log(file_data);
        var result = csvjson.toObject(file_data, options);
        // console.log(result); //Converted json object from csv data
        return res.status(200).json({
            message:"request succesfull",
            data:{
            result:result
            }
        })
        return res.render('home',{

            result:result
        });
        // res.header("Content-Type",'application/json');
        // res.send(JSON.stringify(result));
        // return res.status(200).json({
        //     message:'successfull',
        //     data:{
        //         result:result
        //     }
        // })
    } catch (err) {
        console.log('error in rendering',err)
    }
}