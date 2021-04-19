class UnionFind {
  constructor(grid) {
    this.init(grid)
  }

  init(grid) {
    const m = grid.length
    const n = grid[0].length
    this.parent = Array(m * n + 1)
      .fill()
      .map((e, i) => i)
    this.size = Array(m * n + 1).fill(1)
    this.innerCount = 0
    this.outerCount = 1

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j]) {
          this.innerCount++
        } else {
          this.outerCount++
        }
      }
    }
    // console.log(this.innerCount, this.outerCount)
  }

  union(x, y, isInner) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) return

    if (this.size[rootX] > this.size[rootY]) {
      this.parent[rootX] = rootY
      this.size[rootY] += this.size[rootX]
    } else {
      this.parent[rootY] = rootX
      this.size[rootX] += this.size[rootY]
    }

    if(isInner) {
      this.innerCount--
    } else {
      this.outerCount--
    }
  }

  find(x) {
    while (this.parent[x] !== x && x !== -1) {
      this.parent[x] = this.parent[this.parent[x]]
      x = this.parent[x]
    }
    return x
  }

  getCount() {
    return this.innerCount
  }

  _getCount() {
    return {
      inner: this.innerCount,
      outer: this.outerCount,
    }
  }

  getInnerCount() {
    return this.innerCount
  }

  getOuterCount() {
    return this.outerCount
  }
}

module.exports = UnionFind
