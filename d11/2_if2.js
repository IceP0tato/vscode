// Q1
/*
let score1 = Number(prompt("1. 점수를 입력하시오"));
let score2 = Number(prompt("2. 점수를 입력하시오"));
if ((score1 + score2) >= 90) {
    console.log("성공");
} else {
    console.log("실패");
}
*/

// Q2
/*
let int1 = Number(prompt("1. 정수를 입력하시오"));
let int2 = Number(prompt("2. 정수를 입력하시오"));
if (int1 > int2) {
    console.log("1번 정수가 2번 정수보다 크다.");
} else if (int1 < int2) {
    console.log("1번 정수가 2번 정수보다 작다.");
} else if (int1 == int2) {
    console.log("1번 정수와 2번 정수는 같다.");
}
*/

// Q3
/*
let id = prompt("ID를 입력하시오");
let pw = prompt("PW를 입력하시오");
if (id == 'admin' && pw == '1234') {
    console.log("로그인 성공");
} else {
    console.log("로그인 실패");
}
*/

// Q4
/*
let pw = prompt("PW를 입력하시오");
if (pw.length < 8) {
    console.log("보안 등급: 약함 (8자 이상으로 설정해주세요.)");
} else if (pw.length >= 8 && pw.length < 12) {
    console.log("보안 등급: 보통");
} else if (pw.length >= 12) {
    console.log("보안 등급: 강함");
} else {
    console.log("Error");
}
*/

// Q5
/*
let seatList = ['O', 'X', 'O'];
let seat = prompt("예약할 자리 번호를 입력하시오 (0, 1, 2)");
if (seatList[seat] == 'X') {
    console.log("예약 성공");
} else if (seatList[seat] == 'O') {
    console.log("예약 불가");
} else {
    console.log("존재하지 않는 자리입니다.");
}
*/

// Q6
/*
let score = Number(prompt("점수를 입력하시오 (정수)"));
if (score >= 900) {
    console.log("A급 경품");
} else if (score >= 700 && score < 900) {
    console.log("B급 경품");
} else if (score >= 500 && score < 700) {
    console.log("C급 경품");
} else if (score < 500) {
    console.log("참가상");
} else {
    console.log("유효한 점수가 아닙니다.");
}
*/

// Q7
/*
let role = prompt("역할을 입력하시오");
if (role == 'admin') {
    console.log("모든 기능에 접근할 수 있습니다.");
} else if (role == 'editor') {
    console.log("콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.");
} else if (role == 'viewer') {
    console.log("콘텐츠 조회만 가능합니다.");
} else {
    console.log("정의되지 않은 역할입니다.");
}
*/

// Q8
/*
let age = Number(prompt("나이를 입력하시오"));
if (age < 8) {
    console.log("무료");
} else if (age >= 8 && age <= 19) {
    console.log("5,000원");
} else if (age >= 20 && age < 65) {
    console.log("10,000원");
} else if (age >= 65) {
    console.log("3,000원");
} else {
    console.log("유효한 나이가 아닙니다.");
}
*/

// Q9
/*
let score = Number(prompt("점수를 입력하시오"));
if (score >= 90) {
    console.log("A등급");
} else if (score >= 80 && score < 90) {
    console.log("B등급");
} else if (score >= 70 && score < 80) {
    console.log("C등급");
} else if (score < 70) {
    console.log("재시험");
} else {
    console.log("유효한 점수가 아닙니다.");
}
*/

// Q10
/*
let drinkNames = ['콜라', '사이다', '커피'];
let drinkPrices = [1000, 1000, 1500];
let input = Number(prompt("원하는 음료(0, 1, 2)의 번호를 입력하시오"));
if (drinkNames[input]) {
    console.log(`선택하신 음료는 ${drinkNames[input]}입니다. 가격은 ${drinkPrices[input]}원입니다.`);
} else {
    console.log("없는 상품입니다.");
}
*/