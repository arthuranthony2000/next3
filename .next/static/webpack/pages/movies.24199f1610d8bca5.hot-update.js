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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var url = \"/movies\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"filme\",\n                style: {\n                    marginBottom: 20\n                }\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: url,\n                style: {\n                    marginLeft: 10\n                },\n                children: \"acessar\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 13,\n                        columnNumber: 44\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this));\n};\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsTUFBTSxDQUFDLEtBQVEsRUFBRSxDQUFDO1FBQVRDLElBQUksR0FBTixLQUFRLENBQU5BLElBQUk7O0lBRWpDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQVM7SUFFckIsTUFBTSw2RUFDREMsQ0FBRzs7d0ZBQ0NDLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBTztnQkFBQ0MsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxZQUFZLEVBQUUsRUFBRTtnQkFBQyxDQUFDOzs7Ozs7d0ZBRXZEQyxDQUFDO2dCQUFDQyxJQUFJLEVBQUVSLEdBQUc7Z0JBQUVLLEtBQUssRUFBRSxDQUFDSTtvQkFBQUEsVUFBVSxFQUFFLEVBQUU7Z0JBQUEsQ0FBQzswQkFBRSxDQUFPOzs7Ozs7d0ZBRTdDUixDQUFHOzBCQUVDRixJQUFJLENBQUNXLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDO2tDQUFLLE1BQU0sK0RBQUxaLENBQUc7OzRCQUFVVyxDQUFDLENBQUNFLEtBQUs7NEJBQUMsQ0FBSzs0QkFBQ0YsQ0FBQyxDQUFDRyxJQUFJOzt1QkFBeEJGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRELENBQUM7S0FsQnVCZixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7IGRhdGEgfSkge1xuXG4gICAgY29uc3QgdXJsID0gXCIvbW92aWVzXCJcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpbG1lXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwIH19PjwvaW5wdXQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAxMH19PmFjZXNzYXI8L2E+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKChtLCBpKSA9PiA8ZGl2IGtleT17aX0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2Pil9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJnM9JHtjb250ZXh0LnF1ZXJ5LnMgIT0gbnVsbCA/IGNvbnRleHQucXVlcnkucyA6IFwiYmFnZGFkXCJ9YClcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXSwibmFtZXMiOlsiTW92aWVzIiwiZGF0YSIsInVybCIsImRpdiIsImlucHV0IiwidHlwZSIsImlkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJhIiwiaHJlZiIsIm1hcmdpbkxlZnQiLCJTZWFyY2giLCJtYXAiLCJtIiwiaSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});