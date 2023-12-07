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



let exGraph = new _graph__WEBPACK_IMPORTED_MODULE_0__.Graph()
exGraph.addVertex(0)
exGraph.addVertex(1)
exGraph.addVertex(2)
exGraph.addVertex(3)
exGraph.addVertex(4)

exGraph.addEdge(0,1)
exGraph.addEdge(0,2)
exGraph.addEdge(0,3)
exGraph.addEdge(3,1)
exGraph.addEdge(3,2)
exGraph.addEdge(3,4)

exGraph.bfs(0)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7O0FBRUEsc0RBQXNELEVBQUUsRUFBRSxFQUFFOzs7QUFHNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHlDQUFLOztBQUVqQjtBQUNBLFdBQVcsMkNBQU87QUFDbEIsWUFBWSwwQ0FBTTs7OztBQUlsQixpQkFBaUIsSUFBSTtBQUNyQixvQkFBb0IsMkNBQU87QUFDM0Isb0JBQW9CLDBDQUFNOztBQUUxQjtBQUNBLCtCQUErQixNQUFNLEVBQUUsTUFBTTtBQUM3Qzs7QUFFQTs7QUFFQSx5Q0FBSztBQUNMO0FBQ0EsQ0FBQzs7OztBQUlELGtCQUFrQix5Q0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9xLmpzJ1xuXG5jb25zdCBsZXR0ZXJzID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXVxuY29uc3QgbnVtYmVyID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnXVxuXG5jb25zdCBib2FyZCA9IGxldHRlcnMuZmxhdE1hcCh4ID0+IG51bWJlci5tYXAobiA9PiBgJHt4fSR7bn1gKSlcblxuXG5jbGFzcyBHcmFwaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3QgPSB7fVxuICAgICAgICB0aGlzLnNpemUgPSAwXG4gICAgfVxuXG4gICAgYWRkRWRnZShzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICghdGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF0pXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleChzdGFydClcblxuICAgICAgICBpZiAoIXRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXSlcbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KGVuZClcblxuXG4gICAgICAgIGlmICh0aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XS5pbmNsdWRlcyhlbmQpKVxuICAgICAgICAgICAgdGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF0gPSBbLi4udGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF1dXG4gICAgICAgIGVsc2UgdGhpcy5BZGphbmNlbmN5TGlzdFtzdGFydF0gPSBbZW5kLCAuLi50aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XV1cblxuICAgICAgICBpZiAodGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdLmluY2x1ZGVzKHN0YXJ0KSlcbiAgICAgICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3RbZW5kXSA9IFsuLi50aGlzLkFkamFuY2VuY3lMaXN0W2VuZF1dXG4gICAgICAgIGVsc2UgdGhpcy5BZGphbmNlbmN5TGlzdFtlbmRdID0gW3N0YXJ0LCAuLi50aGlzLkFkamFuY2VuY3lMaXN0W2VuZF1dXG4gICAgfVxuXG4gICAgYWRkVmVydGV4KHZlcnRleCkge1xuICAgICAgICBpZiAoIXRoaXMuQWRqYW5jZW5jeUxpc3RbdmVydGV4XSlcbiAgICAgICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3RbdmVydGV4XSA9IFtdXG5cbiAgICAgICAgdGhpcy5zaXplKytcbiAgICB9XG5cbiAgICBhZGphY2VudCh2ZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQWRqYW5jZW5jeUxpc3RbdmVydGV4XVxuICAgIH1cblxuICAgIGJmcyh2ZXJ0ZXgpIHtcbiAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JhcGgsIG51bWJlciwgYm9hcmQsIGxldHRlcnMgfSIsImNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gMDtcbiAgICAgICAgdGhpcy50YWlsID0gMFxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICB9XG5cbiAgICBwdXNoKGVsZW1lbnQpe1xuICAgICAgIFxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSl7XG4gICAgICAgICAgICBlbGVtZW50LmZvckVhY2goZSA9PiB0aGlzLmVsZW1lbnRzLnB1c2goZSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB0aGlzLmVsZW1lbnRzW3RoaXMuaGVhZF0gPSBlbGVtZW50XG4gICAgICAgIHRoaXMuaGVhZCsrXG4gICAgfVxuXG4gICAgcG9wKCl7XG4gICAgICAgIHRoaXMuaGVhZC0tXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLnNoaWZ0KClcbiAgICB9XG5cbiAgICBlbXB0eSgpe1xuICAgICAgICByZXR1cm4gKHRoaXMuaGVhZCA9PT0gMCkgPyB0cnVlOmZhbHNlXG4gICAgfVxuXG4gICAgZnJvbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbdGhpcy50YWlsXVxuICAgIH1cbn1cblxuZXhwb3J0IHtRdWV1ZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdyYXBoICxudW1iZXIsbGV0dGVycyxib2FyZH0gZnJvbSBcIi4vZ3JhcGhcIjtcblxubGV0IHBvc3NpYmxlTW92ZXMgPSBbXG4gICAgWyAtMSwgMiBdLCAgWyAtMSwgLTIgXSxcbiAgICBbIDEsIDIgXSwgICBbIDEsIC0yIF0sXG4gICAgWyAyLCAtMSBdLCAgWyAyLCAxIF0sXG4gICAgWyAtMiwgLTEgXSwgWyAtMiwgMSBdXG5dXG5cbmxldCBnID0gbmV3IEdyYXBoKClcblxuZnVuY3Rpb24gZmlsbEdyYXBoKHN0YXJ0KXtcbiAgICBsZXQgbD0gbGV0dGVycy5pbmRleE9mKHN0YXJ0WzBdKVxuICAgIGxldCBuID0gbnVtYmVyLmluZGV4T2Yoc3RhcnRbMV0pXG5cblxuXG4gICAgZm9yIChsZXQgaT0wO2k8ODtpKyspe1xuICAgICAgICBsZXQgbnBvc3ggPSBsZXR0ZXJzW2wrcG9zc2libGVNb3Zlc1tpXVswXV1cbiAgICAgICAgbGV0IG5wb3N5ID0gbnVtYmVyW24rcG9zc2libGVNb3Zlc1tpXVsxXV1cblxuICAgICAgICBpZiAobnBvc3kgJiYgbnBvc3gpXG4gICAgICAgICAgICBnLmFkZEVkZ2Uoc3RhcnQsYCR7bnBvc3h9JHtucG9zeX1gKVxuICAgIH1cblxufVxuXG5ib2FyZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGZpbGxHcmFwaChlbGVtZW50KVxufSk7XG5cblxuXG5sZXQgZXhHcmFwaCA9IG5ldyBHcmFwaCgpXG5leEdyYXBoLmFkZFZlcnRleCgwKVxuZXhHcmFwaC5hZGRWZXJ0ZXgoMSlcbmV4R3JhcGguYWRkVmVydGV4KDIpXG5leEdyYXBoLmFkZFZlcnRleCgzKVxuZXhHcmFwaC5hZGRWZXJ0ZXgoNClcblxuZXhHcmFwaC5hZGRFZGdlKDAsMSlcbmV4R3JhcGguYWRkRWRnZSgwLDIpXG5leEdyYXBoLmFkZEVkZ2UoMCwzKVxuZXhHcmFwaC5hZGRFZGdlKDMsMSlcbmV4R3JhcGguYWRkRWRnZSgzLDIpXG5leEdyYXBoLmFkZEVkZ2UoMyw0KVxuXG5leEdyYXBoLmJmcygwKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==