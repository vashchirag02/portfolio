console.log("chirag");
console.log("i love sketching");
fullName="chirag vashisth";
console.log(fullName);
age="21";
console.log(age);
x=null;
y=undefined;
isfollow=true;
console.log(isfollow);
console.log(y);
let a=7;
let b=2;
console.log("a =", a,"&b =", b)
console.log("a+b =" ,a+b);
console.log("a-b =" ,a-b);
console.log("a*b =" ,a*b);
console.log("a/b =" ,a/b);
//comparison operators
//logical operators
console.log("!(a>b)",!(a>b))
//conditional statements
var age = 24;

if(age >= 18){
    console.log("you van vote");
}
// ternary operator
let result = age >=18 ?"adult" : "not adult";
console.log(result);
// alert one time pop up
// prompt pop up with inpuut message
prompt("what is your name?");
var num= prompt("enter a number:");
if( num %5 == 0){
    console.log(num,"is a multiple of 5");
}
else {
    console.log(num,"is not a multiple of 5");
}
let num=prompt ("enter the number");
if(num>=90 && num<=100){
    console.log("A grade")
}
else if(num>=70  && num<=89){
    console.log("B grade")
}
else if(num>=60  && num<=69){
    console.log("C grade")
}
else if(num>=50  && num<=59){
    console.log("D grade")
}
else if(num<50  && num<=0){
    console.log("F grade")
}
