"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_EnjoyMint_main_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./pages/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_images_polygon3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/polygon3.png */ "./public/images/polygon3.png");
/* harmony import */ var _public_images_MAINLOGO_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/MAINLOGO.png */ "./public/images/MAINLOGO.png");
/* harmony import */ var _public_images_fav_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fav.png */ "./public/images/fav.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\EnjoyMint-main\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_EnjoyMint_main_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function KryptoBirdMarketplace(_ref) {
  var _this = this,
      _fotterNavigation$soc;

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };
  var navigation = [{
    name: "Main Marketplace ",
    href: "/",
    current: false
  }, {
    name: "Mint Tokens",
    href: "/mint-item",
    current: false
  }, {
    name: "My NFTS",
    href: "/my-nfts",
    current: false
  }, {
    name: "Account Dashboard",
    href: "/account-dashboard",
    current: false
  }];
  var fotterNavigation = {
    support: [{
      name: "All NFTs",
      href: "#"
    }, {
      name: "How It Works",
      href: "#"
    }, {
      name: "Create",
      href: "#"
    }, {
      name: " Privacy & Terms",
      href: "#"
    }],
    company: [{
      name: "Help Center",
      href: "#"
    }, {
      name: "Partners",
      href: "#"
    }, {
      name: "Suggestions",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Newsletter",
      href: "#"
    }],
    social: [{
      name: "Facebook",
      href: "#",
      icon: function icon(props) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, props), {}, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
            fillRule: "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
            clipRule: "evenodd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this);
      }
    }, {
      name: "Instagram",
      href: "#",
      icon: function icon(props) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, props), {}, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
            fillRule: "evenodd",
            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
            clipRule: "evenodd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this);
      }
    }, {
      name: "Twitter",
      href: "#",
      icon: function icon(props) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, props), {}, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
            d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this);
      }
    }, {
      name: "GitHub",
      href: "#",
      icon: function icon(props) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, props), {}, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
            fillRule: "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            clipRule: "evenodd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this);
      }
    }, {
      name: "Dribbble",
      href: "#",
      icon: function icon(props) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("svg", _objectSpread(_objectSpread({
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, props), {}, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("path", {
            fillRule: "evenodd",
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
            clipRule: "evenodd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this);
      }
    }]
  };

  function classNames() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    return classes.filter(Boolean).join(" ");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure, {
      as: "nav",
      className: "  w-full ",
      style: {
        background: "#FDCC33"
      },
      children: function children(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "flex justify-between h-16",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "flex",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "-ml-2 mr-2 flex items-center md:hidden",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Button, {
                    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "sr-only",
                      children: "Open main menu"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.XIcon, {
                      className: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 25
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {
                      className: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "flex-shrink-0 flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "pt-2 lg:block md:hidden hidden ",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                      src: _public_images_MAINLOGO_png__WEBPACK_IMPORTED_MODULE_8__.default,
                      width: 350,
                      height: 75
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "pt-2 lg:hidden md:block sm:block",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                        src: _public_images_fav_png__WEBPACK_IMPORTED_MODULE_9__.default,
                        width: 80,
                        height: 75
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "hidden md:ml-6 md:flex md:items-center md:space-x-4",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                      href: item.href,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        className: classNames(item.current ? "bg-gray-900 text-black" : "text-black hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-semibold	 text-black cursor-pointer "),
                        children: item.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 25
                      }, _this)
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "pl-5 flex-shrink-0 ",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/account-dashboard",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
                      type: "button",
                      className: "flex items-center relative inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                        className: "mr-2",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                          src: _public_images_polygon3_png__WEBPACK_IMPORTED_MODULE_7__.default,
                          width: 30,
                          height: 25
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 182,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        className: "-mt-1",
                        children: " Connect Wallet"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Panel, {
            className: "md:hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: " px-2 pt-2 pb-3 space-y-1 sm:px-3 ",
              children: navigation.map(function (item) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: item.href,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                    className: classNames(item.current ? "bg-gray-900 text-white" : "text-black hover:bg-gray-700 hover:text-white", " text-black  px-3 py-2 rounded-md text-base font-medium cursor-pointer"),
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 21
                  }, _this)
                }, item.name, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this)]
        }, void 0, true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("footer", {
      className: "bg-white border-t",
      "aria-labelledby": "footer-heading",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
        id: "footer-heading",
        className: "sr-only",
        children: "Footer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "pb-8 xl:grid xl:grid-cols-4 xl:gap-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "grid grid-cols-2 gap-8 xl:col-span-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "md:grid md:grid-cols-2 md:gap-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                  className: "text-sm font-semibold text-gray-500 tracking-wider uppercase",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                    className: "font-bold text-xl",
                    children: " Enjoymint NFT Marketplace"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                  role: "list",
                  className: "mt-4 space-y-2 ",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                    className: "text-base text-gray-600 hover:text-gray-900",
                    children: "An exclusive digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and explore quality digital items."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mt-12 md:mt-0",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                  className: "text-sm font-semibold text-indigo-700 tracking-wider uppercase",
                  children: "Useful Links"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                  role: "list",
                  className: "mt-4 space-y-2",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                      href: item.href,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          className: "text-base text-gray-700 hover:text-gray-900 cursor-pointer",
                          children: item.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 258,
                          columnNumber: 27
                        }, _this)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 257,
                        columnNumber: 25
                      }, _this)
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 256,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "md:grid md:grid-cols-2 md:gap-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                  className: "text-sm font-semibold text-indigo-700 tracking-wider uppercase",
                  children: "Community"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                  role: "list",
                  className: "mt-4 space-y-2",
                  children: fotterNavigation.company.map(function (item) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                        href: item.href,
                        className: "text-base text-gray-700 hover:text-gray-900",
                        children: item.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 275,
                        columnNumber: 25
                      }, _this)
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "mt-12 md:mt-0",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "mt-12 xl:mt-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                    className: "text-sm font-semibold text-indigo-500 tracking-wider uppercase",
                    children: "Language & Currency"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
                    className: "mt-4 sm:max-w-xs",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("fieldset", {
                      className: "w-full",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                        htmlFor: "language",
                        className: "sr-only",
                        children: "Language"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 292,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                        className: "relative",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("select", {
                          id: "language",
                          name: "language",
                          className: "appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          defaultValue: "English",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "English"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 302,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "French"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 303,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "German"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "Japanese"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 305,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "Spanish"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 306,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 296,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          className: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {
                            className: "h-4 w-4 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 309,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 308,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 295,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("fieldset", {
                      className: "mt-4 w-full",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                        htmlFor: "currency",
                        className: "sr-only",
                        children: "Currency"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 317,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                        className: "relative",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("select", {
                          id: "currency",
                          name: "currency",
                          className: "appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          defaultValue: "AUD",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "ARS"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 327,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "AUD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 328,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "CAD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 329,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "CHF"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 330,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "EUR"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 331,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "GBP"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 332,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "JPY"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 333,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "USD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 334,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 321,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          className: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {
                            className: "h-4 w-4 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 337,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 336,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 320,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "flex space-x-6 md:order-2",
            children: (_fotterNavigation$soc = fotterNavigation.social) === null || _fotterNavigation$soc === void 0 ? void 0 : _fotterNavigation$soc.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                href: item.href,
                className: "text-gray-400 hover:text-gray-500",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  className: "sr-only",
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(item.icon, {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 19
                }, _this)]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: "mt-8 text-base text-indigo-500 md:mt-0 md:order-1",
            children: "\xA9 2022 Enjoymint, Inc. All rights reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

_c = KryptoBirdMarketplace;
/* harmony default export */ __webpack_exports__["default"] = (KryptoBirdMarketplace);

var _c;

$RefreshReg$(_c, "KryptoBirdMarketplace");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZjcwZDgxOTQ5ZGUwNTc4NDc1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTUyxxQkFBVCxPQUF5RDtBQUFBO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2RCxNQUFNQyxJQUFJLEdBQUc7QUFDWEMsSUFBQUEsSUFBSSxFQUFFLFVBREs7QUFFWEMsSUFBQUEsS0FBSyxFQUFFLGlCQUZJO0FBR1hDLElBQUFBLFFBQVEsRUFDTjtBQUpTLEdBQWI7QUFNQSxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUgsSUFBQUEsSUFBSSxFQUFFLG1CQUFSO0FBQTZCSSxJQUFBQSxJQUFJLEVBQUUsR0FBbkM7QUFBd0NDLElBQUFBLE9BQU8sRUFBRTtBQUFqRCxHQURpQixFQUVqQjtBQUFFTCxJQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkksSUFBQUEsSUFBSSxFQUFFLFlBQTdCO0FBQTJDQyxJQUFBQSxPQUFPLEVBQUU7QUFBcEQsR0FGaUIsRUFHakI7QUFBRUwsSUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJJLElBQUFBLElBQUksRUFBRSxVQUF6QjtBQUFxQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQTlDLEdBSGlCLEVBSWpCO0FBQUVMLElBQUFBLElBQUksRUFBRSxtQkFBUjtBQUE2QkksSUFBQUEsSUFBSSxFQUFFLG9CQUFuQztBQUF5REMsSUFBQUEsT0FBTyxFQUFFO0FBQWxFLEdBSmlCLENBQW5CO0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJDLElBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVQLE1BQUFBLElBQUksRUFBRSxVQUFSO0FBQW9CSSxNQUFBQSxJQUFJLEVB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L19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4vYXBwLmNzc1wiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBEaXNjbG9zdXJlIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnVJY29uLCBYSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBQb2xnb25Mb2dvIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3BvbHlnb24zLnBuZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9NQUlOTE9HTy5wbmdcIjtcclxuaW1wb3J0IExvZ28yIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2Zhdi5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIEtyeXB0b0JpcmRNYXJrZXRwbGFjZSh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCB1c2VyID0ge1xyXG4gICAgbmFtZTogXCJUb20gQ29va1wiLFxyXG4gICAgZW1haWw6IFwidG9tQGV4YW1wbGUuY29tXCIsXHJcbiAgICBpbWFnZVVybDpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIixcclxuICB9O1xyXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBbXHJcbiAgICB7IG5hbWU6IFwiTWFpbiBNYXJrZXRwbGFjZSBcIiwgaHJlZjogXCIvXCIsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgICB7IG5hbWU6IFwiTWludCBUb2tlbnNcIiwgaHJlZjogXCIvbWludC1pdGVtXCIsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgICB7IG5hbWU6IFwiTXkgTkZUU1wiLCBocmVmOiBcIi9teS1uZnRzXCIsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgICB7IG5hbWU6IFwiQWNjb3VudCBEYXNoYm9hcmRcIiwgaHJlZjogXCIvYWNjb3VudC1kYXNoYm9hcmRcIiwgY3VycmVudDogZmFsc2UgfSxcclxuICBdO1xyXG4gIGNvbnN0IGZvdHRlck5hdmlnYXRpb24gPSB7XHJcbiAgICBzdXBwb3J0OiBbXHJcbiAgICAgIHsgbmFtZTogXCJBbGwgTkZUc1wiLCBocmVmOiBcIiNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiSG93IEl0IFdvcmtzXCIsIGhyZWY6IFwiI1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJDcmVhdGVcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIiBQcml2YWN5ICYgVGVybXNcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgIF0sXHJcbiAgICBjb21wYW55OiBbXHJcbiAgICAgIHsgbmFtZTogXCJIZWxwIENlbnRlclwiLCBocmVmOiBcIiNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiUGFydG5lcnNcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlN1Z2dlc3Rpb25zXCIsIGhyZWY6IFwiI1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJCbG9nXCIsIGhyZWY6IFwiI1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJOZXdzbGV0dGVyXCIsIGhyZWY6IFwiI1wiIH0sXHJcbiAgICBdLFxyXG5cclxuICAgIHNvY2lhbDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGYWNlYm9va1wiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgICAgIGljb246IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTIyIDEyYzAtNS41MjMtNC40NzctMTAtMTAtMTBTMiA2LjQ3NyAyIDEyYzAgNC45OTEgMy42NTcgOS4xMjggOC40MzggOS44Nzh2LTYuOTg3aC0yLjU0VjEyaDIuNTRWOS43OTdjMC0yLjUwNiAxLjQ5Mi0zLjg5IDMuNzc3LTMuODkgMS4wOTQgMCAyLjIzOC4xOTUgMi4yMzguMTk1djIuNDZoLTEuMjZjLTEuMjQzIDAtMS42My43NzEtMS42MyAxLjU2MlYxMmgyLjc3M2wtLjQ0MyAyLjg5aC0yLjMzdjYuOTg4QzE4LjM0MyAyMS4xMjggMjIgMTYuOTkxIDIyIDEyelwiXHJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkluc3RhZ3JhbVwiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgICAgIGljb246IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTEyLjMxNSAyYzIuNDMgMCAyLjc4NC4wMTMgMy44MDguMDYgMS4wNjQuMDQ5IDEuNzkxLjIxOCAyLjQyNy40NjVhNC45MDIgNC45MDIgMCAwMTEuNzcyIDEuMTUzIDQuOTAyIDQuOTAyIDAgMDExLjE1MyAxLjc3MmMuMjQ3LjYzNi40MTYgMS4zNjMuNDY1IDIuNDI3LjA0OCAxLjA2Ny4wNiAxLjQwNy4wNiA0LjEyM3YuMDhjMCAyLjY0My0uMDEyIDIuOTg3LS4wNiA0LjA0My0uMDQ5IDEuMDY0LS4yMTggMS43OTEtLjQ2NSAyLjQyN2E0LjkwMiA0LjkwMiAwIDAxLTEuMTUzIDEuNzcyIDQuOTAyIDQuOTAyIDAgMDEtMS43NzIgMS4xNTNjLS42MzYuMjQ3LTEuMzYzLjQxNi0yLjQyNy40NjUtMS4wNjcuMDQ4LTEuNDA3LjA2LTQuMTIzLjA2aC0uMDhjLTIuNjQzIDAtMi45ODctLjAxMi00LjA0My0uMDYtMS4wNjQtLjA0OS0xLjc5MS0uMjE4LTIuNDI3LS40NjVhNC45MDIgNC45MDIgMCAwMS0xLjc3Mi0xLjE1MyA0LjkwMiA0LjkwMiAwIDAxLTEuMTUzLTEuNzcyYy0uMjQ3LS42MzYtLjQxNi0xLjM2My0uNDY1LTIuNDI3LS4wNDctMS4wMjQtLjA2LTEuMzc5LS4wNi0zLjgwOHYtLjYzYzAtMi40My4wMTMtMi43ODQuMDYtMy44MDguMDQ5LTEuMDY0LjIxOC0xLjc5MS40NjUtMi40MjdhNC45MDIgNC45MDIgMCAwMTEuMTUzLTEuNzcyQTQuOTAyIDQuOTAyIDAgMDE1LjQ1IDIuNTI1Yy42MzYtLjI0NyAxLjM2My0uNDE2IDIuNDI3LS40NjVDOC45MDEgMi4wMTMgOS4yNTYgMiAxMS42ODUgMmguNjN6bS0uMDgxIDEuODAyaC0uNDY4Yy0yLjQ1NiAwLTIuNzg0LjAxMS0zLjgwNy4wNTgtLjk3NS4wNDUtMS41MDQuMjA3LTEuODU3LjM0NC0uNDY3LjE4Mi0uOC4zOTgtMS4xNS43NDgtLjM1LjM1LS41NjYuNjgzLS43NDggMS4xNS0uMTM3LjM1My0uMy44ODItLjM0NCAxLjg1Ny0uMDQ3IDEuMDIzLS4wNTggMS4zNTEtLjA1OCAzLjgwN3YuNDY4YzAgMi40NTYuMDExIDIuNzg0LjA1OCAzLjgwNy4wNDUuOTc1LjIwNyAxLjUwNC4zNDQgMS44NTcuMTgyLjQ2Ni4zOTkuOC43NDggMS4xNS4zNS4zNS42ODMuNTY2IDEuMTUuNzQ4LjM1My4xMzcuODgyLjMgMS44NTcuMzQ0IDEuMDU0LjA0OCAxLjM3LjA1OCA0LjA0MS4wNThoLjA4YzIuNTk3IDAgMi45MTctLjAxIDMuOTYtLjA1OC45NzYtLjA0NSAxLjUwNS0uMjA3IDEuODU4LS4zNDQuNDY2LS4xODIuOC0uMzk4IDEuMTUtLjc0OC4zNS0uMzUuNTY2LS42ODMuNzQ4LTEuMTUuMTM3LS4zNTMuMy0uODgyLjM0NC0xLjg1Ny4wNDgtMS4wNTUuMDU4LTEuMzcuMDU4LTQuMDQxdi0uMDhjMC0yLjU5Ny0uMDEtMi45MTctLjA1OC0zLjk2LS4wNDUtLjk3Ni0uMjA3LTEuNTA1LS4zNDQtMS44NThhMy4wOTcgMy4wOTcgMCAwMC0uNzQ4LTEuMTUgMy4wOTggMy4wOTggMCAwMC0xLjE1LS43NDhjLS4zNTMtLjEzNy0uODgyLS4zLTEuODU3LS4zNDQtMS4wMjMtLjA0Ny0xLjM1MS0uMDU4LTMuODA3LS4wNTh6TTEyIDYuODY1YTUuMTM1IDUuMTM1IDAgMTEwIDEwLjI3IDUuMTM1IDUuMTM1IDAgMDEwLTEwLjI3em0wIDEuODAyYTMuMzMzIDMuMzMzIDAgMTAwIDYuNjY2IDMuMzMzIDMuMzMzIDAgMDAwLTYuNjY2em01LjMzOC0zLjIwNWExLjIgMS4yIDAgMTEwIDIuNCAxLjIgMS4yIDAgMDEwLTIuNHpcIlxyXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJUd2l0dGVyXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk04LjI5IDIwLjI1MWM3LjU0NyAwIDExLjY3NS02LjI1MyAxMS42NzUtMTEuNjc1IDAtLjE3OCAwLS4zNTUtLjAxMi0uNTNBOC4zNDggOC4zNDggMCAwMDIyIDUuOTJhOC4xOSA4LjE5IDAgMDEtMi4zNTcuNjQ2IDQuMTE4IDQuMTE4IDAgMDAxLjgwNC0yLjI3IDguMjI0IDguMjI0IDAgMDEtMi42MDUuOTk2IDQuMTA3IDQuMTA3IDAgMDAtNi45OTMgMy43NDMgMTEuNjUgMTEuNjUgMCAwMS04LjQ1Ny00LjI4NyA0LjEwNiA0LjEwNiAwIDAwMS4yNyA1LjQ3N0E0LjA3MiA0LjA3MiAwIDAxMi44IDkuNzEzdi4wNTJhNC4xMDUgNC4xMDUgMCAwMDMuMjkyIDQuMDIyIDQuMDk1IDQuMDk1IDAgMDEtMS44NTMuMDcgNC4xMDggNC4xMDggMCAwMDMuODM0IDIuODVBOC4yMzMgOC4yMzMgMCAwMTIgMTguNDA3YTExLjYxNiAxMS42MTYgMCAwMDYuMjkgMS44NFwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJHaXRIdWJcIixcclxuICAgICAgICBocmVmOiBcIiNcIixcclxuICAgICAgICBpY29uOiAocHJvcHMpID0+IChcclxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDc3IDIgMiA2LjQ4NCAyIDEyLjAxN2MwIDQuNDI1IDIuODY1IDguMTggNi44MzkgOS41MDQuNS4wOTIuNjgyLS4yMTcuNjgyLS40ODMgMC0uMjM3LS4wMDgtLjg2OC0uMDEzLTEuNzAzLTIuNzgyLjYwNS0zLjM2OS0xLjM0My0zLjM2OS0xLjM0My0uNDU0LTEuMTU4LTEuMTEtMS40NjYtMS4xMS0xLjQ2Ni0uOTA4LS42Mi4wNjktLjYwOC4wNjktLjYwOCAxLjAwMy4wNyAxLjUzMSAxLjAzMiAxLjUzMSAxLjAzMi44OTIgMS41MyAyLjM0MSAxLjA4OCAyLjkxLjgzMi4wOTItLjY0Ny4zNS0xLjA4OC42MzYtMS4zMzgtMi4yMi0uMjUzLTQuNTU1LTEuMTEzLTQuNTU1LTQuOTUxIDAtMS4wOTMuMzktMS45ODggMS4wMjktMi42ODgtLjEwMy0uMjUzLS40NDYtMS4yNzIuMDk4LTIuNjUgMCAwIC44NC0uMjcgMi43NSAxLjAyNkE5LjU2NCA5LjU2NCAwIDAxMTIgNi44NDRjLjg1LjAwNCAxLjcwNS4xMTUgMi41MDQuMzM3IDEuOTA5LTEuMjk2IDIuNzQ3LTEuMDI3IDIuNzQ3LTEuMDI3LjU0NiAxLjM3OS4yMDIgMi4zOTguMSAyLjY1MS42NC43IDEuMDI4IDEuNTk1IDEuMDI4IDIuNjg4IDAgMy44NDgtMi4zMzkgNC42OTUtNC41NjYgNC45NDMuMzU5LjMwOS42NzguOTIuNjc4IDEuODU1IDAgMS4zMzgtLjAxMiAyLjQxOS0uMDEyIDIuNzQ3IDAgLjI2OC4xOC41OC42ODguNDgyQTEwLjAxOSAxMC4wMTkgMCAwMDIyIDEyLjAxN0MyMiA2LjQ4NCAxNy41MjIgMiAxMiAyelwiXHJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRyaWJiYmxlXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMGM1LjUxIDAgMTAtNC40OCAxMC0xMFMxNy41MSAyIDEyIDJ6bTYuNjA1IDQuNjFhOC41MDIgOC41MDIgMCAwMTEuOTMgNS4zMTRjLS4yODEtLjA1NC0zLjEwMS0uNjI5LTUuOTQzLS4yNzEtLjA2NS0uMTQxLS4xMi0uMjkzLS4xODQtLjQ0NWEyNS40MTYgMjUuNDE2IDAgMDAtLjU2NC0xLjIzNmMzLjE0NS0xLjI4IDQuNTc3LTMuMTI0IDQuNzYxLTMuMzYyek0xMiAzLjQ3NWMyLjE3IDAgNC4xNTQuODEzIDUuNjYyIDIuMTQ4LS4xNTIuMjE2LTEuNDQzIDEuOTQxLTQuNDggMy4wOC0xLjM5OS0yLjU3LTIuOTUtNC42NzUtMy4xODktNUE4LjY4NyA4LjY4NyAwIDAxMTIgMy40NzV6bS0zLjYzMy44MDNhNTMuODk2IDUzLjg5NiAwIDAxMy4xNjcgNC45MzVjLTMuOTkyIDEuMDYzLTcuNTE3IDEuMDQtNy44OTYgMS4wNGE4LjU4MSA4LjU4MSAwIDAxNC43MjktNS45NzV6TTMuNDUzIDEyLjAxdi0uMjZjLjM3LjAxIDQuNTEyLjA2NSA4Ljc3NS0xLjIxNS4yNS40NzcuNDc3Ljk2NS42OTQgMS40NTMtLjEwOS4wMzMtLjIyOC4wNjUtLjMzNi4wOTgtNC40MDQgMS40Mi02Ljc0NyA1LjMwMy02Ljk0MiA1LjYyOWE4LjUyMiA4LjUyMiAwIDAxLTIuMTktNS43MDV6TTEyIDIwLjU0N2E4LjQ4MiA4LjQ4MiAwIDAxLTUuMjM5LTEuOGMuMTUyLS4zMTUgMS44ODgtMy42NTYgNi43MDMtNS4zMzcuMDIyLS4wMS4wMzMtLjAxLjA1NC0uMDIyYTM1LjMxOCAzNS4zMTggMCAwMTEuODIzIDYuNDc1IDguNCA4LjQgMCAwMS0zLjM0MS42ODR6bTQuNzYxLTEuNDY1Yy0uMDg2LS41Mi0uNTQyLTMuMDE1LTEuNjU5LTYuMDg0IDIuNjc5LS40MjMgNS4wMjIuMjcxIDUuMzE0LjM2OWE4LjQ2OCA4LjQ2OCAwIDAxLTMuNjU1IDUuNzE1elwiXHJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlcykge1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPERpc2Nsb3N1cmVcclxuICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiICB3LWZ1bGwgXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNGRENDMzNcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IG9wZW4gfSkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1sLTIgbXItMiBmbGV4IGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgYnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlLkJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaXNjbG9zdXJlLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBsZzpibG9jayBtZDpoaWRkZW4gaGlkZGVuIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gd2lkdGg9ezM1MH0gaGVpZ2h0PXs3NX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgbGc6aGlkZGVuIG1kOmJsb2NrIHNtOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvMn0gd2lkdGg9ezgwfSBoZWlnaHQ9ezc1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby01MDAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIldvcmtmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LWxvZ28taW5kaWdvLTUwMC1tYXJrLXdoaXRlLXRleHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIldvcmtmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6bWwtNiBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5uYW1lfSBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JheS05MDAgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWJsYWNrIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LXNlbWlib2xkXHQgdGV4dC1ibGFjayBjdXJzb3ItcG9pbnRlciBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC01IGZsZXgtc2hyaW5rLTAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50LWRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNzAwIGhvdmVyOmJnLWluZGlnby02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1BvbGdvbkxvZ299IHdpZHRoPXszMH0gaGVpZ2h0PXsyNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCItbXQtMVwiPiBDb25uZWN0IFdhbGxldDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8RGlzY2xvc3VyZS5QYW5lbCBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBweC0yIHB0LTIgcGItMyBzcGFjZS15LTEgc206cHgtMyBcIj5cclxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9IGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtYmxhY2sgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiB0ZXh0LWJsYWNrICBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5QYW5lbD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRGlzY2xvc3VyZT5cclxuICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcC02XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiIH19PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHgxIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+S3J5cHRvQmlyZCBNYXJrZXRwbGFjZTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNFwiPk1haW4gTWFya2V0cGxhY2U8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL21pbnQtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02XCI+TWludCBUb2tlbnM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL215LW5mdHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNlwiPk15IE5GdHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQtZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTZcIj5BY2NvdW50IERhc2hib2FyZDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+ICovfVxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLXRcIiBhcmlhLWxhYmVsbGVkYnk9XCJmb290ZXItaGVhZGluZ1wiPlxyXG4gICAgICAgIDxoMiBpZD1cImZvb3Rlci1oZWFkaW5nXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgRm9vdGVyXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB5LTEyIHB4LTQgc206cHgtNiBsZzpweS0xNiBsZzpweC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTggeGw6Z3JpZCB4bDpncmlkLWNvbHMtNCB4bDpnYXAtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTggeGw6Y29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsXCI+IEVuam95bWludCBORlQgTWFya2V0cGxhY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQW4gZXhjbHVzaXZlIGRpZ2l0YWwgbWFya2V0cGxhY2UgZm9yIGNyeXB0byBjb2xsZWN0aWJsZXMgYW5kIG5vbi1mdW5naWJsZSB0b2tlbnMgKE5GVHMpLiBCdXksIHNlbGwsIGFuZCBleHBsb3JlIHF1YWxpdHkgZGlnaXRhbCBpdGVtcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1kOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby03MDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlZnVsIExpbmtzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNzAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW11bml0eVxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3R0ZXJOYXZpZ2F0aW9uLmNvbXBhbnkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTUwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExhbmd1YWdlICZhbXA7IEN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC00IHNtOm1heC13LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2VcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctbm9uZSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHktMiBwbC0zIHByLTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJFbmdsaXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RnJlbmNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkdlcm1hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5KYXBhbmVzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TcGFuaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCByaWdodC0wIHB4LTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1cnJlbmN5XCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1cnJlbmN5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLW5vbmUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTIgcGwtMyBwci0xMCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQVVEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFSUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BVUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q0FEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNIRjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5FVVI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+R0JQPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkpQWTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgcHgtMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB0LTggbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgbWQ6b3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgIHtmb3R0ZXJOYXZpZ2F0aW9uLnNvY2lhbD8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtYmFzZSB0ZXh0LWluZGlnby01MDAgbWQ6bXQtMCBtZDpvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgJmNvcHk7IDIwMjIgRW5qb3ltaW50LCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZm9vdGVyLWhlYWRpbmdcIj5cclxuICAgICAgICA8aDIgaWQ9XCJmb290ZXItaGVhZGluZ1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgIEZvb3RlclxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweS0xMiBweC00IHNtOnB4LTYgbGc6cHktMTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi04IHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC04IHhsOmNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayAgaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby01MDAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIldvcmtmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgUXVpcyBub24sIGZ1Z2l0IHRvdGFtIHZlbCBsYWJvcmlvc2FtIHZpdGFlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTIwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBVc2VmdWwgTGlua3NcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm90dGVyTmF2aWdhdGlvbi5zdXBwb3J0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS0yMDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbXVuaXR5XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZvdHRlck5hdmlnYXRpb24uY29tcGFueS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiB4bDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZSAmYW1wOyBDdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC00IHNtOm1heC13LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctbm9uZSBiZy1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgcHktMiBwbC0zIHByLTEwIHRleHQtYmFzZSB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXdoaXRlIGZvY3VzOmJvcmRlci13aGl0ZSBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJFbmdsaXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RnJlbmNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5HZXJtYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkphcGFuZXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TcGFuaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgcHgtMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xLjUgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ub25lIGJnLWdyYXktNzAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBibG9jayBweS0yIHBsLTMgcHItMTAgdGV4dC1iYXNlIHRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGUgZm9jdXM6Ym9yZGVyLXdoaXRlIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkFVRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFSUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QVVEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5DQUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNIRjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5HQlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkpQWTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VVNEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgcHgtMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ncmF5LTcwMCBwdC04IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktYmV0d2VlbiB4bDptdC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVyXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtYmFzZSB0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgbGF0ZXN0IG5ld3MsIGFydGljbGVzLCBhbmQgcmVzb3VyY2VzLCBzZW50IHRvIHlvdXIgaW5ib3hcclxuICAgICAgICAgICAgICAgIHdlZWtseS5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC00IHNtOmZsZXggc206bWF4LXctbWQgbGc6bXQtMFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbC1hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIG1pbi13LTAgdy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBweS0yIHB4LTQgdGV4dC1iYXNlIHRleHQtZ3JheS05MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGUgZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOnBsYWNlaG9sZGVyLWdyYXktNDAwIHNtOm1heC13LXhzXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgcm91bmRlZC1tZCBzbTptdC0wIHNtOm1sLTMgc206ZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlnby03MDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHB5LTIgcHgtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBib3JkZXItdCBib3JkZXItZ3JheS03MDAgcHQtOCBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBtZDpvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAge2ZvdHRlck5hdmlnYXRpb24uc29jaWFsLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTQwMCBtZDptdC0wIG1kOm9yZGVyLTFcIj5cclxuICAgICAgICAgICAgICAmY29weTsgMjAyMSBOZXRTdG9ybSwgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtyeXB0b0JpcmRNYXJrZXRwbGFjZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJEaXNjbG9zdXJlIiwiTWVudUljb24iLCJYSWNvbiIsIkNoZXZyb25Eb3duSWNvbiIsIkltYWdlIiwiUG9sZ29uTG9nbyIsIkxvZ28iLCJMb2dvMiIsIktyeXB0b0JpcmRNYXJrZXRwbGFjZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJpbWFnZVVybCIsIm5hdmlnYXRpb24iLCJocmVmIiwiY3VycmVudCIsImZvdHRlck5hdmlnYXRpb24iLCJzdXBwb3J0IiwiY29tcGFueSIsInNvY2lhbCIsImljb24iLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJiYWNrZ3JvdW5kIiwib3BlbiIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9