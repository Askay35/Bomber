"use strict";
(self["webpackChunkbomber"] = self["webpackChunkbomber"] || []).push([["resources_js_components_pages_Ref_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Ref.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Ref.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/user */ "./resources/js/utils/user.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ui_InputTitleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/InputTitleButton */ "./resources/js/components/ui/InputTitleButton.vue");
/* harmony import */ var _ui_TextTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/TextTitle */ "./resources/js/components/ui/TextTitle.vue");
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/browser */ "./resources/js/utils/browser.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Ref",
  components: {
    InputTitleButton: _ui_InputTitleButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    TextTitle: _ui_TextTitle__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      user_ref_link: (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(""),
      user_ref_money: (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("")
    };
  },
  methods: {
    copyRefLink: function copyRefLink() {
      _utils_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.copyToClipboard(this.user_ref_link);
    },
    getRefAward: function getRefAward() {
      _utils_user__WEBPACK_IMPORTED_MODULE_0__.User.getUserRefAward();
    }
  },
  created: function created() {
    this.user_ref_link = _utils_user__WEBPACK_IMPORTED_MODULE_0__.User.getUserRefLink();
    this.user_ref_money = _utils_user__WEBPACK_IMPORTED_MODULE_0__.User.getUserRefAward();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/InputTitleButton.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/InputTitleButton.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InputTitleButton",
  props: {
    inputId: String,
    inputText: String,
    disabled: Boolean,
    buttonText: String,
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/TextTitle.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/TextTitle.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TextTitle",
  props: {
    text: String,
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Ref.vue?vue&type=template&id=48a31c26":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Ref.vue?vue&type=template&id=48a31c26 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "block-white"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "position-fixed bottom-0 end-0 p-3",
  style: {
    "z-index": "11"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast",
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  "class": "me-auto"
}, "Успешна"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "toast",
  "aria-label": "Close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body"
}, " Ваша реферальная ссылка скопированна! ")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TextTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextTitle");

  var _component_InputTitleButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputTitleButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextTitle, {
    text: "Каждый раз, когда ваш приведенный друг по реферальной ссылке будет совершать депозит, вы будете получать дополнительный бонус на счет. Это правило также распространяется на рефералов ваших друзей, которых привели в\n        игру вы.",
    title: "Играйте вместе с друзьями и зарабатывайте еще больше!"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputTitleButton, {
    title: "Ваша реферальная ссылка:",
    disabled: "",
    onButtonAction: $options.copyRefLink,
    "button-text": "Скопировать",
    "input-text": $data.user_ref_link,
    "input-id": "user-ref-field"
  }, null, 8
  /* PROPS */
  , ["onButtonAction", "input-text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputTitleButton, {
    title: "Ваш доход",
    disabled: "",
    onButtonAction: $options.getRefAward,
    "button-text": "Забрать",
    "input-text": $data.user_ref_money,
    "input-id": "user-money-field"
  }, null, 8
  /* PROPS */
  , ["onButtonAction", "input-text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextTitle, {
    title: "Как это работает?",
    text: "Все ваши рефералы станут для вас рефералами 1-го у\n        ровня и будут приносить вам 10% от депозитов.<br>Рефералы ваших рефералов\n         (1-го уровня) станут для вас рефералами 2-го уровня и будут приносить 3%\n          от депозитов.<br>Рефералы 2-го уровня станут для вас рефералами 3-го уровня и\n           будут вам приносить 2% от депозитов."
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextTitle, {
    title: "Условиями работы партнерской программы запрещено:",
    text: "Привлечение рефералов с помощью спама!\n        <br>Использование собственных или специально зарегистрированных аккаунтов.<br>\n        Привлечение рефералов путем обмана.<br>\n        Нарушители будут оштрафованы или заблокированы в партнерской программе."
  })]), _hoisted_2], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/InputTitleButton.vue?vue&type=template&id=3ed22440":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/InputTitleButton.vue?vue&type=template&id=3ed22440 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title");

var _hoisted_3 = {
  "class": "input-group mb-2 col-12 p-0"
};
var _hoisted_4 = ["id", "value", "disabled"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Button");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [$props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_hoisted_2], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: $props.inputId,
    value: $props.inputText,
    disabled: $props.disabled,
    "class": "form-control bg-white"
  }, null, 8
  /* PROPS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "b-btn-blue",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('button-action');
    })
  }, [$props.buttonText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.buttonText), 1
  /* TEXT */
  )], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_hoisted_5], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/TextTitle.vue?vue&type=template&id=6fc619ca":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/TextTitle.vue?vue&type=template&id=6fc619ca ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
    innerHTML: $props.title
  }, null, 8
  /* PROPS */
  , _hoisted_1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.text
  }, null, 8
  /* PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./resources/js/utils/browser.js":
/*!***************************************!*\
  !*** ./resources/js/utils/browser.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": () => (/* binding */ Browser)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Browser = /*#__PURE__*/function () {
  function Browser() {
    _classCallCheck(this, Browser);
  }

  _createClass(Browser, null, [{
    key: "copyToClipboard",
    value: function copyToClipboard(text) {
      if (window.clipboardData) {
        //Internet Explorer
        window.clipboardData.setData("Text", text);
      } else {
        navigator.clipboard.writeText(text);
      }
    }
  }]);

  return Browser;
}();

/***/ }),

/***/ "./resources/js/utils/user.js":
/*!************************************!*\
  !*** ./resources/js/utils/user.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "getUserRefLink",
    value: function getUserRefLink() {
      return "https://bomber.best/r/Qfkfo225Fef5fw15";
    }
  }, {
    key: "getUserRefAward",
    value: function getUserRefAward() {
      return "0.00";
    }
  }, {
    key: "logout",
    value: function logout() {
      console.log('user logged out');
    }
  }]);

  return User;
}();

/***/ }),

/***/ "./resources/js/components/pages/Ref.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/pages/Ref.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ref_vue_vue_type_template_id_48a31c26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ref.vue?vue&type=template&id=48a31c26 */ "./resources/js/components/pages/Ref.vue?vue&type=template&id=48a31c26");
/* harmony import */ var _Ref_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ref.vue?vue&type=script&lang=js */ "./resources/js/components/pages/Ref.vue?vue&type=script&lang=js");
/* harmony import */ var D_Users_Aslan_Desktop_bomber_1_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Users_Aslan_Desktop_bomber_1_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Ref_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Ref_vue_vue_type_template_id_48a31c26__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/Ref.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ui/InputTitleButton.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ui/InputTitleButton.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputTitleButton_vue_vue_type_template_id_3ed22440__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputTitleButton.vue?vue&type=template&id=3ed22440 */ "./resources/js/components/ui/InputTitleButton.vue?vue&type=template&id=3ed22440");
/* harmony import */ var _InputTitleButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputTitleButton.vue?vue&type=script&lang=js */ "./resources/js/components/ui/InputTitleButton.vue?vue&type=script&lang=js");
/* harmony import */ var D_Users_Aslan_Desktop_bomber_1_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Users_Aslan_Desktop_bomber_1_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InputTitleButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputTitleButton_vue_vue_type_template_id_3ed22440__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ui/InputTitleButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ui/TextTitle.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ui/TextTitle.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextTitle_vue_vue_type_template_id_6fc619ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextTitle.vue?vue&type=template&id=6fc619ca */ "./resources/js/components/ui/TextTitle.vue?vue&type=template&id=6fc619ca");
/* harmony import */ var _TextTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextTitle.vue?vue&type=script&lang=js */ "./resources/js/components/ui/TextTitle.vue?vue&type=script&lang=js");
/* harmony import */ var D_Users_Aslan_Desktop_bomber_1_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Users_Aslan_Desktop_bomber_1_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextTitle_vue_vue_type_template_id_6fc619ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ui/TextTitle.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/Ref.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/Ref.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ref_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ref_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ref.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Ref.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ui/InputTitleButton.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ui/InputTitleButton.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputTitleButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputTitleButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputTitleButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/InputTitleButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ui/TextTitle.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ui/TextTitle.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextTitle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/TextTitle.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/Ref.vue?vue&type=template&id=48a31c26":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Ref.vue?vue&type=template&id=48a31c26 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ref_vue_vue_type_template_id_48a31c26__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ref_vue_vue_type_template_id_48a31c26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ref.vue?vue&type=template&id=48a31c26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Ref.vue?vue&type=template&id=48a31c26");


/***/ }),

/***/ "./resources/js/components/ui/InputTitleButton.vue?vue&type=template&id=3ed22440":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ui/InputTitleButton.vue?vue&type=template&id=3ed22440 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputTitleButton_vue_vue_type_template_id_3ed22440__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputTitleButton_vue_vue_type_template_id_3ed22440__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputTitleButton.vue?vue&type=template&id=3ed22440 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/InputTitleButton.vue?vue&type=template&id=3ed22440");


/***/ }),

/***/ "./resources/js/components/ui/TextTitle.vue?vue&type=template&id=6fc619ca":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ui/TextTitle.vue?vue&type=template&id=6fc619ca ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextTitle_vue_vue_type_template_id_6fc619ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextTitle_vue_vue_type_template_id_6fc619ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextTitle.vue?vue&type=template&id=6fc619ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/TextTitle.vue?vue&type=template&id=6fc619ca");


/***/ })

}]);