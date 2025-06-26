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