// DOM (Document Object Model) 객체 : 문서 객체 모델
// HTML을 객체로 다루기 위한 내장 객체 (document 등)

// ex) console.log [console 내장 객체 내 log 함수 호출]
//     document.write() [document 객체 내 write 함수 호출]

document.write('Hello World');
console.log(document); // HTML 마크업 전체

const div = document.querySelector('div'); // HTML에 지정한 선택자를 JS 객체로 반환하는 함수
console.log(div); // <div>Box</div>

const box2 = document.querySelector('.box2');
console.log(box2); // <div class="box2">Box2</div>

const box3 = document.querySelector('#box3');
console.log(box3); // <div id="box3">Box3</div>

const all = document.querySelectorAll('div'); // HTML에 지정한 선택자를 모두 JS 객체(배열)로 반환하는 함수
console.log(all); // [div, div.box2, div#box3]

const div2 = document.querySelector('div');
const html = div2.innerHTML; // 마크업 내 html 내용물 (<마크업> !내용물! </마크업>)을 호출하는 속성
console.log(html); // Box

function func1() {
    console.log('func1 실행');
    const myInput = document.querySelector('.myInput');
    console.log(myInput);
    const text = myInput.value;
    console.log(text);
}

function func2() {
    console.log('func2 실행');
    document.querySelector('.title').innerHTML = 'JS에서 작성함';
}

function func3() {
    console.log('func3 실행');
    const title2 = document.querySelector('.title2');
    title2.style = 'color: red; font-size: 18px;'; // 요소 대입
    title2.style.backgroundColor = 'aqua'; // 요소 추가

    title2.classList.toggle('myStyle');
}

// dom객체.classList.add('클래스명') : 클래스 추가
// dom객체.classList.delete('클래스명') : 클래스 삭제
// dom객체.classList.toggle('클래스명') : 클래스가 없으면 추가, 있으면 삭제
// dom객체.classList.contains('클래스명') : 클래스가 있는지 확인 (Boolean)