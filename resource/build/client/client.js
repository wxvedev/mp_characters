/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 687:
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
        console.log("Emitting deleteChar event with data:", charData);
        emitNet("MP-Base:deleteChar", charData);
    }
    catch (err) {
        console.error("Error in deleteCharacter:", err);
    }
});


/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const nui_1 = __webpack_require__(995);
onNet("mp_characters:setVisible", (visible) => {
    (0, nui_1.send)({ action: "setVisible", data: visible });
    (0, nui_1.focus)(visible ? true : false);
});
onNet("mp_characters:setCharacters", (data) => {
    (0, nui_1.send)({ action: "setCharacters", data: data });
    console.log("setCharacters", data);
});


/***/ }),

/***/ 995:
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
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(130);
__webpack_require__(687);
__webpack_require__(995);

})();

/******/ })()
;
//# sourceMappingURL=client.js.map