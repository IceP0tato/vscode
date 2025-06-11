if (10 > 3) console.log("1. 10은 3보다 크다");
if (10 > 20) console.log("1. 10은 20보다 크다");

if (10 > 20) {
    console.log("2. 10은 20보다 크다");
    console.log("2. 10은 20보다 크다");
}

if (10 > 3) {
    console.log("3. 10은 3보다 크다");
} else {
    console.log("3. 10은 3보다 작다");
}

if (10 > 20) {
    console.log("4. 10은 20보다 크다");
} else if (10 > 3) {
    console.log("4. 10은 3보다 크다");
} else {
    console.log("4. 10은 3보다 작다");
}

let gender = "male";
let score = 80;
if (gender == "male") {
    if (score >= 90) {
        console.log("남자우수");
    }
    else {
        console.log("남자");
    }
} else {
    if (score >= 90) {
        console.log("여자우수"); 
    } else {
        console.log("여자");
    }
}