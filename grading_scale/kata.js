// One Line Return

function getGrade(score) {
  return "FEDCBA"[parseInt((score > 0 ? score - 1 : 0) / 5)];
}

// Arrow Function One Liner

const getGrade = score => "FEDCBA"[parseInt((score > 0 ? score - 1 : 0) / 5)];

// If Else

function getGrade(score) {
  let grade;
  if (score < 5) {
    grade = "F";
  } else if (score > 5 && score < 10) {
    grade = "E";
  } else if (score > 10 && score < 15) {
    grade = "D";
  } else if (score > 15 && score < 20) {
    grade = "C";
  } else if (score > 20 && score < 25) {
    grade = "B";
  } else {
    grade = "A";
  }

  return grade;
}
