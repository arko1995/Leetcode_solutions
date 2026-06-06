const findCircleNum = function(isConnected) {
    let visited = new Set();
    let province = 0;

    function dfs(city){
        visited.add(city)
        for(let cur=0; cur<isConnected[city].length; cur++){
            let connected = isConnected[city][cur];
            if(connected===1 && !visited.has(cur)){
                dfs(cur)
            }
        }
    }


    for(let i=0; i<isConnected.length; i++){
        if(!visited.has(i)){
            dfs(i)
            province++ 
        }
    }
    return province
};




