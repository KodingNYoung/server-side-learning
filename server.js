const rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y
};
const solveRect = (l, b) => {
  console.log("Solving for rectange with l = " + l + " and b = " + b);
  if (l <= 0 || b <= 0) {
    console.log("Rectangle dimensions should be greater than zero");
  } else {
    console.log("Area of the rectangle is: " + rect.area(l, b));
    console.log("Perimeter of the rectangle is: " + rect.perimeter(l, b));
  }
};
solveRect(4, 2);
solveRect(7, 3);
solveRect(0, 13);
