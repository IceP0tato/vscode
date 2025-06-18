/*document.write(`<h1>학생</h1>`);



const studentInfo = [
    { name: '재영', sid: '1', major: '컴퓨터공학과' },
    { name: '철수', sid: '2', major: '인공지능학과' },
    { name: '영희', sid: '3', major: '데이터사이언스학과' }
]

const subjectInfo = [
    { subid: '11', subname: '프로그래밍', profname: '이교수' },
    { subid: '11', subname: '프로그래밍', profname: '최교수' },
    { subid: '11', subname: '프로그래밍', profname: '이교수' }
]


const regInfo = [
    { regid: '20', sid: '1', subid: '11', grad: 'A' },
    { regid: '20', sid: '1', subid: '11', grad: 'B' },
    { regid: '20', sid: '1', subid: '11', grad: 'C' }
]
let pass = false;
let names = "";
let studen = "";
let subject = "";
let 이수여부 = '';
for (let i = 0; i <= studentInfo.length - 1; i++) {
    let studen = studentInfo[i];
    for (let a = 0; a <= subjectInfo.length - 1; a++) {
        subject = subjectInfo[a];

    }
}

let html = "";
for (let c = 0; c <= studentInfo.length - 1; c++) {
    let reg = regInfo[c];
    if (regInfo[c].grad == 'F') {
        이수여부 = "fail";
    } else {
        이수여부 = "pass";
    }
    html += `<h4> ${studentInfo[c].name} (${studentInfo[c].major})</h4>`
    html += `<hr/>
            <div>
            <h4>  웹 프로그래밍 기초 <span>(${subjectInfo[c].profname})</span></h4>
                <ul>
                    <li>성적 : ${regInfo[c].grad} </li>
                    <li>이수 여부 : ${이수여부} </li>
                </ul> 
                </div>`
}
document.write(html);*/

// 1. 데이터 모델링
const students = [
    { studentId: 2024001, name: "김철수", major: "컴퓨터공학과" },
    { studentId: 2024002, name: "이영희", major: "인공지능학과" },
    { studentId: 2024003, name: "박지성", major: "데이터사이언스학과" }
];
const courses = [
    { courseId: "CS101", courseName: "웹 프로그래밍 기초", professorName: "이교수" },
    { courseId: "AI202", courseName: "머신러닝 입문", professorName: "최교수" },
    { courseId: "DS303", courseName: "데이터 시각화", professorName: "박교수" }
];
const enrollments = [
    { enrollmentId: 1, studentId: 2024001, courseId: "CS101", grade: "A+" },
    { enrollmentId: 2, studentId: 2024001, courseId: "AI202", grade: "B" },
    { enrollmentId: 3, studentId: 2024002, courseId: "AI202", grade: "A" },
    { enrollmentId: 4, studentId: 2024002, courseId: "DS303", grade: "F" },
    { enrollmentId: 5, studentId: 2024003, courseId: "CS101", grade: "C+" }
];

// 2. 로직
for (let index=0; index<=students.length-1; index++) {
    const student = students[index];
    document.write(`<h3> ${student.name} (${student.major}) </h3>`);

    for (let j=0; j<=enrollments.length-1; j++) {
        const enrollment = enrollments[j];
        if (student.studentId == enrollment.studentId) {
            for (let k=0; k<=courses.length-1; k++) {
                const course = courses[k];
                if (course.courseId == enrollment.courseId) {
                    document.write(`<h4> ${course.courseName} (${course.professorName}) </h4>`);
                    document.write(`<h5> 성적: ${enrollment.grade}</h5>`);
                    document.write(`<h5> 이수 여부: ${enrollment.grade == 'F'?"Fail":"Pass"}`)
                }
            }
        }
    }
}