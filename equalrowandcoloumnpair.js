const equalPairs = function(grid) {
let n = grid.length
let map = new Map()
let count = 0;

for(let r=0; r<n; r++){
    let rowKey = grid[r].join(",")
    map.set(rowKey,(map.get(rowKey) ?? 0)+1)
}

for(let c=0; c<n; c++){
    let col = []
    for(let r=0; r<n; r++){
        col.push(grid[r][c])
        
    }
    let colkey = col.join(",")
        count += map.get(colkey) ?? 0
}

return count
}


