const UnionFind = require('./union-find')
const { INNER_VALUE, OUTER_VALUE } = require('./const')

const isExceed = (x, y, m, n) => {
  return x < 0 || y < 0 || x >= m || y >= n
}

const getAreaCount = grid => {
  const m = grid.length
  const n = grid[0].length
  const uf = new UnionFind(grid)
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const [dx, dy] of directions) {
        const nx = i + dx
        const ny = j + dy
        const currentCell = grid[i][j]
        const neighborInBoundary = !isExceed(nx, ny, m, n)

        if(neighborInBoundary) {
          const neighborCell = grid[nx][ny]
          if(currentCell && neighborCell) {
            uf.union(i * n + j, nx * n + ny, true)
          } else if(!currentCell && !neighborCell) {
            uf.union(i * n + j, nx * n + ny, false)
          }
        } else {
          if(!currentCell) {
            uf.union(i * n + j, m * n, false)
          }
        }
      }
    }
  }
  // console.log(uf.getInnerCount(), uf.getOuterCount())
  return {
    inner: uf.getInnerCount(),
    outer: uf.getOuterCount()
  }
}

module.exports = { 
  getAreaCount
}
