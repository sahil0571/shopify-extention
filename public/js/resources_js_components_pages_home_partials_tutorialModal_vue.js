"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_home_partials_tutorialModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data", "tutorialShow", "thankyouModalShow", "helpModalShow", "shopName"],
  data: function data() {
    return {
      page: 1
    };
  },
  methods: {
    incrementPage: function incrementPage() {
      if (this.page < 3) {
        this.page++;
      }
    },
    decrementPage: function decrementPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    hideTutorial: function hideTutorial() {
      this.$parent.tutorialShow = false;
    },
    showThankyou: function showThankyou() {
      this.$parent.tutorialShow = false;
      this.$parent.thankyouModalShow = true;
    },
    showHelp: function showHelp() {
      this.$parent.tutorialShow = false;
      this.$parent.helpModalShow = true;
    },
    openStore: function openStore() {
      var link = "https://".concat(this.shopName, "/?pixelPreview=true&fromTutorial=true");
      window.open(link, "_blank", "Tikpix pixel preview.");
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.steps[data-v-a3cc2648] {\r\n  display: flex;\r\n  align-items: center;\n}\n.step_1[data-v-a3cc2648] {\r\n  width: 33.33%;\r\n  font-size: 26px;\r\n  position: relative;\n}\n.number[data-v-a3cc2648] {\r\n  width: 1.7em;\r\n  height: 1.7em;\r\n  background-color: #dedede;\r\n  color: #5a5a5a;\r\n  margin-left: calc(50% - 1.7em / 2);\r\n  border: 4px solid #dedede;\r\n  border-radius: 1.7em;\r\n  text-align: center;\r\n  line-height: 1.3;\n}\n.number[data-v-a3cc2648]::before {\r\n  content: \" \";\r\n  position: absolute;\r\n  border: 4px solid #dedede;\r\n  border-radius: 4px;\r\n  left: -4px;\r\n  right: calc(50% + 1.4em / 2);\r\n  top: calc(1.5em / 2);\n}\n.number[data-v-a3cc2648]:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  border: 4px solid #dedede;\r\n  border-radius: 4px;\r\n  left: calc(50% + 1.4em / 2);\r\n  right: -4px;\r\n  top: calc(1.5em / 2);\n}\n.success[data-v-a3cc2648] {\r\n  background-color: #006e52;\r\n  border: 4px solid #006e52;\r\n  color: white;\n}\n.active[data-v-a3cc2648] {\r\n  background-color: #9d9fa1;\r\n  border: 4px solid #9d9fa1;\r\n  color: white;\n}\n.success[data-v-a3cc2648]::before {\r\n  border: 4px solid #006e52;\n}\n.success[data-v-a3cc2648]:after {\r\n  border: 4px solid #006e52;\n}\n.active[data-v-a3cc2648]::before {\r\n  border: 4px solid #9d9fa1;\n}\n.active[data-v-a3cc2648]::after {\r\n  border: 4px solid #9d9fa1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_style_index_0_id_a3cc2648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_style_index_0_id_a3cc2648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_style_index_0_id_a3cc2648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/home/partials/tutorialModal.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tutorialModal.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tutorialModal_vue_vue_type_template_id_a3cc2648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true& */ "./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true&");
/* harmony import */ var _tutorialModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorialModal.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _tutorialModal_vue_vue_type_style_index_0_id_a3cc2648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css& */ "./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tutorialModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tutorialModal_vue_vue_type_template_id_a3cc2648_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _tutorialModal_vue_vue_type_template_id_a3cc2648_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a3cc2648",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/home/partials/tutorialModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tutorialModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_style_index_0_id_a3cc2648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=style&index=0&id=a3cc2648&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_template_id_a3cc2648_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_template_id_a3cc2648_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorialModal_vue_vue_type_template_id_a3cc2648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tutorialModal.vue?vue&type=template&id=a3cc2648&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return this.tutorialShow
    ? _c("div", [
        _c("div", [
          _c("div", { attrs: { id: "PolarisPortalsContainer" } }, [
            _c("div", { attrs: { "data-portal-id": "modal-Polarisportal2" } }, [
              _c("div", [
                _c(
                  "div",
                  {
                    staticClass: "Polaris-Modal-Dialog__Container",
                    attrs: {
                      "data-polaris-layer": "true",
                      "data-polaris-overlay": "true",
                    },
                  },
                  [
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass: "Polaris-Modal-Dialog",
                          attrs: {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": "Polarismodal-header2",
                            tabindex: "-1",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "Polaris-Modal-Dialog__Modal" },
                            [
                              _c(
                                "div",
                                { staticClass: "Polaris-Modal-Header" },
                                [
                                  _vm._m(0),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "Polaris-Modal-CloseButton",
                                      attrs: { "aria-label": "Close" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.hideTutorial()
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "Polaris-Icon Polaris-Icon--colorBase Polaris-Icon--applyColor",
                                        },
                                        [
                                          _c("span", {
                                            staticClass:
                                              "Polaris-VisuallyHidden",
                                          }),
                                          _c(
                                            "svg",
                                            {
                                              staticClass: "Polaris-Icon__Svg",
                                              attrs: {
                                                viewBox: "0 0 20 20",
                                                focusable: "false",
                                                "aria-hidden": "true",
                                              },
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d: "m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "Polaris-Modal__BodyWrapper" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "Polaris-Modal__Body Polaris-Scrollable Polaris-Scrollable--vertical",
                                      attrs: {
                                        "data-polaris-scrollable": "true",
                                      },
                                    },
                                    [
                                      _c(
                                        "section",
                                        {
                                          staticClass: "Polaris-Modal-Section",
                                        },
                                        [
                                          _c("div", { staticClass: "my-1" }, [
                                            _c(
                                              "div",
                                              { staticClass: "steps" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "step_1 " },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "number",
                                                        class: [
                                                          _vm.page == 1
                                                            ? "active"
                                                            : "success",
                                                        ],
                                                      },
                                                      [_vm._v("1")]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "step_1 " },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "number",
                                                        class: [
                                                          _vm.page == 2
                                                            ? "active"
                                                            : "",
                                                          _vm.page == 3
                                                            ? "success"
                                                            : "",
                                                        ],
                                                      },
                                                      [_vm._v("2")]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "step_1 " },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "number",
                                                        class: [
                                                          _vm.page == 3
                                                            ? "active"
                                                            : "",
                                                        ],
                                                      },
                                                      [_vm._v("3")]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _vm.page == 1
                                            ? _c("div", [_vm._m(1)])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.page == 2
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-center",
                                                  },
                                                  [
                                                    _vm._m(2),
                                                    _vm._v(" "),
                                                    _vm._m(3),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {},
                                                      [
                                                        _c(
                                                          "PButton",
                                                          {
                                                            attrs: {
                                                              primary: "",
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.openStore()
                                                              },
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Open Your Store"
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.page == 3
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-center",
                                                  },
                                                  [
                                                    _vm._m(4),
                                                    _vm._v(" "),
                                                    _vm._m(5),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "PButton",
                                                          {
                                                            attrs: {
                                                              primary: "",
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.showThankyou()
                                                              },
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Yes thank you!!"
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "PButton",
                                                          {
                                                            attrs: {
                                                              destructive: "",
                                                              primary: false,
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.showHelp()
                                                              },
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "No, Help Please"
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _vm._e(),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "Polaris-Modal-Footer" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "Polaris-Modal-Footer__FooterContent",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "Polaris-Stack Polaris-Stack--alignmentCenter",
                                        },
                                        [
                                          _c("div", {
                                            staticClass:
                                              "Polaris-Stack__Item Polaris-Stack__Item--fill",
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "Polaris-Stack__Item",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "Polaris-ButtonGroup",
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "Polaris-ButtonGroup__Item",
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "Polaris-Button",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.decrementPage()
                                                            },
                                                          },
                                                        },
                                                        [_vm._m(6)]
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "Polaris-ButtonGroup__Item",
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "Polaris-Button Polaris-Button--primary",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.incrementPage()
                                                            },
                                                          },
                                                        },
                                                        [_vm._m(7)]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "Polaris-Backdrop" }),
            ]),
          ]),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "Polaris-Modal-Header__Title",
        attrs: { id: "Polarismodal-header2" },
      },
      [
        _c(
          "h2",
          { staticClass: "Polaris-DisplayText Polaris-DisplayText--sizeSmall" },
          [_vm._v("Let's Make Sure Everything Works Great!")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("div", { staticClass: "text-center mt-2 c-green " }, [
        _c("h1", { staticClass: "fw-500" }, [_vm._v("Succes !")]),
        _vm._v(" "),
        _c("h1", { staticClass: "fw-500" }, [
          _vm._v("Changes Saved Succesfully."),
        ]),
      ]),
      _vm._v(" "),
      _c("div", {}, [
        _c("br"),
        _vm._v("\n                              It may take up to "),
        _c("u", [_vm._v("30 seconds")]),
        _vm._v(" for the changes to appear in your store. "),
        _c("br"),
        _vm._v(
          "\n                              Now let's make sure that the Pixel is properly installed in your store!\n                            "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb_-2 mt-2 " }, [
      _c("h1", { staticClass: "fw-500" }, [
        _vm._v("Open Your Store And Look For a Pop Up"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-4" }, [
      _c("br"),
      _vm._v(
        "\n                              Open your store and look for a pop up message that will\n                              appear. "
      ),
      _c("br"),
      _vm._v(
        '\n                              When you\'re done - return back to this window and click\n                              "Next". '
      ),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb_-2 mt-2 " }, [
      _c("h1", { staticClass: "fw-500" }, [_vm._v("Did you see it?")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-4" }, [
      _c("br"),
      _vm._v(
        "\n                              Did the pop up message you saw said that the Pixel is\n                              properly working?\n                            "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "Polaris-Button__Content" }, [
      _c("span", { staticClass: "Polaris-Button__Text" }, [_vm._v("Back")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "Polaris-Button__Content" }, [
      _c("span", { staticClass: "Polaris-Button__Text" }, [_vm._v("Next")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);