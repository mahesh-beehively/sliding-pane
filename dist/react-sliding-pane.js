(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-modal"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSlidingPane", ["react", "prop-types", "react-modal"], factory);
	else if(typeof exports === 'object')
		exports["ReactSlidingPane"] = factory(require("react"), require("prop-types"), require("react-modal"));
	else
		root["ReactSlidingPane"] = factory(root["React"], root[undefined], root["ReactModal"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = ReactSlidingPane;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_styl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_styl__);






var CLOSE_TIMEOUT = 500;

__WEBPACK_IMPORTED_MODULE_2_react_modal___default.a.setAppElement('body');

function ReactSlidingPane(_ref) {
    var isOpen = _ref.isOpen,
        title = _ref.title,
        subtitle = _ref.subtitle,
        onRequestClose = _ref.onRequestClose,
        _ref$closeOnDocument = _ref.closeOnDocument,
        closeOnDocument = _ref$closeOnDocument === undefined ? false : _ref$closeOnDocument,
        onAfterOpen = _ref.onAfterOpen,
        children = _ref.children,
        className = _ref.className,
        overlayClassName = _ref.overlayClassName,
        _ref$from = _ref.from,
        from = _ref$from === undefined ? 'right' : _ref$from,
        width = _ref.width;

    var directionClass = 'slide-pane_from_' + from;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_modal___default.a,
        {
            ariaHideApp: false,
            className: 'slide-pane ' + directionClass + ' ' + (className || ''),
            style: {
                content: { width: width || '80%' }
            },
            overlayClassName: 'slide-pane__overlay ' + (overlayClassName || ''),
            closeTimeoutMS: CLOSE_TIMEOUT,
            isOpen: isOpen,
            onAfterOpen: onAfterOpen,
            onRequestClose: closeOnDocument ? onRequestClose : function () {},
            contentLabel: 'Modal "' + (title || '') + '"' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'slide-pane__header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'slide-pane__close', onClick: onRequestClose },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'svg',
                    { viewBox: '0 0 13 22', version: '1.1',
                        xmlns: 'http://www.w3.org/2000/svg' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('line', { x1: '1', y1: '11',
                        x2: '11', y2: '1',
                        stroke: 'black',
                        strokeWidth: '2' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('line', { x1: '1', y1: '1',
                        x2: '11', y2: '11',
                        stroke: 'black',
                        strokeWidth: '2' })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'slide-pane__title-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: 'slide-pane__title' },
                    title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'slide-pane__subtitle' },
                    subtitle
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'slide-pane__content' },
            children
        )
    );
}

ReactSlidingPane.propTypes = {
    isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    closeOnDocument: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
    subtitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
    onRequestClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    onAfterOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    overlayClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['left', 'right']),
    width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});