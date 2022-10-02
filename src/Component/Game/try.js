// const express = require('express');
// const bodyParser = require('body-parser');
// var connection  = require('express-myconnection'); 
// var mysql = require('mysql');


// const app = express(); 
// app.use(bodyParser.json());

// app.use(

//         connection(mysql,{

//             host: 'localhost', //'localhost',
//             user: 'root',
//             password : '',
//             port : 3306, //port mysql
//             database:'Webnart'

//         },'pool')); //or single

//        app.post('../Credencials/HomeLogin.jsx',(req,res)=>{

//         let {username,password,re_password} = req.body;


//         if(!username) return res.status(400).json('Book Name cant be blank');
//         if(!password) return res.status(400).json('Password cant be blank');
//         if(!re_password) return res.status(400).json('Password cant be blank');

//         var data={username:username,
//             password:password,
//             re_password:re_password
//         };


//          var query = connection.query("INSERT INTO Databse set ? ",data, 
//         function(err, rows)
//         {

//           if (err){
//             //If error
//               res.status(400).json('Sorry!!Unable To Add');
//               console.log("Error inserting : %s ",err );
//              }
//          else
//           //If success
//           res.status(200).json('Book Added Successfully!!')

//         });


//         });


//          app.listen(3000, ()=> {
//       console.log(`app is running on port 3000`);
// });





// sort alpha numeric array?----------------------------------------------------
// var reA = /[^a-zA-Z]/g;
// var reN = /[^0-9]/g;

// function sortAlphaNum(a, b) {
//   var aA = a.replace(reA, "");
//   var bA = b.replace(reA, "");
//   if (aA === bA) {
//     var aN = parseInt(a.replace(reN, ""), 10);
//     var bN = parseInt(b.replace(reN, ""), 10);
//     return aN === bN ? 0 : aN > bN ? 1 : -1;
//   } else {
//     return aA > bA ? 1 : -1;
//   }
// }


//Sort int char array-----------------------------------------------

// const array =[10,23,'s',1,3,'d',6,'a',0]
// const num=[];
// const str=[];
// array.sort()
// for(let i =0;i<array.length;i++){
//   if(typeof(array[i])=="number"){
//     num.push(array[i])
//   }
//   else{
//     str.push(array[i])
//   }
// }
// num.sort(function (a,b) {
//   return a - b; // Ascending
//   // return b - a; // descending
// });
// console.log(num.concat(str))

// Experiment----------------------------------

// const temp=[3,1,6,2,8,0];
// temp.sort(function(a,b){
//   console.log(a+"----->"+b)
//   return b-a;
// })

// 1----->3
// 6----->1
// 6----->3
// 2----->3
// 2----->1
// 8----->3
// 8----->6
// 0----->3
// 0----->2
// 0----->1

// 1----->3
// 6----->1
// 6----->1
// 6----->3
// 2----->3
// 2----->1
// 8----->2
// 8----->3
// 8----->6
// 0----->3
// 0----->1

//sum of n number recursin?
// function sum(n) {
//     return n && n  + sum(n - 1);
// }

// console.log(sum(25));

// function sum(n) {
//     if (n < 1) return 0;    // exit condition
//     return n  + sum(n - 1); // return value plus result of recursive call
// }

// console.log(sum(25));



// let n=25;
// var sum=0;

// for(let i =0;i<=n;i++){
//   sum+=i;
//   // console.log(sum)
// }
// console.log(sum)


// Frequency--------------------------------


// let array= 'Rohan shashank-chaurasia Rohan Vishal-pal javascript shashank-chaurasia Python Java Python Java javascript'
// let result = array.split(" ")
// const dupli=[];

// for(let i =0;i<result.length;i++){
//     if(!dupli.includes(result[i])){
//       dupli.push(result[i]);
//       result.shift();
//     }
// }


// for (let i = 0; i < result.length; i++) {
//   for (let j = i; j < result.length; j++) {
//     if (!dupli.includes(result[i]) && result[i] !== result[j]) {
//         dupli.push(result[i]) 
//     }
//   }
// }

// let mainResult = []

// for (let i = 0; i < dupli.length; i++) {
//     let count = 0;
//     for (let j = 0; j < result.length; j++) {
//         if (dupli[i] === result[j]) {
//             count++;
//         }
//     }
//     let temp = {
//         "name": dupli[i],
//         "count": count
//     }
//     mainResult.push(temp)
// }

// console.log(mainResult)



//Abrivation of Name


const name = ["Rohan kumar sharma", "Orange Shashank chaurasia", "Apple Vishal pal", "Vishal Pal"];

for (let i=0 ; i< name.length;i++){
    const str = name[i].split(" ");
    console.log(str);
    let avb1 = str[0].charAt(0);
    let avb2 = str[1].charAt(0);
    if(str[2]!==undefined){
        console.log( avb1+". "+avb2+". "+ str[2]);
    }
    else{
        console.log( avb1+". "+str[1]);
    }
  
}

