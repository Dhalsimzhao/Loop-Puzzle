const { getAreaCount } = require('./area')
const { getCellEdgeCount } = require('./helper')
const { EMPTY_VALUE, INNER_VALUE, OUTER_VALUE } = require('./const')

const resolve = (puzzle) => {
  const m = puzzle.length
  const n = puzzle[0].length
  const solutions = []

  const isValid = (solution, x, y) => {
    if(x === 0) return true

    // check upper cell edge count
    if(puzzle[x - 1][y] !== EMPTY_VALUE && puzzle[x - 1][y] !== getCellEdgeCount(solution, x - 1, y)) return false
    if(x === m - 1) {
      // last row need to check left cell
      if(y > 0 && puzzle[x][y - 1] !== EMPTY_VALUE && puzzle[x][y - 1] !== getCellEdgeCount(solution, x, y - 1)) return false
      if(y === n - 1) {
        // last cell need to check itself
        if(puzzle[x][y] !== EMPTY_VALUE && puzzle[x][y] !== getCellEdgeCount(solution, x, y)) return false
      }
    }
    return true
  }

  const backtrack = (solution, index) => {
    const m = solution.length
    const n = solution[0].length
    
    if(index === m * n) {
      const { inner, outer } = getAreaCount(solution)
      if(inner === 1 && outer === 1) {
        solutions.push(JSON.parse(JSON.stringify(solution)))
      }
      return
    }

    const x = Math.floor(index / n)
    const y = index % n
    for(const val of [INNER_VALUE, OUTER_VALUE]) {
      solution[x][y] = val
      if(!isValid(solution, x, y)) continue
      backtrack(solution, index + 1)
    }
    
  }

  const solution = Array(m).fill().map(() => Array(n).fill(OUTER_VALUE))
  backtrack(solution, 0)

  return solutions
}

module.exports = resolve