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

  let digitValues = [
    m_digit,
    d_digit,
    c_digit,
    l_digit,
    x_digit,
    v_digit,
    i_digit,
  ];
  let digitLetters = ["M", "D", "C", "L", "X", "V", "I"];
  let conversionArray = [];

  if (num > 3000) {
    return `number can not be over 3000`;
  }
  if (digitValues[0] > 0) {
    for (let i = 0; i < digitValues[0]; i++) {
      conversionArray.push(digitLetters[0]);
    }
  }
  if (digitValues[1] > 0) {
    for (let i = 0; i < digitValues[1]; i++) {
      conversionArray.push(digitLetters[1]);
    }
  }
  for (let i = 2; i < digitValues.length; i++) {
    if (digitValues[i] > 0) {
      if (digitValues[i] - digitValues[i - 1] > 2) {
        if (digitValues[i - 1] == 0) {
          if (digitValues[i] - digitValues[i - 1] > 3) {
            conversionArray.push(digitLetters[i]);
            conversionArray.push(digitLetters[i - 1]);
          } else {
            for (let j = 0; j < digitValues[i]; j++) {
              conversionArray.push(digitLetters[i]);
            }
          }
        } else {
          conversionArray.pop();
          conversionArray.push(digitLetters[i]);
          conversionArray.push(digitLetters[i - 2]);
        }
      } else {
        for (let j = 0; j < digitValues[i]; j++) {
          conversionArray.push(digitLetters[i]);
        }
      }
    }
  }

  return conversionArray.join("");
}

console.log(convertRoman(8));
console.log(convertRoman(148));
console.log(convertRoman(457));
