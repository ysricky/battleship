/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
// import Ship from './modules/ship';



const LoadUI = () => {
  const playerField = document.querySelector('.player-field-container');
  const enemyField = document.querySelector('.enemy-field-container');

  const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // create function to place ship on legal square

  //   playerBoard.placeShip([6, 7]);
  playerBoard.placeShip([80]);
  //   playerBoard.placeShip([85, 86, 87]);
  //   playerBoard.placeShip([39, 49, 59, 69]);
  //   playerBoard.placeShip([20, 30, 40, 50, 60]);

  const enemyBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // create function to randomly place ship
  enemyBoard.placeShip([3, 4, 5]);
  enemyBoard.placeShip([22, 23, 24, 25, 26]);

  playerBoard.board.forEach((element) => {
    const square = document.createElement('div');
    square.classList.add('player-square');
    if (element !== null) square.style.backgroundColor = 'blue';
    playerField.appendChild(square);
  });

  enemyBoard.board.forEach((element, index) => {
    const square = document.createElement('div');
    square.classList.add('enemy-square');
    square.addEventListener('click', () => {
      if (
        enemyBoard.board[index] === null ||
        enemyBoard.board[index].isHit === false
      ) {
        if (humanPlayer.attack(enemyBoard, index) === 'hit') {
          square.style.backgroundColor = 'red';
        } else {
          square.style.backgroundColor = 'grey';
        }
        if (computer.randomAttack(playerBoard) === 'hit') {
          console.log('enemy hit your ship');
        } else {
          console.log('enemy missed');
        }
      } else {
        console.log('illegal move');
      }
      if (enemyBoard.isWipedOut()) console.log('you win');
      if (playerBoard.isWipedOut()) console.log('enemy win');
    });
    enemyField.appendChild(square);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadUI);


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


const Gameboard = () => {
  const board = Array(100).fill(null);
  const fleet = [];

  const placeShip = (coordinates) => {
    const { length } = coordinates;
    fleet.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length));
    coordinates.forEach((coordinate, index) => {
      board[coordinate] = {
        id: fleet.length - 1,
        part: index,
        isHit: false,
      };
    });
    return board;
  };

  const receiveAttack = (coordinate) => {
    if (board[coordinate] === null) {
      board[coordinate] = { isMissed: true };
      return 'missed';
    }
    fleet[board[coordinate].id].hit(board[coordinate].part);
    board[coordinate].isHit = true;
    return 'hit';
  };

  const isWipedOut = () => {
    const wipedOut = fleet.every((ship) => ship.isSunk());
    return wipedOut;
  };

  return { board, placeShip, receiveAttack, isWipedOut };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = () => {
  const attack = (enemyBoard, coordinate) =>
    enemyBoard.receiveAttack(coordinate);

  const randomAttack = (enemyBoard) => {
    const legalMove = enemyBoard.board.reduce((objArr, obj, index) => {
      if (obj === null || obj.isHit === false) objArr.push(index);
      return objArr;
    }, []);

    const randomMove = Math.floor(Math.random() * legalMove.length);
    return enemyBoard.receiveAttack(legalMove[randomMove]);
  };

  return { attack, randomAttack };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  const shipBody = Array(length).fill(null);

  const hit = (position) => {
    shipBody[position] = 'hit';
    return shipBody;
  };

  const isSunk = () => {
    const sunk = shipBody.every((part) => part === 'hit');
    return sunk;
  };

  return { hit, isSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");


window.addEventListener('DOMContentLoaded', _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0M7QUFDTjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixtREFBTTtBQUM1QixtQkFBbUIsbURBQU07O0FBRXpCLHNCQUFzQixzREFBUzs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsc0RBQVM7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlESTs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLGVBQWUsaURBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQnRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ2hCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsNENBQTRDLG9EQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNoaXAgZnJvbSAnLi9tb2R1bGVzL3NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgTG9hZFVJID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZmllbGQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGVuZW15RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktZmllbGQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIC8vIGNyZWF0ZSBmdW5jdGlvbiB0byBwbGFjZSBzaGlwIG9uIGxlZ2FsIHNxdWFyZVxuXG4gIC8vICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFs2LCA3XSk7XG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChbODBdKTtcbiAgLy8gICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzg1LCA4NiwgODddKTtcbiAgLy8gICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzM5LCA0OSwgNTksIDY5XSk7XG4gIC8vICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFsyMCwgMzAsIDQwLCA1MCwgNjBdKTtcblxuICBjb25zdCBlbmVteUJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgLy8gY3JlYXRlIGZ1bmN0aW9uIHRvIHJhbmRvbWx5IHBsYWNlIHNoaXBcbiAgZW5lbXlCb2FyZC5wbGFjZVNoaXAoWzMsIDQsIDVdKTtcbiAgZW5lbXlCb2FyZC5wbGFjZVNoaXAoWzIyLCAyMywgMjQsIDI1LCAyNl0pO1xuXG4gIHBsYXllckJvYXJkLmJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNxdWFyZScpO1xuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgIHBsYXllckZpZWxkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIH0pO1xuXG4gIGVuZW15Qm9hcmQuYm9hcmQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZW5lbXktc3F1YXJlJyk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbmVteUJvYXJkLmJvYXJkW2luZGV4XSA9PT0gbnVsbCB8fFxuICAgICAgICBlbmVteUJvYXJkLmJvYXJkW2luZGV4XS5pc0hpdCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuYXR0YWNrKGVuZW15Qm9hcmQsIGluZGV4KSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckJvYXJkKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZW5lbXkgaGl0IHlvdXIgc2hpcCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlbmVteSBtaXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2lsbGVnYWwgbW92ZScpO1xuICAgICAgfVxuICAgICAgaWYgKGVuZW15Qm9hcmQuaXNXaXBlZE91dCgpKSBjb25zb2xlLmxvZygneW91IHdpbicpO1xuICAgICAgaWYgKHBsYXllckJvYXJkLmlzV2lwZWRPdXQoKSkgY29uc29sZS5sb2coJ2VuZW15IHdpbicpO1xuICAgIH0pO1xuICAgIGVuZW15RmllbGQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkVUk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTAwKS5maWxsKG51bGwpO1xuICBjb25zdCBmbGVldCA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBjb29yZGluYXRlcztcbiAgICBmbGVldC5wdXNoKFNoaXAobGVuZ3RoKSk7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0ge1xuICAgICAgICBpZDogZmxlZXQubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSB7IGlzTWlzc2VkOiB0cnVlIH07XG4gICAgICByZXR1cm4gJ21pc3NlZCc7XG4gICAgfVxuICAgIGZsZWV0W2JvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQoYm9hcmRbY29vcmRpbmF0ZV0ucGFydCk7XG4gICAgYm9hcmRbY29vcmRpbmF0ZV0uaXNIaXQgPSB0cnVlO1xuICAgIHJldHVybiAnaGl0JztcbiAgfTtcblxuICBjb25zdCBpc1dpcGVkT3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpcGVkT3V0ID0gZmxlZXQuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIHJldHVybiB3aXBlZE91dDtcbiAgfTtcblxuICByZXR1cm4geyBib2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBpc1dpcGVkT3V0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteUJvYXJkLCBjb29yZGluYXRlKSA9PlxuICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcblxuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZW5lbXlCb2FyZCkgPT4ge1xuICAgIGNvbnN0IGxlZ2FsTW92ZSA9IGVuZW15Qm9hcmQuYm9hcmQucmVkdWNlKChvYmpBcnIsIG9iaiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqLmlzSGl0ID09PSBmYWxzZSkgb2JqQXJyLnB1c2goaW5kZXgpO1xuICAgICAgcmV0dXJuIG9iakFycjtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCByYW5kb21Nb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVnYWxNb3ZlLmxlbmd0aCk7XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhsZWdhbE1vdmVbcmFuZG9tTW92ZV0pO1xuICB9O1xuXG4gIHJldHVybiB7IGF0dGFjaywgcmFuZG9tQXR0YWNrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwQm9keSA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwQm9keVtwb3NpdGlvbl0gPSAnaGl0JztcbiAgICByZXR1cm4gc2hpcEJvZHk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmsgPSBzaGlwQm9keS5ldmVyeSgocGFydCkgPT4gcGFydCA9PT0gJ2hpdCcpO1xuICAgIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTG9hZFVJIGZyb20gJy4vbW9kdWxlcy9kb20nO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIExvYWRVSSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=