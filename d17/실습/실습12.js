const list = [
    { code: 1, date: '2025-06-19', item: '점심 식사', price: '9000' },
    { code: 2, date: '2025-06-19', item: '교통비', price: '1500' }
];

let code = list[list.length-1].code;
function submit() {
    const date = document.querySelector('#dateInput').value;
    const item = document.querySelector('#itemInput').value;
    const price = document.querySelector('#priceInput').value;

    code++;
    const obj = { code: code, date: date, item: item, price: price };
    list.push(obj);
    output();
}

output(); // 페이지가 열렸을 시 1회 호출 (페이지에 자동으로 불러오기)
function output() {
    const contentBody = document.querySelector('#contentBody');
    let html = '';
    for (let i=0; i<=list.length-1; i++) {
        const obj = list[i];
        html += `<tr>
                    <td>${obj.date}</td>
                    <td>${obj.item}</td>
                    <td>${obj.price}</td>
                </tr>`;
    }
    contentBody.innerHTML = html;
}