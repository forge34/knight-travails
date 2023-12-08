class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0
        this.elements = []
    }

    push(element){
       
        if (Array.isArray(element)){
            element.forEach(e => this.elements.push(e))
        }
        else this.elements[this.head] = element
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

    clear(){
        this.elements = new Array(0)
    }
}

export {Queue}