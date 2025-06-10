// 1. 산술 연산자
// +더하기 -빼기 *곱하기 /나누기 %나머지
console.log( 10 + 3 );              // 더하기 13
console.log( 10 - 3 );              // 빼기 7   
console.log( 10 * 3 );              // 곱하기 30
console.log( 10 / 3 );              // 나누기 3.3333333333333335
console.log( parseInt( 10 / 3 ) );  // 몫  3 , parseInt
console.log( 10 % 3 );              // 나머지 1 

// 2. 연결 연산자
console.log("점수 : " + 10) // 점수 : 10

/* let korScore = Number(prompt("국어 점수?"));
let engScore = Number(prompt("영어 점수?"));
let mathScore = Number(prompt("수학 점수?"));

let totalScore = korScore + engScore + mathScore;
let avgScore = (totalScore) / 3;
console.log(`총점 : ${totalScore}, 평균 : ${avgScore}`); */

/* let radius = Number(prompt("반지름?"));
let circle = radius * radius * 3.14;
console.log(`반지름 : ${circle}`); */

/* let float1 = Number(prompt("실수 1?"));
let float2 = Number(prompt("실수 2?"));
let volume = ( float1 / float2 ) * 100; // float1이 float2에서 비율 (%)이 얼마나 되는지
console.log(`비율 : ${volume}%`); */

// 3. 비교 연산자 (하나의 연산결과를 (논리) 값으로 반환)
/*
    > 초과/크다 
    < 미만/작다
    >= 이상/크거나같다 ,    => 같거나크다[x]
    <= 이하/작거나같다 ,    =< 같거나작다[x]
    == (값)같다            === (값과자료형)같다.       "10" == 10  true
    != (값)같지않다.       !== (값과자료형)같지않다.    "10" === 10 false 
*/

// 4. 논리 연산자
/*
    && 이면서 면서 이고 그리고 모두 and조건 , 조건이 모두 true 이면 true  
    || 이거나 거나 하나라도 또는 or 조건  ,  조건이 하나라도 true 이면 ture * | :  + [시프트키] + 엔터 위에 원화기호\
    ! 부정 반대 not 조건  , true -> false , false -> true 
        초등학생이 사탕 이면서 초콜릿 먹는다. and조건 , 2개다 먹어야 true(충족)
        초등학생이 사탕 이거나 초클릿 먹는다. or조건 , 1개이상 먹으면 true(충족)
        초등학생이 사탕 아니고 , not 조건 , 사탕이 아닌
        * 범위논리 지원하지 않는다. 5 < 점수 < 10  ---------> 점수 > 5 && 점수 < 10
*/

/*
let int = Number(prompt("정수 입력"));
console.log(Boolean(int % 2)); // 홀수면 true
console.log(Boolean(int % 7 == 0)); // 7의 배수면 true

let id = prompt("ID 입력");
let pw = prompt("PW 입력");
console.log(Boolean((id == 'admin') && (pw == '1234')));

console.log(Boolean((int % 7 == 0) && (int % 2))); // 홀수면서 7의 배수면 true
*/

// 5. 대입(할당) 연산자
/*
    = : 오른쪽 데이터를 왼쪽에 대입/할당/놓기               , let 변수명 = 3;   , =대입 vs ==같다
    += : 오른쪽 데이터를 왼쪽에 더한 후에 대입/할당/놓기     , let A = 2  ,   A = A + 3  vs A += 3 
    -= , *= , /= , %= 
*/

let variable = 10;
variable += 3;
console.log(variable); // 13
variable -= 4;
console.log(variable); // 9
variable *= 2;
console.log(variable); // 18

// 6. 증감 연산자
// ++ : 1씩증가   ,  -- : 1씩감소
// ++변수명 : 선위증가 , 변수명++ : 후위증가 
// --변수명 : 선위감소 , 변수명-- : 후위감소 

let age = 40;
console.log(++age);
    // (1) 나이     : '나이' 라는 이름의 변수 호출 : 40
    // (2) ++나이   : 호출된 값의 ++ 해서 1증가 : 41
    // (3) console.log() : 41
console.log(age++);
    // (1) 나이     : '나이' 라는 이름의 변수 호출 : 41
    // (2) 나이++   : 패스~
    // (3) console.log() : 41
    // (4) 모든 명령 끝났으면 , 호출된 값의 ++ 해서 1증가 : 42
console.log(age);

// 증감연산자 외 다른 명령어가 없으면 선위/후위 가 상관없다. * 세미콜론 단위 우선순위 따짐.

// 7. **삼항연산자** , 항이 3개 , (1)조건 ? (2)참일때 : (3)거짓일때, true 와 false 대신 다른값 대체
// 조건1 ? 참1 : 조건2 ? 참2 : 조건3 ? 참3 : 거짓
let score = 80;
console.log(score>=80?"합격":"불합격"); // score가 80 이상이면 "합격", 아니면 "불합격"

let score1 = Number(prompt("1차 점수"));
let score2 = Number(prompt("2차 점수"));
let totalScore = score1 + score2;
document.write(`<h3> ${totalScore>=150?"합격":"불합격"} </h3>`)

let name = prompt("1번 이름");
let nameCheck = (name=="유재석")?`${name} (방장)`:`${name}`;
document.write(`<ol> ${nameCheck} </ol>`);