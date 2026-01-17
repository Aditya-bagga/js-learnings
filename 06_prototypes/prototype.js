// prototype:

// const arr = [1,2,3]
// arr.fill

// const str = "aditya"

// str.length

// const obj = {x:1}
// obj.x
// dot operator object ke properties ko access krne me help krta h
// then how dots are working everyhwere 

// here comes prototypes.....

// array have functions already defined like .map , .forEach,,,,,,
// so if we create an array so these fn are available 
//const arr = [] , then js creates arr.prototype and gives a copy of all predefined function there 
// then we can access all function -> arr. -> js checks which functions are available(arr.__proto__)

// now if we create string  const str = "hiii" , now in prototype of str have all predefined functions
//of string then we can str. 
// Array.prototype = {properties} ... (base class)
// creating an array object => const arr = [] now js creates a arr.__proto__ = Array.prototype
//now all array properties are available in arr

//eg.- > Father{skin ,height, eyeColor}
//child{} will have all such properties similarly Father.prototype = {} and if we create a child
//child.__proto__ = Father.prototype

//String.prototype = {}
// const str = "adi"
//str.__proto__ = String.prototype
// all properties with String is available to child classes as well ......


// str.length => js checks str.length? -> we didnt then js will got to str.__proto__.length = 6 

// Array.prototype.adi = function(){ console.log("hahahah")}
//const arr =[1,23,4] 
//arr.adi() ->hahahahah we added a custom function 

//array ke proto ke andre .map function kisne likha??? 
// chrome ka JS engine unke devellopers they wrote Array.prototype = {} 
// same with other browsers as well 

// if(!Array.prototype.fill) throw new Error('please update your brpwser')

// or if(!Array.prototype.fill){ // means if your browser doesnt have that feature of fil for array then use ours
//fallback - polyfill function
// Array.prototype.fill = function(){
//}
//   }



const arr = [1,2,3,4,5,6]

//Errror : .map function doesnt exist on arr variable

// Real signature ko samjho : no return , function input , value , index 
//calls m fn for every value


if(!Array.prototype.myForEach){
    Array.prototype.myForEach= function(userFunction){
        const orignalArr = this //current object ki taraf point 

        for (let i =0 ; i<orignalArr.length ; i++){
                userFunction(orignalArr[i],i)
        }
    }
}



// const ret =arr.myForEach(function(value,index){
//     console.log(`My value at Index is ${index} is ${value}`);
    
// })
// console.log(ret);


//signature .map:
//return array , Each element iterate , userfn


// const n = arr.map((e)=> e*2)
// console.log(n)

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const orignalArr = this;
        const newArr = []
        for(let i=0 ; i<this.length ; i++){
            newArr.push(userFn(orignalArr[i]))
        }
        return newArr
    }
}
// const n = arr.myMap((e)=> e*2)
// console.log(n)



//filter ::
//signature : return new array , input : user function  
// if function returens true current value ko new array me include 
// const n3 = arr.filter((e)=>e%2==0);
// console.log(n3);


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const newArr=[]
        const orignalArr = this
        for (let i=0 ; i <this.length ; i++){
            if(userFn(orignalArr[i])){
                newArr.push(orignalArr[i])
            }
        }
        return newArr;
    }
}

const n3 = arr.myFilter((e)=>e%2==0);
 console.log(n3);
 //.js polyfill library

 