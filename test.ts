// let str1 = "asd";
// var str2 = '"123"';
// const str3 = `""`;

// const strDiffCase = "qweRTYasdFg sfgF";
// const lowerCase = strDiffCase.toLowerCase();

// console.log(strDiffCase.toLocaleLowerCase());
// console.log(strDiffCase);
// console.log(lowerCase);

// console.log(strDiffCase.toLocaleUpperCase());

// const concatResult = str1 + str2 + str3;
// const concatResult2 = "".concat(str1, str2, str3);
// const concatResult3 = str1.concat(str2, str3);
// const concatResult4 = `Result of concat: ${str1}; ${str2}; ${str3} the end`;

// console.log(str1 + str2 + str3);
// console.log("".concat(str1, str2, str3));
// console.log(str1.concat(str2, str3));
// console.log(`Result of concat: ${str1}; ${str2}; ${str3} the end`);

// const split1 = "1 2 3 4 5";
// const split2 = "one two three one two five one fiveone";
// const split3 = "123456";
// const splitRes = "".split("");
// console.log(split1.split(" "));
// console.log(split1.split(" ").length);
// console.log(split2.split("one"));
// console.log(split3.split(""));
// console.log(split2.split(""));

// const strRepeat = "100";
// const strRepeatRes = strRepeat.repeat(3);
// console.log(strRepeatRes);

// const strChar = "123456789";
// const char = strChar.charAt(4);
// console.log(char);
// console.log(strChar[6]);

// const strIncl = "123456789";
// const boolRes = strIncl.includes("");
// console.log(strIncl.includes("4"));
// console.log(strIncl.includes("0"));
// console.log(strIncl.includes("45"));
// console.log(strIncl.includes("44"));
// console.log(strIncl.includes(split3));

const indexOfStr = "asethbdtfvstcsvrjyd bthvsbrg";

// console.log(indexOfStr.indexOf(" "));

// const oneIndex = indexOfStr.indexOf("1");

// if (oneIndex != -1) {
//   indexOfStr[oneIndex];
// } else {
// }

// let index = indexOfStr.indexOf("b", 0);

// while (index != -1) {
//   console.log(index);
//   index = indexOfStr.indexOf("b", index + 1);
// }

// let index1 = 0;
// do {
//   index1 = indexOfStr.indexOf("b", index1);
//   console.log(index1);
//   index1++; //index = index + 1;
// } while (index1 != 0);

let index2 = 0;
do {
  index2 = indexOfStr.indexOf("b", index2);
  if (index2 != -1) {
    console.log(index2);
    index2++; //index = index + 1;
  } else break;
} while (true);

console.log("1234".startsWith("1234"));
// const result = "123456789".slice(2, 4);
// console.log("123456789".slice(undefined, 4));
// console.log("123456789".substring(2, 40));
// console.log("         123456789          ".trim());

// let strWithSpaces = "         1234567891          ";
// while (strWithSpaces.includes("1")) {
//   strWithSpaces = strWithSpaces.replace("1", "!");
// }
// console.log(strWithSpaces);
// console.log(strWithSpaces.replaceAll(" ", "!"));

// const number = Infinity;
// let und: any;
// und = ""
// und = 123
// console.log(123456789 ** 2);
// console.log(undefined);
// let numb: undefined[] = [undefined, und, undefined, undefined];
// const typeOf = typeof numb;
// console.log("         1234567891          ".replace("1", "!"));
// let numb = 0;
// // if (isNaN(numb)) {
// //   console.log(false);
// // } else {
// //   console.log(true);
// // }

// const str1 = `${numb}`;
// const str2 = "" + numb;
// const str3 = String(numb);
// const str4 = numb.toString();

// const num1 = +str2;
// const num2 = parseInt(str2);
// console.log(num2);
// console.log(parseInt("123.999"));
// console.log(parseFloat("123.999"));
// console.log(+"123.999");
// console.log(Number("123.999"));

// console.log(!!num2);
// console.log(Boolean(num2 - Infinity));
// console.log("123" - "45")
// let num = -1;
// if ((num = 1)) {
// } else console.log(num);
// console.log(9 % 4);

let num1 = 10;
let num2 = 5;

// num1 = num1 + num2;
// console.log(num1);

// num1 += num2;
// console.log(num1);

// let str1 = "Hello";
// let str2 = "World";
// str1 += str2;
// console.log(str1);

// num1 = num1 + 1;
// console.log(num1);

// num1 += 1;
// console.log(num1);

// ++num1;
// let num;
// let str;
// num = 3; //true
// str = "123";
// const boolRes: boolean = Boolean(num || str || false);
// const boolRes2: boolean = Boolean(num && str);
// // console.log(!num);
// console.log(boolRes);
// console.log(boolRes2);
// isNaN;

// // if (num == 1) {
// //   console.log("1");
// // } else if (num == 123) {

// // } else if (num == 3) {
// // } //...
// // else {
// //   //default
// //   console.log("def");
// // }
// switch (num) {
//   case 0:
//     console.log("0");
//   case 123:
//   case 3:
//     console.log(">0");
//     break;
//   default:
//     console.log("<0");
// }

// let num = num1 > num2 ? "more" : "less";
// // if (num1 > num2) num = "more";
// // else num = "less";

// console.log(0 ?? num);
// for
