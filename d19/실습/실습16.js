/* const memberList = [
    { no: 1, id: 'qwe', pw: 'qwe' },
    { no: 2, id: 'qew', pw: 'qew' }
]; */

function signup() {
    const signId = document.querySelector('.signId');
    const signPw = document.querySelector('.signPw');

    const id = signId.value;
    const pw = signPw.value;
    let no = 1; // 회원번호 초기값
    
    let memberList = sessionStorage.getItem('memberList'); // 속성명 memberList
    if (memberList == null) { // 존재하지 않으면 새로 생성, 존재하면 타입 변환
        memberList = [];
    } else {
        memberList = JSON.parse(memberList);
        no = memberList[memberList.length-1].no + 1; // 배열 내 마지막 인덱스의 회원번호 + 1
    }

    const obj = { no: no, id: id, pw: pw };
    memberList.push(obj);

    sessionStorage.setItem('memberList', JSON.stringify(memberList));
    console.log('signup completed');
}

function login() {
    const loginId = document.querySelector('.loginId');
    const loginPw = document.querySelector('.loginPw');

    const id = loginId.value;
    const pw = loginPw.value;

    let memberList = sessionStorage.getItem('memberList');
    if (memberList == null) {
        memberList = [];
        return;
    } else {
        memberList = JSON.parse(memberList);
    }

    for (let i=0; i<=memberList.length-1; i++) {
        if (memberList[i].id == id && memberList[i].pw == pw) {
            alert('로그인 성공');
            return;
        }
    }

    alert('로그인 실패');
}