const list = [
    { code: 0, name: '홍길동', phoneNumber: '010-1234-5678', memo: '○○회사 부장' },
    { code: 1, name: '김철수', phoneNumber: '032-123-1234', memo: '□□물류 사장'}
];

let code = list[list.length-1].code;
function submit() {
    const name = document.querySelector('#nameInput').value;
    const phoneNumber = document.querySelector('#pnoInput').value;
    const memo = document.querySelector('#memoInput').value;

    code++;
    const obj = { code, name, phoneNumber, memo };
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
                    <td>${obj.name}</td>
                    <td>${obj.phoneNumber}</td>
                    <td>${obj.memo}</td>
                </tr>`;
    }
    contentBody.innerHTML = html;
}