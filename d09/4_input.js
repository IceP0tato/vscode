// 1. 브라우저의 확인/취소 알림 창 (확인=true, 취소=false)
confirm("(1) 입력 확인")

// 2. 브라우저의 텍스트 입력 알림 창
prompt("(2) 입력 요청")

// 3. 특정한 선택자의 텍스트 호출
document.querySelector("body").innerHTML

// 4. 특정한 선택자의 value 값 호출
document.querySelector("body").value


let result1 = confirm("확인 또는 취소?")
console.log(result1)

let result2 = prompt("입력 요청?")
console.log(result2)