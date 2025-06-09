let name = prompt("사용자의 이름을 입력해주세요:");
let exercise = prompt("오늘 하신 운동의 종류를 입력해주세요:");
let exercise_time = prompt("오늘 운동을 얼마나 하셨는지 적어주세요 (분 단위):");

let kcal_per_minutes = exercise_time * 7;

console.log("[운동 기록]");
console.log("이름");
console.log(name);
console.log("운동종류");
console.log(exercise + " 운동");
console.log("운동시간");
console.log(exercise_time);
console.log("칼로리");
console.log(kcal_per_minutes);