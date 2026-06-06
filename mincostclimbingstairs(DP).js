const minCostClimbingStairs = function(cost) {
    let n = cost.length

    let dp = new Array(n+2).fill(0)

    for(let i=n-1; i>=0; i--){
        dp[i] = cost[i]+(Math.min(dp[i+1],dp[i+2]))
    }

    return (Math.min(dp[0], dp[1]))
};