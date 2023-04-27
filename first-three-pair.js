/*    
- To find a first three elements from a number array whose X is X
X = 6
arr = [1,2,3,4,5,6] // 1,2,3         */


const X = 6;
const arr = [1, 2, 3, 4, 5, 6];

function first_three_pairs(arr, X) {
  const pairs = [];
  const gaps = [];
  const gap_sum = [];

  for (let i = 0; i < arr.length; i++) {
    const elem1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const elem2 = arr[j];
      for (let k = j + 1; k < arr.length; k++) {
        const elem3 = arr[k];
        if (elem1 + elem2 + elem3 === X) {
          pairs.push([i, j, k]);
          gaps.push([j - i, k - j]);
          gap_sum.push([(j - i) + (k - j)]);
        }
      }
    }
  }

  
}


