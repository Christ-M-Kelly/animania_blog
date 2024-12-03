"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/connexion/page",{

/***/ "(app-pages-browser)/./app/connexion/page.tsx":
/*!********************************!*\
  !*** ./app/connexion/page.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Connexion)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/.pnpm/@fortawesome+fontawesome-free@6.7.1/node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _C_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./C_Footer */ \"(app-pages-browser)/./app/connexion/C_Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Connexion() {\n    _s();\n    // État pour gérer le mot de passe\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // Ajout de l'état pour l'affichage du mot de passe\n    const togglePasswordVisibility = ()=>{\n        setShowPassword(!showPassword); // Bascule entre afficher et masquer\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"min-h-screen flex flex-col items-center pt-32 pb-32 bg-gradient-to-b from-green-50 to-green-100 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-6 sm:p-8 md:p-20 rounded-xl shadow-2xl w-[90%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] backdrop-blur-sm bg-opacity-90 relative z-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800\",\n                            children: \"Connexion\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-red-600 text-sm text-center mb-4\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-5 sm:space-y-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block text-sm sm:text-base font-semibold text-green-700 mb-2\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            className: \"mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm sm:text-base\",\n                                            required: true,\n                                            placeholder: \"votre@email.com\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"block text-sm sm:text-base font-semibold text-green-700 mb-2\",\n                                            children: \"Mot de passe\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: showPassword ? \"text\" : \"password\",\n                                                    id: \"password\",\n                                                    value: password,\n                                                    onChange: (e)=>setPassword(e.target.value),\n                                                    className: \"mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm sm:text-base\",\n                                                    required: true,\n                                                    placeholder: \"••••••••\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: togglePasswordVisibility,\n                                                    className: \"absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fas \".concat(showPassword ? \"fa-eye-slash\" : \"fa-eye\")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-green-600 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 font-semibold text-base sm:text-lg shadow-md\",\n                                    children: \"Se connecter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_C_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mehdi\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Connexion, \"8aDNzKbeq9yh7nG9pxUC0BYLeUg=\");\n_c = Connexion;\nvar _c;\n$RefreshReg$(_c, \"Connexion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb25uZXhpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDZjtBQUVOO0FBRW5CLFNBQVNHOztJQUN0QixrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUMsUUFBUSxtREFBbUQ7SUFFNUcsTUFBTVcsMkJBQTJCO1FBQy9CRCxnQkFBZ0IsQ0FBQ0QsZUFBZSxvQ0FBb0M7SUFDdEU7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQztnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBeUU7Ozs7Ozt3QkFHdEZQLHVCQUNDLDhEQUFDSzs0QkFBSUUsV0FBVTtzQ0FBeUNQOzs7Ozs7c0NBRTFELDhEQUFDUzs0QkFBS0YsV0FBVTs7OENBQ2QsOERBQUNGOztzREFDQyw4REFBQ0s7NENBQ0NDLFNBQVE7NENBQ1JKLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ0s7NENBQ0NDLE1BQUs7NENBQ0xDLElBQUc7NENBQ0hDLE9BQU9uQjs0Q0FDUG9CLFVBQVUsQ0FBQ0MsSUFBTXBCLFNBQVNvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7NENBQ3hDUixXQUFVOzRDQUNWWSxRQUFROzRDQUNSQyxhQUFZOzs7Ozs7Ozs7Ozs7OENBR2hCLDhEQUFDZjs7c0RBQ0MsOERBQUNLOzRDQUNDQyxTQUFROzRDQUNSSixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNGOzRDQUFJRSxXQUFVOzs4REFDYiw4REFBQ0s7b0RBQ0NDLE1BQU1YLGVBQWUsU0FBUztvREFDOUJZLElBQUc7b0RBQ0hDLE9BQU9qQjtvREFDUGtCLFVBQVUsQ0FBQ0MsSUFBTWxCLFlBQVlrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0RBQzNDUixXQUFVO29EQUNWWSxRQUFRO29EQUNSQyxhQUFZOzs7Ozs7OERBRWQsOERBQUNDO29EQUNDUixNQUFLO29EQUNMUyxTQUFTbEI7b0RBQ1RHLFdBQVU7OERBRVYsNEVBQUNnQjt3REFDQ2hCLFdBQVcsT0FBZ0QsT0FBekNMLGVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLMUQsOERBQUNtQjtvQ0FDQ1IsTUFBSztvQ0FDTE4sV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVAsOERBQUNiLGlEQUFRQTs7Ozs7Ozs7Ozs7QUFHZjtHQS9Fd0JDO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1laGRpXFxhbmltYW5pYV9ibG9nXFxhcHBcXGNvbm5leGlvblxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDX0Zvb3RlciBmcm9tIFwiLi9DX0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmV4aW9uKCkge1xyXG4gIC8vIMOJdGF0IHBvdXIgZ8OpcmVyIGxlIG1vdCBkZSBwYXNzZVxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEFqb3V0IGRlIGwnw6l0YXQgcG91ciBsJ2FmZmljaGFnZSBkdSBtb3QgZGUgcGFzc2VcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpOyAvLyBCYXNjdWxlIGVudHJlIGFmZmljaGVyIGV0IG1hc3F1ZXJcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB0LTMyIHBiLTMyIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmVlbi01MCB0by1ncmVlbi0xMDAgcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiBzbTpwLTggbWQ6cC0yMCByb3VuZGVkLXhsIHNoYWRvdy0yeGwgdy1bOTAlXSBzbTp3LVszMHJlbV0gbWQ6dy1bMzVyZW1dIGxnOnctWzQwcmVtXSBiYWNrZHJvcC1ibHVyLXNtIGJnLW9wYWNpdHktOTAgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi02IHNtOm1iLTggdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbSB0ZXh0LWNlbnRlciBtYi00XCI+e2Vycm9yfTwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNSBzbTpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHNtOnRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtZ3JlZW4tNzAwIG1iLTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtMyBzbTpweC00IHB5LTIgc206cHktMyByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmVlbi0xMDAgZm9jdXM6Ym9yZGVyLWdyZWVuLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0yMDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHRleHQtc20gc206dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZvdHJlQGVtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWdyZWVuLTcwMCBtYi0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0gLy8gQ2hhbmdlIGxlIHR5cGUgZCdlbnRyw6llIGVuIGZvbmN0aW9uIGRlIGxhIHZpc2liaWxpdMOpXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweC0zIHNtOnB4LTQgcHktMiBzbTpweS0zIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTEwMCBmb2N1czpib3JkZXItZ3JlZW4tNTAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTIwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdGV4dC1ncmVlbi02MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhcyAke3Nob3dQYXNzd29yZCA/IFwiZmEtZXllLXNsYXNoXCIgOiBcImZhLWV5ZVwifWB9IC8vIEljw7RuZSBkJ8WTaWwgcG91ciBhZmZpY2hlci9tYXNxdWVyXHJcbiAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgcHktMiBzbTpweS0zIHB4LTUgc206cHgtNiByb3VuZGVkLWxnIGhvdmVyOmJnLWdyZWVuLTcwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb250LXNlbWlib2xkIHRleHQtYmFzZSBzbTp0ZXh0LWxnIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPENfRm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ19Gb290ZXIiLCJDb25uZXhpb24iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/connexion/page.tsx\n"));

/***/ })

});