const combinationSum3 = function (k, n) {
    let res = []

    function backTrack (start, remainingSum, remainingK, path) {
        if(remainingSum === 0 && remainingK === 0) {
            res.push([...path])
            return
        }

        if(remainingSum<0) return

        for(let num = start; num<=9; num++){

            path.push(num)

            backTrack(num+1, remainingSum-num, remainingK-1,  path)

            path.pop()

        }


    }

    backTrack(1, n, k, [])

    return res
}