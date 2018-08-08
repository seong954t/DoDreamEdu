var names = [
    '김주협',
    '제형민',
    '권영인',
    '정재균',
    '노현성',
    '구자룡',
    '박태규',
    '최장훈',
    '김윤지',
    '조영관',
    '이은진',
    '박주연',
    '최준성',
    '황준혁',
    '장우종',
    '국재건',
    '송민정',
    '이혜련',
    '김양훈',
    '이하림',
    '조서형',
    '문예성',
]; 
function select() {
    var rand = names[Math.floor(Math.random() * names.length)];
    document.getElementById("name").innerHTML = rand;
}