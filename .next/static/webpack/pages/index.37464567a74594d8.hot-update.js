"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/banner/index.js":
/*!************************************!*\
  !*** ./components/banner/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ \"./components/banner/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowWidth.js */ \"./hooks/useWindowWidth.js\");\n/* harmony import */ var _assets_laptopBanner_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/laptopBanner.png */ \"./assets/laptopBanner.png\");\n/* harmony import */ var _assets_mobileBanner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/mobileBanner.png */ \"./assets/mobileBanner.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n // Import CSS module styles\n\n\n\n\nfunction index() {\n    _s();\n    const windowWidth = (0,_hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"banner-container\"]),\n        children: [\n            windowWidth > 768 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().banner),\n                src: _assets_laptopBanner_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\banner\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 29\n            }, this),\n            windowWidth <= 768 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().banner),\n                src: _assets_mobileBanner_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\banner\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\banner\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"SMxGJ/jjFm9yFKpSmRkHC6SLq4s=\", false, function() {\n    return [\n        _hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhbm5lci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0MsQ0FBQywyQkFBMkI7QUFDVDtBQUNGO0FBQ0E7QUFDMUI7QUFFL0IsU0FBU0s7O0lBQ1AsTUFBTUMsY0FBWUwsb0VBQWNBO0lBQ2hDLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXUiw4RUFBMEI7O1lBQ3JDTSxjQUFZLHFCQUFPLDhEQUFDRixtREFBS0E7Z0JBQUNJLFdBQVdSLGlFQUFnQjtnQkFBRVMsS0FBS1AsZ0VBQVlBOzs7Ozs7WUFDeEVJLGVBQWEscUJBQU8sOERBQUNGLG1EQUFLQTtnQkFBQ0ksV0FBV1IsaUVBQWdCO2dCQUFFUyxLQUFLTixnRUFBWUE7Ozs7Ozs7Ozs7OztBQUdsRjtHQVJTRTs7UUFDV0osZ0VBQWNBOzs7QUFTbEMsK0RBQWVJLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYW5uZXIvaW5kZXguanM/MzI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7IC8vIEltcG9ydCBDU1MgbW9kdWxlIHN0eWxlc1xyXG5pbXBvcnQgdXNlV2luZG93V2lkdGggZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93V2lkdGguanMnO1xyXG5pbXBvcnQgbGFwdG9wQmFubmVyIGZyb20gJy4uLy4uL2Fzc2V0cy9sYXB0b3BCYW5uZXIucG5nJztcclxuaW1wb3J0IG1vYmlsZUJhbm5lciBmcm9tICcuLi8uLi9hc3NldHMvbW9iaWxlQmFubmVyLnBuZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHdpbmRvd1dpZHRoPXVzZVdpbmRvd1dpZHRoKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Jhbm5lci1jb250YWluZXInXX0+XHJcbiAgICAgICAge3dpbmRvd1dpZHRoPjc2OCAmJiA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXNbJ2Jhbm5lciddfSBzcmM9e2xhcHRvcEJhbm5lcn0gLz59XHJcbiAgICAgICAge3dpbmRvd1dpZHRoPD03NjggJiYgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzWydiYW5uZXInXX0gc3JjPXttb2JpbGVCYW5uZXJ9IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VXaW5kb3dXaWR0aCIsImxhcHRvcEJhbm5lciIsIm1vYmlsZUJhbm5lciIsIkltYWdlIiwiaW5kZXgiLCJ3aW5kb3dXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/banner/index.js\n"));

/***/ })

});