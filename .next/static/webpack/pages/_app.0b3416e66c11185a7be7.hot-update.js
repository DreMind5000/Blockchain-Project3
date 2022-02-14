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
      name: "Add NFT to MetaMask ",
      href: "https://www.enjoymint.digital/infographic"
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
                    children: " Enjoymint.digital"
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
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae."
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
                  lineNumber: 252,
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
                          lineNumber: 259,
                          columnNumber: 27
                        }, _this)
                      }, item.name, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 25
                      }, _this)
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 251,
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
                  lineNumber: 270,
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
                        lineNumber: 276,
                        columnNumber: 25
                      }, _this)
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 269,
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
                    lineNumber: 288,
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
                        lineNumber: 293,
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
                            lineNumber: 303,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "French"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "German"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 305,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "Japanese"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 306,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "Spanish"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 307,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 297,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          className: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {
                            className: "h-4 w-4 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 310,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 309,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 292,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("fieldset", {
                      className: "mt-4 w-full",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                        htmlFor: "currency",
                        className: "sr-only",
                        children: "Currency"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 318,
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
                            lineNumber: 328,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "AUD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 329,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "CAD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 330,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "CHF"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 331,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "EUR"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 332,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "GBP"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 333,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "JPY"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 334,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("option", {
                            children: "USD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 335,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 322,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                          className: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {
                            className: "h-4 w-4 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 338,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 337,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 321,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 268,
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
                  lineNumber: 360,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(item.icon, {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 19
                }, _this)]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: "mt-8 text-base text-indigo-500 md:mt-0 md:order-1",
            children: "\xA9 2020 Workflow, Inc. All rights reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 352,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wYjM0MTZlNjZjMTExODVhN2JlNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTUyxxQkFBVCxPQUF5RDtBQUFBO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2RCxNQUFNQyxJQUFJLEdBQUc7QUFDWEMsSUFBQUEsSUFBSSxFQUFFLFVBREs7QUFFWEMsSUFBQUEsS0FBSyxFQUFFLGlCQUZJO0FBR1hDLElBQUFBLFFBQVEsRUFDTjtBQUpTLEdBQWI7QUFNQSxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUgsSUFBQUEsSUFBSSxFQUFFLG1CQUFSO0FBQTZCSSxJQUFBQSxJQUFJLEVBQUUsR0FBbkM7QUFBd0NDLElBQUFBLE9BQU8sRUFBRTtBQUFqRCxHQURpQixFQUVqQjtBQUFFTCxJQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkksSUFBQUEsSUFBSSxFQUFFLFlBQTdCO0FBQTJDQyxJQUFBQSxPQUFPLEVBQUU7QUFBcEQsR0FGaUIsRUFHakI7QUFBRUwsSUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJJLElBQUFBLElBQUksRUFBRSxVQUF6QjtBQUFxQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQTlDLEdBSGlCLEVBSWpCO0FBQUVMLElBQUFBLElBQUksRUFBRSxtQkFBUjtBQUE2QkksSUFBQUEsSUFBSSxFQUFFLG9CQUFuQztBQUF5REMsSUFBQUEsT0FBTyxFQUFFO0FBQWxFLEdBSmlCLENBQW5CO0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJDLElBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUVQLE1BQUFBLElBQUksRUFBRSxVQUFSO0FBQW9CSSxNQUFBQSxJQUFJLEVB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cy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2FwcC5jc3NcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgRGlzY2xvc3VyZSB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51SWNvbiwgWEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUG9sZ29uTG9nbyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9wb2x5Z29uMy5wbmdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvTUFJTkxPR08ucG5nXCI7XHJcbmltcG9ydCBMb2dvMiBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9mYXYucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBLcnlwdG9CaXJkTWFya2V0cGxhY2UoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgdXNlciA9IHtcclxuICAgIG5hbWU6IFwiVG9tIENvb2tcIixcclxuICAgIGVtYWlsOiBcInRvbUBleGFtcGxlLmNvbVwiLFxyXG4gICAgaW1hZ2VVcmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCIsXHJcbiAgfTtcclxuICBjb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gICAgeyBuYW1lOiBcIk1haW4gTWFya2V0cGxhY2UgXCIsIGhyZWY6IFwiL1wiLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgeyBuYW1lOiBcIk1pbnQgVG9rZW5zXCIsIGhyZWY6IFwiL21pbnQtaXRlbVwiLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgeyBuYW1lOiBcIk15IE5GVFNcIiwgaHJlZjogXCIvbXktbmZ0c1wiLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgeyBuYW1lOiBcIkFjY291bnQgRGFzaGJvYXJkXCIsIGhyZWY6IFwiL2FjY291bnQtZGFzaGJvYXJkXCIsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgXTtcclxuICBjb25zdCBmb3R0ZXJOYXZpZ2F0aW9uID0ge1xyXG4gICAgc3VwcG9ydDogW1xyXG4gICAgICB7IG5hbWU6IFwiQWxsIE5GVHNcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIkhvdyBJdCBXb3Jrc1wiLCBocmVmOiBcIiNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiQ3JlYXRlXCIsIGhyZWY6IFwiI1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCIgUHJpdmFjeSAmIFRlcm1zXCIsIGhyZWY6IFwiI1wiIH0sXHJcbiAgICBdLFxyXG4gICAgY29tcGFueTogW1xyXG4gICAgICB7IG5hbWU6IFwiQWRkIE5GVCB0byBNZXRhTWFzayBcIiwgaHJlZjogXCJodHRwczovL3d3dy5lbmpveW1pbnQuZGlnaXRhbC9pbmZvZ3JhcGhpY1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJQYXJ0bmVyc1wiLCBocmVmOiBcIiNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiU3VnZ2VzdGlvbnNcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIkJsb2dcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIk5ld3NsZXR0ZXJcIiwgaHJlZjogXCIjXCIgfSxcclxuICAgIF0sXHJcblxyXG4gICAgc29jaWFsOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkZhY2Vib29rXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMjIgMTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMyIDYuNDc3IDIgMTJjMCA0Ljk5MSAzLjY1NyA5LjEyOCA4LjQzOCA5Ljg3OHYtNi45ODdoLTIuNTRWMTJoMi41NFY5Ljc5N2MwLTIuNTA2IDEuNDkyLTMuODkgMy43NzctMy44OSAxLjA5NCAwIDIuMjM4LjE5NSAyLjIzOC4xOTV2Mi40NmgtMS4yNmMtMS4yNDMgMC0xLjYzLjc3MS0xLjYzIDEuNTYyVjEyaDIuNzczbC0uNDQzIDIuODloLTIuMzN2Ni45ODhDMTguMzQzIDIxLjEyOCAyMiAxNi45OTEgMjIgMTJ6XCJcclxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSW5zdGFncmFtXCIsXHJcbiAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTIuMzE1IDJjMi40MyAwIDIuNzg0LjAxMyAzLjgwOC4wNiAxLjA2NC4wNDkgMS43OTEuMjE4IDIuNDI3LjQ2NWE0LjkwMiA0LjkwMiAwIDAxMS43NzIgMS4xNTMgNC45MDIgNC45MDIgMCAwMTEuMTUzIDEuNzcyYy4yNDcuNjM2LjQxNiAxLjM2My40NjUgMi40MjcuMDQ4IDEuMDY3LjA2IDEuNDA3LjA2IDQuMTIzdi4wOGMwIDIuNjQzLS4wMTIgMi45ODctLjA2IDQuMDQzLS4wNDkgMS4wNjQtLjIxOCAxLjc5MS0uNDY1IDIuNDI3YTQuOTAyIDQuOTAyIDAgMDEtMS4xNTMgMS43NzIgNC45MDIgNC45MDIgMCAwMS0xLjc3MiAxLjE1M2MtLjYzNi4yNDctMS4zNjMuNDE2LTIuNDI3LjQ2NS0xLjA2Ny4wNDgtMS40MDcuMDYtNC4xMjMuMDZoLS4wOGMtMi42NDMgMC0yLjk4Ny0uMDEyLTQuMDQzLS4wNi0xLjA2NC0uMDQ5LTEuNzkxLS4yMTgtMi40MjctLjQ2NWE0LjkwMiA0LjkwMiAwIDAxLTEuNzcyLTEuMTUzIDQuOTAyIDQuOTAyIDAgMDEtMS4xNTMtMS43NzJjLS4yNDctLjYzNi0uNDE2LTEuMzYzLS40NjUtMi40MjctLjA0Ny0xLjAyNC0uMDYtMS4zNzktLjA2LTMuODA4di0uNjNjMC0yLjQzLjAxMy0yLjc4NC4wNi0zLjgwOC4wNDktMS4wNjQuMjE4LTEuNzkxLjQ2NS0yLjQyN2E0LjkwMiA0LjkwMiAwIDAxMS4xNTMtMS43NzJBNC45MDIgNC45MDIgMCAwMTUuNDUgMi41MjVjLjYzNi0uMjQ3IDEuMzYzLS40MTYgMi40MjctLjQ2NUM4LjkwMSAyLjAxMyA5LjI1NiAyIDExLjY4NSAyaC42M3ptLS4wODEgMS44MDJoLS40NjhjLTIuNDU2IDAtMi43ODQuMDExLTMuODA3LjA1OC0uOTc1LjA0NS0xLjUwNC4yMDctMS44NTcuMzQ0LS40NjcuMTgyLS44LjM5OC0xLjE1Ljc0OC0uMzUuMzUtLjU2Ni42ODMtLjc0OCAxLjE1LS4xMzcuMzUzLS4zLjg4Mi0uMzQ0IDEuODU3LS4wNDcgMS4wMjMtLjA1OCAxLjM1MS0uMDU4IDMuODA3di40NjhjMCAyLjQ1Ni4wMTEgMi43ODQuMDU4IDMuODA3LjA0NS45NzUuMjA3IDEuNTA0LjM0NCAxLjg1Ny4xODIuNDY2LjM5OS44Ljc0OCAxLjE1LjM1LjM1LjY4My41NjYgMS4xNS43NDguMzUzLjEzNy44ODIuMyAxLjg1Ny4zNDQgMS4wNTQuMDQ4IDEuMzcuMDU4IDQuMDQxLjA1OGguMDhjMi41OTcgMCAyLjkxNy0uMDEgMy45Ni0uMDU4Ljk3Ni0uMDQ1IDEuNTA1LS4yMDcgMS44NTgtLjM0NC40NjYtLjE4Mi44LS4zOTggMS4xNS0uNzQ4LjM1LS4zNS41NjYtLjY4My43NDgtMS4xNS4xMzctLjM1My4zLS44ODIuMzQ0LTEuODU3LjA0OC0xLjA1NS4wNTgtMS4zNy4wNTgtNC4wNDF2LS4wOGMwLTIuNTk3LS4wMS0yLjkxNy0uMDU4LTMuOTYtLjA0NS0uOTc2LS4yMDctMS41MDUtLjM0NC0xLjg1OGEzLjA5NyAzLjA5NyAwIDAwLS43NDgtMS4xNSAzLjA5OCAzLjA5OCAwIDAwLTEuMTUtLjc0OGMtLjM1My0uMTM3LS44ODItLjMtMS44NTctLjM0NC0xLjAyMy0uMDQ3LTEuMzUxLS4wNTgtMy44MDctLjA1OHpNMTIgNi44NjVhNS4xMzUgNS4xMzUgMCAxMTAgMTAuMjcgNS4xMzUgNS4xMzUgMCAwMTAtMTAuMjd6bTAgMS44MDJhMy4zMzMgMy4zMzMgMCAxMDAgNi42NjYgMy4zMzMgMy4zMzMgMCAwMDAtNi42NjZ6bTUuMzM4LTMuMjA1YTEuMiAxLjIgMCAxMTAgMi40IDEuMiAxLjIgMCAwMTAtMi40elwiXHJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlR3aXR0ZXJcIixcclxuICAgICAgICBocmVmOiBcIiNcIixcclxuICAgICAgICBpY29uOiAocHJvcHMpID0+IChcclxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTguMjkgMjAuMjUxYzcuNTQ3IDAgMTEuNjc1LTYuMjUzIDExLjY3NS0xMS42NzUgMC0uMTc4IDAtLjM1NS0uMDEyLS41M0E4LjM0OCA4LjM0OCAwIDAwMjIgNS45MmE4LjE5IDguMTkgMCAwMS0yLjM1Ny42NDYgNC4xMTggNC4xMTggMCAwMDEuODA0LTIuMjcgOC4yMjQgOC4yMjQgMCAwMS0yLjYwNS45OTYgNC4xMDcgNC4xMDcgMCAwMC02Ljk5MyAzLjc0MyAxMS42NSAxMS42NSAwIDAxLTguNDU3LTQuMjg3IDQuMTA2IDQuMTA2IDAgMDAxLjI3IDUuNDc3QTQuMDcyIDQuMDcyIDAgMDEyLjggOS43MTN2LjA1MmE0LjEwNSA0LjEwNSAwIDAwMy4yOTIgNC4wMjIgNC4wOTUgNC4wOTUgMCAwMS0xLjg1My4wNyA0LjEwOCA0LjEwOCAwIDAwMy44MzQgMi44NUE4LjIzMyA4LjIzMyAwIDAxMiAxOC40MDdhMTEuNjE2IDExLjYxNiAwIDAwNi4yOSAxLjg0XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgICAgIGljb246IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTEyIDJDNi40NzcgMiAyIDYuNDg0IDIgMTIuMDE3YzAgNC40MjUgMi44NjUgOC4xOCA2LjgzOSA5LjUwNC41LjA5Mi42ODItLjIxNy42ODItLjQ4MyAwLS4yMzctLjAwOC0uODY4LS4wMTMtMS43MDMtMi43ODIuNjA1LTMuMzY5LTEuMzQzLTMuMzY5LTEuMzQzLS40NTQtMS4xNTgtMS4xMS0xLjQ2Ni0xLjExLTEuNDY2LS45MDgtLjYyLjA2OS0uNjA4LjA2OS0uNjA4IDEuMDAzLjA3IDEuNTMxIDEuMDMyIDEuNTMxIDEuMDMyLjg5MiAxLjUzIDIuMzQxIDEuMDg4IDIuOTEuODMyLjA5Mi0uNjQ3LjM1LTEuMDg4LjYzNi0xLjMzOC0yLjIyLS4yNTMtNC41NTUtMS4xMTMtNC41NTUtNC45NTEgMC0xLjA5My4zOS0xLjk4OCAxLjAyOS0yLjY4OC0uMTAzLS4yNTMtLjQ0Ni0xLjI3Mi4wOTgtMi42NSAwIDAgLjg0LS4yNyAyLjc1IDEuMDI2QTkuNTY0IDkuNTY0IDAgMDExMiA2Ljg0NGMuODUuMDA0IDEuNzA1LjExNSAyLjUwNC4zMzcgMS45MDktMS4yOTYgMi43NDctMS4wMjcgMi43NDctMS4wMjcuNTQ2IDEuMzc5LjIwMiAyLjM5OC4xIDIuNjUxLjY0LjcgMS4wMjggMS41OTUgMS4wMjggMi42ODggMCAzLjg0OC0yLjMzOSA0LjY5NS00LjU2NiA0Ljk0My4zNTkuMzA5LjY3OC45Mi42NzggMS44NTUgMCAxLjMzOC0uMDEyIDIuNDE5LS4wMTIgMi43NDcgMCAuMjY4LjE4LjU4LjY4OC40ODJBMTAuMDE5IDEwLjAxOSAwIDAwMjIgMTIuMDE3QzIyIDYuNDg0IDE3LjUyMiAyIDEyIDJ6XCJcclxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiRHJpYmJibGVcIixcclxuICAgICAgICBocmVmOiBcIiNcIixcclxuICAgICAgICBpY29uOiAocHJvcHMpID0+IChcclxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwYzUuNTEgMCAxMC00LjQ4IDEwLTEwUzE3LjUxIDIgMTIgMnptNi42MDUgNC42MWE4LjUwMiA4LjUwMiAwIDAxMS45MyA1LjMxNGMtLjI4MS0uMDU0LTMuMTAxLS42MjktNS45NDMtLjI3MS0uMDY1LS4xNDEtLjEyLS4yOTMtLjE4NC0uNDQ1YTI1LjQxNiAyNS40MTYgMCAwMC0uNTY0LTEuMjM2YzMuMTQ1LTEuMjggNC41NzctMy4xMjQgNC43NjEtMy4zNjJ6TTEyIDMuNDc1YzIuMTcgMCA0LjE1NC44MTMgNS42NjIgMi4xNDgtLjE1Mi4yMTYtMS40NDMgMS45NDEtNC40OCAzLjA4LTEuMzk5LTIuNTctMi45NS00LjY3NS0zLjE4OS01QTguNjg3IDguNjg3IDAgMDExMiAzLjQ3NXptLTMuNjMzLjgwM2E1My44OTYgNTMuODk2IDAgMDEzLjE2NyA0LjkzNWMtMy45OTIgMS4wNjMtNy41MTcgMS4wNC03Ljg5NiAxLjA0YTguNTgxIDguNTgxIDAgMDE0LjcyOS01Ljk3NXpNMy40NTMgMTIuMDF2LS4yNmMuMzcuMDEgNC41MTIuMDY1IDguNzc1LTEuMjE1LjI1LjQ3Ny40NzcuOTY1LjY5NCAxLjQ1My0uMTA5LjAzMy0uMjI4LjA2NS0uMzM2LjA5OC00LjQwNCAxLjQyLTYuNzQ3IDUuMzAzLTYuOTQyIDUuNjI5YTguNTIyIDguNTIyIDAgMDEtMi4xOS01LjcwNXpNMTIgMjAuNTQ3YTguNDgyIDguNDgyIDAgMDEtNS4yMzktMS44Yy4xNTItLjMxNSAxLjg4OC0zLjY1NiA2LjcwMy01LjMzNy4wMjItLjAxLjAzMy0uMDEuMDU0LS4wMjJhMzUuMzE4IDM1LjMxOCAwIDAxMS44MjMgNi40NzUgOC40IDguNCAwIDAxLTMuMzQxLjY4NHptNC43NjEtMS40NjVjLS4wODYtLjUyLS41NDItMy4wMTUtMS42NTktNi4wODQgMi42NzktLjQyMyA1LjAyMi4yNzEgNS4zMTQuMzY5YTguNDY4IDguNDY4IDAgMDEtMy42NTUgNS43MTV6XCJcclxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8RGlzY2xvc3VyZVxyXG4gICAgICAgIGFzPVwibmF2XCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgIHctZnVsbCBcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0ZEQ0MzM1wiIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgb3BlbiB9KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbWwtMiBtci0yIGZsZXggaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2Nsb3N1cmUuQnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEljb24gY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIGxnOmJsb2NrIG1kOmhpZGRlbiBoaWRkZW4gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSB3aWR0aD17MzUwfSBoZWlnaHQ9ezc1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBsZzpoaWRkZW4gbWQ6YmxvY2sgc206YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ28yfSB3aWR0aD17ODB9IGhlaWdodD17NzV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGxnOmhpZGRlbiBoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTUwMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbG9nby1pbmRpZ28tNTAwLW1hcmstd2hpdGUtdGV4dC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDptbC02IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLm5hbWV9IGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmF5LTkwMCB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtYmxhY2sgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcdCB0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTUgZmxleC1zaHJpbmstMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQtZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby03MDAgaG92ZXI6YmctaW5kaWdvLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17UG9sZ29uTG9nb30gd2lkdGg9ezMwfSBoZWlnaHQ9ezI1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIi1tdC0xXCI+IENvbm5lY3QgV2FsbGV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxEaXNjbG9zdXJlLlBhbmVsIGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMSBzbTpweC0zIFwiPlxyXG4gICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0ga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibGFjayBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIHRleHQtYmxhY2sgIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9EaXNjbG9zdXJlPlxyXG4gICAgICB7LyogPG5hdiBjbGFzc05hbWU9XCJib3JkZXItYiBwLTZcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicHVycGxlXCIgfX0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eDEgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5LcnlwdG9CaXJkIE1hcmtldHBsYWNlPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci00XCI+TWFpbiBNYXJrZXRwbGFjZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWludC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTZcIj5NaW50IFRva2VuczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktbmZ0c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci02XCI+TXkgTkZ0czwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudC1kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNlwiPkFjY291bnQgRGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj4gKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItdFwiIGFyaWEtbGFiZWxsZWRieT1cImZvb3Rlci1oZWFkaW5nXCI+XHJcbiAgICAgICAgPGgyIGlkPVwiZm9vdGVyLWhlYWRpbmdcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICBGb290ZXJcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHktMTIgcHgtNCBzbTpweC02IGxnOnB5LTE2IGxnOnB4LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItOCB4bDpncmlkIHhsOmdyaWQtY29scy00IHhsOmdhcC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtOCB4bDpjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj4gRW5qb3ltaW50LmRpZ2l0YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgIFF1aXMgbm9uLCBmdWdpdCB0b3RhbSB2ZWwgbGFib3Jpb3NhbSB2aXRhZS5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1kOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby03MDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlZnVsIExpbmtzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNzAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW11bml0eVxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3R0ZXJOYXZpZ2F0aW9uLmNvbXBhbnkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTUwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExhbmd1YWdlICZhbXA7IEN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC00IHNtOm1heC13LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2VcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctbm9uZSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHktMiBwbC0zIHByLTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJFbmdsaXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RnJlbmNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkdlcm1hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5KYXBhbmVzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TcGFuaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCByaWdodC0wIHB4LTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1cnJlbmN5XCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1cnJlbmN5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLW5vbmUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTIgcGwtMyBwci0xMCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQVVEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFSUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BVUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q0FEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNIRjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5FVVI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+R0JQPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkpQWTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgcHgtMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB0LTggbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgbWQ6b3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgIHtmb3R0ZXJOYXZpZ2F0aW9uLnNvY2lhbD8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtYmFzZSB0ZXh0LWluZGlnby01MDAgbWQ6bXQtMCBtZDpvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgJmNvcHk7IDIwMjAgV29ya2Zsb3csIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBcIiBhcmlhLWxhYmVsbGVkYnk9XCJmb290ZXItaGVhZGluZ1wiPlxyXG4gICAgICAgIDxoMiBpZD1cImZvb3Rlci1oZWFkaW5nXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgRm9vdGVyXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB5LTEyIHB4LTQgc206cHgtNiBsZzpweS0xNiBsZzpweC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTggeGw6Z3JpZCB4bDpncmlkLWNvbHMtNCB4bDpnYXAtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTggeGw6Y29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrICBoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTUwMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICBRdWlzIG5vbiwgZnVnaXQgdG90YW0gdmVsIGxhYm9yaW9zYW0gdml0YWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1kOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktMjAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFVzZWZ1bCBMaW5rc1xyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3R0ZXJOYXZpZ2F0aW9uLnN1cHBvcnQubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTIwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb21tdW5pdHlcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm90dGVyTmF2aWdhdGlvbi5jb21wYW55Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExhbmd1YWdlICZhbXA7IEN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTQgc206bWF4LXcteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhbmd1YWdlXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ub25lIGJnLWdyYXktNzAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBweS0yIHBsLTMgcHItMTAgdGV4dC1iYXNlIHRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGUgZm9jdXM6Ym9yZGVyLXdoaXRlIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkVuZ2xpc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5FbmdsaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5GcmVuY2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkdlcm1hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SmFwYW5lc2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNwYW5pc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBweC0yIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVuY3lcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEuNSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1cnJlbmN5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLW5vbmUgYmctZ3JheS03MDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIGJsb2NrIHB5LTIgcGwtMyBwci0xMCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy13aGl0ZSBmb2N1czpib3JkZXItd2hpdGUgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQVVEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QVJTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BVUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNBRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q0hGPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5FVVI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkdCUDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SlBZPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBweC0yIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwIHB0LTggbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS00MDAgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXJcclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1iYXNlIHRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIFRoZSBsYXRlc3QgbmV3cywgYXJ0aWNsZXMsIGFuZCByZXNvdXJjZXMsIHNlbnQgdG8geW91ciBpbmJveFxyXG4gICAgICAgICAgICAgICAgd2Vla2x5LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTQgc206ZmxleCBzbTptYXgtdy1tZCBsZzptdC0wXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsLWFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgbWluLXctMCB3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHB5LTIgcHgtNCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTkwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy13aGl0ZSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6cGxhY2Vob2xkZXItZ3JheS00MDAgc206bWF4LXcteHNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyByb3VuZGVkLW1kIHNtOm10LTAgc206bWwtMyBzbTpmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTcwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgcHktMiBweC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFN1YnNjcmliZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGJvcmRlci10IGJvcmRlci1ncmF5LTcwMCBwdC04IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02IG1kOm9yZGVyLTJcIj5cclxuICAgICAgICAgICAgICB7Zm90dGVyTmF2aWdhdGlvbi5zb2NpYWwubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtYmFzZSB0ZXh0LWdyYXktNDAwIG1kOm10LTAgbWQ6b3JkZXItMVwiPlxyXG4gICAgICAgICAgICAgICZjb3B5OyAyMDIxIE5ldFN0b3JtLCBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS3J5cHRvQmlyZE1hcmtldHBsYWNlO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIkRpc2Nsb3N1cmUiLCJNZW51SWNvbiIsIlhJY29uIiwiQ2hldnJvbkRvd25JY29uIiwiSW1hZ2UiLCJQb2xnb25Mb2dvIiwiTG9nbyIsIkxvZ28yIiwiS3J5cHRvQmlyZE1hcmtldHBsYWNlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImltYWdlVXJsIiwibmF2aWdhdGlvbiIsImhyZWYiLCJjdXJyZW50IiwiZm90dGVyTmF2aWdhdGlvbiIsInN1cHBvcnQiLCJjb21wYW55Iiwic29jaWFsIiwiaWNvbiIsInByb3BzIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImJhY2tncm91bmQiLCJvcGVuIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=