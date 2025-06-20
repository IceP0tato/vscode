/* [ 실습15 - 인사 관리 대시보드 ] * 제출
1. 목표
    부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
    사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

2. 화면 구성
    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
    부서 관리 영역:
        부서 등록:  
            새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
        부서 목록:  
            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "부서명"과 "관리" 열로 구성됩니다.
            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:
        사원 등록:
            사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
            등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
            사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
        사원 목록:
            등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
            각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

    휴가 관리 영역:
        휴가 신청:
            등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
            휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
            휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
        휴가 신청 전체 목록:
            제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
            각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
            각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
        사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

    부서 관리 기능:
        등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

    사원 관리 기능:
        등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

    휴가 관리 기능:
        신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
        취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다. */

// ========================== 데이터 ===========================
const department = [
    { deptId: 1, name: "개발팀" },
    { deptId: 2, name: "디자인팀" },
    { deptId: 3, name: "기획팀" }
]; // 부서 데이터
const employee = [
    { empId: 1, deptId: 1, name: "김민준", title: "신입 개발자", img: "https://placehold.co/100x100" },
    { empId: 2, deptId: 2, name: "이서연", title: "수석 디자이너", img: "https://placehold.co/100x100" },
    { empId: 3, deptId: 3, name: "박도윤", title: "팀장", img: "https://placehold.co/100x100" },
    { empId: 4, deptId: 1, name: "유재석", title: "대리", img: "https://placehold.co/100x100" }
]; // 사원 데이터
const vacation = [
    { vacId: 1, empId: 1, start: "2020-01-01", end: "2020-12-31", reason: "병원 진료" },
    { vacId: 2, empId: 2, start: "2020-01-01", end: "2020-12-31", reason: "병원 진료" }
]; // 휴가 데이터

let currentDeptId = department.length;
let currentEmpId = employee.length;
let currentVacId = vacation.length;

// ========================== 부서 관리 ===========================
function addDept() {
    const dept = document.querySelector('#deptInput');
    const deptVal = dept.value;

    for (let i=0; i<=department.length-1; i++) {
        if (department[i].name == deptVal) {
            alert('이미 존재하는 부서명입니다.');
            console.log("Department Add Failed: 이미 존재하는 부서명");
            dept.value = '';
            return;
        } else if (deptVal == '') {
            alert('부서 이름을 입력해주세요.');
            console.log("Department Add Failed: 부서 이름이 입력되지 않음");
            return;
        }
    }

    const obj = {
        deptId: ++currentDeptId,
        name: deptVal
    }
    department.push(obj)

    console.log("Department Added: " + deptVal);
    dept.value = '';
    alert('부서 정보가 추가되었습니다.');
    showDept();
} // 부서 등록

function editDept(deptId) {
    for (let i=0; i<=department.length-1; i++) {
        if (department[i].deptId == deptId) {
            const name = prompt("수정할 부서명을 입력해주세요: ");
            if (name == '' || name == null) {
                alert('수정할 부서명이 입력되지 않았습니다.');
                console.log("Department Edit Failed: 부서 이름이 입력되지 않음");
                return;
            }

            department[i].name = name;
            alert('부서명이 수정되었습니다.');
            console.log("Department Edited: " + name);
            showDept();
            return;
        }
    }
    alert('해당 부서를 찾을 수 없습니다.');
    console.log("Department Edit Failed: 해당하는 부서가 없음");
} // 부서 수정

function deleteDept(deptId) {
    for (let i=0; i<=department.length-1; i++) {
        for (let j=0; j<=employee.length-1; i++) {
            if (department[i].deptId == employee[j].deptId) {
                alert('직원이 존재하는 부서는 삭제할 수 없습니다.');
                console.log("Department Delete Failed: 부서에 직원이 존재함");
                return;
            } // TODO
        }

        if (department[i].deptId == deptId) {
            const name = department[i].name;
            department.splice(i, 1);
            alert('부서 정보가 삭제되었습니다.');
            console.log("Department Deleted: " + name);
            showDept();
            return;
        }
    }
    alert('해당 부서를 찾을 수 없습니다.');
    console.log("Department Delete Failed: 해당하는 부서가 없음");
} // 부서 삭제

function getDept(deptId) {
    for (let i=0; i<=department.length-1; i++) {
        if (department[i].deptId == deptId) {
            return department[i];
        }
    }
    return null;
} // 부서 getter

showDept();
function showDept() {
    const tbody = document.querySelector('#main_department > div > table > tbody');
    const deptSelect = document.querySelector('#deptSelect');
    let html_department = '';
    let html_option = `<option value='' disabled selected>부서 선택</option>`;

    for (let i=0; i<=department.length-1; i++) {
        html_department += `<tr>
                    <td>${department[i].name}</td>
                    <td>
                        <button onclick="editDept(${department[i].deptId})">수정</button>
                        <button onclick="deleteDept(${department[i].deptId})">삭제</button>
                    </td>
                </tr>`; // 부서 수정, 삭제 onclick 이벤트
        html_option += `<option value=${department[i].deptId}>${department[i].name}</option>`;
    }

    tbody.innerHTML = html_department;
    deptSelect.innerHTML = html_option;
} // 부서 출력 및 가져오기 (사원 등록의 '부서' 선택 칸)

// ========================== 직원 관리 ===========================
function addEmp() {
    const name = document.querySelector('#nameInput');
    const title = document.querySelector('#titleInput');
    const deptSelect = document.querySelector('#deptSelect');
    const img = document.querySelector('#imgInput');

    const nameVal = name.value;
    const titleVal = title.value;
    const deptSelectVal = deptSelect.value;
    const imgVal = img.files[0];

    if (nameVal == '' || titleVal == '' || deptSelectVal == '') {
        alert('이름과 직급, 부서를 모두 입력해주세요.');
        console.log("Employee Add Failed: 비어있는 필드가 있음");
        return;
    }

    const obj = {
        empId: ++currentEmpId,
        deptId: Number(deptSelectVal),
        name: nameVal,
        title: titleVal,
        img: imgVal?URL.createObjectURL(imgVal):'https://placehold.co/100x100'
    }
    employee.push(obj)

    console.log("Employee Added: " + nameVal);
    name.value = '';
    title.value = '';
    deptSelect.value = '';
    img.value = '';
    alert('직원 정보가 등록되었습니다.');
    showEmp();
} // 직원 등록

function editEmp(empId) {
    for (let i=0; i<=employee.length-1; i++) {
        if (employee[i].empId == empId) {
            const name = prompt("이름을 입력해주세요: ");
            const title = prompt("직급을 입력해주세요: ");
            if (name == '' || title == '') {
                alert('입력되지 않은 정보가 있습니다.');
                console.log("Employee Edit Failed: 비어있는 필드가 있음");
                return;
            }

            // 부서, 사진 수정 TODO

            employee[i].name = name;
            employee[i].title = title;
            alert('직원 정보가 수정되었습니다.');
            console.log("Employee Edited: " + name);
            showEmp();
            return;
        }
    }
    alert('해당 직원을 찾을 수 없습니다.');
    console.log("Employee Edit Failed: 해당하는 직원이 없음");
} // 직원 수정

function deleteEmp(empId) {
    for (let i=0; i<=employee.length-1; i++) {
        if (employee[i].empId == empId) {
            const name = employee[i].name;

            for (let j=0; j<=vacation.length-1; j++) {
                if (employee[i].empId == vacation[j].empId) {
                    vacation.splice(j, 1);
                    showVac();
                    break;
                }
            }
            employee.splice(i, 1);
            alert('직원 정보가 삭제되었습니다.');
            console.log("Employee Deleted: " + name);
            showEmp();
            return;
        }
    }
    alert('해당 직원을 찾을 수 없습니다.');
    console.log("Employee Delete Failed: 해당하는 직원이 없음");
} // 직원 삭제

function getEmp(empId) {
    for (let i=0; i<=employee.length-1; i++) {
        if (employee[i].empId == empId) {
            return employee[i];
        }
    }
    return null;
} // 직원 getter

showEmp();
function showEmp() {
    const tbody = document.querySelector('#main_employee > div > table > tbody');
    const empSelect = document.querySelector('#empSelect');
    let html_employee = '';
    let html_option = `<option value='' disabled selected>이름 선택</option>`;

    for (let i=0; i<=employee.length-1; i++) {
        html_employee += `<tr>
                            <td><img src="${employee[i].img}"</td>
                            <td>${employee[i].name}</td>
                            <td>${getDept(employee[i].deptId).name}</td> 
                            <td>${employee[i].title}</td>
                            <td>
                                <button onclick="editEmp(${employee[i].empId})">수정</button>
                                <button onclick="deleteEmp(${employee[i].empId})">삭제</button>
                            </td>
                        </tr>`; // 직원 수정, 삭제 onclick 이벤트
        html_option += `<option value=${employee[i].empId}>${employee[i].name}</option>`;
    }

    tbody.innerHTML = html_employee;
    empSelect.innerHTML = html_option;
} // 직원 출력 및 가져오기 (휴가 등록의 '직원' 선택 칸)

// ========================== 휴가 관리 ===========================
function addVac() {
    const emp = document.querySelector('#empSelect');
    const start = document.querySelector('#startInput');
    const end = document.querySelector('#endInput');
    const reason = document.querySelector('#reasonInput');

    const empVal = emp.value;
    const startVal = start.value;
    const endVal = end.value;
    const reasonVal = reason.value;

    if (empVal == '' || startVal == '' || endVal == '' || reasonVal == '') {
        alert('내용을 모두 입력해주세요.');
        console.log("Vacation Add Failed: 비어있는 필드가 있음");
        return;
    } else if (startVal > endVal) {
        alert('올바른 휴가 일자를 입력해주세요.');
        console.log("Vacation Add Failed: 휴가 일자가 정상적으로 입력되지 않음");
        return;
    }

    const obj = {
        vacId: ++currentVacId,
        empId: Number(empVal),
        start: startVal,
        end: endVal,
        reason: reasonVal
    }
    vacation.push(obj)

    console.log("Vacation Added: " + employee[empVal-1].name);
    emp.value = '';
    start.value = '';
    end.value = '';
    reason.value = '';
    alert('휴가 신청이 등록되었습니다.');
    showVac();
} // 휴가 등록

function cancelVac(vacId) {
    for (let i=0; i<=vacation.length-1; i++) {
        if (vacation[i].vacId == vacId) {
            const name = getVac(vacation[i].empId).name;

            vacation.splice(i, 1);
            alert('휴가 신청이 취소되었습니다.');
            console.log("Vacation Canceled: " + name);
            showVac();
            return;
        }
    }
    alert('존재하지 않는 휴가 데이터입니다.');
    console.log("Vacation Cancel Failed: 해당하는 휴가가 없음");
} // 휴가 취소

function getVac(empId) {
    for (let i=0; i<=employee.length-1; i++) {
        if (employee[i].empId == empId) {
            return employee[i];
        }
    }
    return null;
} // 휴가 getter (employee -> name)

showVac();
function showVac() {
    const tbody = document.querySelector('#vacation_list');
    let html = '';

    for (let i=0; i<=vacation.length-1; i++) {
        html += `<ul>
                    <li>${getVac(vacation[i].empId).name}</li>
                    <li>${vacation[i].start}</li>
                    <li>~</li>
                    <li>${vacation[i].end}</li>
                    <li>${vacation[i].reason}</li>
                    <li><button onclick="cancelVac(${vacation[i].vacId})">신청취소</button></li>
                </ul>`
    }

    tbody.innerHTML = html;
}