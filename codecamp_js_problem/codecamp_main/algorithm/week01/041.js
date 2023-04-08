function grade(score) {
  // 엣지 케이스 처리
  if (score > 100 || score < 0) {
    return "잘못된 점수입니다";
  }

  let answer = "";

  if (score >= 90) answer = "A";
  else if (score >= 80) answer = "B";
  else if (score >= 70) answer = "C";
  else if (score >= 60) answer = "D";
  else answer = "F";

  return answer;
}

grade(105); // "잘못된 점수입니다"
grade(-10); // "잘못된 점수입니다"
grade(97); // "A"
grade(86); // "B"
grade(75); // "C"
grade(66); // "D"
grade(52); // "F"
