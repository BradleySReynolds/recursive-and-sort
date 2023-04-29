function fibonacci(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}
