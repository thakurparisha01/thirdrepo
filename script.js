
// type of functions
// bracket and dot notation

// hoisting

// function declaration
// console.log(calculateAge(2000))
// function calculateAge(age){
//     return 2024 - age;
// }

// function as an expression
// const calculateAge = function(age){
//     return 2024-age;
// }
// console.log(calculateAge(2000));

// arrow function
// const calculateAge = (age) => 2024-age;
// console.log(calculateAge(2000))

// string methods
// const str1 = "hello,world,javascript";
// console.log(str1.at(1));
// console.log(str1.charAt(1));
// console.log(str1.charAt(1))
// console.log(str1.concat("is very great place"));
// console.log(str1.endsWith("b"))
// console.log(str1.startsWith("T"))
// console.log(str1.padStart(30));
// console.log(str1.repeat(10))
// console.log(str1.replace("e", "a"))
// console.log(str1.replaceAll("l", "o"))
// console.log(str1.split(","));
// console.log(str1.toLocaleUpperCase())
// console.log(str1.toLocaleLowerCase());
// console.log(str1.trim())
// console.log(str1.trimStart())
// console.log(str1.trimEnd())


// const string = ' tictactoez-playwayschool';
// console.log(string.at(6));
// console.log(string.concat("school"));
// console.log(string.endsWith(" "));
// console.log(string.startsWith("t"));
// console.log(string.padStart(15));
// console.log(string.repeat(10));
// console.log(string.replace('t','a'));
// console.log(string.replaceAll('t','a'));
// console.log(string.split("-"));
// console.log(string.toLocaleUpperCase());
// console.log(string.toLocaleLowerCase());
// console.log(string.trim());


// console.log(string.length)
// console.log(string.trimStart().length);

// ATM Machine
// document.querySelector(".btn").addEventListener('click', (event) => {
 
// const element = document.querySelector("#ptag");
// console.log(element)

// if(element.style.display === ""  || element.style.display === "block")
//     element.style.display = "none"

// else if(element.style.display === "none")
//     element.style.display = "block";

// else
//   console.log("error")
// })

// Exception handling

// try/catch finally throw new error

// basic division by zero
try{
  const arr = [1,2,3,4,5];
  console.log(arr[10]);
}catch(err){
  console.log(err);
}

function divide(a,b){
  try{
    if(b===0) throw new console.Error("cannot divide");
    return a/b;
   }catch(err){
    console.error(err.message);
   }
}
function calculateAge(age){
  try{
   if(age<18) throw new console.Error("age is les then 18")
  }catch(err){
    console.log("invalid age")
  }
}
calculateAge(14);
 try{
const a = null
console.log(a.length)
}catch(err){
  console.error(err)
}





