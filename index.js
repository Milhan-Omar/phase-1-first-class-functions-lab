// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(riders){
 return riders.slice(0, 2);
}
// console.log('====================================');
// console.log(returnFirstTwoDrivers());
// console.log('====================================');
function returnLastTwoDrivers(riders){
 return riders.slice(-2, riders.length);
}
// console.log('====================================');
// console.log(returnFirstTwoDrivers(drivers));
// console.log(returnLastTwoDrivers(drivers));
// console.log('====================================');
// function selectingDrivers(){
//  return returnFirstTwoDrivers()
// }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// console.log('====================================');
// console.log(selectingDrivers[0]());
// console.log('====================================');
// console.log('====================================');
// console.log(selectingDrivers[1]());
// console.log('====================================');

let fareMultiplier ;

function createFareMultiplier(num) {
  return function () {
     return num * num
  }
}
// console.log('====================================');
// console.log(createFareMultiplier(5));
// console.log('====================================');
// fareMultiplier = createFareMultiplier(5);
// console.log('====================================');
// console.log(fareMultiplier(5));
// console.log('====================================');
 function fareDoubler(num){
  return num * 2;
 }
 function fareTripler(abz){
  return abz * 3;
 }  

 const selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers);
 };
//  console.log('====================================');
// console.log(selectDifferentDrivers[0]());
// console.log('====================================');
console.log('====================================');
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log('====================================');
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
console.log('====================================');
