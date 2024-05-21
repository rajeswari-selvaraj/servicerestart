var xlsx = require('node-xlsx');
var fs = require('fs');
const { NOW } = require('sequelize');
var obj = xlsx.parse(__dirname + '/utils/xlsxFile/Test1.xlsx'); // parses a file
var rows = [];
var writeStr = "";

//  let date = new Date();

//  var dt =date.toISOString().split('T')[0];
// console.log(dt);
//looping through all sheets
for(var i = 0; i < obj.length; i++)
{
    var sheet = obj[i];
    //loop through all rows in the sheet
    for(var j = 0; j < sheet['data'].length; j++)
    {
            //add the row to the rows array
            // rows.push(sheet['data'][j]);

            writeStr += (sheet['data'][j]).join(",") + "\n";
    }
    
    //  console.log(__dirname+"/utils/xlsxFile/test"+[i]+".csv");
    fs.writeFile(__dirname + "/utils/xlsxFile/test"+[i]+".csv", writeStr, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("csv was saved in the current directory!");
    });
    
    writeStr = "";
}

//creates the csv string to write it to a file
// for(var i = 0; i < rows.length; i++)
// {
    
//     writeStr += rows[i].join(",") + "\n";
//     console.log(writeStr)
// }

// //writes to a file, but you will presumably send the csv as a      
// //response instead
// fs.writeFile(__dirname + "/utils/test.csv", writeStr, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("test.csv was saved in the current directory!");
// });