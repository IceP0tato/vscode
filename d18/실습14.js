const categoryList = [
    { cno: 1, cname: '음료' },
    { cno: 2, cname: '과자류' }
];
let currentCno = 2; // 코드번호 자동 대입용
const productList = [
    { pno: 1, cno: 1, pname: '코카콜라', pprice: 1000, pimg: 'https://placehold.co/100x100', pdate: '2025-06-17' },
    { pno: 2, cno: 2, pname: '새우깡', pprice: 1200, pimg: 'https://placehold.co/100x100', pdate: '2025-06-18' },
    { pno: 3, cno: 1, pname: '칠성사이다', pprice: 900, pimg: 'https://placehold.co/100x100', pdate: '2025-06-19' }
];
let currentPno = 3;

categoryPrint();
function categoryPrint() {
    const categoryInput = document.querySelector('#categoryInput');
    let html = '<option value="" disabled selected>카테고리를 선택하세요</option>';

    for (let i=0; i<=categoryList.length-1; i++) {
        html += `<option value="${categoryList[i].cno}">${categoryList[i].cname}</option>`;
    }
    
    categoryInput.innerHTML = html;
} // 카테고리 출력

function productAdd() {
    const categoryInput = document.querySelector('#categoryInput')
    const pnameInput = document.querySelector('#pnameInput')
    const ppriceInput = document.querySelector('#ppriceInput')
    const pimgInput = document.querySelector('#pimgInput') 

    const cno = categoryInput.value;
    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pimg = pimgInput.files[0]; // 선택된 첨부파일의 첫 번째 파일 가져오기

    if (cno == '' || pname == '' || pprice == '') {
        alert('비어있는 항목이 있습니다.');
        return; // 반환값 없는 함수 종료
    }

    let year = new Date().getFullYear(); // 현재 연도 반환
    let month = new Date().getMonth()+1; // 현재 월 반환 (1월이 0부터 시작하니 +1)
    month = month<9?`0${month}`:month; // month가 한자리 수이면 앞에 '0' 붙임
    let day = new Date().getDate(); // 현재 일 반환 (getDay()는 요일 반환)
    day = day<9?`0${day}`:day;
    let pdate = `${year}-${month}-${day}`;

    const obj = {
        pno: ++currentPno, // 1 증가 후 구성
        cno: Number(cno),
        pname: pname,
        pprice: Number(pprice), // 숫자형 타입 변환
        pimg: pimg?URL.createObjectURL(pimg):'https://placehold.co/100x100', // 업로드한 파일 객체의 url 주소 생성
        pdate: pdate
    }
    productList.push(obj);

    categoryInput.value = '';
    pnameInput.value = '';
    ppriceInput.value = '';
    alert('제품 등록이 완료되었습니다.');

    productPrint();
} // 제품 등록

productPrint();
function productPrint() {
    const tbody = document.querySelector('#main > table > tbody');

    let html = '';
    for (let i=0; i<=productList.length-1; i++) {
        const product = productList[i];

        html += `<tr>
                    <td><img src="${product.pimg}" /></td>
                    <td>${getCategory(product.cno).cname}</td>
                    <td>${product.pname}</td>
                    <td>${product.pprice.toLocaleString()}</td>
                    <td>${product.pdate}</td>
                    <td>
                        <button onclick="productDelete(${product.pno})" class="btnDelete">삭제</button>
                        <button onclick="productEdit(${product.pno})" class="btnEdit">수정</button>
                    </td>
                </tr>`
    }
    tbody.innerHTML = html;
} // 제품 출력

function productDelete(pno) {
    console.log("Delete" + pno);
    for (let i=0; i<=productList.length-1; i++) {
        if (productList[i].pno == pno) {
            productList.splice(i, 1); // 해당 index (i)에서 요소 1개 삭제
            alert('제품이 삭제되었습니다.');
            productPrint(); // 삭제 이후 다시 불러오기
            return;
        }
    }
    alert('해당 상품을 찾을 수 없습니다.');
} // 제품 삭제

function productEdit(pno) {
    console.log("Edit" + pno);
    for (let i=0; i<=productList.length-1; i++) {
        if (productList[i].pno == pno) {
            const pname = prompt("수정할 제품명: ");
            const pprice = prompt("수정할 가격: ");
            productList[i].pname = pname;
            productList[i].pprice = Number(pprice);
            alert('제품이 수정되었습니다.');
            productPrint();
            return;
        }
    }
    alert('해당 상품을 찾을 수 없습니다.');
} // 제품 수정

function getCategory(cno) {
    for (let i=0; i<=categoryList.length-1; i++) {
        if (categoryList[i].cno == cno) {
            return categoryList[i];
        }
    }
    return null;
} // 카테고리명 탐색