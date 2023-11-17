exports.ids = [4];
exports.modules = {

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("371b2721", content, true, context)
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bio_vue_vue_type_style_index_0_id_56cb5faa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bio_vue_vue_type_style_index_0_id_56cb5faa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bio_vue_vue_type_style_index_0_id_56cb5faa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bio_vue_vue_type_style_index_0_id_56cb5faa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bio_vue_vue_type_style_index_0_id_56cb5faa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p[data-v-56cb5faa]{margin:0;padding:0}.main[data-v-56cb5faa]{font-family:\"Didact Gothic\",\"HarmonyOS Sans SC\",sans-serif!important;font-weight:400}header[data-v-56cb5faa]{font-size:17px;font-weight:100;left:24px;letter-spacing:.3em;margin:0;padding:0;position:fixed;top:24px}.back a[data-v-56cb5faa]{color:#333;font-size:12px;-webkit-text-decoration:none;text-decoration:none}.name h1[data-v-56cb5faa]{font-size:13px;letter-spacing:.1em;padding:0}.name h1[data-v-56cb5faa],.name h2[data-v-56cb5faa]{font-weight:400;margin:0}.name h2[data-v-56cb5faa]{letter-spacing:.08em;padding:4px 0 26px}.name h2[data-v-56cb5faa],.name p[data-v-56cb5faa]{color:#a6a6a6;font-size:11px}.name p[data-v-56cb5faa]{line-height:1.6em}hr[data-v-56cb5faa]{margin:22px 0 42px}.back[data-v-56cb5faa]{left:24px;position:fixed;top:124px}.image-and-table-container[data-v-56cb5faa]{display:flex;margin:168px 0 0 26%}.bio[data-v-56cb5faa]{color:#a6a6a6;font-size:14px;left:24px;margin:0;padding:0;position:fixed}.table-container[data-v-56cb5faa]{letter-spacing:.02em;margin-left:14.7%}td[data-v-56cb5faa]{font-size:11px;font-weight:400;line-height:24px;padding:0;vertical-align:top}.year[data-v-56cb5faa]{letter-spacing:.08em;padding-right:8px;white-space:nowrap}hr[data-v-56cb5faa]{text-align:left}.CN[data-v-56cb5faa]{margin-bottom:32px}.EN[data-v-56cb5faa],footer[data-v-56cb5faa]{color:#a6a6a6;letter-spacing:.04em}footer[data-v-56cb5faa]{bottom:56px;font-size:11px;left:24px;position:fixed;widows:100%;width:100%}@media (max-width:500px){.back[data-v-56cb5faa]{top:88px}.image-and-table-container[data-v-56cb5faa]{flex-direction:column;margin-left:calc(100% - 305px);margin-top:130px;width:281px}.table-container[data-v-56cb5faa]{margin:0}img[data-v-56cb5faa]{height:auto;width:281px}footer[data-v-56cb5faa]{bottom:48px;position:static}footer p[data-v-56cb5faa]{margin:80px 24px 40px}}@media (max-width:767px){.image-and-table-container[data-v-56cb5faa]{flex-direction:column}.image-container[data-v-56cb5faa]{margin:0}.table-container[data-v-56cb5faa]{letter-spacing:.03em;margin:48px 0 0}.name h2[data-v-56cb5faa]{padding:4px 0 24px}hr[data-v-56cb5faa]{margin:24px 0 32px}.CN[data-v-56cb5faa]{margin-bottom:28px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bio.vue?vue&type=template&id=56cb5faa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main"
  }, [_vm._ssrNode("<header data-v-56cb5faa>\n    mk-architects\n  </header> "), _vm._ssrNode("<nav class=\"back\" data-v-56cb5faa>", "</nav>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("back")])], 1), _vm._ssrNode(" <div class=\"bio\" data-v-56cb5faa><p data-v-56cb5faa>bio</p></div> <div class=\"image-and-table-container\" data-v-56cb5faa><img src=\"/profiel.jpg\" width=\"360px\" height=\"440px\" class=\"image-container\" data-v-56cb5faa> <div class=\"table-container\" data-v-56cb5faa><div class=\"name\" data-v-56cb5faa><h1 data-v-56cb5faa>川岛 雅矢</h1> <h2 data-v-56cb5faa>Masaya Kawashima</h2> <p data-v-56cb5faa><span style=\"font-size: 10px;\" data-v-56cb5faa>创始人、主持建筑师</span> / Founder, Principal Architect</p></div> <hr size=\"1.8px\" width=\"2px\" color=\"#333\" data-v-56cb5faa> <table class=\"CN\" data-v-56cb5faa><tbody data-v-56cb5faa><tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>1995</td> <td data-v-56cb5faa>生于日本新泻县</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2018</td> <td data-v-56cb5faa>长冈造形大学 建筑・环境设计学科 毕业<br data-v-56cb5faa>\n              / 山下研究室</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2018</td> <td data-v-56cb5faa>二级注册建筑师 / 日本</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2018 -</td> <td data-v-56cb5faa>B.L.U.E.建筑设计事务所</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2023 -</td> <td data-v-56cb5faa>川岛雅矢建筑环境设计室 创始人、主持建筑师</td></tr></tbody></table> <table class=\"EN\" data-v-56cb5faa><tbody data-v-56cb5faa><tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>1995</td> <td data-v-56cb5faa>Born in Niigata, Japan</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2018</td> <td data-v-56cb5faa>Nagaoka Institute of Design Architecture&amp;Environmental Design<br data-v-56cb5faa>\n              / Prof.Yamashita Lab.</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2018</td> <td data-v-56cb5faa>Registered 2nd-Class Architect /Japan</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2018 -</td> <td data-v-56cb5faa>B.L.U.E. Architecture Studio</td></tr> <tr data-v-56cb5faa><td class=\"year\" data-v-56cb5faa>2023 -</td> <td data-v-56cb5faa>Established mk-architects</td></tr></tbody></table></div></div> <footer data-v-56cb5faa><p data-v-56cb5faa>© mk-architects, 2023</p></footer>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/bio.vue?vue&type=template&id=56cb5faa&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bio.vue?vue&type=script&lang=js
/* harmony default export */ var biovue_type_script_lang_js = ({
  transition: 'fade'
});
// CONCATENATED MODULE: ./pages/bio.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_biovue_type_script_lang_js = (biovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/bio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_biovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "56cb5faa",
  "78f26e14"
  
)

/* harmony default export */ var bio = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bio.js.map