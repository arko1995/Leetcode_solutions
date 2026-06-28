const canVisitAllRooms = function(rooms) {
    let n = rooms.length;
    let visited = new Set([0]);
    let stack = [0]

    while(stack.length>0){
        let room = stack.pop()
   
    for(let keys of rooms[room]){
        if(!visited.has(keys)){
            visited.add(keys)
            stack.push(keys)
        }
    }
}

    if(visited.size === rooms.length) return true
    else return false

};


