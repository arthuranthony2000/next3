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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var filterMoviesByName = function filterMoviesByName(name) {\n        if (name = \"\") {\n            setFilteredMovies(movies);\n        } else {\n            setFilteredMovies(movies.Search.filter(function(m) {\n                m.Title.includes(name);\n            }));\n        }\n    };\n    var filterMoviesByYear = function filterMoviesByYear(year) {};\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), movies = ref[0], setMovies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), filteredMovies = ref1[0], setFilteredMovies = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Digite o nome do filme\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"filme\",\n                style: {\n                    marginBottom: 10\n                }\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    margin: 10\n                },\n                onClick: function() {\n                    return window.location.href = \"/movies?s=\" + document.getElementById(\"filme\").value;\n                },\n                children: \"ACESSAR\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: filteredMovies.Search.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 31,\n                        columnNumber: 54\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"fRhjPB5Eur75KqLKNpllDqrrJHA=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUVqQixRQUFRLENBQUNDLE1BQU0sQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFUQyxJQUFJLEdBQU4sS0FBUSxDQUFOQSxJQUFJOztRQUt4QkMsa0JBQWtCLEdBQTNCLFFBQVEsQ0FBQ0Esa0JBQWtCLENBQUNDLElBQUksRUFBRSxDQUFDO1FBQy9CLEVBQUUsRUFBRUEsSUFBSSxHQUFHLENBQUUsR0FBRSxDQUFDO1lBQ1pDLGlCQUFpQixDQUFDQyxNQUFNO1FBQzVCLENBQUMsTUFBTSxDQUFDO1lBQ0pELGlCQUFpQixDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7Z0JBQzNDQSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUCxJQUFJO1lBQ3pCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztRQUVRUSxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FFbEM7O0lBZkQsR0FBSyxDQUF1QmIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDRSxJQUFJLEdBQWxDSSxNQUFNLEdBQWVOLEdBQWMsS0FBM0JjLFNBQVMsR0FBSWQsR0FBYztJQUMxQyxHQUFLLENBQXVDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUNFLElBQUksR0FBbERhLGNBQWMsR0FBdUJmLElBQWMsS0FBbkNLLGlCQUFpQixHQUFJTCxJQUFjO0lBZ0IxRCxNQUFNLDZFQUNEZ0IsQ0FBRzs7d0ZBQ0NDLENBQUU7MEJBQUMsQ0FBc0I7Ozs7Ozt3RkFDekJDLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBTztnQkFBQ0MsS0FBSyxFQUFFLENBQUM7b0JBQUNDLFlBQVksRUFBRSxFQUFFO2dCQUFDLENBQUM7Ozs7Ozt3RkFFeERDLENBQU07Z0JBQUNGLEtBQUssRUFBRSxDQUFDO29CQUFDRyxNQUFNLEVBQUUsRUFBRTtnQkFBQyxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsUUFBUTtvQkFBRkMsTUFBTSxDQUFOQSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQVksY0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBTyxRQUFFQyxLQUFLOzswQkFBRSxDQUFPOzs7Ozs7d0ZBRWxJZixDQUFHOzBCQUVDRCxjQUFjLENBQUNSLE1BQU0sQ0FBQ3lCLEdBQUcsQ0FBQyxRQUFRLENBQVB2QixDQUFDLEVBQUV3QixDQUFDO2tDQUFLLE1BQU0sK0RBQUxqQixDQUFHOzs0QkFBVVAsQ0FBQyxDQUFDQyxLQUFLOzRCQUFDLENBQUs7NEJBQUNELENBQUMsQ0FBQ3lCLElBQUk7O3VCQUF4QkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEUsQ0FBQztHQWxDdUJoQyxNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoeyBkYXRhIH0pIHtcblxuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShkYXRhKVxuICAgIGNvbnN0IFtmaWx0ZXJlZE1vdmllcywgc2V0RmlsdGVyZWRNb3ZpZXNdID0gdXNlU3RhdGUoZGF0YSlcblxuICAgIGZ1bmN0aW9uIGZpbHRlck1vdmllc0J5TmFtZShuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID0gXCJcIikge1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRNb3ZpZXMobW92aWVzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRNb3ZpZXMobW92aWVzLlNlYXJjaC5maWx0ZXIoKG0pID0+IHtcbiAgICAgICAgICAgICAgICBtLlRpdGxlLmluY2x1ZGVzKG5hbWUpXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlck1vdmllc0J5WWVhcih5ZWFyKSB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkRpZ2l0ZSBvIG5vbWUgZG8gZmlsbWU8L2g0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaWxtZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IDEwIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbW92aWVzP3M9XCIgKyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbG1lXCIpLnZhbHVlfT5BQ0VTU0FSPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRNb3ZpZXMuU2VhcmNoLm1hcCgobSwgaSkgPT4gPGRpdiBrZXk9e2l9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4pfVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPSR7Y29udGV4dC5xdWVyeS5zICE9IG51bGwgPyBjb250ZXh0LnF1ZXJ5LnMgOiBcImJhZ2RhZFwifWApXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTW92aWVzIiwiZGF0YSIsImZpbHRlck1vdmllc0J5TmFtZSIsIm5hbWUiLCJzZXRGaWx0ZXJlZE1vdmllcyIsIm1vdmllcyIsIlNlYXJjaCIsImZpbHRlciIsIm0iLCJUaXRsZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzQnlZZWFyIiwieWVhciIsInNldE1vdmllcyIsImZpbHRlcmVkTW92aWVzIiwiZGl2IiwiaDQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwibWFyZ2luIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm1hcCIsImkiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});