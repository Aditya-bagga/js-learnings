// most used in arrays for each

const coding = ["js" , "ruby" ,"java" ,"python" ,"cpp"]

// coding.forEach( function (item){
//     console.log(item);
    
// })

// coding.forEach( (item)=>{
//     console.log(item);
    
// })


function printme(item){
    console.log(item);
    
}

// coding.forEach(printme); //function reference required not execution

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    

// })



const myCoding  = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName :"java"
    }
,
{
    languageName:"python",
    languageFileName:"py"
}
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})