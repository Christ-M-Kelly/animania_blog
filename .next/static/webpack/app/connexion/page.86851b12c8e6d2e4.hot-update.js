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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Connexion)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _C_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./C_Footer */ \"(app-pages-browser)/./app/connexion/C_Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  opacity: 0.15;\\n  font-size: 3.5rem;\\n  color: \",\n        \";\\n  z-index: 1;\\n  transition: all 0.3s ease;\\n\\n  &:hover {\\n    opacity: 0.3;\\n    transform: scale(1.1);\\n  }\\n\\n  &.swaying-animal {\\n    animation: sway 4s ease-in-out infinite;\\n  }\\n\\n  &.floating-animal {\\n    animation: float 6s ease-in-out infinite;\\n  }\\n\\n  @keyframes sway {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    50% {\\n      transform: rotate(8deg);\\n    }\\n    100% {\\n      transform: rotate(0deg);\\n    }\\n  }\\n\\n  @keyframes float {\\n    0% {\\n      transform: translateY(0);\\n    }\\n    50% {\\n      transform: translateY(-15px);\\n    }\\n    100% {\\n      transform: translateY(0);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n// Définition des variables de couleurs\nconst theme = {\n    jungleGreen: \"#2d5a27\",\n    leafGreen: \"#4a7e3d\",\n    sand: \"#deb887\",\n    wood: \"#8b4513\",\n    lightGreen: \"#90ee90\"\n};\nconst StyledDecoration = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].i(_templateObject(), theme.jungleGreen);\n_c = StyledDecoration;\nfunction Connexion() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"min-h-screen flex flex-col items-center pt-32 pb-32 bg-gradient-to-b from-green-50 to-green-100 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl w-[90%] sm:w-[26rem] md:w-[30rem] lg:w-[32rem] backdrop-blur-sm bg-opacity-90 relative z-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-green-800\",\n                                children: \"Page de connexion\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                className: \"space-y-6 sm:space-y-7\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                className: \"block text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                type: \"email\",\n                                                id: \"email\",\n                                                className: \"mt-1 block w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-base sm:text-lg\",\n                                                required: true,\n                                                placeholder: \"votre@email.com\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"block text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3\",\n                                                children: \"Mot de passe\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                id: \"password\",\n                                                className: \"mt-1 block w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-base sm:text-lg\",\n                                                required: true,\n                                                placeholder: \"••••••••\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"w-full bg-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 font-semibold text-lg sm:text-xl shadow-md\",\n                                        children: \"Se connecter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 overflow-hidden pointer-events-none\",\n                        children: [\n                            {\n                                icon: \"hippo\",\n                                position: {\n                                    bottom: \"5%\",\n                                    right: \"10%\"\n                                },\n                                className: \"text-8xl swaying-animal\"\n                            },\n                            {\n                                icon: \"kiwi-bird\",\n                                position: {\n                                    top: \"15%\",\n                                    right: \"15%\"\n                                },\n                                className: \"text-7xl floating-animal\"\n                            },\n                            {\n                                icon: \"elephant\",\n                                position: {\n                                    bottom: \"8%\",\n                                    left: \"10%\"\n                                },\n                                className: \"text-9xl\"\n                            },\n                            {\n                                icon: \"paw\",\n                                position: {\n                                    bottom: \"8%\",\n                                    left: \"10%\"\n                                },\n                                className: \"text-9xl\"\n                            },\n                            {\n                                icon: \"otter\",\n                                position: {\n                                    top: \"20%\",\n                                    left: \"12%\"\n                                },\n                                className: \"text-6xl floating-animal\"\n                            }\n                        ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledDecoration, {\n                                className: \"fas fa-\".concat(item.icon, \" \").concat(item.className),\n                                style: item.position\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_C_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Moay\\xe9 Kelly\\\\animania_blog\\\\app\\\\connexion\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Connexion;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledDecoration\");\n$RefreshReg$(_c1, \"Connexion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb25uZXhpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDN0I7QUFDYTtBQUNMO0FBRWxDLHVDQUF1QztBQUN2QyxNQUFNRyxRQUFRO0lBQ1pDLGFBQWE7SUFDYkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsWUFBWTtBQUNkO0FBRUEsTUFBTUMsbUJBQW1CUix5REFBTUEsQ0FBQ1MsQ0FBQyxvQkFJdEJQLE1BQU1DLFdBQVc7S0FKdEJLO0FBOENTLFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ0Y7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBMEU7Ozs7OzswQ0FHeEYsOERBQUNFO2dDQUFLRixXQUFVOztrREFDZCw4REFBQ0Y7OzBEQUNDLDhEQUFDSztnREFDQ0MsU0FBUTtnREFDUkosV0FBVTswREFDWDs7Ozs7OzBEQUdELDhEQUFDSztnREFDQ0MsTUFBSztnREFDTEMsSUFBRztnREFDSFAsV0FBVTtnREFDVlEsUUFBUTtnREFDUkMsYUFBWTs7Ozs7Ozs7Ozs7O2tEQUdoQiw4REFBQ1g7OzBEQUNDLDhEQUFDSztnREFDQ0MsU0FBUTtnREFDUkosV0FBVTswREFDWDs7Ozs7OzBEQUdELDhEQUFDSztnREFDQ0MsTUFBSztnREFDTEMsSUFBRztnREFDSFAsV0FBVTtnREFDVlEsUUFBUTtnREFDUkMsYUFBWTs7Ozs7Ozs7Ozs7O2tEQUdoQiw4REFBQ0M7d0NBQ0NKLE1BQUs7d0NBQ0xOLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLTCw4REFBQ0Y7d0JBQUlFLFdBQVU7a0NBQ1o7NEJBQ0M7Z0NBQ0VXLE1BQU07Z0NBQ05DLFVBQVU7b0NBQUVDLFFBQVE7b0NBQU1DLE9BQU87Z0NBQU07Z0NBQ3ZDZCxXQUFXOzRCQUNiOzRCQUNBO2dDQUNFVyxNQUFNO2dDQUNOQyxVQUFVO29DQUFFRyxLQUFLO29DQUFPRCxPQUFPO2dDQUFNO2dDQUNyQ2QsV0FBVzs0QkFDYjs0QkFDQTtnQ0FDRVcsTUFBTTtnQ0FDTkMsVUFBVTtvQ0FBRUMsUUFBUTtvQ0FBTUcsTUFBTTtnQ0FBTTtnQ0FDdENoQixXQUFXOzRCQUNiOzRCQUNBO2dDQUNFVyxNQUFNO2dDQUNOQyxVQUFVO29DQUFFQyxRQUFRO29DQUFNRyxNQUFNO2dDQUFNO2dDQUN0Q2hCLFdBQVc7NEJBQ2I7NEJBQ0E7Z0NBQ0VXLE1BQU07Z0NBQ05DLFVBQVU7b0NBQUVHLEtBQUs7b0NBQU9DLE1BQU07Z0NBQU07Z0NBQ3BDaEIsV0FBVzs0QkFDYjt5QkFDRCxDQUFDaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNYLDhEQUFDeEI7Z0NBRUNLLFdBQVcsVUFBdUJrQixPQUFiQSxLQUFLUCxJQUFJLEVBQUMsS0FBa0IsT0FBZk8sS0FBS2xCLFNBQVM7Z0NBQ2hEb0IsT0FBT0YsS0FBS04sUUFBUTsrQkFGZk87Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT2IsOERBQUMvQixpREFBUUE7Ozs7Ozs7Ozs7O0FBR2Y7TUF0RndCUyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNb2F5w6kgS2VsbHlcXGFuaW1hbmlhX2Jsb2dcXGFwcFxcY29ubmV4aW9uXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENfRm9vdGVyIGZyb20gXCIuL0NfRm9vdGVyXCI7XHJcblxyXG4vLyBEw6lmaW5pdGlvbiBkZXMgdmFyaWFibGVzIGRlIGNvdWxldXJzXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIGp1bmdsZUdyZWVuOiBcIiMyZDVhMjdcIixcclxuICBsZWFmR3JlZW46IFwiIzRhN2UzZFwiLFxyXG4gIHNhbmQ6IFwiI2RlYjg4N1wiLFxyXG4gIHdvb2Q6IFwiIzhiNDUxM1wiLFxyXG4gIGxpZ2h0R3JlZW46IFwiIzkwZWU5MFwiLFxyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkRGVjb3JhdGlvbiA9IHN0eWxlZC5pYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwLjE1O1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIGNvbG9yOiAke3RoZW1lLmp1bmdsZUdyZWVufTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuXHJcbiAgJi5zd2F5aW5nLWFuaW1hbCB7XHJcbiAgICBhbmltYXRpb246IHN3YXkgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAmLmZsb2F0aW5nLWFuaW1hbCB7XHJcbiAgICBhbmltYXRpb246IGZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzd2F5IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmxvYXQge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uZXhpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwdC0zMiBwYi0zMiBiZy1ncmFkaWVudC10by1iIGZyb20tZ3JlZW4tNTAgdG8tZ3JlZW4tMTAwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggc206cC0xMCBtZDpwLTEyIHJvdW5kZWQteGwgc2hhZG93LTJ4bCB3LVs5MCVdIHNtOnctWzI2cmVtXSBtZDp3LVszMHJlbV0gbGc6dy1bMzJyZW1dIGJhY2tkcm9wLWJsdXItc20gYmctb3BhY2l0eS05MCByZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTggc206bWItMTAgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgUGFnZSBkZSBjb25uZXhpb25cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTYgc206c3BhY2UteS03XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyZWVuLTcwMCBtYi0yIHNtOm1iLTNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTQgc206cHgtNSBweS0zIHNtOnB5LTQgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JlZW4tMTAwIGZvY3VzOmJvcmRlci1ncmVlbi01MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tMjAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCB0ZXh0LWJhc2Ugc206dGV4dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2b3RyZUBlbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmVlbi03MDAgbWItMiBzbTptYi0zXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtNCBzbTpweC01IHB5LTMgc206cHktNCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmVlbi0xMDAgZm9jdXM6Ym9yZGVyLWdyZWVuLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0yMDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHRleHQtYmFzZSBzbTp0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgcHktMyBzbTpweS00IHB4LTYgc206cHgtOCByb3VuZGVkLWxnIGhvdmVyOmJnLWdyZWVuLTcwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb250LXNlbWlib2xkIHRleHQtbGcgc206dGV4dC14bCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2UgY29ubmVjdGVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW4gcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAge1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGljb246IFwiaGlwcG9cIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogeyBib3R0b206IFwiNSVcIiwgcmlnaHQ6IFwiMTAlXCIgfSxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC04eGwgc3dheWluZy1hbmltYWxcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGljb246IFwia2l3aS1iaXJkXCIsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHsgdG9wOiBcIjE1JVwiLCByaWdodDogXCIxNSVcIiB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LTd4bCBmbG9hdGluZy1hbmltYWxcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGljb246IFwiZWxlcGhhbnRcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogeyBib3R0b206IFwiOCVcIiwgbGVmdDogXCIxMCVcIiB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LTl4bFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogXCJwYXdcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogeyBib3R0b206IFwiOCVcIiwgbGVmdDogXCIxMCVcIiB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LTl4bFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogXCJvdHRlclwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHRvcDogXCIyMCVcIiwgbGVmdDogXCIxMiVcIiB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LTZ4bCBmbG9hdGluZy1hbmltYWxcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkRGVjb3JhdGlvblxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFzIGZhLSR7aXRlbS5pY29ufSAke2l0ZW0uY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e2l0ZW0ucG9zaXRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Q19Gb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQ19Gb290ZXIiLCJ0aGVtZSIsImp1bmdsZUdyZWVuIiwibGVhZkdyZWVuIiwic2FuZCIsIndvb2QiLCJsaWdodEdyZWVuIiwiU3R5bGVkRGVjb3JhdGlvbiIsImkiLCJDb25uZXhpb24iLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaWNvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJ0b3AiLCJsZWZ0IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/connexion/page.tsx\n"));

/***/ })

});