// Q1
/* 다음 과일 목록 배열이 주어져 있습니다.
let fruitList = [ '사과', '바나나' ];
사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오. */

/* 작성한 코드
let fruitList = ['사과', '바나나'];
let newFruit = prompt("새로운 과일 이름 입력");
if (fruitList[0] == newFruit) {
    console.log("이미 존재하는 과일입니다.");
} else if (fruitList[1] == newFruit) {
    console.log("이미 존재하는 과일입니다.");
} else {
    fruitList.push(newFruit);
    console.log(fruitList);
}

// ====================================== 최적화된 코드
if (fruitList.indexOf(fruitName) == -1) { // indexOf: 배열 내 요소 탐색
    fruitList.push(fruitName);
    console.log(fruitList);
} else { console.log("이미 존재하는 과일입니다."); }
*/

// Q2
/* 주민등록번호 13자리를 문자열로 입력받습니다. 성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오. */

/* 작성한 코드
let regNumber = prompt("주민등록번호 입력 (13자리)");
if (regNumber.charAt(6) == '1' || regNumber.charAt(6) == '3') {
    console.log("blue");
} else if (regNumber.charAt(6) == '2' || regNumber.charAt(6) == '4') {
    console.log("red");
} else {
    console.log("유효한 주민등록번호가 아닙니다.");
}

// ====================================== 최적화된 코드
console.log(regNumber[7]) // ex)1234567123456 -> 1 (문자열도 배열 자료 기반으로 인덱스 존재)
*/

// Q3
/* 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
50,000원 이상: 10% 할인
30,000원 이상 50,000원 미만: 5% 할인
10,000원 이상 30,000원 미만: 1% 할인
10,000원 미만: 할인 없음 */

/* 작성한 코드
let totalPrice = Number(prompt("총 구매 금액 입력"));
if (totalPrice >= 50000) {
    console.log("10% 할인: " + totalPrice * 0.9);
} else if (totalPrice >= 30000 && totalPrice < 50000) {
    console.log("5% 할인: " + totalPrice * 0.95);
} else if (totalPrice >= 10000 && totalPrice < 30000) {
    console.log("1% 할인: " + totalPrice * 0.99);
} else if (totalPrice < 10000) {
    console.log("할인 없음: " + totalPrice);
} else {
    console.log("올바른 금액이 아닙니다.");
}
*/

// Q4
/* 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
봄: 3, 4, 5월
여름: 6, 7, 8월
가을: 9, 10, 11월
겨울: 12, 1, 2월
만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요. */

/* 작성한 코드
let month = Number(prompt("월 입력 (1~12)"));
if (month == 3 || month == 4 || month == 5) {
    console.log("봄");
} else if (month == 6 || month == 7 || month == 8) {
    console.log("여름");
} else if (month == 9 || month == 10 || month == 11) {
    console.log("가을");
} else if (month == 12 || month == 1 || month == 2) {
    console.log("겨울");
} else {
    console.log("잘못된 월입니다.");
}
*/

// Q5
/* 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오. */

/* 작성한 코드
let int1 = Number(prompt("1. 정수 입력"));
let int2 = Number(prompt("2. 정수 입력"));
let int3 = Number(prompt("3. 정수 입력"));
if (int1 > int2) {
    if (int1 > int3) {
        console.log(int1);
    } else {
        console.log(int3);
    }
} else if (int2 > int3) {
    if (int2 > int1) {
        console.log(int2);
    } else {
        console.log(int1);
    }
} else if (int3 > int1) {
    if (int3 > int2) {
        console.log(int3);
    } else {
        console.log(int2);
    }
} else {
    console.log("입력에 오류가 있습니다.");
}

// ====================================== 최적화된 코드
// .max()를 사용하지 않은 순차 비교
let max = int1; // 최댓값 변수 (기본값 int1 대입)
if (int2 > max) { max = int2 } // int2가 max (int1) 보다 크면 int2를 max에 대입
if (int3 > max) { max = int3 } // int3 비교 대입식
console.log("가장 큰 수는: ", max);
*/

// Q6
/* 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
윤년 조건:
연도가 4의 배수이면서, 100의 배수는 아닐 때
또는 연도가 400의 배수일 때
출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.' */

/* 작성한 코드
let year = Number(prompt("연도 입력"));
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + "년은 윤년입니다.");
} else {
    console.log(year + "년은 평년입니다.");
}
*/

// Q7
/* 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
예시: 17, 4, 8 입력 시 4, 8, 17 출력 */

/* 작성한 코드
let int1 = Number(prompt("1. 정수 입력"));
let int2 = Number(prompt("2. 정수 입력"));
let int3 = Number(prompt("3. 정수 입력"));
let num1, num2, num3;

// ====================================== 최적화된 코드
let numList = [ int1, int2, int3 ];
let temp;
if (numList[0] > numList[1]) { // int1 > int2
    // swap
    temp = numList[0];
    numList[0] = numList[1]
    numList[1] = temp;
}
if (numList[0] > numList[2]) { // int1 > int3
    temp = numList[0];
    numList[0] = numList[2]
    numList[2] = temp;
}
if (numList[1] > numList[2]) { // int2 > int3
    temp = numList[1];
    numList[1] = numList[2]
    numList[2] = temp;
}
console.log(numList);
*/

// Q8
/* 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
규칙:
가위(0)는 보(2)를 이깁니다.
바위(1)는 가위(0)를 이깁니다.
보(2)는 바위(1)를 이깁니다.
출력:
플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
두 플레이어가 같은 것을 내면 '무승부'를 출력합니다. */

/* 작성한 코드
let player1 = Number(prompt("가위바위보 (0: 가위, 1: 바위, 2: 보)"));
let player2 = Number(prompt("가위바위보 (0: 가위, 1: 바위, 2: 보)"));
if ((player1 == 0 && player2 == 2) || (player1 == 1 && player2 == 0) || (player1 == 2 && player2 == 1)) {
    console.log("플레이어1 승리");
} else if (player1 == player2) {
    console.log("무승부");
} else {
    console.log("플레이어2 승리");
}

// ====================================== 최적화된 코드
0 == (2+1)%3
1 == (1+1)%3
2 == (0+1)%3

if (player1 == (player2+1)%3)
*/

// Q9
/* 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오. */

/* 작성한 코드
let carArray = ['250어7142', '142가7415', '888호8888'];
let locationArray = ['A1', 'B3', 'C2'];
let carInput = prompt("차량 번호 입력");
if (carArray[0] == carInput) {
    console.log(locationArray[0]);
} else if (carArray[1] == carInput) {
    console.log(locationArray[1]);
} else if (carArray[2] == carInput) {
    console.log(locationArray[2]);
} else {
    console.log("차량이 존재하지 않습니다.");
}

// ====================================== 최적화된 코드
let index = carArray.indexOf(carInput);
if (index !== -1) {
    console.log(locationArray[index]);
} else { console.log("차량이 존재하지 않습니다."); }
*/

// Q10
/* 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
let courseList = ['수학', '영어', '과학', '국어'];
사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오. */

/* 작성한 코드
let courseList = ['수학', '영어', '과학', '국어'];
let remove = prompt("제외하고 싶은 과목명 입력");
if (courseList[0] == remove) {
    courseList.splice(0, 1);
    console.log(courseList);
} else if (courseList[1] == remove) {
    courseList.splice(1, 1);
    console.log(courseList);
} else if (courseList[2] == remove) {
    courseList.splice(2, 1);
    console.log(courseList);
} else if (courseList[3] == remove) {
    courseList.splice(3, 1);
    console.log(courseList);
} else { console.log("해당 과목은 신청 목록에 없습니다."); }

// ====================================== 최적화된 코드
indexOf('배열 내부의 자료'): 배열에서 특정 요소의 위치를 찾는 메서드 (존재하면 해당 인덱스 반환, 없으면 -1 반환)
splice(인덱스 번호, 제거할 개수): 배열에서 요소를 제거하는 메서드
splice(인덱스 번호, 제거할 개수 (0이면 삭제 안함, 1이면 대체), '추가할 내용'): 배열에 요소를 추가하는 메서드

let index = courseList.indexOf(remove); // index에 입력한 과목명의 배열 인덱스 값 저장
if (index !== -1) { // 존재하지 않는 index가 아님
    courseList.splice(index, 1); // ex) '수학' 입력 시 index에 0 저장, splice(0, 1)로 '수학' 제거
    console.log(courseList);
} else { console.log("해당 과목은 신청 목록에 없습니다."); }
*/