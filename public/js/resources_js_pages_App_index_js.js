"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_App_index_js"],{

/***/ "./resources/js/components/App/Profile/index.js":
/*!******************************************************!*\
  !*** ./resources/js/components/App/Profile/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "./resources/js/components/App/Profile/style.module.scss");
/* harmony import */ var _components_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components.module.scss */ "./resources/js/components/components.module.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Profile = function Profile(_ref) {
  var handleOpen = _ref.handleOpen,
      img = _ref.img,
      handleImg = _ref.handleImg;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (msg) {
      setTimeout(function () {
        setMsg("");
      }, 5000);
    }

    if (errors.length > 0) {
      setTimeout(function () {
        setErrors([]);
      }, 5000);
    }
  }, [msg, errors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var controller = new AbortController();
    axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/profile').then(function (res) {
      setName(res.data.name);
      return handleImg(res.data.message);
    })["catch"](function (err) {
      if (err.response.status === 404) {
        setName(err.response.data.name);
        return handleImg("default.png");
      }
    });
    return function () {
      controller.abort();
    };
  }, []);

  var handleDelete = function handleDelete(e) {
    e.preventDefault();
    setErrors([]);
    setMsg("");
    axios__WEBPACK_IMPORTED_MODULE_3___default()["delete"]('/api/profile').then(function (res) {
      handleImg('default.png');
      setMsg("Image has been deleted!");
    })["catch"](function (err) {
      setErrors([err.response.data.message]);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].parent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: _components_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["col-12"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cont,
        children: [img && name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          alt: "".concat(name, "'s Profile"),
          src: "storage/profile/".concat(img),
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].upload
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          onClick: handleOpen,
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].edit,
          title: "Edit Your Photo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: "Edit Profile"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "".concat(_components_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["col-12"], " ").concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].name),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "".concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].action, " ").concat(_components_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["col-12"]),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
        to: "/delete",
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btn,
        onClick: handleDelete,
        children: "Delete Profile"
      })
    }), msg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].msg,
      children: msg
    }), errors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error,
      children: errors.map(function (error, i) {
        return i + 1 === errors.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: error
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          children: [error, ", "]
        });
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./resources/js/components/App/UploadImage/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/App/UploadImage/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Backdrop */ "./resources/js/components/Backdrop/index.js");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ "./resources/js/components/App/UploadImage/style.module.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      type: 'string',
      duration: 0.15,
      damping: 35,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
};

var UploadImage = function UploadImage(_ref) {
  var handleClose = _ref.handleClose,
      open = _ref.open,
      handleImg = _ref.handleImg;
  var inputFile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      fileName = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      progress = _useState6[0],
      setProgress = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      msg = _useState12[0],
      setMsg = _useState12[1];

  var handleUpload = function handleUpload(e) {
    e.preventDefault();
    inputFile.current.click();
  };

  var handleDefault = function handleDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  var handleDrop = function handleDrop(e) {
    handleDefault(e);
    setLoading(false);
    setErrors([]);
    setMsg("");
    setProgress(0);

    if (e.dataTransfer.files[0]) {
      var _file = new DataTransfer();

      _file.items.add(e.dataTransfer.files[0]);

      var name = _file.files[0].name;

      if (name !== fileName) {
        var data = _file.files[0];
        setFile(data);
        setFileName(name);
      } else {
        setErrors(['File already selected!']);
      }
    } else {
      setErrors(['Something went wrong, please try again']);
    }
  };

  var handleChange = function handleChange(e) {
    handleDefault(e);
    setLoading(false);
    setErrors([]);
    setMsg("");
    setProgress(0);

    if (e.currentTarget.value && e.currentTarget.files[0]) {
      var name = e.currentTarget.value.replace(/C:\\fakepath\\/i, '');

      if (name !== fileName) {
        var data = e.currentTarget.files[0];
        setFile(data);
        setFileName(name);
      } else {
        setErrors(['File already selected!']);
      }
    } else {
      setErrors(['Something went wrong, please try again']);
    }
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    var formData = new FormData();
    formData.append('profile', file);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/profile', formData, {
      onUploadProgress: function onUploadProgress(e) {
        var loaded = e.loaded,
            total = e.total;
        var progress = Math.round(loaded / total * 100);
        setProgress(progress < 100 ? progress : 99);
      }
    }).then(function (res) {
      setProgress(100);
      setMsg("Image saved!");
      handleImg(res.data.message);
    })["catch"](function (err) {
      if (err.response.status == 400) {
        setProgress(99);
        return setErrors(err.response.data.profile);
      }

      return setErrors(['Something went wrong, please try again!']);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
      initial: false,
      exitBeforeEnter: true,
      onExitComplete: function onExitComplete() {
        return null;
      },
      children: open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].modal,
          variants: dropIn,
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].card,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
              action: "/".concat(String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now() + Math.random() * 901),
              method: "post",
              onSubmit: handleSubmit,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].card,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].title,
                  children: "Upload Profile"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].drag,
                  onDrop: handleDrop,
                  onDragEnter: handleDefault,
                  onDragOver: handleDefault,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: "/img/upload_vector.svg",
                    alt: "",
                    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].img
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "file",
                    onChange: handleChange,
                    ref: inputFile,
                    accept: "image/*"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      onClick: handleUpload,
                      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].click,
                      children: "select an image"
                    })
                  })]
                }), fileName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].desc,
                  children: [fileName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].val,
                    children: fileName
                  }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].progress,
                      children: ["(", progress, "%)"]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  type: "submit",
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].btn,
                  children: "Submit"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  type: "button",
                  onClick: handleClose,
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].back,
                  children: "close"
                }), msg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].msg,
                  children: msg
                }), errors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].error,
                  children: errors.map(function (error, i) {
                    return i + 1 === errors.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      children: error
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      children: [error, ", "]
                    });
                  })
                })]
              })
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UploadImage);

/***/ }),

/***/ "./resources/js/pages/App/index.js":
/*!*****************************************!*\
  !*** ./resources/js/pages/App/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "./resources/js/pages/App/style.module.scss");
/* harmony import */ var _components_App_UploadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/App/UploadImage */ "./resources/js/components/App/UploadImage/index.js");
/* harmony import */ var _components_App_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/App/Profile */ "./resources/js/components/App/Profile/index.js");
/* harmony import */ var _components_Skeleton_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Skeleton/Table */ "./resources/js/components/Skeleton/Table.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Table = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_App_Table_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/App/Table */ "./resources/js/components/App/Table/index.js"));
});

var App = function App(_ref) {
  var id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      img = _useState4[0],
      setImg = _useState4[1];

  var handleImg = function handleImg(img) {
    return setImg(img);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var isMounted = true;

    if (isMounted) {
      document.title = 'Dashboard | React App';
    }

    return function () {
      isMounted = false;
    };
  }, []);

  var handleOpen = function handleOpen() {
    return setOpen(true);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].parent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_App_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleOpen: open ? handleClose : handleOpen,
      handleImg: handleImg,
      img: img
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_App_UploadImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleClose: handleClose,
      open: open,
      handleImg: handleImg
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Skeleton_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Table, {
        id: id
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./resources/js/components/App/UploadImage/style.module.css":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./resources/js/components/App/UploadImage/style.module.css ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".zkCewKKS6NQiK\\+ul8pALOw\\=\\= {\r\n  width: clamp(50%, 700px, 90%);\r\n  height: clamp(50%, 300px);\r\n  \r\n  margin: auto;\r\n  position: relative;\r\n  padding: 2rem;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  background: #fff;\r\n  box-shadow: 0px 3px 3px -1px rgba(10, 22, 70, .1), 0px 0px 1px 0px rgba(10, 22, 70, .06);\r\n  word-wrap: break-word;\r\n  background-clip: border-box;\r\n  border: 0;\r\n  border-radius: .75rem;\r\n}\r\n\r\n.EE2X3vXz7WbQtc4OpzSiBw\\=\\= {\r\n  position: relative;\r\n  width: 100%;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n}\r\n\r\n.KfIT-r\\+N4YIkKjXvaVPnPg\\=\\= {\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  max-width: 20rem;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n._1-6ZJk6Q-8GvcVBpQCZyhg\\=\\= {\r\n  text-transform: lowercase;\r\n  text-align: center !important;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.bs1HaWqmC3stRj0wl-i5nA\\=\\= {\r\n  padding: 1rem;\r\n  text-align: center !important;\r\n  position: relative;\r\n  border: 1px dashed rgb(107, 114, 128);\r\n  border-radius: .5rem;\r\n  margin-bottom: 0.5rem;\r\n  display: block;\r\n}\r\n\r\n.bs1HaWqmC3stRj0wl-i5nA\\=\\= input[type=\"file\"] {\r\n  display: none;\r\n}\r\n\r\n.A5qsjCV2nCvIinOsV360nQ\\=\\= {\r\n  cursor: pointer;\r\n  margin: 0;\r\n  color: black;\r\n  transition: .2s ease;\r\n}\r\n\r\n.A5qsjCV2nCvIinOsV360nQ\\=\\=:focus, .A5qsjCV2nCvIinOsV360nQ\\=\\=:focus-within {\r\n  color: rgb(167, 139, 250);\r\n}\r\n\r\n.SIIWWHz\\+JnU8CIofvGtIAA\\=\\= {\r\n  text-align: center !important;\r\n  margin-bottom: .5rem;\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.Yi7WIjGJvrJtYz3Y5fwXhA\\=\\= {\r\n  display: inline-block;\r\n}\r\n\r\n.atW5QAztKF4K85y5T13qgw\\=\\= {\r\n  display: inline-block;\r\n}\r\n\r\n.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button, .zkCewKKS6NQiK\\+ul8pALOw\\=\\= a {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  position: relative;\r\n  background: transparent;\r\n  text-transform: lowercase;\r\n  padding: .4rem .75rem;\r\n  font-size: 1rem;\r\n  border: .75px solid rgba(167, 139, 250, .3);\r\n  border-radius: .4rem;\r\n  transition: .2s ease;\r\n  color: rgb(167, 139, 250);\r\n  font-weight: normal;\r\n  font-family: inherit !important;\r\n  width: 100%;\r\n  line-height: inherit;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button:hover, .zkCewKKS6NQiK\\+ul8pALOw\\=\\= a:hover, .zkCewKKS6NQiK\\+ul8pALOw\\=\\= button:focus-within, .zkCewKKS6NQiK\\+ul8pALOw\\=\\= a:focus-within {\r\n  background: rgba(167, 139, 250, .1);\r\n  border: .75px solid rgba(167, 139, 250, .5);\r\n}\r\n.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button:focus, .zkCewKKS6NQiK\\+ul8pALOw\\=\\= a:hover:focus {\r\n  background: rgba(167, 139, 250, .2);\r\n}\r\n.ML1Ig6mzxquJshzdslPrFg\\=\\= {\r\n  margin-bottom: .25rem;\r\n  margin-top: .5rem;\r\n}\r\n.kTWPZvp25PO0BkByKSVgZA\\=\\= {\r\n  margin-top: .25rem;\r\n}\r\n.wr6ayAfAFHh4\\+4RS-NetSw\\=\\= {\r\n  text-align: center !important;\r\n  margin: 0.5rem 0 0 0;\r\n  color: rgb(167, 139, 250);\r\n}\r\n.Lnx9IzJ3EIoP8tALbEeByw\\=\\= {\r\n  text-align: center !important;\r\n  margin: 0.5rem 0 0 0;\r\n  color: rgb(239, 68, 68);\r\n}\r\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modal": "zkCewKKS6NQiK+ul8pALOw==",
	"card": "EE2X3vXz7WbQtc4OpzSiBw==",
	"img": "KfIT-r+N4YIkKjXvaVPnPg==",
	"title": "_1-6ZJk6Q-8GvcVBpQCZyhg==",
	"drag": "bs1HaWqmC3stRj0wl-i5nA==",
	"click": "A5qsjCV2nCvIinOsV360nQ==",
	"desc": "SIIWWHz+JnU8CIofvGtIAA==",
	"val": "Yi7WIjGJvrJtYz3Y5fwXhA==",
	"progress": "atW5QAztKF4K85y5T13qgw==",
	"btn": "ML1Ig6mzxquJshzdslPrFg==",
	"back": "kTWPZvp25PO0BkByKSVgZA==",
	"msg": "wr6ayAfAFHh4+4RS-NetSw==",
	"error": "Lnx9IzJ3EIoP8tALbEeByw=="
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/components/App/Profile/style.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/components/App/Profile/style.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".t\\+FNCq95VafzoYmbcg41dg\\=\\= {\n  position: relative;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0 solid #eceef3;\n  border-radius: 0.75rem;\n  box-shadow: 0px 3px 3px -1px rgba(10, 22, 70, 0.1), 0px 0px 1px 0px rgba(10, 22, 70, 0.06);\n  display: block;\n  margin: 0.75rem 0;\n  padding: 1rem;\n  text-align: center !important;\n  border: 0;\n  padding: 2rem;\n}\n\n.OamRc3L6cimCfrgJqI7xPw\\=\\= {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  vertical-align: top;\n  overflow: hidden;\n  position: relative;\n  border-radius: 50%;\n  background: white;\n}\n.OamRc3L6cimCfrgJqI7xPw\\=\\= .pz7FnRBHPElVKAXi4YtE4A\\=\\= {\n  border-radius: 50%;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  position: relative;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  vertical-align: middle;\n  font-size: 1rem;\n  font-weight: 600;\n  height: 2.875rem;\n  width: 2.875rem;\n  border-radius: 0.375rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: white;\n}\n.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\= {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  font-size: 0.5rem;\n  opacity: 0;\n  transition: 0.2s ease;\n  text-transform: lowercase;\n}\n.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\=:hover {\n  opacity: 1;\n}\n.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\= span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n._7vfiqLfE0248TPCnbEJ1wg\\=\\= {\n  position: relative;\n  padding: 0.25rem 0 0.5rem 0;\n}\n\n.NRkpAK\\+6YUE3ruS\\+0QfDhA\\=\\= {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  text-align: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.OT32o9RPfny5244ODLjGqA\\=\\= {\n  position: relative;\n  background: transparent;\n  text-transform: lowercase;\n  padding: 0.4rem 0.75rem;\n  border: 0.75px solid rgba(139, 92, 246, 0.3);\n  border-radius: 0.4rem;\n  transition: 0.2s ease;\n  color: #a78bfa;\n  text-decoration: none;\n}\n.OT32o9RPfny5244ODLjGqA\\=\\=:first-of-type {\n  margin-right: 0.5rem;\n}\n.OT32o9RPfny5244ODLjGqA\\=\\=:last-of-type {\n  margin-left: 0.5rem;\n}\n.OT32o9RPfny5244ODLjGqA\\=\\=:hover, .OT32o9RPfny5244ODLjGqA\\=\\=:focus-within {\n  background: rgba(139, 92, 246, 0.1);\n  border: 0.75px solid rgba(139, 92, 246, 0.5);\n}\n.OT32o9RPfny5244ODLjGqA\\=\\=:focus {\n  background: rgba(139, 92, 246, 0.2);\n}\n\n.QHu6rXaG4\\+3SpDfeYAdWyw\\=\\= {\n  text-align: center !important;\n  margin: 0.5rem 0 0 0;\n  color: #a78bfa;\n}\n\n._5fWlUqvDtBNTGq\\+NLPIeEA\\=\\= {\n  text-align: center !important;\n  margin: 0.5rem 0 0 0;\n  color: #ef4444;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"parent": "t+FNCq95VafzoYmbcg41dg==",
	"cont": "OamRc3L6cimCfrgJqI7xPw==",
	"upload": "pz7FnRBHPElVKAXi4YtE4A==",
	"edit": "q88AIx2iw5JiaJPqCvAfvQ==",
	"name": "_7vfiqLfE0248TPCnbEJ1wg==",
	"action": "NRkpAK+6YUE3ruS+0QfDhA==",
	"btn": "OT32o9RPfny5244ODLjGqA==",
	"msg": "QHu6rXaG4+3SpDfeYAdWyw==",
	"error": "_5fWlUqvDtBNTGq+NLPIeEA=="
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/pages/App/style.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/pages/App/style.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".EhsrIsp9NqN9p-r4caw4EA\\=\\= {\n  position: relative;\n  padding: 1.25rem;\n  min-height: 100vh;\n}\n.EhsrIsp9NqN9p-r4caw4EA\\=\\= a {\n  text-decoration: none;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"parent": "EhsrIsp9NqN9p-r4caw4EA=="
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/App/UploadImage/style.module.css":
/*!******************************************************************!*\
  !*** ./resources/js/components/App/UploadImage/style.module.css ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./style.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./resources/js/components/App/UploadImage/style.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_style_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_style_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/App/Profile/style.module.scss":
/*!***************************************************************!*\
  !*** ./resources/js/components/App/Profile/style.module.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./style.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/components/App/Profile/style.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/App/style.module.scss":
/*!**************************************************!*\
  !*** ./resources/js/pages/App/style.module.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./style.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./resources/js/pages/App/style.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);