"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies",{

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var url = \"/movies&s=naruto\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"filme\",\n                style: {\n                    marginBottom: 20\n                }\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: url,\n                style: {\n                    marginLeft: 25\n                },\n                children: \"ACESSAR\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 13,\n                        columnNumber: 44\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this));\n};\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsTUFBTSxDQUFDLEtBQVEsRUFBRSxDQUFDO1FBQVRDLElBQUksR0FBTixLQUFRLENBQU5BLElBQUk7O0lBRWpDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQWtCO0lBRTlCLE1BQU0sNkVBQ0RDLENBQUc7O3dGQUNDQyxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsRUFBRSxFQUFDLENBQU87Z0JBQUNDLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsWUFBWSxFQUFFLEVBQUU7Z0JBQUMsQ0FBQzs7Ozs7O3dGQUV2REMsQ0FBQztnQkFBQ0MsSUFBSSxFQUFFUixHQUFHO2dCQUFFSyxLQUFLLEVBQUUsQ0FBQ0k7b0JBQUFBLFVBQVUsRUFBRSxFQUFFO2dCQUFBLENBQUM7MEJBQUUsQ0FBTzs7Ozs7O3dGQUU3Q1IsQ0FBRzswQkFFQ0YsSUFBSSxDQUFDVyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQztrQ0FBSyxNQUFNLCtEQUFMWixDQUFHOzs0QkFBVVcsQ0FBQyxDQUFDRSxLQUFLOzRCQUFDLENBQUs7NEJBQUNGLENBQUMsQ0FBQ0csSUFBSTs7dUJBQXhCRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU10RCxDQUFDO0tBbEJ1QmYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoeyBkYXRhIH0pIHtcblxuICAgIGNvbnN0IHVybCA9IFwiL21vdmllcyZzPW5hcnV0b1wiXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaWxtZVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMCB9fT48L2lucHV0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9IHN0eWxlPXt7bWFyZ2luTGVmdDogMjV9fT5BQ0VTU0FSPC9hPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSwgaSkgPT4gPGRpdiBrZXk9e2l9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4pfVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPSR7Y29udGV4dC5xdWVyeS5zICE9IG51bGwgPyBjb250ZXh0LnF1ZXJ5LnMgOiBcImJhZ2RhZFwifWApXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIk1vdmllcyIsImRhdGEiLCJ1cmwiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJpZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYSIsImhyZWYiLCJtYXJnaW5MZWZ0IiwiU2VhcmNoIiwibWFwIiwibSIsImkiLCJUaXRsZSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});