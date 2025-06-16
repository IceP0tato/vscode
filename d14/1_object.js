const obj1 = { prop1 : 10, "prop2" : "hello"};
console.log(obj1);
console.log(obj1.prop1);
console.log(obj1["prop2"]);
console.log(Object.keys(obj1)); // 모든 속셩명 (keys)를 배열로 반환
console.log(Object.values(obj1)); // 모든 속성값 (values)를 배열로 반환
console.log(Object.entries(obj1)); // 모든 엔트리 (entries)를 배열로 반환

obj1.prop3 = true; // 추가
console.log(obj1);

obj1.prop2 = "world"; // 수정
console.log(obj1);

delete obj1.prop3; // 삭제
console.log(obj1);

let var1 = 10;
const var2 = {
    prop1 : 10, prop2 : var1, 
    prop3 : {}, prop4 : [],
    prop5 : function() {}
};
console.log(var2);

console.log('prop2' in var2); // 객체 내 특정한 속성이 있는지 확인 (true/false)

// 배열: 인덱스로 자료 구분, 동일한 자료의 묶음
// ['콜라', '사이다', '주스']

// 객체: 속성명으로 자료 구분, 서로 다른 자료의 묶음
// ['제품명': '콜라', '가격': 1000]