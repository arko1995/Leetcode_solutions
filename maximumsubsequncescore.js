class minHeap{
    constructor(){
        this.heap=[]
    }

    size(){
        return this.heap.length
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

    swap(i,j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }

    peek(){
        return this.heap[0]
    }

    pop(){

        if(this.size()===0) return undefined
        if(this.size()===1) return this.heap.pop()

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

            if(left<len && this.heap[left]<this.heap[smallest]){
                smallest = left
            }
            if(right<len && this.heap[right]<this.heap[smallest]){
                smallest = right
            }

            if(smallest === index) break
            this.swap(smallest, index)
            index = smallest
        }
    }

    push(val){
        this.heap.push(val)
        this.bubbleUp(this.size()-1)
    }

    bubbleUp(index){
        while(index>0){
            let parent = this.parent(index)
            if(this.heap[parent]>this.heap[index]){
                this.swap(parent,index)
                index = parent
            }
            else{
                break
            }

        }
    }

}

const maxScore = function(nums1, nums2, k) {
    

    const pairs = nums2.map((num,i)=>[nums1[i],num]).sort((a,b)=>(b[1]-a[1]))

    const heap = new minHeap
    
    let heapSum = 0;
    let result = 0;

    for(const [val1, val2] of pairs){
        heap.push(val1)
        heapSum += val1

        if(heap.size()>k){
            let removed = heap.pop()
            heapSum -= removed
        }

        if(heap.size()===k){
            const score = heapSum*val2

            if(score>result){
                result = score
            }
        }
    }


    return result



};