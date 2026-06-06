var maxProfit = function(prices, fee){
    if(!prices.every(Number.isFinite)) return 0
    if(!Number.isFinite(fee)) fee=0

    let n = prices.length
    if(n === 0) return 0

   

    let cash = 0;
    let hold = -prices[0]-fee



    for(let i=1; i<prices.length; i++){
        
        let temp = cash
        cash = Math.max(cash, hold+prices[i])
        hold = Math.max(hold, temp-prices[i]-fee)
    
    }
  
    return cash

}