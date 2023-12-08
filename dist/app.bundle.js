/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graph: () => (/* binding */ Graph),
/* harmony export */   board: () => (/* binding */ board),
/* harmony export */   letters: () => (/* binding */ letters),
/* harmony export */   number: () => (/* binding */ number)
/* harmony export */ });
/* harmony import */ var _q_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./q.js */ "./src/q.js");


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
        let q = new _q_js__WEBPACK_IMPORTED_MODULE_0__.Queue()

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



/***/ }),

/***/ "./src/q.js":
/*!******************!*\
  !*** ./src/q.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queue: () => (/* binding */ Queue)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ "./src/graph.js");


// possible moves of knight
let possibleMoves = [
    [ -1, 2 ],  [ -1, -2 ],
    [ 1, 2 ],   [ 1, -2 ],
    [ 2, -1 ],  [ 2, 1 ],
    [ -2, -1 ], [ -2, 1 ]
]

let g = new _graph__WEBPACK_IMPORTED_MODULE_0__.Graph()

// function to fill adjcanecy list of all possible moves
function fillGraph(start){
    let l= _graph__WEBPACK_IMPORTED_MODULE_0__.letters.indexOf(start[0])
    let n = _graph__WEBPACK_IMPORTED_MODULE_0__.number.indexOf(start[1])

    for (let i=0;i<8;i++){
        let nposx = _graph__WEBPACK_IMPORTED_MODULE_0__.letters[l+possibleMoves[i][0]]
        let nposy = _graph__WEBPACK_IMPORTED_MODULE_0__.number[n+possibleMoves[i][1]]

        if (nposy && nposx)
            g.addEdge(start,`${nposx}${nposy}`)
    }

}

_graph__WEBPACK_IMPORTED_MODULE_0__.board.forEach(element => {
    fillGraph(element)
});


g.shortestPathBFS('f5','h8')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxzREFBc0QsRUFBRSxFQUFFLEVBQUU7OztBQUc1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdDQUFLOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU8sS0FBSyxLQUFLLEtBQUssY0FBYztBQUM1RSxvQ0FBb0MsR0FBRztBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHlDQUFLOztBQUVqQjtBQUNBO0FBQ0EsV0FBVywyQ0FBTztBQUNsQixZQUFZLDBDQUFNOztBQUVsQixpQkFBaUIsSUFBSTtBQUNyQixvQkFBb0IsMkNBQU87QUFDM0Isb0JBQW9CLDBDQUFNOztBQUUxQjtBQUNBLCtCQUErQixNQUFNLEVBQUUsTUFBTTtBQUM3Qzs7QUFFQTs7QUFFQSx5Q0FBSztBQUNMO0FBQ0EsQ0FBQzs7O0FBR0QsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9xLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVldWUgfSBmcm9tICcuL3EuanMnXG5cbi8vIGJvYXJkIGNvb3JkaW5hdGVzIFxuY29uc3QgbGV0dGVycyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJ11cbmNvbnN0IG51bWJlciA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4J11cblxuXG4vLyBnZW5lcmF0ZSBhIGJvYXJkIGZyb20geCBhbmQgeSBheGlzIG9mIHRoZSBib2FyZFxuY29uc3QgYm9hcmQgPSBsZXR0ZXJzLmZsYXRNYXAoeCA9PiBudW1iZXIubWFwKG4gPT4gYCR7eH0ke259YCkpXG5cblxuY2xhc3MgR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkFkamFuY2VuY3lMaXN0ID0ge31cbiAgICAgICAgdGhpcy5zaXplID0gMFxuICAgIH1cblxuICAgIC8qIFxuICAgICAgKiBhZGRzIGFuIGVkZ2UgYmV0d2VlbiAyIHZlcnRpY2VzXG4gICAgICAgXG4gICAgICBAcGFyYW0gc3RhcnQgOiBzdGFydCB2ZXJ0ZXhcbiAgICAgIEBwYXJhbSBlbmQgOiBlbmQgdmVydGV4XG4gICAgICovXG4gICAgYWRkRWRnZShzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICghdGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF0pXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChzdGFydClcblxuICAgICAgICBpZiAoIXRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXSlcbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KGVuZClcblxuICAgICAgICBpZiAodGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF0uaW5jbHVkZXMoZW5kKSlcbiAgICAgICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdID0gWy4uLnRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdXVxuICAgICAgICBlbHNlIHRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdID0gW2VuZCwgLi4udGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF1dXG5cbiAgICAgICAgaWYgKHRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXS5pbmNsdWRlcyhzdGFydCkpXG4gICAgICAgICAgICB0aGlzLkFkamFuY2VuY3lMaXN0W2VuZF0gPSBbLi4udGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdXVxuICAgICAgICBlbHNlIHRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXSA9IFtzdGFydCwgLi4udGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdXVxuICAgIH1cblxuICAgIC8qIFxuICAgICogYWRkIGEgdmVydGV4IHRvIGdyYXBoXG4gICAgQHBhcmFtIHZlcnRleCA6IHZlcnRleCB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRWZXJ0ZXgodmVydGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5BZGphbmNlbmN5TGlzdFt2ZXJ0ZXhdKVxuICAgICAgICAgICAgdGhpcy5BZGphbmNlbmN5TGlzdFt2ZXJ0ZXhdID0gW11cblxuICAgICAgICB0aGlzLnNpemUrK1xuICAgIH1cblxuXG4gICAgLyogXG4gICAgKiBHZXQgYWRqYWNlbnQgdmVydGljZXMgdG8gYSB2ZXJ0ZXhcbiAgICBAcGFyYW0gdmVydGV4IDogdmVydGV4IHRvIGZpbmQgYWRqY2FuZXQgdmVydGljZXMgZm9yXG4gICAgKi9cbiAgICBhZGphY2VudCh2ZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQWRqYW5jZW5jeUxpc3RbdmVydGV4XVxuICAgIH1cblxuICAgIC8qIFxuICAgICogZmluZCB0aGEgcGF0aCBiZXR3ZWVuIDIgdmVydGljZXNcbiAgICBAcGFyYW0gc3RhcnQgOiBzdGFydCB2ZXJ0ZXhcbiAgICBAcGFyYW0gZW5kIDogZW5kIHZlcnRleFxuICAgIEBwYXJhbSBwYXRoIDogYSBwYXRoIGdlbmVyYXRlZCBmcm9tIEJGU1xuICAgICAqL1xuICAgICNmaW5kUGF0aChzdGFydCxlbmQscGF0aCA9IHt9KXtcbiAgICAgICAgLy8gbWFrZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgcGF0aFxuICAgICAgICBsZXQgbnBhdGggPSBbXVxuXG4gICAgICAgIC8vIGFkZCB0aGUgZW5kIHZlcnRleCAoZGVzdGluYXRpb24gdG8gYXJyYXkpXG4gICAgICAgIG5wYXRoLnB1c2goZW5kKVxuXG4gICAgICAgIC8vIGEgdmFyaWFibGUgdG8gc3RvcmUgdGhlIHZlcnRpY2VzIGluIHRoZSBwYXRoIFxuICAgICAgICBsZXQgdG1wID0gcGF0aFtlbmRdXG5cblxuICAgICAgICAvLyBhIGxvb3AgdGhhdCBnZW5lcmF0ZXMgcGF0aCBhbmQgc3RvcHMgb25jZSB3ZSBhcmUgYmFjayB0byB0aGUgc3RhcnQgdmVydGV4IFxuICAgICAgICB3aGlsZSh0bXAgIT0gc3RhcnQpe1xuICAgICAgICAgICAgbnBhdGgucHVzaCh0bXApXG4gICAgICAgICAgICB0bXAgPSBwYXRoW3RtcF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBucGF0aC5yZXZlcnNlKClcbiAgICB9XG5cbiAgICAvKiBcbiAgICAqIGZpbmQgdGhlIHNob3J0ZXN0IHBhdGggYmV0d2VlbiAyIG5vZGVzIHVzaW5nIG1vZGlmaWVkIEJGUyBhbmQgaGVscCBvZiBmaW5kIHBhdGggZnVuY3Rpb25cbiAgICBUT0RPIG1ha2UgdGhlIGxvb3Agc3RvcCB3aGVuIHRoZSBlbmQgbm9kZSBpcyByZWFjaGVkIFxuICAgIEBwYXJhbSBzdGFydCA6XG4gICAgQHBhcmFtIGVuZCA6ICAgIFxuICAgICovXG4gICAgc2hvcnRlc3RQYXRoQkZTKHN0YXJ0LGVuZCkge1xuICAgICAgICAvLyBjcmVhdGUgYSBtYXAgZnJvbSB0aGUgYWRqYWNlbmVjeSBsaXN0IGFuZCBzZXQgdGhlIGRpc3RhbmNlIGZyb20gZXZlcnkgdmVydGV4IHRvIHNvdXJjZSBhcyBpbmZpbml0eSBcbiAgICAgICAgbGV0IGRpc3QgPSBuZXcgTWFwKE9iamVjdC5rZXlzKHRoaXMuQWRqYW5jZW5jeUxpc3QpLm1hcChrZXlzID0+IFtrZXlzLCBJbmZpbml0eV0pKVxuICAgICAgICBsZXQgdmlzaXRlZCA9IFtdXG4gICAgICAgIGxldCBwcmV2aW91cyA9IHt9XG4gICAgICAgIGxldCBxID0gbmV3IFF1ZXVlKClcblxuICAgICAgICBxLnB1c2goc3RhcnQpXG4gICAgICAgIGRpc3Quc2V0KHN0YXJ0LDApXG4gICAgICAgIHZpc2l0ZWQucHVzaChzdGFydClcblxuICAgICAgICB3aGlsZSghcS5lbXB0eSgpKXtcbiAgICAgICAgICAgIGxldCBwcmV2VmVydGV4ID0gcS5wb3AoKVxuXG4gICAgICAgICAgICBsZXQgYWRqID0gdGhpcy5hZGphY2VudChwcmV2VmVydGV4KVxuICAgICAgICAgICAgZm9yKGxldCB4IGluIGFkaiApe1xuICAgICAgICAgICAgICAgIGlmKCF2aXNpdGVkLmluY2x1ZGVzKGFkalt4XSkpXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBjdXJyZW50IHZlcnRleCB0byB2aXNpdGVkXG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWQucHVzaChhZGpbeF0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBkaXN0YW5jZSBvZiBjdXJyZW50IGFkamFjZW50IHZlcnRleCBmcm9tIHN0YXJ0IHRvIGJlIHRoZSBkaXN0YW5jZSBvZiBwcmV2aW91cyB2ZXJ0ZXggKyAxXG4gICAgICAgICAgICAgICAgICAgIGRpc3Quc2V0KGFkalt4XSAsIGRpc3QuZ2V0KHByZXZWZXJ0ZXgpKzEpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgdGhlIHByZXZpb3VzIHZlcnRleCBhcyBhIHBhdGggdG8gY3VycmVudCBcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNbYWRqW3hdXSA9IHByZXZWZXJ0ZXhcblxuICAgICAgICAgICAgICAgICAgICAvLyBwdXNoIGN1cnJlbnQgdmVydGV4IHRvIHF1ZXVlIFxuICAgICAgICAgICAgICAgICAgICBxLnB1c2goYWRqW3hdKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBucCA9IHRoaXMuI2ZpbmRQYXRoKHN0YXJ0LGVuZCxwcmV2aW91cylcbiAgICAgICAgY29uc29sZS5sb2coYHlvdSBtYWRlIGl0IGZyb20gJHtzdGFydH0gdG8gJHtlbmR9IGluICR7ZGlzdC5nZXQoZW5kKX1gKVxuICAgICAgICBjb25zb2xlLmxvZyhgeW91ciBwYXRoIGlzICR7bnB9YClcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyYXBoLCBudW1iZXIsIGJvYXJkLCBsZXR0ZXJzIH0iLCIvKlxuKiBtYXliZSBhbiB1bmVjZXNzYXJ5IGltcGxlbWVudGF0aW9uIG9mIGEgUXVldWUgXG4gKi9cblxuY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWQgPSAwO1xuICAgICAgICB0aGlzLnRhaWwgPSAwXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgIH1cblxuICAgIHB1c2goZWxlbWVudCl7XG4gICAgICAgIHRoaXMuZWxlbWVudHNbdGhpcy5oZWFkXSA9IGVsZW1lbnRcbiAgICAgICAgdGhpcy5oZWFkKytcbiAgICB9XG5cbiAgICBwb3AoKXtcbiAgICAgICAgdGhpcy5oZWFkLS1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHMuc2hpZnQoKVxuICAgIH1cblxuICAgIGVtcHR5KCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oZWFkID09PSAwKSA/IHRydWU6ZmFsc2VcbiAgICB9XG5cbiAgICBmcm9udCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50c1t0aGlzLnRhaWxdXG4gICAgfVxufVxuXG5leHBvcnQge1F1ZXVlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR3JhcGggLG51bWJlcixsZXR0ZXJzLGJvYXJkfSBmcm9tIFwiLi9ncmFwaFwiO1xuXG4vLyBwb3NzaWJsZSBtb3ZlcyBvZiBrbmlnaHRcbmxldCBwb3NzaWJsZU1vdmVzID0gW1xuICAgIFsgLTEsIDIgXSwgIFsgLTEsIC0yIF0sXG4gICAgWyAxLCAyIF0sICAgWyAxLCAtMiBdLFxuICAgIFsgMiwgLTEgXSwgIFsgMiwgMSBdLFxuICAgIFsgLTIsIC0xIF0sIFsgLTIsIDEgXVxuXVxuXG5sZXQgZyA9IG5ldyBHcmFwaCgpXG5cbi8vIGZ1bmN0aW9uIHRvIGZpbGwgYWRqY2FuZWN5IGxpc3Qgb2YgYWxsIHBvc3NpYmxlIG1vdmVzXG5mdW5jdGlvbiBmaWxsR3JhcGgoc3RhcnQpe1xuICAgIGxldCBsPSBsZXR0ZXJzLmluZGV4T2Yoc3RhcnRbMF0pXG4gICAgbGV0IG4gPSBudW1iZXIuaW5kZXhPZihzdGFydFsxXSlcblxuICAgIGZvciAobGV0IGk9MDtpPDg7aSsrKXtcbiAgICAgICAgbGV0IG5wb3N4ID0gbGV0dGVyc1tsK3Bvc3NpYmxlTW92ZXNbaV1bMF1dXG4gICAgICAgIGxldCBucG9zeSA9IG51bWJlcltuK3Bvc3NpYmxlTW92ZXNbaV1bMV1dXG5cbiAgICAgICAgaWYgKG5wb3N5ICYmIG5wb3N4KVxuICAgICAgICAgICAgZy5hZGRFZGdlKHN0YXJ0LGAke25wb3N4fSR7bnBvc3l9YClcbiAgICB9XG5cbn1cblxuYm9hcmQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBmaWxsR3JhcGgoZWxlbWVudClcbn0pO1xuXG5cbmcuc2hvcnRlc3RQYXRoQkZTKCdmNScsJ2g4JykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=