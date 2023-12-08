import { Queue } from './q.js'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const number = ['1', '2', '3', '4', '5', '6', '7', '8']

const board = letters.flatMap(x => number.map(n => `${x}${n}`))


class Graph {
    constructor() {
        this.AdjancencyList = {}
        this.size = 0
    }
    /* 
      * adds an edge between 2 vertices
       
      @param start : start vertex
      @param end : end vertex
     */
    addEdge(start, end) {
        if (!this.AdjancencyList[start])
            this.addVertex(start)

        if (!this.AdjancencyList[end])
            this.addVertex(end)


        if (this.AdjancencyList[start].includes(end))
            this.AdjancencyList[start] = [...this.AdjancencyList[start]]
        else this.AdjancencyList[start] = [end, ...this.AdjancencyList[start]]

        if (this.AdjancencyList[end].includes(start))
            this.AdjancencyList[end] = [...this.AdjancencyList[end]]
        else this.AdjancencyList[end] = [start, ...this.AdjancencyList[end]]
    }

    addVertex(vertex) {
        if (!this.AdjancencyList[vertex])
            this.AdjancencyList[vertex] = []

        this.size++
    }

    adjacent(vertex) {
        return this.AdjancencyList[vertex]
    }

    bfs(vertex) {
        let visited = []
        let q = new Queue()

        q.push(vertex)

        while (!q.empty()) {
            let curr = q.pop()

            if (!visited.includes(curr)) {
                console.log(curr)
                visited.push(curr)

                let adj = this.adjacent(curr)

                for (let x in adj) {
                    const e = adj[x]

                    if (!visited.includes(e))
                        q.push(e)
                }

            }
        }
    }

    #findPath(start,end,path = {}){
        let npath = []

        npath.push(end)
        let tmp = path[end]

        while(tmp != start){
            npath.push(tmp)
            tmp = path[tmp]
        }

        return npath.reverse()
    }

    shortestPathBFS(start,end) {
        // create a map from the adjacenecy list and set the distance from every vertex to source as infinity 
        let dist = new Map(Object.keys(this.AdjancencyList).map(keys => [keys, Infinity]))
        let visited = []
        let path = {}
        let q = new Queue()

        q.push(start)
        dist.set(start,0)
        visited.push(start)

        while(!q.empty()){
            let current = q.pop()

            let adj = this.adjacent(current)
            for(let x in adj ){
                if(!visited.includes(adj[x]))
                {
                    visited.push(current)
                    dist.set(adj[x] , dist.get(current)+1)
                    path[adj[x]] = current
                    q.push(adj[x])
                }

            }
        }
        let np = this.#findPath(start,end,path)
        console.log(`you made it from ${start} to ${end} in ${dist.get(end)}`)
        console.log(`your path is ${np}`)
    }
}

export { Graph, number, board, letters }