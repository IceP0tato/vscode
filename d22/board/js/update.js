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
            // 기존 게시물 정보를 input 마크업에 삽입
            document.querySelector('#titleInput').value = obj.title;
            document.querySelector('#contentInput').value = obj.content;
            return;
        }
    }
}

function boardUpdate() {
    const url = new URLSearchParams(location.search);
    const no = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {boardList = [];}
    else {boardList = JSON.parse(boardList);}

    for (let i=0; i<boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == no) {
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;
            localStorage.setItem('boardList', JSON.stringify(boardList));
            alert('수정 완료');
            location.href = `view.html?no=${obj.no}`;
        }
    }
}