const marksMass = 78;
const johnsMass = 92;
const marksHeight = 1.69;
const johnsHeight = 1.95;
const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
const markHigherBMI = marksBMI > johnsBMI;
console.log(johnsBMI, marksBMI);
console.log(markHigherBMI);
// Challenge 2
if (johnsBMI > marksBMI) {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
} else {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
}
