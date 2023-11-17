exports.ids = [7];
exports.modules = {

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1727e4ba", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testindex_vue_vue_type_style_index_0_id_1eabdd86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testindex_vue_vue_type_style_index_0_id_1eabdd86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testindex_vue_vue_type_style_index_0_id_1eabdd86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testindex_vue_vue_type_style_index_0_id_1eabdd86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testindex_vue_vue_type_style_index_0_id_1eabdd86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-1eabdd86]{margin:0;overflow:hidden;padding:0}.logo-container[data-v-1eabdd86]{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}.homepage-container[data-v-1eabdd86]{height:100%;left:0;position:fixed;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/testindex.vue?vue&type=template&id=1eabdd86&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_vm.showLogo ? _c('div', {
    key: "logo",
    staticClass: "logo-container"
  }, [_c('img', {
    attrs: {
      "src": "/logo.png",
      "alt": "Your Logo",
      "width": "300px"
    }
  })]) : _c('div', {
    key: "homepage",
    staticClass: "homepage-container"
  }, [_c('p', [_vm._v("Welcome to our website!")])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/testindex.vue?vue&type=template&id=1eabdd86&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/testindex.vue?vue&type=script&lang=js
/* harmony default export */ var testindexvue_type_script_lang_js = ({
  data() {
    return {
      showLogo: true
    };
  },
  mounted() {
    // localStorageから取得して初回アクセスかどうかを判定
    const isFirstAccess = localStorage.getItem('isFirstAccess') === null;
    if (isFirstAccess) {
      // ロゴの表示後、3秒後にホームページに切り替え
      setTimeout(() => {
        this.showLogo = false;
        // 初回アクセスの場合、localStorageにフラグを設定
        localStorage.setItem('isFirstAccess', 'false');
      }, 2000);
    } else {
      // 初回アクセスでない場合、直接ホームページを表示
      this.showLogo = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/testindex.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_testindexvue_type_script_lang_js = (testindexvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/testindex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testindexvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eabdd86",
  "707f3d8c"
  
)

/* harmony default export */ var testindex = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testindex.js.map