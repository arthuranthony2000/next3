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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    var filterMoviesByName = function filterMoviesByName(name) {\n        if (name = \"\") {\n            setFilteredMovies(movies);\n        } else {\n            setFilteredMovies(movies.Search.filter(function(m) {\n                m.Title.includes(name);\n            }));\n        }\n    };\n    var filterMoviesByYear = function filterMoviesByYear(year) {};\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), movies = ref[0], setMovies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), filteredMovies = ref1[0], setFilteredMovies = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Digite o nome do filme\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"filme\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: function() {\n                            return window.location.href = \"/movies?s=\" + document.getElementById(\"filme\").value;\n                        },\n                        children: \"ACESSAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"name\",\n                style: {\n                    marginBottom: 10\n                }\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    margin: 10\n                },\n                onClick: function() {\n                    return filterMoviesByName(document.getElementById(\"name\").value);\n                },\n                children: \"ACESSAR\"\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: filteredMovies.Search.map(function(m, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                        lineNumber: 39,\n                        columnNumber: 54\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"fRhjPB5Eur75KqLKNpllDqrrJHA=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUVqQixRQUFRLENBQUNDLE1BQU0sQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFUQyxJQUFJLEdBQU4sS0FBUSxDQUFOQSxJQUFJOztRQUt4QkMsa0JBQWtCLEdBQTNCLFFBQVEsQ0FBQ0Esa0JBQWtCLENBQUNDLElBQUksRUFBRSxDQUFDO1FBQy9CLEVBQUUsRUFBRUEsSUFBSSxHQUFHLENBQUUsR0FBRSxDQUFDO1lBQ1pDLGlCQUFpQixDQUFDQyxNQUFNO1FBQzVCLENBQUMsTUFBTSxDQUFDO1lBQ0pELGlCQUFpQixDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7Z0JBQzNDQSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUCxJQUFJO1lBQ3pCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztRQUVRUSxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FFbEM7O0lBZkQsR0FBSyxDQUF1QmIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDRSxJQUFJLEdBQWxDSSxNQUFNLEdBQWVOLEdBQWMsS0FBM0JjLFNBQVMsR0FBSWQsR0FBYztJQUMxQyxHQUFLLENBQXVDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUNFLElBQUksR0FBbERhLGNBQWMsR0FBdUJmLElBQWMsS0FBbkNLLGlCQUFpQixHQUFJTCxJQUFjO0lBZ0IxRCxNQUFNLDZFQUNEZ0IsQ0FBRzs7d0ZBRUNBLENBQUc7O2dHQUNDQyxDQUFFO2tDQUFDLENBQXNCOzs7Ozs7Z0dBQ3pCQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsRUFBRSxFQUFDLENBQU87d0JBQUNDLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxZQUFZLEVBQUUsRUFBRTt3QkFBQyxDQUFDOzs7Ozs7Z0dBRXhEQyxDQUFNO3dCQUFDRixLQUFLLEVBQUUsQ0FBQzs0QkFBQ0csTUFBTSxFQUFFLEVBQUU7d0JBQUMsQ0FBQzt3QkFBRUMsT0FBTyxFQUFFLFFBQVE7NEJBQUZDLE1BQU0sQ0FBTkEsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFZLGNBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU8sUUFBRUMsS0FBSzs7a0NBQUUsQ0FBTzs7Ozs7Ozs7Ozs7O3dGQUd0SWIsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLEVBQUUsRUFBQyxDQUFNO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsWUFBWSxFQUFFLEVBQUU7Z0JBQUMsQ0FBQzs7Ozs7O3dGQUV2REMsQ0FBTTtnQkFBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQUNHLE1BQU0sRUFBRSxFQUFFO2dCQUFDLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxRQUFRO29CQUFGdEIsTUFBTSxDQUFOQSxrQkFBa0IsQ0FBQzBCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU0sT0FBRUMsS0FBSzs7MEJBQUcsQ0FBTzs7Ozs7O3dGQUcvR2YsQ0FBRzswQkFFQ0QsY0FBYyxDQUFDUixNQUFNLENBQUN5QixHQUFHLENBQUMsUUFBUSxDQUFQdkIsQ0FBQyxFQUFFd0IsQ0FBQztrQ0FBSyxNQUFNLCtEQUFMakIsQ0FBRzs7NEJBQVVQLENBQUMsQ0FBQ0MsS0FBSzs0QkFBQyxDQUFLOzRCQUFDRCxDQUFDLENBQUN5QixJQUFJOzt1QkFBeEJELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhFLENBQUM7R0ExQ3VCaEMsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHsgZGF0YSB9KSB7XG5cbiAgICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoZGF0YSlcbiAgICBjb25zdCBbZmlsdGVyZWRNb3ZpZXMsIHNldEZpbHRlcmVkTW92aWVzXSA9IHVzZVN0YXRlKGRhdGEpXG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJNb3ZpZXNCeU5hbWUobmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9IFwiXCIpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkTW92aWVzKG1vdmllcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkTW92aWVzKG1vdmllcy5TZWFyY2guZmlsdGVyKChtKSA9PiB7XG4gICAgICAgICAgICAgICAgbS5UaXRsZS5pbmNsdWRlcyhuYW1lKVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJNb3ZpZXNCeVllYXIoeWVhcikge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQ+RGlnaXRlIG8gbm9tZSBkbyBmaWxtZTwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaWxtZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiAxMCB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL21vdmllcz9zPVwiICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxtZVwiKS52YWx1ZX0+QUNFU1NBUjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IDEwIH19IG9uQ2xpY2s9eygpID0+IGZpbHRlck1vdmllc0J5TmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWUpfT5BQ0VTU0FSPC9idXR0b24+XG5cblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZE1vdmllcy5TZWFyY2gubWFwKChtLCBpKSA9PiA8ZGl2IGtleT17aX0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2Pil9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJnM9JHtjb250ZXh0LnF1ZXJ5LnMgIT0gbnVsbCA/IGNvbnRleHQucXVlcnkucyA6IFwiYmFnZGFkXCJ9YClcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNb3ZpZXMiLCJkYXRhIiwiZmlsdGVyTW92aWVzQnlOYW1lIiwibmFtZSIsInNldEZpbHRlcmVkTW92aWVzIiwibW92aWVzIiwiU2VhcmNoIiwiZmlsdGVyIiwibSIsIlRpdGxlIiwiaW5jbHVkZXMiLCJmaWx0ZXJNb3ZpZXNCeVllYXIiLCJ5ZWFyIiwic2V0TW92aWVzIiwiZmlsdGVyZWRNb3ZpZXMiLCJkaXYiLCJoNCIsImlucHV0IiwidHlwZSIsImlkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJtYXJnaW4iLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibWFwIiwiaSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});