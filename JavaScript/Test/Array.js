
const numbers = [12, 18, 45, 23, 98, 76, 56, 90, 84, 68];


numbers.forEach(number => {
  if (number > 50) {
    console.log(number);
  }
});
let a =[];
let fil=numbers.filter(number => {
    if (number > 50) {
    //   console.log("==",number);
    return a.push(number)
    }
  });
  console.log("fil",  a)