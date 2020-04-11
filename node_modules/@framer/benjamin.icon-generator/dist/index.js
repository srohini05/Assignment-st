(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fortawesome/free-solid-svg-icons"), require("@fortawesome/react-fontawesome"), require("@material-ui/core/Icon"), require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-1"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver"); } catch(e) {} }()), require("react"), require("react-feather"), require("webfontloader"));
	else if(typeof define === 'function' && define.amd)
		define(["@fortawesome/free-solid-svg-icons", "@fortawesome/react-fontawesome", "@material-ui/core/Icon", "framer", "framer-package-loader!@framer/framer.device-hand-iphone-1", "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver", "react", "react-feather", "webfontloader"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@fortawesome/free-solid-svg-icons"), require("@fortawesome/react-fontawesome"), require("@material-ui/core/Icon"), require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-1"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver"); } catch(e) {} }()), require("react"), require("react-feather"), require("webfontloader")) : factory(root["@fortawesome/free-solid-svg-icons"], root["@fortawesome/react-fontawesome"], root["@material-ui/core/Icon"], root["Framer"], root["framer-package-loader!@framer/framer.device-hand-iphone-1"], root["framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver"], root["React"], root["react-feather"], root["webfontloader"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__fortawesome_free_solid_svg_icons__, __WEBPACK_EXTERNAL_MODULE__fortawesome_react_fontawesome__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Icon__, __WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_silver__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_feather__, __WEBPACK_EXTERNAL_MODULE_webfontloader__) {
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

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Icon.tsx": "./code/Icon.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
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
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQTJFO0FBQzNFLGlEQUFpRDtBQUNqRCxzRUFBZ0U7QUFDaEUsMkRBQTBEO0FBQzFELDhDQUE2QztBQUM3Qyx5Q0FBd0M7QUFZeEMsTUFBTSxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQTtBQUMxQyxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQTtBQUVoQyxTQUFnQixJQUFJLENBQUMsS0FBWTs7SUFDN0IsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDeEUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQUU7WUFDMUIsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osT0FBTTthQUNUO1lBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNLEVBQUU7b0JBQ0osUUFBUSxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ2hDO2dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7O29CQUNiLG9CQUFvQixHQUFHLElBQUksQ0FBQTtvQkFDM0IsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUN0QjthQUNKLENBQUMsQ0FBQTtTQUNMO0tBQ0osRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUUzQixPQUFPLENBQ0g7UUFDSSxvQkFBQyxVQUFVLGtCQUFDLFVBQVUsRUFBRSxVQUFVLElBQU0sS0FBSyxFQUFJLENBQy9DLENBQ1QsQ0FBQTtDQUNKO0FBeEJELG9CQXdCQztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQVk7O0lBQzVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFF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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Icon_1 = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
const Icons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
const FeatherIcons = __webpack_require__(/*! react-feather */ "react-feather");
const WebFont = __webpack_require__(/*! webfontloader */ "webfontloader");
const materialIconsFont = "Material+Icons";
let materialFontIsLoaded = false;
function Icon(props) {
    window["__checkBudget__"]();
    const [fontLoaded, setFontLoaded] = React.useState(materialFontIsLoaded);
    React.useEffect(() => {
        window["__checkBudget__"]();
        if (props.set === "material") {
            if (fontLoaded) {
                return;
            }
            return WebFont.load({
                google: {
                    families: [materialIconsFont],
                },
                fontactive: () => {
                    window["__checkBudget__"]();
                    materialFontIsLoaded = true;
                    setFontLoaded(true);
                },
            });
        }
    }, [props.set, fontLoaded]);
    return (React.createElement("div", null,
        React.createElement(RenderIcon, Object.assign({ fontLoaded: fontLoaded }, props))));
}
exports.Icon = Icon;
function RenderIcon(props) {
    window["__checkBudget__"]();
    const { icon, width, height, color, set, fontLoaded } = props;
    let name = `${icon.toLowerCase()}`;
    let faName = "fa" + `${icon.charAt(0).toUpperCase()}` + `${icon.substr(1)}`;
    if (set === "feather") {
        name = icon
            .split("-")
            .map(piece => piece.charAt(0).toUpperCase() + piece.slice(1))
            .join("");
        const TagName = FeatherIcons[name];
        if (!TagName)
            return null;
        return (React.createElement(TagName, { icon: name, width: width, height: height, color: color }));
    }
    if (set === "material") {
        return (React.createElement(Icon_1.default, { style: {
                color: color,
                fontSize: width,
                height: height,
                width: width,
                fixedWidth: true,
            } }, fontLoaded ? name : ""));
    }
    if (set === "fontawesome") {
        return (React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: Icons[faName], style: {
                width: width,
                height: height,
            }, color: color, fixedWidth: true }));
    }
    return null;
}
Icon.defaultProps = {
    icon: "flag",
    width: 24,
    height: 24,
    color: "#000",
    set: "material",
};
framer_1.addPropertyControls(Icon, {
    set: {
        type: framer_1.ControlType.Enum,
        title: "Set",
        options: ["feather", "material", "fontawesome"],
        optionTitles: ["Feather", "Material", "Font Awesome"],
    },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    color: { type: framer_1.ControlType.Color, title: "Color" },
});
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


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

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template


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
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

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
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-hand-iphone-1"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-1 */ "framer-package-loader!@framer/framer.device-hand-iphone-1")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-hand-iphone-1"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-1","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-skin-apple-iphone-x-silver"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver */ "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-skin-apple-iphone-x-silver"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-x-silver","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
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
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, keywords, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@framer/framer.device-hand-iphone-1\":\"^1.0.0\",\"@framer/framer.device-skin-apple-iphone-x-silver\":\"^1.0.0\",\"@types/react\":\"^16.8.23\"},\"peerDependencies\":{\"framer\":\"^0.10.0 || ^1\",\"react\":\"^16.8.0\",\"react-dom\":\"^16.8.0\"},\"framer\":{\"id\":\"f5829b53-b134-4faf-be07-21309a916749\",\"displayName\":\"Icon Generator\"},\"author\":\"Benjamin den Boer\",\"dependencies\":{\"@fortawesome/fontawesome-free\":\"^5.12.1\",\"@fortawesome/fontawesome-svg-core\":\"^1.2.27\",\"@fortawesome/free-regular-svg-icons\":\"^5.12.1\",\"@fortawesome/free-solid-svg-icons\":\"^5.12.1\",\"@fortawesome/react-fontawesome\":\"^0.1.9\",\"@material-ui/core\":\"^4.9.5\",\"@material-ui/icons\":\"^4.9.1\",\"feather-icons\":\"^4.21.0\",\"react-feather\":\"^2.0.3\",\"warning\":\"^4.0.3\",\"webfontloader\":\"^1.6.28\"},\"keywords\":[\"icons\",\"icon\",\"feather\",\"material\",\"fontawesome\",\"svg\"],\"name\":\"@framer/benjamin.icon-generator\",\"version\":\"1.20.0\"}");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fortawesome_free_solid_svg_icons__;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fortawesome_react_fontawesome__;

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Icon__;

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-hand-iphone-1":
/*!****************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-hand-iphone-1" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-1'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver":
/*!*****************************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver" ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_silver__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_silver__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_feather__;

/***/ }),

/***/ "webfontloader":
/*!********************************!*\
  !*** external "webfontloader" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_webfontloader__;

/***/ })

/******/ });
});