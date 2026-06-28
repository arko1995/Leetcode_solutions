const orangesRotting = function(grid){
    let m = grid.length
    if(grid.length === 0) return 0;
    let n = grid[0].length //assuming there is atleast one entry

    const dir = [[-1,0],[1,0],[0,-1],[0,1]]

    function enc(r, c) { return r*n+c}
    function dec(id){ return [Math.floor(id/n),id%n]}

    let q = [];
    let head = 0;

    let fresh = 0
    for (let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            if(grid[r][c]===1) fresh++
           else if(grid[r][c]===2){
               q.push(enc(r,c))
            }
        }
    }
        
    if(fresh===0) return 0
        let minutes = 0;

    while(head<q.length && fresh>0){
        let layersize = q.length-head
        for(let i=0; i<layersize; i++){
            let [r,c] = dec(q[head++])
            

        for(let d=0; d<4; d++){
            let nr = r+dir[d][0]
            let nc = c+dir[d][1]

            if(nr<0 || nr>=m || nc<0 || nc>=n) continue

            if(grid[nr][nc]===1){
                grid[nr][nc] = 2
                q.push(enc(nr, nc))
                fresh--
            }
        }
    }
        minutes++
}
    
    return fresh===0 ? minutes:-1
}
