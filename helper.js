const { OUTER_VALUE } = require('./const')

const hasEdge = (v1, v2) => v1 !== v2

const getNeighborEdgeCount = (v1, v2) => hasEdge(v1, v2) ? 1: 0

const getVal = (answer, x, y, defaultValue = OUTER_VALUE) => {
  if(answer[x] !== void 0 && answer[x][y] !== void 0) {
    return answer[x][y]
  }
  return defaultValue
}

const getCellEdgeCount = (answer, x, y) => {
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]
  return directions.reduce((acc, [dx, dy]) => acc + getNeighborEdgeCount(getVal(answer, x, y), getVal(answer, x + dx, y + dy)), 0)
}

module.exports = {
  getCellEdgeCount
}