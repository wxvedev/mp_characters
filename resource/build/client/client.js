/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/callbacks.ts":
/*!*********************************!*\
  !*** ./src/client/callbacks.ts ***!
  \*********************************/
/***/ (() => {

RegisterNuiCallbackType("createCharacter");
on("__cfx_nui:createCharacter", (charData) => {
    emitNet("MP-Base:server:createCharacter", charData);
    console.log("__cfx_nui:createCharacter", charData);
});
RegisterNuiCallbackType("selectCharacter");
on("__cfx_nui:selectCharacter", (data, cb) => {
    emitNet("MP-Base:Char:ServerSelect", data.cid);
    cb({ success: true });
    console.log("__cfx_nui:selectCharacter", data);
});
RegisterNuiCallbackType("deleteCharacter");
on("__cfx_nui:deleteCharacter", (charData) => {
    try {
        console.log("Emitting deleteChar event with data:", charData); // Debug
        emitNet("MP-Base:deleteChar", JSON.stringify(charData)); // Ensure charData is structured correctly
    }
    catch (err) {
        console.error("Error in deleteCharacter:", err);
    }
});


/***/ }),

/***/ "./src/client/events.ts":
/*!******************************!*\
  !*** ./src/client/events.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const nui_1 = __webpack_require__(/*! ./nui */ "./src/client/nui.ts");
onNet("mp_characters:setVisible", (visible) => {
    (0, nui_1.send)({ action: "setVisible", data: visible });
    (0, nui_1.focus)(visible ? true : false);
});
onNet("mp_characters:setCharacters", (data) => {
    (0, nui_1.send)({ action: "setCharacters", data: data });
    console.log("setCharacters", data);
});


/***/ }),

/***/ "./src/client/nui.ts":
/*!***************************!*\
  !*** ./src/client/nui.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.focus = exports.send = void 0;
function send({ action, data }) {
    SendNuiMessage(JSON.stringify({
        action: action,
        data: data,
    }));
}
exports.send = send;
function focus(value) {
    SetNuiFocus(value, value);
    console.log("FOCUS: ", value);
}
exports.focus = focus;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/client/client.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./events */ "./src/client/events.ts");
__webpack_require__(/*! ./callbacks */ "./src/client/callbacks.ts");
__webpack_require__(/*! ./nui.ts */ "./src/client/nui.ts");

})();

/******/ })()
;
//# sourceMappingURL=client.js.map