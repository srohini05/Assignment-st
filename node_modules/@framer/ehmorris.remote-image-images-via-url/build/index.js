(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Remote Image.tsx": "./code/Remote Image.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Remote Image.tsx":
/*!*******************************!*\
  !*** ./code/Remote Image.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass RemoteImage extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        return (React.createElement(\"img\", { width: this.props.width, height: this.props.height, src: this.props.url, style: {\n                objectFit: this.props.fillMode,\n            } }));\n    }\n}\nRemoteImage.defaultProps = {\n    height: 300,\n    width: 300,\n    url: 'https://placehold.it/300x300',\n    fillMode: 'fill',\n};\nRemoteImage.propertyControls = {\n    url: { type: framer_1.ControlType.String, title: 'URL' },\n    fillMode: {\n        type: framer_1.ControlType.Enum,\n        title: 'Fill Mode',\n        options: [\n            'fill',\n            'contain',\n            'cover',\n            'none',\n            'scale-down',\n        ],\n        optionTitles: [\n            'Fill',\n            'Contain',\n            'Cover',\n            'None',\n            'Scale Down',\n        ],\n    },\n};\nexports.RemoteImage = RemoteImage;\nexports.__info__ = [{ name: \"RemoteImage\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1JlbW90ZSBJbWFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBa0Q7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCLDBEQUEwRCIsImZpbGUiOiIuL2NvZGUvUmVtb3RlIEltYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jbGFzcyBSZW1vdGVJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsIHNyYzogdGhpcy5wcm9wcy51cmwsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiB0aGlzLnByb3BzLmZpbGxNb2RlLFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxufVxuUmVtb3RlSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzAwLFxuICAgIHdpZHRoOiAzMDAsXG4gICAgdXJsOiAnaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMzAweDMwMCcsXG4gICAgZmlsbE1vZGU6ICdmaWxsJyxcbn07XG5SZW1vdGVJbWFnZS5wcm9wZXJ0eUNvbnRyb2xzID0ge1xuICAgIHVybDogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5TdHJpbmcsIHRpdGxlOiAnVVJMJyB9LFxuICAgIGZpbGxNb2RlOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkVudW0sXG4gICAgICAgIHRpdGxlOiAnRmlsbCBNb2RlJyxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgJ2ZpbGwnLFxuICAgICAgICAgICAgJ2NvbnRhaW4nLFxuICAgICAgICAgICAgJ2NvdmVyJyxcbiAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICdzY2FsZS1kb3duJyxcbiAgICAgICAgXSxcbiAgICAgICAgb3B0aW9uVGl0bGVzOiBbXG4gICAgICAgICAgICAnRmlsbCcsXG4gICAgICAgICAgICAnQ29udGFpbicsXG4gICAgICAgICAgICAnQ292ZXInLFxuICAgICAgICAgICAgJ05vbmUnLFxuICAgICAgICAgICAgJ1NjYWxlIERvd24nLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuZXhwb3J0cy5SZW1vdGVJbWFnZSA9IFJlbW90ZUltYWdlO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiUmVtb3RlSW1hZ2VcIiwgY2hpbGRyZW46IGZhbHNlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Remote Image.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.8.0","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, keywords, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.0"},"peerDependencies":{"framer":"^0.8.0","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"90695eee-490f-4b61-8d1e-4386a5d6cc99","displayName":"Remote Image: Images via URL"},"author":"Edwin Morris","keywords":["Image","Image Tag","Live Image","Image URL","Remote Image"],"dependencies":{},"name":"@framer/ehmorris.remote-image-images-via-url","version":"1.2.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});