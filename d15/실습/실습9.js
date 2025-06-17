const userInfo = [
    { userCode: 1, id: 'devkim', username: '김개발' },
    { userCode: 2, id: 'mrchoi', username: '최코딩' },
    { userCode: 3, id: 'parksv', username: '박서버' }
];
const subProduct = [
    { prodCode: 1, product: 'premium', price: '15000' },
    { prodCode: 2, product: 'basic', price: '9900' },
    { prodCode: 3, product: 'none', price: '' }
];
const subStatus = [
    { statCode: 1, status: 'active', userCode: 1, prodCode: 1 },
    { statCode: 2, status: 'expired', userCode: 2, prodCode: 2 },
    { statCode: 3, status: '', userCode: 3, prodCode: 3 }
];

const 회원테이블 = [{회원코드 : 1, 아이디 : 'id1', 회원이름 : '김개발'},
                  {회원코드 : 2, 아이디 : 'id2', 회원이름 : '최코딩'},
                  {회원코드 : 3, 아이디 : 'id3', 회원이름 : '박서버'}];

const 구독상품테이블 = [{상품코드 : 1, 상품명 : '프리미엄', 가격 : '월 15000원'},
                  {상품코드 : 2, 상품명 : '베이직', 가격 : '월 9900원'},
                  {상품코드 : 3, 상품명 : '광고형 베이직', 가격 : '월 4900원'}];

const 구독로그테이블 = [{구독번호 : 1, 회원코드 : 1, 상품코드 : 1, 구독종료일 : '2025-06-20' },
                  {구독번호 : 2, 회원코드 : 2, 상품코드 : 2, 구독종료일 : '2025-06-15' } ];

let html = `<h1>회원 구독 상태 대시보드</h1>`;
for (let i=0; i<=userInfo.length-1; i++) {
    html += `<hr />`
    html += `<h2>${userInfo[i].username}</h2>`;
    html += `<ul>`;

    if(subProduct[i].product == 'premium')
        html += `<li>구독 상품: 프리미엄 `;
    else if (subProduct[i].product == 'basic')
        html += `<li>구독 상품: 베이직 `;
    else {
        html += `</ul>구독 내역이 없습니다.`;
        continue;
    }
    html += `(월 ${subProduct[i].price}원)</li>`;

    html += `<li> 상태: `;
    if(subStatus[i].status == 'active')
        html += `<span style="font-weight: bold; color: green;">활성</span>`;
    else if (subStatus[i].status == 'expired')
        html += `<span style="font-weight: bold; color: grey;">만료</span>`;

    html += `</li></ul>`
}
document.write(html);