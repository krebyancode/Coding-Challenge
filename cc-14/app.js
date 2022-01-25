function isValid(input) {
  const brackets = {
    openers: ["{", "[", "("],
    closers: ["}", "]", ")"],
  };

  const { openers, closers } = brackets;
  let arr = input.split("");

  if (arr.length % 2 != 0) {
    return false;
  }

  let flag = true;
  while (flag) {
    for (let i = 0; i < arr.length; i++) {
      if (openers.includes(arr[i]) && closers.includes(arr[i + 1])) {
        if (openers.indexOf(arr[i]) == closers.indexOf(arr[i + 1])) {
          arr.splice(i, 2);
          break;
        } else if (openers.indexOf(arr[i]) != closers.indexOf(arr[i + 1])) {
          flag = false;
        }
      }
    }
    if (arr.length == 0) flag = false;
  }
  if (arr.length == 0) return true;
  if (arr.length != 0) return false;
}

/* *** Tests *** */

let desc = "valid short code";
assertEqual(isValid("()"), true, desc);

desc = "valid longer code";
assertEqual(isValid("([]{[]})[]{{}()}"), true, desc);

desc = "mismatched opener and closer";
assertEqual(isValid("([][]}"), false, desc);

desc = "missing closer";
assertEqual(isValid("[[]()"), false, desc);

desc = "extra closer";
assertEqual(isValid("[[]]())"), false, desc);

desc = "empty string";
assertEqual(isValid(""), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
