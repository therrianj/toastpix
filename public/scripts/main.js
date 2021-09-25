function toastRow (range) {
  let gridArray1 = Array.from({length: 3}, () => (Math.floor(Math.random() * range) + 1).toString());
  let gridArray2 = Array.from({length: 3}, () => (Math.floor(Math.random() * range) + 1).toString());
  let gridArray3 = Array.from({length: 3}, () => (Math.floor(Math.random() * range) + 1).toString());

  console.log(gridArray1, gridArray2, gridArray3)
  return([gridArray1, gridArray2, gridArray3])
}


module.exports = { toastRow }