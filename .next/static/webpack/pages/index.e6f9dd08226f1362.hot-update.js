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

/***/ "./components/product/index.js":
/*!*************************************!*\
  !*** ./components/product/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ \"./components/product/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_heart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/heart.png */ \"./assets/heart.png\");\n/* harmony import */ var _assets_liked_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/liked.png */ \"./assets/liked.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useWindowWidth.js */ \"./hooks/useWindowWidth.js\");\n\nvar _s = $RefreshSig$();\n // Import CSS module styles\n\n\n\n\n\nfunction index(props) {\n    _s();\n    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const windowWidth = (0,_hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    // Truncate title if longer than 20 characters\n    const truncatedTitle = props.data.title.length > 25 ? props.data.title.slice(0, 25) + \"...\" : props.data.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"product-container\"]),\n        children: [\n            windowWidth > 1130 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"product-image\",\n                width: 300,\n                height: 350,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 30\n            }, this),\n            windowWidth >= 965 && windowWidth < 1130 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"product-image\",\n                width: 250,\n                height: 300,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 50\n            }, this),\n            windowWidth >= 552 && windowWidth < 965 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"product-image\",\n                width: 200,\n                height: 200,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 50\n            }, this),\n            windowWidth >= 416 && windowWidth < 552 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"product-image\",\n                width: 150,\n                height: 150,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 50\n            }, this),\n            windowWidth < 416 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"product-image\",\n                width: 100,\n                height: 100,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 30\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),\n                children: truncatedTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"text-icon-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"signup-text\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"text-decor\"]),\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 48\n                            }, this),\n                            \" or Create an account to see pricing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    !isLiked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"fav\",\n                        onClick: ()=>setIsLiked(!isLiked),\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"fav-icon\"]),\n                        src: _assets_heart_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 23\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"fav\",\n                        onClick: ()=>setIsLiked(!isLiked),\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"fav-icon\"]),\n                        src: _assets_liked_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 121\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"zv8XOpOf/lMDACRerrsYBq1z+sg=\", false, function() {\n    return [\n        _hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0MsQ0FBQywyQkFBMkI7QUFDckM7QUFDWTtBQUNBO0FBQ1Y7QUFDMEI7QUFFM0QsU0FBU00sTUFBTUMsS0FBSzs7SUFDbEIsTUFBTSxDQUFDQyxTQUFRQyxXQUFXLEdBQUNMLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU1NLGNBQVlMLG9FQUFjQTtJQUNoQyw4Q0FBOEM7SUFDOUMsTUFBTU0saUJBQWlCSixNQUFNSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUtQLE1BQU1LLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxLQUFLLENBQUMsR0FBRyxNQUFNLFFBQVFSLE1BQU1LLElBQUksQ0FBQ0MsS0FBSztJQUM5RyxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2pCLCtFQUEyQjs7WUFDdENVLGNBQVksc0JBQVEsOERBQUNULG1EQUFLQTtnQkFBRWlCLEtBQUk7Z0JBQWdCQyxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFLZCxNQUFNSyxJQUFJLENBQUNVLEtBQUs7Ozs7OztZQUM5RlosZUFBYSxPQUFPQSxjQUFZLHNCQUFRLDhEQUFDVCxtREFBS0E7Z0JBQUVpQixLQUFJO2dCQUFnQkMsT0FBTztnQkFBS0MsUUFBUTtnQkFBS0MsS0FBS2QsTUFBTUssSUFBSSxDQUFDVSxLQUFLOzs7Ozs7WUFDbEhaLGVBQWEsT0FBT0EsY0FBWSxxQkFBUSw4REFBQ1QsbURBQUtBO2dCQUFFaUIsS0FBSTtnQkFBZ0JDLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLEtBQUtkLE1BQU1LLElBQUksQ0FBQ1UsS0FBSzs7Ozs7O1lBQ2xIWixlQUFhLE9BQU9BLGNBQVkscUJBQVEsOERBQUNULG1EQUFLQTtnQkFBRWlCLEtBQUk7Z0JBQWdCQyxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFLZCxNQUFNSyxJQUFJLENBQUNVLEtBQUs7Ozs7OztZQUNsSFosY0FBWSxxQkFBUSw4REFBQ1QsbURBQUtBO2dCQUFFaUIsS0FBSTtnQkFBZ0JDLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLEtBQUtkLE1BQU1LLElBQUksQ0FBQ1UsS0FBSzs7Ozs7OzBCQUMvRiw4REFBQ0M7Z0JBQUVOLFdBQVdqQixnRUFBZTswQkFBR1c7Ozs7OzswQkFDaEMsOERBQUNLO2dCQUFJQyxXQUFXakIsaUZBQTZCOztrQ0FDM0MsOERBQUN1Qjt3QkFBRU4sV0FBV2pCLHlFQUFxQjs7MENBQUUsOERBQUN3QjtnQ0FBS1AsV0FBV2pCLHdFQUFvQjswQ0FBRTs7Ozs7OzRCQUFjOzs7Ozs7O29CQUN6RixDQUFDUSx3QkFBVSw4REFBQ1AsbURBQUtBO3dCQUFDaUIsS0FBSTt3QkFBTU8sU0FBUyxJQUFJaEIsV0FBVyxDQUFDRDt3QkFBVVMsV0FBV2pCLHNFQUFrQjt3QkFBRXFCLEtBQUtuQix5REFBS0E7Ozs7OzZDQUFLLDhEQUFDRCxtREFBS0E7d0JBQUNpQixLQUFJO3dCQUFNTyxTQUFTLElBQUloQixXQUFXLENBQUNEO3dCQUFVUyxXQUFXakIsc0VBQWtCO3dCQUFFcUIsS0FBS2xCLHlEQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJOO0dBbkJTRzs7UUFFV0QsZ0VBQWNBOzs7QUFtQmxDLCtEQUFlQyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdC9pbmRleC5qcz82ZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJzsgLy8gSW1wb3J0IENTUyBtb2R1bGUgc3R5bGVzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGhlYXJ0IGZyb20gJy4uLy4uL2Fzc2V0cy9oZWFydC5wbmcnO1xyXG5pbXBvcnQgbGlrZWQgZnJvbSAnLi4vLi4vYXNzZXRzL2xpa2VkLnBuZyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlV2luZG93V2lkdGggZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93V2lkdGguanMnO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbaXNMaWtlZCxzZXRJc0xpa2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgd2luZG93V2lkdGg9dXNlV2luZG93V2lkdGgoKTtcclxuICAvLyBUcnVuY2F0ZSB0aXRsZSBpZiBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXHJcbiAgY29uc3QgdHJ1bmNhdGVkVGl0bGUgPSBwcm9wcy5kYXRhLnRpdGxlLmxlbmd0aCA+IDI1ID8gcHJvcHMuZGF0YS50aXRsZS5zbGljZSgwLCAyNSkgKyAnLi4uJyA6IHByb3BzLmRhdGEudGl0bGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2R1Y3QtY29udGFpbmVyJ119PlxyXG4gICAgICAgIHt3aW5kb3dXaWR0aD4xMTMwICYmIDxJbWFnZSAgYWx0PVwicHJvZHVjdC1pbWFnZVwiIHdpZHRoPXszMDB9IGhlaWdodD17MzUwfSBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9Lz59XHJcbiAgICAgICAge3dpbmRvd1dpZHRoPj05NjUgJiYgd2luZG93V2lkdGg8MTEzMCAmJiA8SW1hZ2UgIGFsdD1cInByb2R1Y3QtaW1hZ2VcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezMwMH0gc3JjPXtwcm9wcy5kYXRhLmltYWdlfS8+fVxyXG4gICAgICAgIHt3aW5kb3dXaWR0aD49NTUyICYmIHdpbmRvd1dpZHRoPDk2NSAmJiAgPEltYWdlICBhbHQ9XCJwcm9kdWN0LWltYWdlXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IHNyYz17cHJvcHMuZGF0YS5pbWFnZX0vPn1cclxuICAgICAgICB7d2luZG93V2lkdGg+PTQxNiAmJiB3aW5kb3dXaWR0aDw1NTIgJiYgIDxJbWFnZSAgYWx0PVwicHJvZHVjdC1pbWFnZVwiIHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9Lz59XHJcbiAgICAgICAge3dpbmRvd1dpZHRoPDQxNiAmJiAgPEltYWdlICBhbHQ9XCJwcm9kdWN0LWltYWdlXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IHNyYz17cHJvcHMuZGF0YS5pbWFnZX0vPn1cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1sndGl0bGUnXX0+e3RydW5jYXRlZFRpdGxlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZXh0LWljb24tY29udGFpbmVyJ119PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ3NpZ251cC10ZXh0J119PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWyd0ZXh0LWRlY29yJ119PlNpZ24gaW48L3NwYW4+IG9yIENyZWF0ZSBhbiBhY2NvdW50IHRvIHNlZSBwcmljaW5nPC9wPlxyXG4gICAgICAgICAgeyFpc0xpa2VkID8gPEltYWdlIGFsdD1cImZhdlwiIG9uQ2xpY2s9eygpPT5zZXRJc0xpa2VkKCFpc0xpa2VkKX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2Zhdi1pY29uJ119IHNyYz17aGVhcnR9IC8+OjxJbWFnZSBhbHQ9XCJmYXZcIiBvbkNsaWNrPXsoKT0+c2V0SXNMaWtlZCghaXNMaWtlZCl9IGNsYXNzTmFtZT17c3R5bGVzWydmYXYtaWNvbiddfSBzcmM9e2xpa2VkfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJoZWFydCIsImxpa2VkIiwidXNlU3RhdGUiLCJ1c2VXaW5kb3dXaWR0aCIsImluZGV4IiwicHJvcHMiLCJpc0xpa2VkIiwic2V0SXNMaWtlZCIsIndpbmRvd1dpZHRoIiwidHJ1bmNhdGVkVGl0bGUiLCJkYXRhIiwidGl0bGUiLCJsZW5ndGgiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJwIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/product/index.js\n"));

/***/ })

});