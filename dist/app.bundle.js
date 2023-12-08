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
        let q = new _q_js__WEBPACK_IMPORTED_MODULE_0__.Queue()

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


g.shortestPathBFS('a1','h8')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7O0FBRUEsc0RBQXNELEVBQUUsRUFBRSxFQUFFOzs7QUFHNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQUs7O0FBRXpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQUs7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTyxLQUFLLEtBQUssS0FBSyxjQUFjO0FBQzVFLG9DQUFvQyxHQUFHO0FBQ3ZDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVkseUNBQUs7O0FBRWpCO0FBQ0EsV0FBVywyQ0FBTztBQUNsQixZQUFZLDBDQUFNOztBQUVsQixpQkFBaUIsSUFBSTtBQUNyQixvQkFBb0IsMkNBQU87QUFDM0Isb0JBQW9CLDBDQUFNOztBQUUxQjtBQUNBLCtCQUErQixNQUFNLEVBQUUsTUFBTTtBQUM3Qzs7QUFFQTs7QUFFQSx5Q0FBSztBQUNMO0FBQ0EsQ0FBQzs7O0FBR0QsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9xLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVldWUgfSBmcm9tICcuL3EuanMnXG5cbmNvbnN0IGxldHRlcnMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCddXG5jb25zdCBudW1iZXIgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCddXG5cbmNvbnN0IGJvYXJkID0gbGV0dGVycy5mbGF0TWFwKHggPT4gbnVtYmVyLm1hcChuID0+IGAke3h9JHtufWApKVxuXG5cbmNsYXNzIEdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5BZGphbmNlbmN5TGlzdCA9IHt9XG4gICAgICAgIHRoaXMuc2l6ZSA9IDBcbiAgICB9XG4gICAgLyogXG4gICAgICAqIGFkZHMgYW4gZWRnZSBiZXR3ZWVuIDIgdmVydGljZXNcbiAgICAgICBcbiAgICAgIEBwYXJhbSBzdGFydCA6IHN0YXJ0IHZlcnRleFxuICAgICAgQHBhcmFtIGVuZCA6IGVuZCB2ZXJ0ZXhcbiAgICAgKi9cbiAgICBhZGRFZGdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKCF0aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XSlcbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KHN0YXJ0KVxuXG4gICAgICAgIGlmICghdGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdKVxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoZW5kKVxuXG5cbiAgICAgICAgaWYgKHRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdLmluY2x1ZGVzKGVuZCkpXG4gICAgICAgICAgICB0aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XSA9IFsuLi50aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XV1cbiAgICAgICAgZWxzZSB0aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XSA9IFtlbmQsIC4uLnRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdXVxuXG4gICAgICAgIGlmICh0aGlzLkFkamFuY2VuY3lMaXN0W2VuZF0uaW5jbHVkZXMoc3RhcnQpKVxuICAgICAgICAgICAgdGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdID0gWy4uLnRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXV1cbiAgICAgICAgZWxzZSB0aGlzLkFkamFuY2VuY3lMaXN0W2VuZF0gPSBbc3RhcnQsIC4uLnRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXV1cbiAgICB9XG5cbiAgICBhZGRWZXJ0ZXgodmVydGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5BZGphbmNlbmN5TGlzdFt2ZXJ0ZXhdKVxuICAgICAgICAgICAgdGhpcy5BZGphbmNlbmN5TGlzdFt2ZXJ0ZXhdID0gW11cblxuICAgICAgICB0aGlzLnNpemUrK1xuICAgIH1cblxuICAgIGFkamFjZW50KHZlcnRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5BZGphbmNlbmN5TGlzdFt2ZXJ0ZXhdXG4gICAgfVxuXG4gICAgYmZzKHZlcnRleCkge1xuICAgICAgICBsZXQgdmlzaXRlZCA9IFtdXG4gICAgICAgIGxldCBxID0gbmV3IFF1ZXVlKClcblxuICAgICAgICBxLnB1c2godmVydGV4KVxuXG4gICAgICAgIHdoaWxlICghcS5lbXB0eSgpKSB7XG4gICAgICAgICAgICBsZXQgY3VyciA9IHEucG9wKClcblxuICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmluY2x1ZGVzKGN1cnIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycilcbiAgICAgICAgICAgICAgICB2aXNpdGVkLnB1c2goY3VycilcblxuICAgICAgICAgICAgICAgIGxldCBhZGogPSB0aGlzLmFkamFjZW50KGN1cnIpXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4IGluIGFkaikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gYWRqW3hdXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmluY2x1ZGVzKGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wdXNoKGUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZmluZFBhdGgoc3RhcnQsZW5kLHBhdGggPSB7fSl7XG4gICAgICAgIGxldCBucGF0aCA9IFtdXG5cbiAgICAgICAgbnBhdGgucHVzaChlbmQpXG4gICAgICAgIGxldCB0bXAgPSBwYXRoW2VuZF1cblxuICAgICAgICB3aGlsZSh0bXAgIT0gc3RhcnQpe1xuICAgICAgICAgICAgbnBhdGgucHVzaCh0bXApXG4gICAgICAgICAgICB0bXAgPSBwYXRoW3RtcF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBucGF0aC5yZXZlcnNlKClcbiAgICB9XG5cbiAgICBzaG9ydGVzdFBhdGhCRlMoc3RhcnQsZW5kKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIG1hcCBmcm9tIHRoZSBhZGphY2VuZWN5IGxpc3QgYW5kIHNldCB0aGUgZGlzdGFuY2UgZnJvbSBldmVyeSB2ZXJ0ZXggdG8gc291cmNlIGFzIGluZmluaXR5IFxuICAgICAgICBsZXQgZGlzdCA9IG5ldyBNYXAoT2JqZWN0LmtleXModGhpcy5BZGphbmNlbmN5TGlzdCkubWFwKGtleXMgPT4gW2tleXMsIEluZmluaXR5XSkpXG4gICAgICAgIGxldCB2aXNpdGVkID0gW11cbiAgICAgICAgbGV0IHBhdGggPSB7fVxuICAgICAgICBsZXQgcSA9IG5ldyBRdWV1ZSgpXG5cbiAgICAgICAgcS5wdXNoKHN0YXJ0KVxuICAgICAgICBkaXN0LnNldChzdGFydCwwKVxuICAgICAgICB2aXNpdGVkLnB1c2goc3RhcnQpXG5cbiAgICAgICAgd2hpbGUoIXEuZW1wdHkoKSl7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHEucG9wKClcblxuICAgICAgICAgICAgbGV0IGFkaiA9IHRoaXMuYWRqYWNlbnQoY3VycmVudClcbiAgICAgICAgICAgIGZvcihsZXQgeCBpbiBhZGogKXtcbiAgICAgICAgICAgICAgICBpZighdmlzaXRlZC5pbmNsdWRlcyhhZGpbeF0pKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZC5wdXNoKGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgICAgIGRpc3Quc2V0KGFkalt4XSAsIGRpc3QuZ2V0KGN1cnJlbnQpKzEpXG4gICAgICAgICAgICAgICAgICAgIHBhdGhbYWRqW3hdXSA9IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgcS5wdXNoKGFkalt4XSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbnAgPSB0aGlzLiNmaW5kUGF0aChzdGFydCxlbmQscGF0aClcbiAgICAgICAgY29uc29sZS5sb2coYHlvdSBtYWRlIGl0IGZyb20gJHtzdGFydH0gdG8gJHtlbmR9IGluICR7ZGlzdC5nZXQoZW5kKX1gKVxuICAgICAgICBjb25zb2xlLmxvZyhgeW91ciBwYXRoIGlzICR7bnB9YClcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyYXBoLCBudW1iZXIsIGJvYXJkLCBsZXR0ZXJzIH0iLCJjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IDA7XG4gICAgICAgIHRoaXMudGFpbCA9IDBcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdXG4gICAgfVxuXG4gICAgcHVzaChlbGVtZW50KXtcbiAgICAgICBcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpe1xuICAgICAgICAgICAgZWxlbWVudC5mb3JFYWNoKGUgPT4gdGhpcy5lbGVtZW50cy5wdXNoKGUpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgdGhpcy5lbGVtZW50c1t0aGlzLmhlYWRdID0gZWxlbWVudFxuICAgICAgICB0aGlzLmhlYWQrK1xuICAgIH1cblxuICAgIHBvcCgpe1xuICAgICAgICB0aGlzLmhlYWQtLVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5zaGlmdCgpXG4gICAgfVxuXG4gICAgZW1wdHkoKXtcbiAgICAgICAgcmV0dXJuICh0aGlzLmhlYWQgPT09IDApID8gdHJ1ZTpmYWxzZVxuICAgIH1cblxuICAgIGZyb250KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzW3RoaXMudGFpbF1cbiAgICB9XG5cbiAgICBjbGVhcigpe1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gbmV3IEFycmF5KDApXG4gICAgfVxufVxuXG5leHBvcnQge1F1ZXVlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR3JhcGggLG51bWJlcixsZXR0ZXJzLGJvYXJkfSBmcm9tIFwiLi9ncmFwaFwiO1xuXG5sZXQgcG9zc2libGVNb3ZlcyA9IFtcbiAgICBbIC0xLCAyIF0sICBbIC0xLCAtMiBdLFxuICAgIFsgMSwgMiBdLCAgIFsgMSwgLTIgXSxcbiAgICBbIDIsIC0xIF0sICBbIDIsIDEgXSxcbiAgICBbIC0yLCAtMSBdLCBbIC0yLCAxIF1cbl1cblxubGV0IGcgPSBuZXcgR3JhcGgoKVxuXG5mdW5jdGlvbiBmaWxsR3JhcGgoc3RhcnQpe1xuICAgIGxldCBsPSBsZXR0ZXJzLmluZGV4T2Yoc3RhcnRbMF0pXG4gICAgbGV0IG4gPSBudW1iZXIuaW5kZXhPZihzdGFydFsxXSlcblxuICAgIGZvciAobGV0IGk9MDtpPDg7aSsrKXtcbiAgICAgICAgbGV0IG5wb3N4ID0gbGV0dGVyc1tsK3Bvc3NpYmxlTW92ZXNbaV1bMF1dXG4gICAgICAgIGxldCBucG9zeSA9IG51bWJlcltuK3Bvc3NpYmxlTW92ZXNbaV1bMV1dXG5cbiAgICAgICAgaWYgKG5wb3N5ICYmIG5wb3N4KVxuICAgICAgICAgICAgZy5hZGRFZGdlKHN0YXJ0LGAke25wb3N4fSR7bnBvc3l9YClcbiAgICB9XG5cbn1cblxuYm9hcmQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBmaWxsR3JhcGgoZWxlbWVudClcbn0pO1xuXG5cbmcuc2hvcnRlc3RQYXRoQkZTKCdhMScsJ2g4JykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=