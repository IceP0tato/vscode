function func1() {
    console.log('func1 실행');
} // 매개변수 x, 반환값 x
func1();

function func2(x, y) {
    console.log(`func2 실행 ${x+y}`);
} // 매개변수 o, 반환값 x
func2(2, 3);

function func3(x, y) {
    console.log('func3 실행');
    let result = x + y;
    return result;
} // 매개변수 o, 반환값 o
let a = func3(1, 5);
console.log(a);

function func4() {
    console.log('func4 실행');
    return "메세지";
} // 매개변수 x, 반환값 o
let b = func4();
console.log(b);

let globalVar = 'Global';
if (true) {
    let localVar = 'Local';
    console.log(globalVar);
    console.log(localVar);
    // console.log(localVar2); Error
    for (let i=0; i<1; i++) {
        let localVar2 = 'Local2';
        console.log(globalVar);
        console.log(localVar);
        console.log(localVar2);
    }
}
// console.log(localVar); Error
// console.log(localVar2); Error

let nameList = [];
function nameAdd() {
    let name = prompt('이름 : ');
    nameList.push(name);
}

nameAdd();
nameAdd();
console.log(nameList);


function clickEvent() {
    console.log('click');
}
clickEvent();
