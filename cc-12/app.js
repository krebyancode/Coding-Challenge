class Triangle {
  constructor(len1, len2, len3) {
    this.len1 = len1;
    this.len2 = len2;
    this.len3 = len3;
  }

  checkTriangle() {
    if (this.len1 <= 0 || this.len2 <= 0 || this.len3 <= 0) {
      return `invalid triangle`;
    } else {
      if (
        this.len1 + this.len2 <= this.len3 ||
        this.len2 + this.len3 <= this.len1 ||
        this.len1 + this.len3 <= this.len2
      ) {
        return `invalid triangle`;
      } else {
        if (
          this.len1 == this.len2 &&
          this.len2 == this.len3 &&
          this.len1 == this.len3
        ) {
          return `Equilateral`;
        } else if (
          this.len1 == this.len2 ||
          this.len1 == this.len3 ||
          this.len2 == this.len3
        ) {
          return `Isosceles`;
        } else {
          return `Scalene`;
        }
      }
    }
  }

  calculatePerimeter() {
    if (this.checkTriangle() != `invalid triangle`) {
      return `P = ${this.len1 + this.len2 + this.len3} unit`;
    } else {
      return null;
    }
  }

  calculateArea() {
    // *calculated based on Heron's Formula:
    if (this.checkTriangle() != `invalid triangle`) {
      let s = (this.len1 + this.len2 + this.len3) / 2;
      let area = Math.pow(
        s * (s - this.len1) * (s - this.len2) * (s - this.len3),
        0.5
      ).toFixed(2);
      return `A = ${area} unit^2`;
    } else {
      return null;
    }
  }
}

// const newTriangle = new Triangle(3, 5, 4);
// console.log(newTriangle.checkTriangle());
// console.log(newTriangle.calculatePerimeter());
// console.log(newTriangle.calculateArea());

let calculateButton = document.getElementsByTagName("button")[0];

calculateButton.addEventListener("click", (e) => {
  let val_1 = parseInt(document.getElementById("length1").value);
  let val_2 = parseInt(document.getElementById("length2").value);
  let val_3 = parseInt(document.getElementById("length3").value);

  const createTriangle = new Triangle(val_1, val_2, val_3);

  document.getElementById("check").innerText = createTriangle.checkTriangle();
  document.getElementById("perimeter").innerText =
    createTriangle.calculatePerimeter();
  document.getElementById("area").innerText = createTriangle.calculateArea();
});
