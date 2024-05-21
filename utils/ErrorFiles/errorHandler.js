
var fs = require('fs');

    var toDate = new Date();
    const fname = toDate.toISOString().split('T')[0];
    
    // console.log(__dirname+"/"+fname+".txt");

exports.errorHandle = (errData)=>{
    
    const errMessage = String( new Date() +"\n"+ errData +"\n");

    fs.appendFile(__dirname+"/"+fname+".txt",errMessage,(err)=>{
        if(err){
            console.log(err);
        }
    });
};
