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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// export default function Movies({ data }) {\n// fetcher(\"http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad\");\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar url = \"http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad\";\nfunction Movies() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad\", fetcher), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: data.Search.map(function(m) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                lineNumber: 21,\n                columnNumber: 37\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this));\n};\n_s(Movies, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movies;\nfunction fetcher(url1) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = _asyncToGenerator(_home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url1) {\n        var res, json;\n        return _home_arthur_Documents_2021_2_PROGRAMA_O_WEB_3_unidade_next3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url1);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    } // export async function getServerSideProps(context) {\n     //     const res = await fetch(`http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad`)\n     //     const data = await res.json()\n     //     return {\n     //         props: {\n     //             data\n     //         }\n     //     }\n     // }\n    ));\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsRUFBNkM7QUFDN0MsRUFBOEQ7QUFHdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsR0FBSyxDQUFDQyxHQUFHLEdBQUksQ0FBK0M7QUFFN0MsUUFBUSxDQUFDQyxNQUFNLEdBQUcsQ0FBQzs7O0lBRTlCLEdBQUssQ0FBbUJGLEdBQWtFLEdBQWxFQSwrQ0FBTSxDQUFFLENBQStDLGtEQUFHRyxPQUFPLEdBQWpGQyxJQUFJLEdBQVlKLEdBQWtFLENBQWxGSSxJQUFJLEVBQUVDLEtBQUssR0FBS0wsR0FBa0UsQ0FBNUVLLEtBQUs7SUFFbkIsRUFBRSxFQUFFQSxLQUFLLEVBQUUsTUFBTSw2RUFBRUMsQ0FBRztrQkFBQyxDQUFzQjs7Ozs7O0lBRTdDLEVBQUUsR0FBR0YsSUFBSSxFQUFFLE1BQU0sNkVBQUVFLENBQUc7a0JBQUMsQ0FBYTs7Ozs7O0lBRXBDLE1BQU0sNkVBRURBLENBQUc7a0JBRUNGLElBQUksQ0FBQ0csTUFBTSxDQUFDQyxHQUFHLENBQUMsUUFBUUYsQ0FBUEcsQ0FBQzswQkFBSyxNQUFNQSxDQUFBQSw2REFBQUEsQ0FBTEgsQ0FBRzs7b0JBQUVHLENBQUMsQ0FBQ0MsS0FBSztvQkFBQyxDQUFLO29CQUFDRCxDQUFDLENBQUNFLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFLOUQsQ0FBQztHQWpCdUJULE1BQU07O1FBRUZGLDJDQUFNOzs7S0FGVkUsTUFBTTtTQW1CZkMsT0FBTyxDQUFDRixJQUFHO1dBQVhFLFFBQU87O1NBQVBBLFFBQU87SUFBUEEsUUFBTyw2TEFBdEIsUUFBUSxTQUFlRixJQUFHLEVBQUUsQ0FBQztZQUNuQlcsR0FBRyxFQUVIQyxJQUFJOzs7OzsyQkFGUUMsS0FBSyxDQUFDYixJQUFHOztvQkFBckJXLEdBQUc7OzJCQUVVQSxHQUFHLENBQUNDLElBQUk7O29CQUFyQkEsSUFBSTtpREFFSEEsSUFBSTs7Ozs7O0lBQ2YsQ0FBQyxDQUtxRDtJQUV0RCxDQUFpRjtJQUVqRixDQUFvQztJQUVwQyxDQUFlO0lBQ2YsQ0FBbUI7SUFDbkIsQ0FBbUI7SUFDbkIsQ0FBWTtJQUNaLENBQVE7SUFDUixDQUFJOztXQXRCV1YsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoeyBkYXRhIH0pIHtcbi8vIGZldGNoZXIoXCJodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPWJhZ2RhZFwiKTtcblxuXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgdXJsID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJnM9YmFnZGFkYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCkge1xuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPWJhZ2RhZGAsIGZldGNoZXIpXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2Pil9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIGpzb247XG59XG5cblxuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJnM9YmFnZGFkYClcblxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczoge1xuLy8gICAgICAgICAgICAgZGF0YVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXJsIiwiTW92aWVzIiwiZmV0Y2hlciIsImRhdGEiLCJlcnJvciIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJyZXMiLCJqc29uIiwiZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});