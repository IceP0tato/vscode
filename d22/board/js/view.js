getBoard();
function getBoard() {
    const url = new URLSearchParams(location.search);
    const no = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {boardList = [];}
    else {boardList = JSON.parse(boardList);}

    for (let i=0; i<boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == no) {
            document.querySelector('#title').innerHTML = obj.title;
            document.querySelector('#content').innerHTML = obj.content;
            return;
        }
    }
}

function boardDelete() {
    const url = new URLSearchParams(location.search);
    const no = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {boardList = [];}
    else {boardList = JSON.parse(boardList);}

    for (let i=0; i<boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == no) {
            const confirm = prompt("비밀번호 입력:");
            if (obj.pwd == confirm) {
                boardList.splice(i, 1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('삭제 완료');
                location.href = "list.html";
            } else {
                alert('비밀번호 불일치');
                return;
            }
        }
    }
}

function boardUpdateView() {
    const url = new URLSearchParams(location.search);
    const no = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {boardList = [];}
    else {boardList = JSON.parse(boardList);}

    for (let i=0; i<boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == no) {
            const confirm = prompt("비밀번호 입력:");
            if (obj.pwd == confirm) {
                location.href = `update.html?no=${no}`;
            } else {
                alert('비밀번호 불일치');
                return;
            }
        }
    }
}