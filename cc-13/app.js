function convertRoman(num) {
  let m_digit = parseInt(num / 1000);
  let remaining = num % 1000;
  let d_digit = parseInt(remaining / 500);
  remaining = num % 500;
  let c_digit = parseInt(remaining / 100);
  remaining = num % 100;
  let l_digit = parseInt(remaining / 50);
  remaining = num % 50;
  let x_digit = parseInt(remaining / 10);
  remaining = num % 10;
  let v_digit = parseInt(remaining / 5);
  remaining = num % 5;
  let i_digit = parseInt(remaining / 1);
  remaining = num % 1;

  let arr = [];
  if (num > 3000) {
    return `Number can not be over 3000`;
  }
  if (m_digit > 0) {
    for (let i = 0; i < m_digit; i++) {
      arr.push("M");
    }
  }
  if (d_digit > 0) {
    for (let i = 0; i < d_digit; i++) {
      arr.push("D");
    }
  }
  if (c_digit > 0) {
    if (c_digit - d_digit > 2) {
      if (d_digit == 0) {
        if (c_digit - d_digit > 3) {
          arr.push("C");
          arr.push("D");
        } else {
          for (let i = 0; i < c_digit; i++) {
            arr.push("C");
          }
        }
      } else {
        arr.pop();
        arr.push("C");
        arr.push("M");
      }
    } else {
      for (let i = 0; i < c_digit; i++) {
        arr.push("C");
      }
    }
  }
  if (l_digit > 0) {
    if (l_digit - c_digit > 2) {
      if (c_digit == 0) {
        if (l_digit - c_digit > 3) {
          arr.push("L");
          arr.push("C");
        } else {
          for (let i = 0; i < l_digit; i++) {
            arr.push("L");
          }
        }
      } else {
        arr.pop();
        arr.push("L");
        arr.push("D");
      }
    } else {
      for (let i = 0; i < l_digit; i++) {
        arr.push("L");
      }
    }
  }
  if (x_digit > 0) {
    if (x_digit - l_digit > 2) {
      if (l_digit == 0) {
        if (x_digit - l_digit > 3) {
          arr.push("X");
          arr.push("L");
        } else {
          for (let i = 0; i < x_digit; i++) {
            arr.push("X");
          }
        }
      } else {
        arr.pop();
        arr.push("X");
        arr.push("C");
      }
    } else {
      for (let i = 0; i < x_digit; i++) {
        arr.push("X");
      }
    }
  }
  if (v_digit > 0) {
    if (v_digit - x_digit > 2) {
      if (x_digit == 0) {
        if (v_digit - x_digit > 3) {
          arr.push("V");
          arr.push("X");
        } else {
          for (let i = 0; i < v_digit; i++) {
            arr.push("V");
          }
        }
      } else {
        arr.pop();
        arr.push("V");
        arr.push("L");
      }
    } else {
      for (let i = 0; i < v_digit; i++) {
        arr.push("V");
      }
    }
  }
  if (i_digit > 0) {
    if (i_digit - v_digit > 2) {
      if (v_digit == 0) {
        if (i_digit - v_digit > 3) {
          arr.push("I");
          arr.push("V");
        } else {
          for (let i = 0; i < i_digit; i++) {
            arr.push("I");
          }
        }
      } else {
        arr.pop();
        arr.push("I");
        arr.push("X");
      }
    } else {
      for (let i = 0; i < i_digit; i++) {
        arr.push("I");
      }
    }
  }

  return arr.join("");
}

console.log(convertRoman(8));
console.log(convertRoman(148));
console.log(convertRoman(457));
