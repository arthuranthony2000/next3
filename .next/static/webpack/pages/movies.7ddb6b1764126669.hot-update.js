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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var filterMovies = function filterMovies() {};\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), movies = ref[0], setMovies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), filteredMovies = ref1[0], setFilteredMovies = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Digite o nome do filme\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"filme\",\n                style: {\n                    marginBottom: 10\n                }\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    margin: 10\n                },\n                onClick: function() {\n                    return window.location.href = \"/movies?s=\" + document.getElementById(\"filme\").value;\n                },\n                children: \"ACESSAR\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: movies.Search.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 21,\n                        columnNumber: 46\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"fRhjPB5Eur75KqLKNpllDqrrJHA=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUVqQixRQUFRLENBQUNDLE1BQU0sQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFUQyxJQUFJLEdBQU4sS0FBUSxDQUFOQSxJQUFJOztRQUt4QkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRSxDQUFDLENBRXZCOztJQUxELEdBQUssQ0FBdUJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQ0UsSUFBSSxHQUFsQ0UsTUFBTSxHQUFlSixHQUFjLEtBQTNCSyxTQUFTLEdBQUlMLEdBQWM7SUFDMUMsR0FBSyxDQUF1Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDRSxJQUFJLEdBQWxESSxjQUFjLEdBQXVCTixJQUFjLEtBQW5DTyxpQkFBaUIsR0FBSVAsSUFBYztJQU0xRCxNQUFNLDZFQUNEUSxDQUFHOzt3RkFDQ0MsQ0FBRTswQkFBQyxDQUFzQjs7Ozs7O3dGQUN6QkMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLEVBQUUsRUFBQyxDQUFPO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsWUFBWSxFQUFFLEVBQUU7Z0JBQUMsQ0FBQzs7Ozs7O3dGQUV4REMsQ0FBTTtnQkFBQ0YsS0FBSyxFQUFFLENBQUNHO29CQUFBQSxNQUFNLEVBQUUsRUFBRTtnQkFBQSxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsUUFBUTtvQkFBRkMsTUFBTSxDQUFOQSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFDLENBQVksY0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBTyxRQUFFQyxLQUFLOzswQkFBRSxDQUFPOzs7Ozs7d0ZBRTNIZixDQUFHOzBCQUVDSixNQUFNLENBQUNvQixNQUFNLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQztrQ0FBSyxNQUFNLCtEQUFMbkIsQ0FBRzs7NEJBQVVrQixDQUFDLENBQUNFLEtBQUs7NEJBQUMsQ0FBSzs0QkFBQ0YsQ0FBQyxDQUFDRyxJQUFJOzt1QkFBeEJGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhELENBQUM7R0F4QnVCMUIsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHsgZGF0YSB9KSB7XG5cbiAgICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoZGF0YSlcbiAgICBjb25zdCBbZmlsdGVyZWRNb3ZpZXMsIHNldEZpbHRlcmVkTW92aWVzXSA9IHVzZVN0YXRlKGRhdGEpXG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJNb3ZpZXMoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5EaWdpdGUgbyBub21lIGRvIGZpbG1lPC9oND5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlsbWVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3ttYXJnaW46IDEwfX1vbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9tb3ZpZXM/cz1cIitkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbG1lXCIpLnZhbHVlfT5BQ0VTU0FSPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICB7bW92aWVzLlNlYXJjaC5tYXAoKG0sIGkpID0+IDxkaXYga2V5PXtpfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+KX1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmcz0ke2NvbnRleHQucXVlcnkucyAhPSBudWxsID8gY29udGV4dC5xdWVyeS5zIDogXCJiYWdkYWRcIn1gKVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1vdmllcyIsImRhdGEiLCJmaWx0ZXJNb3ZpZXMiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJmaWx0ZXJlZE1vdmllcyIsInNldEZpbHRlcmVkTW92aWVzIiwiZGl2IiwiaDQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwibWFyZ2luIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIlNlYXJjaCIsIm1hcCIsIm0iLCJpIiwiVGl0bGUiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});