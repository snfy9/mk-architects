exports.ids = [6];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b3079188", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test2_vue_vue_type_style_index_0_id_20178b42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test2_vue_vue_type_style_index_0_id_20178b42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test2_vue_vue_type_style_index_0_id_20178b42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test2_vue_vue_type_style_index_0_id_20178b42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test2_vue_vue_type_style_index_0_id_20178b42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo[data-v-20178b42]{font-size:18px;letter-spacing:.05em;padding-bottom:20px}a[data-v-20178b42]{color:#1c1c1c;-webkit-text-decoration:none;text-decoration:none}.nav-and-container[data-v-20178b42]{display:flex;justify-content:space-between;padding:0 80px}header[data-v-20178b42]{font-size:11px;height:100vh;position:fixed;top:125px;white-space:nowrap;width:calc(25vw - 37.5px);width:calc(var(--vw, 1vw)*100/12*3 - 37.5px)}ul[data-v-20178b42]{list-style:none;margin:0;padding:0}li[data-v-20178b42]{padding:1px}.caption[data-v-20178b42]{font-weight:700;padding-top:32px}.caption[data-v-20178b42],.description[data-v-20178b42]{font-size:11px;margin:0}.container[data-v-20178b42]{-moz-columns:2;column-count:2;-moz-column-gap:72px;column-gap:72px;margin-left:calc(25vw - 37.5px);margin-left:calc(var(--vw, 1vw)*100/12*3 - 37.5px);margin-top:125px;width:calc(75vw - 112.5px);width:calc(var(--vw, 1vw)*100/12*9 - 112.5px)}.box[data-v-20178b42]{-moz-column-break-inside:avoid;break-inside:avoid;margin-bottom:72px;page-break-inside:avoid}img[data-v-20178b42]{width:100%}@media screen{.container[data-v-20178b42]{width:calc(100% - 40px)}}.works[data-v-20178b42]{padding:0 75px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test2.vue?vue&type=template&id=20178b42&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "nav-and-container"
  }, [_vm._ssrNode("<header data-v-20178b42>", "</header>", [_vm._ssrNode("<div class=\"logo\" data-v-20178b42>\n      mk-architects\n    </div> "), _vm._ssrNode("<nav class=\"menu\" data-v-20178b42>", "</nav>", [_vm._ssrNode("<ul data-v-20178b42>", "</ul>", [_vm._ssrNode("<li data-v-20178b42>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/index"
    }
  }, [_vm._v("Works")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-20178b42>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/bio"
    }
  }, [_vm._v("Bio")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-20178b42>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/bio"
    }
  }, [_vm._v("Contact")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\" data-v-20178b42>", "</div>", _vm._l(_vm.orderedItems, function (item) {
    return _vm._ssrNode("<div class=\"box\" data-v-20178b42>", "</div>", [_c('NuxtLink', {
      attrs: {
        "to": '/works/' + item.projectName
      }
    }, [_c('img', {
      attrs: {
        "src": item.src,
        "alt": "Image"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "caption"
    }, [_vm._v(_vm._s(item.caption))]), _vm._v(" "), _c('p', {
      staticClass: "description"
    }, [_vm._v(_vm._s(item.description))])])], 1);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/test2.vue?vue&type=template&id=20178b42&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test2.vue?vue&type=script&lang=js
/* harmony default export */ var test2vue_type_script_lang_js = ({
  data() {
    return {
      items: [{
        id: 1,
        src: '/works/image1.jpg',
        order: 1,
        caption: 'The Floating Gardens of Serendipity',
        description: 'Utopian Vale, 2011',
        projectName: 'myHome'
      }, {
        id: 2,
        src: '/works/image3.jpg',
        order: 2,
        caption: 'The Floating Gardens of Serendipity',
        description: 'Utopian Vale, 2011'
      }, {
        id: 3,
        src: '/works/image2.jpg',
        order: 3,
        caption: 'The Floating Gardens of Serendipity',
        description: 'Utopian Vale, 2011'
      }, {
        id: 4,
        src: '/works/image5.jpg',
        order: 4,
        caption: 'The Floating Gardens of Serendipity',
        description: 'Utopian Vale, 2011'
      }, {
        id: 5,
        src: '/works/image4.jpg',
        order: 5,
        caption: 'The Floating Gardens of Serendipity',
        description: 'Utopian Vale, 2011'
      }]
    };
  },
  computed: {
    orderedItems() {
      return this.items.slice().sort((a, b) => a.order - b.order);
    }
  }
});
// CONCATENATED MODULE: ./pages/test2.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_test2vue_type_script_lang_js = (test2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/test2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_test2vue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "20178b42",
  "1a8845ec"
  
)

/* harmony default export */ var test2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test2.js.map