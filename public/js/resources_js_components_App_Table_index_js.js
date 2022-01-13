"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_App_Table_index_js"],{

/***/ "./resources/js/components/App/Table/index.js":
/*!****************************************************!*\
  !*** ./resources/js/components/App/Table/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ "./resources/js/components/App/Table/style.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Table = function Table(_ref) {
  var id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      more = _useState8[0],
      setMore = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      click = _useState10[0],
      setClick = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var handleMore = function handleMore(e) {
    e.preventDefault();

    if (!loading) {
      setClick(true);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var controller = new AbortController();

    if (click) {
      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/view?page=".concat(page, "&skip=3")).then(function (res) {
        setFiles(function (prev) {
          return [].concat(_toConsumableArray(prev), _toConsumableArray(res.data));
        });
        setMore(res.data.length > 0 && (res.data.length < 3 ? false : true));
        setPage(function (prev) {
          return prev + 1;
        });
        setLoading(false);
        setClick(false);
      })["catch"](function (err) {
        setClick(false);
        setLoading(false);

        if (err.response.status === 401) {
          setError("Something went wrong, please refresh your tab!");
        } // console.log(err.response);

      });
    }

    return function () {
      controller.abort();
    };
  }, [click]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var isMounted = true;

    if (isMounted) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/view?page=".concat(page, "&skip=3")).then(function (res) {
        setFiles(function (prev) {
          return [].concat(_toConsumableArray(prev), _toConsumableArray(res.data));
        });
        setMore(res.data.length > 0 && (res.data.length < 3 ? false : true));
        setLoading(false);
        setPage(function (prev) {
          return prev + 1;
        });
        setClick(false);
      })["catch"](function (err) {
        setClick(false);
        setLoading(false);

        if (err.response.status === 401) {
          setError("Something went wrong, please refresh your tab!");
        } // console.log(err.response);

      });
    }

    return function () {
      isMounted = false;
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].parent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cont,
      children: files.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].table,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              scope: "col",
              children: "#"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              scope: "col",
              children: "File Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              scope: "col",
              children: "Owner"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              scope: "col",
              children: "Uploaded At"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
          children: files.map(function (file, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: i + 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].preview,
                  href: "/api/file/".concat(encodeURIComponent(file.title)),
                  children: [file.name, ".", file.ext]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                children: [file.owner, " (", file.owner_id === id ? 'saya' : 'bukan saya', ")"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].date,
                  children: new Date(file.created_at).toLocaleString()
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: file.owner_id === id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    to: "rename?id=".concat(encodeURIComponent(file.name + '.' + file.ext)),
                    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].rename,
                    children: "Rename"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    to: "delete?id=".concat(encodeURIComponent(file.name + '.' + file.ext)),
                    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].del,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].svg,
                      viewBox: "0 0 24 24",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                        fill: "currentColor",
                        d: "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
                      })
                    })
                  })]
                })
              })]
            }, file.title);
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: "There's no file!"
      })
    }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loading,
      children: "Loading..."
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error,
      children: error
    }), more && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loadcont,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: "/loadmore",
        onClick: handleMore,
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].more,
        children: "load more"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/components/App/Table/style.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/components/App/Table/style.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Df2sGejOZ4K3d5z9HwUw7w\\=\\= {\n  position: relative;\n  width: 100%;\n  font-style: inherit !important;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  color: #212121;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  box-shadow: 0px 3px 3px -1px rgba(10, 22, 70, 0.1), 0px 0px 1px 0px rgba(10, 22, 70, 0.06);\n  padding: 2rem;\n  margin: 0.75rem 0;\n  border-radius: 0.75rem;\n  background: white;\n}\n\n.hvcwpgNqMIROQJlDVhQgbA\\=\\= {\n  position: relative;\n  overflow-x: auto;\n  width: 100%;\n  font-style: inherit !important;\n  z-index: inherit !important;\n  background: white;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= {\n  border-collapse: collapse;\n  overflow-x: auto;\n  width: 100%;\n  background: white;\n  white-space: nowrap;\n  z-index: inherit !important;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > thead > tr,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tbody > tr,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tfoot > tr {\n  transition: all 0.3s ease;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > thead > tr > th,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tbody > tr > th,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tfoot > tr > th,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > thead > tr > td,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tbody > tr > td,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tfoot > tr > td {\n  text-align: left;\n  padding: 16px;\n  vertical-align: middle;\n  border-top: 0;\n  transition: all 0.3s ease;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > thead > tr > th {\n  font-weight: 400;\n  color: #757575;\n  vertical-align: bottom;\n  margin: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  text-transform: uppercase;\n  font-size: 0.7em;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tbody > tr:hover td {\n  background-color: #f9fafb;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > caption + thead > tr:first-child > th,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > colgroup + thead > tr:first-child > th,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > thead:first-child > tr:first-child > th,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > caption + thead > tr:first-child > td,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > colgroup + thead > tr:first-child > td,\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= > tbody + tbody {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= .lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= {\n  background-color: #ffffff;\n}\n\n.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= .RQZryKMWz1\\+7LCBIh1-Mdw\\=\\= {\n  border: 0;\n}\n\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= {\n  border: 0;\n}\n\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > thead > tr > th,\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > tbody > tr > th,\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > tfoot > tr > th,\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > thead > tr > td,\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > tbody > tr > td,\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > tfoot > tr > td {\n  border: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.AiDEHa6SAcPI2mWXxTdBfg\\=\\= > thead > tr > th {\n  border-bottom-width: 2px;\n}\n\n.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\= {\n  color: #a78bfa;\n  text-decoration: none;\n}\n.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\=:hover, .KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\=:focus-within {\n  text-decoration: underline;\n}\n.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\=:focus {\n  color: #7c3aed;\n  text-decoration: underline;\n}\n\n.HkoN9Y-8-zv9x9mkakKzhA\\=\\= {\n  position: relative;\n  font-size: 0.85rem;\n}\n\n._5BgQ5ucMzv\\+E6lniYhmluw\\=\\= {\n  position: relative;\n  background: transparent;\n  border-radius: 0.4rem;\n  text-transform: lowercase;\n  padding: 0.4rem 0.75rem;\n  transition: 0.2s ease;\n  outline: none;\n  border: 0.75px solid rgba(139, 92, 246, 0.3);\n  display: inline-block;\n  color: #a78bfa;\n  text-align: center;\n  justify-content: center;\n  vertical-align: middle;\n  align-items: flex-start;\n  margin-right: 0.25rem;\n}\n._5BgQ5ucMzv\\+E6lniYhmluw\\=\\=:hover, ._5BgQ5ucMzv\\+E6lniYhmluw\\=\\=:focus-within {\n  background: rgba(139, 92, 246, 0.1);\n  border: 0.75px solid rgba(139, 92, 246, 0.5);\n}\n._5BgQ5ucMzv\\+E6lniYhmluw\\=\\=:focus {\n  background: rgba(139, 92, 246, 0.2);\n}\n\n.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\= {\n  position: relative;\n  background: transparent;\n  border-radius: 100rem;\n  padding: 0.5rem;\n  transition: 0.2s ease;\n  outline: none;\n  border: none;\n  color: rgba(139, 92, 246, 0.7);\n  display: inline-block;\n  text-align: center;\n  justify-content: center;\n  vertical-align: middle;\n  align-items: flex-start;\n  margin-left: 0.25rem;\n}\n.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\= .rtoGMz7X0j\\+hdKaZSyrjvA\\=\\= {\n  display: block;\n  margin: auto;\n  height: 24px;\n  width: 24px;\n}\n.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\=:hover, .g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\=:focus-within {\n  background: #e5e7eb;\n}\n.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\=:focus {\n  background: #d1d5db;\n}\n\n.jQXywVReU1NTcdmZ5Ne9Jw\\=\\= {\n  display: block;\n  text-align: center !important;\n}\n\n.JErLTaW7wIHxlXBRz4pKPA\\=\\= {\n  margin: 1rem 0 0 0;\n  text-align: center !important;\n}\n\n.qjZvPxCkfa-7juaouKu4ug\\=\\= {\n  text-align: center !important;\n  margin: 0.5rem 0 0 0;\n  color: #ef4444;\n}\n\n.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\= {\n  cursor: pointer;\n  line-height: inherit !important;\n  position: relative;\n  font-size: 1rem;\n  background: transparent;\n  text-transform: lowercase;\n  font-family: inherit;\n  padding: 0.4rem 0.75rem;\n  border: 0;\n  border: 0.75px solid rgba(139, 92, 246, 0.3);\n  border-radius: 0.4rem;\n  transition: 0.2s ease;\n  color: #a78bfa;\n  outline: none;\n  display: inline-block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  text-align: center !important;\n  z-index: inherit;\n  margin-top: 0.5rem;\n}\n.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\=:hover, .qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\=:focus-within {\n  background: rgba(139, 92, 246, 0.1);\n  border: 0.75px solid rgba(139, 92, 246, 0.5);\n}\n.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\=:focus {\n  background: rgba(139, 92, 246, 0.2);\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"parent": "Df2sGejOZ4K3d5z9HwUw7w==",
	"cont": "hvcwpgNqMIROQJlDVhQgbA==",
	"table": "lOaPJ6Aa4K8LD1IDn2T-7Q==",
	"no-border": "RQZryKMWz1+7LCBIh1-Mdw==",
	"table-bordered": "AiDEHa6SAcPI2mWXxTdBfg==",
	"preview": "KCIgg4mHg+itQSO9+lrQGA==",
	"date": "HkoN9Y-8-zv9x9mkakKzhA==",
	"rename": "_5BgQ5ucMzv+E6lniYhmluw==",
	"del": "g3ny0-zu+J9Ia4-P-KnxUg==",
	"svg": "rtoGMz7X0j+hdKaZSyrjvA==",
	"loadcont": "jQXywVReU1NTcdmZ5Ne9Jw==",
	"loading": "JErLTaW7wIHxlXBRz4pKPA==",
	"error": "qjZvPxCkfa-7juaouKu4ug==",
	"more": "qDV9vg0m+OcQn9Ci56u5LQ=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/App/Table/style.module.scss":
/*!*************************************************************!*\
  !*** ./resources/js/components/App/Table/style.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./style.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/components/App/Table/style.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);