module.exports = function multiply(first, second) {
  let firstreversed = first.split('').reverse();
  let secondreversed = second.split('').reverse();

  let arr = [];

  for (let i = 0; i < firstreversed.length; i++) {
    for (let j = 0; j < secondreversed.length; j++) {
      let multiplication = firstreversed[i] * secondreversed[j];
      arr[i + j] = (arr[i + j]) ? arr[i + j] + multiplication : multiplication;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let newnumber = arr[i] % 10;
    let moving = Math.floor(arr[i] / 10);
    arr[i] = newnumber;

    if (arr[i + 1])
      arr[i + 1] += moving;
    else if (moving != 0)
      arr[i + 1] = moving;
  }


  return arr.reverse().join('');
}
