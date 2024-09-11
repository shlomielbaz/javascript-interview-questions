// Example:
// {severity: 10}, {severity: 100}, {severity: 40}, {severity: 90}, {severity: 50}, {severity: 40}, {severity: 20}
// will result:
// [95, 90, 50, 40, 40], order is not interesting

const severties = [
  { severity: 10 },
  { severity: 100 },
  { severity: 40 },
  { severity: 90 },
  { severity: 50 },
  { severity: 40 },
  { severity: 20 },
  { severity: 70 },
  { severity: 20 },
];

const getNextAlert = function* () {
  for (const severty of severties) {
    yield severty;
  }
};

function getTopNSeverities(n = 5) {
  topNSeverities = [];
  let min = 0;

  for (const alert of getNextAlert()) {
    const { severity } = alert;

    if (topNSeverities.length < n) {
      topNSeverities.push(severity);
      min = severity > min && min != 0 ? min : severity;
    } 
    else if (severity > min) {
      topNSeverities = topNSeverities.sort((a, b) => b - a);
      topNSeverities.pop();
      topNSeverities.push(severity);
      min = severity;
    }
  }

  return topNSeverities.sort((a, b) => b - a);
}

console.log(getTopNSeverities(4));
