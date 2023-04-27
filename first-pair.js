/*  
Questions for today 

- To find a first pair from a number array whose sum is X
X = 5
arr = [1,2,3,4,5,6] // 2,3             */

const X = 5;
const arr = [1, 2, 3, 4, 5, 6];

function find_elements_with_least_gap(arr, X) {
  let index_pair = null;
  let least_gap = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const elem_1 = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      const elem_2 = arr[k];
      if (elem_1 + elem_2 === X) {
        const gap = Math.abs(k - i);
        if (gap < least_gap) {
          index_pair = [i, k];
          least_gap = gap;
        }
      }
    }
  }
  if (index_pair !== null) {
    return [arr[index_pair[0]], arr[index_pair[1]]]; // return the elements at the index pair
  }
  return null; // return null if no pair is found
}

console.log(find_elements_with_least_gap(arr, X)); // output: [2, 3]


