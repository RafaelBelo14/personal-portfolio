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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar */ \"./components/navbar.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n    shouldForwardProp: function(prop) {\n        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.shouldForwardProp)(prop) || prop === \"transition\";\n    }\n});\n_c = StyledDiv;\nfunction Model(param) {\n    var url = param.url;\n    _s();\n    var gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.useLoader)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_4__.GLTFLoader, url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n        object: gltf.scene,\n        dispose: null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, this);\n}\n_s(Model, \"/mQP3JhHVfBVax7R1fyeo+Vn9YY=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.useLoader\n    ];\n});\n_c1 = Model;\nvar Lights = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 0.3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                position: [\n                    100,\n                    100,\n                    100\n                ],\n                intensity: 0.5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                castShadow: true,\n                position: [\n                    0,\n                    10,\n                    0\n                ],\n                intensity: 1.5,\n                \"shadow-mapSize-width\": 1024,\n                \"shadow-mapSize-height\": 1024,\n                \"shadow-camera-far\": 50,\n                \"shadow-camera-left\": -10,\n                \"shadow-camera-right\": 10,\n                \"shadow-camera-top\": 10,\n                \"shadow-camera-bottom\": -10\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                intensity: 1,\n                position: [\n                    1,\n                    1,\n                    1\n                ],\n                castShadow: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c2 = Lights;\nvar HTMLContent = function(param) {\n    var modelPath = param.modelPath;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: ref,\n        position: [\n            3,\n            -2.5,\n            0\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Model, {\n            url: modelPath\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, _this);\n};\n_s1(HTMLContent, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n_c3 = HTMLContent;\nvar Main = function(param) {\n    var children = param.children, router = param.router;\n    _s2();\n    var domContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        as: \"main\",\n        pb: 8,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rafa's Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                path: router.asPath\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxW: \"container.md\",\n                pt: 14,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {\n                        initial: {\n                            y: 10,\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            duration: 0.8,\n                            delay: 0\n                        },\n                        mb: 0,\n                        align: \"center\",\n                        style: {\n                            height: \"40vh\",\n                            width: \"40vw\",\n                            textAlign: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                            concurrent: true,\n                            colorManagement: true,\n                            camera: {\n                                position: [\n                                    20,\n                                    10,\n                                    20\n                                ],\n                                fov: 20\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Lights, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                                    fallback: null,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HTMLContent, {\n                                        domContent: domContent,\n                                        bgColor: \"#f15946\",\n                                        modelPath: \"/MYSETUP.glb\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, _this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rafael\\\\Documents\\\\rafa-homepage\\\\components\\\\layouts\\\\main.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, _this);\n};\n_s2(Main, \"iDB7OpFY00YZlAJjcMi7kOV5Vh8=\");\n_c4 = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"StyledDiv\");\n$RefreshReg$(_c1, \"Model\");\n$RefreshReg$(_c2, \"Lights\");\n$RefreshReg$(_c3, \"HTMLContent\");\n$RefreshReg$(_c4, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTs7Ozs7O3FCQUNEOzs7Ozs7YUFDVixDQUNUO0NBQ0o7SUF4Q0tELElBQUk7QUFBSkEsTUFBQUEsSUFBSTtBQTBDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvbWFpbi5qcz9lNWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9uYXZiYXInXHJcbmltcG9ydCB7Qm94LCBDb250YWluZXJ9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInXHJcbmltcG9ydCB7IHVzZUxvYWRlciB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcclxuXHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBjaGFrcmEsIHNob3VsZEZvcndhcmRQcm9wIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmNvbnN0IFN0eWxlZERpdiA9IGNoYWtyYShtb3Rpb24uZGl2LCB7XHJcbiAgICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZEZvcndhcmRQcm9wKHByb3ApIHx8IHByb3AgPT09ICd0cmFuc2l0aW9uJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gTW9kZWwoeyB1cmwgfSkge1xyXG4gICAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCB1cmwpXHJcbiAgICByZXR1cm4gPHByaW1pdGl2ZSBvYmplY3Q9e2dsdGYuc2NlbmV9IGRpc3Bvc2U9e251bGx9IC8+O1xyXG4gIH1cclxuXHJcbmNvbnN0IExpZ2h0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIEFtYmllbnQgTGlnaHQgaWxsdW1pbmF0ZXMgbGlnaHRzIGZvciBhbGwgb2JqZWN0cyAqL31cclxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC4zfSAvPlxyXG4gICAgICAgIHsvKiBEaXJldGlvbiBsaWdodCAqL31cclxuICAgICAgICA8ZGlyZWN0aW9uYWxMaWdodCBwb3NpdGlvbj17WzEwMCwgMTAwLCAxMDBdfSBpbnRlbnNpdHk9ezAuNX0gLz5cclxuICAgICAgICA8ZGlyZWN0aW9uYWxMaWdodFxyXG4gICAgICAgICAgY2FzdFNoYWRvd1xyXG4gICAgICAgICAgcG9zaXRpb249e1swLCAxMCwgMF19XHJcbiAgICAgICAgICBpbnRlbnNpdHk9ezEuNX1cclxuICAgICAgICAgIHNoYWRvdy1tYXBTaXplLXdpZHRoPXsxMDI0fVxyXG4gICAgICAgICAgc2hhZG93LW1hcFNpemUtaGVpZ2h0PXsxMDI0fVxyXG4gICAgICAgICAgc2hhZG93LWNhbWVyYS1mYXI9ezUwfVxyXG4gICAgICAgICAgc2hhZG93LWNhbWVyYS1sZWZ0PXstMTB9XHJcbiAgICAgICAgICBzaGFkb3ctY2FtZXJhLXJpZ2h0PXsxMH1cclxuICAgICAgICAgIHNoYWRvdy1jYW1lcmEtdG9wPXsxMH1cclxuICAgICAgICAgIHNoYWRvdy1jYW1lcmEtYm90dG9tPXstMTB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogU3BvdGxpZ2h0IExhcmdlIG92ZXJoZWFkIGxpZ2h0ICovfVxyXG4gICAgICAgIDxzcG90TGlnaHQgaW50ZW5zaXR5PXsxfSBwb3NpdGlvbj17WzEsIDEsIDFdfSBjYXN0U2hhZG93IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgSFRNTENvbnRlbnQgPSAoe1xyXG4gICAgbW9kZWxQYXRoLFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWVzaCByZWY9e3JlZn0gcG9zaXRpb249e1szLCAtMi41LCAwXX0+XHJcbiAgICAgICAgICAgIDxNb2RlbCB1cmw9e21vZGVsUGF0aH0gLz5cclxuICAgICAgICA8L21lc2g+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5jb25zdCBNYWluID0gKHsgY2hpbGRyZW4sIHJvdXRlciB9KSA9PiB7XHJcbiAgICBjb25zdCBkb21Db250ZW50ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGFzPVwibWFpblwiIHBiPXs4fT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlJhZmEncyBQb3J0Zm9saW88L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8TmF2YmFyIHBhdGggPSB7cm91dGVyLmFzUGF0aH0vPlxyXG5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLm1kXCIgcHQ9ezE0fT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXZcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsID0ge3t5OiAxMCwgb3BhY2l0eTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSA9IHt7eTogMCwgb3BhY2l0eTogMX19XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7ZHVyYXRpb246IDAuOCwgZGVsYXk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1iPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGhlaWdodDogJzQwdmgnLCB3aWR0aDogJzQwdncnLCB0ZXh0QWxpZ246ICdjZW50ZXInfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbnZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTWFuYWdlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmE9e3sgcG9zaXRpb246IFsyMCwgMTAsIDIwXSwgZm92OjIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhUTUxDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Db250ZW50PXtkb21Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj0nI2YxNTk0NidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsUGF0aD0nL01ZU0VUVVAuZ2xiJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSFRNTENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYW52YXM+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iXSwibmFtZXMiOlsiSGVhZCIsIk5hdmJhciIsIkJveCIsIkNvbnRhaW5lciIsIlJlYWN0IiwidXNlUmVmIiwiU3VzcGVuc2UiLCJDYW52YXMiLCJHTFRGTG9hZGVyIiwidXNlTG9hZGVyIiwibW90aW9uIiwiY2hha3JhIiwic2hvdWxkRm9yd2FyZFByb3AiLCJTdHlsZWREaXYiLCJkaXYiLCJwcm9wIiwiTW9kZWwiLCJ1cmwiLCJnbHRmIiwicHJpbWl0aXZlIiwib2JqZWN0Iiwic2NlbmUiLCJkaXNwb3NlIiwiTGlnaHRzIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiZGlyZWN0aW9uYWxMaWdodCIsInBvc2l0aW9uIiwiY2FzdFNoYWRvdyIsInNoYWRvdy1tYXBTaXplLXdpZHRoIiwic2hhZG93LW1hcFNpemUtaGVpZ2h0Iiwic2hhZG93LWNhbWVyYS1mYXIiLCJzaGFkb3ctY2FtZXJhLWxlZnQiLCJzaGFkb3ctY2FtZXJhLXJpZ2h0Iiwic2hhZG93LWNhbWVyYS10b3AiLCJzaGFkb3ctY2FtZXJhLWJvdHRvbSIsInNwb3RMaWdodCIsIkhUTUxDb250ZW50IiwibW9kZWxQYXRoIiwicmVmIiwibWVzaCIsIk1haW4iLCJjaGlsZHJlbiIsInJvdXRlciIsImRvbUNvbnRlbnQiLCJhcyIsInBiIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJwYXRoIiwiYXNQYXRoIiwibWF4VyIsInB0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwibWIiLCJhbGlnbiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJjb25jdXJyZW50IiwiY29sb3JNYW5hZ2VtZW50IiwiY2FtZXJhIiwiZm92IiwiZmFsbGJhY2siLCJiZ0NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/main.js\n"));

/***/ })

});