for (let i=1; i<=3; i++) { // i: iterator (반복자)
    console.log(i);
} 

for (let i=1; i<=2; i++) {
    console.log(i);
    for (let j=1; j<=3; j++) {
        console.log(j);
    }
}

for (let i=2; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

let output = '';
for (let i=1; i<=5; i++) { // line (1~5)
    for (let j=1; j<=i; j++) { // star
        output += "*";
    }
    output += "\n"; // 줄바꿈
}
console.log(output); // *\n**\n***\n****\n*****\n

for (let i=1; i<=5; i++) {
    if (i==3) continue;
    console.log(i);
}

let sum = 0;
for (let i=1; i<=10; i++) {
    sum += i;
    if (sum > 10) break;
}
console.log(sum);

/* for (;;) {
    console.log("무한 루프");
} */

let numList = [];
for (;;) {
    let num = Number(prompt("로또 번호 입력: "));
    if (num > 45 || num < 1) {
        console.log("[경고] 1~45 사이의 값만 입력해주세요.");
        continue;
    }
    if(numList.indexOf(num) != -1) {
        console.log("[경고] 이미 선택한 수 입니다.");
        continue;
    }
    numList.push(num);
    if(numList.length == 6) {
        break;
    }
}
console.log(numList);