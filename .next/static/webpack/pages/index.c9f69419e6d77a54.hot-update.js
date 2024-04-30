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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ \"./components/product/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_heart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/heart.png */ \"./assets/heart.png\");\n/* harmony import */ var _assets_liked_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/liked.png */ \"./assets/liked.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useWindowWidth.js */ \"./hooks/useWindowWidth.js\");\n\nvar _s = $RefreshSig$();\n // Import CSS module styles\n\n\n\n\n\n// Component for displaying a product card\nfunction index(props) {\n    _s();\n    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false); // State for tracking whether the product is liked\n    const windowWidth = (0,_hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // Hook for getting the window width\n    // Truncate title if longer than 25 characters\n    const truncatedTitle = props.data.title.length > 25 ? props.data.title.slice(0, 25) + \"...\" : props.data.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"product-container\"]),\n        children: [\n            windowWidth > 1130 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"product-image\",\n                priority: true,\n                width: 300,\n                height: 350,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 30\n            }, this),\n            windowWidth >= 965 && windowWidth < 1130 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                priority: true,\n                alt: \"product-image\",\n                width: 250,\n                height: 300,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 52\n            }, this),\n            windowWidth >= 552 && windowWidth < 965 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                priority: true,\n                alt: \"product-image\",\n                width: 200,\n                height: 200,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 51\n            }, this),\n            windowWidth >= 416 && windowWidth < 552 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                priority: true,\n                alt: \"product-image\",\n                width: 150,\n                height: 150,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 51\n            }, this),\n            windowWidth < 416 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                priority: true,\n                alt: \"product-image\",\n                width: 130,\n                height: 130,\n                src: props.data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 29\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),\n                children: truncatedTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"text-icon-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"signup-text\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"text-decor\"]),\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                                lineNumber: 31,\n                                columnNumber: 46\n                            }, this),\n                            \" or Create an account to see pricing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    !isLiked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"fav\",\n                        onClick: ()=>setIsLiked(!isLiked),\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"fav-icon\"]),\n                        src: _assets_heart_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"fav\",\n                        onClick: ()=>setIsLiked(!isLiked),\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"fav-icon\"]),\n                        src: _assets_liked_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 123\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anura\\\\e-shopping\\\\components\\\\product\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"ea/xe4/PrUtYvL3GUJTuP3pT6n0=\", false, function() {\n    return [\n        _hooks_useWindowWidth_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0MsQ0FBQywyQkFBMkI7QUFDckM7QUFDWTtBQUNBO0FBQ1Y7QUFDMEI7QUFFM0QsMENBQTBDO0FBQzFDLFNBQVNNLE1BQU1DLEtBQUs7O0lBQ2xCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxRQUFRLGtEQUFrRDtJQUNqRyxNQUFNTSxjQUFjTCxvRUFBY0EsSUFBSSxvQ0FBb0M7SUFFMUUsOENBQThDO0lBQzlDLE1BQU1NLGlCQUFpQkosTUFBTUssSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLUCxNQUFNSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsTUFBTSxRQUFRUixNQUFNSyxJQUFJLENBQUNDLEtBQUs7SUFFOUcscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdqQiwrRUFBMkI7O1lBRXhDVSxjQUFjLHNCQUFRLDhEQUFDVCxtREFBS0E7Z0JBQUNpQixLQUFJO2dCQUFnQkMsUUFBUTtnQkFBQ0MsT0FBTztnQkFBS0MsUUFBUTtnQkFBS0MsS0FBS2YsTUFBTUssSUFBSSxDQUFDVyxLQUFLOzs7Ozs7WUFDeEdiLGVBQWUsT0FBT0EsY0FBYyxzQkFBUSw4REFBQ1QsbURBQUtBO2dCQUFDa0IsUUFBUTtnQkFBQ0QsS0FBSTtnQkFBZ0JFLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLEtBQUtmLE1BQU1LLElBQUksQ0FBQ1csS0FBSzs7Ozs7O1lBQzlIYixlQUFlLE9BQU9BLGNBQWMscUJBQU8sOERBQUNULG1EQUFLQTtnQkFBQ2tCLFFBQVE7Z0JBQUNELEtBQUk7Z0JBQWdCRSxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFLZixNQUFNSyxJQUFJLENBQUNXLEtBQUs7Ozs7OztZQUM3SGIsZUFBZSxPQUFPQSxjQUFjLHFCQUFPLDhEQUFDVCxtREFBS0E7Z0JBQUNrQixRQUFRO2dCQUFDRCxLQUFJO2dCQUFnQkUsT0FBTztnQkFBS0MsUUFBUTtnQkFBS0MsS0FBS2YsTUFBTUssSUFBSSxDQUFDVyxLQUFLOzs7Ozs7WUFDN0hiLGNBQWMscUJBQU8sOERBQUNULG1EQUFLQTtnQkFBQ2tCLFFBQVE7Z0JBQUNELEtBQUk7Z0JBQWdCRSxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFLZixNQUFNSyxJQUFJLENBQUNXLEtBQUs7Ozs7OzswQkFHeEcsOERBQUNDO2dCQUFFUCxXQUFXakIsZ0VBQWU7MEJBQUdXOzs7Ozs7MEJBR2hDLDhEQUFDSztnQkFBSUMsV0FBV2pCLGlGQUE2Qjs7a0NBRTNDLDhEQUFDd0I7d0JBQUVQLFdBQVdqQix5RUFBcUI7OzBDQUFFLDhEQUFDeUI7Z0NBQUtSLFdBQVdqQix3RUFBb0I7MENBQUU7Ozs7Ozs0QkFBYzs7Ozs7OztvQkFHekYsQ0FBQ1Esd0JBQVUsOERBQUNQLG1EQUFLQTt3QkFBQ2lCLEtBQUk7d0JBQU1RLFNBQVMsSUFBTWpCLFdBQVcsQ0FBQ0Q7d0JBQVVTLFdBQVdqQixzRUFBa0I7d0JBQUVzQixLQUFLcEIseURBQUtBOzs7Ozs2Q0FBTyw4REFBQ0QsbURBQUtBO3dCQUFDaUIsS0FBSTt3QkFBTVEsU0FBUyxJQUFNakIsV0FBVyxDQUFDRDt3QkFBVVMsV0FBV2pCLHNFQUFrQjt3QkFBRXNCLEtBQUtuQix5REFBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6TjtHQTdCU0c7O1FBRWFELGdFQUFjQTs7O0FBNkJwQywrREFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXguanM/NmU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7IC8vIEltcG9ydCBDU1MgbW9kdWxlIHN0eWxlc1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBoZWFydCBmcm9tICcuLi8uLi9hc3NldHMvaGVhcnQucG5nJztcclxuaW1wb3J0IGxpa2VkIGZyb20gJy4uLy4uL2Fzc2V0cy9saWtlZC5wbmcnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVdpbmRvd1dpZHRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoLmpzJztcclxuXHJcbi8vIENvbXBvbmVudCBmb3IgZGlzcGxheWluZyBhIHByb2R1Y3QgY2FyZFxyXG5mdW5jdGlvbiBpbmRleChwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xpa2VkLCBzZXRJc0xpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgZm9yIHRyYWNraW5nIHdoZXRoZXIgdGhlIHByb2R1Y3QgaXMgbGlrZWRcclxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7IC8vIEhvb2sgZm9yIGdldHRpbmcgdGhlIHdpbmRvdyB3aWR0aFxyXG5cclxuICAvLyBUcnVuY2F0ZSB0aXRsZSBpZiBsb25nZXIgdGhhbiAyNSBjaGFyYWN0ZXJzXHJcbiAgY29uc3QgdHJ1bmNhdGVkVGl0bGUgPSBwcm9wcy5kYXRhLnRpdGxlLmxlbmd0aCA+IDI1ID8gcHJvcHMuZGF0YS50aXRsZS5zbGljZSgwLCAyNSkgKyAnLi4uJyA6IHByb3BzLmRhdGEudGl0bGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydwcm9kdWN0LWNvbnRhaW5lciddfT5cclxuICAgICAgey8qIFJlbmRlciBkaWZmZXJlbnQgaW1hZ2Ugc2l6ZXMgYmFzZWQgb24gd2luZG93IHdpZHRoICovfVxyXG4gICAgICB7d2luZG93V2lkdGggPiAxMTMwICYmIDxJbWFnZSBhbHQ9XCJwcm9kdWN0LWltYWdlXCIgcHJpb3JpdHkgd2lkdGg9ezMwMH0gaGVpZ2h0PXszNTB9IHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gLz59XHJcbiAgICAgIHt3aW5kb3dXaWR0aCA+PSA5NjUgJiYgd2luZG93V2lkdGggPCAxMTMwICYmIDxJbWFnZSBwcmlvcml0eSBhbHQ9XCJwcm9kdWN0LWltYWdlXCIgd2lkdGg9ezI1MH0gaGVpZ2h0PXszMDB9IHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gLz59XHJcbiAgICAgIHt3aW5kb3dXaWR0aCA+PSA1NTIgJiYgd2luZG93V2lkdGggPCA5NjUgJiYgPEltYWdlIHByaW9yaXR5IGFsdD1cInByb2R1Y3QtaW1hZ2VcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gc3JjPXtwcm9wcy5kYXRhLmltYWdlfSAvPn1cclxuICAgICAge3dpbmRvd1dpZHRoID49IDQxNiAmJiB3aW5kb3dXaWR0aCA8IDU1MiAmJiA8SW1hZ2UgcHJpb3JpdHkgYWx0PVwicHJvZHVjdC1pbWFnZVwiIHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IC8+fVxyXG4gICAgICB7d2luZG93V2lkdGggPCA0MTYgJiYgPEltYWdlIHByaW9yaXR5IGFsdD1cInByb2R1Y3QtaW1hZ2VcIiB3aWR0aD17MTMwfSBoZWlnaHQ9ezEzMH0gc3JjPXtwcm9wcy5kYXRhLmltYWdlfSAvPn1cclxuICAgICAgXHJcbiAgICAgIHsvKiBEaXNwbGF5IHRydW5jYXRlZCB0aXRsZSAqL31cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ3RpdGxlJ119Pnt0cnVuY2F0ZWRUaXRsZX08L3A+XHJcblxyXG4gICAgICB7LyogUmVuZGVyIGxpa2UgYnV0dG9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZXh0LWljb24tY29udGFpbmVyJ119PlxyXG4gICAgICAgIHsvKiBEaXNwbGF5IGRpZmZlcmVudCB0ZXh0IGJhc2VkIG9uIHVzZXIgbG9naW4gc3RhdHVzICovfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydzaWdudXAtdGV4dCddfT48c3BhbiBjbGFzc05hbWU9e3N0eWxlc1sndGV4dC1kZWNvciddfT5TaWduIGluPC9zcGFuPiBvciBDcmVhdGUgYW4gYWNjb3VudCB0byBzZWUgcHJpY2luZzwvcD5cclxuXHJcbiAgICAgICAgey8qIFJlbmRlciBoZWFydCBpY29uIGJhc2VkIG9uIGxpa2Ugc3RhdHVzICovfVxyXG4gICAgICAgIHshaXNMaWtlZCA/IDxJbWFnZSBhbHQ9XCJmYXZcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xpa2VkKCFpc0xpa2VkKX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2Zhdi1pY29uJ119IHNyYz17aGVhcnR9IC8+IDogPEltYWdlIGFsdD1cImZhdlwiIG9uQ2xpY2s9eygpID0+IHNldElzTGlrZWQoIWlzTGlrZWQpfSBjbGFzc05hbWU9e3N0eWxlc1snZmF2LWljb24nXX0gc3JjPXtsaWtlZH0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsImhlYXJ0IiwibGlrZWQiLCJ1c2VTdGF0ZSIsInVzZVdpbmRvd1dpZHRoIiwiaW5kZXgiLCJwcm9wcyIsImlzTGlrZWQiLCJzZXRJc0xpa2VkIiwid2luZG93V2lkdGgiLCJ0cnVuY2F0ZWRUaXRsZSIsImRhdGEiLCJ0aXRsZSIsImxlbmd0aCIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0IiwicHJpb3JpdHkiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlIiwicCIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/product/index.js\n"));

/***/ })

});