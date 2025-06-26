// queryString: URL에 매개변수를 사용하는 방법 (location.href="URL?변수명=값&변수명=값")
// 페이지 이동(요청) 간의 데이터 전달 가능

let url = new URLSearchParams(location.search).get('param');
console.log(url);

let url2 = new URLSearchParams(location.search); // 현재 URL 경로를 반환하는 객체
console.log(url2);
let param = url2.get('param');
console.log(param);

let url3 = new URLSearchParams(location.search);
let pcode = url3.get('pcode');
console.log(pcode);
let page = url3.get('page');
console.log(page);

function move() {
    location.href = "1_queryString.html?sort=1&code=8";
}

let url4 = new URLSearchParams(location.search);
console.log(url4.get('sort'));
console.log(url4.get('code'));