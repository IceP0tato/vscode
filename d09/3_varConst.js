// let: 변수 선언 키워드
let width;
let height;

width = 200;
height = 50;
let area = width * height;
console.log(area);

// 1. 변수 선언
let name1;
let name2="유재석";

// 2. 변수 호출
console.log(name1);
console.log(name2);

// 3. 변수 수정
name1="강호동";
name2="박명수";
console.log(name1);
console.log(name2);

// const: 상수 선언 키워드
const name3="신동엽";

console.log(name3);

name3="김철수"; // Uncaught TypeError: Assignment to constant variable.