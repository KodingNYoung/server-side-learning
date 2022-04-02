module.exports = (r, callback) => {
  console.log("Solving for circle with r = " + r);
  if (r <= 0) {
    setTimeout(
      () =>
        callback(new Error("Circle radius should be greater than zero"), null),
      2000
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          area: () => Math.PI * r * r,
          perimeter: () => 2 * Math.PI * r
        }),
      2000
    );
  }
};
