for(let num = 1; num <= 5; num++) {
    console.log(num);
}

let sum = 0;
for (let num = 1; num <= 5; num++) {
    sum += num;
}
console.log(sum);

for (let num = 1; num <= 9; num++) {
    console.log(`2 X ${num} = ${2 * num}`);
}

let numList = [];
let int;
for (let num = 1; num <= 3; num++) {
    let int = prompt(`정수${num}:`);
    numList.push(int);
}