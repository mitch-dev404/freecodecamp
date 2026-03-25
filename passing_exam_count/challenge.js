export function passingCount(data) {
  const scores = data[0];
  const passingScore = data[1];
  const passingScores = scores.filter((score) => score >= passingScore);
  const passingCount = passingScores.length;
  return passingCount;
}
