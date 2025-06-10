let input = prompt('숫자를 입력하시오:'); // 항상 문자열 반환
console.log(typeof input); // string
let result = input * 10;
console.log(typeof result); // number

let one = "20";
let two = 10;
console.log(one + two); // 2010

let time = prompt("사용 시간:"); // input : 8
console.log (time + 1000); // 81000
console.log (time * 1000); // 8000

// Number();
console.log(Number("10")); // "10" -> 10 변환
console.log(Number("10A")); // 변환 불가 -> NaN (Not a number)

// ParseInt();
console.log(parseInt("123")); // "123" -> 123
console.log(parseInt("123.45")); // "123.45" -> 123
console.log(parseInt("123A")); // "123A" -> 123

// ParseFloat();
console.log(parseFloat("123")); // "123" -> 123
console.log(parseFloat("123.45")); // "123.45" -> 123.45
console.log(parseFloat("123A")); // "123A" -> 123

// String();
console.log(String(123)); // 123 -> "123"


let score1 = prompt("국어 점수?");
let score2 = prompt("수학 점수?");
console.log(parseInt(score1) + parseInt(score2));

let username = prompt("이름?");
let age = prompt("나이?");
document.write(`<h3> ${username}(${age}) </h3>`)