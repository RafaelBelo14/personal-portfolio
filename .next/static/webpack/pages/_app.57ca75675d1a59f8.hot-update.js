"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar */ \"./components/navbar.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _my_setup_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-setup-loader */ \"./components/my-setup-loader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nfunction Model(param) {\n    var url = param.url;\n    _s();\n    var gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.useLoader)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader, url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n        object: gltf.scene,\n        dispose: null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n_s(Model, \"/mQP3JhHVfBVax7R1fyeo+Vn9YY=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.useLoader\n    ];\n});\n_c = Model;\nvar Lights = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 0.3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                position: [\n                    1,\n                    1,\n                    1\n                ],\n                intensity: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                castShadow: true,\n                position: [\n                    0,\n                    10,\n                    0\n                ],\n                intensity: 1.5,\n                \"shadow-mapSize-width\": 1024,\n                \"shadow-mapSize-height\": 1024,\n                \"shadow-camera-far\": 50,\n                \"shadow-camera-left\": -10,\n                \"shadow-camera-right\": 10,\n                \"shadow-camera-top\": 10,\n                \"shadow-camera-bottom\": -10\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                intensity: 1,\n                position: [\n                    1,\n                    1,\n                    1\n                ],\n                castShadow: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c1 = Lights;\nvar HTMLContent = function(param) {\n    var modelPath = param.modelPath;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: ref,\n        position: [\n            2,\n            -2,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Model, {\n            url: modelPath\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, _this);\n};\n_s1(HTMLContent, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n_c2 = HTMLContent;\nvar Main = function(param) {\n    var children = param.children, router = param.router;\n    _s2();\n    var domContent = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        as: \"main\",\n        pb: 8,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rafa's Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                path: router.asPath\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                maxW: \"container.md\",\n                pt: 14,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"40vw\",\n                            height: \"40vh\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                            concurrent: true,\n                            colorManagement: true,\n                            camera: {\n                                position: [\n                                    4,\n                                    4,\n                                    8\n                                ]\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Lights, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {\n                                    fallback: null,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HTMLContent, {\n                                        domContent: domContent,\n                                        bgColor: \"#f15946\",\n                                        modelPath: \"/MYSETUP.glb\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, _this);\n};\n_s2(Main, \"iDB7OpFY00YZlAJjcMi7kOV5Vh8=\");\n_c3 = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Model\");\n$RefreshReg$(_c1, \"Lights\");\n$RefreshReg$(_c2, \"HTMLContent\");\n$RefreshReg$(_c3, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFOztrQ0FDakMsOERBQUNDLEtBQUc7d0JBQUNDLEtBQUssRUFBRTs0QkFBRUMsS0FBSyxFQUFFLE1BQU07NEJBQUVDLE1BQU0sRUFBRSxNQUFNO3lCQUFFO2tDQUN6Qyw0RUFBQzlDLHFEQUFNOzRCQUNIK0MsVUFBVTs0QkFDVkMsZUFBZTs0QkFDZkMsTUFBTSxFQUFFO2dDQUFFbEMsUUFBUSxFQUFFO0FBQUMscUNBQUM7QUFBRSxxQ0FBQztBQUFFLHFDQUFDO2lDQUFDOzZCQUFDOzs4Q0FFOUIsOERBQUNKLE1BQU07Ozs7eUNBQUc7OENBQ1YsOERBQUNaLDJDQUFRO29DQUFDbUQsUUFBUSxFQUFFLElBQUk7OENBQ3hCLDRFQUFDekIsV0FBVzt3Q0FDUk8sVUFBVSxFQUFFQSxVQUFVO3dDQUN0Qm1CLE9BQU8sRUFBQyxTQUFTO3dDQUNqQnpCLFNBQVMsRUFBQyxjQUFjOzs7Ozs2Q0FFZDs7Ozs7eUNBQ0g7Ozs7OztpQ0FDTjs7Ozs7NkJBQ1A7b0JBQ0xJLFFBQVE7Ozs7OztxQkFDRDs7Ozs7O2FBQ1YsQ0FDVDtDQUNKO0lBbENLRCxJQUFJO0FBQUpBLE1BQUFBLElBQUk7QUFvQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL21haW4uanM/ZTVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vbmF2YmFyJ1xyXG5pbXBvcnQge0JveCwgQ29udGFpbmVyfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBEb2dTcGlubmVyLCBEb2dDb250YWluZXIgfSBmcm9tICcuLi9teS1zZXR1cC1sb2FkZXInXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInXHJcbmltcG9ydCB7IHVzZUxvYWRlciB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcblxyXG5mdW5jdGlvbiBNb2RlbCh7IHVybCB9KSB7XHJcbiAgICBjb25zdCBnbHRmID0gdXNlTG9hZGVyKEdMVEZMb2FkZXIsIHVybClcclxuICAgIHJldHVybiA8cHJpbWl0aXZlIG9iamVjdD17Z2x0Zi5zY2VuZX0gZGlzcG9zZT17bnVsbH0gLz47XHJcbiAgfVxyXG5cclxuY29uc3QgTGlnaHRzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7LyogQW1iaWVudCBMaWdodCBpbGx1bWluYXRlcyBsaWdodHMgZm9yIGFsbCBvYmplY3RzICovfVxyXG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXswLjN9IC8+XHJcbiAgICAgICAgey8qIERpcmV0aW9uIGxpZ2h0ICovfVxyXG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMSwgMSwgMV19IGludGVuc2l0eT17MX0gLz5cclxuICAgICAgICA8ZGlyZWN0aW9uYWxMaWdodFxyXG4gICAgICAgICAgY2FzdFNoYWRvd1xyXG4gICAgICAgICAgcG9zaXRpb249e1swLCAxMCwgMF19XHJcbiAgICAgICAgICBpbnRlbnNpdHk9ezEuNX1cclxuICAgICAgICAgIHNoYWRvdy1tYXBTaXplLXdpZHRoPXsxMDI0fVxyXG4gICAgICAgICAgc2hhZG93LW1hcFNpemUtaGVpZ2h0PXsxMDI0fVxyXG4gICAgICAgICAgc2hhZG93LWNhbWVyYS1mYXI9ezUwfVxyXG4gICAgICAgICAgc2hhZG93LWNhbWVyYS1sZWZ0PXstMTB9XHJcbiAgICAgICAgICBzaGFkb3ctY2FtZXJhLXJpZ2h0PXsxMH1cclxuICAgICAgICAgIHNoYWRvdy1jYW1lcmEtdG9wPXsxMH1cclxuICAgICAgICAgIHNoYWRvdy1jYW1lcmEtYm90dG9tPXstMTB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogU3BvdGxpZ2h0IExhcmdlIG92ZXJoZWFkIGxpZ2h0ICovfVxyXG4gICAgICAgIDxzcG90TGlnaHQgaW50ZW5zaXR5PXsxfSBwb3NpdGlvbj17WzEsIDEsIDFdfSBjYXN0U2hhZG93IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgSFRNTENvbnRlbnQgPSAoe1xyXG4gICAgbW9kZWxQYXRoLFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWVzaCByZWY9e3JlZn0gcG9zaXRpb249e1syLCAtMiwgMF19PlxyXG4gICAgICAgICAgICA8TW9kZWwgdXJsPXttb2RlbFBhdGh9IC8+XHJcbiAgICAgICAgPC9tZXNoPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuLCByb3V0ZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgZG9tQ29udGVudCA9IHVzZVJlZigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBhcz1cIm1haW5cIiBwYj17OH0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5SYWZhJ3MgUG9ydGZvbGlvPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPE5hdmJhciBwYXRoID0ge3JvdXRlci5hc1BhdGh9Lz5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5tZFwiIHB0PXsxNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwdndcIiwgaGVpZ2h0OiBcIjQwdmhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FudmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JNYW5hZ2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYT17eyBwb3NpdGlvbjogWzQsIDQsIDhdfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMaWdodHMgQ29tcG9uZW50ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIVE1MQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tQ29udGVudD17ZG9tQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9JyNmMTU5NDYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbFBhdGg9Jy9NWVNFVFVQLmdsYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hUTUxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FudmFzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJCb3giLCJDb250YWluZXIiLCJEb2dTcGlubmVyIiwiRG9nQ29udGFpbmVyIiwiUmVhY3QiLCJ1c2VSZWYiLCJTdXNwZW5zZSIsIkNhbnZhcyIsIkdMVEZMb2FkZXIiLCJ1c2VMb2FkZXIiLCJUSFJFRSIsIk1vZGVsIiwidXJsIiwiZ2x0ZiIsInByaW1pdGl2ZSIsIm9iamVjdCIsInNjZW5lIiwiZGlzcG9zZSIsIkxpZ2h0cyIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsImRpcmVjdGlvbmFsTGlnaHQiLCJwb3NpdGlvbiIsImNhc3RTaGFkb3ciLCJzaGFkb3ctbWFwU2l6ZS13aWR0aCIsInNoYWRvdy1tYXBTaXplLWhlaWdodCIsInNoYWRvdy1jYW1lcmEtZmFyIiwic2hhZG93LWNhbWVyYS1sZWZ0Iiwic2hhZG93LWNhbWVyYS1yaWdodCIsInNoYWRvdy1jYW1lcmEtdG9wIiwic2hhZG93LWNhbWVyYS1ib3R0b20iLCJzcG90TGlnaHQiLCJIVE1MQ29udGVudCIsIm1vZGVsUGF0aCIsInJlZiIsIm1lc2giLCJNYWluIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJkb21Db250ZW50IiwiYXMiLCJwYiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIiwicGF0aCIsImFzUGF0aCIsIm1heFciLCJwdCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb25jdXJyZW50IiwiY29sb3JNYW5hZ2VtZW50IiwiY2FtZXJhIiwiZmFsbGJhY2siLCJiZ0NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/main.js\n"));

/***/ }),

/***/ "./components/my-setup-loader.js":
/*!***************************************!*\
  !*** ./components/my-setup-loader.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DogContainer\": function() { return /* binding */ DogContainer; },\n/* harmony export */   \"DogSpinner\": function() { return /* binding */ DogSpinner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\nvar DogSpinner = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {\n        size: \"xl\",\n        position: \"absolute\",\n        left: \"50%\",\n        top: \"50%\",\n        ml: \"calc(0px - var(--spinner-size) / 2)\",\n        mt: \"calc(0px - var(--spinner-size))\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\my-setup-loader.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, _this);\n};\n_c = DogSpinner;\nvar DogContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(param, ref) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        ref: ref,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\my-setup-loader.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, _this);\n});\n_c1 = DogContainer;\nvar Loader = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DogContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DogSpinner, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\my-setup-loader.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\my-setup-loader.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"DogSpinner\");\n$RefreshReg$(_c1, \"DogContainer\");\n$RefreshReg$(_c2, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL215LXNldHVwLWxvYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQWtDO0FBQ2E7QUFFeEMsSUFBTUcsVUFBVSxHQUFHO3lCQUN4Qiw4REFBQ0QscURBQU87UUFDTkUsSUFBSSxFQUFDLElBQUk7UUFDVEMsUUFBUSxFQUFDLFVBQVU7UUFDbkJDLElBQUksRUFBQyxLQUFLO1FBQ1ZDLEdBQUcsRUFBQyxLQUFLO1FBQ1RDLEVBQUUsRUFBQyxxQ0FBcUM7UUFDeENDLEVBQUUsRUFBQyxpQ0FBaUM7Ozs7O2FBQ3BDO0NBQ0g7QUFUWU4sS0FBQUEsVUFBVTtBQVdoQixJQUFNTyxZQUFZLGlCQUFHVixpREFBVSxDQUFDLGdCQUFlVyxHQUFHO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTt5QkFDaEQsOERBQUNYLGlEQUFHO1FBQ0ZVLEdBQUcsRUFBRUEsR0FBRztRQUNSRSxTQUFTLEVBQUMsV0FBVztRQUNyQkMsQ0FBQyxFQUFDLE1BQU07UUFDUkwsRUFBRSxFQUFFO1lBQUMsT0FBTztZQUFFLE9BQU87WUFBRSxRQUFRO1NBQUM7UUFDaENNLEVBQUUsRUFBRTtZQUFDLE9BQU87WUFBRSxRQUFRO1lBQUUsUUFBUTtTQUFDO1FBQ2pDQyxDQUFDLEVBQUU7QUFBQyxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNsQkMsQ0FBQyxFQUFFO0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDbEJaLFFBQVEsRUFBQyxVQUFVO2tCQUVsQk8sUUFBUTs7Ozs7YUFDTDtDQUNQLENBQUM7QUFiV0YsTUFBQUEsWUFBWTtBQWV6QixJQUFNUSxNQUFNLEdBQUcsV0FBTTtJQUNuQixxQkFDRSw4REFBQ1IsWUFBWTtrQkFDWCw0RUFBQ1AsVUFBVTs7OztpQkFBRzs7Ozs7YUFDRCxDQUNoQjtDQUNGO0FBTktlLE1BQUFBLE1BQU07QUFRWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL215LXNldHVwLWxvYWRlci5qcz9lZmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBEb2dTcGlubmVyID0gKCkgPT4gKFxyXG4gIDxTcGlubmVyXHJcbiAgICBzaXplPVwieGxcIlxyXG4gICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICBsZWZ0PVwiNTAlXCJcclxuICAgIHRvcD1cIjUwJVwiXHJcbiAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiXHJcbiAgLz5cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IERvZ0NvbnRhaW5lciA9IGZvcndhcmRSZWYoKHsgY2hpbGRyZW4gfSwgcmVmKSA9PiAoXHJcbiAgPEJveFxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9XCJ2b3hlbC1kb2dcIlxyXG4gICAgbT1cImF1dG9cIlxyXG4gICAgbXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XHJcbiAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4J119XHJcbiAgICB3PXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICBoPXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9Cb3g+XHJcbikpXHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2dDb250YWluZXI+XHJcbiAgICAgIDxEb2dTcGlubmVyIC8+XHJcbiAgICA8L0RvZ0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlciJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwiQm94IiwiU3Bpbm5lciIsIkRvZ1NwaW5uZXIiLCJzaXplIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwibWwiLCJtdCIsIkRvZ0NvbnRhaW5lciIsInJlZiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwibSIsIm1iIiwidyIsImgiLCJMb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/my-setup-loader.js\n"));

/***/ })

});