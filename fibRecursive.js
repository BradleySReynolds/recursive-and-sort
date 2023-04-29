function fibbonaci(num, n1 = 0, n2 = 1, arr = []) {
  if (arr.length === num) return arr;

  if (arr.length === 0) arr.push(0, 1);

  if (arr.length !== 0)
    return (
      arr.push(Number(arr[n1] + arr[n2])), fibbonaci(num, n1 + 1, n2 + 1, arr)
    );
}

console.log(fibbonaci(8));
