// Define a function named leapyear that takes a year as a parameter
const leapyear = (year) => {
   // Use the ternary operator to check if the year is a leap year
   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};
// Test the function with sample years
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
