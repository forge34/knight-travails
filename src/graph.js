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

    shortestPathBFS(start, end) {
        let q = new Queue()

        // create a map from the adjacenecy list and set the distance from every vertex to source as infinity 
        let dist = new Map(Object.keys(this.AdjancencyList).map(keys => [keys, Infinity]))
        let visited = []

        dist.set(start, 0)
        visited.push(start)
        q.push(start)

        while (!q.empty()) {
            // remove the first element of the queue 
            let current = q.pop()

            // get the adjacent vertices of current vertex 
            let adj = this.adjacent(current)


            for (const x in adj) {
                
                // if adjacent vertex isn't visited , add it to the visited list ( to avoid infinite loop)
                if (!visited.includes(adj[x])) {
                    visited.push(adj[x])

                    // set the distance of that adjacent vertex to 1 + the distance from source vertex
                    dist.set(adj[x], dist.get(current) + 1)

                    // if we find the vertex we are looking for , stop searching 
                    if (adj[x] === end) {
                        return `${end} is ${dist.get(adj[x])} from ${start}`
                    }
                    // add adjacent vertex to queue
                    q.push(adj[x])
                }
            }
        }
    }
}

export { Graph, number, board, letters }