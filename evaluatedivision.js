const calcEquation = function(equations, values, queries) {
  
    const graph = new Map()

    function addEdge (from, to, weight){
        if(!graph.has(from)) graph.set(from,[])
            graph.get(from).push({Neighbor: to, Weight: weight})
    }

    for(let i=0; i<equations.length; i++){
        const [A,B] = equations[i]
            const K = values[i]
            addEdge(A, B, K)
            addEdge(B, A, 1/K)
        
    }

    function dfs(current, target, visited){
        if(!graph.has(current)) return -1;
        if(current === target) return 1
        visited.add(current)

        for(const {Neighbor, Weight} of graph.get(current)){
            if(visited.has(Neighbor)) continue
            let sub = dfs(Neighbor, target, visited)

            if(sub !== -1) return Weight*sub
        }
        return -1
    }

    const result = []

    for(const[start,end] of queries){
        if(!graph.has(start) || !graph.has(end)) result.push(-1)
            else if (start === end) result.push(1)
        else{
            let visited = new Set()
            result.push(dfs(start, end, visited ))
        }
    }


return result

};