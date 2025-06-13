// Q1
/* 다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.
let scores = [85, 92, 78, 65, 95]; */
/*
let scores = [85, 92, 78, 65, 95];
let sum = 0;
for (let i=0; i<=scores.length-1; i++) {
    sum += scores[i];
}
console.log(`합계: ${sum}, 평균: ${sum/scores.length}`);
*/

// Q2
/* 점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
let scores = [77, 82, 100, 54, 96];
출력 예시: 100점 만점자를 찾았습니다! */
/*
let scores = [77, 82, 100, 54, 96];
for (let i=0; i<=4; i++) {
    if (scores[i] == 100) {
        console.log(scores[i]);
        break;
    }
}
console.log("100점 만점자를 찾았습니다!");
*/

// Q3
/* 점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.
let scores = [90, 45, 72, 88, 59, 100]; */
/*
let scores = [90, 45, 72, 88, 59, 100];
for (let i=0; i<=5; i++) {
    if (scores[i] < 60) continue;
    console.log(scores[i]);
}
*/

// Q4
/* 다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; */
/*
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
let bloodNum = 0;
for (let i=0; i<=bloodTypes.length-1; i++) {
    if (bloodTypes[i] == 'A') bloodNum++;
}
console.log(bloodNum);
*/

// Q5
/* 주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
(2). 구현 조건
for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
점수를 10점 만점으로 환산하여 시각화합니다.
점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.
예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.
(3). 출력 예시 (HTML)
유재석 ●●●●●●●●●○
강호동 ●●●●●●●●○○
신동엽 ●●●●●●●○○○ */

let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
let temp = "";
for (let i=0; i<=nameArray.length-1; i++) {
    temp += "<div> " + nameArray[i] + " ";
    let tempNum=0;
    for (let j=1; j<scores[i]/10; j++) {
        temp += "●";
        tempNum++;
    }
    for (let k=0; k<10; k++) {
        temp += "○";
        tempNum++;
        if (tempNum==10) break;
    }
    temp += "</div> \n";
}
document.write(temp);

// ====================================
/* 
let output = "";
for (let index=0; index<=nameArray.length-1; index++) {
    let name = nameArray[index];
    output += `<div> ${name} `;
    let score = scores[index];
    let black = parseInt(score) / 10;
    for (let circle=1; circle<=10; circle++) {
        if (circle<=black) {
            output += `<span>●</span>`;
        } else {
            output += `<span>○</span>`; 
        }
    }
    output += `</div>`;
}
document.write(output);
*/