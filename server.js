const rect = require("./rectangle");
const circle = require("./circle");

const solveRect = (l, b) => {
  rect(l, b, (err, res) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else if (res) {
      console.log(
        "The area of rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          res.area()
      );
      console.log(
        "The perimeter of rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          res.perimeter()
      );
    }
  });
};

const solveCircle = r => {
  circle(r, (err, res) => {
    if (err) {
      console.log("Error: ", err.message);
    } else if (res) {
      console.log(
        "The area of circle of radius r = " + r + " is " + res.area()
      );
      console.log(
        "The perimeter of circle of radius r = " + r + " is " + res.perimeter()
      );
    }
  });
};

console.log("-----------RECT-------------");
solveRect(4, 2);
solveRect(7, 3);
console.log("----------CIRCLE------------");
solveCircle(7);
console.log("-------Async Replies--------");
