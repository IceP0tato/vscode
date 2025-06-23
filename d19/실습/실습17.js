function addWaiting() {
    const nameInput = document.querySelector('.nameInput');
    const phoneInput = document.querySelector('.phoneInput');
    const countInput = document.querySelector('.countInput');

    let no = 1;
    const name = nameInput.value;
    const phone = phoneInput.value;
    const count = countInput.value;

    let customerList = localStorage.getItem('List');
    if (customerList == null) { 
        console.log(true);
        customerList = [];
    } else { 
        console.log(false);
        customerList = JSON.parse(customerList); 
        no = customerList[customerList.length-1].no+1;
    }

    const obj = { no: no, name: name, phone: phone, count: count };
    customerList.push(obj);

    localStorage.setItem('List', JSON.stringify(customerList));
    nameInput.value = '';
    phoneInput.value = '';
    countInput.value = '';
    alert('등록이 완료되었습니다.');
    console.log("등록 완료");
}

function checkStatus() {
    const phoneCheck = document.querySelector('.phoneCheck');

    const phone = phoneCheck.value;

    let customerList = localStorage.getItem('List');
    if (customerList == null) {
        console.log(true);
        customerList = [];
    } else {
        console.log(false);
        customerList = JSON.parse(customerList);
    }

    for (let i=0; i<=customerList.length-1; i++) {
        if (customerList[i].phone == phone) {
            alert(`고객님의 대기번호는 ${customerList[i].no}번 입니다.`);
            phoneCheck.value = '';
            return;
        }
    }
    
    alert('대기 정보가 없습니다.');
}