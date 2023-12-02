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
/* harmony export */   Graph: () => (/* binding */ Graph)
/* harmony export */ });


class Graph {
    constructor(){
        this.AdjancencyList = {}
    }

    addEdge(start,end){
        if (!this.AdjancencyList[start])
            this.addVertex(start)

        this.AdjancencyList[start] = [end,...this.AdjancencyList[start]]
        
    }

    addVertex(vertex){
       if(!this.AdjancencyList[vertex])
            this.AdjancencyList[vertex] = []
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




let letters = ['a','b','c','d','e','f','g','h']
let number = ['1','2','3','4','5','6','7','8']

let board = letters.flatMap(x => number.map(n => `${x}${n}`))


let possibleMoves = [
    [ -1, 2 ],  [ -1, -2 ],
    [ 1, 2 ],   [ 1, -2 ],
    [ 2, -1 ],  [ 2, 1 ],
    [ -2, -1 ], [ -2, 1 ]
]

let g = new _graph__WEBPACK_IMPORTED_MODULE_0__.Graph()

function move(start){
    let l= letters.indexOf(start[0])
    let n = number.indexOf(start[1])



    for (let i=0;i<8;i++){
        let nposx = letters[l+possibleMoves[i][0]]
        let nposy = number[n+possibleMoves[i][1]]

        if (nposy && nposx)
            g.addEdge(start,`${nposx}${nposy}`)
    }

}

move('a1')
move('b3')
move('c2')

console.log(g.AdjancencyList)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDOzs7O0FBSWhDO0FBQ0E7O0FBRUEsb0RBQW9ELEVBQUUsRUFBRSxFQUFFOzs7QUFHMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVkseUNBQUs7O0FBRWpCO0FBQ0E7QUFDQTs7OztBQUlBLGlCQUFpQixJQUFJO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsTUFBTSxFQUFFLE1BQU07QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3QgPSB7fVxuICAgIH1cblxuICAgIGFkZEVkZ2Uoc3RhcnQsZW5kKXtcbiAgICAgICAgaWYgKCF0aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XSlcbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KHN0YXJ0KVxuXG4gICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3Rbc3RhcnRdID0gW2VuZCwuLi50aGlzLkFkamFuY2VuY3lMaXN0W3N0YXJ0XV1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkVmVydGV4KHZlcnRleCl7XG4gICAgICAgaWYoIXRoaXMuQWRqYW5jZW5jeUxpc3RbdmVydGV4XSlcbiAgICAgICAgICAgIHRoaXMuQWRqYW5jZW5jeUxpc3RbdmVydGV4XSA9IFtdXG4gICAgfVxufVxuXG5leHBvcnQge0dyYXBofSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwiLi9ncmFwaFwiO1xuXG5cblxubGV0IGxldHRlcnMgPSBbJ2EnLCdiJywnYycsJ2QnLCdlJywnZicsJ2cnLCdoJ11cbmxldCBudW1iZXIgPSBbJzEnLCcyJywnMycsJzQnLCc1JywnNicsJzcnLCc4J11cblxubGV0IGJvYXJkID0gbGV0dGVycy5mbGF0TWFwKHggPT4gbnVtYmVyLm1hcChuID0+IGAke3h9JHtufWApKVxuXG5cbmxldCBwb3NzaWJsZU1vdmVzID0gW1xuICAgIFsgLTEsIDIgXSwgIFsgLTEsIC0yIF0sXG4gICAgWyAxLCAyIF0sICAgWyAxLCAtMiBdLFxuICAgIFsgMiwgLTEgXSwgIFsgMiwgMSBdLFxuICAgIFsgLTIsIC0xIF0sIFsgLTIsIDEgXVxuXVxuXG5sZXQgZyA9IG5ldyBHcmFwaCgpXG5cbmZ1bmN0aW9uIG1vdmUoc3RhcnQpe1xuICAgIGxldCBsPSBsZXR0ZXJzLmluZGV4T2Yoc3RhcnRbMF0pXG4gICAgbGV0IG4gPSBudW1iZXIuaW5kZXhPZihzdGFydFsxXSlcblxuXG5cbiAgICBmb3IgKGxldCBpPTA7aTw4O2krKyl7XG4gICAgICAgIGxldCBucG9zeCA9IGxldHRlcnNbbCtwb3NzaWJsZU1vdmVzW2ldWzBdXVxuICAgICAgICBsZXQgbnBvc3kgPSBudW1iZXJbbitwb3NzaWJsZU1vdmVzW2ldWzFdXVxuXG4gICAgICAgIGlmIChucG9zeSAmJiBucG9zeClcbiAgICAgICAgICAgIGcuYWRkRWRnZShzdGFydCxgJHtucG9zeH0ke25wb3N5fWApXG4gICAgfVxuXG59XG5cbm1vdmUoJ2ExJylcbm1vdmUoJ2IzJylcbm1vdmUoJ2MyJylcblxuY29uc29sZS5sb2coZy5BZGphbmNlbmN5TGlzdClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==