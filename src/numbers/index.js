const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((acc, cur) => acc + cur)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let x in arr) {
    for (let y in arr) {
      if (x + y === sum) {
        return true
      } else {
        return false
      }
    }
  }
}


module.exports = {
  isEven,
  sum,
  comboSum
}