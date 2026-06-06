class minHeap{
    constructor() {
        this.data=[]
    }

    parent(index){
        return Math.floor((index-1)/2)
    }

    leftChildIndex(index){
        return index*2+1
    }

    rightChildIndex(index){
        return index*2+2
    }

    size(){
        return this.data.length
    }

    peek(){
        return this.data[0]
    }

    swap(i,j){
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }

    push(val){
        this.data.push(val)
        this.bubbleup(this.size()-1)
    }

    bubbleup(index){
        while(index>0){
            const parent = this.parent(index)
            if(this.data[parent]<=this.data[index]) break
            this.swap(index,parent)
            index = parent
        }
    }

    pop(){

        if(this.size()===0) return undefined
        if(this.size()===1) return this.data.pop()

        const root = this.data[0]
        this.data[0] = this.data.pop()
        this.bubbledown(0)
        return root
    }

    bubbledown(index){
        let length = this.size()
        
        while(true){
            let left = this.leftChildIndex(index)
            let right = this.rightChildIndex(index)
            let smallest = index
            
            if(left<length && this.data[left] < this.data[smallest]){
                smallest = left
            }
            if(right<length && this.data[right] < this.data[smallest]){
                smallest = right
            }
            if(smallest === index) break

            this.swap(smallest, index)
            index = smallest
        }

    }
}

const findKthLargest = function(nums, k) {
    let heap = new minHeap()

    for(let num of nums){
        heap.push(num)

        if(heap.size()>k) heap.pop()
    }
    return heap.peek()
};