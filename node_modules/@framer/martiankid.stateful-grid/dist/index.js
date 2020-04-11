(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.icon-generator"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.input"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/ehmorris.remote-image-images-via-url"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/kasimir.iphone-x-kit"); } catch(e) {} }()), require("react"), require("use-resize-observer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/benjamin.icon-generator", "framer-package-loader!@framer/benjamin.input", "framer-package-loader!@framer/ehmorris.remote-image-images-via-url", "framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray", "framer-package-loader!@framer/kasimir.iphone-x-kit", "react", "use-resize-observer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.icon-generator"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.input"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/ehmorris.remote-image-images-via-url"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/kasimir.iphone-x-kit"); } catch(e) {} }()), require("react"), require("use-resize-observer")) : factory(root["Framer"], root["framer-package-loader!@framer/benjamin.icon-generator"], root["framer-package-loader!@framer/benjamin.input"], root["framer-package-loader!@framer/ehmorris.remote-image-images-via-url"], root["framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray"], root["framer-package-loader!@framer/kasimir.iphone-x-kit"], root["React"], root["use-resize-observer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_icon_generator__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_input__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_ehmorris_remote_image_images_via_url__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone8_space_gray__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_kasimir_iphone_x_kit__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_use_resize_observer__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive .(t|j)s(x?)|.css$":
/*!*************************************!*\
  !*** ./code sync .(t|j)s(x?)|.css$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Change_text.tsx": "./code/Change_text.tsx",
	"./Delete_many.tsx": "./code/Delete_many.tsx",
	"./Delete_one.tsx": "./code/Delete_one.tsx",
	"./Reorder_items.tsx": "./code/Reorder_items.tsx",
	"./Stateful_grid.tsx": "./code/Stateful_grid.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./table.json": "./code/table.json",
	"./tabs.json": "./code/tabs.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive .(t|j)s(x?)|.css$";

/***/ }),

/***/ "./code/Canvas.tsx":
/*!*************************!*\
  !*** ./code/Canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9DYW52YXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQWlFO0FBQ2pFLG1DQUEyRDtBQUMzRCxNQUFNLE1BQU0sR0FBRyxvQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsZUFBZTtBQUV2QyxRQUFBLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hDLGNBQWM7SUFDZCxNQUFNLEVBQUUsbUVBQW1FO0lBQzNFLGNBQWM7SUFDZCxLQUFLLEVBQUUscUVBQXFFO0lBQzVFLGNBQWM7SUFDZCxPQUFPLEVBQUUsdUVBQXVFO0lBQ2hGLGNBQWM7SUFDZCxPQUFPLEVBQUUsaUVBQWlFO0lBQzFFLGNBQWM7SUFDZCxXQUFXLEVBQUUsdUVBQXVFO0NBQ3ZGLENBQUMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared(); // CANVAS_DATA;
exports.colors = Object.freeze({
    /** #0701FF */
    "blue": "var(--token-24fb89c2-e15b-45e3-a1a5-f4f6993cb01e, rgb(7, 1, 255))",
    /** #EE4344 */
    "red": "var(--token-585233ce-7112-4404-8821-bbe5cab6276c, rgb(238, 67, 68))",
    /** #FFFFFF */
    "white": "var(--token-0e2383c7-fd1e-4f97-b040-66eedf4a03fc, rgb(255, 255, 255))",
    /** #000000 */
    "black": "var(--token-a78fe925-b21a-49f7-91b0-0bf19dbb7f62, rgb(0, 0, 0))",
    /** #CCCCCC */
    "lightGrey": "var(--token-c5162dfa-41d1-49df-8fef-d4f11865d7ed, rgb(204, 204, 204))",
});
exports.__info__ = [];


/***/ }),

/***/ "./code/Change_text.tsx":
/*!******************************!*\
  !*** ./code/Change_text.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlX3RleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NoYW5nZV90ZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUEyQztBQUMzQyxtQ0FBNEQ7QUFFNUQsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFBO0FBQ3JCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQTtBQUNyQixNQUFNLGFBQWEsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUVoRCxNQUFNLElBQUksR0FBUSxhQUFJLENBQUM7SUFDbkIsTUFBTSxFQUFFLEVBQUU7SUFDVixPQUFPLEVBQUUsRUFBRTtJQUNYLFFBQVEsRUFBRSxDQUFDO0NBQ2QsQ0FBQyxDQUFBO0FBRVcsUUFBQSxnQkFBZ0IsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDOUMsT0FBTztRQUNILE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTTs7WUFDbkIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFBO1NBQzVCO1FBQ0QsY0FBYyxDQUFDLE1BQU07O1lBQ2pCLE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUE7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUE7U0FDNUI7UUFDRCxlQUFlLEVBQUU7WUFDYixrQkFBa0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7U0FDdEM7S0FDSixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFhLEdBQUcsRUFBRTs7SUFDdEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const textHeight = 48;
const topOffset = 156;
const defaultLabels = ["Activities", "Backpack"];
const data = framer_1.Data({
    active: [],
    options: [],
    currPage: 0,
});
exports.HandleItemChange = props => {
    window["__checkBudget__"]();
    return {
        onMount(options, active) {
            window["__checkBudget__"]();
            const activeItems = [...data.active];
            activeItems.push(active);
            data.active = activeItems;
        },
        onActiveChange(active) {
            window["__checkBudget__"]();
            const activeItems = [...data.active];
            activeItems[data.currPage] = active;
            data.active = activeItems;
        },
        animateChildren: {
            positionTransition: { duration: 0 },
        },
    };
};
exports.UpdateLabel = () => {
    window["__checkBudget__"]();
    const [text, setText] = react_1.useState();
    const [textOffset, setTextOffset] = react_1.useState(topOffset);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const activeText = data.active[data.currPage];
        if (activeText) {
            let linebreak = activeText.length > 1 ? ",\n" : "";
            let text = activeText.reduce((all, current) => all + current.data + linebreak, "");
            const textOffset = topOffset - textHeight * (activeText.length - 1);
            setText(text ? text : defaultLabels[data.currPage]);
            setTextOffset(activeText.length > 0 ? textOffset : topOffset);
        }
    }, [data.active, data.currPage]);
    return {
        text: text,
        top: textOffset,
    };
};
exports.HandleTabChange = () => {
    window["__checkBudget__"]();
    const [options, setOptions] = react_1.useState([]);
    const findCurrentPage = (options, active) => {
        window["__checkBudget__"]();
        if (options.length && active[0]) {
            const selectedId = options.findIndex(elem => active[0].key == elem.key);
            if (selectedId >= 0) {
                return selectedId;
            }
        }
    };
    return {
        onMount(options, active) {
            window["__checkBudget__"]();
            setOptions(options);
            data.currPage = findCurrentPage(options, active);
        },
        onActiveChange(active) {
            window["__checkBudget__"]();
            data.currPage = findCurrentPage(options, active);
        },
    };
};
exports.ChangePage = () => {
    window["__checkBudget__"]();
    return {
        currentPage: data.currPage,
    };
};
exports.__info__ = [{ name: "HandleItemChange", type: "override" }, { name: "UpdateLabel", type: "override" }, { name: "HandleTabChange", type: "override" }, { name: "ChangePage", type: "override" }];


/***/ }),

/***/ "./code/Delete_many.tsx":
/*!******************************!*\
  !*** ./code/Delete_many.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlX21hbnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0RlbGV0ZV9tYW55LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQU9lO0FBQ2YsK0JBQThCO0FBQzlCLGlDQUEyQztBQUMzQyxxQ0FBaUM7QUFFakMsTUFBTSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFBO0FBQ2xFLE1BQU0sV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQTtBQUNuRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUE7QUFDckIsTUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQTtBQUU1QixNQUFNLElBQUksR0FBUSxhQUFJLENBQUM7SUFDbkIsT0FBTyxFQUFFLEVBQUU7SUFDWCxNQUFNLEVBQUUsRUFBRTtJQUNWLFlBQVksRUFBRSxDQUFDO0lBQ2YsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsS0FBSztJQUNoQixNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFBO0FBRUYsTUFBTSxPQUFPLEdBQUcsb0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUU5QixRQUFRO0FBRUssUUFBQSxnQkFBZ0IsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDOUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQTtJQUN2RCxNQUFNLFFBQVEsR0FBRztRQUNiLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsa0NBQU8sV0FBVyxLQUFFLEtBQUssRUFBRSxJQUFJLEdBQUcsTUFBTSxHQUFFO1NBQ3ZELENBQUM7S0FDTCxDQUFBO0lBQ0QsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM5QixPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2xELE9BQU87b0JBQ0gsR0FBRyxFQUFFLGtEQUFrRCxDQUFDLEVBQUU7aUJBQzdELENBQUE7YUFDSixDQUFDO1NBQ0wsQ0FBQyxDQUFBO1FBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtLQUNwQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sT0FBTztRQUNILE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTTs7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7U0FDdkI7UUFDRCxjQUFjLENBQUMsTUFBTTs7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7U0FDdkI7UUFDRCxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU07O1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1NBQ3ZCO1FBQ0QsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQzVCLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDN0MsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDN0MsZUFBZSxFQUFFO1lBQ2IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLE1BQU07WUFDZixrQkFBa0IsRUFBRSxXQUFXO1NBQ2xDO1FBQ0QsSUFBSSxFQUFFLE1BQU07S0FDZixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN6QyxNQUFNLFFBQVEsR0FBRyxxQkFBWSxFQUFFLENBQUE7SUFDL0IsTUFBTSxRQUFRLEdBQUc7UUFDYixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUN0RCxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQ3BCLENBQUE7SUFDRCxTQUFlLFlBQVk7OztZQUN2QixNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBOztLQUM5QjtJQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtJQUNmLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFLLFlBQVk7WUFDYixNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM1RCxNQUFLO1FBQ1QsS0FBSyxZQUFZO1lBQ2IsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDL0QsTUFBSztLQUNaO0lBQ0QsT0FBTztRQUNILEtBQUs7O1lBQ0QsV0FBVyxFQUFFLENBQUE7WUFDYixZQUFZLEVBQUUsQ0FBQTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1NBQ3ZCO1FBQ0QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLFVBQVU7S0FDekIsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLGlCQUFpQixHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUMvQyxNQUFNLFFBQVEsR0FBRztRQUNiLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQ3RELEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7S0FDdEIsQ0FBQTtJQUNELE9BQU87UUFDSCxRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsVUFBVTtLQUN6QixDQUFBO0NBQ0osQ0FBQTtBQUVELG1DQUFtQztBQUV0QixRQUFBLG1CQUFtQixHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUNqRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtLQUMzQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM1QyxNQUFNLFFBQVEsR0FBRyxxQkFBWSxFQUFFLENBQUE7SUFDL0IsTUFBTSxRQUFRLEdBQUc7UUFDYixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDNUIsR0FBRyxFQUFFO1lBQ0QsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUUsZUFBTSxDQUFDLElBQUk7U0FDMUI7UUFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QixDQUFDLEVBQUUsT0FBTztZQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDZixVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNsQixVQUFVLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2dCQUN6QyxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7b0JBQ3RDLFFBQVEsRUFBRSxRQUFRO2lCQUNyQjtnQkFDRCxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO2FBQzlCO1NBQ0osQ0FBQztLQUNMLENBQUE7SUFDRCxpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNwRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFFakIsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQzFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUVqQixPQUFPO1FBQ0gsbUJBQW1COztZQUNmLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyQztRQUNELE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0tBQ3RCLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDcEQsTUFBTSxRQUFRLEdBQUc7UUFDYixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ2xCLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7S0FDdEIsQ0FBQTtJQUNELE9BQU87UUFDSCxRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQzNDLFVBQVUsa0NBQU8sVUFBVSxLQUFFLGVBQWUsRUFBRSxJQUFJLEdBQUU7S0FDdkQsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLHdCQUF3QixHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN0RCxNQUFNLFFBQVEsR0FBRztRQUNiLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEIsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtLQUNwQixDQUFBO0lBQ0QsT0FBTztRQUNILFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxVQUFVO0tBQ3pCLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ3ZDLE1BQU0sUUFBUSxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUMvQixNQUFNLFFBQVEsR0FBRztRQUNiLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxrQ0FBTyxVQUFVLEtBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUUsRUFBRTtRQUNyRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0tBQ2pCLENBQUE7SUFDRCxTQUFlLFNBQVM7OztZQUNwQixNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDNUIsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztLQUMvQjtJQUNELFNBQVMsU0FBUzs7UUFDZCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ3pCO0lBQ0QsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0tBQzdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNwQixPQUFPO1FBQ0gsbUJBQW1COztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1NBQ3pCO1FBQ0QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsUUFBUTtLQUNwQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsZUFBZSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM3QyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLGdCQUFRLENBQUM7UUFDakMsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQTtJQUNGLGlCQUFTLENBQUMsR0FBRyxFQUFFOztRQUNYLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUN4QyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFFakIsT0FBTztRQUNILElBQUksRUFDQSx1Q0FBdUM7WUFDdkMsTUFBTSxDQUFDLEtBQUs7WUFDWixlQUFlO1lBQ2YsSUFBSSxDQUFDLFlBQVk7WUFDakIsK0RBQStEO1lBQy9ELE1BQU0sQ0FBQyxLQUFLO1lBQ1osZUFBZTtZQUNmLE1BQU0sQ0FBQyxNQUFNO1lBQ2IsU0FBUztLQUNoQixDQUFBO0NBQ0osQ0FBQTtBQUVELFFBQVE7QUFFSyxRQUFBLFlBQVksR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDMUMsTUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUE7SUFDbEQsT0FBTztRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLGNBQWMsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDNUMsT0FBTztRQUNILEtBQUs7O1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDbkI7S0FDSixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFhLEdBQUcsRUFBRTs7SUFDekMsT0FBTztRQUNILE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRO0tBQzFCLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxpQkFBaUIsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDL0MsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNsRCxVQUFVLEVBQUUsVUFBVTtLQUN6QixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFhLEdBQUcsRUFBRTs7SUFDdEMsT0FBTztRQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtLQUN6QixDQUFBO0NBQ0osQ0FBQTtBQUVELHlCQUF5QjtBQUVaLFFBQUEsbUJBQW1CLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ2pELE9BQU87UUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO0tBQzVCLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxZQUFZLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzFDLE9BQU87UUFDSCxjQUFjLEVBQUUsT0FBTztRQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO0tBQ25DLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxtQkFBbUIsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDakQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO0lBQzlCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUNsQixNQUFNLENBQUMsR0FBRyxxQkFBWSxDQUNsQixPQUFPLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDUixDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQ3pDLENBQUE7SUFDRCxNQUFNLENBQUMsR0FBRyxxQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbEQsTUFBTSxLQUFLLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMzRCxPQUFPO1FBQ0gsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztRQUNKLEtBQUssRUFBRSxLQUFLO0tBQ2YsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLG9CQUFvQixHQUFhLEdBQUcsRUFBRTs7SUFDL0MsTUFBTSxDQUFDLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xELE9BQU87UUFDSCxDQUFDLEVBQUUsQ0FBQztLQUNQLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxpQkFBaUIsR0FBYSxHQUFHLEVBQUU7O0lBQzVDLE1BQU0sU0FBUyxHQUFHLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQzVDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUMsQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQ3hDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2IsQ0FBQyxDQUFDLDBCQUEwQjtRQUM1QixDQUFDLENBQUMsd0JBQXdCLENBQ2pDLENBQUE7SUFDRCxPQUFPO1FBQ0gsQ0FBQyxFQUFFLFNBQVM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNwQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsa0JBQWtCLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ2hELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7SUFDcEIsTUFBTSxRQUFRLEdBQUc7UUFDYixHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ2pDO1NBQ0osQ0FBQztLQUNMLENBQUE7SUFDRCxpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDWCxNQUFNLFFBQVEsR0FBUSxLQUFLLENBQUMsUUFBUSxDQUFBO1FBQ3BDLFdBQVcsQ0FDUCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3RCLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FDTCxDQUNKLENBQUE7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sT0FBTztRQUNILFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUE7Q0FDSixDQUFBO0FBRUQsWUFBWTtBQUNaLFNBQVMsV0FBVzs7SUFDaEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ3ZFLENBQUE7SUFDRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFOztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBRWhCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN4QixFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQTtDQUNuQiJ9

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const Canvas_1 = __webpack_require__(/*! ./Canvas */ "./code/Canvas.tsx");
const transition = { type: "spring", stiffness: 300, damping: 20 };
const transition2 = { type: "spring", stiffness: 300, damping: 30 };
const duration = 0.25;
const delay = duration * 1.5;
const data = framer_1.Data({
    options: [],
    active: [],
    deletedItems: 0,
    editMode: false,
    showToast: false,
    height: 0,
    target: null,
});
const scrollY = framer_1.motionValue(0);
// LOGIC
exports.HandleItemChange = props => {
    window["__checkBudget__"]();
    const [images, setImages] = react_1.useState(null);
    const itemsNumber = props.children[0].props.itemsNumber;
    const variants = {
        initial: { y: 200, opacity: 0 },
        load: (custom) => ({
            y: 0,
            opacity: 1,
            transition: Object.assign(Object.assign({}, transition2), { delay: 0.05 * custom }),
        }),
    };
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const imagesJSON = JSON.stringify({
            default: Array.from({ length: itemsNumber }, (i, j) => {
                window["__checkBudget__"]();
                return {
                    url: `https://source.unsplash.com/random/196x196?sig=${j}`,
                };
            }),
        });
        setImages(JSON.parse(imagesJSON));
    }, []);
    return {
        onMount(options, active) {
            window["__checkBudget__"]();
            data.options = options;
            data.active = active;
        },
        onActiveChange(active) {
            window["__checkBudget__"]();
            data.active = active;
        },
        onResize(width, height) {
            window["__checkBudget__"]();
            data.height = height;
        },
        updatedOptions: data.options,
        ignoreEvents: { stateChange: !data.editMode },
        activeItems: data.editMode ? data.active : [],
        animateChildren: {
            variants: variants,
            initial: "initial",
            animate: "load",
            positionTransition: transition2,
        },
        json: images,
    };
};
exports.DeleteItems = props => {
    window["__checkBudget__"]();
    const controls = framer_1.useAnimation();
    const variants = {
        on: { scale: 1.5, transition: { duration: duration } },
        off: { scale: 1 },
    };
    function animateTrash() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            yield controls.start("on");
            yield controls.start("off");
        });
    }
    let target = {};
    switch (props.name) {
        case "folder_ico":
            target = { action: "moved", targetX: 0, color: Canvas_1.colors.blue };
            break;
        case "delete_ico":
            target = { action: "deleted", targetX: 123, color: Canvas_1.colors.red };
            break;
    }
    return {
        onTap() {
            window["__checkBudget__"]();
            removeItems();
            animateTrash();
            data.target = target;
        },
        variants: variants,
        animate: controls,
        transition: transition,
    };
};
exports.AnimateFilledIcon = props => {
    window["__checkBudget__"]();
    const variants = {
        on: { opacity: 1, transition: { duration: duration } },
        off: { opacity: 0 },
    };
    return {
        variants: variants,
        transition: transition,
    };
};
// INTERFACE UPDATES ON DATA CHANGE
exports.HandleCounterChange = props => {
    window["__checkBudget__"]();
    return {
        text: data.active.length,
    };
};
exports.AnimateCounter = props => {
    window["__checkBudget__"]();
    const controls = framer_1.useAnimation();
    const variants = {
        on: { scale: 1, opacity: 1 },
        off: {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0,
            background: Canvas_1.colors.blue,
        },
        remove: ({ targetX, color }) => ({
            x: targetX,
            y: [0, -40, 24],
            background: color,
            scale: [1, 1, 0.6],
            transition: {
                x: { ease: "linear", duration: duration },
                default: {
                    ease: ["easeOut", "easeIn", "easeOut"],
                    duration: duration,
                },
                background: { duration: 0 },
            },
        }),
    };
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        data.active.length ? controls.start("on") : controls.start("off");
    }, [data.active]);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        data.target && controls.start("remove");
    }, [data.target]);
    return {
        onAnimationComplete() {
            window["__checkBudget__"]();
            data.target && controls.set("off");
        },
        initial: "off",
        variants: variants,
        animate: controls,
        transition: transition,
        custom: data.target,
    };
};
exports.HandleEmptyPlaceholder = props => {
    window["__checkBudget__"]();
    const variants = {
        on: { opacity: 1 },
        off: { opacity: 0 },
    };
    return {
        variants: variants,
        initial: "off",
        animate: data.options.length ? "off" : "on",
        transition: Object.assign(Object.assign({}, transition), { staggerChildren: 0.05 }),
    };
};
exports.EmptyPlaceholderChildren = props => {
    window["__checkBudget__"]();
    const variants = {
        on: { scale: 1 },
        off: { scale: 0 },
    };
    return {
        variants: variants,
        transition: transition,
    };
};
exports.ShowToast = props => {
    window["__checkBudget__"]();
    const controls = framer_1.useAnimation();
    const variants = {
        show: { y: 80, transition: Object.assign(Object.assign({}, transition), { delay: duration * 0.5 }) },
        hide: { y: 0 },
    };
    function showToast() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            yield controls.start("show");
            yield controls.start("hide");
        });
    }
    function hideToast() {
        window["__checkBudget__"]();
        controls.start("hide");
    }
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        data.showToast ? showToast() : hideToast();
    }, [data.showToast]);
    return {
        onAnimationComplete() {
            window["__checkBudget__"]();
            data.showToast = false;
        },
        variants: variants,
        initial: "hide",
        animate: controls,
    };
};
exports.UpdataToastData = props => {
    window["__checkBudget__"]();
    const [target, setTarget] = react_1.useState({
        action: null,
        color: null,
        targetX: null,
    });
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        data.target && setTarget(data.target);
    }, [data.target]);
    return {
        text: '<span style="-webkit-text-fill-color:' +
            target.color +
            '!important;">' +
            data.deletedItems +
            '</span> items have been <span style="-webkit-text-fill-color:' +
            target.color +
            '!important;">' +
            target.action +
            "</span>",
    };
};
// SETUP
exports.RevealPhotos = props => {
    window["__checkBudget__"]();
    const variants = { off: { y: 200 }, on: { y: 0 } };
    return {
        initial: "off",
        variants: variants,
    };
};
exports.ToggleEditMode = props => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            data.editMode = !data.editMode;
            data.active = [];
        },
    };
};
exports.ShowEditButton = () => {
    window["__checkBudget__"]();
    return {
        visible: !data.editMode,
    };
};
exports.ShowBottomButtons = props => {
    window["__checkBudget__"]();
    return {
        initial: { y: 80 + 24 },
        animate: data.editMode ? { y: 0 } : { y: 80 + 24 },
        transition: transition,
    };
};
exports.ShowOverlay = () => {
    window["__checkBudget__"]();
    return {
        visible: data.editMode,
    };
};
// //SCROLLING ANIMATIONS
exports.UpdateContentHeight = props => {
    window["__checkBudget__"]();
    return {
        height: data.height + 236,
    };
};
exports.HandleScroll = props => {
    window["__checkBudget__"]();
    return {
        contentOffsetY: scrollY,
        contentHeight: data.height + 236,
    };
};
exports.AnimateTextOnScroll = props => {
    window["__checkBudget__"]();
    const textWidth = +props.width;
    const padding = 24;
    const x = framer_1.useTransform(scrollY, [0, -96], [0, 375 / 2 - textWidth / 2 - padding]);
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 32]);
    const scale = framer_1.useTransform(scrollY, [0, -96], [1, 20 / 32]);
    return {
        x: x,
        y: y,
        scale: scale,
    };
};
exports.AnimateIconsOnScroll = () => {
    window["__checkBudget__"]();
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 32]);
    return {
        y: y,
    };
};
exports.FixHeaderOnScroll = () => {
    window["__checkBudget__"]();
    const shouldFix = framer_1.useTransform(scrollY, value => value < -236 + 96 ? -value - 236 + 96 : 0);
    const color = framer_1.useTransform(scrollY, value => value < -236 + 96
        ? "rgba(245, 245, 245, 0.9)"
        : "rgba(255, 255, 255, 1)");
    return {
        y: shouldFix,
        background: color,
    };
};
exports.PreloaderContainer = props => {
    window["__checkBudget__"]();
    const [children, setChildren] = react_1.useState([]);
    const duration = 0.6;
    const variants = {
        off: { scale: 1 },
        on: (custom) => ({
            scale: 0.25,
            transition: {
                flip: Infinity,
                ease: "easeInOut",
                duration: duration,
                delay: (custom * duration) / 3,
            },
        }),
    };
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const children = props.children;
        setChildren(children.map((child, i) => React.cloneElement(child, {
            variants: variants,
            initial: "off",
            animate: "on",
            custom: i,
        })));
    }, []);
    return {
        children: children,
    };
};
// FUNCTIONS
function removeItems() {
    window["__checkBudget__"]();
    const filteredOptions = data.options.filter(item => data.active.findIndex(active => active.key === item.key) < 0);
    const timeout = setTimeout(() => {
        window["__checkBudget__"]();
        data.deletedItems = data.active.length;
        data.showToast = true;
        data.target = null;
        data.options = filteredOptions;
        data.active = [];
        clearTimeout(timeout);
    }, delay * 1000);
}
exports.__info__ = [{ name: "HandleItemChange", type: "override" }, { name: "DeleteItems", type: "override" }, { name: "AnimateFilledIcon", type: "override" }, { name: "HandleCounterChange", type: "override" }, { name: "AnimateCounter", type: "override" }, { name: "HandleEmptyPlaceholder", type: "override" }, { name: "EmptyPlaceholderChildren", type: "override" }, { name: "ShowToast", type: "override" }, { name: "UpdataToastData", type: "override" }, { name: "RevealPhotos", type: "override" }, { name: "ToggleEditMode", type: "override" }, { name: "ShowEditButton", type: "override" }, { name: "ShowBottomButtons", type: "override" }, { name: "ShowOverlay", type: "override" }, { name: "UpdateContentHeight", type: "override" }, { name: "HandleScroll", type: "override" }, { name: "AnimateTextOnScroll", type: "override" }, { name: "AnimateIconsOnScroll", type: "override" }, { name: "FixHeaderOnScroll", type: "override" }, { name: "PreloaderContainer", type: "override" }];


/***/ }),

/***/ "./code/Delete_one.tsx":
/*!*****************************!*\
  !*** ./code/Delete_one.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlX29uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvRGVsZXRlX29uZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FRZTtBQUNmLGlDQUFnQztBQUVoQyxNQUFNLElBQUksR0FBUSxhQUFJLENBQUM7SUFDbkIsVUFBVSxFQUFFLEVBQUU7SUFDZCxNQUFNLEVBQUUsQ0FBQztJQUNULE9BQU8sRUFBRSxFQUFFO0lBQ1gsTUFBTSxFQUFFLEVBQUU7SUFDVixVQUFVLEVBQUUsSUFBSTtDQUNuQixDQUFDLENBQUE7QUFFRixNQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUE7QUFDbEUsTUFBTSxPQUFPLEdBQUcsb0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUU5QixtQkFBbUI7QUFDTixRQUFBLGdCQUFnQixHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM5QyxPQUFPO1FBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNOztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUN2QjtRQUNELGNBQWMsQ0FBQyxNQUFNOztZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUN2QjtRQUNELFVBQVUsQ0FBQyxJQUFJOztZQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1NBQ3pCO1FBQ0QsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNOztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUN2QjtRQUNELGVBQWUsRUFBRTtZQUNiLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUNsQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFB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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_1 = __webpack_require__(/*! react */ "react");
const data = framer_1.Data({
    inputValue: "",
    height: 0,
    options: [],
    active: [],
    itemTapped: null,
});
const transition = { type: "spring", stiffness: 300, damping: 20 };
const scrollY = framer_1.motionValue(0);
// COMPONENTS LOGIC
exports.HandleItemChange = props => {
    window["__checkBudget__"]();
    return {
        onMount(options, active) {
            window["__checkBudget__"]();
            data.options = options;
            data.active = active;
        },
        onActiveChange(active) {
            window["__checkBudget__"]();
            data.active = active;
        },
        itemTapped(item) {
            window["__checkBudget__"]();
            data.itemTapped = item;
        },
        onResize(width, height) {
            window["__checkBudget__"]();
            data.height = height;
        },
        animateChildren: {
            initial: { height: 0, opacity: 0 },
            animate: { height: 48, opacity: 1 },
            exit: { opacity: 0 },
            initialEnabled: false,
        },
        ignoreEvents: { stateChange: true },
        updatedOptions: strikedText(data.options, data.active),
        activeItems: data.active,
    };
};
// ACTIONS
exports.AddItem = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            addItem();
        },
    };
};
exports.AddActiveItem = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            setActive();
        },
    };
};
exports.RemoveItem = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            removeItem();
        },
    };
};
exports.HandleItemOverdrag = props => {
    window["__checkBudget__"]();
    const threshold = 144;
    const [page, setPage] = react_1.useState(1);
    return {
        onPanEnd(event, info) {
            window["__checkBudget__"]();
            info.offset.x < -threshold && removeItem();
            info.offset.x > threshold && setActive();
            // Animate to default position after release
            Math.abs(info.offset.x) > threshold && setPage(1);
        },
        onChangePage(curr) {
            window["__checkBudget__"]();
            // Setting page explicitly or snapback won't work
            setPage(curr);
        },
        onTap() {
            window["__checkBudget__"]();
            setPage(1);
        },
        currentPage: page,
    };
};
exports.HandleInputChange = () => {
    window["__checkBudget__"]();
    const deb = debounced(200, text => {
        window["__checkBudget__"]();
        data.inputValue = text;
    });
    return {
        onValueChange: deb,
        value: data.inputValue,
    };
};
exports.HandleDoneText = props => {
    window["__checkBudget__"]();
    return {
        text: `${data.active.length} / ${data.options.length} done`,
    };
};
exports.HandleEmptyPlaceholder = props => {
    window["__checkBudget__"]();
    const variants = {
        on: { opacity: 1 },
        off: { opacity: 0 },
    };
    return {
        variants: variants,
        initial: "off",
        animate: data.options.length ? "off" : "on",
        transition: Object.assign(Object.assign({}, transition), { staggerChildren: 0.05 }),
    };
};
exports.EmptyPlaceholderChildren = props => {
    window["__checkBudget__"]();
    const variants = {
        on: { scale: 1 },
        off: { scale: 0 },
    };
    return {
        variants: variants,
        transition: transition,
    };
};
exports.UpdateContentHeight = props => {
    window["__checkBudget__"]();
    return {
        height: data.height + 236,
    };
};
//SCROLL LOGIC
exports.HandleScroll = props => {
    window["__checkBudget__"]();
    return {
        contentOffsetY: scrollY,
        contentHeight: data.height + 236,
    };
};
exports.AnimateTitleOnScroll = props => {
    window["__checkBudget__"]();
    const textWidth = +props.width;
    const padding = 24;
    const x = framer_1.useTransform(scrollY, [0, -96], [0, 375 / 2 - textWidth / 2 - padding]);
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 24]);
    const scale = framer_1.useTransform(scrollY, [0, -96], [1, 20 / 32]);
    return {
        x: x,
        y: y,
        scale: scale,
    };
};
exports.AnimateDoneTextOnScroll = props => {
    window["__checkBudget__"]();
    const textWidth = +props.width;
    const padding = 24;
    const x = framer_1.useTransform(scrollY, [0, -96], [0, 375 / 2 - textWidth / 2 - padding]);
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 16]);
    return {
        x: x,
        y: y,
    };
};
exports.AnimateIconsOnScroll = () => {
    window["__checkBudget__"]();
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 32]);
    return {
        y: y,
    };
};
exports.FixHeaderOnScroll = () => {
    window["__checkBudget__"]();
    const shouldFix = framer_1.useTransform(scrollY, value => value < -236 + 96 ? -value - 236 + 96 : 0);
    const color = framer_1.useTransform(scrollY, value => value < -236 + 96
        ? "rgba(245, 245, 245, 0.9)"
        : "rgba(255, 255, 255, 1)");
    return {
        y: shouldFix,
        background: color,
    };
};
// FUNCTIONS
function getTimeStamp() {
    window["__checkBudget__"]();
    const date = new Date();
    return Math.floor(date.getTime() * Math.random());
}
function removeItem() {
    window["__checkBudget__"]();
    const filteredOptions = data.options.filter(item => item.key !== data.itemTapped.key);
    const activeItems = data.active.filter(item => item.key !== data.itemTapped.key);
    data.options = filteredOptions;
    data.active = activeItems;
}
function addItem() {
    window["__checkBudget__"]();
    if (data.inputValue !== "") {
        const item = { key: getTimeStamp(), data: data.inputValue };
        data.options = [item, ...data.options];
        data.inputValue = "";
    }
}
function setActive() {
    window["__checkBudget__"]();
    const id = data.active.findIndex(item => item.key == data.itemTapped.key);
    const activeItems = id == -1
        ? [...data.active, Object.assign({}, data.itemTapped)]
        : data.active.filter(item => item.key !== data.itemTapped.key);
    data.active = activeItems;
}
function debounced(delay, fn) {
    window["__checkBudget__"]();
    let timerId;
    return function (...args) {
        window["__checkBudget__"]();
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            window["__checkBudget__"]();
            fn(...args);
            timerId = null;
        }, delay);
    };
}
function strikedText(options, active) {
    window["__checkBudget__"]();
    return options.map(({ key, data }) => {
        window["__checkBudget__"]();
        const id = active.findIndex(active => active.key == key);
        return {
            key: key,
            data: id > -1 ? `<s>${data}</s` : data,
        };
    });
}
exports.__info__ = [{ name: "HandleItemChange", type: "override" }, { name: "AddItem", type: "override" }, { name: "AddActiveItem", type: "override" }, { name: "RemoveItem", type: "override" }, { name: "HandleItemOverdrag", type: "override" }, { name: "HandleInputChange", type: "override" }, { name: "HandleDoneText", type: "override" }, { name: "HandleEmptyPlaceholder", type: "override" }, { name: "EmptyPlaceholderChildren", type: "override" }, { name: "UpdateContentHeight", type: "override" }, { name: "HandleScroll", type: "override" }, { name: "AnimateTitleOnScroll", type: "override" }, { name: "AnimateDoneTextOnScroll", type: "override" }, { name: "AnimateIconsOnScroll", type: "override" }, { name: "FixHeaderOnScroll", type: "override" }];


/***/ }),

/***/ "./code/Reorder_items.tsx":
/*!********************************!*\
  !*** ./code/Reorder_items.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVvcmRlcl9pdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUmVvcmRlcl9pdGVtcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBMkU7QUFDM0UsaUNBQTJDO0FBRTNDLE1BQU0sSUFBSSxHQUFRLGFBQUksQ0FBQztJQUNuQixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUMsQ0FBQTtBQUVGLE1BQU0sT0FBTyxHQUFHLG9CQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFakIsUUFBQSxnQkFBZ0IsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDOUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxnQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMxQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLGdCQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFMUMsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FDM0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDWixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUM5RCxDQUFBO1FBQ0QsVUFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO0tBQ3ZDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBRVosT0FBTztRQUNILE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTTs7WUFDbkIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3RCO1FBQ0QsY0FBYyxDQUFDLE1BQU07O1lB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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_1 = __webpack_require__(/*! react */ "react");
const data = framer_1.Data({
    height: 0,
});
const scrollY = framer_1.motionValue(0);
exports.HandleItemChange = props => {
    window["__checkBudget__"]();
    const [active, setActive] = react_1.useState([]);
    const [options, setOptions] = react_1.useState([]);
    const [updated, setUpdated] = react_1.useState([]);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const filtered = options.filter((item, index) => active.findIndex(active => active.key === item.key) < 0);
        setUpdated([...active, ...filtered]);
    }, [active]);
    return {
        onMount(options, active) {
            window["__checkBudget__"]();
            setOptions(options);
        },
        onActiveChange(active) {
            window["__checkBudget__"]();
            setActive(active);
        },
        onResize(width, height) {
            window["__checkBudget__"]();
            data.height = height;
        },
        updatedOptions: updated,
    };
};
exports.AdjustHeight = props => {
    window["__checkBudget__"]();
    return {
        height: data.height,
    };
};
exports.HandleScroll = props => {
    window["__checkBudget__"]();
    return {
        contentOffsetY: scrollY,
        contentHeight: data.height + 236,
    };
};
exports.AnimateTextOnScroll = props => {
    window["__checkBudget__"]();
    const textWidth = +props.width;
    const padding = 80;
    const x = framer_1.useTransform(scrollY, [0, -96], [0, 375 / 2 - textWidth / 2 - padding]);
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 16]);
    const scale = framer_1.useTransform(scrollY, [0, -96], [1, 20 / 32]);
    return {
        x: x,
        y: y,
        scale: scale,
    };
};
exports.AnimateIconsOnScroll = () => {
    window["__checkBudget__"]();
    const y = framer_1.useTransform(scrollY, [0, -96], [0, 16]);
    return {
        y: y,
    };
};
exports.AnimateImageOnScroll = () => {
    window["__checkBudget__"]();
    const opacity = framer_1.useTransform(scrollY, [0, -96], [1, 0]);
    const scale = framer_1.useTransform(scrollY, [-96, 0, 96], [1, 1, 1.45], {
        clamp: false,
    });
    return {
        opacity: opacity,
        scale: scale,
        originY: 1,
    };
};
exports.FixHeaderOnScroll = () => {
    window["__checkBudget__"]();
    const y = framer_1.useTransform(scrollY, value => value < -236 + 96 ? -value - 236 + 96 : 0);
    return {
        y: y,
    };
};
exports.__info__ = [{ name: "HandleItemChange", type: "override" }, { name: "AdjustHeight", type: "override" }, { name: "HandleScroll", type: "override" }, { name: "AnimateTextOnScroll", type: "override" }, { name: "AnimateIconsOnScroll", type: "override" }, { name: "AnimateImageOnScroll", type: "override" }, { name: "FixHeaderOnScroll", type: "override" }];


/***/ }),

/***/ "./code/Stateful_grid.tsx":
/*!********************************!*\
  !*** ./code/Stateful_grid.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVmdWxfZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RhdGVmdWxfZ3JpZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsaUNBQW1EO0FBQ25ELG1DQUtlO0FBQ2YsNkRBQW1EO0FBRW5ELHVEQUF1RDtBQUN2RCw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBRTVDLFNBQWdCLFlBQVksQ0FBQyxLQUFZOztJQUNyQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLGdCQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxnQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLGdCQUFRLEVBQUUsQ0FBQTtJQUNwQywwREFBMEQ7SUFDMUQsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLEdBQUcsNkJBQWlCLEVBQUUsQ0FBQTtJQUM5RCxXQUFXO0lBQ1gsdUVBQXVFO0lBRXZFLHVFQUF1RTtJQUN2RSxTQUFTLFlBQVk7O1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtLQUNwRDtJQUVELFNBQVMsY0FBYyxDQUFDLElBQVksRUFBRSxJQUFrQjs7UUFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUE7UUFDZixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVzthQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1Ys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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const use_resize_observer_1 = __webpack_require__(/*! use-resize-observer */ "use-resize-observer");
// COPYRIGHT 2019, ANTON KOSARCHYN, ALL RIGHTS RESERVED
// If YOU'D LIKE TO CONTRIBUTE — WELCOME HERE:
// https://github.com/akosarch/stateful-grid
function StatefulGrid(props) {
    window["__checkBudget__"]();
    const [options, setOptions] = react_1.useState([]);
    const [jsonOptions, setJSONOptions] = react_1.useState([]);
    const [active, setActive] = react_1.useState([]);
    const [hover, setHover] = react_1.useState();
    // Use resize observer to calculate the exact content size
    const [ref, updatedWidth, updatedHeight] = use_resize_observer_1.default();
    //FUNCTIONS
    //---------------------------------------------------------------------
    // Generate unique ID based on the timestamp (used for the objects key)
    function getTimeStamp() {
        window["__checkBudget__"]();
        const date = new Date();
        return Math.floor(date.getTime() * Math.random());
    }
    function getEasingCurve(item, type) {
        window["__checkBudget__"]();
        const i = +item;
        const jsBezier = props.bezierCurve
            .split(",")
            .map(e => Number.parseFloat(e));
        const cssBezier = `bezier-curve(${props.bezierCurve})`;
        const curves = {
            js: ["linear", "easeInOut", "easeIn", "easeOut", jsBezier],
            css: ["linear", "ease", "ease-in", "ease-out", cssBezier],
        };
        return curves[type][i];
    }
    // Toggle selected based on input indexes
    function setActiveItem(key) {
        window["__checkBudget__"]();
        if (!props.ignoreEvents.tap) {
            // Get the actual item from given key
            const itemId = options.findIndex(item => item.key === key);
            const item = options[itemId];
            // Check if item already exists in active array
            const activeId = active.findIndex(item => item.key === key);
            const activeItems = props.isMultiselect
                ? activeId < 0
                    ? [...active, item] // Select item
                    : active.filter((item, id) => id !== activeId) // Deselect item
                : [item];
            // Finaly, set the new state of selected items
            !props.ignoreEvents.stateChange && setActive(activeItems);
            // Callback the active items (for overrides)
            !props.ignoreEvents.stateChange && props.onActiveChange(activeItems);
            // Callback recent tapped item (for overrides)
            props.itemTapped(item);
        }
    }
    // Select items at given indexes (props.activeIds)
    function setActiveByDefault(activeIds, options) {
        window["__checkBudget__"]();
        if (activeIds.length) {
            // Filter the options with given indexes
            const filteredOptions = options.filter((elem, id) => {
                window["__checkBudget__"]();
                return activeIds.indexOf(id) > -1;
            });
            const active = props.isMultiselect
                ? filteredOptions
                : [filteredOptions[0]];
            // Finaly, set the new state of selected items
            // And callback the active items
            setActive(active);
        }
        props.onMount(options, active);
    }
    // Filter the hovered item
    function setHoverItem(key, condition) {
        window["__checkBudget__"]();
        if (!props.ignoreEvents.hover) {
            // Get the actual item from given key
            const itemId = options.findIndex(item => item.key === key);
            const item = condition ? options[itemId] : null;
            // Finaly, set the new state of selected items
            // And callback the active items
            props.hoverState[0] && setHover(item);
            props.onHoverChange(item);
        }
    }
    // Set initial options
    function setInitialOptions(initialOptions) {
        window["__checkBudget__"]();
        let optionsArray;
        // Check if options is passed by user
        // Else, use items number to populate options
        if (initialOptions instanceof Array) {
            optionsArray = Array.from(initialOptions, (x, i) => {
                window["__checkBudget__"]();
                return { key: getTimeStamp(), data: x };
            });
        }
        else if (typeof initialOptions === "number") {
            optionsArray = Array.from(Array(initialOptions), (x, i) => {
                window["__checkBudget__"]();
                return { key: getTimeStamp(), data: i };
            });
        }
        // Finaly, set the initial options
        // And active items set by default
        setOptions(optionsArray);
        setActiveByDefault(props.activeIds, optionsArray);
    }
    // Parse JSON and turn into array with states and props
    function getJSONOptions(json) {
        window["__checkBudget__"]();
        // This should be explicitly set to empty array
        // So the typecheck later wont fail
        let optionsArray = [];
        if (Object.keys(json).length) {
            for (let key in json) {
                const value = json[key];
                optionsArray = value.map((val, i) => (Object.assign(Object.assign({}, optionsArray[i]), { [key]: val })));
            }
            return optionsArray;
        }
    }
    // The function bellow handel the props change to the desired
    // Eg text, colors, icons etc
    function updateProps(fromState, to, item, transition) {
        window["__checkBudget__"]();
        const [toState, toProps] = to;
        let props = toState.props;
        let updatedProps = {};
        let updatedChildren = [];
        let updatedStyle = Object.assign(Object.assign({}, props.style), { transition: transition });
        const tmplt = "$";
        // Iterate throught all the props from json
        // If prop exists - assign newProp
        for (let key in toProps) {
            if (props[key]) {
                updatedProps = Object.assign(Object.assign({}, updatedProps), { [key]: toProps[key] });
            }
        }
        // Replace text with the given options
        if (props.rawHTML) {
            let rawHTML = props.rawHTML;
            // If text is populated through json
            // else use simple options
            if (Object.keys(toProps).length) {
                for (let key in toProps) {
                    rawHTML = rawHTML.replace(new RegExp(`\\${tmplt}${key}/`, "gi"), toProps[key]);
                }
            }
            else {
                rawHTML = rawHTML.replace(new RegExp(`\\${tmplt}/`, "gi"), item.data);
            }
            // Replace the text color if given
            if (toProps.textColor) {
                rawHTML = rawHTML.replace(new RegExp("-webkit-text-fill-color:.*?;"), `-webkit-text-fill-color:${toProps.textColor};`);
            }
            updatedProps = Object.assign(Object.assign({}, updatedProps), { rawHTML: rawHTML });
        }
        // Iterate through each of the child if there is any
        // And recursively call the function to update props on child elements
        // Assing returned object as a new child
        if (props["children"] && props["children"].length > 0) {
            updatedChildren = props["children"].map((toChild, id) => updateProps(fromState.props["children"][id], [toChild, toProps], item, transition));
        }
        // Return new object with updated props
        return React.cloneElement(fromState, Object.assign(Object.assign(Object.assign({}, props), updatedProps), { style: updatedStyle }), updatedChildren);
    }
    // Render childen with the updated props and desired state and return it
    function renderChildren(item) {
        window["__checkBudget__"]();
        // Gather the design components for each state
        const defaultState = props.defaultState[0];
        const activeState = props.activeState[0]
            ? props.activeState[0]
            : defaultState;
        const hoverState = props.hoverState[0];
        // Is custom props was passed
        const defaultStateProps = item.data.default ? item.data.default : {};
        const activeStateProps = item.data.active
            ? item.data.active
            : defaultStateProps;
        const hoverStateProps = item.data.hover
            ? item.data.hover
            : activeStateProps;
        // Assemble the state from the design components and props
        const states = {
            default: [defaultState, defaultStateProps],
            active: [activeState, activeStateProps],
            hover: [hoverState, hoverStateProps],
        };
        // Find if the item is active
        const activeId = active.findIndex(active => active.key === item.key);
        const transition = `all ${props.animationDuration}s ${getEasingCurve(props.animationCurve, "css")}`;
        // Find if the item is hovered
        const currState = activeId < 0
            ? hover && hover.key === item.key
                ? "hover"
                : "default"
            : "active";
        // Finaly update the state of the item
        return updateProps(defaultState, states[currState], item, transition);
    }
    // EFFECTS
    //---------------------------------------------------------------------
    // Parse JSON obtained from props.jsonPath or props.json
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (props.jsonPath) {
            fetch(props.jsonPath)
                .then(response => response.json())
                .then(json => setJSONOptions(getJSONOptions(json)));
        }
        else if (props.json) {
            setJSONOptions(getJSONOptions(props.json));
        }
    }, [props.jsonPath, props.json]);
    // Set initial values
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setInitialOptions((jsonOptions.length && jsonOptions) ||
            (props.initialOptions.length && props.initialOptions) ||
            props.itemsNumber);
    }, [props.initialOptions, props.itemsNumber, jsonOptions]);
    // Check if updated options were passed
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (props.updatedOptions) {
            // if item was removed => remove it from selected as well
            const activeItems = active.filter((original, i) => {
                window["__checkBudget__"]();
                const id = props.updatedOptions.findIndex(updated => updated.key === original.key);
                return id >= 0;
            });
            // Set updated options and active items
            setActive(activeItems);
            setOptions(props.updatedOptions);
        }
    }, [props.updatedOptions]);
    // Set active
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        props.activeItems && setActive(props.activeItems);
    }, [props.activeItems]);
    // On content size change pass it to the callback
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (updatedWidth >= 0 && updatedHeight >= 0) {
            props.onResize(updatedWidth, updatedHeight);
        }
    }, [updatedWidth, updatedHeight]);
    // RENDER
    //---------------------------------------------------------------------
    return (React.createElement(framer_1.Frame, { ref: ref, style: props.defaultState[0]
            ? containerCSS(props)
            : emptyContainer(props) }, props.defaultState[0] ? (options.map((option, i) => {
        window["__checkBudget__"]();
        const key = option.key;
        const element = renderChildren(option);
        const itemHeight = element.props.height;
        const itemWidth = element.props.width;
        // Create a Frame for the react component
        return (React.createElement(framer_1.Frame, { onTap: event => setActiveItem(key), onTapStart: () => props.itemTapped(option), onHoverStart: () => setHoverItem(key, true), onHoverEnd: () => setHoverItem(key, false), width: itemWidth, height: itemHeight, style: elementCSS(props), variants: props.animateChildren.variants, initial: props.animateChildren.initial, animate: props.animateChildren.animate, exit: props.animateChildren.exit, transition: props.animateChildren.transition, positionTransition: {
                ease: getEasingCurve(props.animationCurve, "js"),
                duration: props.animationDuration,
            }, custom: i, key: key }, element));
    })) : (React.createElement("span", null, "Connect a DEFAULT state"))));
}
exports.StatefulGrid = StatefulGrid;
// STYLES
//---------------------------------------------------------------------
const emptyContainer = (props) => ({
    padding: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 14,
    lineHeight: 1,
    height: "100%",
    width: "100%",
});
const containerCSS = (props) => ({
    display: "flex",
    flexDirection: props.direction == "horizontal" ? "row" : "column",
    flexWrap: props.wrap ? "wrap" : "nowrap",
    justifyContent: "start",
    alignContent: "start",
    background: null,
    margin: props.marginPerSide
        ? `${-props.top}px ${-props.right}px ${-props.bottom}px ${-props.left}px`
        : -props.margin,
    width: props.margin
        ? props.marginPerSide
            ? -props.right + -props.left
            : -props.margin * 2
        : "auto",
    height: props.margin
        ? props.marginPerSide
            ? -props.top + -props.bottom
            : -props.margin * 2
        : "auto",
});
const elementCSS = (props) => ({
    flex: "0 0 auto",
    position: "relative",
    margin: props.marginPerSide
        ? `${props.top}px ${props.right}px ${props.bottom}px ${props.left}px`
        : props.margin,
    background: null,
});
// DEFAULT PROPERTIES
StatefulGrid.defaultProps = {
    onMount: function () { window["__checkBudget__"](); },
    itemTapped: function () { window["__checkBudget__"](); },
    onActiveChange: function () { window["__checkBudget__"](); },
    onHoverChange: function () { window["__checkBudget__"](); },
    onResize: function () { window["__checkBudget__"](); },
    initialOptions: [],
    activeIds: [],
    marginPerSide: false,
    ignoreEvents: {
        tap: false,
        hover: false,
        stateChange: false,
    },
    animateChildren: {
        initialEnabled: false,
        variants: {},
        initial: {},
        animate: {},
        exit: {},
        transition: {},
        positionTransition: {},
    },
};
// PROPERTY CONTROLS
//---------------------------------------------------------------------
framer_1.addPropertyControls(StatefulGrid, {
    isMultiselect: {
        type: framer_1.ControlType.Boolean,
        title: "Select type",
        enabledTitle: "Multi",
        disabledTitle: "Single",
        defaultValue: false,
    },
    initialOptions: {
        type: framer_1.ControlType.Array,
        title: "Options",
        propertyControl: { type: framer_1.ControlType.String },
        defaultValue: [],
    },
    itemsNumber: {
        type: framer_1.ControlType.Number,
        title: "Items",
        defaultValue: 5,
    },
    direction: {
        type: framer_1.ControlType.SegmentedEnum,
        title: "Direction",
        defaultValue: "vertical",
        options: ["horizontal", "vertical"],
    },
    wrap: {
        type: framer_1.ControlType.Boolean,
        title: "Wrap items",
        enabledTitle: "Wrap",
        disabledTitle: "Nowrap",
        defaultValue: false,
    },
    margin: {
        type: framer_1.ControlType.FusedNumber,
        title: "Gap",
        defaultValue: 0,
        toggleKey: "marginPerSide",
        toggleTitles: ["All", "Sides"],
        valueKeys: ["top", "left", "right", "bottom"],
        valueLabels: ["T", "L", "R", "B"],
        min: 0,
    },
    animationCurve: {
        type: framer_1.ControlType.Enum,
        defaultValue: "1",
        title: "Curve",
        options: ["0", "1", "2", "3", "4"],
        optionTitles: ["linear", "ease", "easeIn", "easeOut", "bezier"],
    },
    bezierCurve: {
        type: framer_1.ControlType.String,
        defaultValue: "0.645, 0.045, 0.355, 1",
        title: "Bezier",
        hidden: ({ animationCurve }) => animationCurve !== "4",
    },
    animationDuration: {
        type: framer_1.ControlType.Number,
        title: "Duration",
        step: 0.1,
        min: 0,
        max: 10,
        defaultValue: 0.25,
        displayStepper: true,
    },
    defaultState: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Default",
    },
    activeState: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Active",
    },
    hoverState: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Hover",
    },
    jsonPath: {
        type: framer_1.ControlType.File,
        title: "JSON",
        allowedFileTypes: ["json"],
    },
    activeIds: {
        type: framer_1.ControlType.Array,
        title: "Active Ids",
        propertyControl: { type: framer_1.ControlType.Number },
        defaultValue: [],
    },
});
exports.__info__ = [{ name: "StatefulGrid", children: false, type: "component" }];


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
exports.colors = Object.freeze({
    /** #0701FF */
    "blue": "var(--token-24fb89c2-e15b-45e3-a1a5-f4f6993cb01e, rgb(7, 1, 255))",
    /** #EE4344 */
    "red": "var(--token-585233ce-7112-4404-8821-bbe5cab6276c, rgb(238, 67, 68))",
    /** #FFFFFF */
    "white": "var(--token-0e2383c7-fd1e-4f97-b040-66eedf4a03fc, rgb(255, 255, 255))",
    /** #000000 */
    "black": "var(--token-a78fe925-b21a-49f7-91b0-0bf19dbb7f62, rgb(0, 0, 0))",
    /** #CCCCCC */
    "lightGrey": "var(--token-c5162dfa-41d1-49df-8fef-d4f11865d7ed, rgb(204, 204, 204))",
});
exports.__info__ = [];


/***/ }),

/***/ "./code/table.json":
/*!*************************!*\
  !*** ./code/table.json ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module) {


module.exports = JSON.parse("{\"default\":[{\"name\":\"Walk\",\"album\":\"Vulgar Display of Power\",\"url\":\"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/PanteraVulgarDisplayofPower.jpg/220px-PanteraVulgarDisplayofPower.jpg\"},{\"name\":\"Cowboys From Hell\",\"album\":\"Cowboys From Hell\",\"url\":\"https://upload.wikimedia.org/wikipedia/ru/thumb/a/a8/CowboysFromHell.jpg/270px-CowboysFromHell.jpg\"},{\"name\":\"Cemetery Gates\",\"album\":\"Cowboys From Hell\",\"url\":\"https://upload.wikimedia.org/wikipedia/ru/thumb/a/a8/CowboysFromHell.jpg/270px-CowboysFromHell.jpg\"},{\"name\":\"I'm Broken\",\"album\":\"Far Beyond Driven\",\"url\":\"https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Pantera-FarBeyondDriven.jpg/270px-Pantera-FarBeyondDriven.jpg\"},{\"name\":\"5 Minutes Alone\",\"album\":\"Far Beyond Driven\",\"url\":\"https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Pantera-FarBeyondDriven.jpg/270px-Pantera-FarBeyondDriven.jpg\"},{\"name\":\"Domination\",\"album\":\"Cowboys From Hell\",\"url\":\"https://upload.wikimedia.org/wikipedia/ru/thumb/a/a8/CowboysFromHell.jpg/270px-CowboysFromHell.jpg\"},{\"name\":\"Mouth For War\",\"album\":\"Vulgar Display of Power\",\"url\":\"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/PanteraVulgarDisplayofPower.jpg/220px-PanteraVulgarDisplayofPower.jpg\"},{\"name\":\"This Love\",\"album\":\"Vulgar Display of Power\",\"url\":\"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/PanteraVulgarDisplayofPower.jpg/220px-PanteraVulgarDisplayofPower.jpg\"},{\"name\":\"Hollow\",\"album\":\"Vulgar Display of Power\",\"url\":\"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/PanteraVulgarDisplayofPower.jpg/220px-PanteraVulgarDisplayofPower.jpg\"},{\"name\":\"Fucking Hostile\",\"album\":\"Vulgar Display of Power\",\"url\":\"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/PanteraVulgarDisplayofPower.jpg/220px-PanteraVulgarDisplayofPower.jpg\"}]}");

/***/ }),

/***/ "./code/tabs.json":
/*!************************!*\
  !*** ./code/tabs.json ***!
  \************************/
/*! exports provided: default, active */
/***/ (function(module) {


module.exports = JSON.parse("{\"default\":[{\"tab\":\"Activity\",\"icon\":\"activity\",\"background\":\"#EAB00E\",\"textColor\":\"#CCC\"},{\"tab\":\"Backpack\",\"icon\":\"compass\",\"background\":\"#22AA99\",\"textColor\":\"#CCC\"},{\"tab\":\"Moments\",\"icon\":\"camera\",\"background\":\"#7755CC\",\"textColor\":\"#CCC\"},{\"tab\":\"Profile\",\"icon\":\"settings\",\"background\":\"#ccc\",\"textColor\":\"#CCC\"}],\"active\":[{\"tab\":\"Activity\",\"icon\":\"activity\",\"background\":\"#EAB00E\",\"color\":\"#EAB00E\",\"textColor\":\"#EAB00E\"},{\"tab\":\"Backpack\",\"icon\":\"compass\",\"background\":\"#22AA99\",\"color\":\"#22AA99\",\"textColor\":\"#22AA99\"},{\"tab\":\"Moments\",\"icon\":\"camera\",\"background\":\"#7755CC\",\"color\":\"#7755CC\",\"textColor\":\"#7755CC\"},{\"tab\":\"Profile\",\"icon\":\"settings\",\"background\":\"#ccc\",\"color\":\"#ccc\",\"textColor\":\"#CCC\"}]}");

/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/benjamin.icon-generator"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 75,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.16666666666666666,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.25708502024291496,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "explore",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "oB8YfAAb4",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "OFlULNXkp",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.51619433198380571,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "add_circle",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [
                      {
                        "__class" : "ExportOptions",
                        "enabled" : true,
                        "nameExtension" : "@2x",
                        "nameExtensionMode" : "Suffix",
                        "scale" : 2,
                        "type" : "png"
                      }
                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "StbJwylg5",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "OFlULNXkp",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.7753036437246964,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "favorite",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "fK8zskMCv",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "OFlULNXkp",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "codeOverrideFile" : null,
                "codeOverrideIdentifier" : null,
                "codeOverrideName" : null,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillRadialGradient" : {
                  "__class" : "RadialGradient",
                  "alpha" : 1,
                  "centerAnchorX" : 0.5,
                  "centerAnchorY" : 0.5,
                  "heightFactor" : 0.5,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ],
                  "widthFactor" : 0.5
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "OFlULNXkp",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "WyCHrKsPu",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 0,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              },
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.21428571428571427,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "compass",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "L6tdOngPb",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "NR6oUF6jc",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.87375000000000003,
                    "centerAnchorY" : 0.46833333333333332,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "framer",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "bhTB2BZuJ",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "NR6oUF6jc",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.49134199134199136,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "plus-circle",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [
                      {
                        "__class" : "ExportOptions",
                        "enabled" : true,
                        "nameExtension" : "",
                        "nameExtensionMode" : "Suffix",
                        "scale" : 1,
                        "type" : "png"
                      }
                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "JyIytlKGe",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "NR6oUF6jc",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillRadialGradient" : {
                  "__class" : "RadialGradient",
                  "alpha" : 1,
                  "centerAnchorX" : 0.5,
                  "centerAnchorY" : 0.5,
                  "heightFactor" : 0.5,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ],
                  "widthFactor" : 0.5
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "NR6oUF6jc",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "WyCHrKsPu",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              },
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 0,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.83333333333333337,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.22929936305732485,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "compass",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "vSCzdocjP",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "a5BdyOgOZ",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.50106157112526539,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "plusSquare",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [
                      {
                        "__class" : "ExportOptions",
                        "enabled" : true,
                        "nameExtension" : "",
                        "nameExtensionMode" : "Suffix",
                        "scale" : 1,
                        "type" : "png"
                      }
                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "zJ6txzMYS",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "a5BdyOgOZ",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.772823779193206,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "heart",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "jlM4LPwk5",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "a5BdyOgOZ",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillRadialGradient" : {
                  "__class" : "RadialGradient",
                  "alpha" : 1,
                  "centerAnchorX" : 0.5,
                  "centerAnchorY" : 0.5,
                  "heightFactor" : 0.5,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ],
                  "widthFactor" : 0.5
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "a5BdyOgOZ",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "WyCHrKsPu",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillRadialGradient" : {
              "__class" : "RadialGradient",
              "alpha" : 1,
              "centerAnchorX" : 0.5,
              "centerAnchorY" : 0.5,
              "heightFactor" : 0.5,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ],
              "widthFactor" : 0.5
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 300,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "WyCHrKsPu",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 100,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "kEPOv4V_y",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "replicaInfo" : null,
            "right" : 100,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 75,
            "visible" : true,
            "width" : 400,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 100%)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillRadialGradient" : {
          "__class" : "RadialGradient",
          "alpha" : 1,
          "centerAnchorX" : 0.5,
          "centerAnchorY" : 0.5,
          "heightFactor" : 0.5,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ],
          "widthFactor" : 0.5
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "kEPOv4V_y",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 1273,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "AAPwAvOKu",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : -103,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 75,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.16666666666666666,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.25708502024291496,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "explore",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "FkklgE2sM",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "bB_t8DFxH",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.51619433198380571,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "add_circle",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [
                      {
                        "__class" : "ExportOptions",
                        "enabled" : true,
                        "nameExtension" : "@2x",
                        "nameExtensionMode" : "Suffix",
                        "scale" : 2,
                        "type" : "png"
                      }
                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "BIBhydS0p",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "bB_t8DFxH",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.7753036437246964,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "favorite",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "EZahiu_6P",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "bB_t8DFxH",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "codeOverrideFile" : null,
                "codeOverrideIdentifier" : null,
                "codeOverrideName" : null,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillRadialGradient" : {
                  "__class" : "RadialGradient",
                  "alpha" : 1,
                  "centerAnchorX" : 0.5,
                  "centerAnchorY" : 0.5,
                  "heightFactor" : 0.5,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ],
                  "widthFactor" : 0.5
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "bB_t8DFxH",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "D_zpQTPSB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 0,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              },
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.21428571428571427,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "compass",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "L8S71O4H4",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "E9lQ98Qk2",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.76839826839826841,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "framer",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "Yo2GdiUNi",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "E9lQ98Qk2",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.49134199134199136,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "plus-circle",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [
                      {
                        "__class" : "ExportOptions",
                        "enabled" : true,
                        "nameExtension" : "",
                        "nameExtensionMode" : "Suffix",
                        "scale" : 1,
                        "type" : "png"
                      }
                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "zWqfHU266",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "E9lQ98Qk2",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillRadialGradient" : {
                  "__class" : "RadialGradient",
                  "alpha" : 1,
                  "centerAnchorX" : 0.5,
                  "centerAnchorY" : 0.5,
                  "heightFactor" : 0.5,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ],
                  "widthFactor" : 0.5
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "E9lQ98Qk2",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "D_zpQTPSB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              },
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 0,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.83333333333333337,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.22929936305732485,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "compass",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "VchEruN9m",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "ybnWuQO4Y",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.50106157112526539,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "plusSquare",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [
                      {
                        "__class" : "ExportOptions",
                        "enabled" : true,
                        "nameExtension" : "",
                        "nameExtensionMode" : "Suffix",
                        "scale" : 1,
                        "type" : "png"
                      }
                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "K1LDODVJE",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "ybnWuQO4Y",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.772823779193206,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "heart",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillRadialGradient" : {
                      "__class" : "RadialGradient",
                      "alpha" : 1,
                      "centerAnchorX" : 0.5,
                      "centerAnchorY" : 0.5,
                      "heightFactor" : 0.5,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ],
                      "widthFactor" : 0.5
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "VtFGnjEzi",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "ybnWuQO4Y",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillRadialGradient" : {
                  "__class" : "RadialGradient",
                  "alpha" : 1,
                  "centerAnchorX" : 0.5,
                  "centerAnchorY" : 0.5,
                  "heightFactor" : 0.5,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ],
                  "widthFactor" : 0.5
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "ybnWuQO4Y",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "D_zpQTPSB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillRadialGradient" : {
              "__class" : "RadialGradient",
              "alpha" : 1,
              "centerAnchorX" : 0.5,
              "centerAnchorY" : 0.5,
              "heightFactor" : 0.5,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ],
              "widthFactor" : 0.5
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 300,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "D_zpQTPSB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 100,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Nr_X1R8ah",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "replicaInfo" : null,
            "right" : 100,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 75,
            "visible" : true,
            "width" : 400,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 100%)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillRadialGradient" : {
          "__class" : "RadialGradient",
          "alpha" : 1,
          "centerAnchorX" : 0.5,
          "centerAnchorY" : 0.5,
          "heightFactor" : 0.5,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ],
          "widthFactor" : 0.5
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "Nr_X1R8ah",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3006,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "AAPwAvOKu",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : -103,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : 1.3333333333333333,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : false,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : true,
        "fillImage" : "vkWmdx4bpFZifLDJg9pBWUL50Qo.png",
        "fillImagePixelHeight" : 1200,
        "fillImagePixelWidth" : 1600,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillRadialGradient" : {
          "__class" : "RadialGradient",
          "alpha" : 1,
          "centerAnchorX" : 0.5,
          "centerAnchorY" : 0.5,
          "heightFactor" : 0.5,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ],
          "widthFactor" : 0.5
        },
        "fillType" : "image",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "MGBbTj2tD",
        "intrinsicHeight" : 600,
        "intrinsicWidth" : 800,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 2106,
        "locked" : false,
        "name" : "artwork",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "AAPwAvOKu",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : -103,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
        "codeComponentProps" : {
          "color" : "#000",
          "icon" : "flag",
          "set" : "feather"
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 24,
        "heightType" : 0,
        "id" : "zUeQgCVzK",
        "intrinsicHeight" : 24,
        "intrinsicWidth" : 24,
        "left" : 1398,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "AAPwAvOKu",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "top" : -284,
        "visible" : true,
        "width" : 24,
        "widthType" : 0
      }
    ],
    "id" : "AAPwAvOKu",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 52
}
designs["@framer/benjamin.input"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 140,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 2,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              },
              {
                "__class" : "BoxShadow",
                "blur" : 4,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 2
              },
              {
                "__class" : "BoxShadow",
                "blur" : 8,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 4
              },
              {
                "__class" : "BoxShadow",
                "blur" : 16,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 8
              },
              {
                "__class" : "BoxShadow",
                "blur" : 32,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 16
              },
              {
                "__class" : "BoxShadow",
                "blur" : 64,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 32
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 72,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.64886363636363631,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.15151515151515152,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : false,
                      "placeholder" : "Email",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "CJKuj30VZ",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "hum18Giq4",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 55,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.51515151515151514,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : true,
                      "placeholder" : "Password",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "WpLAhe2NQ",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "hum18Giq4",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "FrameNode",
                    "aspectRatio" : null,
                    "blendingEnabled" : 0,
                    "blendingMode" : "normal",
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "hsla(0, 0%, 13%, 0.1)",
                    "borderEnabled" : 1,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 0,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.86363636363636365,
                    "children" : [
                      {
                        "__class" : "TextNode",
                        "autoSize" : true,
                        "blur" : 12,
                        "blurEnabled" : 0,
                        "blurType" : "layer",
                        "bottom" : null,
                        "brightness" : 100,
                        "brightnessEnabled" : 0,
                        "centerAnchorX" : 0.5,
                        "centerAnchorY" : 0.51111111111111107,
                        "codeOverrideEnabled" : false,
                        "constraintsLocked" : false,
                        "contrast" : 100,
                        "contrastEnabled" : 0,
                        "exportOptions" : [

                        ],
                        "grayscale" : 0,
                        "grayScaleEnabled" : 0,
                        "height" : 18,
                        "heightType" : 0,
                        "hueRotate" : 0,
                        "hueRotateEnabled" : 0,
                        "id" : "Ta37qeNis",
                        "invert" : 0,
                        "invertEnabled" : 0,
                        "isTarget" : false,
                        "left" : null,
                        "locked" : false,
                        "name" : null,
                        "opacity" : 1,
                        "originalid" : null,
                        "parentid" : "p99fy2p_7",
                        "right" : null,
                        "rotation" : 0,
                        "saturate" : 100,
                        "saturateEnabled" : 0,
                        "sepia" : 0,
                        "sepiaEnabled" : 0,
                        "shadows" : [

                        ],
                        "styledText" : {
                          "__class" : "StyledTextDraft",
                          "blocks" : [
                            {
                              "data" : {
                                "emptyStyle" : [
                                  "LETTERSPACING:0",
                                  "LINEHEIGHT:1.2",
                                  "ALIGN:center",
                                  "FONT:SFUIText-Bold",
                                  "COLOR:rgba(255, 255, 255, 1.00)",
                                  "SIZE:15"
                                ]
                              },
                              "depth" : 0,
                              "entityRanges" : [

                              ],
                              "inlineStyleRanges" : [
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LETTERSPACING:0"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LINEHEIGHT:1.2"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "ALIGN:center"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "FONT:SFUIText-Bold"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "SIZE:15"
                                }
                              ],
                              "key" : "1ah8p",
                              "text" : "SUBMIT",
                              "type" : "unstyled"
                            }
                          ],
                          "cached" : {
                            "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"1ah8p-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"1ah8p-0-0\" style=\"tab-size:4;font-weight:700;font-family:&quot;SFUIText-Bold&quot;, &quot;SF UI Text&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:15px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">SUBMIT<\/span><\/span><\/div><\/div>",
                            "os" : "10_14",
                            "size" : {
                              "height" : 18,
                              "width" : 62
                            },
                            "width" : 0
                          },
                          "entityMap" : {

                          }
                        },
                        "top" : null,
                        "visible" : true,
                        "width" : 62,
                        "widthType" : 0
                      }
                    ],
                    "clip" : false,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(34, 204, 222, 1.00)",
                    "fillEnabled" : true,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "guidesX" : [

                    ],
                    "guidesY" : [

                    ],
                    "height" : 45,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "p99fy2p_7",
                    "intrinsicHeight" : null,
                    "intrinsicWidth" : null,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isExternalMaster" : null,
                    "isMaster" : false,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "navigationTarget" : null,
                    "navigationTransition" : "push",
                    "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                    "navigationTransitionDirection" : "left",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "hum18Giq4",
                    "previewSettings" : null,
                    "radius" : 8,
                    "radiusBottomLeft" : 8,
                    "radiusBottomRight" : 8,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 8,
                    "radiusTopRight" : 8,
                    "replicaInfo" : null,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 165,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "hum18Giq4",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "oLt6jivrw",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              },
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.24204545454545454,
                "children" : [
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : null,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.29222972972972971,
                    "centerAnchorY" : 0.20289855072463769,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "mBhKwhnSu",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "K7KOcPQtx",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "COLOR:rgb(0, 0, 0)",
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:rgb(0, 0, 0)"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Welcome",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:40px;letter-spacing:-0.6px;line-height:1.2\"><span data-text=\"true\">Welcome<\/span><\/span><\/div><\/div>",
                        "os" : "10_14",
                        "size" : {
                          "height" : 48,
                          "width" : 173
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : -10,
                    "visible" : true,
                    "width" : 173,
                    "widthType" : 0
                  },
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : -8,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.24155405405405406,
                    "centerAnchorY" : 0.76811594202898548,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "eHREXF2a3",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : true,
                    "left" : 0,
                    "locked" : false,
                    "name" : "posts",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "K7KOcPQtx",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "COLOR:#22CCDD",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:#22CCDD"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Sign Up",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, sans-serif;-webkit-text-fill-color:#22CCDD;font-size:40px;letter-spacing:-0.6px;line-height:1.2\"><span data-text=\"true\">Sign Up<\/span><\/span><\/div><\/div>",
                        "os" : "10_14",
                        "size" : {
                          "height" : 48,
                          "width" : 143
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : null,
                    "visible" : true,
                    "width" : 143,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 69,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "K7KOcPQtx",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "oLt6jivrw",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 72,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 440,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "oLt6jivrw",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ErIyzDpvZ",
            "previewSettings" : null,
            "radius" : 20,
            "radiusBottomLeft" : 20,
            "radiusBottomRight" : 20,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 20,
            "radiusTopRight" : 20,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 140,
            "visible" : true,
            "width" : 440,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleMacBook",
        "exportOptions" : [

        ],
        "fillColor" : "rgba(34, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 720,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "ErIyzDpvZ",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 970,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleMacBook",
          "responsive" : false,
          "rotate" : false,
          "touch" : false,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 1152,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 80,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 2,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              },
              {
                "__class" : "BoxShadow",
                "blur" : 4,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 2
              },
              {
                "__class" : "BoxShadow",
                "blur" : 8,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 4
              },
              {
                "__class" : "BoxShadow",
                "blur" : 16,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 8
              },
              {
                "__class" : "BoxShadow",
                "blur" : 32,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 16
              },
              {
                "__class" : "BoxShadow",
                "blur" : 64,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 32
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 72,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.64886363636363631,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.15151515151515152,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : false,
                      "placeholder" : "Email",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "ir2hJMFNU",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "btGKCmU0n",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 55,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.51515151515151514,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : true,
                      "placeholder" : "Password",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "K7ipwUuGJ",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "btGKCmU0n",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "FrameNode",
                    "aspectRatio" : null,
                    "blendingEnabled" : 0,
                    "blendingMode" : "normal",
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "hsla(0, 0%, 13%, 0.1)",
                    "borderEnabled" : 1,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 0,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.86363636363636365,
                    "children" : [
                      {
                        "__class" : "TextNode",
                        "autoSize" : true,
                        "blur" : 12,
                        "blurEnabled" : 0,
                        "blurType" : "layer",
                        "bottom" : null,
                        "brightness" : 100,
                        "brightnessEnabled" : 0,
                        "centerAnchorX" : 0.5,
                        "centerAnchorY" : 0.51111111111111107,
                        "codeOverrideEnabled" : false,
                        "constraintsLocked" : false,
                        "contrast" : 100,
                        "contrastEnabled" : 0,
                        "exportOptions" : [

                        ],
                        "grayscale" : 0,
                        "grayScaleEnabled" : 0,
                        "height" : 16,
                        "heightType" : 0,
                        "hueRotate" : 0,
                        "hueRotateEnabled" : 0,
                        "id" : "YGTstaBKR",
                        "invert" : 0,
                        "invertEnabled" : 0,
                        "isTarget" : false,
                        "left" : null,
                        "locked" : false,
                        "name" : null,
                        "opacity" : 1,
                        "originalid" : null,
                        "parentid" : "CjIyUsWP6",
                        "right" : null,
                        "rotation" : 0,
                        "saturate" : 100,
                        "saturateEnabled" : 0,
                        "sepia" : 0,
                        "sepiaEnabled" : 0,
                        "shadows" : [

                        ],
                        "styledText" : {
                          "__class" : "StyledTextDraft",
                          "blocks" : [
                            {
                              "data" : {
                                "emptyStyle" : [
                                  "LETTERSPACING:0",
                                  "LINEHEIGHT:1.2",
                                  "ALIGN:center",
                                  "FONT:SFUIText-Bold",
                                  "COLOR:rgba(255, 255, 255, 1.00)",
                                  "SIZE:14"
                                ]
                              },
                              "depth" : 0,
                              "entityRanges" : [

                              ],
                              "inlineStyleRanges" : [
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LETTERSPACING:0"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LINEHEIGHT:1.2"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "ALIGN:center"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "FONT:SFUIText-Bold"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "SIZE:14"
                                }
                              ],
                              "key" : "1ah8p",
                              "text" : "SUBMIT",
                              "type" : "unstyled"
                            }
                          ],
                          "cached" : {
                            "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"1ah8p-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"1ah8p-0-0\" style=\"tab-size:4;font-weight:700;font-family:&quot;SFUIText-Bold&quot;, &quot;SF UI Text&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:14px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">SUBMIT<\/span><\/span><\/div><\/div>",
                            "os" : "10_14",
                            "size" : {
                              "height" : 16,
                              "width" : 58
                            },
                            "width" : 0
                          },
                          "entityMap" : {

                          }
                        },
                        "top" : null,
                        "visible" : true,
                        "width" : 58,
                        "widthType" : 0
                      }
                    ],
                    "clip" : false,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(34, 204, 222, 1.00)",
                    "fillEnabled" : true,
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "guidesX" : [

                    ],
                    "guidesY" : [

                    ],
                    "height" : 45,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "CjIyUsWP6",
                    "intrinsicHeight" : null,
                    "intrinsicWidth" : null,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isExternalMaster" : null,
                    "isMaster" : false,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "navigationTarget" : null,
                    "navigationTransition" : "push",
                    "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                    "navigationTransitionDirection" : "left",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "btGKCmU0n",
                    "previewSettings" : null,
                    "radius" : 8,
                    "radiusBottomLeft" : 8,
                    "radiusBottomRight" : 8,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 8,
                    "radiusTopRight" : 8,
                    "replicaInfo" : null,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 165,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "btGKCmU0n",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "ax7DfQjtB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              },
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.24204545454545454,
                "children" : [
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : null,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.29222972972972971,
                    "centerAnchorY" : 0.20289855072463769,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "XBodO9eb8",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "MuBafEzJ1",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "COLOR:rgb(0, 0, 0)",
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:rgb(0, 0, 0)"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Welcome",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:40px;letter-spacing:-0.6px;line-height:1.2\"><span data-text=\"true\">Welcome<\/span><\/span><\/div><\/div>",
                        "os" : "10_14",
                        "size" : {
                          "height" : 48,
                          "width" : 173
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : -10,
                    "visible" : true,
                    "width" : 173,
                    "widthType" : 0
                  },
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : -8,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.24155405405405406,
                    "centerAnchorY" : 0.76811594202898548,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "jlTcwwm0v",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : true,
                    "left" : 0,
                    "locked" : false,
                    "name" : "posts",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "MuBafEzJ1",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "COLOR:#22CCDD",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:#22CCDD"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Sign Up",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, sans-serif;-webkit-text-fill-color:#22CCDD;font-size:40px;letter-spacing:-0.6px;line-height:1.2\"><span data-text=\"true\">Sign Up<\/span><\/span><\/div><\/div>",
                        "os" : "10_14",
                        "size" : {
                          "height" : 48,
                          "width" : 143
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : null,
                    "visible" : true,
                    "width" : 143,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 69,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "MuBafEzJ1",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "ax7DfQjtB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 72,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              },
              {
                "__class" : "FrameNode",
                "aspectRatio" : 4.7101449275362315,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 181,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.49204545454545456,
                "centerAnchorY" : 0.51022727272727275,
                "children" : [

                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : true,
                "fillImage" : "d1Hxvudu0Z086BRET3TIfyM4w.png",
                "fillImagePixelHeight" : 138,
                "fillImagePixelWidth" : 650,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "image",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 69,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "Acqnt_Pcr",
                "intrinsicHeight" : 69,
                "intrinsicWidth" : 325,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 54,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "ax7DfQjtB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 61,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 325,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 440,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "ax7DfQjtB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "kHtLUpBDz",
            "previewSettings" : null,
            "radius" : 20,
            "radiusBottomLeft" : 20,
            "radiusBottomRight" : 20,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 20,
            "radiusTopRight" : 20,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 80,
            "visible" : true,
            "width" : 440,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(34, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "kHtLUpBDz",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 2222,
        "locked" : false,
        "name" : "artwork",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleMacBook",
          "responsive" : false,
          "rotate" : false,
          "touch" : false,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.00875,
        "centerAnchorY" : 0.31166666666666665,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 4,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "wM85zLpGI",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "C6uRexxRp",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 26,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.34000000000000002,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 4,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "vK6k8qN6f",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "C6uRexxRp",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 15,
            "visible" : true,
            "width" : 14,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 15,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.66000000000000003,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 4,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "p5bT4_cfS",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "C6uRexxRp",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 14,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(35, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 234,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "hsl(46, 100%, 50%)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "hsl(338, 100%, 50%)"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "C6uRexxRp",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3045,
        "locked" : false,
        "name" : "icon",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 50,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.00875,
        "centerAnchorY" : 0.31166666666666665,
        "children" : [
          {
            "__class" : "ShapeContainerNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "constraintsLocked" : false,
            "deviceType" : null,
            "exportIncludesBackground" : false,
            "exportOptions" : [

            ],
            "fillColor" : "#FFF",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "height" : 50,
            "heightType" : 0,
            "id" : "qKQdw8Xhe",
            "left" : 0,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "sizeToFit" : false,
            "top" : 0,
            "visible" : true,
            "width" : 50,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.42999999999999999,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "CYdpHeNNB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 20,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.28999999999999998,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "X3hpG_4ie",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 13,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 20,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.56999999999999995,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "ITyMqLTAy",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 13,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.70999999999999996,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "dwGhQ6sZj",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(35, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 234,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "hsl(46, 100%, 50%)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "hsl(338, 100%, 50%)"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "Xl8DlmAY1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3130,
        "locked" : false,
        "name" : "icon",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 50,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "hsl(186, 100%, 41%)",
            "borderEnabled" : -1,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.44624999999999998,
            "centerAnchorY" : 0.41666666666666669,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : true,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.14464285714285716,
                "centerAnchorY" : 0.51000000000000001,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 19,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "ojRhGY0Ul",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 19,
                "locked" : false,
                "name" : null,
                "opacity" : 0.20000000000000001,
                "originalid" : null,
                "parentid" : "FMOT28LYU",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "COLOR:rgb(0, 0, 0)",
                          "SIZE:16",
                          "LETTERSPACING:0",
                          "LINEHEIGHT:1.2",
                          "FONT:Colfax-Regular"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "COLOR:rgb(0, 0, 0)"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LETTERSPACING:0"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "FONT:Colfax-Regular"
                        }
                      ],
                      "key" : "fa3ni",
                      "text" : "Email",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div data-offset-key=\"fa3ni-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"fa3ni-0-0\" style=\"tab-size:4;font-weight:400;font-family:&quot;Colfax-Regular&quot;, &quot;Colfax&quot;, serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:16px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Email<\/span><\/span><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 19,
                      "width" : 43
                    },
                    "width" : 0
                  },
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 43,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "FMOT28LYU",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 217,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 225,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 225,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.55500000000000005,
            "centerAnchorY" : 0.58333333333333337,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "hRcLjqfEZ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : 216,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.67500000000000004,
            "centerAnchorY" : 0.25,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 270,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(255,255,255,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "#FFFFFF"
                }
              ]
            },
            "fillType" : "linear-gradient",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "c_c6PQgIY",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 0.29999999999999999,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : 120,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 125,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 125,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.32500000000000001,
            "centerAnchorY" : 0.75,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 90,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(255,255,255,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "#FFFFFF"
                }
              ]
            },
            "fillType" : "linear-gradient",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "UheRCOBt3",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 120,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 0.29999999999999999,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(34, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "xZBRcakmD",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3280,
        "locked" : false,
        "name" : "artwork",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleMacBook",
          "responsive" : false,
          "rotate" : false,
          "touch" : false,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/Input.tsx_Input",
        "codeComponentProps" : {
          "backgroundColor" : "#FFF",
          "border" : "rgba(0,0,0,0.1)",
          "borderWidth" : 1,
          "focusColor" : "#09F",
          "fontSize" : 15,
          "multiLine" : false,
          "padding" : 15,
          "paddingBottom" : 15,
          "paddingLeft" : 15,
          "paddingPerSide" : false,
          "paddingRight" : 15,
          "paddingTop" : 15,
          "password" : false,
          "placeholder" : "Type something…",
          "radius" : 10,
          "textColor" : "#000",
          "value" : ""
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "CGkFkhJuf",
        "intrinsicHeight" : 50,
        "intrinsicWidth" : 300,
        "invert" : 0,
        "invertEnabled" : 0,
        "left" : 1661,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 154,
        "visible" : true,
        "width" : 300,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.00875,
        "centerAnchorY" : 0.31166666666666665,
        "children" : [
          {
            "__class" : "ShapeContainerNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "constraintsLocked" : false,
            "deviceType" : null,
            "exportIncludesBackground" : false,
            "exportOptions" : [

            ],
            "fillColor" : "#FFF",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "height" : 50,
            "heightType" : 0,
            "id" : "oa7fqZEuP",
            "left" : 0,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "sizeToFit" : false,
            "top" : 0,
            "visible" : true,
            "width" : 50,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.42999999999999999,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "un5qsqs7e",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 20,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.28999999999999998,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "j5tTX7uxN",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 13,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 20,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.56999999999999995,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "dH7GG3Nzq",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 13,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.70999999999999996,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "RrGOcbAkj",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(35, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 234,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "hsl(46, 100%, 50%)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "hsl(338, 100%, 50%)"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "diWGr7LM1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 4180,
        "locked" : false,
        "name" : "icon",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 50,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 20,
        "blurEnabled" : 1,
        "blurType" : "background",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0.36861111111111111,
        "centerAnchorY" : 0.17532467532467533,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.94533333333333336,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-j6EEiuh5L",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Ax4TtJzKL",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "P",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">P<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Ax4TtJzKL",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.15333333333333332,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ksyu1Igva",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-MDnIF6nCU",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "W",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">W<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-MDnIF6nCU",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.84666666666666668,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-q5RAnLN1p",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-bPmWoEV9S",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "O",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">O<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-bPmWoEV9S",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.748,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-BATfdqZyu",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-eR8DGU0UG",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "I",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">I<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-eR8DGU0UG",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.64933333333333332,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QaEdVEJIr",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-akqJenAaJ",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "U",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">U<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-akqJenAaJ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.55066666666666664,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GmsqVsWEg",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-jeg6TJ0F5",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "Y",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">Y<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-jeg6TJ0F5",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.44933333333333331,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-AVzdiktZa",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Y9EDNvQTe",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "T",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">T<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Y9EDNvQTe",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.35066666666666668,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-JCJI8UCGK",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-wJRXSjoR8",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "R",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">R<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-wJRXSjoR8",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.252,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-xacYideO0",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N_3p6HgAz",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "E",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">E<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N_3p6HgAz",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.054666666666666669,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-sjbt25Gst",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rsiWH9kVt",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "Q",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">Q<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rsiWH9kVt",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.89466666666666672,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-M1oJOho_c",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-hnHrJiAad",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "L",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">L<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-hnHrJiAad",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.10533333333333333,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-SMmIj7nW2",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PpjQEDAKQ",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "A",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">A<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PpjQEDAKQ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.20133333333333334,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N1roBHRly",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-vreNq0Q4_",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "S",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">S<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-vreNq0Q4_",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.29999999999999999,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QVA4Y8vTI",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-lKXJKrkWW",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "D",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">D<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-lKXJKrkWW",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.40133333333333332,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-CwjSDgafu",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yJn7UkDXP",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "F",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">F<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yJn7UkDXP",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.50266666666666671,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-K9Ie3LWJ6",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-DnJfepPc1",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "G",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">G<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-DnJfepPc1",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.60399999999999998,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-EQc7GPXXZ",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yvY_TefX1",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "H",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">H<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yvY_TefX1",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.70266666666666666,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ZuY7UC5_x",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RKEcrPRhZ",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "J",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">J<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RKEcrPRhZ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.79866666666666664,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.51666666666666672,
                "centerAnchorY" : 0.5,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-HsntJGLW6",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-mw5sFTZEh",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "K",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">K<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-mw5sFTZEh",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.19866666666666666,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-roREOECXI",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-t2Rd_LaLy",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "Z",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">Z<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-t2Rd_LaLy",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.39866666666666667,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Zg3XTuS2W",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RYbeQuXu4",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "C",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">C<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RYbeQuXu4",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.50266666666666671,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-fxrieTNWr",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QxDTvFch3",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "V",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">V<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QxDTvFch3",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.60133333333333339,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-sGoAmVYLm",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ROttcHKVG",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "B",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">B<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ROttcHKVG",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.70266666666666666,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-FgjSIi4QU",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-dMdlkIhVr",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "N",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">N<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-dMdlkIhVr",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.80133333333333334,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QGIeCb0IX",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-U4vi2stuY",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "M",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">M<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-U4vi2stuY",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.06933333333333333,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.51190476190476186,
                "centerAnchorY" : 0.5,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 16,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RzLBP8zNX",
                "intrinsicHeight" : 15.586,
                "intrinsicWidth" : 17.175999999999998,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-L09HOyT5S",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"17.176\" height=\"15.586\"><path d=\"M 13.088 15.586 L 4.088 15.586 L 4.088 9.586 L 1.002 9.586 C 0.111 9.586 -0.335 8.509 0.295 7.879 L 7.881 0.293 C 8.271 -0.098 8.904 -0.098 9.295 0.293 L 16.881 7.879 C 17.511 8.509 17.064 9.586 16.174 9.586 L 13.088 9.586 Z\" fill=\"rgba(0, 0, 0, 1.00)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 17,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-L09HOyT5S",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.06933333333333333,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.51190476190476186,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 19,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GrGMJWQoS",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-YjOtE0vUm",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "COLOR:#000000",
                          "LINEHEIGHT:1.2",
                          "SIZE:16",
                          "LETTERSPACING:-0.32",
                          "FONT:__SF-UI-Text-Regular__",
                          "ALIGN:center"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.32"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Text-Regular__"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        }
                      ],
                      "key" : "ejiju",
                      "text" : "123",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"ejiju-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"ejiju-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSText&quot;, &quot;SFProText-Regular&quot;, &quot;SFUIText-Regular&quot;, &quot;.SFUIText&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:16px;letter-spacing:-0.32px;line-height:1.2\"><span data-text=\"true\">123<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 19,
                      "width" : 43
                    },
                    "width" : 42
                  },
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 42,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-YjOtE0vUm",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.192,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PSBnDtaS9",
                "intrinsicHeight" : 19.5,
                "intrinsicWidth" : 19.5,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GyIE4Prmg",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"19.5\" height=\"19.5\"><path d=\"M 9.75 19.5 C 4.365 19.5 0 15.135 0 9.75 C 0 4.365 4.365 0 9.75 0 C 15.135 0 19.5 4.365 19.5 9.75 C 19.5 15.135 15.135 19.5 9.75 19.5 Z M 9.75 18.5 C 14.582 18.5 18.5 14.582 18.5 9.75 C 18.5 4.918 14.582 1 9.75 1 C 4.918 1 1 4.918 1 9.75 C 1 14.582 4.918 18.5 9.75 18.5 Z M 6.75 8 C 6.06 8 5.5 7.44 5.5 6.75 C 5.5 6.06 6.06 5.5 6.75 5.5 C 7.44 5.5 8 6.06 8 6.75 C 8 7.44 7.44 8 6.75 8 Z M 9.75 16.5 C 6.022 16.5 3 13.076 3 11 C 3 9.059 6.022 11 9.75 11 C 13.478 11 16.5 9.096 16.5 11 C 16.5 13.022 13.478 16.5 9.75 16.5 Z M 12.75 8 C 12.06 8 11.5 7.44 11.5 6.75 C 11.5 6.06 12.06 5.5 12.75 5.5 C 13.44 5.5 14 6.06 14 6.75 C 14 7.44 13.44 8 12.75 8 Z M 4.5 11.5 C 4.5 11.768 4.658 12.149 4.852 12.333 C 4.852 12.333 5.547 13.5 9.795 13.5 C 14.043 13.5 14.648 12.348 14.648 12.348 C 14.85 12.172 15 11.776 15 11.5 C 15 11.232 14.793 11.084 14.537 11.188 C 14.537 11.188 12.88 12 9.863 12 C 6.846 12 4.965 11.174 4.965 11.174 C 4.699 11.078 4.5 11.224 4.5 11.5 Z\" fill=\"rgb(0,0,0)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 20,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GyIE4Prmg",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.29999999999999999,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-nuE2oHPxK",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N2wGz9NVN",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "X",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:23px;letter-spacing:-0.55px;line-height:1.2\"><span data-text=\"true\">X<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 27,
                      "width" : 32
                    },
                    "width" : 31
                  },
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N2wGz9NVN",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.30533333333333335,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-sbciiMPnh",
                "intrinsicHeight" : 20,
                "intrinsicWidth" : 11,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-iob8awZhF",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"11\" height=\"20\"><path d=\"M 2 19 L 5 19 L 5 15.978 C 2.197 15.725 0 13.369 0 10.5 L 0 7 L 1 7 L 1 10.5 C 1 12.985 3.015 15 5.5 15 C 7.985 15 10 12.985 10 10.5 L 10 7 L 11 7 L 11 10.5 C 11 13.369 8.803 15.725 6 15.978 L 6 19 L 9 19 L 9 20 L 2 20 Z M 2 3.5 C 2 1.567 3.567 0 5.5 0 C 7.433 0 9 1.567 9 3.5 L 9 10.5 C 9 12.433 7.433 14 5.5 14 C 3.567 14 2 12.433 2 10.5 Z M 3 10.5 C 3 11.881 4.119 13 5.5 13 C 6.881 13 8 11.881 8 10.5 L 8 3.5 C 8 2.119 6.881 1 5.5 1 C 4.119 1 3 2.119 3 3.5 Z\" fill=\"hsl(0, 0%, 0%)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 11,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-iob8awZhF",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.93066666666666664,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.48809523809523808,
                "centerAnchorY" : 0.51190476190476186,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 17,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-oihKzOsfn",
                "intrinsicHeight" : 17,
                "intrinsicWidth" : 22.5,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-VcmbU9EJB",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"22.5\" height=\"17\"><path d=\"M 7.751 14.832 C 8.162 15.2 8.949 15.5 9.502 15.5 L 18.999 15.5 C 20.101 15.5 21 14.605 21 13.502 L 21 3.498 C 21 2.397 20.104 1.5 18.999 1.5 L 9.502 1.5 C 8.945 1.5 8.168 1.796 7.758 2.162 C 7.758 2.162 1.5 7.673 1.5 8.5 C 1.5 9.327 7.751 14.832 7.751 14.832 Z M 13.25 7.439 L 10.776 4.966 C 10.48 4.669 10.007 4.672 9.714 4.964 C 9.42 5.259 9.422 5.733 9.716 6.026 L 12.189 8.5 L 9.716 10.974 C 9.419 11.27 9.422 11.743 9.714 12.036 C 10.009 12.33 10.483 12.328 10.776 12.034 L 13.25 9.561 L 15.724 12.034 C 16.02 12.331 16.493 12.328 16.786 12.036 C 17.08 11.741 17.078 11.267 16.784 10.974 L 14.311 8.5 L 16.784 6.026 C 17.081 5.73 17.078 5.257 16.786 4.964 C 16.491 4.67 16.017 4.672 15.724 4.966 Z M 3.211 4.3 C 3.337 4.179 3.466 4.056 3.597 3.932 C 4.291 3.274 5.033 2.592 5.775 1.922 C 6.034 1.688 6.275 1.472 6.491 1.28 C 6.622 1.164 6.715 1.081 6.76 1.042 C 7.446 0.43 8.579 0 9.502 0 L 18.999 0 C 20.931 0 22.5 1.568 22.5 3.498 L 22.5 13.502 C 22.5 15.434 20.93 17 18.999 17 L 9.502 17 C 8.58 17 7.438 16.565 6.759 15.958 C 6.709 15.913 6.615 15.831 6.485 15.715 C 6.269 15.522 6.028 15.307 5.769 15.073 C 5.028 14.404 4.287 13.722 3.594 13.065 C 3.462 12.941 3.334 12.818 3.208 12.697 C 0.764 10.355 0 9.513 0 8.5 C 0 7.487 0.764 6.645 3.211 4.3 Z\" fill=\"rgb(0,0,0)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 23,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-VcmbU9EJB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.55466666666666664,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PnMgDSE2c",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rhF7m3h7i",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LETTERSPACING:0.07",
                          "LINEHEIGHT:1.2",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:16",
                          "FONT:__SF-UI-Text-Regular__"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LETTERSPACING:0.07"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Text-Regular__"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "space",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSText&quot;, &quot;SFProText-Regular&quot;, &quot;SFUIText-Regular&quot;, &quot;.SFUIText&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:16px;letter-spacing:0.07px;line-height:1.2\"><span data-text=\"true\">space<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 19,
                      "width" : 145
                    },
                    "width" : 144
                  },
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 144,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rhF7m3h7i",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 144,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.872,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.47619047619047616,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-S3ciKMtmu",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-gIg3TGrkV",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LETTERSPACING:0.07",
                          "LINEHEIGHT:1.2",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:16",
                          "FONT:__SF-UI-Text-Regular__"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "LETTERSPACING:0.07"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Text-Regular__"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "return",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"6dgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6dgir-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSText&quot;, &quot;SFProText-Regular&quot;, &quot;SFUIText-Regular&quot;, &quot;.SFUIText&quot;, sans-serif;-webkit-text-fill-color:#000000;font-size:16px;letter-spacing:0.07px;line-height:1.2\"><span data-text=\"true\">return<\/span><\/span><\/div><\/div>",
                    "os" : "10_14",
                    "size" : {
                      "height" : 19,
                      "width" : 87
                    },
                    "width" : 86
                  },
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 86,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-gIg3TGrkV",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 86,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : true,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(204, 206, 211, 0.76)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 216,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : "@framer\/edoardo.ios-kit",
        "isMaster" : true,
        "isTarget" : false,
        "left" : 0,
        "locked" : false,
        "name" : "Keyboards \/ Light \/ Alphabetic Uppercase",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 0,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/Input.tsx_Input",
        "codeComponentProps" : {
          "backgroundColor" : "#FFF",
          "border" : "rgba(0,0,0,0.1)",
          "borderWidth" : 1,
          "focusColor" : "#09F",
          "fontSize" : 15,
          "multiLine" : false,
          "padding" : 15,
          "paddingBottom" : 15,
          "paddingLeft" : 15,
          "paddingPerSide" : false,
          "paddingRight" : 15,
          "paddingTop" : 15,
          "password" : false,
          "placeholder" : "Type something…",
          "radius" : 10,
          "textColor" : "#000",
          "value" : ""
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 50,
        "heightType" : 0,
        "id" : "hK6eZdGHI",
        "intrinsicHeight" : 50,
        "intrinsicWidth" : 300,
        "left" : 1846,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "top" : -154,
        "visible" : true,
        "width" : 300,
        "widthType" : 0
      }
    ],
    "guidesX" : [

    ],
    "guidesY" : [

    ],
    "id" : "pp8wH1ime",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 54
}
designs["@framer/ehmorris.remote-image-images-via-url"] = {
  "version" : 47,
  "root" : {
    "parentid" : null,
    "children" : [

    ],
    "id" : "nJjVWBcTa",
    "visible" : false,
    "__class" : "RootNode",
    "originalid" : null,
    "name" : null
  }
}
designs["@framer/kasimir.iphone-x-kit"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 0,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.97906403940886699,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Home Button (iPhone X)\/HomeButton.tsx_HomeButton",
            "codeComponentProps" : {
              "appearance" : "light"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 34,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "A8cBFZLlt",
            "intrinsicHeight" : 34,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.027093596059113302,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : true,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "i1aU4t1lY",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.081280788177339899,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "tCjkHu7uc",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 44,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.1354679802955665,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "background",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "cIBZk7siU",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 88,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.18965517241379309,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 75,
              "liveTime" : true,
              "location" : "locating",
              "mode" : "transparent",
              "signalLevel" : 65,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 83
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "h3gzQLMjO",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 132,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.24384236453201971,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#4CD964",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "tjfZTS6LJ",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 176,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.29802955665024633,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#007AFF",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "F2nJP_sfo",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 220,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.35221674876847292,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#FF3B30",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "xUh5EhFC0",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 264,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.40640394088669951,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "Home",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "O8yObNUA3",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 308,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.4605911330049261,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : false,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : true,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "pBZnZtoD1",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 352,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 372,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.51477832512315269,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : false,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "L_YdcuxK1",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 328,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.56896551724137934,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : false,
              "location" : "background",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "UmNTaN9YA",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 284,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.62315270935960587,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 75,
              "liveTime" : false,
              "location" : "locating",
              "mode" : "transparent",
              "signalLevel" : 65,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 83
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "vcCvbmzU7",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 240,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.67733990147783252,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "#4CD964",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "GNlo3dXzW",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 196,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.73152709359605916,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "#007AFF",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "wKDfyvMZH",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 152,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.7857142857142857,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "#FF3B30",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "uCKOjkXOc",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 108,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.83990147783251234,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "Home",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "VnTBD1KJx",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleIPhoneXS",
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@2x",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@3x",
            "nameExtensionMode" : "Suffix",
            "scale" : 3,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 8%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 812,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "ttqq1MQ7C",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 982,
        "locked" : false,
        "name" : "Frame",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "qjDASOFhc",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleIPhoneXS",
          "hand" : "Hand 2",
          "responsive" : false,
          "rotate" : false,
          "skin" : "",
          "touch" : true,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 180,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.528,
        "centerAnchorY" : 1.2099753694581281,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 0,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.95466666666666666,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Home Button (iPhone X)\/HomeButton.tsx_HomeButton",
            "codeComponentProps" : {
              "appearance" : "light"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 34,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "SQdCTDe2s",
            "intrinsicHeight" : 34,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "p4Oh6x5CK",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 812,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.027093596059113302,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "ZdSKXZzId",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "p4Oh6x5CK",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleIPhoneXS",
        "exportOptions" : [

        ],
        "fillColor" : "hsl(0, 0%, 8%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 375,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "p4Oh6x5CK",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 982,
        "locked" : false,
        "name" : "Frame",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "qjDASOFhc",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleIPhoneXS",
          "hand" : "Hand 2",
          "responsive" : false,
          "rotate" : true,
          "skin" : "",
          "touch" : true,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 1066,
        "visible" : true,
        "width" : 812,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.4493333333333334,
        "centerAnchorY" : 0.64162561576354682,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 0,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.97906403940886699,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Home Button (iPhone X)\/HomeButton.tsx_HomeButton",
            "codeComponentProps" : {
              "appearance" : "dark"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 34,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "gViZ9Q31r",
            "intrinsicHeight" : 34,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.027093596059113302,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 48,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 75,
              "time" : "",
              "twelveHour" : true,
              "wifiLevel" : 98
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "MeNF1cNVZ",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.081280788177339899,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "BJcsBccBE",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 44,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.1354679802955665,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "background",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "MjcmPeJ6a",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 88,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.18965517241379309,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 75,
              "liveTime" : true,
              "location" : "locating",
              "mode" : "transparent",
              "signalLevel" : 65,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 83
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "e3U4Zvim2",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 132,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.24384236453201971,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#4CD964",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "A7cfvblPm",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 176,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.29802955665024633,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#007AFF",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "hezBc2mke",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 220,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.35221674876847292,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#FF3B30",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "Lo9c8KmGK",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 264,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.40640394088669951,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "Home",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "IUxuCov27",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 308,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleIPhoneXS",
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@2x",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@3x",
            "nameExtensionMode" : "Suffix",
            "scale" : 3,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 100%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 812,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "Qo4O0xgIu",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 1419,
        "locked" : false,
        "name" : "Frame",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "qjDASOFhc",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleIPhoneXS",
          "hand" : "Hand 2",
          "responsive" : false,
          "rotate" : false,
          "skin" : "",
          "touch" : true,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 180,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      }
    ],
    "id" : "qjDASOFhc",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "visible" : false
  },
  "version" : 48
}

module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive .(t|j)s(x?)|.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.4-beta.0","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/benjamin.icon-generator"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/benjamin.icon-generator */ "framer-package-loader!@framer/benjamin.icon-generator")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/benjamin.icon-generator"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@framer/framer.device-hand-iphone-1":"^1.0.0","@framer/framer.device-skin-apple-iphone-x-silver":"^1.0.0","@types/react":"^16.8.23"},"peerDependencies":{"framer":"^0.10.0 || ^1","react":"^16.8.0","react-dom":"^16.8.0"},"framer":{"id":"f5829b53-b134-4faf-be07-21309a916749","displayName":"Icon Generator"},"author":"Benjamin den Boer","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.4","@fortawesome/free-regular-svg-icons":"^5.3.1","@fortawesome/react-fontawesome":"^0.1.2","@material-ui/core":"^4.2.1","feather-icons":"^4.21.0","react-feather":"^2.0.3","webfontloader":"^1.6.28"},"keywords":["icons","icon","feather","material","fontawesome","svg"],"name":"@framer/benjamin.icon-generator","version":"1.15.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/benjamin.input"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/benjamin.input */ "framer-package-loader!@framer/benjamin.input")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/benjamin.input"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.9.5 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"f39b105e-588c-479a-aa1e-30973cfe2f5e","displayName":"Input"},"author":"Benjamin den Boer","dependencies":{"styled-components":"^4.0.3"},"keywords":["input","form","textarea","web"],"name":"@framer/benjamin.input","version":"1.3.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/ehmorris.remote-image-images-via-url"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/ehmorris.remote-image-images-via-url */ "framer-package-loader!@framer/ehmorris.remote-image-images-via-url")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/ehmorris.remote-image-images-via-url"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.0"},"peerDependencies":{"framer":"^0.8.0","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"90695eee-490f-4b61-8d1e-4386a5d6cc99","displayName":"Remote Image: Images via URL"},"author":"Edwin Morris","keywords":["Image","Image Tag","Live Image","Image URL","Remote Image"],"dependencies":{},"name":"@framer/ehmorris.remote-image-images-via-url","version":"1.3.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/kasimir.iphone-x-kit"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/kasimir.iphone-x-kit */ "framer-package-loader!@framer/kasimir.iphone-x-kit")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/kasimir.iphone-x-kit"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","version":"1.21.0","devDependencies":{"@framer/framer.device-hand-iphone-2":"1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"0.10.1 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-skin-apple-iphone8-space-gray"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray */ "framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-skin-apple-iphone8-space-gray"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone8-space-gray","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@framer/framer.device-skin-apple-iphone8-space-gray\":\"^1.0.0\",\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0 || ^0.9\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"1dd77e6a-4a82-45c7-9982-4f64757d5d55\",\"displayName\":\"Stateful Grid\"},\"author\":\"Anton Kosarchyn\",\"dependencies\":{\"@framer/benjamin.icon-generator\":\"^1.15.0\",\"@framer/benjamin.input\":\"^1.3.0\",\"@framer/ehmorris.remote-image-images-via-url\":\"^1.3.0\",\"@framer/kasimir.iphone-x-kit\":\"^1.21.0\",\"use-resize-observer\":\"^4.0.0\"},\"name\":\"@framer/martiankid.stateful-grid\",\"version\":\"1.4.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/benjamin.icon-generator":
/*!************************************************************************!*\
  !*** external "framer-package-loader!@framer/benjamin.icon-generator" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_icon_generator__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/benjamin.icon-generator'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_icon_generator__;

/***/ }),

/***/ "framer-package-loader!@framer/benjamin.input":
/*!***************************************************************!*\
  !*** external "framer-package-loader!@framer/benjamin.input" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_input__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/benjamin.input'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_input__;

/***/ }),

/***/ "framer-package-loader!@framer/ehmorris.remote-image-images-via-url":
/*!*************************************************************************************!*\
  !*** external "framer-package-loader!@framer/ehmorris.remote-image-images-via-url" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_ehmorris_remote_image_images_via_url__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/ehmorris.remote-image-images-via-url'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_ehmorris_remote_image_images_via_url__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray":
/*!********************************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone8_space_gray__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone8_space_gray__;

/***/ }),

/***/ "framer-package-loader!@framer/kasimir.iphone-x-kit":
/*!*********************************************************************!*\
  !*** external "framer-package-loader!@framer/kasimir.iphone-x-kit" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_kasimir_iphone_x_kit__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/kasimir.iphone-x-kit'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_kasimir_iphone_x_kit__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "use-resize-observer":
/*!**************************************!*\
  !*** external "use-resize-observer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_use_resize_observer__;

/***/ })

/******/ });
});