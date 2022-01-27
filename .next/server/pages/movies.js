"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getServerSideProps(context) {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=6d17a1f&s=bagdad`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nfunction Movies({ data  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        m.Title,\n                        \" --- \",\n                        m.Year\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n                    lineNumber: 20,\n                    columnNumber: 38\n                }, this)\n            )\n        }, void 0, false, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next3/pages/movies.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxlQUFlQSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7SUFFL0MsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLEVBQUUsK0NBQStDO0lBRXhFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJO0lBRTNCLE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLEtBQUssRUFBRSxDQUFDO1lBQ0pGLElBQUk7UUFDUixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFYyxRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDSCxDQUFBQSxJQUFJLEdBQUMsRUFBQyxDQUFDO0lBQ25DLE1BQU0sNkVBQ0RJLENBQUc7OEZBRUNBLENBQUc7c0JBRUhKLElBQUksQ0FBQ0ssTUFBTSxDQUFDQyxHQUFHLEVBQUdDLENBQUMsK0VBQU1ILENBQUc7O3dCQUFFRyxDQUFDLENBQUNDLEtBQUs7d0JBQUMsQ0FBSzt3QkFBQ0QsQ0FBQyxDQUFDRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmcz1iYWdkYWRgKVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7ZGF0YX0pe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICl9ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsIk1vdmllcyIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();