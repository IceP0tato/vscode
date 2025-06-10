console.log(100); // 숫자형 정수
console.log(typeof 100); // typeof : 자료의 종류 반환

console.log(0.1 + 0.2); // 숫자형 실수 (정밀한 계산 불가 [부동소수점] -> 특정 함수 필요)

console.log(typeof "100"); // 문자열 (string)
console.log(typeof "Hello");

// 특수 문자들
console.log("\\ 안녕");
console.log("\' 안녕");
console.log("\" 안녕");
console.log("\n 안녕");
console.log("\t 안녕");

console.log("안녕" + "자바"); // + 연결 연산자
console.log(`${"안녕"}${"자바"}`); // 템플릿 리터럴 ( ` 백틱, 변수나 식을 넣을 때 ${} )

let username = 'Kim';
let classroom = 204;
console.log(username + "님, " + classroom + "호 강의실로 입장하세요.");
console.log(`${username}님, ${classroom}호 강의실로 입장하세요.`); // 템플릿 리터럴 (변수 입력)

console.log(true) // 논리형 true
console.log(false) // 논리형 false

let fruitbox;
console.log(fruitbox); // undefined : 자료가 존재하지 않는 변수를 호출할 시
let fruitbox2 = null;
console.log(fruitbox2); // null : 데이터의 값이 유효하지 않은 상태 (자료가 존재하지 않음)

let season = ["봄", "여름", "가을", "겨울"]; // 배열 (길이 4)
console.log(season);
console.log(season[0]); // 봄
console.log(season[1]); // 여름
console.log(season[2]); // 가을
console.log(season[3]); // 겨울
console.log(season[4]); // undefined

season = ["유재석", "강호동"]; // 전체 수정
console.log(season);

season[1] = "신동엽"; // 일부 수정 (인덱스 번호)
console.log(season);

season.push("서장훈"); // 요소 추가 (뒤에서부터 추가)
console.log(season);

season.splice(0, 1); // 요소 삭제 (인덱스 번호, 삭제할 개수) - 0번 인덱스부터 1개 삭제
console.log(season);

console.log(season.indexOf("서장훈")); // 요소 탐색 (찾을 값. 있으면 인덱스 번호 반환, 없으면 -1)
console.log(season.indexOf("강호동"));
let result = season.indexOf("신동엽");
console.log(result);