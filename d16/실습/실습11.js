// Q1
/* 나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요. isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요. */

/* 작성한 코드
let age = Number(prompt("나이?"));
function isAdult(age) {
    if (age >= 20) return true;
    else return false;
}
console.log(isAdult(age));
*/

// Q2
/* 숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해 보세요.
const numbers = [10, 20, 30, 40, 50]; */

/* 작성한 코드
const numbers = [10, 20, 30, 40, 50];
function sumArray(numbers) {
    let sum = 0;
    for (let i=0; i<=numbers.length-1; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray(numbers));
*/

// Q3
/* 문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.
const words = ['apple', 'banana', 'kiwi', 'strawberry']; */

/* 작성한 코드
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord(words) {
    let longestWord = '';
    let length = 0;
    for (let i=0; i<=words.length-1; i++) {
        if (words[i].length >= length) {
            longestWord = words[i];
            length = words[i].length;
        }
    }
    return longestWord;
}
console.log(findLongestWord(words));
*/

// Q4
/* let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요. */

/* 작성한 코드
let userScore = 0;
function gainScore() {
    userScore += 10;
}
function loseScore() {
    userScore -= 5;
}

gainScore();
gainScore();
gainScore();
loseScore();
console.log(userScore);
*/

// Q5
/* 전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
]; */

/* 작성한 코드
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];

function findTopStudent(students) {
    let highestScore = 0;
    for (let i=0; i<=students.length-1; i++) {
        if (students[i].score > highestScore) {
            highestScore = students[i].score;
        }
    }
    return highestScore;
}
console.log(findTopStudent(students));
*/

// Q6
/* 전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시하는 renderProducts 함수를 만드세요.
각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
]; */

/* 작성한 코드
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];

function renderProducts(products) {
    let html = '';
    for(let i=0; i<=products.length-1; i++) {
        html += `<div> `
        html += `<h4> ${products[i].name} </h4>`;
        html += `<p> ${products[i].price} </p>`;
        html += `<p> ${products[i].stock} </p>`;
        html += `</div> `
    }
    return html;
}
document.write(renderProducts(products));
*/

// Q7
/* num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용) */

/* 작성한 코드
function calculator(num1, num2, operator) {
    let result = 0;
    if (operator == '+') result = num1 + num2;
    else if (operator == '-') result = num1 - num2;
    return result;
}

let num1 = Number(prompt("숫자 1?"));
let num2 = Number(prompt("숫자 2?"));
let operator = prompt("기호? (+, -)");

console.log(calculator(num1, num2, operator));
*/

// Q8
/* todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
let todoList = ['장보기', '운동하기'] */

/* 작성한 코드
let todoList = ['장보기', '운동하기'];

function renderList(todoList) {
    let html = '<ul>';
    for (let i=0; i<=todoList.length-1; i++) {
        html += `<li>${todoList[i]}</li>`
    }
    html += `</ul>`;
    return html;
}
document.write(renderList(todoList));
*/

// Q9
/* 임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
8세 미만: "무료"
8세 이상 19세 이하: "5,000원"
20세 이상: "10,000원"
계산된 가격 문자열을 반환(return)하시오. */

/* 작성한 코드
let age = Number(prompt("나이?"));
function getTicketPrice(age) {
    if (age < 8) return "무료";
    else if (age >= 8 && age <= 19) return "5,000원";
    else if (age >= 20) return "10,000원";
    else return "올바른 나이가 입력되지 않았습니다."
}
console.log(getTicketPrice(age));
*/