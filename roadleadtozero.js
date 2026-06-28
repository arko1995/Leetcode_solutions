const minReorder = function(n, connections) {
 
  let adj = Array.from({length:n}, ()=>[])

  for(const [u,v] of connections){
    adj[u].push([v,1])
    adj[v].push([u,0])
  }

  let visited = new Set()
  let count = 0;

  function dfs(node){
    visited.add(node)
    for(let [neighbour, needflip] of adj[node]){
      if (!visited.has(neighbour)){
        {
          if(needflip === 1 ){
            count++ }
           dfs(neighbour)
        }
      }
    }


  }

dfs(0)
return count
};

