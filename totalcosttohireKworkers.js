class minHeap{
    constructor(){
        this.heap=[]
    }

    peek(){
        return this.heap[0]
    }
    
    size(){
        return this.heap.length
    }

    swap(i,j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }

    parent(index){
        return Math.floor((index-1)/2)
    }

    leftChildIndex(index){
        return (index*2)+1
    }

    rightChildIndex(index){
        return (index*2)+2
    }

    push(val){
        this.heap.push(val)
        this.bubbleUp(this.size()-1)
    }

    bubbleUp(index){
        while(index>0){
        let parent = this.parent(index)
        if(this.heap[parent] > this.heap[index]){
            this.swap(index,parent)
            index = parent
        }
        else{
            break
        }
    
        }
    }

    pop(){
        if(this.heap.length===0) return undefined
        if(this.heap.length===1) return this.heap.pop()

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)

        return min
    }

    bubbleDown(index){

        let len = this.size()
        while(true){
            let left = this.leftChildIndex(index)
            let right = this.rightChildIndex(index)
            let smallest = index

            if(this.heap[left]<this.heap[smallest] && left<len){
                smallest = left
            }
            if(right<len && this.heap[right]<this.heap[smallest]){
                smallest = right
            }

            if(smallest===index) break

            this.swap(index,smallest)
            index = smallest
        }
    }


}

const totalCost = function(costs, k, candidates) {
    
    let n = costs.length


    let leftHeap = new minHeap
    let rightHeap = new minHeap

    let left = 0; 
    let right = n-1

    let total = 0; 

    while(k>0){
        while(leftHeap.size()<candidates && left <= right){
            leftHeap.push(costs[left])
            left++
        }
        while(rightHeap.size()<candidates && left<=right){
            rightHeap.push(costs[right])
            right--
        }

        if(leftHeap.size()===0){
            total += rightHeap.pop()
        }
        else if(rightHeap.size()===0){
            total += leftHeap.pop()
        }
        else{
            if(leftHeap.peek()<=rightHeap.peek()){
                total += leftHeap.pop()
            }
            else{
                total += rightHeap.pop()
            }
        }
        k--
    }

    return total
};