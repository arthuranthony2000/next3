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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var filterMoviesByName = function filterMoviesByName(name) {\n        if (name = \"\") {\n            setFilteredMovies(movies);\n        } else {\n            setFilteredMovies(movies.Search.filter(function(m) {\n                m.Title.includes(name);\n            }));\n        }\n    };\n    var filterMoviesByYear = function filterMoviesByYear(year) {};\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), movies = ref[0], setMovies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), filteredMovies = ref1[0], setFilteredMovies = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Digite o nome do filme\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"filme\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: function() {\n                            return window.location.href = \"/movies?s=\" + document.getElementById(\"filme\").value;\n                        },\n                        children: \"ACESSAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filtre pelo nome\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: function() {\n                            return filterMoviesByName(document.getElementById(\"name\").value);\n                        },\n                        children: \"ACESSAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: filteredMovies.Search.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 42,\n                        columnNumber: 54\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"fRhjPB5Eur75KqLKNpllDqrrJHA=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUVqQixRQUFRLENBQUNDLE1BQU0sQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFUQyxJQUFJLEdBQU4sS0FBUSxDQUFOQSxJQUFJOztRQUt4QkMsa0JBQWtCLEdBQTNCLFFBQVEsQ0FBQ0Esa0JBQWtCLENBQUNDLElBQUksRUFBRSxDQUFDO1FBQy9CLEVBQUUsRUFBRUEsSUFBSSxHQUFHLENBQUUsR0FBRSxDQUFDO1lBQ1pDLGlCQUFpQixDQUFDQyxNQUFNO1FBQzVCLENBQUMsTUFBTSxDQUFDO1lBQ0pELGlCQUFpQixDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7Z0JBQzNDQSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUCxJQUFJO1lBQ3pCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztRQUVRUSxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FFbEM7O0lBZkQsR0FBSyxDQUF1QmIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDRSxJQUFJLEdBQWxDSSxNQUFNLEdBQWVOLEdBQWMsS0FBM0JjLFNBQVMsR0FBSWQsR0FBYztJQUMxQyxHQUFLLENBQXVDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUNFLElBQUksR0FBbERhLGNBQWMsR0FBdUJmLElBQWMsS0FBbkNLLGlCQUFpQixHQUFJTCxJQUFjO0lBZ0IxRCxNQUFNLDZFQUNEZ0IsQ0FBRzs7d0ZBRUNBLENBQUc7O2dHQUNDQyxDQUFFO2tDQUFDLENBQXNCOzs7Ozs7Z0dBQ3pCQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsRUFBRSxFQUFDLENBQU87d0JBQUNDLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxZQUFZLEVBQUUsRUFBRTt3QkFBQyxDQUFDOzs7Ozs7Z0dBRXhEQyxDQUFNO3dCQUFDRixLQUFLLEVBQUUsQ0FBQzs0QkFBQ0csTUFBTSxFQUFFLEVBQUU7d0JBQUMsQ0FBQzt3QkFBRUMsT0FBTyxFQUFFLFFBQVE7NEJBQUZDLE1BQU0sQ0FBTkEsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFZLGNBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU8sUUFBRUMsS0FBSzs7a0NBQUUsQ0FBTzs7Ozs7Ozs7Ozs7O3dGQUd0SWYsQ0FBRztnQkFBQ0ssS0FBSyxFQUFFLENBQUNDO29CQUFBQSxZQUFZLEVBQUUsRUFBRTtnQkFBQSxDQUFDOztnR0FDekJMLENBQUU7a0NBQUMsQ0FBZ0I7Ozs7OztnR0FFbkJDLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxFQUFFLEVBQUMsQ0FBTTt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLFlBQVksRUFBRSxFQUFFO3dCQUFDLENBQUM7Ozs7OztnR0FFdkRDLENBQU07d0JBQUNGLEtBQUssRUFBRSxDQUFDOzRCQUFDRyxNQUFNLEVBQUUsRUFBRTt3QkFBQyxDQUFDO3dCQUFFQyxPQUFPLEVBQUUsUUFBUTs0QkFBRnRCLE1BQU0sQ0FBTkEsa0JBQWtCLENBQUMwQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFNLE9BQUVDLEtBQUs7O2tDQUFHLENBQU87Ozs7Ozs7Ozs7Ozt3RkFHbkhmLENBQUc7MEJBRUNELGNBQWMsQ0FBQ1IsTUFBTSxDQUFDeUIsR0FBRyxDQUFDLFFBQVEsQ0FBUHZCLENBQUMsRUFBRXdCLENBQUM7a0NBQUssTUFBTSwrREFBTGpCLENBQUc7OzRCQUFVUCxDQUFDLENBQUNDLEtBQUs7NEJBQUMsQ0FBSzs0QkFBQ0QsQ0FBQyxDQUFDeUIsSUFBSTs7dUJBQXhCRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1oRSxDQUFDO0dBN0N1QmhDLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7IGRhdGEgfSkge1xuXG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKGRhdGEpXG4gICAgY29uc3QgW2ZpbHRlcmVkTW92aWVzLCBzZXRGaWx0ZXJlZE1vdmllc10gPSB1c2VTdGF0ZShkYXRhKVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyTW92aWVzQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPSBcIlwiKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZE1vdmllcyhtb3ZpZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZE1vdmllcyhtb3ZpZXMuU2VhcmNoLmZpbHRlcigobSkgPT4ge1xuICAgICAgICAgICAgICAgIG0uVGl0bGUuaW5jbHVkZXMobmFtZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyTW92aWVzQnlZZWFyKHllYXIpIHtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg0PkRpZ2l0ZSBvIG5vbWUgZG8gZmlsbWU8L2g0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlsbWVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0gb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9tb3ZpZXM/cz1cIiArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsbWVcIikudmFsdWV9PkFDRVNTQVI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgICAgIDxoND5GaWx0cmUgcGVsbyBub21lPC9oND5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiAxMCB9fSBvbkNsaWNrPXsoKSA9PiBmaWx0ZXJNb3ZpZXNCeU5hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlKX0+QUNFU1NBUjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRNb3ZpZXMuU2VhcmNoLm1hcCgobSwgaSkgPT4gPGRpdiBrZXk9e2l9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4pfVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPSR7Y29udGV4dC5xdWVyeS5zICE9IG51bGwgPyBjb250ZXh0LnF1ZXJ5LnMgOiBcImJhZ2RhZFwifWApXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTW92aWVzIiwiZGF0YSIsImZpbHRlck1vdmllc0J5TmFtZSIsIm5hbWUiLCJzZXRGaWx0ZXJlZE1vdmllcyIsIm1vdmllcyIsIlNlYXJjaCIsImZpbHRlciIsIm0iLCJUaXRsZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzQnlZZWFyIiwieWVhciIsInNldE1vdmllcyIsImZpbHRlcmVkTW92aWVzIiwiZGl2IiwiaDQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwibWFyZ2luIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm1hcCIsImkiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});