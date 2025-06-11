// Q1
/*
let 밑변 = Number(prompt("밑변의 길이는?"));
let 높이 = Number(prompt("높이의 길이는?"));
let 넓이 = 밑변 * 높이 / 2;
console.log("삼각형의 넓이: " + 넓이);
*/

// Q2
/*
let 섭씨 = Number(prompt("섭씨 온도는?"));
let 화씨 = (섭씨 * 9 / 5) + 32;
console.log("화씨 온도: " + 화씨);
*/

// Q3
/*
let 년도 = Number(prompt("태어난 년도는?"));
let 나이 = 2025 - 년도;
console.log("현재 나이 (2025년 기준): " + 나이);
*/

// Q4
/*
let 키 = Number(prompt("키는? (cm 단위)"));
let 몸무게 = Number(prompt("몸무게는?"));
let BMI = 몸무게 / ((키 / 100) * (키 / 100));
console.log("BMI 수치: " + BMI);
*/

// Q5
/*
let 아이디 = prompt("아이디를 입력하세요");
let 이메일 = prompt("이메일을 입력하세요");
console.log((아이디 == 'admin' || 이메일 == 'admin@test.com')?"관리자":"일반 사용자");
*/

// Q6
/*
let 점수 = prompt("점수는?");
document.write(`<h2> ${점수>=90?'A':(점수>=80 && 점수<90)?'B':점수<70?'C':''} </h2>`)
*/

// Q7
/*
let 나이 = prompt("나이는?");
console.log((나이 >= 20 && 나이 <= 29)?"이벤트 대상입니다.":"이벤트 대상이 아닙니다.");
*/

// Q8
/*
let likeCount = 3;
likeCount++;
console.log(`좋아요: [${likeCount}]`);
*/

// Q9
/*
let todoList = ["장보기", "과제하기"];
let todo = prompt("새로운 할 일을 입력하세요");
todoList.push(todo);
console.log(todoList);
*/

// Q10
/*
let waitingList = ['김민준', '이서연', '박도윤', '최지우'];
console.log(`마지막 대기자는 [${waitingList[waitingList.length - 1]}]입니다.`);
*/