// sessionStorage : 브라우저 실행 동안만 저장 (닫으면 소멸함. 일회성 정보)
// localStorage : 캐시 삭제하기 전까지 영구 저장 (팝업창, 테마 등. 설정 정보)

console.log(sessionStorage);
console.log(localStorage);

// 자료 대입: setItem(key [* 문자만 가능], value);
sessionStorage.setItem('name', '유재석');
localStorage.setItem('age', 40);

// 자료 호출
console.log(sessionStorage.getItem('name')) // 유재석
console.log(localStorage.getItem('age')) // 40

// 자료 삭제
sessionStorage.removeItem('name');
console.log(localStorage.getItem('name')) // null
localStorage.clear() // 전체 삭제

// JSON(JavaScript Object Notation) : 자바스크립트 객체 문법의 형식
// http는 객체지향이 아니기에, 문자열과 바이트 전송 가능 (송수신 때 형 변환 필요)

// 해당 자료를 문자열 타입으로 변환: JSON.stringify(자료);
// 해당 자료를 JS 타입으로 변환: JSON.parse(자료);
sessionStorage.setItem('m1', JSON.stringify(['유재석', 40]));
localStorage.setItem('m2', JSON.stringify({name: '유재석', age: 40}));

console.log(JSON.parse(sessionStorage.getItem('m1')));

let data = localStorage.getItem('m2');
let jsonData = JSON.parse(data);
console.log(jsonData);