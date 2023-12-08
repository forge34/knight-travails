/*
* maybe an unecessary implementation of a Queue 
 */

class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0
        this.elements = []
    }

    push(element){
        this.elements[this.head] = element
        this.head++
    }

    pop(){
        this.head--
        return this.elements.shift()
    }

    empty(){
        return (this.head === 0) ? true:false
    }

    front(){
        return this.elements[this.tail]
    }
}

export {Queue}