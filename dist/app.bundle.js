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
        let q = new _q_js__WEBPACK_IMPORTED_MODULE_0__.Queue()

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
        let q = new _q_js__WEBPACK_IMPORTED_MODULE_0__.Queue()

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


let possibleMoves = [
    [ -1, 2 ],  [ -1, -2 ],
    [ 1, 2 ],   [ 1, -2 ],
    [ 2, -1 ],  [ 2, 1 ],
    [ -2, -1 ], [ -2, 1 ]
]

let g = new _graph__WEBPACK_IMPORTED_MODULE_0__.Graph()

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


console.log(g.shortestPathBFS('f5','h8'))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7O0FBRUEsc0RBQXNELEVBQUUsRUFBRSxFQUFFOzs7QUFHNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQUs7O0FBRXpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3Q0FBSzs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsS0FBSyxLQUFLLGtCQUFrQixPQUFPLE1BQU07QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSx5Q0FBSzs7QUFFakI7QUFDQSxXQUFXLDJDQUFPO0FBQ2xCLFlBQVksMENBQU07O0FBRWxCLGlCQUFpQixJQUFJO0FBQ3JCLG9CQUFvQiwyQ0FBTztBQUMzQixvQkFBb0IsMENBQU07O0FBRTFCO0FBQ0EsK0JBQStCLE1BQU0sRUFBRSxNQUFNO0FBQzdDOztBQUVBOztBQUVBLHlDQUFLO0FBQ0w7QUFDQSxDQUFDOzs7QUFHRCx5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3EuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vcS5qcydcblxuY29uc3QgbGV0dGVycyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJ11cbmNvbnN0IG51bWJlciA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4J11cblxuY29uc3QgYm9hcmQgPSBsZXR0ZXJzLmZsYXRNYXAoeCA9PiBudW1iZXIubWFwKG4gPT4gYCR7eH0ke259YCkpXG5cblxuY2xhc3MgR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkFkamFuY2VuY3lMaXN0ID0ge31cbiAgICAgICAgdGhpcy5zaXplID0gMFxuICAgIH1cbiAgICAvKiBcbiAgICAgICogYWRkcyBhbiBlZGdlIGJldHdlZW4gMiB2ZXJ0aWNlc1xuICAgICAgIFxuICAgICAgQHBhcmFtIHN0YXJ0IDogc3RhcnQgdmVydGV4XG4gICAgICBAcGFyYW0gZW5kIDogZW5kIHZlcnRleFxuICAgICAqL1xuICAgIGFkZEVkZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAoIXRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdKVxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoc3RhcnQpXG5cbiAgICAgICAgaWYgKCF0aGlzLkFkamFuY2VuY3lMaXN0W2VuZF0pXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChlbmQpXG5cblxuICAgICAgICBpZiAodGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF0uaW5jbHVkZXMoZW5kKSlcbiAgICAgICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdID0gWy4uLnRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdXVxuICAgICAgICBlbHNlIHRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdID0gW2VuZCwgLi4udGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF1dXG5cbiAgICAgICAgaWYgKHRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXS5pbmNsdWRlcyhzdGFydCkpXG4gICAgICAgICAgICB0aGlzLkFkamFuY2VuY3lMaXN0W2VuZF0gPSBbLi4udGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdXVxuICAgICAgICBlbHNlIHRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXSA9IFtzdGFydCwgLi4udGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdXVxuICAgIH1cblxuICAgIGFkZFZlcnRleCh2ZXJ0ZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLkFkamFuY2VuY3lMaXN0W3ZlcnRleF0pXG4gICAgICAgICAgICB0aGlzLkFkamFuY2VuY3lMaXN0W3ZlcnRleF0gPSBbXVxuXG4gICAgICAgIHRoaXMuc2l6ZSsrXG4gICAgfVxuXG4gICAgYWRqYWNlbnQodmVydGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLkFkamFuY2VuY3lMaXN0W3ZlcnRleF1cbiAgICB9XG5cbiAgICBiZnModmVydGV4KSB7XG4gICAgICAgIGxldCB2aXNpdGVkID0gW11cbiAgICAgICAgbGV0IHEgPSBuZXcgUXVldWUoKVxuXG4gICAgICAgIHEucHVzaCh2ZXJ0ZXgpXG5cbiAgICAgICAgd2hpbGUgKCFxLmVtcHR5KCkpIHtcbiAgICAgICAgICAgIGxldCBjdXJyID0gcS5wb3AoKVxuXG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWQuaW5jbHVkZXMoY3VycikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyKVxuICAgICAgICAgICAgICAgIHZpc2l0ZWQucHVzaChjdXJyKVxuXG4gICAgICAgICAgICAgICAgbGV0IGFkaiA9IHRoaXMuYWRqYWNlbnQoY3VycilcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggaW4gYWRqKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBhZGpbeF1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWQuaW5jbHVkZXMoZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2goZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3J0ZXN0UGF0aEJGUyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBxID0gbmV3IFF1ZXVlKClcblxuICAgICAgICAvLyBjcmVhdGUgYSBtYXAgZnJvbSB0aGUgYWRqYWNlbmVjeSBsaXN0IGFuZCBzZXQgdGhlIGRpc3RhbmNlIGZyb20gZXZlcnkgdmVydGV4IHRvIHNvdXJjZSBhcyBpbmZpbml0eSBcbiAgICAgICAgbGV0IGRpc3QgPSBuZXcgTWFwKE9iamVjdC5rZXlzKHRoaXMuQWRqYW5jZW5jeUxpc3QpLm1hcChrZXlzID0+IFtrZXlzLCBJbmZpbml0eV0pKVxuICAgICAgICBsZXQgdmlzaXRlZCA9IFtdXG5cbiAgICAgICAgZGlzdC5zZXQoc3RhcnQsIDApXG4gICAgICAgIHZpc2l0ZWQucHVzaChzdGFydClcbiAgICAgICAgcS5wdXNoKHN0YXJ0KVxuXG4gICAgICAgIHdoaWxlICghcS5lbXB0eSgpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIHF1ZXVlIFxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBxLnBvcCgpXG5cbiAgICAgICAgICAgIC8vIGdldCB0aGUgYWRqYWNlbnQgdmVydGljZXMgb2YgY3VycmVudCB2ZXJ0ZXggXG4gICAgICAgICAgICBsZXQgYWRqID0gdGhpcy5hZGphY2VudChjdXJyZW50KVxuXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgeCBpbiBhZGopIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiBhZGphY2VudCB2ZXJ0ZXggaXNuJ3QgdmlzaXRlZCAsIGFkZCBpdCB0byB0aGUgdmlzaXRlZCBsaXN0ICggdG8gYXZvaWQgaW5maW5pdGUgbG9vcClcbiAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWQuaW5jbHVkZXMoYWRqW3hdKSkge1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkLnB1c2goYWRqW3hdKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZGlzdGFuY2Ugb2YgdGhhdCBhZGphY2VudCB2ZXJ0ZXggdG8gMSArIHRoZSBkaXN0YW5jZSBmcm9tIHNvdXJjZSB2ZXJ0ZXhcbiAgICAgICAgICAgICAgICAgICAgZGlzdC5zZXQoYWRqW3hdLCBkaXN0LmdldChjdXJyZW50KSArIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgZmluZCB0aGUgdmVydGV4IHdlIGFyZSBsb29raW5nIGZvciAsIHN0b3Agc2VhcmNoaW5nIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRqW3hdID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtlbmR9IGlzICR7ZGlzdC5nZXQoYWRqW3hdKX0gZnJvbSAke3N0YXJ0fWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYWRqYWNlbnQgdmVydGV4IHRvIHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIHEucHVzaChhZGpbeF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmFwaCwgbnVtYmVyLCBib2FyZCwgbGV0dGVycyB9IiwiY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWQgPSAwO1xuICAgICAgICB0aGlzLnRhaWwgPSAwXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXVxuICAgIH1cblxuICAgIHB1c2goZWxlbWVudCl7XG4gICAgICAgXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKXtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9yRWFjaChlID0+IHRoaXMuZWxlbWVudHMucHVzaChlKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHRoaXMuZWxlbWVudHNbdGhpcy5oZWFkXSA9IGVsZW1lbnRcbiAgICAgICAgdGhpcy5oZWFkKytcbiAgICB9XG5cbiAgICBwb3AoKXtcbiAgICAgICAgdGhpcy5oZWFkLS1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHMuc2hpZnQoKVxuICAgIH1cblxuICAgIGVtcHR5KCl7XG4gICAgICAgIHJldHVybiAodGhpcy5oZWFkID09PSAwKSA/IHRydWU6ZmFsc2VcbiAgICB9XG5cbiAgICBmcm9udCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50c1t0aGlzLnRhaWxdXG4gICAgfVxuXG4gICAgY2xlYXIoKXtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IG5ldyBBcnJheSgwKVxuICAgIH1cbn1cblxuZXhwb3J0IHtRdWV1ZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdyYXBoICxudW1iZXIsbGV0dGVycyxib2FyZH0gZnJvbSBcIi4vZ3JhcGhcIjtcblxubGV0IHBvc3NpYmxlTW92ZXMgPSBbXG4gICAgWyAtMSwgMiBdLCAgWyAtMSwgLTIgXSxcbiAgICBbIDEsIDIgXSwgICBbIDEsIC0yIF0sXG4gICAgWyAyLCAtMSBdLCAgWyAyLCAxIF0sXG4gICAgWyAtMiwgLTEgXSwgWyAtMiwgMSBdXG5dXG5cbmxldCBnID0gbmV3IEdyYXBoKClcblxuZnVuY3Rpb24gZmlsbEdyYXBoKHN0YXJ0KXtcbiAgICBsZXQgbD0gbGV0dGVycy5pbmRleE9mKHN0YXJ0WzBdKVxuICAgIGxldCBuID0gbnVtYmVyLmluZGV4T2Yoc3RhcnRbMV0pXG5cbiAgICBmb3IgKGxldCBpPTA7aTw4O2krKyl7XG4gICAgICAgIGxldCBucG9zeCA9IGxldHRlcnNbbCtwb3NzaWJsZU1vdmVzW2ldWzBdXVxuICAgICAgICBsZXQgbnBvc3kgPSBudW1iZXJbbitwb3NzaWJsZU1vdmVzW2ldWzFdXVxuXG4gICAgICAgIGlmIChucG9zeSAmJiBucG9zeClcbiAgICAgICAgICAgIGcuYWRkRWRnZShzdGFydCxgJHtucG9zeH0ke25wb3N5fWApXG4gICAgfVxuXG59XG5cbmJvYXJkLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZmlsbEdyYXBoKGVsZW1lbnQpXG59KTtcblxuXG5jb25zb2xlLmxvZyhnLnNob3J0ZXN0UGF0aEJGUygnZjUnLCdoOCcpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==