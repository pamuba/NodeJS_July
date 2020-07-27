// var fs = require("fs");
// fs.readFile("test.txt", "utf-8", function (err, data) {
//   if (er) console.log(er);
//   else {
//       fs.writeFile("testCopy.txt", data, function (er) {
//       if (er) console.log(er);
//       else console.log("File Created Successfully");
//     });
//   }
// });

var fs = require("fs");
// fs.unlink("testCopy.txt", function(err){
//     if(err)
//         console.log(err)
//     else
//         console.log("Deleted")
// })

//create dir sync
// fs.mkdirSync('newDir')

//remove dir
fs.rmdirSync('newDir')
