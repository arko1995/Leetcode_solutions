const numTilings = function(n){

    const MOD = 1000000007n

    let full0 = 1n;
    let full1 = 1n;

    let gap0 = 0n;
    let gap1 = 0n;

    if(n === 0) return 1
    if(n === 1) return 1

    for(let i=2; i<=n; i++){
        let fulli = (full0  + full1  + 2n*gap1)%MOD;
        let gapi = (gap1 + full0)%MOD;

        full0 = full1;
        full1 = fulli;
        gap1 = gapi;
    }

    return Number(full1)

}