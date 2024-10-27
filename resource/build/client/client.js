/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/client/client.ts ***!
  \******************************/

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
onNet("mp_characters:setVisible", (visible) => {
    send({ action: "setVisible", data: visible });
    focus(visible ? true : false);
    console.log("VISIBLE: ", visible);
});
onNet("mp_characters:setCharacters", (data) => {
    // send({ action: "setCharacters", data: data });
    console.log(JSON.stringify(data));
});

})();

/******/ })()
;
//# sourceMappingURL=client.js.map