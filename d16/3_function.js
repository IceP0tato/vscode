// Q1
/* '함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello라는 이름의 함수를 정의하고, 그 함수를 호출하시오. */

/*
function sayHello() {
    console.log('함수 호출 성공!');
}
sayHello();
*/

// Q2
/* 임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오. */

/*
function printSum(x, y) {
    console.log(x + y);
}
printSum(5, 10);
*/

// Q3
/* 임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오. */

/*
function getWelcomeMessage(message) {
    return `환영합니다, ${message}님!`;
}
let welcome = getWelcomeMessage('홍길동');
console.log(welcome);
*/

// Q4
/* 0의 값을 가진 counter라는 전역 변수를 만드시오.
호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오. */

/*
let counter = 0;
function increaseCount() {
    counter++;
}
increaseCount();
increaseCount();
increaseCount();
console.log(counter);
*/

// Q5
/* 임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오. */

/*
function printNumbers(n) {
    for(let i=1; i<=n; i++) {
        console.log(i);
    }
}
printNumbers(5);
*/

// Q6
/* prompt를 이용해 사용자로부터 이름을 입력받으시오.
입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오. */

/*
let userList = [];
let name = prompt("이름 입력: ");
function addUser(name) {
    userList.push(name);
}
addUser(name);
console.log(userList);
*/

// Q7
/* 임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오. */

/*
let nameList = [ '철수', '영희' ];
function printFruits(nameList) {
    for(let i=0; i<=nameList.length-1; i++) {
        console.log(nameList[i]);
    }
}
printFruits(nameList);
*/

// Q8
/* 임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요. */

/*
let number = Number(prompt("숫자 입력:"));
function isPositive(number) {
    if (number > 0) return true;
    else return false;
}
console.log(isPositive(number));
*/

// Q9
/* let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 let localText = '지역'; 변수를 선언하고, 
두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요. */

/*
let globalText = '전역';
function printLocal() {
    let localText = '지역';
    console.log(globalText);
    console.log(localText);
}
printLocal();
console.log(globalText);
// console.log(localText);
*/