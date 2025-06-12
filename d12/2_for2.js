let fruitBox = ['사과', '포도', '딸기']; // length: 3, index: 0, 1, 2
for(let index = 0; index <= 2; index++) {
    console.log(fruitBox[index]);
}

for(let index = 0; index <= fruitBox.length-1; index++) {
    console.log(fruitBox[index]);
}

let dataList = [];
for (let count=1; count<=3; count++) {
    let data = prompt("data: ");
    dataList.push(data);
}
console.log(dataList);

document.write(`<ul>`);
for(let index=0; index<=dataList.length-1; index++) {
    document.write(`<li> ${dataList[index]} </li>`)
}
document.write(`</ul>`);

// let html = `<ul>`;
// for(let index=0; index<=2; index++) {
//      html += `<li> ${dataList[index]} </li>`;
// }
// html += `</ul>';