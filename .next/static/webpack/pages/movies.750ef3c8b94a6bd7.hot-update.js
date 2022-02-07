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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var filterMoviesByName = function filterMoviesByName(name) {\n        if (name === \"\") {\n            setFilteredMovies(movies);\n        } else {\n            var listOfMoviesFiltered = movies.filter(function(m) {\n                return m.Title.toLowerCase().includes(name.toLowerCase());\n            });\n            setFilteredMovies(listOfMoviesFiltered);\n        }\n    };\n    var filterMoviesByYear = function filterMoviesByYear(year) {\n        if (year === \"\") {\n            setFilteredMovies(movies);\n        } else {\n            var listOfMoviesFiltered = movies.filter(function(m) {\n                return m.Year === year;\n            });\n            setFilteredMovies(listOfMoviesFiltered);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.Search), movies = ref[0], setMovies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.Search), filteredMovies = ref1[0], setFilteredMovies = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 30\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Digite o nome do filme\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"filme\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: function() {\n                            return window.location.href = \"/movies?s=\" + document.getElementById(\"filme\").value;\n                        },\n                        children: \"ACESSAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 30\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filtre pelo nome\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: function() {\n                            return filterMoviesByName(document.getElementById(\"name\").value);\n                        },\n                        children: \"Filtrar\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 30\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filtre pelo ano\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: function() {\n                            return filterMoviesByName(document.getElementById(\"year\").value);\n                        },\n                        children: \"Filtrar\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: filteredMovies.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 57,\n                        columnNumber: 47\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"RDdXJ+qpcA7V0eHs/UVSBY6DoNE=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM2QixRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFNLE9BQUVDLEtBQUs7O2tDQUFHLENBQU87Ozs7Ozs7Ozs7Ozt3RkFHbkhmLENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxZQUFZLEVBQUUsRUFBRTtnQkFBQyxDQUFDOztnR0FDM0JDLENBQUU7a0NBQUMsQ0FBZTs7Ozs7O2dHQUVsQkMsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQU07d0JBQUNDLEVBQUUsRUFBQyxDQUFNO3dCQUFDTCxLQUFLLEVBQUUsQ0FBQzs0QkFBQ0MsWUFBWSxFQUFFLEVBQUU7d0JBQUMsQ0FBQzs7Ozs7O2dHQUV2REssQ0FBTTt3QkFBQ04sS0FBSyxFQUFFLENBQUM7NEJBQUNPLE1BQU0sRUFBRSxFQUFFO3dCQUFDLENBQUM7d0JBQUVDLE9BQU8sRUFBRSxRQUFROzRCQUFGekIsTUFBTSxDQUFOQSxrQkFBa0IsQ0FBQzZCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU0sT0FBRUMsS0FBSzs7a0NBQUcsQ0FBTzs7Ozs7Ozs7Ozs7O3dGQUduSGYsQ0FBRzswQkFFQ0QsY0FBYyxDQUFDaUIsR0FBRyxDQUFDLFFBQVEsQ0FBUDFCLENBQUMsRUFBRTJCLENBQUM7a0NBQUssTUFBTSwrREFBTGpCLENBQUc7OzRCQUFVVixDQUFDLENBQUNDLEtBQUs7NEJBQUMsQ0FBSzs0QkFBQ0QsQ0FBQyxDQUFDTSxJQUFJOzt1QkFBeEJxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU16RCxDQUFDO0dBNUR1Qm5DLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7IGRhdGEgfSkge1xuXG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKGRhdGEuU2VhcmNoKVxuICAgIGNvbnN0IFtmaWx0ZXJlZE1vdmllcywgc2V0RmlsdGVyZWRNb3ZpZXNdID0gdXNlU3RhdGUoZGF0YS5TZWFyY2gpXG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJNb3ZpZXNCeU5hbWUobmFtZSkge1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZE1vdmllcyhtb3ZpZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGlzdE9mTW92aWVzRmlsdGVyZWQgPSBtb3ZpZXMuZmlsdGVyKChtKSA9PiBtLlRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkTW92aWVzKGxpc3RPZk1vdmllc0ZpbHRlcmVkKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJNb3ZpZXNCeVllYXIoeWVhcikge1xuICAgICAgICBpZiAoeWVhciA9PT0gXCJcIikge1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRNb3ZpZXMobW92aWVzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxpc3RPZk1vdmllc0ZpbHRlcmVkID0gbW92aWVzLmZpbHRlcigobSkgPT4gbS5ZZWFyID09PSB5ZWFyKVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRNb3ZpZXMobGlzdE9mTW92aWVzRmlsdGVyZWQpXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICA8aDQ+RGlnaXRlIG8gbm9tZSBkbyBmaWxtZTwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaWxtZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiAxMCB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL21vdmllcz9zPVwiICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxtZVwiKS52YWx1ZX0+QUNFU1NBUjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICA8aDQ+RmlsdHJlIHBlbG8gbm9tZTwvaDQ+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0gb25DbGljaz17KCkgPT4gZmlsdGVyTW92aWVzQnlOYW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZSl9PkZpbHRyYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgPGg0PkZpbHRyZSBwZWxvIGFubzwvaDQ+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0gb25DbGljaz17KCkgPT4gZmlsdGVyTW92aWVzQnlOYW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhclwiKS52YWx1ZSl9PkZpbHRyYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkTW92aWVzLm1hcCgobSwgaSkgPT4gPGRpdiBrZXk9e2l9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4pfVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPSR7Y29udGV4dC5xdWVyeS5zICE9IG51bGwgPyBjb250ZXh0LnF1ZXJ5LnMgOiBcImJhZ2RhZFwifWApXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTW92aWVzIiwiZGF0YSIsImZpbHRlck1vdmllc0J5TmFtZSIsIm5hbWUiLCJzZXRGaWx0ZXJlZE1vdmllcyIsIm1vdmllcyIsImxpc3RPZk1vdmllc0ZpbHRlcmVkIiwiZmlsdGVyIiwibSIsIlRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImZpbHRlck1vdmllc0J5WWVhciIsInllYXIiLCJZZWFyIiwiU2VhcmNoIiwic2V0TW92aWVzIiwiZmlsdGVyZWRNb3ZpZXMiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImg0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJidXR0b24iLCJtYXJnaW4iLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});