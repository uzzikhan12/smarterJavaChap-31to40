//  chapter 31 - 34 (date % time)

// q1
// var dObj = new Date();


// q2
// var dObj = new Date();
// var dStr = dObj.toString();
// console.log(dStr);


// q3
// var d = new Date();
// var day = d.getDay();
// console.log(day);


// q4
// var d = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var dayIndex = d.getDay();
// alert("Today is " + dayNames[dayIndex] + " (Index: " + dayIndex + ")");


// q5
// var dObj = new Date();

// var year = dObj.getFullYear();
// console.log("Year = ",year);

// var month = dObj.getMonth();
// console.log("month = ",month);

// var day = dObj.getDay();
// console.log("day = ",day);

// var date = dObj.getDate();
// console.log("date = ",date);

// var hours = dObj.getHours();
// console.log("hourse = ",hours);

// var minutes = dObj.getMinutes();
// console.log("minutes = ",minutes);

// var sec = dObj.getSeconds();
// console.log("second = ",sec);

// var miliSec = dObj.getMilliseconds();
// console.log("miliSecond = ",miliSec);


// q6
// var later = new Date(2020, 11, 31);


// q7
// var later = new Date(1992, 01, 02);


// q8
// var dObj = new Date();
// var miliSec = dObj.getTime()

// var oDate = new Date (1980, 0, 1);
// var oMilliSec = oDate.getTime();

// alert(miliSec - oMilliSec);


// q9
// var dObj = new Date("2000-1-1");
// var newYear = new Date(dObj);
// newYear.setFullYear(2000);
// console.log(newYear);


// // q10
// function chMonth(x){
//     var modiDate = new Date(x);
//     modiDate.setMonth(0);

//     return modiDate;
// }

// var changeMonth = chMonth(2023-7-10);
// console.log(changeMonth);


//q11
// function changeDayOfWeek(inputDate, newDay) {
//     if (newDay < 0 || newDay > 6) {
//         console.error('Invalid day of the week.');
//         return;
//     }
//     var modifiedDate = new Date(inputDate);
//     var dayDifference = newDay - modifiedDate.getDay();
//     modifiedDate.setDate(modifiedDate.getDate() + dayDifference);

//     return modifiedDate;
// }
// var originalDate = new Date('2022-01-13');
// var newDate = changeDayOfWeek(originalDate, 4);

// console.log('Original Date:', originalDate.toDateString());
// console.log('Modified Date:', newDate.toDateString());


// q12
// function changeMinutes(inputTime) {
//     var modifiedTime = new Date(inputTime);
//     var newMinutes = prompt('Enter the new value for minutes:');
    
//     if (isNaN(newMinutes)) {
//         console.error('Invalid input. Please enter a valid number for minutes.');
//         return;
//     }
//     modifiedTime.setMinutes(parseInt(newMinutes, 10));
//     return modifiedTime;
// }
// var originalTime = new Date();
// var newTime = changeMinutes(originalTime);

// console.log('Modified Time:', newTime.toTimeString());


// q13
// function changeHours(inputTime) {
//     var modifiedTime = new Date(inputTime);
//     var newHours = prompt('Enter the new value for minutes:');
    
//     modifiedTime.setHours(parseInt(newHours, 10));
//     return modifiedTime;
// }
// var originalTime = new Date();
// var newTime = changeHours(originalTime);

// console.log('Modified Time:', newTime.toTimeString());


// q14
// function ageCalc(userAge){
//     var currDate = new Date();
//     var year = currDate.getFullYear();
    
//     var userAge = prompt("enter your age");
//     var res = year - userAge;
//     return res;
// }

// console.log(ageCalc())



// chapter 35 - 37 (function) 

// q1
// function check(){
//     alert("hello");
// }
// check();


// q2
// function askName(){
//     var userName = prompt("enter name");
// }
// askName();


// q3
// function otherFunction(){
//     check();
//     askName();
// }
// otherFunction();


// q4
// function askName(){
//     var userName = prompt("enter name");
//     alert(userName);
// }
// askName();


// q5
// function concat(var1,var2,var3){
// }
// var checkVar = "hello";
// var str = "world";
// var num = 10;
// concat(checkVar,str,num);


// q6
// function concatenateAndAssign(param1, param2) {
//     var result = param1 + param2;
//     console.log("Concatenated Result:", result);
//     return result;
//   }
//   var parameter1 = "Hello";
//   var parameter2 = "World";
//   var concatenatedResult = concatenateAndAssign(parameter1, parameter2);
  

// q7
// function multiply(x,y,z){
//     var res = x * y * z;
//     return res;
// }
// console.log(multiply(2 , 2 , 2));


// q8
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;  
//       }
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
//   }
//   const numbersArray = [1, 2, 3, 4, 5];
//   const result = calculateAverage(numbersArray);
//   console.log(result);
  

// q9
// function calcSum(x,y){
//     return x + y;    
// }
// console.log(calcSum(10,12));


// q10
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return null;
//     }
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
//   }
//   const numbersArray = [1, 2, 3, 4, 5];
//   const result = calculateAverage(numbersArray);
//   console.log(result);
  

// q11
// const numbersArray = [1, 2, 3, 4, 5];
// const averageResult = calculateAverage(numbersArray);
// console.log(averageResult);


// q12
// function countLetter(x){
//     var a = prompt("Type a word");
//     for(var i = 0; i < a.length; i++){
//         console.log(i.length);
//     }
//     return a;
// }
// console.log(countLetter());



// q13
// function setYearInDate(originalDate, newYear) {
//     const modifiedDate = new Date(originalDate);
//     modifiedDate.setFullYear(newYear);
//     return modifiedDate;
//   }
//   const newYear = 2023;  
//   const newDate = setYearInDate(newYear);
//   console.log("Modified Date with new year:", newDate);
  

// q14
// function ageCalc(dateOfbirth){
//     var a = new Date();
//     var b = a.getFullYear();

//     var userAge = new Date(dateOfbirth)
//     var year = userAge.getFullYear();
//     var age =  b - year;
//     console.log(age);
// }
// ageCalc("2001-11-11")


// q15
// function name(x){
//     var arr = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];

//     for(var i = 0; i < arr.length; i++){
//         a[i] = a[i].split(" ");
//     }
//     var a = prompt("Enter name");
//     console.log(a = arr);
// } 
// name(x);


// q16
// function repeat(){
//     var a = "abcde";
//     a = a.repeat(10);
//     console.log(a);
// }
// repeat()


// q17
// function reverse(){
//     var arr = ["a","b","c","d","e","f","g"]
//     var a = arr.reverse();
//     console.log(a)
// }
// reverse();


// q18
// function rNum(x){
//     var a = x.toString().split("").reverse().join("");
//     return a;
// }
// var res = rNum(32246);
// console.log(res)


// q19
// function word(x){
//     var a = x.toString().split("").reverse().join("");

//     if(x == a){
//         console.log("this is p");
//     }else{
//         console.log("this is not p");
//     }
// }
// word("mada");


// q20
// function fCap(x){
//     var a = x.split(" ");
//     console.log(a);

//     for(var i = 0; i < a.length; i++){
//         a[i] = a[i].slice(0,1).toUpperCase() + a[i].slice(1).toLowerCase();
//     }
//     a = a.join(" ");
//     return a;

// }
// console.log(fCap('the quick brown fox'))


// q21
// function checkNum(){
//     a = Math.max(1,2,3,4,5)
//     console.log(a);
        
//     b = Math.min(1,2,3,4,5);
//     console.log(b);
// }
// console.log(checkNum());
    


// chapter#38(local vs. global variables)

// q1
// function demonstrateLocalVariable() {
//     const message = "Hello, local variable!";
//     console.log(message);
//   }
//   demonstrateLocalVariable();
  

// q2
// Global variable
// const globalMessage = "Hello, global variable!";
// function accessGlobalVariable() {
//   console.log(globalMessage);
// }
// accessGlobalVariable();



// Chapter#39-40 (Switch Statements)

// q1
// function performActionBasedOnVariable(value) {
//     switch (value) {
//       case 'Case1':
//         console.log('Performing action for Case 1');
//         break;
//       case 'Case2':
//         console.log('Performing action for Case 2');
//         break;
//       case 'Case3':
//         console.log('Performing action for Case 3');
//         break;
//       default:
//         console.log('Default action');
//     }
//   }
//   const variableValue = 'Case2';
//   performActionBasedOnVariable(variableValue);
  

// q2
// function checkCityName(cityName) {
//     switch (cityName) {
//       case 'New York':
//         alert('User is in New York');
//         break;
//       case 'London':
//         alert('User is in London');
//         break;
//       case 'Tokyo':
//         alert('User is in Tokyo');
//         break;
//       default:
//         alert('City not recognized');
//     }
//   }
//   const userCity = prompt('Enter your city name:');
//   checkCityName(userCity);
  