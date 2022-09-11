let arr1 = [1,12,15, 26, 38];

let arr2 = [2,13,17,30,45];

var n = 5;
var resArr = [];

for(var i=0, j=0; i < n || j < n; ) {
  if(arr1[i] < arr2[j]) {
    resArr.push(arr1[i]);
    i++;
  } else if (arr1[i] > arr2[j]) {
    resArr.push(arr2[j]);
    j++;
  } else {
    if (i < n) {
      resArr.push(arr1[i]);
    i++;
    }
    if (j < n) { 
      resArr.push(arr2[j]);
      j++;
    }
  }
}

console.log((resArr[n - 1] + resArr[n]) / 2);
