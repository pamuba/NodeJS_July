// var fs = require('fs')
//async
// fs.readFile('TestFiles.txt','utf-8', function(err, data){
//     if(err)
//         throw err;
//     console.log(data)
// })

//sync
// var fs = require('fs')
// try{
//     var data = fs.readFileSync('TestFiles.txt','utf-8')
// }
// catch(err){
//     console.log(err.message)
// }
// console.log(data)


//write async
// var fs = require('fs')

// var data = "When the controller function is executed, it gets the special $scope object as a parameter. ";
// fs.writeFile('test.txt', data , function(err){
//         if(err)
//             throw err;
//         else
//             console.log("Write Operation Completed")
// })

///append

// var fs = require('fs')

// var data = "When the controller function is executed, it gets the special $scope object as a parameter. ";
// fs.appendFile('test1.txt', data , function(err){
//         if(err)
//             throw err;
//         else
//             console.log("Write Operation Completed")
// })


// var fs = require('fs')
// const util = require('util')
// const read = util.promisify(fs.readFile)

// var run = async() =>{
    //Promise
    // read('test1.txt',)
    //     .then(data => {
    //         console.log(data.toString());
    //     })

    //async/ await
    // try{
    //     const data = await read('test1.txt')
    //     console.log(data.toString());
    // }
    // catch(err)
    // {
    //     console.log(err)
    // }
// }

// run();

var fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

var run = async() => {
    //Promise version
    Promise.all([read('data1.txt'),read('data2.txt'),read('data3.txt')]).then(
        (data) => {
            const[data1, data2, data3] = data
            console.log(data1.toString())
            console.log(data2.toString())
            console.log(data3.toString())
        }
    );
    //async/ await vwersion
    const[data1, data2, data3] = await Promise.all([
        read('data1.txt'),read('data2.txt'),read('data3.txt')
    ]);
    console.log(data1.toString())
    console.log(data2.toString())
    console.log(data3.toString())
}
run();