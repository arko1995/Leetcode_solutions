class minHeap{
    constructor(){
        this.heap = []
    }

    size(){
        return this.heap.length
    }

    parent(val){
        return Math.floor((val-1)/2)
    }

    leftChildIndex(index){
        return (index*2)+1
    }

    rightChildIndex(index){
        return (index*2)+2
    }

    peek(){
        return this.heap[0]
    }

    swap(i,j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }

    push(index){
        this.heap.push(index)
        this.bubbleup(this.size()-1)
    }

    bubbleup(index){
        while(index>0){
            const parent = this.parent(index)
            if(this.heap[parent] <= this.heap[index]) break
            this.swap(parent, index)
            index = parent
        }
    }

    pop(){

        if(this.size()===0) return undefined
        if(this.size()===1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return min
    }

    bubbleDown(index){
        let length = this.size()
        
        while(true){
            let left = this.leftChildIndex(index)
            let right = this.rightChildIndex(index)
            let smallest = index

            if(left<length && this.heap[left] < this.heap[smallest]){
                smallest = left
            }
            if(right<length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }

            if(smallest === index) break

            this.swap(smallest, index)

            index = smallest
        }
    }


}

const SmallestInfiniteSet = function() {
    this.heap = new minHeap()
    this.set = new Set()
    this.next = 1
};

SmallestInfiniteSet.prototype.popSmallest = function() {
    while(this.heap.size()>0){
        let min = this.heap.pop()
        this.set.delete(min)
        return min
        
    }
    return this.next++
};

SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num<this.next && !this.set.has(num)){
        this.heap.push(num)
        this.set.add(num)
    }
};