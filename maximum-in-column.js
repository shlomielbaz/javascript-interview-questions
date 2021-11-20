S - represent a CSV string where each line seperate with break line (\n) 
C - represent the name of column

The task: you should return the maximum value of the given column (C)

function solution(S, C) {
  const lines = S.split('\n');
  let max = -Infinity
  if (lines.length > 0) {
      const cols = lines[0].split(',');
      const colIndex = cols.indexOf(C);

      for(i=1; i<lines.length; i++) {
          let line = lines[i];
          let row = line.split(',');
          
          if (row[colIndex] > max) {
              console.log(max, row[colIndex])
              max = Number(row[colIndex])
          }
      }
  }
  return max;
}

Assumptions: 
1. the columns number of each line is equal.
2. each given column name (C parameters) contains numeric values.
3. the given column name is exist in S string.


solution('city,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2', 'temp')
should return -2

solution('id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7', 'age')
should return 68
