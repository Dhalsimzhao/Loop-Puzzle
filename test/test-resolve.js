const resolve = require('../resolve')

const puzzles = [
  [
    [3, 3, -1],
    [-1, -1, -1]
  ],
  [
    [-1, -1, -1, -1, -1],
    [3, 0, 3, 2, 2],
    [-1, -1, 3, 2, -1],
    [-1, -1, 1, -1, -1],
    [3, -1, 3, 3, -1],
  ],
  [
    [-1, 3, 3, 2, -1],
    [-1, -1, -1, 3, -1],
    [-1, -1, 2, 1, 2],
    [-1, -1, -1, -1, -1],
    [-1, 2, 3, 1, -1],
  ],
]

puzzles.forEach(puzzle => {
  const answers = resolve(puzzle)
  console.log(answers)
})