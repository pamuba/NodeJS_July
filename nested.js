var fs = require("fs");
// fs.mkdir("Test", function(){
//     fs.readFile("data1.txt", "utf-8", function(err, data){
//         fs.writeFile("./Test/newFile.txt", data, function(err){

//         })
//     })
// })

fs.unlink('./Test/newFile.txt', function(){
    fs.rmdir("Test", function(err){
        if(err)
            console.log(err)
        else
            console.log("Deleted")
    })
})

//slice