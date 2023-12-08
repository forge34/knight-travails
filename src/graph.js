import { Queue } from './q.js'

// board coordinates 
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const number = ['1', '2', '3', '4', '5', '6', '7', '8']


// generate a board from x and y axis of the board
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

    /* 
    * add a vertex to graph
    @param vertex : vertex to add
     */
    addVertex(vertex) {
        if (!this.AdjancencyList[vertex])
            this.AdjancencyList[vertex] = []

        this.size++
    }


    /* 
    * Get adjacent vertices to a vertex
    @param vertex : vertex to find adjcanet vertices for
    */
    adjacent(vertex) {
        return this.AdjancencyList[vertex]
    }

    /* 
    * find tha path between 2 vertices
    @param start : start vertex
    @param end : end vertex
    @param path : a path generated from BFS
     */
    #findPath(start,end,path = {}){
        // make an array to store the path
        let npath = []

        // add the end vertex (destination to array)
        npath.push(end)

        // a variable to store the vertices in the path 
        let tmp = path[end]


        // a loop that generates path and stops once we are back to the start vertex 
        while(tmp != start){
            npath.push(tmp)
            tmp = path[tmp]
        }

        return npath.reverse()
    }

    /* 
    * find the shortest path between 2 nodes using modified BFS and help of find path function
    TODO make the loop stop when the end node is reached 
    @param start :
    @param end :    
    */
    shortestPathBFS(start,end) {
        // create a map from the adjacenecy list and set the distance from every vertex to source as infinity 
        let dist = new Map(Object.keys(this.AdjancencyList).map(keys => [keys, Infinity]))
        let visited = []
        let previous = {}
        let q = new Queue()

        q.push(start)
        dist.set(start,0)
        visited.push(start)

        while(!q.empty()){
            let prevVertex = q.pop()

            let adj = this.adjacent(prevVertex)
            for(let x in adj ){
                if(!visited.includes(adj[x]))
                {

                    // add current vertex to visited
                    visited.push(adj[x])

                    // set the distance of current adjacent vertex from start to be the distance of previous vertex + 1
                    dist.set(adj[x] , dist.get(prevVertex)+1)

                    // add a the previous vertex as a path to current 
                    previous[adj[x]] = prevVertex

                    // push current vertex to queue 
                    q.push(adj[x])
                }

            }
        }
        let np = this.#findPath(start,end,previous)
        console.log(`you made it from ${start} to ${end} in ${dist.get(end)}`)
        console.log(`your path is ${np}`)
    }
}

export { Graph, number, board, letters }