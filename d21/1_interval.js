// interval: 시간적인 간격에 따라 특정 함수 실행

let value = 0;
function add() {
    value++;
    const box1 = document.querySelector('#box1');
    let html = value;
    box1.innerHTML = html;
}

// 실행: setInterval(함수명 (소괄호 생략), 간격 (밀리초: 1/1000초))
setInterval(add, 1000); // 1초 간격으로 add 실행

function clock() {
    let today = new Date();
    let hour = today.getHours(); // 시
    let minute = today.getMinutes(); // 분
    let second = today.getSeconds(); // 초

    const box2 = document.querySelector('#box2');
    let html = `${hour}:${minute}:${second}`;
    box2.innerHTML = html;
}

setInterval(clock, 1000);

let time = 0;
let timerId; // interval 객체 저장용
function timerAdd() {
    time++;
    document.querySelector('#box3').innerHTML = time;
}

function timerStart() {
    timerId = setInterval(timerAdd, 1000); // 전역변수에 interval 객체 저장
}

// 중지: clearInterval(interval객체);
function timerStop() {
    clearInterval(timerId);
}