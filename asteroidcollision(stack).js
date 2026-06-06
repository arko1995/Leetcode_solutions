const asteroidCollision = function(asteroids) {
   
    let res = []

    for(let a of asteroids){
         let alive = true;
    while(alive && res.length>0 && res[res.length-1]>0 && a<0){
        let top = res[res.length-1]

        if(Math.abs(top) > Math.abs(a)){
            alive = false
        }
        else if(Math.abs(top) === Math.abs(a)){
            alive = false;
            res.pop()
        }
        else{
            res.pop()
        }
     }
    if(alive) res.push(a)
    
}
return res
};
