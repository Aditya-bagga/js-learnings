const { useReducer } = require("react");

const coding = ["js" ,"ruby" ,'python']

const values=coding.forEach((item)=>{
        // console.log(item);  // for each doesnt return value....
        // return item
    })

// console.log(values);  //still undefined



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=>{ // or (num)=> num>4 
//     return num>4
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach( (num)=>{
//     if(num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [ 
    {
        title : 'book one' , genre :'fiction' ,publish : 1981 , edition : 2004
    },
    {
        title : 'book two' , genre :'Non-fiction' ,publish : 1981 , edition : 2004
    },
    {
        title : 'book three' , genre :'history' ,publish : 1981 , edition : 2004
    },
    {
        title : 'book four' , genre :'history' ,publish : 1981 , edition : 2004
    },
    {
        title : 'book five' , genre :'fiction' ,publish : 1981 , edition : 2004
    }
];

const userBooks = books.filter( (bk)=> bk.genre =="history")


console.log(userBooks);


