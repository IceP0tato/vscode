// Q1
/* 주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)
let numbers = [23, 5, 67, 12, 88, 34]; */

/* 작성한 코드
let numbers = [23, 5, 67, 12, 88, 34];
let max = numbers[0];
for (let i=0; i<=numbers.length-1; i++) {
    if (numbers[i] > max) max = numbers[i];
}
console.log(max);
*/

// Q2
/* for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
*****
****
***
**
* */

/* 작성한 코드
let output = "";
for (let i=0; i<=4; i++) {
    for (let j=0; j<=4-i; j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);
*/

// Q3
/* 다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
힌트: 문자열의 .indexOf() 메소드를 사용하세요. */

/* 작성한 코드
let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
for (let i=0; i<=userNames.length-1; i++) {
    for (let j=0; j<=2; j++) {
        if (userNames[i][j] == '솔') { // 배열과 배열 내부의 문자열은 각각 자료 (userNames[0][0]='김', [0][1]='하', [0][2]='준') -> 배열 순회
            console.log(userNames[i]);
            break; // 김솔솔 같은 이름일 경우 두 번 출력되지 않도록 break
        }
    }
}
*/

// ==================================== 최적화된 코드
/*
for (let index = 0; index = userNames.length-1; index++){
    let name = userNames[index];
    if (name.indexOf('솔') != -1) {  // .indexOf[i]('Data') 같은 형식이 가능함
        console.log(name);
    }
}
*/

// Q4
/* 다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]; */

/* 작성한 코드
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
for (let i=0; i<=seatLayout.length-1; i++) {
    for (let j=0; j<=2; j++) {
        console.log(seatLayout[i][j]);
    }
}
*/

// Q5
/* 주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
힌트: 새로운 배열을 만들고, for 반복문으로 기존 배열을 순회하며 새로운 배열에 해당 요소가 없을( .indexOf() == -1 ) 때만 추가(push())합니다. */

/* 작성한 코드
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
let newNumbers = [];
for (let i=0; i<=numbers.length-1; i++) {
    if (newNumbers.indexOf(numbers[i]) == -1) {
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);
*/

// Q6
/* 주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
let numbers = [5, 3, 4, 1, 2];
힌트: 중첩 for 반복문을 사용하며, 이웃한 두 요소를 비교하 위치를 바꿉니다. */

/* 작성한 코드 *
let numbers = [5, 3, 4, 1, 2];
let temp = 0;
for (let i=0; i<=numbers.length-1; i++) {
    for (let j=0; j<numbers.length-1; j++) { // numbers[j+1]이 범위를 넘어가지 않도록 j<numbers.length-1 -> j<4 -> j = 0, 1, 2, 3
        if (numbers[j] > numbers[j+1]) { // num[0]=5 > num[1]=3 -> true
            temp = numbers[j]; // temp=5
            numbers[j] = numbers[j+1]; // num[j]=3, num[j+1]=3
            numbers[j+1] = temp; // num[j+1]=5, temp=5
        } // num[0]=3, num[1]=5 -> swapped (ascending)
    }
}
console.log(numbers);
*/

// Q7
/* 두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 사용자로부터 구매할 상품명과 수량을 입력받아, 재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 재고가 부족하면 "재고가 부족합니다."를 출력합니다.
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20]; */

/* 작성한 코드
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
let buyProducts = prompt("구매할 상품명을 입력하시오");
let buyStock = Number(prompt("구매할 수량을 입력하시오"));
let hasProduct = products.indexOf(buyProducts);

if (hasProduct == -1) { // 상품이 배열에 없음
    console.log("없는 상품입니다.");
}
if (stock[hasProduct] <= 0 || buyStock > stock[hasProduct]) { // 재고가 0이거나 구매 수량이 재고보다 많음
    console.log("상품 재고가 없습니다.");
} else if (hasProduct != -1 && stock[hasProduct] > 0) { // 상품이 있고, 재고가 1 이상
    stock[hasProduct] -= buyStock;
    console.log("구매 완료!");
}
*/
// ==================================== 최적화된 코드
/*
// 기본 로직 (볼펜, 5)
if (products.indexOf('볼펜') != -1) {
    if (stock[] >= 5) {
        stock[] -= 5;
    }
}

// 반복문
for (let index=0; index<=products.length-1; index++) {
    let product = products[index]; // 제품 1개 호출
    if (product == buyProducts) {
        console.log("존재하는 제품");
        if (stock[index] >= buyStock) { // 재고가 입력받은 수보다 많음
            stock[index] -= buyStock;
            console.log("구매 완료");
        } else {
            console.log("재고 부족"); 
        }
    }
}

// 다른 방법
if (hasProduct >= 0) { // 제품이 있음
    if (stock[hasProduct] >= buyStock) { // 재고가 입력받은 수보다 많음
        stock[hasProduct] -= buyStock;
        console.log("구매 완료")
    } else {
        console.log("재고 부족") 
    }
}
*/

// Q8
/* 주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
(2). 구현 조건
for 반복문을 사용하여 모든 영화를 순회합니다.
각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
(3). HTML 출력 예시
히든페이스      ★★★★★★★★☆☆
위키드          ★★★★☆☆☆☆☆☆
글래디에이터2   ★★★★★★★☆☆☆
청설            ★★★★★★☆☆☆☆ */

/* 응용한 코드
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
let output = "";
for (let index=0; index<=movieNames.length-1; index++) {
    let name = movieNames[index];
    output += `<div> ${name} `;
    let score = movieRatings[index];
    let black = parseInt(score) / 1;
    for (let star=1; star<=10; star++) {
        if (star<=black) {
            output += `<span>★</span>`;
        } else {
            output += `<span>☆</span>`; 
        }
    }
    output += `</div>`;
}
document.write(output);
*/

// Q9
/* 총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다
각 좌석은 하나의 <div> 태그로 표시합니다.
좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석   
예약석 빈좌석
예약석 빈좌석 */

/* 작성한 코드
let check = 0;
let seat = "";
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
for (let i=0; i<3; i++) {
    seat += `<div>`
    for (let j=0; j<2; j++) {
        if (seatStatus[check] == '빈좌석') {
            seat += `<span style="color: blue;"> `;
        } else if (seatStatus[check] == '예약석') {
            seat += `<span style="color: red;"> `;
        }
        seat += `${seatStatus[check]} </span>`;
        console.log(check);
        check++;
    }
    seat += `</div> \n`;
}
document.write(seat);
*/

// ==================================== 최적화된 코드
/*
for (let index=0; index<=seatStatus.length-1; index++) {
    let seat = seatStatus[index];
    if (seat == '빈좌석') document.write('<div style="color: blue">빈좌석</div>');
    else document.write('<div style="color: red">예약석/div>');
    if ((index+1)%2 == 0) document.write('<br />');
}

// Q10
/* 차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
(2). 요금 규정
기본 요금: 최초 30분까지 1,000원
추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
(3). 구현 조건
for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
(4). 출력 예시 (HTML)
250어7142: 65분 주차, 최종 요금: 3,000원
142가7415: 30분 주차, 최종 요금: 1,000원
888호8888: 140분 주차, 최종 요금: 6,500원
931나8234: 420분 주차, 최종 요금: 20,000원
(힌트)
기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다. */

let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
let output = "";
let calc = 0;
let time = 0;
for (let i=0; i<=carNumbers.length-1; i++) {
    output += `<div> `
    output += `${carNumbers[i]}: `; // 차량 번호
    output += `${usageMinutes[i]}분 주차, `; // 주차 시간

    if (usageMinutes[i] <= 30) { // 30분 이하일 시
        output += `최종 요금: 1,000원`; // 1,000원
    } else { // 30분 초과일 시
        calc = (usageMinutes[i]-30) / 10; // 초과 금액 구하기 (3.5, X, 11, 39)
        if (calc % 1 != 0) { // 1로 나눠떨어지지 않음 (3.5)
            calc = parseInt(calc) + 1; // 정수로 만든 뒤 올림 (3 -> 4)
        }
        time = 1000 + 500 * calc; // 1000+500*4=3000, 1000+500*11=6500, 39000

        if (time >= 20000) { // 39000
            output += `최종 요금: 20,000원`;
        }
        else {
            output += `최종 요금:  ${time.toLocaleString()}원`;
        }
    }
    output += `</div> `
}
document.write(output);
