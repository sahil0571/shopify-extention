"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_home_partials_tiktokIdModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: Object,
    tiktokIdModalShow: Boolean
  },
  data: function data() {
    return {
      mutatedData: this.data,
      mutatedtiktokIdModalShow: this.tiktokIdModalShow,
      tiktokIdError: "Pixel id is required.",
      tiktokIdErrorShow: false
    };
  },
  methods: {
    hideModal: function hideModal() {
      this.$parent.changeModalState("tiktokIdModalShow", "hide");
    },
    hideModalWithSave: function hideModalWithSave() {
      if (this.data.tiktokId == null || this.data.tiktokId == "") {
        this.tiktokIdError = "Pixel id is required.";
        this.tiktokIdErrorShow = true;
      } else {
        this.tiktokIdError = "";
        this.tiktokIdErrorShow = false;

        if (this.data.tiktokId.match(/^([a-zA-Z0-9]{10,})$/)) {
          this.tiktokIdError = "";
          this.tiktokIdErrorShow = false;
          var firstPart = "<script>\n            !function (w, d, t) {\n              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i=\"https://analytics.tiktok.com/i18n/pixel/events.js\";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement(\"script\");o.type=\"text/javascript\",o.async=!0,o.src=i+\"?sdkid=\"+e+\"&lib=\"+t;var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(o,a)}; \n";
          var lastPart = "ttq.load('".concat(this.data.tiktokId, "'); \n") + "ttq.page(); \n" + "}(window, document, 'ttq');\n" + "</scr" + "ipt>";
          this.$parent.data.pixel_code = firstPart + lastPart;
          this.$parent.data.pixel_tracking_enabled = true;
          this.$parent.changeModalState("tiktokIdModalShow", "hide");
          this.$parent.submit();
        } else {
          this.tiktokIdError = "Please enter a valid Pixel id.";
          this.tiktokIdErrorShow = true;
        }
      }
    }
  },
  watch: {
    mutatedData: {
      handler: function handler(val, oldVal) {},
      deep: true
    },
    mutatedtiktokIdModalShow: {
      handler: function handler(val, oldVal) {// console.log(this.mutatedtiktokIdModalShow);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/home/partials/tiktokIdModal.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tiktokIdModal.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiktokIdModal_vue_vue_type_template_id_07ffa665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiktokIdModal.vue?vue&type=template&id=07ffa665& */ "./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=template&id=07ffa665&");
/* harmony import */ var _tiktokIdModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiktokIdModal.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tiktokIdModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tiktokIdModal_vue_vue_type_template_id_07ffa665___WEBPACK_IMPORTED_MODULE_0__.render,
  _tiktokIdModal_vue_vue_type_template_id_07ffa665___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/home/partials/tiktokIdModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tiktokIdModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tiktokIdModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tiktokIdModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=template&id=07ffa665&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=template&id=07ffa665& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tiktokIdModal_vue_vue_type_template_id_07ffa665___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tiktokIdModal_vue_vue_type_template_id_07ffa665___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tiktokIdModal_vue_vue_type_template_id_07ffa665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tiktokIdModal.vue?vue&type=template&id=07ffa665& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=template&id=07ffa665&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=template&id=07ffa665&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/tiktokIdModal.vue?vue&type=template&id=07ffa665& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", [
      _c("div", [
        _c("div", { attrs: { id: "PolarisPortalsContainer" } }, [
          _c("div", { attrs: { "data-portal-id": "modal-Polarisportal12" } }, [
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
                          "aria-labelledby": "Polarismodal-header12",
                          tabindex: "-1",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "Polaris-Modal-Dialog__Modal" },
                          [
                            _c("div", { staticClass: "Polaris-Modal-Header" }, [
                              _vm._m(0),
                              _c(
                                "button",
                                {
                                  staticClass: "Polaris-Modal-CloseButton",
                                  attrs: { "aria-label": "Close" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.hideModal()
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
                                        staticClass: "Polaris-VisuallyHidden",
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
                            ]),
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
                                      { staticClass: "Polaris-Modal-Section" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "Polaris-Stack Polaris-Stack--vertical",
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "Polaris-Stack__Item Polaris-Stack__Item--fill",
                                              },
                                              [
                                                _c("div", {}, [
                                                  _vm._m(1),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "Polaris-Connected",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "Polaris-Connected__Item Polaris-Connected__Item--primary",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "Polaris-TextField Polaris-TextField--hasValue",
                                                              class:
                                                                _vm.tiktokIdErrorShow
                                                                  ? "Polaris-TextField--error"
                                                                  : "",
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .mutatedData
                                                                        .tiktokId,
                                                                    expression:
                                                                      "mutatedData.tiktokId",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "Polaris-TextField__Input",
                                                                attrs: {
                                                                  id: "PolarisTextField2",
                                                                  autocomplete:
                                                                    "off",
                                                                  "aria-labelledby":
                                                                    "PolarisTextField2Label",
                                                                  "aria-invalid":
                                                                    "false",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm
                                                                      .mutatedData
                                                                      .tiktokId,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        _vm.mutatedData,
                                                                        "tiktokId",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c("div", {
                                                                staticClass:
                                                                  "Polaris-TextField__Backdrop",
                                                              }),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.tiktokIdErrorShow
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "Polaris-Labelled__Error",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "Polaris-InlineError",
                                                              attrs: {
                                                                id: "PolarisTextField4Error",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "Polaris-InlineError__Icon",
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "Polaris-Icon",
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "Polaris-VisuallyHidden",
                                                                        }
                                                                      ),
                                                                      _c(
                                                                        "svg",
                                                                        {
                                                                          staticClass:
                                                                            "Polaris-Icon__Svg",
                                                                          attrs:
                                                                            {
                                                                              viewBox:
                                                                                "0 0 20 20",
                                                                              focusable:
                                                                                "false",
                                                                              "aria-hidden":
                                                                                "true",
                                                                            },
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "path",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
                                                                                },
                                                                            }
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.tiktokIdError
                                                                ) +
                                                                  "\n                                  "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("div", {
                                                    attrs: {
                                                      id: "PolarisPortalsContainer",
                                                    },
                                                  }),
                                                ]),
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
                            _vm._v(" "),
                            _c("div", { staticClass: "Polaris-Modal-Footer" }, [
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
                                        { staticClass: "Polaris-Stack__Item" },
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
                                                        "Polaris-Button Polaris-Button--primary",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.hideModalWithSave()
                                                        },
                                                      },
                                                    },
                                                    [_vm._m(2)]
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
      _vm._v(" "),
      _c("div", { staticClass: "Polaris-Backdrop" }),
    ]),
  ])
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
        attrs: { id: "Polarismodal-header12" },
      },
      [
        _c(
          "h2",
          { staticClass: "Polaris-DisplayText Polaris-DisplayText--sizeSmall" },
          [_vm._v("I only have the TikTok Pixel ID (and not the code)")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "Polaris-Labelled__LabelWrapper" }, [
      _c("div", { staticClass: "Polaris-Label" }, [
        _c(
          "label",
          {
            staticClass: "Polaris-Label__Text",
            attrs: { id: "PolarisTextField2Label", for: "PolarisTextField2" },
          },
          [_vm._v("Paste your TikTok Pixel ID:")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "Polaris-Button__Content" }, [
      _c("span", { staticClass: "Polaris-Button__Text" }, [
        _vm._v("Add Pixel"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);