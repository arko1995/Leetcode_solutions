const nearestExit = function(maze, entrance){
    const rows = maze.length;
    const cols = maze[0].length;

    const [sr, sc] = entrance;

    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    let q = [[sr,sc]]

    let visited = new Set();

    visited.add(`${sr},${sc}`);

    let step = 0;

    while(q.length>0){
        const size=q.length
        for(let i=0; i<size; i++){
            const [r,c] = q.shift()
            for(const [dr,dc] of dirs){
                const nr = r+dr
                const nc = c+dc

                if(nr<0 || nr>=rows || nc<0 || nc>=cols) continue
                
                if(maze[nr][nc] === '.' && !visited.has(`${nr},${nc}`)) {
                    
                    const onBorder = (nr===0 || nc===0 || nr===rows-1 || nc===cols-1)
                    
                    if(onBorder) return step + 1

                    visited.add(`${nr},${nc}`)
                    q.push([nr, nc])
                    
                }

            }

             
               
        }
        step++
        
           
        
    }
    return -1
}