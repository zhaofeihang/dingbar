webpackJsonp([1],{

/***/ "+N46":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/kga":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/prevent-body-scroll.js
var prevent_body_scroll = __webpack_require__("JkZY");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-dialog/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_dialog = ({
  mixins: [prevent_body_scroll["a" /* default */]],
  name: 'x-dialog',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    maskZIndex: [String, Number],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true,
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.warn('[VUX warn] x-dialog:scroll 已经废弃。如果你是 100% 布局，请参照文档配置 $layout 以实现阻止滚动');
        }
        return true;
      }
    }
  },
  computed: {
    maskStyle: function maskStyle() {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        };
      }
    }
  },
  mounted: function mounted() {
    if (typeof window !== 'undefined') {
      if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'VIEW_BOX') {
        this.layout = 'VIEW_BOX';
      }
    }
  },

  watch: {
    show: function show(val) {
      this.$emit('update:show', val);
      this.$emit(val ? 'on-show' : 'on-hide');
      if (val) {
        this.addModalClassName();
      } else {
        this.removeModalClassName();
      }
    }
  },
  methods: {
    shouldPreventScroll: function shouldPreventScroll() {
      // hard to get focus on iOS device with fixed position, so just ignore it
      var iOS = /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
      var hasInput = this.$el.querySelector('input') || this.$el.querySelector('textarea');
      if (iOS && hasInput) {
        return true;
      }
    },
    hide: function hide() {
      if (this.hideOnBlur) {
        this.$emit('update:show', false);
        this.$emit('change', false);
        this.$emit('on-click-mask');
      }
    }
  },
  data: function data() {
    return {
      layout: ''
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-dialog/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_dialog = ({
  mixins: [prevent_body_scroll["a" /* default */]],
  name: 'x-dialog',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    maskZIndex: [String, Number],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true,
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.warn('[VUX warn] x-dialog:scroll 已经废弃。如果你是 100% 布局，请参照文档配置 $layout 以实现阻止滚动');
        }
        return true;
      }
    }
  },
  computed: {
    maskStyle: function maskStyle() {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        };
      }
    }
  },
  mounted: function mounted() {
    if (typeof window !== 'undefined') {
      if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'VIEW_BOX') {
        this.layout = 'VIEW_BOX';
      }
    }
  },

  watch: {
    show: function show(val) {
      this.$emit('update:show', val);
      this.$emit(val ? 'on-show' : 'on-hide');
      if (val) {
        this.addModalClassName();
      } else {
        this.removeModalClassName();
      }
    }
  },
  methods: {
    shouldPreventScroll: function shouldPreventScroll() {
      // hard to get focus on iOS device with fixed position, so just ignore it
      var iOS = /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
      var hasInput = this.$el.querySelector('input') || this.$el.querySelector('textarea');
      if (iOS && hasInput) {
        return true;
      }
    },
    hide: function hide() {
      if (this.hideOnBlur) {
        this.$emit('update:show', false);
        this.$emit('change', false);
        this.$emit('on-click-mask');
      }
    }
  },
  data: function data() {
    return {
      layout: ''
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-347e3f32","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-dialog/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-x-dialog",class:{'vux-x-dialog-absolute': _vm.layout === 'VIEW_BOX'}},[_c('transition',{attrs:{"name":_vm.maskTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-mask",style:(_vm.maskStyle),on:{"click":_vm.hide}})]),_vm._v(" "),_c('transition',{attrs:{"name":_vm.dialogTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:_vm.dialogClass,style:(_vm.dialogStyle)},[_vm._t("default")],2)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_x_dialog = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-dialog/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("270o")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_x_dialog,
  src_components_x_dialog,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_dialog = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "0GVd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1lqU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "270o":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3Lt7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox-item.vue
//
//
//
//
//
//

var prefixList = ['-moz-box-', '-webkit-box-', ''];

/* harmony default export */ var flexbox_item = ({
  name: 'flexbox-item',
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  beforeMount: function beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },

  methods: {
    buildWidth: function buildWidth(width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width;
        } else {
          return width / 12;
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth;
      }
    }
  },
  computed: {
    style: function style() {
      var styles = {};
      var marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';

      if (this.$parent.gutter * 1 !== 0) {
        styles[marginName] = this.$parent.gutter + 'px';
      }

      if (this.span) {
        for (var i = 0; i < prefixList.length; i++) {
          styles[prefixList[i] + 'flex'] = '0 0 ' + this.buildWidth(this.span) * 100 + '%';
        }
      }
      if (typeof this.order !== 'undefined') {
        styles.order = this.order;
      }
      return styles;
    }
  },
  data: function data() {
    return {
      bodyWidth: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox-item.vue
//
//
//
//
//
//

var flexbox_item_prefixList = ['-moz-box-', '-webkit-box-', ''];

/* harmony default export */ var flexbox_flexbox_item = ({
  name: 'flexbox-item',
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  beforeMount: function beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },

  methods: {
    buildWidth: function buildWidth(width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width;
        } else {
          return width / 12;
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth;
      }
    }
  },
  computed: {
    style: function style() {
      var styles = {};
      var marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';

      if (this.$parent.gutter * 1 !== 0) {
        styles[marginName] = this.$parent.gutter + 'px';
      }

      if (this.span) {
        for (var i = 0; i < flexbox_item_prefixList.length; i++) {
          styles[flexbox_item_prefixList[i] + 'flex'] = '0 0 ' + this.buildWidth(this.span) * 100 + '%';
        }
      }
      if (typeof this.order !== 'undefined') {
        styles.order = this.order;
      }
      return styles;
    }
  },
  data: function data() {
    return {
      bodyWidth: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f79b7cb","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/flexbox/flexbox-item.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-flexbox-item",style:(_vm.style)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_flexbox_flexbox_item = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/flexbox/flexbox-item.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  flexbox_flexbox_item,
  components_flexbox_flexbox_item,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_flexbox_flexbox_item = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "3k2l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5+/f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "62KO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vux/src/components/x-dialog/index.vue + 3 modules
var x_dialog = __webpack_require__("/kga");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/confirm/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var components_confirm = ({
  name: 'confirm',
  components: {
    XDialog: x_dialog["a" /* default */]
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'ios'
    },
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    title: String,
    confirmText: String,
    cancelText: String,
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    maskZIndex: [Number, String],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    content: String,
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    inputAttrs: Object,
    showContent: {
      type: Boolean,
      default: true
    },
    confirmType: {
      type: String,
      default: 'primary'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    this.showValue = this.show;
    if (this.value) {
      this.showValue = this.value;
    }
  },

  watch: {
    value: function value(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      var _this = this;

      this.$emit('input', val);
      if (val) {
        if (this.showInput) {
          this.msg = '';
          setTimeout(function () {
            if (_this.$refs.input) {
              _this.setInputFocus();
            }
          }, 300);
        }
        this.$emit('on-show'); // emit just after msg is cleared
      }
    }
  },
  data: function data() {
    return {
      msg: '',
      showValue: false
    };
  },

  methods: {
    getInputAttrs: function getInputAttrs() {
      return this.inputAttrs || {
        type: 'text'
      };
    },
    setInputValue: function setInputValue(val) {
      this.msg = val;
    },
    setInputFocus: function setInputFocus(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.$refs.input.focus();
    },
    _onConfirm: function _onConfirm() {
      if (!this.showValue) {
        return;
      }
      if (this.closeOnConfirm) {
        this.showValue = false;
      }
      this.$emit('on-confirm', this.msg);
    },
    _onCancel: function _onCancel() {
      if (!this.showValue) {
        return;
      }
      this.showValue = false;
      this.$emit('on-cancel');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/confirm/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var src_components_confirm = ({
  name: 'confirm',
  components: {
    XDialog: x_dialog["a" /* default */]
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'ios'
    },
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    title: String,
    confirmText: String,
    cancelText: String,
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    maskZIndex: [Number, String],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    content: String,
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    inputAttrs: Object,
    showContent: {
      type: Boolean,
      default: true
    },
    confirmType: {
      type: String,
      default: 'primary'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    this.showValue = this.show;
    if (this.value) {
      this.showValue = this.value;
    }
  },

  watch: {
    value: function value(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      var _this = this;

      this.$emit('input', val);
      if (val) {
        if (this.showInput) {
          this.msg = '';
          setTimeout(function () {
            if (_this.$refs.input) {
              _this.setInputFocus();
            }
          }, 300);
        }
        this.$emit('on-show'); // emit just after msg is cleared
      }
    }
  },
  data: function data() {
    return {
      msg: '',
      showValue: false
    };
  },

  methods: {
    getInputAttrs: function getInputAttrs() {
      return this.inputAttrs || {
        type: 'text'
      };
    },
    setInputValue: function setInputValue(val) {
      this.msg = val;
    },
    setInputFocus: function setInputFocus(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.$refs.input.focus();
    },
    _onConfirm: function _onConfirm() {
      if (!this.showValue) {
        return;
      }
      if (this.closeOnConfirm) {
        this.showValue = false;
      }
      this.$emit('on-confirm', this.msg);
    },
    _onCancel: function _onCancel() {
      if (!this.showValue) {
        return;
      }
      this.showValue = false;
      this.$emit('on-cancel');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c48d9308","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/confirm/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-confirm"},[_c('x-dialog',{attrs:{"dialog-class":_vm.theme === 'android' ? 'weui-dialog weui-skin_android' : 'weui-dialog',"mask-transition":_vm.maskTransition,"dialog-transition":_vm.theme === 'android' ? 'vux-fade' : _vm.dialogTransition,"hide-on-blur":_vm.hideOnBlur,"mask-z-index":_vm.maskZIndex},on:{"on-hide":function($event){return _vm.$emit('on-hide')}},model:{value:(_vm.showValue),callback:function ($$v) {_vm.showValue=$$v},expression:"showValue"}},[(!!_vm.title)?_c('div',{staticClass:"weui-dialog__hd",class:{'with-no-content': !_vm.showContent}},[_c('strong',{staticClass:"weui-dialog__title"},[_vm._v(_vm._s(_vm.title))])]):_vm._e(),_vm._v(" "),(_vm.showContent)?[(!_vm.showInput)?_c('div',{staticClass:"weui-dialog__bd"},[_vm._t("default",[_c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}})])],2):_c('div',{staticClass:"vux-prompt"},[(((_vm.getInputAttrs()).type)==='checkbox')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.msg),expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{"placeholder":_vm.placeholder,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.msg)?_vm._i(_vm.msg,null)>-1:(_vm.msg)},on:{"touchend":_vm.setInputFocus,"change":function($event){var $$a=_vm.msg,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.msg=$$a.concat([$$v]))}else{$$i>-1&&(_vm.msg=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.msg=$$c}}}},'input',_vm.getInputAttrs(),false)):(((_vm.getInputAttrs()).type)==='radio')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.msg),expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{"placeholder":_vm.placeholder,"type":"radio"},domProps:{"checked":_vm._q(_vm.msg,null)},on:{"touchend":_vm.setInputFocus,"change":function($event){_vm.msg=null}}},'input',_vm.getInputAttrs(),false)):_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.msg),expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{"placeholder":_vm.placeholder,"type":(_vm.getInputAttrs()).type},domProps:{"value":(_vm.msg)},on:{"touchend":_vm.setInputFocus,"input":function($event){if($event.target.composing){ return; }_vm.msg=$event.target.value}}},'input',_vm.getInputAttrs(),false))])]:_vm._e(),_vm._v(" "),_c('div',{staticClass:"weui-dialog__ft"},[(_vm.showCancelButton)?_c('a',{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{"href":"javascript:;"},on:{"click":_vm._onCancel}},[_vm._v(_vm._s(_vm.cancelText || '取消'))]):_vm._e(),_vm._v(" "),(_vm.showConfirmButton)?_c('a',{staticClass:"weui-dialog__btn",class:("weui-dialog__btn_" + _vm.confirmType),attrs:{"href":"javascript:;"},on:{"click":_vm._onConfirm}},[_vm._v(_vm._s(_vm.confirmText || '确定'))]):_vm._e()])],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var vux_src_components_confirm = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/confirm/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("mL5d")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  src_components_confirm,
  vux_src_components_confirm,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ var node_modules_vux_src_components_confirm = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "6G1p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8Gte":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8L9H":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Z+i":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9kfk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9ksO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9n4M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bfwr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/loading/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loading = ({
  name: 'loading',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'vux-mask'
    }
  },
  watch: {
    show: function show(val) {
      this.$emit('update:show', val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/loading/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var components_loading = ({
  name: 'loading',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'vux-mask'
    }
  },
  watch: {
    show: function show(val) {
      this.$emit('update:show', val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a79aa162","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/loading/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:!_vm.text ? 'vux-loading-no-text' : ''},[_c('div',{staticClass:"weui-mask_transparent"}),_vm._v(" "),_c('div',{staticClass:"weui-toast",style:({
        position: _vm.position
      })},[_c('i',{staticClass:"weui-loading weui-icon_toast"}),_vm._v(" "),(_vm.text)?_c('p',{staticClass:"weui-toast__content"},[_vm._v(_vm._s(_vm.text || '加载中')),_vm._t("default")],2):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_loading = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/loading/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("Ozxy")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_loading,
  src_components_loading,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ var vux_src_components_loading = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Cbgi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Cfb4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DPlV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DffM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FmQo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FxFc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HZ8C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HdB2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ILcy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JDMP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KSzc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "L3+R":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Lh04":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/fastclick/lib/fastclick.js
var fastclick = __webpack_require__("v5o6");
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/multi-items.js
var multi_items = __webpack_require__("piuB");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tabbar/tabbar.vue
//
//
//
//
//
//



/* harmony default export */ var tabbar = ({
  mounted: function mounted() {
    var _this = this;

    if (false) {
      this.$nextTick(function () {
        var $el = _this.$el;
        var position = window.getComputedStyle($el).position;
        if (position === 'fixed') {
          return;
        } else if (position === 'absolute') {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn('[VUX warn] tabbar 定位默认为 absolute，如果你没有使用 100% 布局(view-box)，需要手动设置 style position 为 fixed');
          }
        }
      });
    }
  },

  name: 'tabbar',
  mixins: [multi_items["b" /* parentMixin */]],
  props: {
    iconClass: String
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tabbar/tabbar.vue
//
//
//
//
//
//



/* harmony default export */ var tabbar_tabbar = ({
  mounted: function mounted() {
    var _this = this;

    if (false) {
      this.$nextTick(function () {
        var $el = _this.$el;
        var position = window.getComputedStyle($el).position;
        if (position === 'fixed') {
          return;
        } else if (position === 'absolute') {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn('[VUX warn] tabbar 定位默认为 absolute，如果你没有使用 100% 布局(view-box)，需要手动设置 style position 为 fixed');
          }
        }
      });
    }
  },

  name: 'tabbar',
  mixins: [multi_items["b" /* parentMixin */]],
  props: {
    iconClass: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-df815522","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/tabbar/tabbar.vue
var tabbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-tabbar"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: tabbar_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_tabbar_tabbar = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/tabbar/tabbar.vue
function injectStyle (ssrContext) {
  __webpack_require__("m3lC")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  tabbar_tabbar,
  components_tabbar_tabbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_tabbar_tabbar = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/badge/index.vue
//
//
//
//

/* harmony default export */ var badge = ({
  name: 'badge',
  props: {
    text: [String, Number]
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/badge/index.vue
//
//
//
//

/* harmony default export */ var components_badge = ({
  name: 'badge',
  props: {
    text: [String, Number]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bcc96ffc","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/badge/index.vue
var badge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['vux-badge', {'vux-badge-dot': typeof _vm.text === 'undefined', 'vux-badge-single': typeof _vm.text !== 'undefined' && _vm.text.toString().length === 1}],domProps:{"textContent":_vm._s(_vm.text)}})}
var badge_staticRenderFns = []
var badge_esExports = { render: badge_render, staticRenderFns: badge_staticRenderFns }
/* harmony default export */ var src_components_badge = (badge_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/badge/index.vue
function badge_injectStyle (ssrContext) {
  __webpack_require__("1lqU")
}
var badge_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var badge___vue_template_functional__ = false
/* styles */
var badge___vue_styles__ = badge_injectStyle
/* scopeId */
var badge___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var badge___vue_module_identifier__ = null
var badge_Component = badge_normalizeComponent(
  components_badge,
  src_components_badge,
  badge___vue_template_functional__,
  badge___vue_styles__,
  badge___vue_scopeId__,
  badge___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_badge = (badge_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tabbar/tabbar-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var tabbar_item = ({
  name: 'tabbar-item',
  components: {
    Badge: vux_src_components_badge
  },
  mounted: function mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true;
    }
  },

  mixins: [multi_items["a" /* childMixin */]],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  computed: {
    isActive: function isActive() {
      return this.$parent.index === this.currentIndex;
    }
  },
  data: function data() {
    return {
      simple: false,
      hasActiveIcon: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tabbar/tabbar-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var tabbar_tabbar_item = ({
  name: 'tabbar-item',
  components: {
    Badge: vux_src_components_badge
  },
  mounted: function mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true;
    }
  },

  mixins: [multi_items["a" /* childMixin */]],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  computed: {
    isActive: function isActive() {
      return this.$parent.index === this.currentIndex;
    }
  },
  data: function data() {
    return {
      simple: false,
      hasActiveIcon: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-22fc8f9a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/tabbar/tabbar-item.vue
var tabbar_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"weui-tabbar__item",class:{'weui-bar__item_on': _vm.isActive, 'vux-tabbar-simple': _vm.simple},attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.onItemClick(true)}}},[(!_vm.simple)?_c('div',{staticClass:"weui-tabbar__icon",class:[_vm.iconClass || _vm.$parent.iconClass, {'vux-reddot': _vm.showDot}]},[(!_vm.simple && !(_vm.hasActiveIcon && _vm.isActive))?_vm._t("icon"):_vm._e(),_vm._v(" "),(!_vm.simple && _vm.hasActiveIcon && _vm.isActive)?_vm._t("icon-active"):_vm._e(),_vm._v(" "),(_vm.badge)?_c('sup',[_c('badge',{attrs:{"text":_vm.badge}})],1):_vm._e()],2):_vm._e(),_vm._v(" "),_c('p',{staticClass:"weui-tabbar__label"},[_vm._t("label")],2)])}
var tabbar_item_staticRenderFns = []
var tabbar_item_esExports = { render: tabbar_item_render, staticRenderFns: tabbar_item_staticRenderFns }
/* harmony default export */ var components_tabbar_tabbar_item = (tabbar_item_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/tabbar/tabbar-item.vue
var tabbar_item_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var tabbar_item___vue_template_functional__ = false
/* styles */
var tabbar_item___vue_styles__ = null
/* scopeId */
var tabbar_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tabbar_item___vue_module_identifier__ = null
var tabbar_item_Component = tabbar_item_normalizeComponent(
  tabbar_tabbar_item,
  components_tabbar_tabbar_item,
  tabbar_item___vue_template_functional__,
  tabbar_item___vue_styles__,
  tabbar_item___vue_scopeId__,
  tabbar_item___vue_module_identifier__
)

/* harmony default export */ var src_components_tabbar_tabbar_item = (tabbar_item_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/vux/src/components/popup/popup.js
var popup = __webpack_require__("+v63");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/dom.js
var dom = __webpack_require__("te2A");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var components_popup = ({
  name: 'popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    // get global layout config
    if (this.$vux && this.$vux.config && this.$vux.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
    this.$nextTick(function () {
      var _this = _this2;
      _this2.popup = new popup["a" /* default */]({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen: function onOpen() {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose: function onClose() {
          _this.show = false;
          if (window.__$vuxPopups && keys_default()(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return;
          setTimeout(function () {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      if (_this2.value) {
        _this2.popup.show();
      }
      _this2.initialShow = false;
    });
  },
  deactivated: function deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false;
    }
    this.removeModalClassName();
  },

  methods: {
    /**
    * https://github.com/airyland/vux/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling: function fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (var i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    },
    removeModalClassName: function removeModalClassName() {
      this.layout === 'VIEW_BOX' && dom["a" /* default */].removeClass(document.body, 'vux-modal-open');
    },
    doShow: function doShow() {
      this.popup && this.popup.show();
      this.$emit('on-show');
      this.fixSafariOverflowScrolling('auto');
      this.layout === 'VIEW_BOX' && dom["a" /* default */].addClass(document.body, 'vux-modal-open');
      if (!this.hasFirstShow) {
        this.$emit('on-first-show');
        this.hasFirstShow = true;
      }
    },
    scrollTop: function scrollTop() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$el.scrollTop = 0;
        var box = _this3.$el.querySelectorAll('.vux-scrollable');
        if (box.length) {
          for (var i = 0; i < box.length; i++) {
            box[i].scrollTop = 0;
          }
        }
      });
    }
  },
  data: function data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    };
  },

  computed: {
    styles: function styles() {
      var styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      if (this.popupStyle) {
        for (var i in this.popupStyle) {
          styles[i] = this.popupStyle[i];
        }
      }
      return styles;
    }
  },
  watch: {
    value: function value(val) {
      this.show = val;
    },
    show: function show(val) {
      var _this4 = this;

      this.$emit('input', val);
      if (val) {
        // rerender body
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false;
          this.$nextTick(function () {
            _this4.scrollTop();
            _this4.shouldRenderBody = true;
            _this4.doShow();
          });
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop();
          }
          this.doShow();
        }
      } else {
        this.$emit('on-hide');
        this.show = false;
        this.popup.hide(false);
        setTimeout(function () {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            _this4.fixSafariOverflowScrolling('touch');
          }
          _this4.removeModalClassName();
        }, 200);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.popup && this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
    this.removeModalClassName();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var src_components_popup = ({
  name: 'popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    // get global layout config
    if (this.$vux && this.$vux.config && this.$vux.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
    this.$nextTick(function () {
      var _this = _this2;
      _this2.popup = new popup["a" /* default */]({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen: function onOpen() {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose: function onClose() {
          _this.show = false;
          if (window.__$vuxPopups && keys_default()(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return;
          setTimeout(function () {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      if (_this2.value) {
        _this2.popup.show();
      }
      _this2.initialShow = false;
    });
  },
  deactivated: function deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false;
    }
    this.removeModalClassName();
  },

  methods: {
    /**
    * https://github.com/airyland/vux/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling: function fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (var i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    },
    removeModalClassName: function removeModalClassName() {
      this.layout === 'VIEW_BOX' && dom["a" /* default */].removeClass(document.body, 'vux-modal-open');
    },
    doShow: function doShow() {
      this.popup && this.popup.show();
      this.$emit('on-show');
      this.fixSafariOverflowScrolling('auto');
      this.layout === 'VIEW_BOX' && dom["a" /* default */].addClass(document.body, 'vux-modal-open');
      if (!this.hasFirstShow) {
        this.$emit('on-first-show');
        this.hasFirstShow = true;
      }
    },
    scrollTop: function scrollTop() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$el.scrollTop = 0;
        var box = _this3.$el.querySelectorAll('.vux-scrollable');
        if (box.length) {
          for (var i = 0; i < box.length; i++) {
            box[i].scrollTop = 0;
          }
        }
      });
    }
  },
  data: function data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    };
  },

  computed: {
    styles: function styles() {
      var styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      if (this.popupStyle) {
        for (var i in this.popupStyle) {
          styles[i] = this.popupStyle[i];
        }
      }
      return styles;
    }
  },
  watch: {
    value: function value(val) {
      this.show = val;
    },
    show: function show(val) {
      var _this4 = this;

      this.$emit('input', val);
      if (val) {
        // rerender body
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false;
          this.$nextTick(function () {
            _this4.scrollTop();
            _this4.shouldRenderBody = true;
            _this4.doShow();
          });
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop();
          }
          this.doShow();
        }
      } else {
        this.$emit('on-hide');
        this.show = false;
        this.popup.hide(false);
        setTimeout(function () {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            _this4.fixSafariOverflowScrolling('touch');
          }
          _this4.removeModalClassName();
        }, 200);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.popup && this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
    this.removeModalClassName();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-613daa96","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/popup/index.vue
var popup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":("vux-popup-animate-" + _vm.position)}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show && !_vm.initialShow),expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:[("vux-popup-" + _vm.position), _vm.show ? 'vux-popup-show' : ''],style:(_vm.styles)},[(_vm.shouldRenderBody)?_vm._t("default"):_vm._e()],2)])}
var popup_staticRenderFns = []
var popup_esExports = { render: popup_render, staticRenderFns: popup_staticRenderFns }
/* harmony default export */ var vux_src_components_popup = (popup_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/popup/index.vue
function popup_injectStyle (ssrContext) {
  __webpack_require__("TEg0")
}
var popup_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var popup___vue_template_functional__ = false
/* styles */
var popup___vue_styles__ = popup_injectStyle
/* scopeId */
var popup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var popup___vue_module_identifier__ = null
var popup_Component = popup_normalizeComponent(
  src_components_popup,
  vux_src_components_popup,
  popup___vue_template_functional__,
  popup___vue_styles__,
  popup___vue_scopeId__,
  popup___vue_module_identifier__
)

/* harmony default export */ var node_modules_vux_src_components_popup = (popup_Component.exports);

// CONCATENATED MODULE: ./static/cordovaplugin.js
// const openAlbum = () => {
//    return new Promise((resolve, reject) => {
//      navigator.camera.getPicture(onSuccess, onFail, {
//        quality: 50,
//        destinationType: Camera.DestinationType.DATA_URL,
//        sourceType: 0
//      })
 
//      function onSuccess (imageData) {
//        resolve('data:image/jpeg;base64,' + imageData)
//      }
 
//      function onFail (message) {
//        reject(message)
//      }
//    })
//  }
 
const takePicture = () => {
   return new Promise((resolve, reject) => {
     navigator.camera.getPicture(onSuccess, onFail, {
       quality: 50,
       destinationType: Camera.DestinationType.FILE_URL,
       sourceType: 1
     })
 
     function onSuccess (imageData) {
       resolve(imageData)
     }
 
     function onFail (message) {
       reject(message)
     }
   })
 }
 const openAlbum = (count=9) => {
  return new Promise((resolve, reject) => {
    window.imagePicker.getPictures(
      function(results) {
        resolve(results);
      }, function (error) {
        reject(error);
      }, {
        maximumImagesCount: count
      }
    );
  })
}
 
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/assets/js/wechatAuth.js


var qs = __webpack_require__("mw3O");
//应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
var SCOPES = ['snsapi_base', 'snsapi_userinfo'];

var wechatAuth_VueWechatAuthPlugin = function () {
  function VueWechatAuthPlugin() {
    classCallCheck_default()(this, VueWechatAuthPlugin);

    this.appid = null;
    this.redirect_uri = null;
    this.scope = SCOPES[1];
    this._code = null;
    this._redirect_uri = null;
  }

  createClass_default()(VueWechatAuthPlugin, [{
    key: 'install',
    value: function install(Vue, options) {
      var wechatAuth = this;
      this.setAppId(options.appid);
      Vue.mixin({
        created: function created() {
          this.$wechatAuth = wechatAuth;
        }
      });
    }
  }, {
    key: 'setAppId',
    value: function setAppId(appid) {
      this.appid = appid;
    }
  }, {
    key: 'returnFromWechat',
    value: function returnFromWechat(redirect_uri) {
      var parsedUrl = qs.parse(redirect_uri.split('?')[1]);
      if (false) {
        // console.log('parsedUrl: ', parsedUrl)
        this.state = null;
        this._code = parsedUrl.code;
      } else {
        if (this.state === null) {
          throw 'You did\'t set state';
        }
        if (parsedUrl.state === this.state) {
          this.state = null;
          this._code = parsedUrl.code;
        } else {
          this.state = null;
          throw 'Wrong state: ' + parsedUrl.state;
        }
      }
    }
  }, {
    key: 'redirect_uri',
    set: function set(redirect_uri) {
      this._redirect_uri = encodeURIComponent(redirect_uri);
    },
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: 'state',
    get: function get() {
      return localStorage.getItem('wechat_auth:state');
    },
    set: function set(state) {
      localStorage.setItem('wechat_auth:state', state);
    }
  }, {
    key: 'authUrl',
    get: function get() {
      if (this.appid === null) {
        throw 'appid must not be null';
      }
      if (this.redirect_uri === null) {
        throw 'redirect uri must not be null';
      }
      this.state = VueWechatAuthPlugin.makeState();
      return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.appid + '&redirect_uri=' + this.redirect_uri + '&response_type=code&scope=' + this.scope + '&state=' + this.state + '#wechat_redirect';
    }
  }, {
    key: 'code',
    get: function get() {
      if (this._code === null) {
        throw 'Not get the code from wechat server!';
      }
      // console.log(this)
      // console.log('this._code: ' + this._code)
      var code = this._code;
      this._code = null;
      // console.log('code: ' + code)
      return code;
    }
  }], [{
    key: 'makeState',
    value: function makeState() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }]);

  return VueWechatAuthPlugin;
}();

var vueWechatAuthPlugin = new wechatAuth_VueWechatAuthPlugin();

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(wechatAuth_VueWechatAuthPlugin);
}

/* harmony default export */ var wechatAuth = (vueWechatAuthPlugin);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue




var _name$data$created$cr;








var App_qs = __webpack_require__("mw3O");

/* harmony default export */ var App = (_name$data$created$cr = {
  name: "app",
  data: function data() {
    return {
      photos: [],
      transitionName: "vux-pop-in",
      showTabbar: true,
      releaseShowState: false
    };
  },

  created: function created() {
    switch (this.$route.path) {
      case "/":
        this.showTabbar = true;
        break;
      case "/page/UserIndex":
        this.showTabbar = true;
        break;

      default:
        this.showTabbar = false;
        break;
    }
  }
}, defineProperty_default()(_name$data$created$cr, 'created', function created() {}), defineProperty_default()(_name$data$created$cr, 'computed', {}), defineProperty_default()(_name$data$created$cr, 'methods', {
  releaseShow: function releaseShow() {
    this.releaseShowState = true;
  },
  takephoto: function takephoto() {
    var _this = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var photo;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return takePicture();

            case 2:
              photo = _context.sent;

              _this.photos.push(photo);
              _this.$router.push({
                path: "/page/release/ReleaseImgEdit",
                name: "ReleaseImgEdit",
                params: {
                  photos: _this.photos
                }
              });
              _this.releaseShowState = false;

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  selectImg: function selectImg() {
    var _this2 = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var photos;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return openAlbum();

            case 2:
              photos = _context2.sent;

              _this2.$router.push({
                path: "/page/release/ReleaseImgEdit",
                name: "ReleaseImgEdit",
                params: {
                  photos: _this2.photos.concat(photos)
                }
              });
              _this2.releaseShowState = false;

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
}), defineProperty_default()(_name$data$created$cr, 'watch', {
  $route: function $route(to, from) {
    switch (to.path) {
      case "/":
        this.showTabbar = true;
        break;
      case "/page/UserIndex":
        this.showTabbar = true;
        break;

      default:
        this.showTabbar = false;
        break;
    }
    if (to.meta.index > from.meta.index) {
      this.transitionName = "vux-pop-in";
    } else {
      this.transitionName = "vux-pop-out";
    }
  }
}), defineProperty_default()(_name$data$created$cr, 'components', {
  Tabbar: src_components_tabbar_tabbar,
  TabbarItem: src_components_tabbar_tabbar_item,
  Popup: node_modules_vux_src_components_popup
}), _name$data$created$cr);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue




var App__name$data$created$cr;








var selectortype_script_index_0_src_App_qs = __webpack_require__("mw3O");

/* harmony default export */ var selectortype_script_index_0_src_App = (App__name$data$created$cr = {
  name: "app",
  data: function data() {
    return {
      photos: [],
      transitionName: "vux-pop-in",
      showTabbar: true,
      releaseShowState: false
    };
  },

  created: function created() {
    switch (this.$route.path) {
      case "/":
        this.showTabbar = true;
        break;
      case "/page/UserIndex":
        this.showTabbar = true;
        break;

      default:
        this.showTabbar = false;
        break;
    }
  }
}, defineProperty_default()(App__name$data$created$cr, 'created', function created() {}), defineProperty_default()(App__name$data$created$cr, 'computed', {}), defineProperty_default()(App__name$data$created$cr, 'methods', {
  releaseShow: function releaseShow() {
    this.releaseShowState = true;
  },
  takephoto: function takephoto() {
    var _this = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var photo;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return takePicture();

            case 2:
              photo = _context.sent;

              _this.photos.push(photo);
              _this.$router.push({
                path: "/page/release/ReleaseImgEdit",
                name: "ReleaseImgEdit",
                params: {
                  photos: _this.photos
                }
              });
              _this.releaseShowState = false;

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  selectImg: function selectImg() {
    var _this2 = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var photos;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return openAlbum();

            case 2:
              photos = _context2.sent;

              _this2.$router.push({
                path: "/page/release/ReleaseImgEdit",
                name: "ReleaseImgEdit",
                params: {
                  photos: _this2.photos.concat(photos)
                }
              });
              _this2.releaseShowState = false;

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
}), defineProperty_default()(App__name$data$created$cr, 'watch', {
  $route: function $route(to, from) {
    switch (to.path) {
      case "/":
        this.showTabbar = true;
        break;
      case "/page/UserIndex":
        this.showTabbar = true;
        break;

      default:
        this.showTabbar = false;
        break;
    }
    if (to.meta.index > from.meta.index) {
      this.transitionName = "vux-pop-in";
    } else {
      this.transitionName = "vux-pop-out";
    }
  }
}), defineProperty_default()(App__name$data$created$cr, 'components', {
  Tabbar: src_components_tabbar_tabbar,
  TabbarItem: src_components_tabbar_tabbar_item,
  Popup: node_modules_vux_src_components_popup
}), App__name$data$created$cr);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-030b7ac4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('transition',{attrs:{"name":_vm.transitionName}},[_c('keep-alive',{attrs:{"include":"Release,ReleaseImgEdit,SelectAddress,SelectLabel"}},[_c('router-view',{staticClass:"router-view"})],1)],1),_vm._v(" "),(_vm.showTabbar)?_c('tabbar',{staticClass:"tabbar"},[_c('tabbar-item',{attrs:{"selected":_vm.$route.path=='/',"link":"/"}},[_c('i',{staticClass:"iconfont icon-suipai",attrs:{"slot":"icon"},slot:"icon"}),_vm._v(" "),_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("随手拍")])]),_vm._v(" "),_c('tabbar-item',[_c('i',{staticClass:"iconfont icon-tianjiafabu",attrs:{"slot":"icon"},on:{"click":_vm.releaseShow},slot:"icon"})]),_vm._v(" "),_c('tabbar-item',{attrs:{"selected":_vm.$route.path=='/page/UserIndex',"link":"/page/UserIndex"}},[_c('i',{staticClass:"iconfont icon-wode",attrs:{"slot":"icon"},slot:"icon"}),_vm._v(" "),_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("我的")])])],1):_vm._e(),_vm._v(" "),_c('popup',{attrs:{"height":"calc(190 *2 / 7.5 * 1vw)","is-transparent":""},model:{value:(_vm.releaseShowState),callback:function ($$v) {_vm.releaseShowState=$$v},expression:"releaseShowState"}},[_c('div',{staticClass:"release-view"},[_c('span',{on:{"click":_vm.takephoto}},[_c('i',{staticClass:"iconfont icon-xiangji",attrs:{"slot":"icon"},slot:"icon"}),_vm._v("\n        拍照\n      ")]),_vm._v(" "),_c('span',{on:{"click":_vm.selectImg}},[_c('i',{staticClass:"iconfont icon-xiangce",attrs:{"slot":"icon"},slot:"icon"}),_vm._v("\n        相册\n      ")])])])],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("wnd2")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  selectortype_script_index_0_src_App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/object-assign/index.js
var object_assign = __webpack_require__("BEQ0");
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_header = ({
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default: function _default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },

  computed: {
    _leftOptions: function _leftOptions() {
      return object_assign_default()({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack: function onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    }
  },
  data: function data() {
    return {
      shouldOverWriteTitle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_header = ({
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default: function _default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },

  computed: {
    _leftOptions: function _leftOptions() {
      return object_assign_default()({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack: function onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    }
  },
  data: function data() {
    return {
      shouldOverWriteTitle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-eb223dbe","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-header/index.vue
var x_header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-header"},[_c('div',{staticClass:"vux-header-left"},[_vm._t("overwrite-left",[_c('transition',{attrs:{"name":_vm.transition}},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm._leftOptions.showBack),expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{"click":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"preventDefault",undefined,$event.key,undefined)){ return null; }},_vm.onClickBack]}},[_vm._v(_vm._s(typeof _vm._leftOptions.backText === 'undefined' ? '返回' : _vm._leftOptions.backText))])]),_vm._v(" "),_c('transition',{attrs:{"name":_vm.transition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm._leftOptions.showBack),expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{"click":_vm.onClickBack}})])]),_vm._v(" "),_vm._t("left")],2),_vm._v(" "),(!_vm.shouldOverWriteTitle)?_c('h1',{staticClass:"vux-header-title",on:{"click":function($event){return _vm.$emit('on-click-title')}}},[_vm._t("default",[_c('transition',{attrs:{"name":_vm.transition}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}]},[_vm._v(_vm._s(_vm.title))])])])],2):_vm._e(),_vm._v(" "),(_vm.shouldOverWriteTitle)?_c('div',{staticClass:"vux-header-title-area"},[_vm._t("overwrite-title")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vux-header-right"},[(_vm.rightOptions.showMore)?_c('a',{staticClass:"vux-header-more",on:{"click":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"preventDefault",undefined,$event.key,undefined)){ return null; }},function($event){return _vm.$emit('on-click-more')}]}}):_vm._e(),_vm._v(" "),_vm._t("right")],2)])}
var x_header_staticRenderFns = []
var x_header_esExports = { render: x_header_render, staticRenderFns: x_header_staticRenderFns }
/* harmony default export */ var src_components_x_header = (x_header_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-header/index.vue
function x_header_injectStyle (ssrContext) {
  __webpack_require__("Zvmn")
}
var x_header_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_header___vue_template_functional__ = false
/* styles */
var x_header___vue_styles__ = x_header_injectStyle
/* scopeId */
var x_header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_header___vue_module_identifier__ = null
var x_header_Component = x_header_normalizeComponent(
  components_x_header,
  src_components_x_header,
  x_header___vue_template_functional__,
  x_header___vue_styles__,
  x_header___vue_scopeId__,
  x_header___vue_module_identifier__
)


/* harmony default export */ var vux_src_components_x_header = (x_header_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux-blazy/blazy.js
var blazy = __webpack_require__("iRq5");
var blazy_default = /*#__PURE__*/__webpack_require__.n(blazy);

// EXTERNAL MODULE: ./node_modules/vux/src/libs/webp-support.js
var webp_support = __webpack_require__("p3QP");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/mixin_uuid.js
var mixin_uuid = __webpack_require__("OFgA");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-img/index.vue
//
//
//
//





/* harmony default export */ var x_img = ({
  name: 'x-img',
  mixins: [mixin_uuid["a" /* default */]],
  created: function created() {
    this.$vux && this.$vux.bus && this.$vux.bus.$on('vux:after-view-enter', this.init);
  },

  methods: {
    init: function init() {
      var _this = this;

      this.blazy && this.blazy.destroy();
      this.$el.src = this.defaultSrc;
      this.$el.className = this.$el.className.replace('b-loaded', '');

      this.blazy = new blazy_default.a({
        scroller: this.scroller,
        container: this.container,
        selector: '#vux-ximg-' + this.uuid,
        offset: _this.offset,
        errorClass: _this.errorClass,
        successClass: _this.successClass,
        separator: _this.separator,
        success: function success(ele) {
          _this.$emit('on-success', _this.src, ele);
        },
        error: function error(ele, msg) {
          _this.$emit('on-error', _this.src, ele, msg);
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$el.setAttribute('id', 'vux-ximg-' + this.uuid);
    this.$nextTick(function () {
      setTimeout(function () {
        _this2.init();
      }, _this2.delay);
    });
    Object(webp_support["a" /* detectWebp */])();
  },

  computed: {
    currentSrc: function currentSrc() {
      if (Object(webp_support["b" /* isSupported */])() && this.webpSrc) {
        return this.webpSrc;
      }
      return this.src;
    }
  },
  props: {
    src: String,
    webpSrc: String,
    defaultSrc: {
      type: String,
      default: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    },
    errorClass: String,
    successClass: String,
    offset: {
      type: Number,
      default: 100
    },
    scroller: Object,
    container: String,
    delay: {
      type: Number,
      default: 0
    },
    separator: String
  },
  watch: {
    src: function src(val) {
      this.init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.blazy && this.blazy.destroy();
    this.blazy = null;
    this.$vux && this.$vux.bus && this.$vux.bus.$off('vux:after-view-enter', this.init);
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-img/index.vue
//
//
//
//





/* harmony default export */ var components_x_img = ({
  name: 'x-img',
  mixins: [mixin_uuid["a" /* default */]],
  created: function created() {
    this.$vux && this.$vux.bus && this.$vux.bus.$on('vux:after-view-enter', this.init);
  },

  methods: {
    init: function init() {
      var _this = this;

      this.blazy && this.blazy.destroy();
      this.$el.src = this.defaultSrc;
      this.$el.className = this.$el.className.replace('b-loaded', '');

      this.blazy = new blazy_default.a({
        scroller: this.scroller,
        container: this.container,
        selector: '#vux-ximg-' + this.uuid,
        offset: _this.offset,
        errorClass: _this.errorClass,
        successClass: _this.successClass,
        separator: _this.separator,
        success: function success(ele) {
          _this.$emit('on-success', _this.src, ele);
        },
        error: function error(ele, msg) {
          _this.$emit('on-error', _this.src, ele, msg);
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$el.setAttribute('id', 'vux-ximg-' + this.uuid);
    this.$nextTick(function () {
      setTimeout(function () {
        _this2.init();
      }, _this2.delay);
    });
    Object(webp_support["a" /* detectWebp */])();
  },

  computed: {
    currentSrc: function currentSrc() {
      if (Object(webp_support["b" /* isSupported */])() && this.webpSrc) {
        return this.webpSrc;
      }
      return this.src;
    }
  },
  props: {
    src: String,
    webpSrc: String,
    defaultSrc: {
      type: String,
      default: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    },
    errorClass: String,
    successClass: String,
    offset: {
      type: Number,
      default: 100
    },
    scroller: Object,
    container: String,
    delay: {
      type: Number,
      default: 0
    },
    separator: String
  },
  watch: {
    src: function src(val) {
      this.init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.blazy && this.blazy.destroy();
    this.blazy = null;
    this.$vux && this.$vux.bus && this.$vux.bus.$off('vux:after-view-enter', this.init);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2b5a953a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-img/index.vue
var x_img_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"vux-x-img",attrs:{"src":_vm.defaultSrc,"data-src":_vm.currentSrc}})}
var x_img_staticRenderFns = []
var x_img_esExports = { render: x_img_render, staticRenderFns: x_img_staticRenderFns }
/* harmony default export */ var src_components_x_img = (x_img_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-img/index.vue
function x_img_injectStyle (ssrContext) {
  __webpack_require__("DPlV")
}
var x_img_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_img___vue_template_functional__ = false
/* styles */
var x_img___vue_styles__ = x_img_injectStyle
/* scopeId */
var x_img___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_img___vue_module_identifier__ = null
var x_img_Component = x_img_normalizeComponent(
  components_x_img,
  src_components_x_img,
  x_img___vue_template_functional__,
  x_img___vue_styles__,
  x_img___vue_scopeId__,
  x_img___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_img = (x_img_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/card/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var card = ({
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter: function onClickFooter() {
      this.footer.link && Object(router["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/card/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_card = ({
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter: function onClickFooter() {
      this.footer.link && Object(router["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3fc027bb","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/card/index.vue
var card_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-panel weui-panel_access"},[(_vm.header && _vm.header.title)?_c('div',{staticClass:"weui-panel__hd",domProps:{"innerHTML":_vm._s(_vm.header.title)},on:{"click":function($event){return _vm.$emit('on-click-header')}}}):_vm._e(),_vm._v(" "),_vm._t("header"),_vm._v(" "),_c('div',{staticClass:"weui-panel__bd"},[_c('div',{staticClass:"vux-card-content"},[_vm._t("content")],2)]),_vm._v(" "),_c('div',{staticClass:"weui-panel__ft"},[(_vm.footer && _vm.footer.title)?_c('a',{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{"href":"javascript:"},on:{"click":_vm.onClickFooter}},[_c('div',{staticClass:"weui-cell__bd",domProps:{"innerHTML":_vm._s(_vm.footer.title)}})]):_vm._e()]),_vm._v(" "),_vm._t("footer")],2)}
var card_staticRenderFns = []
var card_esExports = { render: card_render, staticRenderFns: card_staticRenderFns }
/* harmony default export */ var src_components_card = (card_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/card/index.vue
function card_injectStyle (ssrContext) {
  __webpack_require__("9n4M")
}
var card_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var card___vue_template_functional__ = false
/* styles */
var card___vue_styles__ = card_injectStyle
/* scopeId */
var card___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var card___vue_module_identifier__ = null
var card_Component = card_normalizeComponent(
  components_card,
  src_components_card,
  card___vue_template_functional__,
  card___vue_styles__,
  card___vue_scopeId__,
  card___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_card = (card_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var components_inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-291627fe","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/inline-desc/index.vue
var inline_desc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"vux-label-desc"},[_vm._t("default")],2)}
var inline_desc_staticRenderFns = []
var inline_desc_esExports = { render: inline_desc_render, staticRenderFns: inline_desc_staticRenderFns }
/* harmony default export */ var src_components_inline_desc = (inline_desc_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/inline-desc/index.vue
function inline_desc_injectStyle (ssrContext) {
  __webpack_require__("3k2l")
}
var inline_desc_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var inline_desc___vue_template_functional__ = false
/* styles */
var inline_desc___vue_styles__ = inline_desc_injectStyle
/* scopeId */
var inline_desc___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var inline_desc___vue_module_identifier__ = null
var inline_desc_Component = inline_desc_normalizeComponent(
  components_inline_desc,
  src_components_inline_desc,
  inline_desc___vue_template_functional__,
  inline_desc___vue_styles__,
  inline_desc___vue_scopeId__,
  inline_desc___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_inline_desc = (inline_desc_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/components/cell/props.js
var props = __webpack_require__("2IIR");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/clean-style.js
var clean_style = __webpack_require__("wmxo");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/get-parent-prop.js
var get_parent_prop = __webpack_require__("vLYD");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var cell = ({
  name: 'cell',
  components: {
    InlineDesc: vux_src_components_inline_desc
  },
  props: Object(props["a" /* default */])(),
  created: function created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount: function beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },

  computed: {
    labelStyles: function labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass: function valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style: function style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick: function onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data: function data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var components_cell = ({
  name: 'cell',
  components: {
    InlineDesc: vux_src_components_inline_desc
  },
  props: Object(props["a" /* default */])(),
  created: function created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount: function beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },

  computed: {
    labelStyles: function labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass: function valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style: function style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick: function onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data: function data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ca2d6776","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/cell/index.vue
var cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell",class:{
    'vux-tap-active': _vm.isLink || !!_vm.link,
    'weui-cell_access': _vm.isLink || !!_vm.link,
    'vux-cell-no-border-intent': !_vm.borderIntent,
    'vux-cell-disabled': _vm.disabled
  },style:(_vm.style),on:{"click":_vm.onClick}},[_c('div',{staticClass:"weui-cell__hd"},[_vm._t("icon")],2),_vm._v(" "),_c('div',{staticClass:"vux-cell-bd",class:{'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'}},[_c('p',[(_vm.title || _vm.hasTitleSlot)?_c('label',{staticClass:"vux-label",class:_vm.labelClass,style:(_vm.labelStyles)},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_vm._v(" "),_vm._t("after-title")],2),_vm._v(" "),_c('inline-desc',[_vm._t("inline-desc",[_vm._v(_vm._s(_vm.inlineDesc))])],2)],1),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft",class:_vm.valueClass},[_vm._t("value"),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),(_vm.isLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e()],2),_vm._v(" "),_vm._t("child")],2)}
var cell_staticRenderFns = []
var cell_esExports = { render: cell_render, staticRenderFns: cell_staticRenderFns }
/* harmony default export */ var src_components_cell = (cell_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/cell/index.vue
function cell_injectStyle (ssrContext) {
  __webpack_require__("jNmg")
}
var cell_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var cell___vue_template_functional__ = false
/* styles */
var cell___vue_styles__ = cell_injectStyle
/* scopeId */
var cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var cell___vue_module_identifier__ = null
var cell_Component = cell_normalizeComponent(
  components_cell,
  src_components_cell,
  cell___vue_template_functional__,
  cell___vue_styles__,
  cell___vue_scopeId__,
  cell___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_cell = (cell_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__("OAwv");
var query_string_default = /*#__PURE__*/__webpack_require__.n(query_string);

// CONCATENATED MODULE: ./src/util.js




/* harmony default export */ var util = ({
  //请求数据
  getData: function getData(params) {
    var _this = this;

    if (params.method == "get") {
      return new promise_default.a(function (resolve, reject) {
        fetch('http://www.shedouwang.com/apiapp' + params.url).then(function (response) {
          return response.json();
        }).then(function (result) {
          if (result.return_code == 'success') {
            resolve(result.return_data);
          } else {
            _this.$vux.alert.show({
              title: '提示',
              content: result.return_data
            });
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    } else {
      return new promise_default.a(function (resolve, reject) {
        fetch('http://www.shedouwang.com/apiapp' + params.url, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: params.method,
          body: query_string_default.a.stringify(params.param)
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          if (result.return_code == 'success') {
            resolve(result.return_data);
          } else {
            _this.$vux.alert.show({
              title: '提示',
              content: result.return_data
            });
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  },
  request: function request(params) {
    if (params.method == "get") {
      return new promise_default.a(function (resolve, reject) {
        fetch('http://www.shedouwang.com/apiapp' + params.url).then(function (response) {
          return response.json();
        }).then(function (result) {
          resolve(result);
        }).catch(function (error) {
          reject(error);
        });
      });
    } else {
      return new promise_default.a(function (resolve, reject) {
        fetch('http://www.shedouwang.com/apiapp' + params.url, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: params.method,
          body: query_string_default.a.stringify(params.param)
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          resolve(result);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  },
  testRequest: function testRequest(params) {
    if (params.method == "get") {
      return new promise_default.a(function (resolve, reject) {
        fetch('http://localhost:3000' + params.url).then(function (response) {
          return response.json();
        }).then(function (result) {
          resolve(result);
        }).catch(function (error) {
          reject(error);
        });
      });
    } else {
      return new promise_default.a(function (resolve, reject) {
        fetch('http://localhost:3000' + params.url, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: params.method,
          body: query_string_default.a.stringify(params.param)
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          resolve(result);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  },

  //转换图片
  convertImg: function convertImg(imgSrc, width, height) {
    return new promise_default.a(function (resolve, reject) {
      var canvasT = document.createElement('CANVAS');
      var ctx = canvasT.getContext('2d');
      var img = new Image();
      img.src = imgSrc;
      setTimeout(function () {
        if (img.width > img.height) {
          canvasT.width = width;
          canvasT.height = canvasT.width / img.width * img.height;
        } else {
          canvasT.height = height;
          canvasT.width = canvasT.height / img.height * img.width;
        }
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvasT.width, canvasT.height);
        setTimeout(function () {
          resolve(canvasT.toDataURL('image/jpeg', 0.6));
        }, 100);
      }, 200);
    });
  },
  formdata: function formdata(params) {
    var formData = new FormData();
    keys_default()(params).forEach(function (key) {
      if (params[key] instanceof Array) {
        formData.append(key, params[key]);
        params[key].forEach(function (item) {
          formData.append(key, item + '');
        });
      } else {
        formData.append(key, params[key] + '');
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/UserIndex.vue












/* harmony default export */ var UserIndex = ({
  data: function data() {
    return {
      userId: "",
      userInfo: null,
      cellArr: [{
        title: "我的发布",
        iconclass: "icon-fabu",
        pageUrl: "/page/MyRelease?type=current"
      }, {
        title: "我的关注",
        iconclass: "icon-guanzhu",
        pageUrl: "/page/MyFollow?type=current"
      }, {
        title: "我的收藏",
        iconclass: "icon-shoucangxianxing",
        pageUrl: "/page/MyCollect?type=current"
      }, { title: "我的粉丝", iconclass: "icon-fensi", pageUrl: "/page/MyFan?type=current" }, {
        title: "我的收入",
        iconclass: "icon-shouru",
        pageUrl: "/page/MyIncome?type=current"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Tabbar: src_components_tabbar_tabbar,
    TabbarItem: src_components_tabbar_tabbar_item,
    XImg: vux_src_components_x_img,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell
  },
  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                this.userId = JSON.parse(localStorage.getItem("userInfo")).id;
              } catch (data) {
                this.userId = false;
              }

              if (!this.userId) {
                _context.next = 12;
                break;
              }

              this.$vux.loading.show({
                text: "Loading"
              });
              _context.next = 5;
              return util.getData({
                url: '/users/usersinfos?loginid=' + this.userId,
                method: "get"
              });

            case 5:
              data = _context.sent;

              data.usersinfos.logos = data.usersinfos.logos || "static/img/default-avatar.png";
              data.usersinfos.remarks = data.usersinfos.remarks || "当前大咖有点儿懒。。。";
              this.userInfo = data;
              this.$vux.loading.hide();
              _context.next = 13;
              break;

            case 12:
              this.userInfo = {
                my_fans_total: 0,
                my_follow_total: 0,
                my_post_total: 0,
                my_praise_total: 0,
                usersinfos: {
                  gender: "-1",
                  logos: "static/img/default-avatar.png",
                  nicknames: "未登录",
                  remarks: null
                }
              };

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    toSetPage: function toSetPage() {
      this.$router.push("/page/MySet");
    },
    to: function to() {
      if (this.userId) {
        this.$router.push("/page/user/SetUserInfo");
      } else {
        this.$router.push("/page/user/LoginIndex");
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/UserIndex.vue












/* harmony default export */ var page_UserIndex = ({
  data: function data() {
    return {
      userId: "",
      userInfo: null,
      cellArr: [{
        title: "我的发布",
        iconclass: "icon-fabu",
        pageUrl: "/page/MyRelease?type=current"
      }, {
        title: "我的关注",
        iconclass: "icon-guanzhu",
        pageUrl: "/page/MyFollow?type=current"
      }, {
        title: "我的收藏",
        iconclass: "icon-shoucangxianxing",
        pageUrl: "/page/MyCollect?type=current"
      }, { title: "我的粉丝", iconclass: "icon-fensi", pageUrl: "/page/MyFan?type=current" }, {
        title: "我的收入",
        iconclass: "icon-shouru",
        pageUrl: "/page/MyIncome?type=current"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Tabbar: src_components_tabbar_tabbar,
    TabbarItem: src_components_tabbar_tabbar_item,
    XImg: vux_src_components_x_img,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell
  },
  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                this.userId = JSON.parse(localStorage.getItem("userInfo")).id;
              } catch (data) {
                this.userId = false;
              }

              if (!this.userId) {
                _context.next = 12;
                break;
              }

              this.$vux.loading.show({
                text: "Loading"
              });
              _context.next = 5;
              return util.getData({
                url: '/users/usersinfos?loginid=' + this.userId,
                method: "get"
              });

            case 5:
              data = _context.sent;

              data.usersinfos.logos = data.usersinfos.logos || "static/img/default-avatar.png";
              data.usersinfos.remarks = data.usersinfos.remarks || "当前大咖有点儿懒。。。";
              this.userInfo = data;
              this.$vux.loading.hide();
              _context.next = 13;
              break;

            case 12:
              this.userInfo = {
                my_fans_total: 0,
                my_follow_total: 0,
                my_post_total: 0,
                my_praise_total: 0,
                usersinfos: {
                  gender: "-1",
                  logos: "static/img/default-avatar.png",
                  nicknames: "未登录",
                  remarks: null
                }
              };

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    toSetPage: function toSetPage() {
      this.$router.push("/page/MySet");
    },
    to: function to() {
      if (this.userId) {
        this.$router.push("/page/user/SetUserInfo");
      } else {
        this.$router.push("/page/user/LoginIndex");
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e849891c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/UserIndex.vue
var UserIndex_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.userInfo)?_c('div',{staticClass:"UserIndex"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{showBack: false}}},[_vm._v("\n    我的\n    "),_c('i',{staticClass:"iconfont icon-shezhi",attrs:{"slot":"right"},on:{"click":_vm.toSetPage},slot:"right"})]),_vm._v(" "),_c('div',{on:{"click":_vm.to}},[_c('x-img',{staticClass:"avatar",attrs:{"default-src":_vm.userInfo.usersinfos.logos}}),_vm._v(" "),_c('div',{staticClass:"username"},[_vm._v("\n      "+_vm._s(_vm.userInfo.usersinfos.nicknames)+"\n      "),(_vm.userInfo.usersinfos.gender == 1)?_c('i',{staticClass:"iconfont icon-nansheng"}):_c('i',{staticClass:"iconfont icon-nvsheng"})]),_vm._v(" "),_c('div',{staticClass:"signature"},[_vm._v(_vm._s(_vm.userInfo.usersinfos.remarks))])],1),_vm._v(" "),_c('card',[_c('div',{staticClass:"card-demo-flex card-demo-content01",attrs:{"slot":"content"},slot:"content"},[_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_post_total))]),_vm._v(" "),_c('br'),_vm._v("发布\n      ")]),_vm._v(" "),_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_follow_total))]),_vm._v(" "),_c('br'),_vm._v("关注\n      ")]),_vm._v(" "),_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_fans_total))]),_vm._v(" "),_c('br'),_vm._v("粉丝\n      ")]),_vm._v(" "),_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_praise_total))]),_vm._v(" "),_c('br'),_vm._v("获赞\n      ")])],1)]),_vm._v(" "),_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('cell',{key:index,attrs:{"title":cell.title,"link":cell.pageUrl}},[_c('i',{staticClass:"iconfont",class:cell.iconclass,attrs:{"slot":"icon"},slot:"icon"})])}),1)])],1):_vm._e()}
var UserIndex_staticRenderFns = []
var UserIndex_esExports = { render: UserIndex_render, staticRenderFns: UserIndex_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_page_UserIndex = (UserIndex_esExports);
// CONCATENATED MODULE: ./src/page/UserIndex.vue
function UserIndex_injectStyle (ssrContext) {
  __webpack_require__("HZ8C")
}
var UserIndex_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var UserIndex___vue_template_functional__ = false
/* styles */
var UserIndex___vue_styles__ = UserIndex_injectStyle
/* scopeId */
var UserIndex___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var UserIndex___vue_module_identifier__ = null
var UserIndex_Component = UserIndex_normalizeComponent(
  page_UserIndex,
  selectortype_template_index_0_src_page_UserIndex,
  UserIndex___vue_template_functional__,
  UserIndex___vue_styles__,
  UserIndex___vue_scopeId__,
  UserIndex___vue_module_identifier__
)

/* harmony default export */ var src_page_UserIndex = (UserIndex_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/vux/src/components/flexbox/flexbox.vue + 3 modules
var flexbox = __webpack_require__("YxJB");

// EXTERNAL MODULE: ./node_modules/vux/src/components/flexbox/flexbox-item.vue + 3 modules
var flexbox_item = __webpack_require__("3Lt7");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/group/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/group/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e216ed4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/group/index.vue
var group_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.title)?_c('div',{staticClass:"weui-cells__title",style:(_vm.cleanStyle({
    color: _vm.titleColor
  })),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_vm._t("title"),_vm._v(" "),_c('div',{staticClass:"weui-cells",class:{
    'vux-no-group-title': !_vm.title
  },style:(_vm.cleanStyle({
    marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
  }))},[_vm._t("after-title"),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.footerTitle)?_c('div',{staticClass:"weui-cells__title vux-group-footer-title",style:(_vm.cleanStyle({
    color: _vm.footerTitleColor
  })),domProps:{"innerHTML":_vm._s(_vm.footerTitle)}}):_vm._e()],2)}
var group_staticRenderFns = []
var group_esExports = { render: group_render, staticRenderFns: group_staticRenderFns }
/* harmony default export */ var src_components_group = (group_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/group/index.vue
function group_injectStyle (ssrContext) {
  __webpack_require__("8Gte")
}
var group_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var group___vue_template_functional__ = false
/* styles */
var group___vue_styles__ = group_injectStyle
/* scopeId */
var group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var group___vue_module_identifier__ = null
var group_Component = group_normalizeComponent(
  components_group,
  src_components_group,
  group___vue_template_functional__,
  group___vue_styles__,
  group___vue_scopeId__,
  group___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_group = (group_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/libs/base.js
var base = __webpack_require__("f6Hi");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/icon/index.vue
//
//
//
//

/* harmony default export */ var icon = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className: function className() {
      // compatible with old type param
      return 'weui-icon weui_icon_' + this.type + ' weui-icon-' + this.type.replace(/_/g, '-');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/icon/index.vue
//
//
//
//

/* harmony default export */ var components_icon = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className: function className() {
      // compatible with old type param
      return 'weui-icon weui_icon_' + this.type + ' weui-icon-' + this.type.replace(/_/g, '-');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d7d30802","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/icon/index.vue
var icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:[_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']})}
var icon_staticRenderFns = []
var icon_esExports = { render: icon_render, staticRenderFns: icon_staticRenderFns }
/* harmony default export */ var src_components_icon = (icon_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/icon/index.vue
function icon_injectStyle (ssrContext) {
  __webpack_require__("ILcy")
}
var icon_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var icon___vue_template_functional__ = false
/* styles */
var icon___vue_styles__ = icon_injectStyle
/* scopeId */
var icon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var icon___vue_module_identifier__ = null
var icon_Component = icon_normalizeComponent(
  components_icon,
  src_components_icon,
  icon___vue_template_functional__,
  icon___vue_styles__,
  icon___vue_scopeId__,
  icon___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_icon = (icon_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/components/toast/index.vue + 3 modules
var toast = __webpack_require__("rLAy");

// EXTERNAL MODULE: ./node_modules/validator/lib/isEmail.js
var isEmail = __webpack_require__("2LX0");
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail);

// EXTERNAL MODULE: ./node_modules/validator/lib/isMobilePhone.js
var isMobilePhone = __webpack_require__("Ewe+");
var isMobilePhone_default = /*#__PURE__*/__webpack_require__.n(isMobilePhone);

// EXTERNAL MODULE: ./node_modules/vux/src/tools/debounce/index.js
var debounce = __webpack_require__("nror");

// EXTERNAL MODULE: ./node_modules/vanilla-masker/lib/vanilla-masker.js
var vanilla_masker = __webpack_require__("lFEC");
var vanilla_masker_default = /*#__PURE__*/__webpack_require__.n(vanilla_masker);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-input/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













var validators = {
  'email': {
    fn: isEmail_default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn: function fn(str) {
      return isMobilePhone_default()(str, 'zh-CN');
    },

    msg: '手机号码'
  },
  'china-name': {
    fn: function fn(str) {
      return str.length >= 2 && str.length <= 6;
    },

    msg: '中文姓名'
  }
};
/* harmony default export */ var x_input = ({
  name: 'x-input',
  created: function created() {
    var _this = this;

    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Object(debounce["a" /* default */])(function () {
        _this.$emit('on-change', _this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },

  mixins: [base["a" /* default */]],
  components: {
    Icon: vux_src_components_icon,
    InlineDesc: vux_src_components_inline_desc,
    Toast: toast["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern: function pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed: function labelWidthComputed() {
      var width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors: function hasErrors() {
      return keys_default()(this.errors).length > 0;
    },
    inputStyle: function inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn: function showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },

  methods: {
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(function () {
          // alert(this.$refs.input.length)
          _this2.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon: function onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue: function maskValue(val) {
      var val1 = this.mask ? vanilla_masker_default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear: function clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focusHandler: function focusHandler($event) {
      var _this3 = this;

      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(function () {
        _this3.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur: function onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError: function getError() {
      var key = keys_default()(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate: function validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        var validator = validators[this.isType];
        if (validator) {
          var value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        var validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = '\u6700\u5C11\u5E94\u8BE5\u8F93\u5165' + this.min + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = '\u6700\u591A\u53EF\u4EE5\u8F93\u5165' + this.max + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual: function validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      var willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },

    // #2810
    _getInputMaskSelection: function _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        var maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data: function data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },

  watch: {
    mask: function mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid: function valid() {
      this.getError();
    },
    value: function value(val) {
      this.currentValue = val;
    },
    equalWith: function equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue: function currentValue(newVal, oldVal) {
      var _this4 = this;

      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      var selection = this.$refs.input.selectionStart;
      var direction = newVal.length - oldVal.length;
      selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
      this.lastDirection = direction;
      this.$emit('input', this.maskValue(newVal));
      // #2810
      this.$nextTick(function () {
        if (_this4.$refs.input.selectionStart !== selection) {
          _this4.$refs.input.selectionStart = selection;
          _this4.$refs.input.selectionEnd = selection;
        }
        if (_this4.currentValue !== _this4.maskValue(newVal)) {
          _this4.currentValue = _this4.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-input/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













var x_input_validators = {
  'email': {
    fn: isEmail_default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn: function fn(str) {
      return isMobilePhone_default()(str, 'zh-CN');
    },

    msg: '手机号码'
  },
  'china-name': {
    fn: function fn(str) {
      return str.length >= 2 && str.length <= 6;
    },

    msg: '中文姓名'
  }
};
/* harmony default export */ var components_x_input = ({
  name: 'x-input',
  created: function created() {
    var _this = this;

    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Object(debounce["a" /* default */])(function () {
        _this.$emit('on-change', _this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },

  mixins: [base["a" /* default */]],
  components: {
    Icon: vux_src_components_icon,
    InlineDesc: vux_src_components_inline_desc,
    Toast: toast["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern: function pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed: function labelWidthComputed() {
      var width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors: function hasErrors() {
      return keys_default()(this.errors).length > 0;
    },
    inputStyle: function inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn: function showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },

  methods: {
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(function () {
          // alert(this.$refs.input.length)
          _this2.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon: function onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue: function maskValue(val) {
      var val1 = this.mask ? vanilla_masker_default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear: function clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focusHandler: function focusHandler($event) {
      var _this3 = this;

      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(function () {
        _this3.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur: function onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError: function getError() {
      var key = keys_default()(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate: function validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        var validator = x_input_validators[this.isType];
        if (validator) {
          var value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        var validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = '\u6700\u5C11\u5E94\u8BE5\u8F93\u5165' + this.min + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = '\u6700\u591A\u53EF\u4EE5\u8F93\u5165' + this.max + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual: function validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      var willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },

    // #2810
    _getInputMaskSelection: function _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        var maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data: function data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },

  watch: {
    mask: function mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid: function valid() {
      this.getError();
    },
    value: function value(val) {
      this.currentValue = val;
    },
    equalWith: function equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue: function currentValue(newVal, oldVal) {
      var _this4 = this;

      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      var selection = this.$refs.input.selectionStart;
      var direction = newVal.length - oldVal.length;
      selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
      this.lastDirection = direction;
      this.$emit('input', this.maskValue(newVal));
      // #2810
      this.$nextTick(function () {
        if (_this4.$refs.input.selectionStart !== selection) {
          _this4.$refs.input.selectionStart = selection;
          _this4.$refs.input.selectionEnd = selection;
        }
        if (_this4.currentValue !== _this4.maskValue(newVal)) {
          _this4.currentValue = _this4.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d6629626","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-input/index.vue
var x_input_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-x-input weui-cell",class:{
			'weui-cell_warn': _vm.showWarn,
			'disabled': _vm.disabled,
			'vux-x-input-has-right-full': _vm.hasRightFullHeightSlot
		}},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed, textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),attrs:{"for":("vux-x-input-" + _vm.uuid)},domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd weui-cell__primary",class:_vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''},[(!_vm.type || _vm.type === 'text')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"text","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'number')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"number","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'email')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"email","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'password')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"password","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'tel')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"tel","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"},[_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasRightFullHeightSlot && !_vm.equalWith && _vm.showClear && _vm.currentValue !== '' && !_vm.readonly && !_vm.disabled && _vm.isFocus),expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{"type":"clear"},nativeOn:{"click":function($event){return _vm.clear($event)}}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWarn),expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{"type":"warn","title":!_vm.valid ? _vm.firstError : ''},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}),_vm._v(" "),(!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid)?_c('icon',{staticClass:"vux-input-icon",attrs:{"type":"warn"},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}):_vm._e(),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'success'),expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'error'),expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{"type":"warn"}}),_vm._v(" "),_vm._t("right"),_vm._v(" "),(_vm.hasRightFullHeightSlot)?_c('div',{staticClass:"vux-x-input-right-full"},[_vm._t("right-full-height")],2):_vm._e()],2),_vm._v(" "),_c('toast',{attrs:{"type":"text","width":"auto","time":600},model:{value:(_vm.showErrorToast),callback:function ($$v) {_vm.showErrorToast=$$v},expression:"showErrorToast"}},[_vm._v(_vm._s(_vm.firstError))])],1)}
var x_input_staticRenderFns = []
var x_input_esExports = { render: x_input_render, staticRenderFns: x_input_staticRenderFns }
/* harmony default export */ var src_components_x_input = (x_input_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-input/index.vue
function x_input_injectStyle (ssrContext) {
  __webpack_require__("Qt30")
}
var x_input_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_input___vue_template_functional__ = false
/* styles */
var x_input___vue_styles__ = x_input_injectStyle
/* scopeId */
var x_input___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_input___vue_module_identifier__ = null
var x_input_Component = x_input_normalizeComponent(
  components_x_input,
  src_components_x_input,
  x_input___vue_template_functional__,
  x_input___vue_styles__,
  x_input___vue_scopeId__,
  x_input___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_input = (x_input_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("pFYg");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/vux/src/components/picker/scroller.js
var scroller = __webpack_require__("+geU");

// EXTERNAL MODULE: ./node_modules/vux/src/components/flexbox/index.js
var components_flexbox = __webpack_require__("F3HL");

// EXTERNAL MODULE: ./node_modules/vux/src/components/picker/chain.js
var chain = __webpack_require__("zDi5");

// EXTERNAL MODULE: ./node_modules/vux/src/filters/value2name.js
var value2name = __webpack_require__("NE4E");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/is-array.js
var is_array = __webpack_require__("cEdU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/picker/index.vue


//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var picker = ({
  name: 'picker',
  components: {
    Flexbox: components_flexbox["a" /* Flexbox */],
    FlexboxItem: components_flexbox["b" /* FlexboxItem */]
  },
  created: function created() {
    if (this.columns !== 0) {
      var length = this.columns;
      this.store = new chain["a" /* default */](this.data, length, this.fixedColumns || this.columns);
      this.currentData = this.store.getColumns(this.value);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(function () {
      _this2.render(_this2.currentData, _this2.currentValue);
    });
  },

  props: {
    data: Array,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: Array,
    itemClass: {
      type: String,
      default: 'scroller-item'
    },
    columnWidth: Array
  },
  methods: {
    getNameValues: function getNameValues() {
      return Object(value2name["a" /* default */])(this.currentValue, this.data);
    },
    getId: function getId(i) {
      return '#vux-picker-' + this.uuid + '-' + i;
    },
    render: function render(data, value) {
      this.count = this.currentData.length;
      var _this = this;
      if (!data || !data.length) {
        return;
      }
      var count = this.currentData.length;
      // set first item as value
      if (value.length < count) {
        for (var i = 0; i < count; i++) {
          if (false) {
            console.error('[VUX error] 渲染出错，如果为联动模式，需要指定 columns(列数)');
          }
          this.$set(_this.currentValue, i, data[i][0].value || data[i][0]);
        }
      }

      var _loop = function _loop(_i) {
        /**
        * Still don't know why this happens
        */
        if (!document.querySelector(_this.getId(_i))) {
          return {
            v: void 0
          };
        }

        _this.scroller[_i] && _this.scroller[_i].destroy();
        _this.scroller[_i] = new scroller["a" /* default */](_this.getId(_i), {
          data: data[_i],
          defaultValue: value[_i] || data[_i][0].value,
          itemClass: _this.itemClass,
          onSelect: function onSelect(value) {
            _this.$set(_this.currentValue, _i, value);
            if (!this.columns || this.columns && _this.getValue().length === _this.store.count) {
              _this.$nextTick(function () {
                _this.$emit('on-change', _this.getValue());
              });
            }
            if (_this.columns !== 0) {
              _this.renderChain(_i + 1);
            }
          }
        });
        if (_this.currentValue) {
          _this.scroller[_i].select(value[_i]);
        }
      };

      for (var _i = 0; _i < data.length; _i++) {
        var _ret = _loop(_i);

        if ((typeof _ret === 'undefined' ? 'undefined' : typeof_default()(_ret)) === "object") return _ret.v;
      }
    },
    renderChain: function renderChain(i) {
      if (!this.columns) {
        return;
      }

      // do not render for last scroller
      if (i > this.count - 1) {
        return;
      }

      var _this = this;
      var ID = this.getId(i);
      // destroy old one
      this.scroller[i].destroy();
      var list = this.store.getChildren(_this.getValue()[i - 1]);
      this.scroller[i] = new scroller["a" /* default */](ID, {
        data: list,
        itemClass: _this.item_class,
        onSelect: function onSelect(value) {
          _this.$set(_this.currentValue, i, value);
          _this.$nextTick(function () {
            _this.$emit('on-change', _this.getValue());
          });
          _this.renderChain(i + 1);
        }
      });
      // list is Array(empty) as maybe
      if (list.length) {
        this.$set(this.currentValue, i, list[0].value);
        this.renderChain(i + 1);
      } else {
        this.$set(this.currentValue, i, null);
      }
    },
    getValue: function getValue() {
      var data = [];
      for (var i = 0; i < this.currentData.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value);
        } else {
          return [];
        }
      }
      return data;
    },
    emitValueChange: function emitValueChange(val) {
      if (!this.columns || this.columns && val.length === this.store.count) {
        this.$emit('on-change', val);
      }
    }
  },
  data: function data() {
    return {
      scroller: [],
      count: 0,
      uuid: '',
      currentData: this.data,
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      if (stringify_default()(val) !== stringify_default()(this.currentValue)) {
        this.currentValue = val;
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);
      // render all the scroller for chain datas
      if (this.columns !== 0) {
        if (val.length > 0) {
          if (stringify_default()(val) !== stringify_default()(oldVal)) {
            this.currentData = this.store.getColumns(val);
            this.$nextTick(function () {
              this.render(this.currentData, val);
            });
          }
        }
      } else {
        if (val.length) {
          for (var i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i]);
            }
          }
        } else {
          this.render(this.currentData, []);
        }
      }
    },
    data: function data(val) {
      if (stringify_default()(val) !== stringify_default()(this.currentData)) {
        this.currentData = val;
      }
    },
    currentData: function currentData(newData) {
      var _this3 = this;

      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
        this.$nextTick(function () {
          _this3.render(newData, _this3.currentValue);
          // emit on-change after rerender
          _this3.$nextTick(function () {
            _this3.emitValueChange(_this3.getValue());

            if (stringify_default()(_this3.getValue()) !== stringify_default()(_this3.currentValue)) {
              if (!_this3.columns || _this3.columns && _this3.getValue().length === _this3.store.count) {
                _this3.currentValue = _this3.getValue();
              }
            }
          });
        });
      } else {
        if (this.columns !== 0) {
          if (!newData.length) {
            return;
          }
          var length = this.columns;
          this.store = new chain["a" /* default */](newData, length, this.fixedColumns || this.columns);
          this.currentData = this.store.getColumns(this.currentValue);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    for (var i = 0; i < this.count; i++) {
      this.scroller[i] && this.scroller[i].destroy();
      this.scroller[i] = null;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/picker/index.vue


//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var components_picker = ({
  name: 'picker',
  components: {
    Flexbox: components_flexbox["a" /* Flexbox */],
    FlexboxItem: components_flexbox["b" /* FlexboxItem */]
  },
  created: function created() {
    if (this.columns !== 0) {
      var length = this.columns;
      this.store = new chain["a" /* default */](this.data, length, this.fixedColumns || this.columns);
      this.currentData = this.store.getColumns(this.value);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(function () {
      _this2.render(_this2.currentData, _this2.currentValue);
    });
  },

  props: {
    data: Array,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: Array,
    itemClass: {
      type: String,
      default: 'scroller-item'
    },
    columnWidth: Array
  },
  methods: {
    getNameValues: function getNameValues() {
      return Object(value2name["a" /* default */])(this.currentValue, this.data);
    },
    getId: function getId(i) {
      return '#vux-picker-' + this.uuid + '-' + i;
    },
    render: function render(data, value) {
      this.count = this.currentData.length;
      var _this = this;
      if (!data || !data.length) {
        return;
      }
      var count = this.currentData.length;
      // set first item as value
      if (value.length < count) {
        for (var i = 0; i < count; i++) {
          if (false) {
            console.error('[VUX error] 渲染出错，如果为联动模式，需要指定 columns(列数)');
          }
          this.$set(_this.currentValue, i, data[i][0].value || data[i][0]);
        }
      }

      var _loop = function _loop(_i) {
        /**
        * Still don't know why this happens
        */
        if (!document.querySelector(_this.getId(_i))) {
          return {
            v: void 0
          };
        }

        _this.scroller[_i] && _this.scroller[_i].destroy();
        _this.scroller[_i] = new scroller["a" /* default */](_this.getId(_i), {
          data: data[_i],
          defaultValue: value[_i] || data[_i][0].value,
          itemClass: _this.itemClass,
          onSelect: function onSelect(value) {
            _this.$set(_this.currentValue, _i, value);
            if (!this.columns || this.columns && _this.getValue().length === _this.store.count) {
              _this.$nextTick(function () {
                _this.$emit('on-change', _this.getValue());
              });
            }
            if (_this.columns !== 0) {
              _this.renderChain(_i + 1);
            }
          }
        });
        if (_this.currentValue) {
          _this.scroller[_i].select(value[_i]);
        }
      };

      for (var _i = 0; _i < data.length; _i++) {
        var _ret = _loop(_i);

        if ((typeof _ret === 'undefined' ? 'undefined' : typeof_default()(_ret)) === "object") return _ret.v;
      }
    },
    renderChain: function renderChain(i) {
      if (!this.columns) {
        return;
      }

      // do not render for last scroller
      if (i > this.count - 1) {
        return;
      }

      var _this = this;
      var ID = this.getId(i);
      // destroy old one
      this.scroller[i].destroy();
      var list = this.store.getChildren(_this.getValue()[i - 1]);
      this.scroller[i] = new scroller["a" /* default */](ID, {
        data: list,
        itemClass: _this.item_class,
        onSelect: function onSelect(value) {
          _this.$set(_this.currentValue, i, value);
          _this.$nextTick(function () {
            _this.$emit('on-change', _this.getValue());
          });
          _this.renderChain(i + 1);
        }
      });
      // list is Array(empty) as maybe
      if (list.length) {
        this.$set(this.currentValue, i, list[0].value);
        this.renderChain(i + 1);
      } else {
        this.$set(this.currentValue, i, null);
      }
    },
    getValue: function getValue() {
      var data = [];
      for (var i = 0; i < this.currentData.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value);
        } else {
          return [];
        }
      }
      return data;
    },
    emitValueChange: function emitValueChange(val) {
      if (!this.columns || this.columns && val.length === this.store.count) {
        this.$emit('on-change', val);
      }
    }
  },
  data: function data() {
    return {
      scroller: [],
      count: 0,
      uuid: '',
      currentData: this.data,
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      if (stringify_default()(val) !== stringify_default()(this.currentValue)) {
        this.currentValue = val;
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);
      // render all the scroller for chain datas
      if (this.columns !== 0) {
        if (val.length > 0) {
          if (stringify_default()(val) !== stringify_default()(oldVal)) {
            this.currentData = this.store.getColumns(val);
            this.$nextTick(function () {
              this.render(this.currentData, val);
            });
          }
        }
      } else {
        if (val.length) {
          for (var i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i]);
            }
          }
        } else {
          this.render(this.currentData, []);
        }
      }
    },
    data: function data(val) {
      if (stringify_default()(val) !== stringify_default()(this.currentData)) {
        this.currentData = val;
      }
    },
    currentData: function currentData(newData) {
      var _this3 = this;

      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
        this.$nextTick(function () {
          _this3.render(newData, _this3.currentValue);
          // emit on-change after rerender
          _this3.$nextTick(function () {
            _this3.emitValueChange(_this3.getValue());

            if (stringify_default()(_this3.getValue()) !== stringify_default()(_this3.currentValue)) {
              if (!_this3.columns || _this3.columns && _this3.getValue().length === _this3.store.count) {
                _this3.currentValue = _this3.getValue();
              }
            }
          });
        });
      } else {
        if (this.columns !== 0) {
          if (!newData.length) {
            return;
          }
          var length = this.columns;
          this.store = new chain["a" /* default */](newData, length, this.fixedColumns || this.columns);
          this.currentData = this.store.getColumns(this.currentValue);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    for (var i = 0; i < this.count; i++) {
      this.scroller[i] && this.scroller[i].destroy();
      this.scroller[i] = null;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-589c23ef","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/picker/index.vue
var picker_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-picker"},[_c('flexbox',{attrs:{"gutter":0}},_vm._l((_vm.currentData),function(one,index){return _c('flexbox-item',{key:index,staticStyle:{"margin-left":"0"},attrs:{"span":_vm.columnWidth && _vm.columnWidth[index]}},[_c('div',{staticClass:"vux-picker-item",attrs:{"id":("vux-picker-" + _vm.uuid + "-" + index)}})])}),1)],1)}
var picker_staticRenderFns = []
var picker_esExports = { render: picker_render, staticRenderFns: picker_staticRenderFns }
/* harmony default export */ var src_components_picker = (picker_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/picker/index.vue
function picker_injectStyle (ssrContext) {
  __webpack_require__("5+/f")
}
var picker_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var picker___vue_template_functional__ = false
/* styles */
var picker___vue_styles__ = picker_injectStyle
/* scopeId */
var picker___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var picker___vue_module_identifier__ = null
var picker_Component = picker_normalizeComponent(
  components_picker,
  src_components_picker,
  picker___vue_template_functional__,
  picker___vue_styles__,
  picker___vue_scopeId__,
  picker___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_picker = (picker_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var popup_header = ({
  name: 'popup-header',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    showBottomBorder: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var components_popup_header = ({
  name: 'popup-header',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    showBottomBorder: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d5bfd958","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/popup-header/index.vue
var popup_header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-popup-header",class:_vm.showBottomBorder ? 'vux-1px-b' : ''},[_c('div',{staticClass:"vux-popup-header-left",on:{"click":function($event){return _vm.$emit('on-click-left')}}},[_vm._t("left-text",[_vm._v(_vm._s(_vm.leftText))])],2),_vm._v(" "),_c('div',{staticClass:"vux-popup-header-title"},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_vm._v(" "),_c('div',{staticClass:"vux-popup-header-right",on:{"click":function($event){return _vm.$emit('on-click-right')}}},[_vm._t("right-text",[_vm._v(_vm._s(_vm.rightText))])],2)])}
var popup_header_staticRenderFns = []
var popup_header_esExports = { render: popup_header_render, staticRenderFns: popup_header_staticRenderFns }
/* harmony default export */ var src_components_popup_header = (popup_header_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/popup-header/index.vue
function popup_header_injectStyle (ssrContext) {
  __webpack_require__("6G1p")
}
var popup_header_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var popup_header___vue_template_functional__ = false
/* styles */
var popup_header___vue_styles__ = popup_header_injectStyle
/* scopeId */
var popup_header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var popup_header___vue_module_identifier__ = null
var popup_header_Component = popup_header_normalizeComponent(
  components_popup_header,
  src_components_popup_header,
  popup_header___vue_template_functional__,
  popup_header___vue_styles__,
  popup_header___vue_scopeId__,
  popup_header___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_popup_header = (popup_header_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/filters/array2String.js
var array2String = __webpack_require__("LsKW");

// EXTERNAL MODULE: ./node_modules/vux/src/directives/transfer-dom/index.js
var transfer_dom = __webpack_require__("63CM");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup-picker/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var popup_picker_getObject = function getObject(obj) {
  return JSON.parse(stringify_default()(obj));
};

/* harmony default export */ var popup_picker = ({
  name: 'popup-picker',
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  created: function created() {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show;
    }
  },

  mixins: [mixin_uuid["a" /* default */]],
  components: {
    Picker: vux_src_components_picker,
    Cell: vux_src_components_cell,
    Popup: node_modules_vux_src_components_popup,
    PopupHeader: vux_src_components_popup_header,
    Flexbox: components_flexbox["a" /* Flexbox */],
    FlexboxItem: components_flexbox["b" /* FlexboxItem */],
    InlineDesc: vux_src_components_inline_desc
  },
  filters: {
    array2string: array2String["a" /* default */],
    value2name: value2name["a" /* default */]
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String,
    disabled: Boolean
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        display: 'block',
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth || 'auto',
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    value2name: value2name["a" /* default */],
    getNameValues: function getNameValues() {
      return Object(value2name["a" /* default */])(this.currentValue, this.data);
    },
    onClick: function onClick() {
      if (!this.disabled) {
        this.showValue = true;
      }
    },
    onHide: function onHide(type) {
      this.showValue = false;
      if (type) {
        this.closeType = true;
        this.currentValue = popup_picker_getObject(this.tempValue);
      }
      if (!type) {
        this.closeType = false;
        if (this.value.length > 0) {
          this.tempValue = popup_picker_getObject(this.currentValue);
        }
      }
    },
    onPopupShow: function onPopupShow() {
      // reset close type to false
      this.closeType = false;
      this.$emit('on-show');
    },
    onPopupHide: function onPopupHide(val) {
      if (this.value.length > 0) {
        this.tempValue = popup_picker_getObject(this.currentValue);
      }
      this.$emit('on-hide', this.closeType);
    },
    onPickerChange: function onPickerChange(val) {
      if (stringify_default()(this.currentValue) !== stringify_default()(val)) {
        // if has value, replace it
        if (this.value.length) {
          var nowData = stringify_default()(this.data);
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = popup_picker_getObject(val);
          }
          this.currentData = nowData;
        } else {// if no value, stay quiet
          // if set to auto update, do update the value
        }
      }
      var _val = popup_picker_getObject(val);
      this.$emit('on-shadow-change', _val, Object(value2name["a" /* default */])(_val, this.data).split(' '));
    }
  },
  watch: {
    value: function value(val) {
      if (stringify_default()(val) !== stringify_default()(this.tempValue)) {
        this.tempValue = popup_picker_getObject(val);
        this.currentValue = popup_picker_getObject(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', popup_picker_getObject(val));
      this.$emit('on-change', popup_picker_getObject(val));
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  },
  data: function data() {
    return {
      onShowProcess: false,
      tempValue: popup_picker_getObject(this.value),
      closeType: false,
      currentData: stringify_default()(this.data), // used for detecting if it is after data change
      showValue: false,
      currentValue: this.value
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup-picker/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var components_popup_picker_getObject = function getObject(obj) {
  return JSON.parse(stringify_default()(obj));
};

/* harmony default export */ var components_popup_picker = ({
  name: 'popup-picker',
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  created: function created() {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show;
    }
  },

  mixins: [mixin_uuid["a" /* default */]],
  components: {
    Picker: vux_src_components_picker,
    Cell: vux_src_components_cell,
    Popup: node_modules_vux_src_components_popup,
    PopupHeader: vux_src_components_popup_header,
    Flexbox: components_flexbox["a" /* Flexbox */],
    FlexboxItem: components_flexbox["b" /* FlexboxItem */],
    InlineDesc: vux_src_components_inline_desc
  },
  filters: {
    array2string: array2String["a" /* default */],
    value2name: value2name["a" /* default */]
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String,
    disabled: Boolean
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        display: 'block',
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth || 'auto',
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    value2name: value2name["a" /* default */],
    getNameValues: function getNameValues() {
      return Object(value2name["a" /* default */])(this.currentValue, this.data);
    },
    onClick: function onClick() {
      if (!this.disabled) {
        this.showValue = true;
      }
    },
    onHide: function onHide(type) {
      this.showValue = false;
      if (type) {
        this.closeType = true;
        this.currentValue = components_popup_picker_getObject(this.tempValue);
      }
      if (!type) {
        this.closeType = false;
        if (this.value.length > 0) {
          this.tempValue = components_popup_picker_getObject(this.currentValue);
        }
      }
    },
    onPopupShow: function onPopupShow() {
      // reset close type to false
      this.closeType = false;
      this.$emit('on-show');
    },
    onPopupHide: function onPopupHide(val) {
      if (this.value.length > 0) {
        this.tempValue = components_popup_picker_getObject(this.currentValue);
      }
      this.$emit('on-hide', this.closeType);
    },
    onPickerChange: function onPickerChange(val) {
      if (stringify_default()(this.currentValue) !== stringify_default()(val)) {
        // if has value, replace it
        if (this.value.length) {
          var nowData = stringify_default()(this.data);
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = components_popup_picker_getObject(val);
          }
          this.currentData = nowData;
        } else {// if no value, stay quiet
          // if set to auto update, do update the value
        }
      }
      var _val = components_popup_picker_getObject(val);
      this.$emit('on-shadow-change', _val, Object(value2name["a" /* default */])(_val, this.data).split(' '));
    }
  },
  watch: {
    value: function value(val) {
      if (stringify_default()(val) !== stringify_default()(this.tempValue)) {
        this.tempValue = components_popup_picker_getObject(val);
        this.currentValue = components_popup_picker_getObject(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', components_popup_picker_getObject(val));
      this.$emit('on-change', components_popup_picker_getObject(val));
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  },
  data: function data() {
    return {
      onShowProcess: false,
      tempValue: components_popup_picker_getObject(this.value),
      closeType: false,
      currentData: stringify_default()(this.data), // used for detecting if it is after data change
      showValue: false,
      currentValue: this.value
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-747bc0aa","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/popup-picker/index.vue
var popup_picker_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-cell-box"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCell),expression:"showCell"}],staticClass:"weui-cell vux-tap-active",class:{'weui-cell_access': !_vm.disabled},on:{"click":_vm.onClick}},[_c('div',{staticClass:"weui-cell__hd"},[_vm._t("title",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:(_vm.labelStyles),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e()],{"labelClass":"weui-label","labelStyle":_vm.labelStyles,"labelTitle":_vm.title}),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"vux-cell-primary vux-popup-picker-select-box"},[_c('div',{staticClass:"vux-popup-picker-select",style:({textAlign: _vm.valueTextAlign})},[(!_vm.displayFormat && !_vm.showName && _vm.value.length)?_c('span',{staticClass:"vux-popup-picker-value vux-cell-value"},[_vm._v(_vm._s(_vm._f("array2string")(_vm.value)))]):_vm._e(),_vm._v(" "),(!_vm.displayFormat && _vm.showName && _vm.value.length)?_c('span',{staticClass:"vux-popup-picker-value vux-cell-value"},[_vm._v(_vm._s(_vm._f("value2name")(_vm.value,_vm.data)))]):_vm._e(),_vm._v(" "),(_vm.displayFormat && _vm.value.length)?_c('span',{staticClass:"vux-popup-picker-value vux-cell-value"},[_vm._v(_vm._s(_vm.displayFormat(_vm.value, _vm.value2name(_vm.value, _vm.data))))]):_vm._e(),_vm._v(" "),(!_vm.value.length && _vm.placeholder)?_c('span',{staticClass:"vux-popup-picker-placeholder vux-cell-placeholder",domProps:{"textContent":_vm._s(_vm.placeholder)}}):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"})]),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom",value:(_vm.isTransferDom),expression:"isTransferDom"}]},[_c('popup',{staticClass:"vux-popup-picker",attrs:{"id":("vux-popup-picker-" + _vm.uuid),"popup-style":_vm.popupStyle},on:{"on-hide":_vm.onPopupHide,"on-show":_vm.onPopupShow},model:{value:(_vm.showValue),callback:function ($$v) {_vm.showValue=$$v},expression:"showValue"}},[_c('div',{staticClass:"vux-popup-picker-container"},[_c('popup-header',{attrs:{"left-text":_vm.cancelText || '取消',"right-text":_vm.confirmText || '完成',"title":_vm.popupTitle},on:{"on-click-left":function($event){return _vm.onHide(false)},"on-click-right":function($event){return _vm.onHide(true)}}}),_vm._v(" "),_c('picker',{attrs:{"data":_vm.data,"columns":_vm.columns,"fixed-columns":_vm.fixedColumns,"container":'#vux-popup-picker-'+_vm.uuid,"column-width":_vm.columnWidth},on:{"on-change":_vm.onPickerChange},model:{value:(_vm.tempValue),callback:function ($$v) {_vm.tempValue=$$v},expression:"tempValue"}})],1)])],1)])}
var popup_picker_staticRenderFns = []
var popup_picker_esExports = { render: popup_picker_render, staticRenderFns: popup_picker_staticRenderFns }
/* harmony default export */ var src_components_popup_picker = (popup_picker_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/popup-picker/index.vue
function popup_picker_injectStyle (ssrContext) {
  __webpack_require__("+N46")
}
var popup_picker_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var popup_picker___vue_template_functional__ = false
/* styles */
var popup_picker___vue_styles__ = popup_picker_injectStyle
/* scopeId */
var popup_picker___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var popup_picker___vue_module_identifier__ = null
var popup_picker_Component = popup_picker_normalizeComponent(
  components_popup_picker,
  src_components_popup_picker,
  popup_picker___vue_template_functional__,
  popup_picker___vue_styles__,
  popup_picker___vue_scopeId__,
  popup_picker___vue_module_identifier__
)


/* harmony default export */ var vux_src_components_popup_picker = (popup_picker_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/components/datetime/datetimepicker.js + 3 modules
var datetimepicker = __webpack_require__("zV4+");

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/uuid.js
var uuid = __webpack_require__("KRg4");

// EXTERNAL MODULE: ./node_modules/vux/src/tools/date/format.js
var date_format = __webpack_require__("ODCk");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/datetime/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var datetime = ({
  name: 'datetime',
  mixins: [uuid["a" /* default */]],
  components: {
    Group: vux_src_components_group,
    InlineDesc: vux_src_components_inline_desc,
    Icon: vux_src_components_icon
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD',
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          return console.error('[VUX] Datetime prop:format 使用 A 时只允许的值为： YYYY-MM-DD A');
        }
        return true;
      }
    },
    title: String,
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: {
      type: String,
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.error('[VUX] Datetime prop:start-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    endDate: {
      type: String,
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.error('[VUX] Datetime prop:end-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String,
    computeHoursFunction: Function,
    computeDaysFunction: Function,
    orderMap: Object
  },
  created: function created() {
    this.isFirstSetValue = false;
    this.currentValue = this.value;
  },
  data: function data() {
    return {
      currentShow: false,
      currentValue: null,
      valid: true,
      errors: {}
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    var uuid = this.uuid;
    this.$el.setAttribute('id', 'vux-datetime-' + uuid);
    if (!this.readonly) {
      this.$nextTick(function () {
        _this2.render();

        if (_this2.show) {
          _this2.$nextTick(function () {
            _this2.picker && _this2.picker.show(_this2.currentValue);
          });
        }
      });
    }
  },

  computed: {
    styles: function styles() {
      if (!this.$parent) {
        return {};
      }
      return {
        width: this.$parent.labelWidth,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    pickerOptions: function pickerOptions() {
      var _this = this;
      var options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        computeHoursFunction: this.computeHoursFunction,
        computeDaysFunction: this.computeDaysFunction,
        orderMap: this.orderMap || {},
        onSelect: function onSelect(type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue);
            _this.$emit('on-change', wholeValue);
          }
        },
        onConfirm: function onConfirm(value) {
          _this.currentValue = value;
        },
        onClear: function onClear(value) {
          _this.$emit('on-clear', value);
        },
        onHide: function onHide(type) {
          _this.currentShow = false;
          _this.$emit('update:show', false);
          _this.validate();
          _this.$emit('on-hide', type);
          if (type === 'cancel') {
            _this.$emit('on-cancel');
          }
          if (type === 'confirm') {
            setTimeout(function () {
              _this.$nextTick(function () {
                _this.$emit('on-confirm', _this.value);
              });
            });
          }
        },
        onShow: function onShow() {
          _this.currentShow = true;
          _this.$emit('update:show', true);
          _this.$emit('on-show');
        }
      };
      if (this.minYear) {
        options.minYear = this.minYear;
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear;
      }
      return options;
    },
    firstError: function firstError() {
      var key = keys_default()(this.errors)[0];
      return this.errors[key];
    },
    labelClass: function labelClass() {
      if (!this.$parent) {
        return {};
      }
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    getButtonText: function getButtonText(type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText;
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText;
      }
      return this.$el.getAttribute('data-' + type + '-text');
    },
    render: function render() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.picker && _this3.picker.destroy();
        _this3.picker = new datetimepicker["a" /* default */](_this3.pickerOptions);
      });
    },
    validate: function validate() {
      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填';
        return;
      }
      this.valid = true;
      this.errors = {};
    }
  },
  watch: {
    readonly: function readonly(val) {
      if (val) {
        this.picker && this.picker.destroy();
      } else {
        this.render();
      }
    },
    show: function show(val) {
      if (val === this.currentShow) return;
      if (val) {
        this.picker && this.picker.show(this.currentValue);
      } else {
        this.picker && this.picker.hide(this.currentValue);
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true;
        oldVal && this.$emit('on-change', val);
      } else {
        this.$emit('on-change', val);
      }
      this.validate();
    },
    startDate: function startDate() {
      this.render();
    },
    endDate: function endDate() {
      this.render();
    },
    format: function format(val) {
      if (this.currentValue) {
        this.currentValue = Object(date_format["a" /* default */])(this.currentValue, val);
      }
      this.render();
    },
    value: function value(val) {
      // do not force render when renderInline is true
      if (this.readonly || this.picker && this.picker.config.renderInline) {
        this.currentValue = val;
        return;
      }
      if (this.currentValue !== val) {
        this.currentValue = val;
        this.render();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.picker && this.picker.destroy();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/datetime/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var components_datetime = ({
  name: 'datetime',
  mixins: [uuid["a" /* default */]],
  components: {
    Group: vux_src_components_group,
    InlineDesc: vux_src_components_inline_desc,
    Icon: vux_src_components_icon
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD',
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          return console.error('[VUX] Datetime prop:format 使用 A 时只允许的值为： YYYY-MM-DD A');
        }
        return true;
      }
    },
    title: String,
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: {
      type: String,
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.error('[VUX] Datetime prop:start-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    endDate: {
      type: String,
      validator: function validator(val) {
        /* istanbul ignore if */
        if (false) {
          console.error('[VUX] Datetime prop:end-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String,
    computeHoursFunction: Function,
    computeDaysFunction: Function,
    orderMap: Object
  },
  created: function created() {
    this.isFirstSetValue = false;
    this.currentValue = this.value;
  },
  data: function data() {
    return {
      currentShow: false,
      currentValue: null,
      valid: true,
      errors: {}
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    var uuid = this.uuid;
    this.$el.setAttribute('id', 'vux-datetime-' + uuid);
    if (!this.readonly) {
      this.$nextTick(function () {
        _this2.render();

        if (_this2.show) {
          _this2.$nextTick(function () {
            _this2.picker && _this2.picker.show(_this2.currentValue);
          });
        }
      });
    }
  },

  computed: {
    styles: function styles() {
      if (!this.$parent) {
        return {};
      }
      return {
        width: this.$parent.labelWidth,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    pickerOptions: function pickerOptions() {
      var _this = this;
      var options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        computeHoursFunction: this.computeHoursFunction,
        computeDaysFunction: this.computeDaysFunction,
        orderMap: this.orderMap || {},
        onSelect: function onSelect(type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue);
            _this.$emit('on-change', wholeValue);
          }
        },
        onConfirm: function onConfirm(value) {
          _this.currentValue = value;
        },
        onClear: function onClear(value) {
          _this.$emit('on-clear', value);
        },
        onHide: function onHide(type) {
          _this.currentShow = false;
          _this.$emit('update:show', false);
          _this.validate();
          _this.$emit('on-hide', type);
          if (type === 'cancel') {
            _this.$emit('on-cancel');
          }
          if (type === 'confirm') {
            setTimeout(function () {
              _this.$nextTick(function () {
                _this.$emit('on-confirm', _this.value);
              });
            });
          }
        },
        onShow: function onShow() {
          _this.currentShow = true;
          _this.$emit('update:show', true);
          _this.$emit('on-show');
        }
      };
      if (this.minYear) {
        options.minYear = this.minYear;
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear;
      }
      return options;
    },
    firstError: function firstError() {
      var key = keys_default()(this.errors)[0];
      return this.errors[key];
    },
    labelClass: function labelClass() {
      if (!this.$parent) {
        return {};
      }
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    getButtonText: function getButtonText(type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText;
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText;
      }
      return this.$el.getAttribute('data-' + type + '-text');
    },
    render: function render() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.picker && _this3.picker.destroy();
        _this3.picker = new datetimepicker["a" /* default */](_this3.pickerOptions);
      });
    },
    validate: function validate() {
      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填';
        return;
      }
      this.valid = true;
      this.errors = {};
    }
  },
  watch: {
    readonly: function readonly(val) {
      if (val) {
        this.picker && this.picker.destroy();
      } else {
        this.render();
      }
    },
    show: function show(val) {
      if (val === this.currentShow) return;
      if (val) {
        this.picker && this.picker.show(this.currentValue);
      } else {
        this.picker && this.picker.hide(this.currentValue);
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true;
        oldVal && this.$emit('on-change', val);
      } else {
        this.$emit('on-change', val);
      }
      this.validate();
    },
    startDate: function startDate() {
      this.render();
    },
    endDate: function endDate() {
      this.render();
    },
    format: function format(val) {
      if (this.currentValue) {
        this.currentValue = Object(date_format["a" /* default */])(this.currentValue, val);
      }
      this.render();
    },
    value: function value(val) {
      // do not force render when renderInline is true
      if (this.readonly || this.picker && this.picker.config.renderInline) {
        this.currentValue = val;
        return;
      }
      if (this.currentValue !== val) {
        this.currentValue = val;
        this.render();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.picker && this.picker.destroy();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-241efaf4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/datetime/index.vue
var datetime_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"vux-datetime weui-cell",class:{'weui-cell_access': !_vm.readonly},attrs:{"data-cancel-text":'取消',"data-confirm-text":'确定',"href":"javascript:"}},[_vm._t("default",[_c('div',[_vm._t("title",[_c('p',{class:_vm.labelClass,style:(_vm.styles),domProps:{"innerHTML":_vm._s(_vm.title)}})]),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft vux-cell-primary vux-datetime-value",style:({
        textAlign: _vm.valueTextAlign
      })},[(!_vm.currentValue && _vm.placeholder)?_c('span',{staticClass:"vux-cell-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]):_vm._e(),_vm._v(" "),(_vm.currentValue)?_c('span',{staticClass:"vux-cell-value"},[_vm._v(_vm._s(_vm.displayFormat ? _vm.displayFormat(_vm.currentValue) : _vm.currentValue))]):_vm._e(),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.valid),expression:"!valid"}],staticClass:"vux-input-icon",attrs:{"type":"warn","title":_vm.firstError}})],1)])],2)}
var datetime_staticRenderFns = []
var datetime_esExports = { render: datetime_render, staticRenderFns: datetime_staticRenderFns }
/* harmony default export */ var src_components_datetime = (datetime_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/datetime/index.vue
function datetime_injectStyle (ssrContext) {
  __webpack_require__("lOIT")
}
var datetime_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var datetime___vue_template_functional__ = false
/* styles */
var datetime___vue_styles__ = datetime_injectStyle
/* scopeId */
var datetime___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var datetime___vue_module_identifier__ = null
var datetime_Component = datetime_normalizeComponent(
  components_datetime,
  src_components_datetime,
  datetime___vue_template_functional__,
  datetime___vue_styles__,
  datetime___vue_scopeId__,
  datetime___vue_module_identifier__
)


/* harmony default export */ var vux_src_components_datetime = (datetime_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/filters/name2value.js
var name2value = __webpack_require__("dH7R");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-address/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var x_address = ({
  name: 'x-address',
  components: {
    PopupPicker: vux_src_components_popup_picker
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rawValue: Boolean,
    list: {
      type: Array,
      required: true
    },
    labelWidth: String,
    inlineDesc: String,
    placeholder: String,
    hideDistrict: Boolean,
    valueTextAlign: String,
    confirmText: String,
    cancelText: String,
    displayFormat: {
      type: Function,
      default: function _default(val, names) {
        return names;
      }
    },
    popupStyle: Object,
    popupTitle: String,
    show: Boolean,
    disabled: Boolean
  },
  created: function created() {
    if (this.currentValue.length && this.rawValue) {
      var parsedVal = Object(name2value["a" /* default */])(this.currentValue, this.list);
      if (/__/.test(parsedVal)) {
        console.error('[VUX] Wrong address value', this.currentValue);
        this.currentValue = [];
      } else {
        this.currentValue = parsedVal.split(' ');
      }
    }
    if (this.show) {
      this.showValue = true;
    }
  },

  methods: {
    emitHide: function emitHide(val) {
      this.$emit('on-hide', val);
    },
    getAddressName: function getAddressName() {
      return Object(value2name["a" /* default */])(this.value, this.list);
    },
    onShadowChange: function onShadowChange(ids, names) {
      this.$emit('on-shadow-change', ids, names);
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      showValue: false
    };
  },

  computed: {
    nameValue: function nameValue() {
      return Object(value2name["a" /* default */])(this.currentValue, this.list);
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (val.length && !/\d+/.test(val[0])) {
        var id = Object(name2value["a" /* default */])(val, this.list).split(' ');
        if (id[0] !== '__' && id[1] !== '__') {
          this.currentValue = id;
          return;
        }
      }
      this.currentValue = val;
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-address/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var components_x_address = ({
  name: 'x-address',
  components: {
    PopupPicker: vux_src_components_popup_picker
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rawValue: Boolean,
    list: {
      type: Array,
      required: true
    },
    labelWidth: String,
    inlineDesc: String,
    placeholder: String,
    hideDistrict: Boolean,
    valueTextAlign: String,
    confirmText: String,
    cancelText: String,
    displayFormat: {
      type: Function,
      default: function _default(val, names) {
        return names;
      }
    },
    popupStyle: Object,
    popupTitle: String,
    show: Boolean,
    disabled: Boolean
  },
  created: function created() {
    if (this.currentValue.length && this.rawValue) {
      var parsedVal = Object(name2value["a" /* default */])(this.currentValue, this.list);
      if (/__/.test(parsedVal)) {
        console.error('[VUX] Wrong address value', this.currentValue);
        this.currentValue = [];
      } else {
        this.currentValue = parsedVal.split(' ');
      }
    }
    if (this.show) {
      this.showValue = true;
    }
  },

  methods: {
    emitHide: function emitHide(val) {
      this.$emit('on-hide', val);
    },
    getAddressName: function getAddressName() {
      return Object(value2name["a" /* default */])(this.value, this.list);
    },
    onShadowChange: function onShadowChange(ids, names) {
      this.$emit('on-shadow-change', ids, names);
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      showValue: false
    };
  },

  computed: {
    nameValue: function nameValue() {
      return Object(value2name["a" /* default */])(this.currentValue, this.list);
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (val.length && !/\d+/.test(val[0])) {
        var id = Object(name2value["a" /* default */])(val, this.list).split(' ');
        if (id[0] !== '__' && id[1] !== '__') {
          this.currentValue = id;
          return;
        }
      }
      this.currentValue = val;
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f07e6b4e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-address/index.vue
var x_address_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('popup-picker',{attrs:{"fixed-columns":_vm.hideDistrict ? 2 : 0,"columns":3,"data":_vm.list,"title":_vm.title,"show-name":"","inline-desc":_vm.inlineDesc,"placeholder":_vm.placeholder,"value-text-align":_vm.valueTextAlign,"confirm-text":_vm.confirmText,"cancel-text":_vm.cancelText,"display-format":_vm.displayFormat,"popup-style":_vm.popupStyle,"popup-title":_vm.popupTitle,"show":_vm.showValue,"disabled":_vm.disabled},on:{"update:show":function($event){_vm.showValue=$event},"on-shadow-change":_vm.onShadowChange,"on-hide":_vm.emitHide,"on-show":function($event){return _vm.$emit('on-show')}},scopedSlots:_vm._u([{key:"title",fn:function(props){return [_vm._t("title",[(props.labelTitle)?_c('label',{class:[props.labelClass,_vm.labelClass],style:(props.labelStyle),domProps:{"innerHTML":_vm._s(props.labelTitle)}}):_vm._e()],{"labelClass":props.labelClass,"labelStyle":props.labelStyles,"labelTitle":props.title})]}}],true),model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v},expression:"currentValue"}})}
var x_address_staticRenderFns = []
var x_address_esExports = { render: x_address_render, staticRenderFns: x_address_staticRenderFns }
/* harmony default export */ var src_components_x_address = (x_address_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-address/index.vue
var x_address_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_address___vue_template_functional__ = false
/* styles */
var x_address___vue_styles__ = null
/* scopeId */
var x_address___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_address___vue_module_identifier__ = null
var x_address_Component = x_address_normalizeComponent(
  components_x_address,
  src_components_x_address,
  x_address___vue_template_functional__,
  x_address___vue_styles__,
  x_address___vue_scopeId__,
  x_address___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_address = (x_address_Component.exports);

// EXTERNAL MODULE: ./node_modules/autosize/dist/autosize.js
var autosize = __webpack_require__("JnrT");
var autosize_default = /*#__PURE__*/__webpack_require__.n(autosize);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-textarea/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // prop.autosize

/* harmony default export */ var x_textarea = ({
  name: 'x-textarea',
  minxins: [base["a" /* default */]],
  mounted: function mounted() {
    var _this = this;

    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    // prop.autosize
    this.$nextTick(function () {
      if (_this.autosize) {
        _this.bindAutosize();
      }
    });
    // prop.autosize
  },

  components: {
    InlineDesc: vux_src_components_inline_desc
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean // prop.autosize
  },
  created: function created() {
    this.currentValue = this.value;
  },

  watch: {
    // prop.autosize
    autosize: function autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },

    // prop.autosize
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(newVal) {
      if (this.max && newVal && newVal.length > this.max) {
        this.currentValue = newVal.slice(0, this.max);
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data: function data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },

  computed: {
    count: function count() {
      var len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle: function textareaStyle() {
      if (this.height) {
        return {
          height: this.height + 'px'
        };
      }
    },
    labelStyles: function labelStyles() {
      return {
        width: this.$parent.labelWidth || this.labelWidth + 'em',
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelWidth: function labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize: function updateAutosize() {
      autosize_default.a.update(this.$refs.textarea);
    },

    // prop.autosize
    bindAutosize: function bindAutosize() {
      autosize_default()(this.$refs.textarea);
    },
    unbindAutosize: function unbindAutosize() {
      autosize_default.a.destroy(this.$refs.textarea);
    },

    // prop.autosize
    focus: function focus() {
      this.$refs.textarea.focus();
    }
  },
  // prop.autosize
  beforeDestroy: function beforeDestroy() {
    this.unbindAutosize();
  }
  // prop.autosize

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-textarea/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // prop.autosize

/* harmony default export */ var components_x_textarea = ({
  name: 'x-textarea',
  minxins: [base["a" /* default */]],
  mounted: function mounted() {
    var _this = this;

    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    // prop.autosize
    this.$nextTick(function () {
      if (_this.autosize) {
        _this.bindAutosize();
      }
    });
    // prop.autosize
  },

  components: {
    InlineDesc: vux_src_components_inline_desc
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean // prop.autosize
  },
  created: function created() {
    this.currentValue = this.value;
  },

  watch: {
    // prop.autosize
    autosize: function autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },

    // prop.autosize
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(newVal) {
      if (this.max && newVal && newVal.length > this.max) {
        this.currentValue = newVal.slice(0, this.max);
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data: function data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },

  computed: {
    count: function count() {
      var len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle: function textareaStyle() {
      if (this.height) {
        return {
          height: this.height + 'px'
        };
      }
    },
    labelStyles: function labelStyles() {
      return {
        width: this.$parent.labelWidth || this.labelWidth + 'em',
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelWidth: function labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize: function updateAutosize() {
      autosize_default.a.update(this.$refs.textarea);
    },

    // prop.autosize
    bindAutosize: function bindAutosize() {
      autosize_default()(this.$refs.textarea);
    },
    unbindAutosize: function unbindAutosize() {
      autosize_default.a.destroy(this.$refs.textarea);
    },

    // prop.autosize
    focus: function focus() {
      this.$refs.textarea.focus();
    }
  },
  // prop.autosize
  beforeDestroy: function beforeDestroy() {
    this.unbindAutosize();
  }
  // prop.autosize

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54e6a49a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-textarea/index.vue
var x_textarea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell vux-x-textarea"},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.$parent.labelWidth || (_vm.labelWidth + 'em'), textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"textarea",staticClass:"weui-textarea",style:(_vm.textareaStyle),attrs:{"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled,"name":_vm.name,"rows":_vm.rows,"cols":_vm.cols,"maxlength":_vm.max},domProps:{"value":(_vm.currentValue)},on:{"focus":function($event){return _vm.$emit('on-focus')},"blur":function($event){return _vm.$emit('on-blur')},"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCounter && _vm.max),expression:"showCounter && max"}],staticClass:"weui-textarea-counter",on:{"click":_vm.focus}},[_c('span',[_vm._v(_vm._s(_vm.count))]),_vm._v("/"+_vm._s(_vm.max)+"\n    ")])])])}
var x_textarea_staticRenderFns = []
var x_textarea_esExports = { render: x_textarea_render, staticRenderFns: x_textarea_staticRenderFns }
/* harmony default export */ var src_components_x_textarea = (x_textarea_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-textarea/index.vue
function x_textarea_injectStyle (ssrContext) {
  __webpack_require__("9Z+i")
}
var x_textarea_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_textarea___vue_template_functional__ = false
/* styles */
var x_textarea___vue_styles__ = x_textarea_injectStyle
/* scopeId */
var x_textarea___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_textarea___vue_module_identifier__ = null
var x_textarea_Component = x_textarea_normalizeComponent(
  components_x_textarea,
  src_components_x_textarea,
  x_textarea___vue_template_functional__,
  x_textarea___vue_styles__,
  x_textarea___vue_scopeId__,
  x_textarea___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_textarea = (x_textarea_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/SetUserInfo.vue


















/* harmony default export */ var SetUserInfo = ({
  data: function data() {
    return {
      minYear: 0,
      maxYear: 5000,
      selectSex: ["男"],
      userInfo: {
        nicknames: "",
        birthdays: "",
        remarks: ""
      },
      popupState: false
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input,
    PopupPicker: vux_src_components_popup_picker,
    Datetime: vux_src_components_datetime,
    XAddress: vux_src_components_x_address,
    XTextarea: vux_src_components_x_textarea,
    Popup: node_modules_vux_src_components_popup
  },
  created: function created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!this.userInfo.logos) {
      this.userInfo.logos = "static/img/default-avatar.png";
    }

    if (!this.userInfo.nicknames) {
      this.userInfo.nicknames = "";
    }

    if (this.userInfo.gender == 0) {
      this.selectSex = ["女"];
    } else {
      this.selectSex = ["男"];
    }

    if (this.userInfo.birthdays == "0000-00-00") {
      this.userInfo.birthdays = "";
    }

    if (!this.userInfo.remarks) {
      this.userInfo.remarks = "";
    }
  },
  methods: {
    takePhoto: function takePhoto() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var photo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return takePicture();

              case 2:
                photo = _context.sent;

                if (!photo) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return util.convertImg(photo, 100, 100);

              case 6:
                _this.userInfo.logos = _context.sent;

              case 7:
                _this.popupState = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    selectAlbum: function selectAlbum() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var photo;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return openAlbum(1);

              case 2:
                photo = _context2.sent;

                if (!photo) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return util.convertImg(photo, 100, 100);

              case 6:
                _this2.userInfo.logos = _context2.sent;

              case 7:
                _this2.popupState = false;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    editAvatar: function editAvatar() {
      this.popupState = true;
    },
    commit: function commit() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var data, updateUsers;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return util.request({
                  url: '/users/updates',
                  method: "post",
                  param: {
                    loginid: _this3.userInfo.id,
                    nicknames: _this3.userInfo.nicknames,
                    genders: _this3.selectSex[0] == "男" ? 1 : 2,
                    logos: _this3.userInfo.logos,
                    birthdays: _this3.userInfo.birthdays,
                    remarks: _this3.userInfo.remarks
                  }
                });

              case 2:
                data = _context3.sent;

                if (!(data.return_code == "success")) {
                  _context3.next = 11;
                  break;
                }

                _this3.$vux.toast.show({
                  text: data.return_data,
                  type: "text",
                  onHide: function onHide() {
                    _this3.$router.push({
                      path: "/page/UserIndex"
                    });
                  }
                });
                _context3.next = 7;
                return util.getData({
                  url: '/users/usersinfos?loginid=' + _this3.userInfo.id,
                  method: "get"
                });

              case 7:
                updateUsers = _context3.sent;

                localStorage.setItem('userInfo', stringify_default()(updateUsers.usersinfos));
                _context3.next = 12;
                break;

              case 11:
                _this3.$vux.alert.show({
                  title: "提示",
                  content: data.return_data
                });

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/SetUserInfo.vue


















/* harmony default export */ var user_SetUserInfo = ({
  data: function data() {
    return {
      minYear: 0,
      maxYear: 5000,
      selectSex: ["男"],
      userInfo: {
        nicknames: "",
        birthdays: "",
        remarks: ""
      },
      popupState: false
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input,
    PopupPicker: vux_src_components_popup_picker,
    Datetime: vux_src_components_datetime,
    XAddress: vux_src_components_x_address,
    XTextarea: vux_src_components_x_textarea,
    Popup: node_modules_vux_src_components_popup
  },
  created: function created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!this.userInfo.logos) {
      this.userInfo.logos = "static/img/default-avatar.png";
    }

    if (!this.userInfo.nicknames) {
      this.userInfo.nicknames = "";
    }

    if (this.userInfo.gender == 0) {
      this.selectSex = ["女"];
    } else {
      this.selectSex = ["男"];
    }

    if (this.userInfo.birthdays == "0000-00-00") {
      this.userInfo.birthdays = "";
    }

    if (!this.userInfo.remarks) {
      this.userInfo.remarks = "";
    }
  },
  methods: {
    takePhoto: function takePhoto() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var photo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return takePicture();

              case 2:
                photo = _context.sent;

                if (!photo) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return util.convertImg(photo, 100, 100);

              case 6:
                _this.userInfo.logos = _context.sent;

              case 7:
                _this.popupState = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    selectAlbum: function selectAlbum() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var photo;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return openAlbum(1);

              case 2:
                photo = _context2.sent;

                if (!photo) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return util.convertImg(photo, 100, 100);

              case 6:
                _this2.userInfo.logos = _context2.sent;

              case 7:
                _this2.popupState = false;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    editAvatar: function editAvatar() {
      this.popupState = true;
    },
    commit: function commit() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var data, updateUsers;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return util.request({
                  url: '/users/updates',
                  method: "post",
                  param: {
                    loginid: _this3.userInfo.id,
                    nicknames: _this3.userInfo.nicknames,
                    genders: _this3.selectSex[0] == "男" ? 1 : 2,
                    logos: _this3.userInfo.logos,
                    birthdays: _this3.userInfo.birthdays,
                    remarks: _this3.userInfo.remarks
                  }
                });

              case 2:
                data = _context3.sent;

                if (!(data.return_code == "success")) {
                  _context3.next = 11;
                  break;
                }

                _this3.$vux.toast.show({
                  text: data.return_data,
                  type: "text",
                  onHide: function onHide() {
                    _this3.$router.push({
                      path: "/page/UserIndex"
                    });
                  }
                });
                _context3.next = 7;
                return util.getData({
                  url: '/users/usersinfos?loginid=' + _this3.userInfo.id,
                  method: "get"
                });

              case 7:
                updateUsers = _context3.sent;

                localStorage.setItem('userInfo', stringify_default()(updateUsers.usersinfos));
                _context3.next = 12;
                break;

              case 11:
                _this3.$vux.alert.show({
                  title: "提示",
                  content: data.return_data
                });

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2731cd23","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/SetUserInfo.vue
var SetUserInfo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SetUserInfo"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_c('span',{attrs:{"slot":"right"},on:{"click":_vm.commit},slot:"right"},[_vm._v("保存")]),_vm._v("\n    设置个人资料\n  ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":3}},[_c('div',{staticClass:"flex-demo"},[_vm._v("头像")])]),_vm._v(" "),_c('flexbox-item',[_c('div',{staticClass:"avatar",on:{"click":_vm.editAvatar}},[_c('img',{attrs:{"src":_vm.userInfo.logos,"alt":""}})])])],1),_vm._v(" "),_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":3}},[_c('div',{staticClass:"flex-demo"},[_vm._v("昵称")])]),_vm._v(" "),_c('flexbox-item',[_c('div',[_c('x-input',{staticClass:"x-input",attrs:{"placeholder":"请输入昵称"},model:{value:(_vm.userInfo.nicknames),callback:function ($$v) {_vm.$set(_vm.userInfo, "nicknames", $$v)},expression:"userInfo.nicknames"}})],1)])],1),_vm._v(" "),_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":3}},[_c('div',{staticClass:"flex-demo"},[_vm._v("性别")])]),_vm._v(" "),_c('flexbox-item',[_c('div',[_c('popup-picker',{staticClass:"popup-picker",attrs:{"data":[['男','女']],"value-text-align":"left","placeholder":"请选择性别"},model:{value:(_vm.selectSex),callback:function ($$v) {_vm.selectSex=$$v},expression:"selectSex"}})],1)])],1),_vm._v(" "),_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":3}},[_c('div',{staticClass:"flex-demo"},[_vm._v("出生日期")])]),_vm._v(" "),_c('flexbox-item',[_c('div',[_c('datetime',{attrs:{"min-year":_vm.minYear,"max-year":_vm.maxYear,"placeholder":"请选择出生日期"},model:{value:(_vm.userInfo.birthdays),callback:function ($$v) {_vm.$set(_vm.userInfo, "birthdays", $$v)},expression:"userInfo.birthdays"}})],1)])],1),_vm._v(" "),_c('flexbox',{staticClass:"flexbox direc"},[_c('flexbox-item',{attrs:{"span":3}},[_c('div',{staticClass:"flex-demo"},[_vm._v("个性签名")])]),_vm._v(" "),_c('flexbox-item',[_c('div',[_c('x-textarea',{staticClass:"x-textarea",attrs:{"rows":2,"max":30,"placeholder":"点击输入(最多30个字)"},model:{value:(_vm.userInfo.remarks),callback:function ($$v) {_vm.$set(_vm.userInfo, "remarks", $$v)},expression:"userInfo.remarks"}})],1)])],1)],1),_vm._v(" "),_c('popup',{staticClass:"popup",model:{value:(_vm.popupState),callback:function ($$v) {_vm.popupState=$$v},expression:"popupState"}},[_c('div',{on:{"click":_vm.takePhoto}},[_vm._v("拍摄")]),_vm._v(" "),_c('div',{on:{"click":_vm.selectAlbum}},[_vm._v("相册")])])],1)}
var SetUserInfo_staticRenderFns = []
var SetUserInfo_esExports = { render: SetUserInfo_render, staticRenderFns: SetUserInfo_staticRenderFns }
/* harmony default export */ var page_user_SetUserInfo = (SetUserInfo_esExports);
// CONCATENATED MODULE: ./src/page/user/SetUserInfo.vue
function SetUserInfo_injectStyle (ssrContext) {
  __webpack_require__("Lh04")
}
var SetUserInfo_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SetUserInfo___vue_template_functional__ = false
/* styles */
var SetUserInfo___vue_styles__ = SetUserInfo_injectStyle
/* scopeId */
var SetUserInfo___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SetUserInfo___vue_module_identifier__ = null
var SetUserInfo_Component = SetUserInfo_normalizeComponent(
  user_SetUserInfo,
  page_user_SetUserInfo,
  SetUserInfo___vue_template_functional__,
  SetUserInfo___vue_styles__,
  SetUserInfo___vue_scopeId__,
  SetUserInfo___vue_module_identifier__
)

/* harmony default export */ var src_page_user_SetUserInfo = (SetUserInfo_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_button = ({
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function validator(val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick: function onClick() {
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    noBorder: function noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle: function buttonStyle() {
      if (this.gradients) {
        return {
          background: 'linear-gradient(90deg, ' + this.gradients[0] + ', ' + this.gradients[1] + ')',
          color: '#FFFFFF'
        };
      }
    },
    classes: function classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? 'weui-btn_' + this.type : '', this.plain ? 'weui-btn_plain-' + this.type : '', this.showLoading ? 'weui-btn_loading' : ''];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_button = ({
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function validator(val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick: function onClick() {
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    noBorder: function noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle: function buttonStyle() {
      if (this.gradients) {
        return {
          background: 'linear-gradient(90deg, ' + this.gradients[0] + ', ' + this.gradients[1] + ')',
          color: '#FFFFFF'
        };
      }
    },
    classes: function classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? 'weui-btn_' + this.type : '', this.plain ? 'weui-btn_plain-' + this.type : '', this.showLoading ? 'weui-btn_loading' : ''];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d5f075ca","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-button/index.vue
var x_button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"weui-btn",class:_vm.classes,style:(_vm.buttonStyle),attrs:{"disabled":_vm.disabled,"type":_vm.actionType},on:{"click":_vm.onClick}},[(_vm.showLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e(),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var x_button_staticRenderFns = []
var x_button_esExports = { render: x_button_render, staticRenderFns: x_button_staticRenderFns }
/* harmony default export */ var src_components_x_button = (x_button_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-button/index.vue
function x_button_injectStyle (ssrContext) {
  __webpack_require__("VXwM")
}
var x_button_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_button___vue_template_functional__ = false
/* styles */
var x_button___vue_styles__ = x_button_injectStyle
/* scopeId */
var x_button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_button___vue_module_identifier__ = null
var x_button_Component = x_button_normalizeComponent(
  components_x_button,
  src_components_x_button,
  x_button___vue_template_functional__,
  x_button___vue_styles__,
  x_button___vue_scopeId__,
  x_button___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_button = (x_button_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyFollow.vue










/* harmony default export */ var MyFollow = ({
  data: function data() {
    return {
      userInfo: null,
      myFollowList: []
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 10;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: 'loading...'
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myfollows?loginid=' + this.userInfo.id + '&pages=1&rowsmax=10',
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.myFollowList = data;
              this.myFollowList.forEach(function (items) {
                items.forEach(function (item) {
                  item.gender == 1 ? item.sex = 'boy' : item.sex = 'girl';
                });
              });
              this.$vux.loading.hide();

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    follow: function follow(users, index) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var types, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                types = 0;

                if (!_this.userInfo) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.id,
                    loginid: _this.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context2.sent;

                if (data.return_code == "success") {
                  _this.myFollowList.splice(index, 1);
                }
                _this.$vux.toast.show({
                  text: data.return_data
                });
                _context2.next = 10;
                break;

              case 9:
                _this.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyFollow.vue










/* harmony default export */ var user_MyFollow = ({
  data: function data() {
    return {
      userInfo: null,
      myFollowList: []
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 10;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: 'loading...'
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myfollows?loginid=' + this.userInfo.id + '&pages=1&rowsmax=10',
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.myFollowList = data;
              this.myFollowList.forEach(function (items) {
                items.forEach(function (item) {
                  item.gender == 1 ? item.sex = 'boy' : item.sex = 'girl';
                });
              });
              this.$vux.loading.hide();

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    follow: function follow(users, index) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var types, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                types = 0;

                if (!_this.userInfo) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.id,
                    loginid: _this.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context2.sent;

                if (data.return_code == "success") {
                  _this.myFollowList.splice(index, 1);
                }
                _this.$vux.toast.show({
                  text: data.return_data
                });
                _context2.next = 10;
                break;

              case 9:
                _this.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-80d7a3c0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MyFollow.vue
var MyFollow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MyFollow"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("我的关注")]),_vm._v(" "),_c('div',{staticClass:"MyFollowList"},_vm._l((_vm.myFollowList),function(myFollow,index){return _c('flexbox',{key:index,staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":2}},[_c('img',{staticClass:"avatar",attrs:{"src":myFollow[0].logos || 'static/img/default-avatar.png',"alt":""}})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7}},[_c('div',[_c('div',{staticClass:"username"},[_vm._v("\n            "+_vm._s(myFollow[0].nicknames)+"\n            "),(myFollow[0].sex == 'girl')?_c('i',{staticClass:"iconfont icon-nvsheng"}):_c('i',{staticClass:"iconfont icon-nansheng"})]),_vm._v(" "),_c('div',{staticClass:"direc"},[_vm._v(_vm._s(myFollow[0].remarks || '当前大咖有点儿懒。。。'))])])]),_vm._v(" "),_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('x-button',{staticClass:"x-button",attrs:{"mini":"","gradients":['rgb(525,97,66)', 'rgb(525,97,66)']},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(myFollow[0],index)}}},[_vm._v("已关注")])],1)],1)}),1)],1)}
var MyFollow_staticRenderFns = []
var MyFollow_esExports = { render: MyFollow_render, staticRenderFns: MyFollow_staticRenderFns }
/* harmony default export */ var page_user_MyFollow = (MyFollow_esExports);
// CONCATENATED MODULE: ./src/page/user/MyFollow.vue
function MyFollow_injectStyle (ssrContext) {
  __webpack_require__("DffM")
}
var MyFollow_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MyFollow___vue_template_functional__ = false
/* styles */
var MyFollow___vue_styles__ = MyFollow_injectStyle
/* scopeId */
var MyFollow___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MyFollow___vue_module_identifier__ = null
var MyFollow_Component = MyFollow_normalizeComponent(
  user_MyFollow,
  page_user_MyFollow,
  MyFollow___vue_template_functional__,
  MyFollow___vue_styles__,
  MyFollow___vue_scopeId__,
  MyFollow___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MyFollow = (MyFollow_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/grid/grid.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var grid = ({
  name: 'grid',
  methods: {
    countColumn: function countColumn() {
      this.childrenSize = this.$children.length;
      this.$children.forEach(function (c, index) {
        return c.index = index;
      });
    }
  },
  props: {
    rows: {
      type: Number,
      validator: function validator() {
        /* istanbul ignore if */
        if (false) {
          console.warn('[VUX warn] Grid rows 属性已经废弃，使用 cols 代替。单行列数为自动计算');
        }
        return true;
      }
    },
    cols: {
      type: Number
    },
    showLrBorders: {
      type: Boolean,
      default: true
    },
    showVerticalDividers: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    column: function column() {
      return this.cols || this.childrenSize;
    }
  },
  data: function data() {
    return {
      childrenSize: 3
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/grid/grid.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var grid_grid = ({
  name: 'grid',
  methods: {
    countColumn: function countColumn() {
      this.childrenSize = this.$children.length;
      this.$children.forEach(function (c, index) {
        return c.index = index;
      });
    }
  },
  props: {
    rows: {
      type: Number,
      validator: function validator() {
        /* istanbul ignore if */
        if (false) {
          console.warn('[VUX warn] Grid rows 属性已经废弃，使用 cols 代替。单行列数为自动计算');
        }
        return true;
      }
    },
    cols: {
      type: Number
    },
    showLrBorders: {
      type: Boolean,
      default: true
    },
    showVerticalDividers: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    column: function column() {
      return this.cols || this.childrenSize;
    }
  },
  data: function data() {
    return {
      childrenSize: 3
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21378e8c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/grid/grid.vue
var grid_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-grids",class:{
    'vux-grid-no-lr-borders': !_vm.showLrBorders
  }},[_vm._t("default")],2)}
var grid_staticRenderFns = []
var grid_esExports = { render: grid_render, staticRenderFns: grid_staticRenderFns }
/* harmony default export */ var components_grid_grid = (grid_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/grid/grid.vue
function grid_injectStyle (ssrContext) {
  __webpack_require__("s99l")
}
var grid_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var grid___vue_template_functional__ = false
/* styles */
var grid___vue_styles__ = grid_injectStyle
/* scopeId */
var grid___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var grid___vue_module_identifier__ = null
var grid_Component = grid_normalizeComponent(
  grid_grid,
  components_grid_grid,
  grid___vue_template_functional__,
  grid___vue_styles__,
  grid___vue_scopeId__,
  grid___vue_module_identifier__
)

/* harmony default export */ var src_components_grid_grid = (grid_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/grid/grid-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var grid_item = ({
  name: 'grid-item',
  props: ['icon', 'label', 'link'],
  created: function created() {
    this.$parent.countColumn();
  },
  mounted: function mounted() {
    this.$slots.icon && (this.hasIconSlot = true);
    this.$slots.label && (this.hasLabelSlot = true);
  },
  destroyed: function destroyed() {
    this.$parent.countColumn();
  },

  computed: {
    isLast: function isLast() {
      return !((this.index + 1) % this.$parent.column);
    },
    style: function style() {
      var column = this.$parent.column;
      if (!column || column === 3) {
        return;
      }
      var styles = {};
      styles.width = 100 / column + '%';
      return styles;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('on-item-click');
      Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data: function data() {
    return {
      index: 0,
      hasIconSlot: false,
      hasLabelSlot: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/grid/grid-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var grid_grid_item = ({
  name: 'grid-item',
  props: ['icon', 'label', 'link'],
  created: function created() {
    this.$parent.countColumn();
  },
  mounted: function mounted() {
    this.$slots.icon && (this.hasIconSlot = true);
    this.$slots.label && (this.hasLabelSlot = true);
  },
  destroyed: function destroyed() {
    this.$parent.countColumn();
  },

  computed: {
    isLast: function isLast() {
      return !((this.index + 1) % this.$parent.column);
    },
    style: function style() {
      var column = this.$parent.column;
      if (!column || column === 3) {
        return;
      }
      var styles = {};
      styles.width = 100 / column + '%';
      return styles;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('on-item-click');
      Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data: function data() {
    return {
      index: 0,
      hasIconSlot: false,
      hasLabelSlot: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b090120","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/grid/grid-item.vue
var grid_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"weui-grid",class:{
    'vux-grid-item-no-border': (_vm.isLast && !_vm.$parent.showLrBorders) || (!_vm.isLast && !_vm.$parent.showVerticalDividers),
  },style:(_vm.style),attrs:{"href":"javascript:;"},on:{"click":_vm.onClick}},[(_vm.hasIconSlot || _vm.icon)?_c('div',{staticClass:"weui-grid__icon"},[_vm._t("icon",[_c('img',{attrs:{"src":_vm.icon,"alt":""}})])],2):_vm._e(),_vm._v(" "),(_vm.hasLabelSlot || _vm.label)?_c('p',{staticClass:"weui-grid__label"},[_vm._t("label",[_c('span',{domProps:{"innerHTML":_vm._s(_vm.label)}})])],2):_vm._e(),_vm._v(" "),_vm._t("default")],2)}
var grid_item_staticRenderFns = []
var grid_item_esExports = { render: grid_item_render, staticRenderFns: grid_item_staticRenderFns }
/* harmony default export */ var components_grid_grid_item = (grid_item_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/grid/grid-item.vue
function grid_item_injectStyle (ssrContext) {
  __webpack_require__("XKpp")
}
var grid_item_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var grid_item___vue_template_functional__ = false
/* styles */
var grid_item___vue_styles__ = grid_item_injectStyle
/* scopeId */
var grid_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var grid_item___vue_module_identifier__ = null
var grid_item_Component = grid_item_normalizeComponent(
  grid_grid_item,
  components_grid_grid_item,
  grid_item___vue_template_functional__,
  grid_item___vue_styles__,
  grid_item___vue_scopeId__,
  grid_item___vue_module_identifier__
)

/* harmony default export */ var src_components_grid_grid_item = (grid_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyRelease.vue











/* harmony default export */ var MyRelease = ({
  data: function data() {
    return {
      userInfo: {},
      showState: false
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    XImg: vux_src_components_x_img,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this = this;

      var type, userInfo, data, imgList;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.$route.query.type;
              userInfo = localStorage.getItem("userInfo");

              if (!(type == "current")) {
                _context.next = 19;
                break;
              }

              try {
                this.userId = JSON.parse(localStorage.getItem("userInfo")).id;
              } catch (data) {
                this.userId = false;
              }

              if (!this.userId) {
                _context.next = 19;
                break;
              }

              this.$vux.loading.show({
                text: "Loading"
              });
              _context.next = 8;
              return util.getData({
                url: '/users/usersinfos?loginid=' + this.userId,
                method: "get"
              });

            case 8:
              data = _context.sent;

              data.usersinfos.logos = data.usersinfos.logos || "static/img/default-avatar.png";
              data.usersinfos.remarks = data.usersinfos.remarks || "当前大咖有点儿懒。。。";
              this.userInfo = data;
              /*
              ** 发布信息
              */
              this.userInfo.imgList = [];
              _context.next = 15;
              return util.getData({
                url: '/users/mypublishes?loginid=' + this.userId,
                method: "get"
              });

            case 15:
              imgList = _context.sent;

              imgList.forEach(function (item, index) {
                _this.userInfo.imgList.push({
                  src: item.thumbs,
                  imgCount: item.image_total,
                  id: item.id
                });
              });
              this.showState = true;
              this.$vux.loading.hide();

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyRelease.vue











/* harmony default export */ var user_MyRelease = ({
  data: function data() {
    return {
      userInfo: {},
      showState: false
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    XImg: vux_src_components_x_img,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this = this;

      var type, userInfo, data, imgList;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.$route.query.type;
              userInfo = localStorage.getItem("userInfo");

              if (!(type == "current")) {
                _context.next = 19;
                break;
              }

              try {
                this.userId = JSON.parse(localStorage.getItem("userInfo")).id;
              } catch (data) {
                this.userId = false;
              }

              if (!this.userId) {
                _context.next = 19;
                break;
              }

              this.$vux.loading.show({
                text: "Loading"
              });
              _context.next = 8;
              return util.getData({
                url: '/users/usersinfos?loginid=' + this.userId,
                method: "get"
              });

            case 8:
              data = _context.sent;

              data.usersinfos.logos = data.usersinfos.logos || "static/img/default-avatar.png";
              data.usersinfos.remarks = data.usersinfos.remarks || "当前大咖有点儿懒。。。";
              this.userInfo = data;
              /*
              ** 发布信息
              */
              this.userInfo.imgList = [];
              _context.next = 15;
              return util.getData({
                url: '/users/mypublishes?loginid=' + this.userId,
                method: "get"
              });

            case 15:
              imgList = _context.sent;

              imgList.forEach(function (item, index) {
                _this.userInfo.imgList.push({
                  src: item.thumbs,
                  imgCount: item.image_total,
                  id: item.id
                });
              });
              this.showState = true;
              this.$vux.loading.hide();

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-056e6c46","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MyRelease.vue
var MyRelease_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showState)?_c('div',{staticClass:"MyRelease"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("我的发布")]),_vm._v(" "),_c('div',{staticClass:"user"},[_c('x-img',{staticClass:"bgImg",attrs:{"default-src":_vm.userInfo.imgList.length? _vm.userInfo.imgList[0].src : 'static/img/img.png'}}),_vm._v(" "),_c('div',{staticClass:"user-detail"},[_c('router-link',{attrs:{"to":""}},[_c('x-img',{staticClass:"avatar",attrs:{"default-src":_vm.userInfo.usersinfos.logos || 'static/img/default-avatar.png'}}),_vm._v(" "),_c('div',{staticClass:"username"},[_vm._v("\n          "+_vm._s(_vm.userInfo.usersinfos.nicknames)+"\n          "),(_vm.userInfo.usersinfos.gender == 1)?_c('i',{staticClass:"iconfont icon-nansheng"}):_c('i',{staticClass:"iconfont icon-nvsheng"})]),_vm._v(" "),_c('div',{staticClass:"signature"},[_vm._v(_vm._s(_vm.userInfo.usersinfos.remarks))])],1),_vm._v(" "),_c('card',[_c('div',{staticClass:"card-demo-flex card-demo-content01",attrs:{"slot":"content"},slot:"content"},[_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_post_total))]),_vm._v(" "),_c('br'),_vm._v("发布\n          ")]),_vm._v(" "),_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_follow_total))]),_vm._v(" "),_c('br'),_vm._v("关注\n          ")]),_vm._v(" "),_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_fans_total))]),_vm._v(" "),_c('br'),_vm._v("粉丝\n          ")]),_vm._v(" "),_c('router-link',{attrs:{"to":""}},[_c('span',[_vm._v(_vm._s(_vm.userInfo.my_praise_total))]),_vm._v(" "),_c('br'),_vm._v("获赞\n          ")])],1)])],1),_vm._v(" "),_c('div',[_c('grid',{staticClass:"grid",attrs:{"cols":3,"show-lr-borders":false,"show-vertical-dividers":false}},_vm._l((_vm.userInfo.imgList),function(item,index){return _c('grid-item',{key:index,staticClass:"grid-item"},[_c('img',{staticClass:"previewer-demo-img",attrs:{"src":item.src}}),_vm._v(" "),_c('span',[_c('i',{staticClass:"iconfont icon-shuliangbiaoqian"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.imgCount))])])])}),1)],1)],1)],1):_vm._e()}
var MyRelease_staticRenderFns = []
var MyRelease_esExports = { render: MyRelease_render, staticRenderFns: MyRelease_staticRenderFns }
/* harmony default export */ var page_user_MyRelease = (MyRelease_esExports);
// CONCATENATED MODULE: ./src/page/user/MyRelease.vue
function MyRelease_injectStyle (ssrContext) {
  __webpack_require__("RrsV")
}
var MyRelease_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MyRelease___vue_template_functional__ = false
/* styles */
var MyRelease___vue_styles__ = MyRelease_injectStyle
/* scopeId */
var MyRelease___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MyRelease___vue_module_identifier__ = null
var MyRelease_Component = MyRelease_normalizeComponent(
  user_MyRelease,
  page_user_MyRelease,
  MyRelease___vue_template_functional__,
  MyRelease___vue_styles__,
  MyRelease___vue_scopeId__,
  MyRelease___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MyRelease = (MyRelease_Component.exports);

// EXTERNAL MODULE: ./node_modules/x-photoswipe/dist/photoswipe.js
var photoswipe = __webpack_require__("i7N3");
var photoswipe_default = /*#__PURE__*/__webpack_require__.n(photoswipe);

// EXTERNAL MODULE: ./node_modules/x-photoswipe/dist/photoswipe-ui-default.js
var photoswipe_ui_default = __webpack_require__("72M0");
var photoswipe_ui_default_default = /*#__PURE__*/__webpack_require__.n(photoswipe_ui_default);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/previewer/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var previewer = ({
  name: 'previewer',
  computed: {
    imgs: function imgs() {
      return this.list.map(function (one) {
        if (!one.msrc) {
          one.msrc = one.src;
        }
        if (typeof one.w === 'undefined') {
          one.w = 0;
          one.h = 0;
        }
        return one;
      });
    }
  },
  watch: {
    imgs: function imgs(newVal, oldVal) {
      if (!this.photoswipe) {
        return;
      }
      if (newVal.length && newVal.length - oldVal.length === -1) {
        var index = this.photoswipe.getCurrentIndex();
        this.photoswipe.invalidateCurrItems();
        this.photoswipe.items.splice(index, 1);
        var goToIndex = index;
        if (goToIndex > this.photoswipe.items.length - 1) {
          goToIndex = 0;
        }
        this.photoswipe.goTo(goToIndex);
        this.photoswipe.updateSize(true);
        this.photoswipe.ui.update();
      } else if (!newVal.length) {
        this.close();
      }
    }
  },
  methods: {
    init: function init(index) {
      var self = this;
      var showItem = this.imgs[index];
      if (!showItem.w || !showItem.h || showItem.w < 5 || showItem.h < 5) {
        var img = new Image();
        img.onload = function () {
          showItem.w = this.width;
          showItem.h = this.height;
          self.doInit(index);
        };
        img.src = showItem.src;
      } else {
        this.doInit(index);
      }
    },
    doInit: function doInit(index) {
      var _this = this;

      var self = this;
      var options = object_assign_default()({
        history: false,
        shareEl: false,
        tapToClose: true,
        index: index
      }, this.options);
      this.photoswipe = new photoswipe_default.a(this.$el, photoswipe_ui_default_default.a, this.imgs, options);

      this.photoswipe.listen('gettingData', function (index, item) {
        if (!item.w || !item.h || item.w < 1 || item.h < 1) {
          var img = new Image();
          img.onload = function () {
            item.w = this.width;
            item.h = this.height;
            self.photoswipe.updateSize(true);
          };
          img.src = item.src;
        }
      });

      this.photoswipe.init();
      this.photoswipe.listen('close', function () {
        _this.$emit('on-close');
      });
      this.photoswipe.listen('afterChange', function (a, b) {
        _this.$emit('on-index-change', {
          currentIndex: _this.photoswipe.getCurrentIndex()
        });
      });
    },
    show: function show(index) {
      this.init(index);
    },
    getCurrentIndex: function getCurrentIndex() {
      return this.photoswipe.getCurrentIndex();
    },
    close: function close() {
      this.photoswipe.close();
    },
    goTo: function goTo(index) {
      this.photoswipe.goTo(index);
    },
    prev: function prev() {
      this.photoswipe.prev();
    },
    next: function next() {
      this.photoswipe.next();
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/previewer/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var components_previewer = ({
  name: 'previewer',
  computed: {
    imgs: function imgs() {
      return this.list.map(function (one) {
        if (!one.msrc) {
          one.msrc = one.src;
        }
        if (typeof one.w === 'undefined') {
          one.w = 0;
          one.h = 0;
        }
        return one;
      });
    }
  },
  watch: {
    imgs: function imgs(newVal, oldVal) {
      if (!this.photoswipe) {
        return;
      }
      if (newVal.length && newVal.length - oldVal.length === -1) {
        var index = this.photoswipe.getCurrentIndex();
        this.photoswipe.invalidateCurrItems();
        this.photoswipe.items.splice(index, 1);
        var goToIndex = index;
        if (goToIndex > this.photoswipe.items.length - 1) {
          goToIndex = 0;
        }
        this.photoswipe.goTo(goToIndex);
        this.photoswipe.updateSize(true);
        this.photoswipe.ui.update();
      } else if (!newVal.length) {
        this.close();
      }
    }
  },
  methods: {
    init: function init(index) {
      var self = this;
      var showItem = this.imgs[index];
      if (!showItem.w || !showItem.h || showItem.w < 5 || showItem.h < 5) {
        var img = new Image();
        img.onload = function () {
          showItem.w = this.width;
          showItem.h = this.height;
          self.doInit(index);
        };
        img.src = showItem.src;
      } else {
        this.doInit(index);
      }
    },
    doInit: function doInit(index) {
      var _this = this;

      var self = this;
      var options = object_assign_default()({
        history: false,
        shareEl: false,
        tapToClose: true,
        index: index
      }, this.options);
      this.photoswipe = new photoswipe_default.a(this.$el, photoswipe_ui_default_default.a, this.imgs, options);

      this.photoswipe.listen('gettingData', function (index, item) {
        if (!item.w || !item.h || item.w < 1 || item.h < 1) {
          var img = new Image();
          img.onload = function () {
            item.w = this.width;
            item.h = this.height;
            self.photoswipe.updateSize(true);
          };
          img.src = item.src;
        }
      });

      this.photoswipe.init();
      this.photoswipe.listen('close', function () {
        _this.$emit('on-close');
      });
      this.photoswipe.listen('afterChange', function (a, b) {
        _this.$emit('on-index-change', {
          currentIndex: _this.photoswipe.getCurrentIndex()
        });
      });
    },
    show: function show(index) {
      this.init(index);
    },
    getCurrentIndex: function getCurrentIndex() {
      return this.photoswipe.getCurrentIndex();
    },
    close: function close() {
      this.photoswipe.close();
    },
    goTo: function goTo(index) {
      this.photoswipe.goTo(index);
    },
    prev: function prev() {
      this.photoswipe.prev();
    },
    next: function next() {
      this.photoswipe.next();
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-76aee302","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/previewer/index.vue
var previewer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp vux-previewer",attrs:{"tabindex":"-1","role":"dialog","aria-hidden":"true"}},[_c('div',{staticClass:"pswp__bg"}),_vm._v(" "),_c('div',{staticClass:"pswp__scroll-wrap"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"pswp__ui pswp__ui--hidden"},[_c('div',{staticClass:"pswp__top-bar"},[_c('div',{staticClass:"pswp__counter"}),_vm._v(" "),_vm._t("button-after"),_vm._v(" "),_c('button',{staticClass:"pswp__button pswp__button--close",attrs:{"title":"Close (Esc)"}}),_vm._v(" "),_c('button',{staticClass:"pswp__button pswp__button--share",attrs:{"title":"Share"}}),_vm._v(" "),_c('button',{staticClass:"pswp__button pswp__button--fs",attrs:{"title":"Toggle fullscreen"}}),_vm._v(" "),_c('button',{staticClass:"pswp__button pswp__button--zoom",attrs:{"title":"Zoom in/out"}}),_vm._v(" "),_vm._t("button-before"),_vm._v(" "),_vm._m(1)],2),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('button',{staticClass:"pswp__button pswp__button--arrow--left",attrs:{"title":"Previous (arrow left)"}}),_vm._v(" "),_c('button',{staticClass:"pswp__button pswp__button--arrow--right",attrs:{"title":"Next (arrow right)"}}),_vm._v(" "),_vm._m(3)])])])}
var previewer_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__container"},[_c('div',{staticClass:"pswp__item"}),_vm._v(" "),_c('div',{staticClass:"pswp__item"}),_vm._v(" "),_c('div',{staticClass:"pswp__item"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__preloader"},[_c('div',{staticClass:"pswp__preloader__icn"},[_c('div',{staticClass:"pswp__preloader__cut"},[_c('div',{staticClass:"pswp__preloader__donut"})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[_c('div',{staticClass:"pswp__share-tooltip"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__caption"},[_c('div',{staticClass:"pswp__caption__center"})])}]
var previewer_esExports = { render: previewer_render, staticRenderFns: previewer_staticRenderFns }
/* harmony default export */ var src_components_previewer = (previewer_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/previewer/index.vue
function previewer_injectStyle (ssrContext) {
  __webpack_require__("U4t6")
  __webpack_require__("JDMP")
}
var previewer_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var previewer___vue_template_functional__ = false
/* styles */
var previewer___vue_styles__ = previewer_injectStyle
/* scopeId */
var previewer___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var previewer___vue_module_identifier__ = null
var previewer_Component = previewer_normalizeComponent(
  components_previewer,
  src_components_previewer,
  previewer___vue_template_functional__,
  previewer___vue_styles__,
  previewer___vue_scopeId__,
  previewer___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_previewer = (previewer_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyCollect.vue












/* harmony default export */ var MyCollect = ({
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  data: function data() {
    return {
      imgList: [],
      options: {
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          var thumbnail = document.querySelectorAll(".previewer-demo-img")[index];
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      }
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XImg: vux_src_components_x_img,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    Previewer: vux_src_components_previewer
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = JSON.parse(localStorage.getItem('userInfo'));

              if (!userInfo) {
                _context.next = 9;
                break;
              }

              this.$vux.loading.show({
                text: "loading..."
              });
              _context.next = 5;
              return util.getData({
                url: '/users/mycollects?loginid=' + userInfo.id,
                method: 'get'
              });

            case 5:
              data = _context.sent;

              this.imgList = data;
              this.imgList.forEach(function (item) {
                item.src = item.msrc = item.thumbs;
              });
              this.$vux.loading.hide();

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    show: function show(index) {
      this.$refs.previewer.show(index);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyCollect.vue












/* harmony default export */ var user_MyCollect = ({
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  data: function data() {
    return {
      imgList: [],
      options: {
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          var thumbnail = document.querySelectorAll(".previewer-demo-img")[index];
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      }
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XImg: vux_src_components_x_img,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    Previewer: vux_src_components_previewer
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = JSON.parse(localStorage.getItem('userInfo'));

              if (!userInfo) {
                _context.next = 9;
                break;
              }

              this.$vux.loading.show({
                text: "loading..."
              });
              _context.next = 5;
              return util.getData({
                url: '/users/mycollects?loginid=' + userInfo.id,
                method: 'get'
              });

            case 5:
              data = _context.sent;

              this.imgList = data;
              this.imgList.forEach(function (item) {
                item.src = item.msrc = item.thumbs;
              });
              this.$vux.loading.hide();

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    show: function show(index) {
      this.$refs.previewer.show(index);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7528c696","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MyCollect.vue
var MyCollect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MyCollect"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("我的收藏")]),_vm._v(" "),_c('div',{staticClass:"img-list"},[_c('grid',{staticClass:"grid",attrs:{"cols":3,"show-lr-borders":false,"show-vertical-dividers":false}},_vm._l((_vm.imgList),function(item,index){return _c('grid-item',{key:index,staticClass:"grid-item"},[_c('img',{staticClass:"previewer-demo-img",attrs:{"src":item.src},on:{"click":function($event){return _vm.show(index)}}})])}),1),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('previewer',{ref:"previewer",attrs:{"list":_vm.imgList,"options":_vm.options}})],1)],1)],1)}
var MyCollect_staticRenderFns = []
var MyCollect_esExports = { render: MyCollect_render, staticRenderFns: MyCollect_staticRenderFns }
/* harmony default export */ var page_user_MyCollect = (MyCollect_esExports);
// CONCATENATED MODULE: ./src/page/user/MyCollect.vue
function MyCollect_injectStyle (ssrContext) {
  __webpack_require__("9ksO")
}
var MyCollect_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MyCollect___vue_template_functional__ = false
/* styles */
var MyCollect___vue_styles__ = MyCollect_injectStyle
/* scopeId */
var MyCollect___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MyCollect___vue_module_identifier__ = null
var MyCollect_Component = MyCollect_normalizeComponent(
  user_MyCollect,
  page_user_MyCollect,
  MyCollect___vue_template_functional__,
  MyCollect___vue_styles__,
  MyCollect___vue_scopeId__,
  MyCollect___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MyCollect = (MyCollect_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyFan.vue










/* harmony default export */ var MyFan = ({
  data: function data() {
    return {
      userInfo: null,
      myFanList: []
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 10;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: "loading..."
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myfans?loginid=' + this.userInfo.id + '&pages=1&rowsmax=10',
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.myFanList = data;
              this.myFanList.forEach(function (items) {
                items.forEach(function (item) {
                  item.gender == 1 ? item.sex = "boy" : item.sex = "girl";
                });
              });
              this.$vux.loading.hide();

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    follow: function follow(users, index) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var types, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                types = users.followed == 1 ? 0 : 1;

                if (!_this.userInfo) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.id,
                    loginid: _this.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context2.sent;

                if (data.return_code == "success") {
                  users.followed = types;
                }
                _this.$vux.toast.show({
                  text: data.return_data
                });
                _context2.next = 10;
                break;

              case 9:
                _this.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyFan.vue










/* harmony default export */ var user_MyFan = ({
  data: function data() {
    return {
      userInfo: null,
      myFanList: []
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 10;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: "loading..."
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myfans?loginid=' + this.userInfo.id + '&pages=1&rowsmax=10',
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.myFanList = data;
              this.myFanList.forEach(function (items) {
                items.forEach(function (item) {
                  item.gender == 1 ? item.sex = "boy" : item.sex = "girl";
                });
              });
              this.$vux.loading.hide();

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    follow: function follow(users, index) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var types, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                types = users.followed == 1 ? 0 : 1;

                if (!_this.userInfo) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.id,
                    loginid: _this.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context2.sent;

                if (data.return_code == "success") {
                  users.followed = types;
                }
                _this.$vux.toast.show({
                  text: data.return_data
                });
                _context2.next = 10;
                break;

              case 9:
                _this.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2a366086","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MyFan.vue
var MyFan_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MyFollow"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("我的粉丝")]),_vm._v(" "),_c('div',{staticClass:"MyFollowList"},_vm._l((_vm.myFanList),function(myFan,index){return _c('flexbox',{key:index,staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":2}},[_c('img',{staticClass:"avatar",attrs:{"src":myFan[0].logos || 'static/img/default-avatar.png',"alt":""}})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7}},[_c('div',[_c('div',{staticClass:"username"},[_vm._v("\n            "+_vm._s(myFan[0].nicknames)+"\n            "),(myFan[0].sex == 'girl')?_c('i',{staticClass:"iconfont icon-nvsheng"}):_c('i',{staticClass:"iconfont icon-nansheng"})]),_vm._v(" "),_c('div',{staticClass:"direc"},[_vm._v(_vm._s(myFan[0].remarks || '当前大咖有点儿懒。。。'))])])]),_vm._v(" "),_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('x-button',{directives:[{name:"show",rawName:"v-show",value:(myFan[0].followed),expression:"myFan[0].followed"}],staticClass:"x-button",attrs:{"mini":"","gradients":['rgb(525,97,66)', 'rgb(525,97,66)']},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(myFan[0],index)}}},[_vm._v("已关注")]),_vm._v(" "),_c('x-button',{directives:[{name:"show",rawName:"v-show",value:(!myFan[0].followed),expression:"!myFan[0].followed"}],staticClass:"x-button no-follow",attrs:{"mini":""},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(myFan[0],index)}}},[_vm._v("关注")])],1)],1)}),1)],1)}
var MyFan_staticRenderFns = []
var MyFan_esExports = { render: MyFan_render, staticRenderFns: MyFan_staticRenderFns }
/* harmony default export */ var page_user_MyFan = (MyFan_esExports);
// CONCATENATED MODULE: ./src/page/user/MyFan.vue
function MyFan_injectStyle (ssrContext) {
  __webpack_require__("HdB2")
}
var MyFan_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MyFan___vue_template_functional__ = false
/* styles */
var MyFan___vue_styles__ = MyFan_injectStyle
/* scopeId */
var MyFan___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MyFan___vue_module_identifier__ = null
var MyFan_Component = MyFan_normalizeComponent(
  user_MyFan,
  page_user_MyFan,
  MyFan___vue_template_functional__,
  MyFan___vue_styles__,
  MyFan___vue_scopeId__,
  MyFan___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MyFan = (MyFan_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/components/x-dialog/index.vue + 3 modules
var x_dialog = __webpack_require__("/kga");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyIncome.vue














/* harmony default export */ var MyIncome = ({
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  data: function data() {
    return {
      showWithDraw: false,
      pageShow: false,
      userInfo: null,
      myIncome: null,
      stateText: "",
      withDrawInfo: {
        accounts: "",
        realnames: "",
        moneys: ""
      },
      cellArr: [{
        title: "收入记录",
        iconclass: "icon-shourujilu",
        pageUrl: "/page/IncomeRecord"
      }, {
        title: "免责声明",
        iconclass: "icon-zerenshengming",
        pageUrl: "/page/ServicePact"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    XButton: vux_src_components_x_button,
    Cell: vux_src_components_cell,
    XDialog: x_dialog["a" /* default */],
    XInput: vux_src_components_x_input,
    Group: vux_src_components_group
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 10;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: "loading..."
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myincomedetails?loginid=' + this.userInfo.id,
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.myIncome = data;
              this.$vux.loading.hide();
              this.pageShow = true;

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    withDrawCommit: function withDrawCommit() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.withDrawInfo.accounts) {
                  _context2.next = 4;
                  break;
                }

                _this.stateText = "收款账号不能为空";
                _context2.next = 20;
                break;

              case 4:
                if (_this.withDrawInfo.realnames) {
                  _context2.next = 8;
                  break;
                }

                _this.stateText = "收款用户名不能为空";
                _context2.next = 20;
                break;

              case 8:
                if (_this.withDrawInfo.moneys) {
                  _context2.next = 12;
                  break;
                }

                _this.stateText = "提现金额不能为空";
                _context2.next = 20;
                break;

              case 12:
                if (!(Number(_this.withDrawInfo.moneys) > Number(_this.myIncome.moneys))) {
                  _context2.next = 16;
                  break;
                }

                _this.stateText = "余额不足";
                _context2.next = 20;
                break;

              case 16:
                _context2.next = 18;
                return util.request({
                  url: '/users/applywithdraws',
                  method: "post",
                  param: {
                    loginid: _this.userInfo.id,
                    mobile: _this.userInfo.admins,
                    accounts: _this.withDrawInfo.accounts,
                    realnames: _this.withDrawInfo.realnames,
                    moneys: _this.withDrawInfo.moneys
                  }
                });

              case 18:
                data = _context2.sent;

                if (data.return_code == "success") {
                  _this.$vux.toast.show({
                    text: data.return_data,
                    onHide: function onHide() {
                      _this.myIncome.moneys -= _this.withDrawInfo.moneys;
                      _this.showWithDraw = false;
                    }
                  });
                } else {
                  _this.$vux.toast.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 20:
                if (_this.stateText) {
                  setTimeout(function () {
                    _this.stateText = "";
                  }, 2000);
                }

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MyIncome.vue














/* harmony default export */ var user_MyIncome = ({
  directives: {
    TransferDom: transfer_dom["a" /* default */]
  },
  data: function data() {
    return {
      showWithDraw: false,
      pageShow: false,
      userInfo: null,
      myIncome: null,
      stateText: "",
      withDrawInfo: {
        accounts: "",
        realnames: "",
        moneys: ""
      },
      cellArr: [{
        title: "收入记录",
        iconclass: "icon-shourujilu",
        pageUrl: "/page/IncomeRecord"
      }, {
        title: "免责声明",
        iconclass: "icon-zerenshengming",
        pageUrl: "/page/ServicePact"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    XButton: vux_src_components_x_button,
    Cell: vux_src_components_cell,
    XDialog: x_dialog["a" /* default */],
    XInput: vux_src_components_x_input,
    Group: vux_src_components_group
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 10;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: "loading..."
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myincomedetails?loginid=' + this.userInfo.id,
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.myIncome = data;
              this.$vux.loading.hide();
              this.pageShow = true;

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    withDrawCommit: function withDrawCommit() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.withDrawInfo.accounts) {
                  _context2.next = 4;
                  break;
                }

                _this.stateText = "收款账号不能为空";
                _context2.next = 20;
                break;

              case 4:
                if (_this.withDrawInfo.realnames) {
                  _context2.next = 8;
                  break;
                }

                _this.stateText = "收款用户名不能为空";
                _context2.next = 20;
                break;

              case 8:
                if (_this.withDrawInfo.moneys) {
                  _context2.next = 12;
                  break;
                }

                _this.stateText = "提现金额不能为空";
                _context2.next = 20;
                break;

              case 12:
                if (!(Number(_this.withDrawInfo.moneys) > Number(_this.myIncome.moneys))) {
                  _context2.next = 16;
                  break;
                }

                _this.stateText = "余额不足";
                _context2.next = 20;
                break;

              case 16:
                _context2.next = 18;
                return util.request({
                  url: '/users/applywithdraws',
                  method: "post",
                  param: {
                    loginid: _this.userInfo.id,
                    mobile: _this.userInfo.admins,
                    accounts: _this.withDrawInfo.accounts,
                    realnames: _this.withDrawInfo.realnames,
                    moneys: _this.withDrawInfo.moneys
                  }
                });

              case 18:
                data = _context2.sent;

                if (data.return_code == "success") {
                  _this.$vux.toast.show({
                    text: data.return_data,
                    onHide: function onHide() {
                      _this.myIncome.moneys -= _this.withDrawInfo.moneys;
                      _this.showWithDraw = false;
                    }
                  });
                } else {
                  _this.$vux.toast.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 20:
                if (_this.stateText) {
                  setTimeout(function () {
                    _this.stateText = "";
                  }, 2000);
                }

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f9e21afa","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MyIncome.vue
var MyIncome_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pageShow)?_c('div',{staticClass:"MyIncome"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("我的收入")]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('div',[_c('i',{staticClass:"iconfont icon-shourujine"})]),_vm._v(" "),_c('h1',{staticClass:"amount"},[_vm._v(_vm._s(_vm.myIncome.moneys))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"amount-text"},[_vm._v("可提现金额(元)")])]),_vm._v(" "),_c('card',{staticClass:"desc"},[_c('div',{staticClass:"card-demo-flex card-demo-content01",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"vux-calc(1 *2 / 7.5 * 1vw)-r"},[_c('span',[_vm._v("本月收入 "+_vm._s(_vm.myIncome.lastmonth_moneys_totals))])]),_vm._v(" "),_c('div',[_c('span',[_vm._v("历史总收入 "+_vm._s(_vm.myIncome.moneys_totals))])])])])],1)]),_vm._v(" "),_c('x-button',{staticClass:"take-away",nativeOn:{"click":function($event){_vm.showWithDraw=true}}},[_vm._v("立即提现")]),_vm._v(" "),_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('cell',{key:index,attrs:{"title":cell.title,"link":cell.pageUrl}},[_c('i',{staticClass:"iconfont",class:cell.iconclass,attrs:{"slot":"icon"},slot:"icon"})])}),1)])],1),_vm._v(" "),_c('x-dialog',{staticClass:"dialog-demo",model:{value:(_vm.showWithDraw),callback:function ($$v) {_vm.showWithDraw=$$v},expression:"showWithDraw"}},[_c('div',{staticClass:"dialog-box"},[_c('group',{staticClass:"withdraw-box"},[_c('div',{staticClass:"withdraw-title",attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v("填写支付宝账户信息")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-danchuangguanbi",on:{"click":function($event){_vm.showWithDraw=false}}})]),_vm._v(" "),_c('x-input',{attrs:{"type":"text","placeholder":"请输入支付宝账号"},model:{value:(_vm.withDrawInfo.accounts),callback:function ($$v) {_vm.$set(_vm.withDrawInfo, "accounts", $$v)},expression:"withDrawInfo.accounts"}}),_vm._v(" "),_c('x-input',{attrs:{"type":"text","placeholder":"请输入支付宝用户名"},model:{value:(_vm.withDrawInfo.realnames),callback:function ($$v) {_vm.$set(_vm.withDrawInfo, "realnames", $$v)},expression:"withDrawInfo.realnames"}}),_vm._v(" "),_c('x-input',{attrs:{"type":"number","placeholder":"请输入提现金额"},model:{value:(_vm.withDrawInfo.moneys),callback:function ($$v) {_vm.$set(_vm.withDrawInfo, "moneys", $$v)},expression:"withDrawInfo.moneys"}})],1),_vm._v(" "),_c('div',{staticClass:"state-text"},[_vm._v(_vm._s(_vm.stateText))]),_vm._v(" "),_c('x-button',{staticClass:"withdraw-commit",nativeOn:{"click":function($event){$event.stopPropagation();return _vm.withDrawCommit($event)}}},[_vm._v("提交")]),_vm._v(" "),_c('div',{staticClass:"point"},[_vm._v("温馨提示:目前只支持支付宝提现")])],1)])],1):_vm._e()}
var MyIncome_staticRenderFns = []
var MyIncome_esExports = { render: MyIncome_render, staticRenderFns: MyIncome_staticRenderFns }
/* harmony default export */ var page_user_MyIncome = (MyIncome_esExports);
// CONCATENATED MODULE: ./src/page/user/MyIncome.vue
function MyIncome_injectStyle (ssrContext) {
  __webpack_require__("hGV1")
}
var MyIncome_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MyIncome___vue_template_functional__ = false
/* styles */
var MyIncome___vue_styles__ = MyIncome_injectStyle
/* scopeId */
var MyIncome___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MyIncome___vue_module_identifier__ = null
var MyIncome_Component = MyIncome_normalizeComponent(
  user_MyIncome,
  page_user_MyIncome,
  MyIncome___vue_template_functional__,
  MyIncome___vue_styles__,
  MyIncome___vue_scopeId__,
  MyIncome___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MyIncome = (MyIncome_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MySet.vue








/* harmony default export */ var MySet = ({
  data: function data() {
    return {
      cellArr1: [{
        title: "意见反馈",
        iconclass: "icon-yijianfankui",
        pageUrl: "/page/ReportOpinion"
      }],
      cellArr2: [{
        title: "服务协议",
        iconclass: "icon-fuwuxieyi",
        pageUrl: "/page/ServicePact"
      }, {
        title: "关于我们",
        iconclass: "icon-guanyuwomen",
        pageUrl: "/page/AboutUs"
      }, {
        title: "联系我们",
        iconclass: "icon-lianxiwomen",
        pageUrl: ""
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    XButton: vux_src_components_x_button,
    Cell: vux_src_components_cell
  },
  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    logout: function logout() {
      localStorage.removeItem('userInfo');
      this.$router.push({
        path: '/page/UserIndex'
      });
    },
    callPhone: function callPhone(phoneNumber) {
      window.location.href = 'tel://' + phoneNumber;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MySet.vue








/* harmony default export */ var user_MySet = ({
  data: function data() {
    return {
      cellArr1: [{
        title: "意见反馈",
        iconclass: "icon-yijianfankui",
        pageUrl: "/page/ReportOpinion"
      }],
      cellArr2: [{
        title: "服务协议",
        iconclass: "icon-fuwuxieyi",
        pageUrl: "/page/ServicePact"
      }, {
        title: "关于我们",
        iconclass: "icon-guanyuwomen",
        pageUrl: "/page/AboutUs"
      }, {
        title: "联系我们",
        iconclass: "icon-lianxiwomen",
        pageUrl: ""
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    XButton: vux_src_components_x_button,
    Cell: vux_src_components_cell
  },
  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    logout: function logout() {
      localStorage.removeItem('userInfo');
      this.$router.push({
        path: '/page/UserIndex'
      });
    },
    callPhone: function callPhone(phoneNumber) {
      window.location.href = 'tel://' + phoneNumber;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5e71632b","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MySet.vue
var MySet_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MySet"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("设置")]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr1),function(cell,index){return _c('cell',{key:index,attrs:{"title":cell.title,"link":cell.pageUrl,"value":cell.value||''}},[_c('i',{staticClass:"iconfont",class:cell.iconclass,attrs:{"slot":"icon"},slot:"icon"})])}),1)]),_vm._v(" "),_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr2),function(cell,index){return _c('cell',{key:index,attrs:{"title":cell.title,"link":cell.pageUrl},nativeOn:{"click":function($event){cell.title == '联系我们' ? _vm.callPhone(13817492716) : ''}}},[_c('i',{staticClass:"iconfont",class:cell.iconclass,attrs:{"slot":"icon"},slot:"icon"})])}),1)]),_vm._v(" "),_c('x-button',{staticClass:"log-out",nativeOn:{"click":function($event){return _vm.logout($event)}}},[_vm._v("退出登录")])],1)],1)}
var MySet_staticRenderFns = []
var MySet_esExports = { render: MySet_render, staticRenderFns: MySet_staticRenderFns }
/* harmony default export */ var page_user_MySet = (MySet_esExports);
// CONCATENATED MODULE: ./src/page/user/MySet.vue
function MySet_injectStyle (ssrContext) {
  __webpack_require__("KSzc")
}
var MySet_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MySet___vue_template_functional__ = false
/* styles */
var MySet___vue_styles__ = MySet_injectStyle
/* scopeId */
var MySet___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MySet___vue_module_identifier__ = null
var MySet_Component = MySet_normalizeComponent(
  user_MySet,
  page_user_MySet,
  MySet___vue_template_functional__,
  MySet___vue_styles__,
  MySet___vue_scopeId__,
  MySet___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MySet = (MySet_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/AboutUs.vue






/* harmony default export */ var AboutUs = ({
  data: function data() {
    return {
      cellArr: [{
        title: "新浪微博",
        value: "@舍豆"
      }, {
        title: "网页端",
        value: "www.shedouwang.com"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XImg: vux_src_components_x_img,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/AboutUs.vue






/* harmony default export */ var user_AboutUs = ({
  data: function data() {
    return {
      cellArr: [{
        title: "新浪微博",
        value: "@舍豆"
      }, {
        title: "网页端",
        value: "www.shedouwang.com"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XImg: vux_src_components_x_img,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f4964838","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/AboutUs.vue
var AboutUs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"AboutUs"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("关于舍豆")]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('div',{staticClass:"logo-box"},[_c('x-img',{staticClass:"logo",attrs:{"default-src":"static/img/icon/logo.png"}}),_vm._v(" "),_c('h3',{staticClass:"logo-title"},[_vm._v("舍豆")])],1),_vm._v(" "),_c('div',{staticClass:"desc"},[_vm._v("舍豆的介绍文字说明，有念念不忘的美好，有 爱而不得的疼痛，有生离死别的遗憾，有一再错过 的宿命，也有喧嚣之后的回归.舍豆的介绍文字说明，有念念不忘的美好，有 爱而不得的疼痛，有生离死别的遗憾，有一再错过 的宿命，也有喧嚣之后的回归")]),_vm._v(" "),_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('cell',{key:index,attrs:{"title":cell.title,"value":cell.value}})}),1)])],1)],1)}
var AboutUs_staticRenderFns = []
var AboutUs_esExports = { render: AboutUs_render, staticRenderFns: AboutUs_staticRenderFns }
/* harmony default export */ var page_user_AboutUs = (AboutUs_esExports);
// CONCATENATED MODULE: ./src/page/user/AboutUs.vue
function AboutUs_injectStyle (ssrContext) {
  __webpack_require__("jnM/")
}
var AboutUs_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var AboutUs___vue_template_functional__ = false
/* styles */
var AboutUs___vue_styles__ = AboutUs_injectStyle
/* scopeId */
var AboutUs___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AboutUs___vue_module_identifier__ = null
var AboutUs_Component = AboutUs_normalizeComponent(
  user_AboutUs,
  page_user_AboutUs,
  AboutUs___vue_template_functional__,
  AboutUs___vue_styles__,
  AboutUs___vue_scopeId__,
  AboutUs___vue_module_identifier__
)

/* harmony default export */ var src_page_user_AboutUs = (AboutUs_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/IncomeAccount.vue





/* harmony default export */ var IncomeAccount = ({
  data: function data() {
    return {
      cellArr: [{
        title: "微信",
        iconclass: "icon-weixin",
        pageUrl: "/page/MyRelease"
      }, {
        title: "支付宝",
        iconclass: "icon-zhifubao",
        pageUrl: "/page/MyFollow"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/IncomeAccount.vue





/* harmony default export */ var user_IncomeAccount = ({
  data: function data() {
    return {
      cellArr: [{
        title: "微信",
        iconclass: "icon-weixin",
        pageUrl: "/page/MyRelease"
      }, {
        title: "支付宝",
        iconclass: "icon-zhifubao",
        pageUrl: "/page/MyFollow"
      }]
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c864dcba","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/IncomeAccount.vue
var IncomeAccount_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"IncomeAccount"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("收款账户")]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('cell',{key:index,attrs:{"title":cell.title,"link":cell.pageUrl}},[_c('i',{staticClass:"iconfont",class:cell.iconclass,attrs:{"slot":"icon"},slot:"icon"})])}),1)])],1)],1)}
var IncomeAccount_staticRenderFns = []
var IncomeAccount_esExports = { render: IncomeAccount_render, staticRenderFns: IncomeAccount_staticRenderFns }
/* harmony default export */ var page_user_IncomeAccount = (IncomeAccount_esExports);
// CONCATENATED MODULE: ./src/page/user/IncomeAccount.vue
function IncomeAccount_injectStyle (ssrContext) {
  __webpack_require__("fNHR")
}
var IncomeAccount_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var IncomeAccount___vue_template_functional__ = false
/* styles */
var IncomeAccount___vue_styles__ = IncomeAccount_injectStyle
/* scopeId */
var IncomeAccount___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var IncomeAccount___vue_module_identifier__ = null
var IncomeAccount_Component = IncomeAccount_normalizeComponent(
  user_IncomeAccount,
  page_user_IncomeAccount,
  IncomeAccount___vue_template_functional__,
  IncomeAccount___vue_styles__,
  IncomeAccount___vue_scopeId__,
  IncomeAccount___vue_module_identifier__
)

/* harmony default export */ var src_page_user_IncomeAccount = (IncomeAccount_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/IncomeRecord.vue









/* harmony default export */ var IncomeRecord = ({
  data: function data() {
    return {
      userInfo: null,
      incomeRecordList: []
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 11;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: 'loading...'
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myaccountsdetails?loginid=' + this.userInfo.id + '&pages=1&rowsmax=10',
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.incomeRecordList = data;
              this.incomeRecordList.forEach(function (item, index) {
                if (item.pays_types == 'alipay') {
                  item.iconType = "icon-zhifubao";
                  item.text = '支付宝支付';
                } else {
                  item.iconType = "icon-weixin";
                  item.text = '微信支付';
                }
              });
              console.log(this.incomeRecordList);
              this.$vux.loading.hide();

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }()
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/IncomeRecord.vue









/* harmony default export */ var user_IncomeRecord = ({
  data: function data() {
    return {
      userInfo: null,
      incomeRecordList: []
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var userInfo, data;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (!userInfo) {
                _context.next = 11;
                break;
              }

              this.userInfo = JSON.parse(userInfo);
              this.$vux.loading.show({
                text: 'loading...'
              });
              _context.next = 6;
              return util.getData({
                url: '/users/myaccountsdetails?loginid=' + this.userInfo.id + '&pages=1&rowsmax=10',
                method: "get"
              });

            case 6:
              data = _context.sent;

              this.incomeRecordList = data;
              this.incomeRecordList.forEach(function (item, index) {
                if (item.pays_types == 'alipay') {
                  item.iconType = "icon-zhifubao";
                  item.text = '支付宝支付';
                } else {
                  item.iconType = "icon-weixin";
                  item.text = '微信支付';
                }
              });
              console.log(this.incomeRecordList);
              this.$vux.loading.hide();

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }()
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3e8ef990","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/IncomeRecord.vue
var IncomeRecord_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"IncomeRecord"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("收入记录")]),_vm._v(" "),_c('div',{staticClass:"IncomeRecord"},_vm._l((_vm.incomeRecordList),function(incomeRecord,index){return _c('flexbox',{key:index,staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":1.3}},[_c('i',{staticClass:"iconfont",class:incomeRecord.iconType})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7.7}},[_c('div',[_c('div',{staticClass:"text"},[_vm._v(_vm._s(incomeRecord.text))]),_vm._v(" "),_c('div',{staticClass:"time"},[_vm._v(_vm._s(incomeRecord.times))])])]),_vm._v(" "),_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('span',[_vm._v(_vm._s('+' + incomeRecord.moneys))])])],1)}),1)],1)}
var IncomeRecord_staticRenderFns = []
var IncomeRecord_esExports = { render: IncomeRecord_render, staticRenderFns: IncomeRecord_staticRenderFns }
/* harmony default export */ var page_user_IncomeRecord = (IncomeRecord_esExports);
// CONCATENATED MODULE: ./src/page/user/IncomeRecord.vue
function IncomeRecord_injectStyle (ssrContext) {
  __webpack_require__("WZUF")
}
var IncomeRecord_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var IncomeRecord___vue_template_functional__ = false
/* styles */
var IncomeRecord___vue_styles__ = IncomeRecord_injectStyle
/* scopeId */
var IncomeRecord___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var IncomeRecord___vue_module_identifier__ = null
var IncomeRecord_Component = IncomeRecord_normalizeComponent(
  user_IncomeRecord,
  page_user_IncomeRecord,
  IncomeRecord___vue_template_functional__,
  IncomeRecord___vue_styles__,
  IncomeRecord___vue_scopeId__,
  IncomeRecord___vue_module_identifier__
)

/* harmony default export */ var src_page_user_IncomeRecord = (IncomeRecord_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/ReportOpinion.vue














/* harmony default export */ var ReportOpinion = ({
  data: function data() {
    return {
      popupState: false,
      imgList: [{
        src: "static/img/icon/add-img.png"
      }],
      editValue: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XTextarea: vux_src_components_x_textarea,
    XButton: vux_src_components_x_button,
    XImg: vux_src_components_x_img,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    Popup: node_modules_vux_src_components_popup
  },
  created: function created() {},
  methods: {
    takePhoto: function takePhoto() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var photo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return takePicture();

              case 2:
                photo = _context.sent;

                if (photo) {
                  _this.imgList.push({
                    src: photo
                  });
                }
                _this.popupState = false;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    selectAlbum: function selectAlbum() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var photo;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return openAlbum(1);

              case 2:
                photo = _context2.sent;

                if (!photo) {
                  _context2.next = 7;
                  break;
                }

                _this2.imgList.push({
                  src: photo
                });
                _context2.next = 7;
                return util.convertImg(photo, 100, 100);

              case 7:
                _this2.popupState = false;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    addImg: function addImg() {
      if (this.imgList.length > 5) {
        this.$vux.alert.show({
          title: '提示',
          conbtent: '最多只能添加5张图片'
        });
        return false;
      }
      this.popupState = true;
    },
    commit: function commit() {}
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/ReportOpinion.vue














/* harmony default export */ var user_ReportOpinion = ({
  data: function data() {
    return {
      popupState: false,
      imgList: [{
        src: "static/img/icon/add-img.png"
      }],
      editValue: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XTextarea: vux_src_components_x_textarea,
    XButton: vux_src_components_x_button,
    XImg: vux_src_components_x_img,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    Popup: node_modules_vux_src_components_popup
  },
  created: function created() {},
  methods: {
    takePhoto: function takePhoto() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var photo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return takePicture();

              case 2:
                photo = _context.sent;

                if (photo) {
                  _this.imgList.push({
                    src: photo
                  });
                }
                _this.popupState = false;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    selectAlbum: function selectAlbum() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var photo;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return openAlbum(1);

              case 2:
                photo = _context2.sent;

                if (!photo) {
                  _context2.next = 7;
                  break;
                }

                _this2.imgList.push({
                  src: photo
                });
                _context2.next = 7;
                return util.convertImg(photo, 100, 100);

              case 7:
                _this2.popupState = false;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    addImg: function addImg() {
      if (this.imgList.length > 5) {
        this.$vux.alert.show({
          title: '提示',
          conbtent: '最多只能添加5张图片'
        });
        return false;
      }
      this.popupState = true;
    },
    commit: function commit() {}
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-538df8bb","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/ReportOpinion.vue
var ReportOpinion_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ReportOpinion"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("意见反馈")]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('div',{staticClass:"edit-box"},[_c('x-textarea',{attrs:{"height":185,"placeholder":"写下您的意见或建议，我们将用心聆听，做得更好！"},model:{value:(_vm.editValue),callback:function ($$v) {_vm.editValue=$$v},expression:"editValue"}}),_vm._v(" "),_c('grid',{staticClass:"img-list",attrs:{"cols":3,"show-lr-borders":false,"show-vertical-dividers":false}},_vm._l((_vm.imgList),function(img,index){return _c('grid-item',{key:index,staticClass:"img-item"},[_c('x-img',{staticClass:"add-img",attrs:{"default-src":img.src},nativeOn:{"click":function($event){return _vm.addImg($event)}}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"commit"},[_c('x-button',{staticClass:"commit-btn",class:{active:_vm.editValue},nativeOn:{"click":function($event){return _vm.commit($event)}}},[_vm._v("提交反馈")])],1)]),_vm._v(" "),_c('popup',{staticClass:"popup",model:{value:(_vm.popupState),callback:function ($$v) {_vm.popupState=$$v},expression:"popupState"}},[_c('div',{on:{"click":_vm.takePhoto}},[_vm._v("拍摄")]),_vm._v(" "),_c('div',{on:{"click":_vm.selectAlbum}},[_vm._v("相册")])])],1)}
var ReportOpinion_staticRenderFns = []
var ReportOpinion_esExports = { render: ReportOpinion_render, staticRenderFns: ReportOpinion_staticRenderFns }
/* harmony default export */ var page_user_ReportOpinion = (ReportOpinion_esExports);
// CONCATENATED MODULE: ./src/page/user/ReportOpinion.vue
function ReportOpinion_injectStyle (ssrContext) {
  __webpack_require__("oWJf")
}
var ReportOpinion_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ReportOpinion___vue_template_functional__ = false
/* styles */
var ReportOpinion___vue_styles__ = ReportOpinion_injectStyle
/* scopeId */
var ReportOpinion___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ReportOpinion___vue_module_identifier__ = null
var ReportOpinion_Component = ReportOpinion_normalizeComponent(
  user_ReportOpinion,
  page_user_ReportOpinion,
  ReportOpinion___vue_template_functional__,
  ReportOpinion___vue_styles__,
  ReportOpinion___vue_scopeId__,
  ReportOpinion___vue_module_identifier__
)

/* harmony default export */ var src_page_user_ReportOpinion = (ReportOpinion_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/ServicePact.vue





/* harmony default export */ var ServicePact = ({
  data: function data() {
    return {};
  },

  components: {
    XHeader: vux_src_components_x_header,
    Tabbar: src_components_tabbar_tabbar,
    TabbarItem: src_components_tabbar_tabbar_item
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/ServicePact.vue





/* harmony default export */ var user_ServicePact = ({
  data: function data() {
    return {};
  },

  components: {
    XHeader: vux_src_components_x_header,
    Tabbar: src_components_tabbar_tabbar,
    TabbarItem: src_components_tabbar_tabbar_item
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9c73f2e2","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/ServicePact.vue
var ServicePact_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ServicePact"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("《舍豆用户服务协议》")]),_vm._v(" "),_vm._m(0)],1)}
var ServicePact_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-box"},[_c('section',[_c('h1',[_vm._v("132")]),_vm._v(" "),_c('p',[_vm._v("465")])]),_vm._v(" "),_c('section',[_c('h1',[_vm._v("123")]),_vm._v(" "),_c('p',[_vm._v("465")])])])}]
var ServicePact_esExports = { render: ServicePact_render, staticRenderFns: ServicePact_staticRenderFns }
/* harmony default export */ var page_user_ServicePact = (ServicePact_esExports);
// CONCATENATED MODULE: ./src/page/user/ServicePact.vue
function ServicePact_injectStyle (ssrContext) {
  __webpack_require__("QNAn")
}
var ServicePact_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ServicePact___vue_template_functional__ = false
/* styles */
var ServicePact___vue_styles__ = ServicePact_injectStyle
/* scopeId */
var ServicePact___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ServicePact___vue_module_identifier__ = null
var ServicePact_Component = ServicePact_normalizeComponent(
  user_ServicePact,
  page_user_ServicePact,
  ServicePact___vue_template_functional__,
  ServicePact___vue_styles__,
  ServicePact___vue_scopeId__,
  ServicePact___vue_module_identifier__
)

/* harmony default export */ var src_page_user_ServicePact = (ServicePact_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MobileInfoVerification.vue











/* harmony default export */ var MobileInfoVerification = ({
  data: function data() {
    return {
      time: 60,
      state: true,
      mobile: "",
      sign: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.mobile = this.$route.query.mobile;
              if (this.mobile) {
                this.getSign();
              }

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    getSign: function getSign() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var data, timer;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return util.getData({
                  url: '/ajax/sendssms/?regs-' + _this.mobile + '.html',
                  method: "get"
                });

              case 2:
                data = _context2.sent;

                _this.$vux.toast.show({
                  text: data,
                  type: "text"
                });
                if (data != "1分钟内不能重复获取验证码" && data) {
                  timer = setInterval(function () {
                    if (_this.time <= 0) {
                      clearInterval(timer);
                      _this.state = false;
                      _this.time = 60;
                    }
                    --_this.time;
                  }, 1000);
                } else {
                  _this.state = true;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    },
    resetSign: function resetSign() {
      this.getSign();
    },
    login: function login() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return util.getData({
                  url: '/users/login?login_username=' + _this2.$route.query.mobile + '&login_type=1&mobile_code=' + _this2.sign,
                  method: "get"
                });

              case 2:
                data = _context3.sent;

                localStorage.setItem('userInfo', stringify_default()(data));
                _this2.$vux.toast.show({
                  text: '登录成功',
                  type: "text",
                  onHide: function onHide() {
                    _this2.$router.push({
                      path: '/page/UserIndex'
                    });
                  }
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    register: function register() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return util.getData({
                  url: '/users/register',
                  method: "post",
                  param: {
                    mobile: _this3.$route.query.mobile,
                    pwd: _this3.$route.query.pwd
                  }
                });

              case 2:
                data = _context4.sent;

                _this3.$vux.toast.show({
                  text: data,
                  type: "text",
                  onHide: function onHide() {
                    _this3.$router.go(-1);
                  }
                });

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },
    resetPwd: function resetPwd() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return util.getData({
                  url: '/users/setpassword',
                  method: "post",
                  param: {
                    mobile: _this4.$route.query.mobile,
                    password: _this4.$route.query.pwd,
                    sign: _this4.sign
                  }
                });

              case 2:
                data = _context5.sent;

                _this4.$vux.toast.show({
                  text: data,
                  type: "text",
                  onHide: function onHide() {
                    _this4.$router.push({
                      path: '/page/user/LoginIndex'
                    });
                  }
                });

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this4);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MobileInfoVerification.vue











/* harmony default export */ var user_MobileInfoVerification = ({
  data: function data() {
    return {
      time: 60,
      state: true,
      mobile: "",
      sign: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.mobile = this.$route.query.mobile;
              if (this.mobile) {
                this.getSign();
              }

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    getSign: function getSign() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var data, timer;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return util.getData({
                  url: '/ajax/sendssms/?regs-' + _this.mobile + '.html',
                  method: "get"
                });

              case 2:
                data = _context2.sent;

                _this.$vux.toast.show({
                  text: data,
                  type: "text"
                });
                if (data != "1分钟内不能重复获取验证码" && data) {
                  timer = setInterval(function () {
                    if (_this.time <= 0) {
                      clearInterval(timer);
                      _this.state = false;
                      _this.time = 60;
                    }
                    --_this.time;
                  }, 1000);
                } else {
                  _this.state = true;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    },
    resetSign: function resetSign() {
      this.getSign();
    },
    login: function login() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return util.getData({
                  url: '/users/login?login_username=' + _this2.$route.query.mobile + '&login_type=1&mobile_code=' + _this2.sign,
                  method: "get"
                });

              case 2:
                data = _context3.sent;

                localStorage.setItem('userInfo', stringify_default()(data));
                _this2.$vux.toast.show({
                  text: '登录成功',
                  type: "text",
                  onHide: function onHide() {
                    _this2.$router.push({
                      path: '/page/UserIndex'
                    });
                  }
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    register: function register() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return util.getData({
                  url: '/users/register',
                  method: "post",
                  param: {
                    mobile: _this3.$route.query.mobile,
                    pwd: _this3.$route.query.pwd
                  }
                });

              case 2:
                data = _context4.sent;

                _this3.$vux.toast.show({
                  text: data,
                  type: "text",
                  onHide: function onHide() {
                    _this3.$router.go(-1);
                  }
                });

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },
    resetPwd: function resetPwd() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return util.getData({
                  url: '/users/setpassword',
                  method: "post",
                  param: {
                    mobile: _this4.$route.query.mobile,
                    password: _this4.$route.query.pwd,
                    sign: _this4.sign
                  }
                });

              case 2:
                data = _context5.sent;

                _this4.$vux.toast.show({
                  text: data,
                  type: "text",
                  onHide: function onHide() {
                    _this4.$router.push({
                      path: '/page/user/LoginIndex'
                    });
                  }
                });

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this4);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d21bb5d2","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MobileInfoVerification.vue
var MobileInfoVerification_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MobileInfoLogin"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}}),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('group',[_c('h1',{staticClass:"login-title",attrs:{"slot":"title"},slot:"title"},[_vm._v("填写验证码")]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("短信验证码已发送至  "+_vm._s(_vm.mobile))]),_vm._v(" "),_c('x-input',{staticClass:"mobile",attrs:{"title":"验证码","placeholder":"请输入验证码"},model:{value:(_vm.sign),callback:function ($$v) {_vm.sign=$$v},expression:"sign"}},[(_vm.state)?_c('span',{staticClass:"get-verification-code",attrs:{"slot":"right"},slot:"right"},[_vm._v(_vm._s(_vm.time)+"秒后重新获取")]):_c('span',{staticClass:"get-verification-code-btn",attrs:{"slot":"right"},on:{"click":_vm.resetSign},slot:"right"},[_vm._v("重新获取")])]),_vm._v(" "),(_vm.$route.query.type == 'register')?_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.register($event)}}},[_vm._v("注册")]):_vm._e(),_vm._v(" "),(_vm.$route.query.type == 'login')?_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.login($event)}}},[_vm._v("登录")]):_vm._e(),_vm._v(" "),(_vm.$route.query.type == 'resetPwd')?_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.resetPwd($event)}}},[_vm._v("提交")]):_vm._e()],1)],1)],1)}
var MobileInfoVerification_staticRenderFns = []
var MobileInfoVerification_esExports = { render: MobileInfoVerification_render, staticRenderFns: MobileInfoVerification_staticRenderFns }
/* harmony default export */ var page_user_MobileInfoVerification = (MobileInfoVerification_esExports);
// CONCATENATED MODULE: ./src/page/user/MobileInfoVerification.vue
function MobileInfoVerification_injectStyle (ssrContext) {
  __webpack_require__("cvDh")
}
var MobileInfoVerification_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MobileInfoVerification___vue_template_functional__ = false
/* styles */
var MobileInfoVerification___vue_styles__ = MobileInfoVerification_injectStyle
/* scopeId */
var MobileInfoVerification___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MobileInfoVerification___vue_module_identifier__ = null
var MobileInfoVerification_Component = MobileInfoVerification_normalizeComponent(
  user_MobileInfoVerification,
  page_user_MobileInfoVerification,
  MobileInfoVerification___vue_template_functional__,
  MobileInfoVerification___vue_styles__,
  MobileInfoVerification___vue_scopeId__,
  MobileInfoVerification___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MobileInfoVerification = (MobileInfoVerification_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/ForgetPwd.vue






/* harmony default export */ var ForgetPwd = ({
  data: function data() {
    return {
      mobile: "",
      pwd: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: {
    commit: function commit() {
      var mobile = this.mobile;
      var pwd = this.pwd;
      if (mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) && pwd) {
        this.$router.push({
          path: '/page/user/MobileInfoVerification',
          query: {
            type: 'resetPwd',
            mobile: mobile,
            pwd: pwd
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号或密码"
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/ForgetPwd.vue






/* harmony default export */ var user_ForgetPwd = ({
  data: function data() {
    return {
      mobile: "",
      pwd: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: {
    commit: function commit() {
      var mobile = this.mobile;
      var pwd = this.pwd;
      if (mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) && pwd) {
        this.$router.push({
          path: '/page/user/MobileInfoVerification',
          query: {
            type: 'resetPwd',
            mobile: mobile,
            pwd: pwd
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号或密码"
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cb42fa12","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/ForgetPwd.vue
var ForgetPwd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MobileNumLogin"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_c('span',{staticClass:"to-register",attrs:{"slot":"right"},slot:"right"},[_c('router-link',{attrs:{"to":"/page/user/Register"}},[_vm._v("注册")])],1)]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('group',[_c('h1',{staticClass:"login-title",attrs:{"slot":"title"},slot:"title"},[_vm._v("忘记密码")]),_vm._v(" "),_c('x-input',{staticClass:"mobile",attrs:{"title":"手机","placeholder":"请输入手机号"},model:{value:(_vm.mobile),callback:function ($$v) {_vm.mobile=$$v},expression:"mobile"}}),_vm._v(" "),_c('x-input',{staticClass:"pwd",attrs:{"title":"密码","placeholder":"请输入新密码"},model:{value:(_vm.pwd),callback:function ($$v) {_vm.pwd=$$v},expression:"pwd"}}),_vm._v(" "),_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.commit($event)}}},[_vm._v("确认")]),_vm._v(" "),_c('div',{staticClass:"fast-login"},[_c('div',{staticClass:"title"},[_vm._v("其他方式登录")]),_vm._v(" "),_c('div',{staticClass:"btns"},[_c('i',{staticClass:"iconfont icon-xinlang"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-weixin1"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-QQ"})])]),_vm._v(" "),_c('div',{staticClass:"statement-box"},[_vm._v("\n        登录或注册即同意舍豆\n        "),_c('span',[_vm._v("《用户服务协议》")])])],1)],1)],1)}
var ForgetPwd_staticRenderFns = []
var ForgetPwd_esExports = { render: ForgetPwd_render, staticRenderFns: ForgetPwd_staticRenderFns }
/* harmony default export */ var page_user_ForgetPwd = (ForgetPwd_esExports);
// CONCATENATED MODULE: ./src/page/user/ForgetPwd.vue
function ForgetPwd_injectStyle (ssrContext) {
  __webpack_require__("ZmDO")
}
var ForgetPwd_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ForgetPwd___vue_template_functional__ = false
/* styles */
var ForgetPwd___vue_styles__ = ForgetPwd_injectStyle
/* scopeId */
var ForgetPwd___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ForgetPwd___vue_module_identifier__ = null
var ForgetPwd_Component = ForgetPwd_normalizeComponent(
  user_ForgetPwd,
  page_user_ForgetPwd,
  ForgetPwd___vue_template_functional__,
  ForgetPwd___vue_styles__,
  ForgetPwd___vue_scopeId__,
  ForgetPwd___vue_module_identifier__
)

/* harmony default export */ var src_page_user_ForgetPwd = (ForgetPwd_Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/components/swiper/swiper.js
var swiper = __webpack_require__("NjrX");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/swiper/swiper.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var swiper_swiper = ({
  name: 'swiper',
  created: function created() {
    this.index = this.value || 0;
    if (this.index) {
      this.current = this.index;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.hasTwoLoopItem();
    this.$nextTick(function () {
      if (!(_this2.list && _this2.list.length === 0)) {
        _this2.render(_this2.index);
      }
      _this2.xheight = _this2.getHeight();
      _this2.$emit('on-get-height', _this2.xheight);
    });
  },

  methods: {
    hasTwoLoopItem: function hasTwoLoopItem() {
      if (this.list.length === 2 && this.loop) {
        this.listTwoLoopItem = this.list;
      } else {
        this.listTwoLoopItem = [];
      }
    },
    clickListItem: function clickListItem(item) {
      Object(router["a" /* go */])(item.url, this.$router);
      this.$emit('on-click-list-item', JSON.parse(stringify_default()(item)));
    },
    buildBackgroundUrl: function buildBackgroundUrl(item) {
      return item.fallbackImg ? 'url(' + item.img + '), url(' + item.fallbackImg + ')' : 'url(' + item.img + ')';
    },
    render: function render() {
      var _this3 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.swiper && this.swiper.destroy();
      this.swiper = new swiper["a" /* default */]({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      }).on('swiped', function (prev, index) {
        _this3.current = index % _this3.length;
        _this3.index = index % _this3.length;
      });
      if (index > 0) {
        this.swiper.go(index);
      }
    },
    rerender: function rerender() {
      var _this4 = this;

      if (!this.$el || this.hasRender) {
        return;
      }
      this.hasRender = true;
      this.hasTwoLoopItem();
      this.$nextTick(function () {
        _this4.index = _this4.value || 0;
        _this4.current = _this4.value || 0;
        _this4.length = _this4.list.length || _this4.$children.length;
        _this4.destroy();
        _this4.render(_this4.value);
      });
    },
    destroy: function destroy() {
      this.hasRender = false;
      this.swiper && this.swiper.destroy();
    },
    getHeight: function getHeight() {
      var hasHeight = parseInt(this.height, 10);
      if (hasHeight) return this.height;
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px';
        }
        return '180px';
      }
    }
  },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: Boolean,
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      hasRender: false,
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0,
      listTwoLoopItem: [] // issue #1484
    };
  },

  watch: {
    auto: function auto(val) {
      if (!val) {
        this.swiper && this.swiper.stop();
      } else {
        this.swiper && this.swiper._auto();
      }
    },
    list: function list(val, oldVal) {
      if (stringify_default()(val) !== stringify_default()(oldVal)) {
        this.rerender();
      }
    },
    current: function current(currentIndex) {
      this.index = currentIndex;
      this.$emit('on-index-change', currentIndex);
    },
    index: function index(val) {
      var _this = this;
      if (val !== this.current) {
        this.$nextTick(function () {
          _this.swiper && _this.swiper.go(val);
        });
      }
      this.$emit('input', val);
    },
    value: function value(val) {
      this.index = val;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/swiper/swiper.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var components_swiper_swiper = ({
  name: 'swiper',
  created: function created() {
    this.index = this.value || 0;
    if (this.index) {
      this.current = this.index;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.hasTwoLoopItem();
    this.$nextTick(function () {
      if (!(_this2.list && _this2.list.length === 0)) {
        _this2.render(_this2.index);
      }
      _this2.xheight = _this2.getHeight();
      _this2.$emit('on-get-height', _this2.xheight);
    });
  },

  methods: {
    hasTwoLoopItem: function hasTwoLoopItem() {
      if (this.list.length === 2 && this.loop) {
        this.listTwoLoopItem = this.list;
      } else {
        this.listTwoLoopItem = [];
      }
    },
    clickListItem: function clickListItem(item) {
      Object(router["a" /* go */])(item.url, this.$router);
      this.$emit('on-click-list-item', JSON.parse(stringify_default()(item)));
    },
    buildBackgroundUrl: function buildBackgroundUrl(item) {
      return item.fallbackImg ? 'url(' + item.img + '), url(' + item.fallbackImg + ')' : 'url(' + item.img + ')';
    },
    render: function render() {
      var _this3 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.swiper && this.swiper.destroy();
      this.swiper = new swiper["a" /* default */]({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      }).on('swiped', function (prev, index) {
        _this3.current = index % _this3.length;
        _this3.index = index % _this3.length;
      });
      if (index > 0) {
        this.swiper.go(index);
      }
    },
    rerender: function rerender() {
      var _this4 = this;

      if (!this.$el || this.hasRender) {
        return;
      }
      this.hasRender = true;
      this.hasTwoLoopItem();
      this.$nextTick(function () {
        _this4.index = _this4.value || 0;
        _this4.current = _this4.value || 0;
        _this4.length = _this4.list.length || _this4.$children.length;
        _this4.destroy();
        _this4.render(_this4.value);
      });
    },
    destroy: function destroy() {
      this.hasRender = false;
      this.swiper && this.swiper.destroy();
    },
    getHeight: function getHeight() {
      var hasHeight = parseInt(this.height, 10);
      if (hasHeight) return this.height;
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px';
        }
        return '180px';
      }
    }
  },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: Boolean,
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      hasRender: false,
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0,
      listTwoLoopItem: [] // issue #1484
    };
  },

  watch: {
    auto: function auto(val) {
      if (!val) {
        this.swiper && this.swiper.stop();
      } else {
        this.swiper && this.swiper._auto();
      }
    },
    list: function list(val, oldVal) {
      if (stringify_default()(val) !== stringify_default()(oldVal)) {
        this.rerender();
      }
    },
    current: function current(currentIndex) {
      this.index = currentIndex;
      this.$emit('on-index-change', currentIndex);
    },
    index: function index(val) {
      var _this = this;
      if (val !== this.current) {
        this.$nextTick(function () {
          _this.swiper && _this.swiper.go(val);
        });
      }
      this.$emit('input', val);
    },
    value: function value(val) {
      this.index = val;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8fe8f518","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/swiper/swiper.vue
var swiper_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-slider"},[_c('div',{staticClass:"vux-swiper",style:({height: _vm.xheight})},[_vm._t("default"),_vm._v(" "),_vm._l((_vm.list),function(item,index){return _c('div',{staticClass:"vux-swiper-item",attrs:{"data-index":index},on:{"click":function($event){return _vm.clickListItem(item)}}},[_c('a',{attrs:{"href":"javascript:"}},[_c('div',{staticClass:"vux-img",style:({backgroundImage: _vm.buildBackgroundUrl(item)})}),_vm._v(" "),(_vm.showDescMask)?_c('p',{staticClass:"vux-swiper-desc"},[_vm._v(_vm._s(item.title))]):_vm._e()])])}),_vm._v(" "),_vm._l((_vm.listTwoLoopItem),function(item,index){return (_vm.listTwoLoopItem.length > 0)?_c('div',{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":index},on:{"click":function($event){return _vm.clickListItem(item)}}},[_c('a',{attrs:{"href":"javascript:"}},[_c('div',{staticClass:"vux-img",style:({backgroundImage: _vm.buildBackgroundUrl(item)})}),_vm._v(" "),(_vm.showDescMask)?_c('p',{staticClass:"vux-swiper-desc"},[_vm._v(_vm._s(item.title))]):_vm._e()])]):_vm._e()})],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDots),expression:"showDots"}],class:[_vm.dotsClass, 'vux-indicator', ("vux-indicator-" + _vm.dotsPosition)]},_vm._l((_vm.length),function(key){return _c('a',{attrs:{"href":"javascript:"}},[_c('i',{staticClass:"vux-icon-dot",class:{'active': key - 1 === _vm.current}})])}),0)])}
var swiper_staticRenderFns = []
var swiper_esExports = { render: swiper_render, staticRenderFns: swiper_staticRenderFns }
/* harmony default export */ var src_components_swiper_swiper = (swiper_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/swiper/swiper.vue
function swiper_injectStyle (ssrContext) {
  __webpack_require__("0GVd")
}
var swiper_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var swiper___vue_template_functional__ = false
/* styles */
var swiper___vue_styles__ = swiper_injectStyle
/* scopeId */
var swiper___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var swiper___vue_module_identifier__ = null
var swiper_Component = swiper_normalizeComponent(
  components_swiper_swiper,
  src_components_swiper_swiper,
  swiper___vue_template_functional__,
  swiper___vue_styles__,
  swiper___vue_scopeId__,
  swiper___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_swiper_swiper = (swiper_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/LoginIndex.vue






/* harmony default export */ var LoginIndex = ({
  data: function data() {
    return {
      baseList: {
        pageHeight: document.documentElement.clientHeight + "px",
        list: [{
          img: "static/img/img.png"
        }, {
          img: "static/img/img.png"
        }, {
          img: "static/img/img.png"
        }]
      }
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Swiper: vux_src_components_swiper_swiper,
    XImg: vux_src_components_x_img,
    XButton: vux_src_components_x_button
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/LoginIndex.vue






/* harmony default export */ var user_LoginIndex = ({
  data: function data() {
    return {
      baseList: {
        pageHeight: document.documentElement.clientHeight + "px",
        list: [{
          img: "static/img/img.png"
        }, {
          img: "static/img/img.png"
        }, {
          img: "static/img/img.png"
        }]
      }
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    Swiper: vux_src_components_swiper_swiper,
    XImg: vux_src_components_x_img,
    XButton: vux_src_components_x_button
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a08ff610","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/LoginIndex.vue
var LoginIndex_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginIndex"},[_c('swiper',{staticClass:"swiper",attrs:{"height":_vm.baseList.pageHeight,"show-dots":false,"interval":5000,"duration":3000,"auto":true,"loop":"","list":_vm.baseList.list}}),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: '',showBack: false}}},[_c('span',{attrs:{"slot":"right"},slot:"right"},[_c('router-link',{staticClass:"to-index",attrs:{"to":"/"}},[_vm._v("随便逛逛")])],1)]),_vm._v(" "),_c('div',{staticClass:"logo-box"},[_c('x-img',{staticClass:"logo-img",attrs:{"default-src":"static/img/icon/logo-text.png"}}),_vm._v(" "),_c('span',{staticClass:"logo-desc"},[_vm._v("美好生活研究院")])],1),_vm._v(" "),_c('div',{staticClass:"login-register-btns"},[_c('x-button',{staticClass:"register",attrs:{"is-link":"","link":"/page/user/Register"}},[_vm._v("注册")]),_vm._v(" "),_c('div',[_vm._v("已经有账号了？")]),_vm._v(" "),_c('x-button',{staticClass:"login",attrs:{"is-link":"","link":"/page/user/MobileNumLogin"}},[_vm._v("登录")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1)],1)],1)}
var LoginIndex_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fast-login"},[_c('div',{staticClass:"title"},[_vm._v("其他方式登录")]),_vm._v(" "),_c('div',{staticClass:"btns"},[_c('i',{staticClass:"iconfont icon-xinlang"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-weixin1"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-QQ"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"statement-box"},[_vm._v("\n      登录或注册即同意舍豆\n      "),_c('span',[_vm._v("用户服务协议")])])}]
var LoginIndex_esExports = { render: LoginIndex_render, staticRenderFns: LoginIndex_staticRenderFns }
/* harmony default export */ var page_user_LoginIndex = (LoginIndex_esExports);
// CONCATENATED MODULE: ./src/page/user/LoginIndex.vue
function LoginIndex_injectStyle (ssrContext) {
  __webpack_require__("Cfb4")
}
var LoginIndex_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var LoginIndex___vue_template_functional__ = false
/* styles */
var LoginIndex___vue_styles__ = LoginIndex_injectStyle
/* scopeId */
var LoginIndex___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var LoginIndex___vue_module_identifier__ = null
var LoginIndex_Component = LoginIndex_normalizeComponent(
  user_LoginIndex,
  page_user_LoginIndex,
  LoginIndex___vue_template_functional__,
  LoginIndex___vue_styles__,
  LoginIndex___vue_scopeId__,
  LoginIndex___vue_module_identifier__
)

/* harmony default export */ var src_page_user_LoginIndex = (LoginIndex_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MobileInfoLogin.vue






/* harmony default export */ var MobileInfoLogin = ({
  data: function data() {
    return {
      mobile: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: {
    commit: function commit() {
      var mobile = this.mobile;
      if (mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
        this.$router.push({
          path: '/page/user/MobileInfoVerification',
          query: {
            type: "login",
            mobile: mobile
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号码"
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MobileInfoLogin.vue






/* harmony default export */ var user_MobileInfoLogin = ({
  data: function data() {
    return {
      mobile: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: {
    commit: function commit() {
      var mobile = this.mobile;
      if (mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
        this.$router.push({
          path: '/page/user/MobileInfoVerification',
          query: {
            type: "login",
            mobile: mobile
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号码"
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ea15d44","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MobileInfoLogin.vue
var MobileInfoLogin_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MobileInfoLogin"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}}),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('group',[_c('h1',{staticClass:"login-title",attrs:{"slot":"title"},slot:"title"},[_vm._v("短信登录")]),_vm._v(" "),_c('x-input',{staticClass:"mobile",attrs:{"title":"手机","placeholder":"请输入手机号"},model:{value:(_vm.mobile),callback:function ($$v) {_vm.mobile=$$v},expression:"mobile"}}),_vm._v(" "),_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.commit($event)}}},[_vm._v("下一步")])],1)],1)],1)}
var MobileInfoLogin_staticRenderFns = []
var MobileInfoLogin_esExports = { render: MobileInfoLogin_render, staticRenderFns: MobileInfoLogin_staticRenderFns }
/* harmony default export */ var page_user_MobileInfoLogin = (MobileInfoLogin_esExports);
// CONCATENATED MODULE: ./src/page/user/MobileInfoLogin.vue
function MobileInfoLogin_injectStyle (ssrContext) {
  __webpack_require__("g1BM")
}
var MobileInfoLogin_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MobileInfoLogin___vue_template_functional__ = false
/* styles */
var MobileInfoLogin___vue_styles__ = MobileInfoLogin_injectStyle
/* scopeId */
var MobileInfoLogin___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MobileInfoLogin___vue_module_identifier__ = null
var MobileInfoLogin_Component = MobileInfoLogin_normalizeComponent(
  user_MobileInfoLogin,
  page_user_MobileInfoLogin,
  MobileInfoLogin___vue_template_functional__,
  MobileInfoLogin___vue_styles__,
  MobileInfoLogin___vue_scopeId__,
  MobileInfoLogin___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MobileInfoLogin = (MobileInfoLogin_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MobileNumLogin.vue












var MobileNumLogin_qs = __webpack_require__("mw3O");

/* harmony default export */ var MobileNumLogin = ({
  data: function data() {
    return {
      mobile: "",
      pwd: ""
    };
  },

  computed: {},
  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: extends_default()({}, Object(vuex_esm["b" /* mapMutations */])({
    updateUserInfo: "updateUserInfo"
  }), {
    loginCommit: function loginCommit() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var mobile, pwd, data, userInfo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mobile = _this.mobile;
                pwd = _this.pwd;

                if (!(mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) && pwd)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return util.request({
                  url: '/users/login',
                  method: "post",
                  param: {
                    login_username: mobile,
                    login_type: 0,
                    login_password: pwd
                  }
                });

              case 5:
                data = _context.sent;

                if (data.return_code == "success") {
                  userInfo = data.return_data;

                  _this.$vux.toast.show({
                    text: "登录成功",
                    onHide: function onHide() {
                      _this.$router.go(-1);
                    }
                  });
                  _this.updateUserInfo(userInfo);
                  localStorage.setItem("userInfo", stringify_default()(userInfo));
                } else {
                  _this.$vux.alert.show({
                    title: "提示",
                    content: "登录失败，请稍后重试"
                  });
                }
                _context.next = 10;
                break;

              case 9:
                _this.$vux.alert.show({
                  title: "提示",
                  content: "手机号或密码有误"
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    wechatLogin: function wechatLogin() {
      var scope = "snsapi_userinfo",
          state = "_" + +new Date();
      alert(Wechat.auth);
      Wechat.auth(scope, state, function (response) {

        alert(stringify_default()(response));
      }, function (reason) {
        alert("Failed:" + reason);
      });
    }
  })
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/MobileNumLogin.vue












var user_MobileNumLogin_qs = __webpack_require__("mw3O");

/* harmony default export */ var user_MobileNumLogin = ({
  data: function data() {
    return {
      mobile: "",
      pwd: ""
    };
  },

  computed: {},
  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: extends_default()({}, Object(vuex_esm["b" /* mapMutations */])({
    updateUserInfo: "updateUserInfo"
  }), {
    loginCommit: function loginCommit() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var mobile, pwd, data, userInfo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mobile = _this.mobile;
                pwd = _this.pwd;

                if (!(mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) && pwd)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return util.request({
                  url: '/users/login',
                  method: "post",
                  param: {
                    login_username: mobile,
                    login_type: 0,
                    login_password: pwd
                  }
                });

              case 5:
                data = _context.sent;

                if (data.return_code == "success") {
                  userInfo = data.return_data;

                  _this.$vux.toast.show({
                    text: "登录成功",
                    onHide: function onHide() {
                      _this.$router.go(-1);
                    }
                  });
                  _this.updateUserInfo(userInfo);
                  localStorage.setItem("userInfo", stringify_default()(userInfo));
                } else {
                  _this.$vux.alert.show({
                    title: "提示",
                    content: "登录失败，请稍后重试"
                  });
                }
                _context.next = 10;
                break;

              case 9:
                _this.$vux.alert.show({
                  title: "提示",
                  content: "手机号或密码有误"
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    wechatLogin: function wechatLogin() {
      var scope = "snsapi_userinfo",
          state = "_" + +new Date();
      alert(Wechat.auth);
      Wechat.auth(scope, state, function (response) {

        alert(stringify_default()(response));
      }, function (reason) {
        alert("Failed:" + reason);
      });
    }
  })
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3228532c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/MobileNumLogin.vue
var MobileNumLogin_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MobileNumLogin"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_c('span',{staticClass:"to-register",attrs:{"slot":"right"},slot:"right"},[_c('router-link',{attrs:{"to":"/page/user/Register"}},[_vm._v("注册")])],1)]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('group',[_c('h1',{staticClass:"login-title",attrs:{"slot":"title"},slot:"title"},[_vm._v("手机号登录")]),_vm._v(" "),_c('x-input',{staticClass:"mobile",attrs:{"title":"手机","placeholder":"请输入手机号"},model:{value:(_vm.mobile),callback:function ($$v) {_vm.mobile=$$v},expression:"mobile"}}),_vm._v(" "),_c('x-input',{staticClass:"pwd",attrs:{"type":"password","title":"密码","placeholder":"请输入登录密码"},model:{value:(_vm.pwd),callback:function ($$v) {_vm.pwd=$$v},expression:"pwd"}}),_vm._v(" "),_c('div',{staticClass:"forget-pwd"},[_c('router-link',{attrs:{"to":"/page/user/MobileInfoLogin"}},[_vm._v("短信登录")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/page/user/ForgetPwd"}},[_vm._v("忘记密码？")])],1),_vm._v(" "),_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.loginCommit($event)}}},[_vm._v("立即登录")]),_vm._v(" "),_c('div',{staticClass:"fast-login"},[_c('div',{staticClass:"title"},[_vm._v("其他方式登录")]),_vm._v(" "),_c('div',{staticClass:"btns"},[_c('i',{staticClass:"iconfont icon-xinlang"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-weixin1",on:{"click":_vm.wechatLogin}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-QQ"})])]),_vm._v(" "),_c('div',{staticClass:"statement-box"},[_vm._v("\n        登录或注册即同意舍豆\n        "),_c('span',[_vm._v("《用户服务协议》")])])],1)],1)],1)}
var MobileNumLogin_staticRenderFns = []
var MobileNumLogin_esExports = { render: MobileNumLogin_render, staticRenderFns: MobileNumLogin_staticRenderFns }
/* harmony default export */ var page_user_MobileNumLogin = (MobileNumLogin_esExports);
// CONCATENATED MODULE: ./src/page/user/MobileNumLogin.vue
function MobileNumLogin_injectStyle (ssrContext) {
  __webpack_require__("FmQo")
}
var MobileNumLogin_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var MobileNumLogin___vue_template_functional__ = false
/* styles */
var MobileNumLogin___vue_styles__ = MobileNumLogin_injectStyle
/* scopeId */
var MobileNumLogin___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MobileNumLogin___vue_module_identifier__ = null
var MobileNumLogin_Component = MobileNumLogin_normalizeComponent(
  user_MobileNumLogin,
  page_user_MobileNumLogin,
  MobileNumLogin___vue_template_functional__,
  MobileNumLogin___vue_styles__,
  MobileNumLogin___vue_scopeId__,
  MobileNumLogin___vue_module_identifier__
)

/* harmony default export */ var src_page_user_MobileNumLogin = (MobileNumLogin_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/Register.vue








/* harmony default export */ var Register = ({
  data: function data() {
    return {
      pwdShowState: false,
      password: "password",
      mobile: "",
      pwd: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: {
    pwdToggle: function pwdToggle() {
      this.pwdShowState = !this.pwdShowState;
    },
    register: function register() {
      var mobile = this.mobile;
      var pwd = this.pwd;
      if (mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) && pwd) {
        this.$router.push({
          path: '/page/user/MobileInfoVerification',
          query: {
            type: 'register',
            mobile: mobile,
            pwd: pwd
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号或密码"
        });
      }
    }
  },
  watch: {
    pwdShowState: function pwdShowState(_pwdShowState) {
      if (_pwdShowState) {
        this.password = "text";
      } else {
        this.password = "password";
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/user/Register.vue








/* harmony default export */ var user_Register = ({
  data: function data() {
    return {
      pwdShowState: false,
      password: "password",
      mobile: "",
      pwd: ""
    };
  },

  components: {
    XHeader: vux_src_components_x_header,
    XButton: vux_src_components_x_button,
    Group: vux_src_components_group,
    XInput: vux_src_components_x_input
  },
  created: function created() {},
  methods: {
    pwdToggle: function pwdToggle() {
      this.pwdShowState = !this.pwdShowState;
    },
    register: function register() {
      var mobile = this.mobile;
      var pwd = this.pwd;
      if (mobile.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) && pwd) {
        this.$router.push({
          path: '/page/user/MobileInfoVerification',
          query: {
            type: 'register',
            mobile: mobile,
            pwd: pwd
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号或密码"
        });
      }
    }
  },
  watch: {
    pwdShowState: function pwdShowState(_pwdShowState) {
      if (_pwdShowState) {
        this.password = "text";
      } else {
        this.password = "password";
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-132feb69","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/user/Register.vue
var Register_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MobileNumLogin"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_c('span',{staticClass:"to-register",attrs:{"slot":"right"},slot:"right"},[_c('router-link',{attrs:{"to":"/page/user/MobileNumLogin"}},[_vm._v("登录")])],1)]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('group',[_c('h1',{staticClass:"login-title",attrs:{"slot":"title"},slot:"title"},[_vm._v("手机号注册")]),_vm._v(" "),_c('x-input',{staticClass:"mobile",attrs:{"title":"手机","placeholder":"请输入手机号"},model:{value:(_vm.mobile),callback:function ($$v) {_vm.mobile=$$v},expression:"mobile"}}),_vm._v(" "),_c('x-input',{staticClass:"pwd",attrs:{"type":_vm.password,"title":"密码","placeholder":"请设置登录密码"},model:{value:(_vm.pwd),callback:function ($$v) {_vm.pwd=$$v},expression:"pwd"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.pwdShowState),expression:"pwdShowState"}],staticClass:"iconfont icon-mimakejian",attrs:{"slot":"right"},on:{"click":_vm.pwdToggle},slot:"right"}),_vm._v(" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.pwdShowState),expression:"!pwdShowState"}],staticClass:"iconfont icon-mimabukejian",attrs:{"slot":"right"},on:{"click":_vm.pwdToggle},slot:"right"})]),_vm._v(" "),_c('x-button',{staticClass:"login-commit",nativeOn:{"click":function($event){return _vm.register($event)}}},[_vm._v("注册")]),_vm._v(" "),_c('div',{staticClass:"fast-login"},[_c('div',{staticClass:"title"},[_vm._v("其他方式登录")]),_vm._v(" "),_c('div',{staticClass:"btns"},[_c('i',{staticClass:"iconfont icon-xinlang"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-weixin1"}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-QQ"})])]),_vm._v(" "),_c('div',{staticClass:"statement-box"},[_vm._v("\n        登录或注册即同意舍豆\n        "),_c('span',[_vm._v("《用户服务协议》")])])],1)],1)],1)}
var Register_staticRenderFns = []
var Register_esExports = { render: Register_render, staticRenderFns: Register_staticRenderFns }
/* harmony default export */ var page_user_Register = (Register_esExports);
// CONCATENATED MODULE: ./src/page/user/Register.vue
function Register_injectStyle (ssrContext) {
  __webpack_require__("Cbgi")
}
var Register_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Register___vue_template_functional__ = false
/* styles */
var Register___vue_styles__ = Register_injectStyle
/* scopeId */
var Register___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Register___vue_module_identifier__ = null
var Register_Component = Register_normalizeComponent(
  user_Register,
  page_user_Register,
  Register___vue_template_functional__,
  Register___vue_styles__,
  Register___vue_scopeId__,
  Register___vue_module_identifier__
)

/* harmony default export */ var src_page_user_Register = (Register_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/TakePhoto.vue

















/* harmony default export */ var TakePhoto = ({
  data: function data() {
    return {

      pageShow: false,

      messageBadge: "80",

      popup: {
        popupState: false,
        type: "reward"
      },

      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },

      cellArr: [{
        title: "支付宝",
        lefticonclass: "icon-zhifubao",
        righticonclass: "icon-weixuanzhong"
      }],
      selectPayMethod: "",

      confirmReward: "",

      menuBoxShow: false,

      showReportPopup: false,

      reportCellArr: [{
        title: "淫秽色情",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "违法信息",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "营销广告",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "恶意攻击谩骂",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }],
      previewList: {
        list: [],
        index: 0,
        userId: ""
      },
      tab: {
        tabList: [{ id: "0", tits: "全部" }],
        id: 0
      },

      baseList: [],

      designList: [],

      currentDesignItem: null,

      currentPreviewDesignItem: null,

      userInfo: null
    };
  },

  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this = this;

      var userInfo, tabList, designListUrl;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (userInfo) {
                this.userInfo = JSON.parse(userInfo);
              }
              this.$vux.loading.show({
                text: "Loading"
              });
              /*
              ** 话题列表
              */
              _context.next = 5;
              return util.getData({
                url: "/materials/topicslists",
                method: "post"
              });

            case 5:
              tabList = _context.sent;

              this.tab.tabList = this.tab.tabList.concat(tabList);
              /*
              ** 轮播图
              */
              _context.next = 9;
              return util.getData({
                url: "/materials/bannerslists",
                method: "post"
              });

            case 9:
              this.bannerList = _context.sent;

              this.bannerList.forEach(function (item, index) {
                item = {
                  img: item.thumbs
                };
                _this.baseList.push(item);
              });
              /*
              ** 随手拍列表
              */
              designListUrl = void 0;

              if (this.userInfo) {
                designListUrl = '/materials/postslists?loginid=' + this.userInfo.id + '&topics_id=' + this.tab.id + '&pages=1&rowsmax=10';
              } else {
                designListUrl = '/materials/postslists?topics_id=' + this.tab.id + '&pages=1&rowsmax=10';
              }
              _context.next = 15;
              return util.getData({
                url: designListUrl,
                method: "get"
              });

            case 15:
              this.designList = _context.sent;


              this.designList.forEach(function (item, index) {

                item.previewList = [];
                item.images.forEach(function (img) {
                  item.previewList.push({
                    id: img.id,
                    img: img.updatas,
                    collected: img.collected || 0
                  });
                });

                item.sex = item.gender == 1 ? "boy" : "girl";

                switch (item.previewList.length) {
                  case 1:
                    item.class = "one-img";
                    break;
                  case 2:
                    item.class = "two-img";
                    break;
                  case 3:
                    item.class = "three-img";
                    break;
                  case 4:
                    item.class = "four-img";
                    break;
                  case 5:
                    item.class = "five-img";
                    break;
                  case 6:
                    item.class = "fix-img";
                    break;
                  case 7:
                    item.class = "seven-img";
                    break;
                  case 8:
                    item.class = "eight-img";
                    break;
                  case 9:
                    item.class = "nine-img";
                    break;

                  default:
                    break;
                }
              });
              this.$vux.loading.hide();
              this.pageShow = true;

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    seleted: function seleted(id) {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var designListUrl;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.tab.id = id;
                _this2.$vux.loading.show({
                  text: "Loading"
                });
                /*
                ** 随手拍列表
                */
                designListUrl = void 0;

                if (_this2.userInfo) {
                  designListUrl = '/materials/postslists?loginid=' + _this2.userInfo.id + '&topics_id=' + _this2.tab.id + '&pages=1&rowsmax=10';
                } else {
                  designListUrl = '/materials/postslists?topics_id=' + _this2.tab.id + '&pages=1&rowsmax=10';
                }
                _context2.next = 6;
                return util.getData({
                  url: designListUrl,
                  method: "get"
                });

              case 6:
                _this2.designList = _context2.sent;


                _this2.designList.forEach(function (item, index) {

                  item.previewList = [];
                  item.images.forEach(function (img) {
                    item.previewList.push({
                      id: img.id,
                      img: img.updatas,
                      collected: img.collected || 0
                    });
                  });

                  item.sex = item.gender == 1 ? "boy" : "girl";

                  switch (item.previewList.length) {
                    case 1:
                      item.class = "one-img";
                      break;
                    case 2:
                      item.class = "two-img";
                      break;
                    case 3:
                      item.class = "three-img";
                      break;
                    case 4:
                      item.class = "four-img";
                      break;
                    case 5:
                      item.class = "five-img";
                      break;
                    case 6:
                      item.class = "fix-img";
                      break;
                    case 7:
                      item.class = "seven-img";
                      break;
                    case 8:
                      item.class = "eight-img";
                      break;
                    case 9:
                      item.class = "nine-img";
                      break;

                    default:
                      break;
                  }
                });
                _this2.$vux.loading.hide();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    imgCollect: function imgCollect(imgs, userId) {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.userInfo) {
                  _context3.next = 10;
                  break;
                }

                if (!(imgs.collected == 1)) {
                  _context3.next = 4;
                  break;
                }

                _this3.$vux.alert.show({
                  title: "提示",
                  content: "不能重复收藏"
                });
                return _context3.abrupt('return', false);

              case 4:
                _context3.next = 6;
                return util.request({
                  url: '/materials/collects',
                  method: "post",
                  param: {
                    loginid: _this3.userInfo.id,
                    users_mains_id: userId,
                    targets_id: imgs.id,
                    types: 1
                  }
                });

              case 6:
                data = _context3.sent;

                if (data.return_code == "success") {
                  _this3.$vux.toast.show({
                    text: "收藏成功"
                  });
                  imgs.collected = 1;
                } else {
                  _this3.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _context3.next = 11;
                break;

              case 10:
                _this3.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this3.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    showMenu: function showMenu(designItem) {
      this.menuBoxShow = !this.menuBoxShow;
      this.currentDesignItem = designItem;
    },
    toogleReportPopup: function toogleReportPopup() {
      this.menuBoxShow = false;
      this.showReportPopup = !this.showReportPopup;
    },
    selectReport: function selectReport(report) {
      this.confirmContent = report.title;
      this.reportCellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      report.righticonclass = "icon-xuanzhong";
    },
    reportCommit: function reportCommit() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.confirmContent) {
                  _context4.next = 9;
                  break;
                }

                _this4.$vux.loading.show({
                  text: "Loading"
                });
                _context4.next = 4;
                return util.request({
                  url: '/materials/reports',
                  method: "post",
                  param: {
                    loginid: _this4.userInfo.id,
                    users_mains_id: _this4.currentDesignItem.userid,
                    reasons: _this4.confirmContent,
                    types: 2,
                    targets_id: _this4.currentDesignItem.sources_id
                  }
                });

              case 4:
                data = _context4.sent;

                if (data.return_code == "success") {
                  _this4.$vux.toast.show({
                    text: data.return_data
                  });
                  _this4.showReportPopup = false;
                  _this4.confirmContent = "";
                } else {
                  _this4.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _this4.$vux.loading.hide();
                _context4.next = 10;
                break;

              case 9:
                _this4.$vux.alert.show({
                  title: "提示",
                  content: "请选择举报内容"
                });

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    show: function show(index, designItem) {
      this.previewList.index = index;
      this.previewList.list = designItem.previewList;
      this.previewList.userId = designItem.userid;
      this.currentPreviewDesignItem = designItem;
    },
    previewClose: function previewClose() {
      this.previewList.list = [];
    },
    toDetail: function toDetail(designItem, type) {
      this.$router.push({
        path: "/page/take_photo/DesignDetail",
        query: { id: designItem.sources_id, type: type }
      });
    },
    togglePopup: function togglePopup(type) {
      this.popup.type = type;
      this.popup.popupState = !this.popup.popupState;
    },
    rewardSelected: function rewardSelected(index) {
      this.confirmReward = this.rewards.list[index];
      this.rewards.seleted = index;
      this.toPay();
    },
    toPay: function toPay() {
      this.popup.type = "pay";
    },
    backSelectReward: function backSelectReward() {
      this.confirmReward = "";
      this.popup.type = "reward";
    },
    selectPay: function selectPay(cell) {
      this.selectPayMethod = cell.title;
      this.cellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      cell.righticonclass = "icon-xuanzhong";
    },
    payCommit: function payCommit() {
      var _this5 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var data, orderstring;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5.userInfo) {
                  _context5.next = 13;
                  break;
                }

                if (_this5.selectPayMethod) {
                  _context5.next = 5;
                  break;
                }

                _this5.$vux.alert.show({
                  title: "提示",
                  content: "请选择付款方式"
                });
                _context5.next = 11;
                break;

              case 5:
                if (!(_this5.selectPayMethod == "支付宝")) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 8;
                return util.getData({
                  url: '/materials/praisepays',
                  method: "post",
                  param: {
                    loginid: _this5.userInfo.id,
                    users_mains_id: _this5.currentPreviewDesignItem.userid,
                    moneys: _this5.confirmReward
                  }
                });

              case 8:
                data = _context5.sent;
                orderstring = data;

                window.Alipay.pay(orderstring, function (res) {
                  _this5.$vux.toast.show({
                    text: "打赏成功"
                  });
                }, function (e) {
                  console.error(e);
                });

              case 11:
                _context5.next = 14;
                break;

              case 13:
                _this5.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this5.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 14:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    follow: function follow(users) {
      var _this6 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var types, data;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                types = users.followed ? 0 : 1;

                if (!_this6.userInfo) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this6.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context6.sent;

                if (data.return_code == "success") {
                  users.followed = types;
                  _this6.designList.forEach(function (item, index) {
                    if (users.userid == item.userid) {
                      item.followed = users.followed;
                    }
                  });
                }
                _this6.$vux.toast.show({
                  text: data.return_data
                });
                _context6.next = 10;
                break;

              case 9:
                _this6.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this6.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    liking: function liking(users) {
      var _this7 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var data;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!_this7.userInfo) {
                  _context7.next = 10;
                  break;
                }

                if (!(users.praised == 1)) {
                  _context7.next = 4;
                  break;
                }

                _this7.$vux.alert.show({
                  title: "提示",
                  content: "不能重复点赞"
                });
                return _context7.abrupt('return', false);

              case 4:
                _context7.next = 6;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this7.userInfo.id,
                    types: 1,
                    scores: 5,
                    targets_id: users.sources_id
                  }
                });

              case 6:
                data = _context7.sent;

                if (data.return_code == "success") {
                  users.praised = 1;
                  users.praisesnums++;
                  _this7.$vux.toast.show({
                    text: data.return_data
                  });
                } else {
                  _this7.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _context7.next = 11;
                break;

              case 10:
                _this7.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this7.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    downs: function downs(imgs) {
      var alink = document.createElement("a");
      alink.href = imgs.img;
      alink.download = "pic";
      alink.click();
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Swiper: vux_src_components_swiper_swiper,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XImg: vux_src_components_x_img,
    Popup: node_modules_vux_src_components_popup,
    XInput: vux_src_components_x_input,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell,
    Badge: vux_src_components_badge
  },
  watch: {}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/TakePhoto.vue

















/* harmony default export */ var page_TakePhoto = ({
  data: function data() {
    return {

      pageShow: false,

      messageBadge: "80",

      popup: {
        popupState: false,
        type: "reward"
      },

      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },

      cellArr: [{
        title: "支付宝",
        lefticonclass: "icon-zhifubao",
        righticonclass: "icon-weixuanzhong"
      }],
      selectPayMethod: "",

      confirmReward: "",

      menuBoxShow: false,

      showReportPopup: false,

      reportCellArr: [{
        title: "淫秽色情",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "违法信息",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "营销广告",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "恶意攻击谩骂",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }],
      previewList: {
        list: [],
        index: 0,
        userId: ""
      },
      tab: {
        tabList: [{ id: "0", tits: "全部" }],
        id: 0
      },

      baseList: [],

      designList: [],

      currentDesignItem: null,

      currentPreviewDesignItem: null,

      userInfo: null
    };
  },

  created: function created() {},
  mounted: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this = this;

      var userInfo, tabList, designListUrl;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = localStorage.getItem("userInfo");

              if (userInfo) {
                this.userInfo = JSON.parse(userInfo);
              }
              this.$vux.loading.show({
                text: "Loading"
              });
              /*
              ** 话题列表
              */
              _context.next = 5;
              return util.getData({
                url: "/materials/topicslists",
                method: "post"
              });

            case 5:
              tabList = _context.sent;

              this.tab.tabList = this.tab.tabList.concat(tabList);
              /*
              ** 轮播图
              */
              _context.next = 9;
              return util.getData({
                url: "/materials/bannerslists",
                method: "post"
              });

            case 9:
              this.bannerList = _context.sent;

              this.bannerList.forEach(function (item, index) {
                item = {
                  img: item.thumbs
                };
                _this.baseList.push(item);
              });
              /*
              ** 随手拍列表
              */
              designListUrl = void 0;

              if (this.userInfo) {
                designListUrl = '/materials/postslists?loginid=' + this.userInfo.id + '&topics_id=' + this.tab.id + '&pages=1&rowsmax=10';
              } else {
                designListUrl = '/materials/postslists?topics_id=' + this.tab.id + '&pages=1&rowsmax=10';
              }
              _context.next = 15;
              return util.getData({
                url: designListUrl,
                method: "get"
              });

            case 15:
              this.designList = _context.sent;


              this.designList.forEach(function (item, index) {

                item.previewList = [];
                item.images.forEach(function (img) {
                  item.previewList.push({
                    id: img.id,
                    img: img.updatas,
                    collected: img.collected || 0
                  });
                });

                item.sex = item.gender == 1 ? "boy" : "girl";

                switch (item.previewList.length) {
                  case 1:
                    item.class = "one-img";
                    break;
                  case 2:
                    item.class = "two-img";
                    break;
                  case 3:
                    item.class = "three-img";
                    break;
                  case 4:
                    item.class = "four-img";
                    break;
                  case 5:
                    item.class = "five-img";
                    break;
                  case 6:
                    item.class = "fix-img";
                    break;
                  case 7:
                    item.class = "seven-img";
                    break;
                  case 8:
                    item.class = "eight-img";
                    break;
                  case 9:
                    item.class = "nine-img";
                    break;

                  default:
                    break;
                }
              });
              this.$vux.loading.hide();
              this.pageShow = true;

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    seleted: function seleted(id) {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var designListUrl;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.tab.id = id;
                _this2.$vux.loading.show({
                  text: "Loading"
                });
                /*
                ** 随手拍列表
                */
                designListUrl = void 0;

                if (_this2.userInfo) {
                  designListUrl = '/materials/postslists?loginid=' + _this2.userInfo.id + '&topics_id=' + _this2.tab.id + '&pages=1&rowsmax=10';
                } else {
                  designListUrl = '/materials/postslists?topics_id=' + _this2.tab.id + '&pages=1&rowsmax=10';
                }
                _context2.next = 6;
                return util.getData({
                  url: designListUrl,
                  method: "get"
                });

              case 6:
                _this2.designList = _context2.sent;


                _this2.designList.forEach(function (item, index) {

                  item.previewList = [];
                  item.images.forEach(function (img) {
                    item.previewList.push({
                      id: img.id,
                      img: img.updatas,
                      collected: img.collected || 0
                    });
                  });

                  item.sex = item.gender == 1 ? "boy" : "girl";

                  switch (item.previewList.length) {
                    case 1:
                      item.class = "one-img";
                      break;
                    case 2:
                      item.class = "two-img";
                      break;
                    case 3:
                      item.class = "three-img";
                      break;
                    case 4:
                      item.class = "four-img";
                      break;
                    case 5:
                      item.class = "five-img";
                      break;
                    case 6:
                      item.class = "fix-img";
                      break;
                    case 7:
                      item.class = "seven-img";
                      break;
                    case 8:
                      item.class = "eight-img";
                      break;
                    case 9:
                      item.class = "nine-img";
                      break;

                    default:
                      break;
                  }
                });
                _this2.$vux.loading.hide();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    imgCollect: function imgCollect(imgs, userId) {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.userInfo) {
                  _context3.next = 10;
                  break;
                }

                if (!(imgs.collected == 1)) {
                  _context3.next = 4;
                  break;
                }

                _this3.$vux.alert.show({
                  title: "提示",
                  content: "不能重复收藏"
                });
                return _context3.abrupt('return', false);

              case 4:
                _context3.next = 6;
                return util.request({
                  url: '/materials/collects',
                  method: "post",
                  param: {
                    loginid: _this3.userInfo.id,
                    users_mains_id: userId,
                    targets_id: imgs.id,
                    types: 1
                  }
                });

              case 6:
                data = _context3.sent;

                if (data.return_code == "success") {
                  _this3.$vux.toast.show({
                    text: "收藏成功"
                  });
                  imgs.collected = 1;
                } else {
                  _this3.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _context3.next = 11;
                break;

              case 10:
                _this3.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this3.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    showMenu: function showMenu(designItem) {
      this.menuBoxShow = !this.menuBoxShow;
      this.currentDesignItem = designItem;
    },
    toogleReportPopup: function toogleReportPopup() {
      this.menuBoxShow = false;
      this.showReportPopup = !this.showReportPopup;
    },
    selectReport: function selectReport(report) {
      this.confirmContent = report.title;
      this.reportCellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      report.righticonclass = "icon-xuanzhong";
    },
    reportCommit: function reportCommit() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.confirmContent) {
                  _context4.next = 9;
                  break;
                }

                _this4.$vux.loading.show({
                  text: "Loading"
                });
                _context4.next = 4;
                return util.request({
                  url: '/materials/reports',
                  method: "post",
                  param: {
                    loginid: _this4.userInfo.id,
                    users_mains_id: _this4.currentDesignItem.userid,
                    reasons: _this4.confirmContent,
                    types: 2,
                    targets_id: _this4.currentDesignItem.sources_id
                  }
                });

              case 4:
                data = _context4.sent;

                if (data.return_code == "success") {
                  _this4.$vux.toast.show({
                    text: data.return_data
                  });
                  _this4.showReportPopup = false;
                  _this4.confirmContent = "";
                } else {
                  _this4.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _this4.$vux.loading.hide();
                _context4.next = 10;
                break;

              case 9:
                _this4.$vux.alert.show({
                  title: "提示",
                  content: "请选择举报内容"
                });

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    show: function show(index, designItem) {
      this.previewList.index = index;
      this.previewList.list = designItem.previewList;
      this.previewList.userId = designItem.userid;
      this.currentPreviewDesignItem = designItem;
    },
    previewClose: function previewClose() {
      this.previewList.list = [];
    },
    toDetail: function toDetail(designItem, type) {
      this.$router.push({
        path: "/page/take_photo/DesignDetail",
        query: { id: designItem.sources_id, type: type }
      });
    },
    togglePopup: function togglePopup(type) {
      this.popup.type = type;
      this.popup.popupState = !this.popup.popupState;
    },
    rewardSelected: function rewardSelected(index) {
      this.confirmReward = this.rewards.list[index];
      this.rewards.seleted = index;
      this.toPay();
    },
    toPay: function toPay() {
      this.popup.type = "pay";
    },
    backSelectReward: function backSelectReward() {
      this.confirmReward = "";
      this.popup.type = "reward";
    },
    selectPay: function selectPay(cell) {
      this.selectPayMethod = cell.title;
      this.cellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      cell.righticonclass = "icon-xuanzhong";
    },
    payCommit: function payCommit() {
      var _this5 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var data, orderstring;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5.userInfo) {
                  _context5.next = 13;
                  break;
                }

                if (_this5.selectPayMethod) {
                  _context5.next = 5;
                  break;
                }

                _this5.$vux.alert.show({
                  title: "提示",
                  content: "请选择付款方式"
                });
                _context5.next = 11;
                break;

              case 5:
                if (!(_this5.selectPayMethod == "支付宝")) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 8;
                return util.getData({
                  url: '/materials/praisepays',
                  method: "post",
                  param: {
                    loginid: _this5.userInfo.id,
                    users_mains_id: _this5.currentPreviewDesignItem.userid,
                    moneys: _this5.confirmReward
                  }
                });

              case 8:
                data = _context5.sent;
                orderstring = data;

                window.Alipay.pay(orderstring, function (res) {
                  _this5.$vux.toast.show({
                    text: "打赏成功"
                  });
                }, function (e) {
                  console.error(e);
                });

              case 11:
                _context5.next = 14;
                break;

              case 13:
                _this5.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this5.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 14:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    follow: function follow(users) {
      var _this6 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var types, data;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                types = users.followed ? 0 : 1;

                if (!_this6.userInfo) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this6.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context6.sent;

                if (data.return_code == "success") {
                  users.followed = types;
                  _this6.designList.forEach(function (item, index) {
                    if (users.userid == item.userid) {
                      item.followed = users.followed;
                    }
                  });
                }
                _this6.$vux.toast.show({
                  text: data.return_data
                });
                _context6.next = 10;
                break;

              case 9:
                _this6.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this6.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    liking: function liking(users) {
      var _this7 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var data;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!_this7.userInfo) {
                  _context7.next = 10;
                  break;
                }

                if (!(users.praised == 1)) {
                  _context7.next = 4;
                  break;
                }

                _this7.$vux.alert.show({
                  title: "提示",
                  content: "不能重复点赞"
                });
                return _context7.abrupt('return', false);

              case 4:
                _context7.next = 6;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this7.userInfo.id,
                    types: 1,
                    scores: 5,
                    targets_id: users.sources_id
                  }
                });

              case 6:
                data = _context7.sent;

                if (data.return_code == "success") {
                  users.praised = 1;
                  users.praisesnums++;
                  _this7.$vux.toast.show({
                    text: data.return_data
                  });
                } else {
                  _this7.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _context7.next = 11;
                break;

              case 10:
                _this7.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this7.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    downs: function downs(imgs) {
      var alink = document.createElement("a");
      alink.href = imgs.img;
      alink.download = "pic";
      alink.click();
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Swiper: vux_src_components_swiper_swiper,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XImg: vux_src_components_x_img,
    Popup: node_modules_vux_src_components_popup,
    XInput: vux_src_components_x_input,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell,
    Badge: vux_src_components_badge
  },
  watch: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-12771577","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/TakePhoto.vue
var TakePhoto_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pageShow)?_c('div',{staticClass:"TakePhoto"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{showBack: false}}},[_vm._v("随手拍\n    ")]),_vm._v(" "),_c('div',{staticClass:"tab-box"},[_c('div',{staticClass:"tab-title"},[_vm._v("热门话题")]),_vm._v(" "),_c('div',{staticClass:"tab-list"},_vm._l((_vm.tab.tabList),function(tabItem,index){return _c('span',{key:index,class:_vm.tab.id == tabItem.id?'active':'',on:{"click":function($event){return _vm.seleted(tabItem.id)}}},[_vm._v(_vm._s(tabItem.tits))])}),0)]),_vm._v(" "),_c('div',{staticClass:"content-box"},[_c('swiper',{staticClass:"swiper",attrs:{"loop":"","list":_vm.baseList}}),_vm._v(" "),_vm._l((_vm.designList),function(designItem,designItemIndex){return _c('div',{key:designItemIndex,staticClass:"design-list",on:{"click":function($event){return _vm.toDetail(designItem,'detail')}}},[_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":1.7}},[_c('img',{staticClass:"avatar",attrs:{"src":designItem.users_logos||'static/img/default-avatar.png',"alt":""}})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7.3}},[_c('div',[_c('div',{staticClass:"username"},[_vm._v("\n              "+_vm._s(designItem.nicknames)+"\n              "),(designItem.sex == 'girl')?_c('i',{staticClass:"iconfont icon-nvsheng"}):_c('i',{staticClass:"iconfont icon-nansheng"})]),_vm._v(" "),_c('div',{staticClass:"direc"},[_vm._v(_vm._s(designItem.dates))])])]),_vm._v(" "),(designItem.userid != (_vm.userInfo?_vm.userInfo.id:''))?_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('x-button',{directives:[{name:"show",rawName:"v-show",value:(designItem.followed),expression:"designItem.followed"}],staticClass:"x-button",attrs:{"mini":"","gradients":['rgb(525,97,66)', 'rgb(525,97,66)']},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(designItem)}}},[_vm._v("已关注")]),_vm._v(" "),_c('x-button',{directives:[{name:"show",rawName:"v-show",value:(!designItem.followed),expression:"!designItem.followed"}],staticClass:"x-button no-follow",attrs:{"mini":""},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(designItem)}}},[_vm._v("关注")])],1):_vm._e()],1),_vm._v(" "),_c('flexbox',{staticClass:"design-item-box"},[_c('flexbox-item',{attrs:{"span":1.7}}),_vm._v(" "),_c('flexbox-item',{attrs:{"span":10.3}},[_vm._v(_vm._s(designItem.descriptions))])],1),_vm._v(" "),_c('flexbox',{staticClass:"design-item-box"},[_c('flexbox-item',{attrs:{"span":1.7}}),_vm._v(" "),_c('flexbox-item',{staticClass:"design-item",class:designItem.class,attrs:{"span":10.3}},_vm._l((designItem.images),function(designImg,designImgIndex){return _c('img',{key:designImgIndex,staticClass:"design-item-img",attrs:{"src":designImg.thumbs},on:{"click":function($event){$event.stopPropagation();return _vm.show(designImgIndex,designItem)}}})}),0)],1),_vm._v(" "),_c('flexbox',[_c('flexbox-item',{attrs:{"span":1.7}}),_vm._v(" "),_c('flexbox-item',{attrs:{"span":10.3}},[_c('div',{staticClass:"design-item-menus"},[_c('span',{staticClass:"design-item-praise",class:designItem.praised == 1 ? 'liked' : '',on:{"click":function($event){$event.stopPropagation();return _vm.liking(designItem)}}},[_c('i',{staticClass:"iconfont icon-dianzan"}),_vm._v("\n              "+_vm._s(designItem.praisesnums)+"\n            ")]),_vm._v(" "),_c('span',{staticClass:"design-item-comment"},[_c('i',{staticClass:"iconfont icon-pinglun",on:{"click":function($event){$event.stopPropagation();return _vm.toDetail(designItem,'comment')}}}),_vm._v("\n              "+_vm._s(designItem.commentsnums)+"\n            ")]),_vm._v(" "),_c('span',{staticClass:"design-item-menu"},[_c('i',{staticClass:"iconfont icon-gengduo",on:{"click":function($event){$event.stopPropagation();return _vm.showMenu(designItem)}}})])])])],1)],1)})],2),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.previewList.list.length)?_c('div',{staticClass:"preview"},[_c('div',{staticClass:"preview-swiper-box"},[_c('swiper',{staticClass:"previewSwiper",attrs:{"dots-class":"test","dots-position":"center","loop":"","height":"70vh","list":_vm.previewList.list},model:{value:(_vm.previewList.index),callback:function ($$v) {_vm.$set(_vm.previewList, "index", $$v)},expression:"previewList.index"}}),_vm._v(" "),_c('span',{staticClass:"preview-icon shoucang",on:{"click":function($event){return _vm.imgCollect(_vm.previewList.list[_vm.previewList.index],_vm.previewList.userId)}}},[_c('i',{staticClass:"iconfont icon-shoucang",class:_vm.previewList.list[_vm.previewList.index].collected == 1 ? 'collected' : ''})]),_vm._v(" "),_c('span',{staticClass:"preview-icon xiazai"},[_c('i',{staticClass:"iconfont icon-xiazai",on:{"click":function($event){return _vm.downs(_vm.previewList.list[_vm.previewList.index])}}})]),_vm._v(" "),_c('span',{staticClass:"preview-icon shang",on:{"click":function($event){return _vm.togglePopup('reward')}}},[_c('i',{staticClass:"iconfont icon-shang"})]),_vm._v(" "),_c('span',{staticClass:"preview-icon fenxiang"},[_c('i',{staticClass:"iconfont icon-fenxiang"})]),_vm._v(" "),_c('span',{staticClass:"preview-icon guanbi",on:{"click":_vm.previewClose}},[_c('i',{staticClass:"iconfont icon-guanbi"})])],1)]):_vm._e()]),_vm._v(" "),_c('div',[_c('popup',{staticStyle:{"background-color":"#fff","border-radius":"calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0"},attrs:{"height":"calc(270 *2 / 7.5 * 1vw)","show-mask":false},model:{value:(_vm.popup.popupState),callback:function ($$v) {_vm.$set(_vm.popup, "popupState", $$v)},expression:"popup.popupState"}},[_c('div',{staticClass:"reward-box"},[_c('div',{staticClass:"reward-title-box"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.popup.type=='pay'),expression:"popup.type=='pay'"}],staticClass:"back-reward",on:{"click":_vm.backSelectReward}},[_vm._v("返回")]),_vm._v(" "),(_vm.popup.type=='reward')?_c('span',[_vm._v("选择打赏金额")]):_c('span',[_vm._v("选择支付方式")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-danchuangguanbi",on:{"click":function($event){return _vm.togglePopup('reward')}}})]),_vm._v(" "),(_vm.popup.type=='reward')?_c('div',{staticClass:"reward-content-box"},[_c('flexbox',{staticClass:"reward-content",attrs:{"wrap":"wrap"}},_vm._l((_vm.rewards.list),function(reward,index){return _c('flexbox-item',{key:index,attrs:{"span":4}},[_c('div',{staticClass:"reward-item",class:{selected: index==_vm.rewards.seleted}},[_c('span',{on:{"click":function($event){return _vm.rewardSelected(index)}}},[_vm._v(_vm._s(reward)+"元")])])])}),1),_vm._v(" "),_c('x-input',{staticClass:"reward-input",attrs:{"is-type":"number","placeholder":"输入打赏金额"},model:{value:(_vm.confirmReward),callback:function ($$v) {_vm.confirmReward=$$v},expression:"confirmReward"}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.confirmReward),expression:"confirmReward"}],staticStyle:{"font-size":"calc(12 *2 / 7.5 * 1vw)","color":"rgb(252,97,66)"},attrs:{"slot":"right"},on:{"click":_vm.toPay},slot:"right"},[_vm._v("确认")])])],1):_c('div',{staticClass:"select-pay"},[_c('div',{staticStyle:{"text-align":"center","color":"rgb(252,97,66)"}},[_vm._v(_vm._s(_vm.confirmReward)+"元")]),_vm._v(" "),_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('div',{key:index,on:{"click":function($event){return _vm.selectPay(cell)}}},[_c('cell',{attrs:{"title":cell.title}},[_c('i',{staticClass:"iconfont",class:cell.lefticonclass,attrs:{"slot":"icon"},slot:"icon"}),_vm._v(" "),_c('i',{staticClass:"iconfont",class:cell.righticonclass,attrs:{"slot":"default"},slot:"default"})])],1)}),0)]),_vm._v(" "),_c('x-button',{staticClass:"pay-commit",nativeOn:{"click":function($event){return _vm.payCommit($event)}}},[_vm._v("立即支付")])],1)])])],1),_vm._v(" "),_c('popup',{staticClass:"menu-popup",model:{value:(_vm.menuBoxShow),callback:function ($$v) {_vm.menuBoxShow=$$v},expression:"menuBoxShow"}},[_c('div',{on:{"click":function($event){$event.stopPropagation();return _vm.toogleReportPopup($event)}}},[_vm._v("举报")]),_vm._v(" "),_c('div',{on:{"click":function($event){$event.stopPropagation();return _vm.showMenu($event)}}},[_vm._v("取消")])]),_vm._v(" "),_c('popup',{staticStyle:{"background-color":"#fff","border-radius":"calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0"},attrs:{"height":"calc(330 *2 / 7.5 * 1vw)"},model:{value:(_vm.showReportPopup),callback:function ($$v) {_vm.showReportPopup=$$v},expression:"showReportPopup"}},[_c('div',{staticClass:"reward-box"},[_c('div',{staticClass:"reward-title-box"},[_c('span',[_vm._v("举报")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-danchuangguanbi",on:{"click":function($event){return _vm.toogleReportPopup()}}})]),_vm._v(" "),_c('card',{staticClass:"card report-box"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.reportCellArr),function(cell,index){return _c('div',{key:index,staticClass:"report-item",on:{"click":function($event){return _vm.selectReport(cell)}}},[_c('cell',{attrs:{"title":cell.title}},[_c('i',{staticClass:"iconfont",class:cell.lefticonclass,attrs:{"slot":"icon"},slot:"icon"}),_vm._v(" "),_c('i',{staticClass:"iconfont",class:cell.righticonclass,attrs:{"slot":"default"},slot:"default"})])],1)}),0)])],1),_vm._v(" "),_c('div',[_c('x-button',{staticClass:"report-commit",nativeOn:{"click":function($event){return _vm.reportCommit($event)}}},[_vm._v("确定")])],1)])],1):_vm._e()}
var TakePhoto_staticRenderFns = []
var TakePhoto_esExports = { render: TakePhoto_render, staticRenderFns: TakePhoto_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_page_TakePhoto = (TakePhoto_esExports);
// CONCATENATED MODULE: ./src/page/TakePhoto.vue
function TakePhoto_injectStyle (ssrContext) {
  __webpack_require__("8L9H")
}
var TakePhoto_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var TakePhoto___vue_template_functional__ = false
/* styles */
var TakePhoto___vue_styles__ = TakePhoto_injectStyle
/* scopeId */
var TakePhoto___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TakePhoto___vue_module_identifier__ = null
var TakePhoto_Component = TakePhoto_normalizeComponent(
  page_TakePhoto,
  selectortype_template_index_0_src_page_TakePhoto,
  TakePhoto___vue_template_functional__,
  TakePhoto___vue_styles__,
  TakePhoto___vue_scopeId__,
  TakePhoto___vue_module_identifier__
)

/* harmony default export */ var src_page_TakePhoto = (TakePhoto_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/take_photo/DesignDetail.vue

















/* harmony default export */ var DesignDetail = ({
  data: function data() {
    return {

      pageShow: false,

      disnId: "",

      designItem: null,

      commentList: null,
      pageNum: 1,

      avatarList: null,

      commentCount: 0,

      designImgList: [],

      userInfo: null,

      messageBadge: "80",

      comment: "",

      cellArr: [{
        title: "支付宝",
        lefticonclass: "icon-zhifubao",
        righticonclass: "icon-weixuanzhong"
      }],

      popup: {
        popupState: false,
        type: "reward"
      },
      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },
      selectPayMethod: "",

      confirmReward: "",

      menuBoxShow: false,

      showReportPopup: false,

      reportCellArr: [{
        title: "淫秽色情",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "违法信息",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "营销广告",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "恶意攻击谩骂",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }]
    };
  },

  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this = this;

      var disnId, userInfo, detailsUrl, commentListUrl;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$vux.loading.show({
                text: "Loading"
              });
              /**
              * 获取设计师详情
              */
              disnId = this.$route.query.id;

              this.disnId = disnId;
              userInfo = localStorage.getItem("userInfo");
              detailsUrl = void 0;
              commentListUrl = void 0;

              if (userInfo) {
                this.userInfo = JSON.parse(userInfo);
                detailsUrl = '/materials/details?sources_id=' + disnId + '&loginid=' + this.userInfo.id;
                commentListUrl = '/materials/commentslists?loginid=' + this.userInfo.id + '&sources_id=' + disnId + '&pages=' + this.pageNum + '&rowsmaxs=10';
              } else {
                detailsUrl = '/materials/details?sources_id=' + disnId;
                commentListUrl = '/materials/commentslists?sources_id=' + disnId + '&pages=' + this.pageNum + '&rowsmaxs=10';
              }
              _context.next = 9;
              return util.getData({
                url: detailsUrl,
                method: "get"
              });

            case 9:
              this.designItem = _context.sent;

              this.designItem.images.forEach(function (item, index) {
                _this.designImgList.push({
                  img: item.thumbs
                });
              });

              _context.next = 13;
              return util.getData({
                url: commentListUrl,
                method: "get"
              });

            case 13:
              this.commentList = _context.sent;

              this.pageNum++;

              _context.next = 17;
              return util.getData({
                url: '/materials/praiserslists?sources_id=' + disnId,
                method: "get"
              });

            case 17:
              this.avatarList = _context.sent;
              _context.next = 20;
              return util.getData({
                url: '/materials/commenttotals?sources_id=' + disnId,
                method: "get"
              });

            case 20:
              this.commentCount = _context.sent;


              this.designItem.sex = this.designItem.gender == 1 ? "boy" : "girl";
              this.$vux.loading.hide();
              this.pageShow = true;

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {},
  methods: {
    showMenu: function showMenu(designItem) {
      this.menuBoxShow = !this.menuBoxShow;
      this.currentDesignItem = designItem;
    },
    toogleReportPopup: function toogleReportPopup() {
      this.menuBoxShow = false;
      this.showReportPopup = !this.showReportPopup;
    },
    selectReport: function selectReport(report) {
      this.confirmContent = report.title;
      this.reportCellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      report.righticonclass = "icon-xuanzhong";
    },
    reportCommit: function reportCommit() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.confirmContent) {
                  _context2.next = 9;
                  break;
                }

                _this2.$vux.loading.show({
                  text: "Loading"
                });
                _context2.next = 4;
                return util.request({
                  url: '/materials/reports',
                  method: "post",
                  param: {
                    loginid: _this2.userInfo.id,
                    users_mains_id: _this2.currentDesignItem.userid,
                    reasons: _this2.confirmContent,
                    types: 2,
                    targets_id: _this2.disnId
                  }
                });

              case 4:
                data = _context2.sent;

                if (data.return_code == "success") {
                  _this2.$vux.toast.show({
                    text: data.return_data
                  });
                  _this2.showReportPopup = false;
                  _this2.confirmContent = "";
                } else {
                  _this2.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _this2.$vux.loading.hide();
                _context2.next = 10;
                break;

              case 9:
                _this2.$vux.alert.show({
                  title: "提示",
                  content: "请选择举报内容"
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    show: function show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    },
    follow: function follow(users) {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var types, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                types = users.followed ? 0 : 1;

                if (!_this3.userInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this3.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context3.sent;

                if (data.return_code == "success") {
                  users.followed = types;
                }
                _this3.$vux.toast.show({
                  text: data.return_data
                });
                _context3.next = 10;
                break;

              case 9:
                _this3.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this3.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    liking: function liking(users) {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.userInfo) {
                  _context4.next = 15;
                  break;
                }

                if (!(users.score == 1)) {
                  _context4.next = 5;
                  break;
                }

                _this4.$vux.alert.show({
                  title: "提示",
                  content: "已经给过差评了"
                });
                _context4.next = 13;
                break;

              case 5:
                if (!(users.score == 5)) {
                  _context4.next = 9;
                  break;
                }

                _this4.$vux.alert.show({
                  title: "提示",
                  content: "不能重复点赞"
                });
                _context4.next = 13;
                break;

              case 9:
                _context4.next = 11;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this4.userInfo.id,
                    types: 1,
                    scores: 5,
                    targets_id: _this4.disnId
                  }
                });

              case 11:
                data = _context4.sent;

                if (data.return_code == "success") {
                  _this4.$vux.toast.show({
                    text: data.return_data
                  });
                  users.score = 5;
                  users.praisesnums++;
                } else {
                  _this4.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 13:
                _context4.next = 16;
                break;

              case 15:
                _this4.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this4.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    bading: function bading(users) {
      var _this5 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5.userInfo) {
                  _context5.next = 15;
                  break;
                }

                if (!(users.score == 5)) {
                  _context5.next = 5;
                  break;
                }

                _this5.$vux.alert.show({
                  title: "提示",
                  content: "已经给过好评了"
                });
                _context5.next = 13;
                break;

              case 5:
                if (!(users.score == 1)) {
                  _context5.next = 9;
                  break;
                }

                _this5.$vux.alert.show({
                  title: "提示",
                  content: "不能重复差评"
                });
                _context5.next = 13;
                break;

              case 9:
                _context5.next = 11;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this5.userInfo.id,
                    types: 1,
                    scores: 1,
                    targets_id: _this5.disnId
                  }
                });

              case 11:
                data = _context5.sent;

                if (data.return_code == "success") {
                  _this5.$vux.toast.show({
                    text: data.return_data
                  });
                  users.score = 1;
                  users.badsnums++;
                } else {
                  _this5.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 13:
                _context5.next = 16;
                break;

              case 15:
                _this5.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this5.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 16:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    commentsCommit: function commentsCommit() {
      var _this6 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var data;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this6.userInfo) {
                  _context6.next = 3;
                  break;
                }

                _this6.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this6.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });
                return _context6.abrupt('return', false);

              case 3:
                if (_this6.comment) {
                  _context6.next = 6;
                  break;
                }

                _this6.$vux.alert.show({
                  title: "提示",
                  content: "评论内容不能为空"
                });
                return _context6.abrupt('return', false);

              case 6:
                _context6.next = 8;
                return util.request({
                  url: '/materials/comments',
                  method: "post",
                  param: {
                    users_mains_id: _this6.designItem.userid,
                    loginid: _this6.userInfo.id,
                    sources_id: _this6.disnId,
                    comments: _this6.comment
                  }
                });

              case 8:
                data = _context6.sent;

                if (!(data.return_code == "success")) {
                  _context6.next = 16;
                  break;
                }

                _this6.$vux.toast.show({
                  text: data.return_data
                });

                _context6.next = 13;
                return util.getData({
                  url: '/materials/commentslists?sources_id=' + _this6.disnId + '&loginid=' + _this6.userInfo.id,
                  method: "get"
                });

              case 13:
                _this6.commentList = _context6.sent;
                _context6.next = 17;
                break;

              case 16:
                _this6.$vux.alert.show({
                  title: "提示",
                  content: data.return_data
                });

              case 17:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    commentLiking: function commentLiking(comment) {
      var _this7 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var data;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!_this7.userInfo) {
                  _context7.next = 11;
                  break;
                }

                if (!(comment.praised == 1)) {
                  _context7.next = 5;
                  break;
                }

                _this7.$vux.alert.show({
                  title: "提示",
                  content: "不能重复点赞"
                });
                _context7.next = 9;
                break;

              case 5:
                _context7.next = 7;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: comment.userid,
                    loginid: _this7.userInfo.id,
                    types: 2,
                    scores: 5,
                    targets_id: comment.id
                  }
                });

              case 7:
                data = _context7.sent;

                if (data.return_code == "success") {
                  _this7.$vux.toast.show({
                    text: data.return_data
                  });
                  comment.praised = 1;
                  comment.praisesnums++;
                } else {
                  _this7.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 9:
                _context7.next = 12;
                break;

              case 11:
                _this7.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this7.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    togglePopup: function togglePopup(type) {
      this.popup.type = type;
      this.popup.popupState = !this.popup.popupState;
    },
    rewardSelected: function rewardSelected(index) {
      this.confirmReward = this.rewards.list[index];
      this.rewards.seleted = index;
      this.toPay();
    },
    toPay: function toPay() {
      this.popup.type = "pay";
    },
    backSelectReward: function backSelectReward() {
      this.confirmReward = "";
      this.popup.type = "reward";
    },
    selectPay: function selectPay(cell) {
      this.selectPayMethod = cell.title;
      this.cellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      cell.righticonclass = "icon-xuanzhong";
    },
    payCommit: function payCommit() {
      var _this8 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
        var data, orderstring;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!_this8.userInfo) {
                  _context8.next = 13;
                  break;
                }

                if (_this8.selectPayMethod) {
                  _context8.next = 5;
                  break;
                }

                _this8.$vux.alert.show({
                  title: "提示",
                  content: "请选择付款方式"
                });
                _context8.next = 11;
                break;

              case 5:
                if (!(_this8.selectPayMethod == "支付宝")) {
                  _context8.next = 11;
                  break;
                }

                _context8.next = 8;
                return util.getData({
                  url: '/materials/praisepays',
                  method: "post",
                  param: {
                    loginid: _this8.userInfo.id,
                    users_mains_id: _this8.designItem.userid,
                    moneys: _this8.confirmReward
                  }
                });

              case 8:
                data = _context8.sent;
                orderstring = data;

                window.Alipay.pay(orderstring, function (res) {
                  _this8.$vux.toast.show({
                    text: "打赏成功"
                  });
                }, function (e) {
                  console.error(e);
                });

              case 11:
                _context8.next = 14;
                break;

              case 13:
                _this8.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this8.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 14:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },
    onInfinite: function onInfinite(done) {
      var _this9 = this;

      setTimeout(asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
        var detailsUrl, commentListUrl, commentList;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                detailsUrl = void 0, commentListUrl = void 0;

                if (_this9.userInfo) {
                  detailsUrl = '/materials/details?sources_id=' + _this9.disnId + '&loginid=' + _this9.userInfo.id;
                  commentListUrl = '/materials/commentslists?loginid=' + _this9.userInfo.id + '&sources_id=' + _this9.disnId + '&pages=' + _this9.pageNum + '&rowsmaxs=10';
                } else {
                  detailsUrl = '/materials/details?sources_id=' + _this9.disnId;
                  commentListUrl = '/materials/commentslists?sources_id=' + _this9.disnId + '&pages=' + _this9.pageNum + '&rowsmaxs=10';
                }
                _context9.next = 4;
                return util.getData({
                  url: commentListUrl,
                  method: "get"
                });

              case 4:
                commentList = _context9.sent;

                if (!(commentList == '')) {
                  _context9.next = 8;
                  break;
                }

                _this9.$refs.scroller.finishInfinite(2);
                return _context9.abrupt('return', false);

              case 8:
                _this9.commentList = _this9.commentList.concat(commentList);
                _this9.pageNum++, done();

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      })), 1000);
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Swiper: vux_src_components_swiper_swiper,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XImg: vux_src_components_x_img,
    Badge: vux_src_components_badge,
    Popup: node_modules_vux_src_components_popup,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell,
    XInput: vux_src_components_x_input
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/take_photo/DesignDetail.vue

















/* harmony default export */ var take_photo_DesignDetail = ({
  data: function data() {
    return {

      pageShow: false,

      disnId: "",

      designItem: null,

      commentList: null,
      pageNum: 1,

      avatarList: null,

      commentCount: 0,

      designImgList: [],

      userInfo: null,

      messageBadge: "80",

      comment: "",

      cellArr: [{
        title: "支付宝",
        lefticonclass: "icon-zhifubao",
        righticonclass: "icon-weixuanzhong"
      }],

      popup: {
        popupState: false,
        type: "reward"
      },
      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },
      selectPayMethod: "",

      confirmReward: "",

      menuBoxShow: false,

      showReportPopup: false,

      reportCellArr: [{
        title: "淫秽色情",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "违法信息",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "营销广告",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }, {
        title: "恶意攻击谩骂",
        lefticonclass: "",
        righticonclass: "icon-weixuanzhong"
      }]
    };
  },

  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _this = this;

      var disnId, userInfo, detailsUrl, commentListUrl;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$vux.loading.show({
                text: "Loading"
              });
              /**
              * 获取设计师详情
              */
              disnId = this.$route.query.id;

              this.disnId = disnId;
              userInfo = localStorage.getItem("userInfo");
              detailsUrl = void 0;
              commentListUrl = void 0;

              if (userInfo) {
                this.userInfo = JSON.parse(userInfo);
                detailsUrl = '/materials/details?sources_id=' + disnId + '&loginid=' + this.userInfo.id;
                commentListUrl = '/materials/commentslists?loginid=' + this.userInfo.id + '&sources_id=' + disnId + '&pages=' + this.pageNum + '&rowsmaxs=10';
              } else {
                detailsUrl = '/materials/details?sources_id=' + disnId;
                commentListUrl = '/materials/commentslists?sources_id=' + disnId + '&pages=' + this.pageNum + '&rowsmaxs=10';
              }
              _context.next = 9;
              return util.getData({
                url: detailsUrl,
                method: "get"
              });

            case 9:
              this.designItem = _context.sent;

              this.designItem.images.forEach(function (item, index) {
                _this.designImgList.push({
                  img: item.thumbs
                });
              });

              _context.next = 13;
              return util.getData({
                url: commentListUrl,
                method: "get"
              });

            case 13:
              this.commentList = _context.sent;

              this.pageNum++;

              _context.next = 17;
              return util.getData({
                url: '/materials/praiserslists?sources_id=' + disnId,
                method: "get"
              });

            case 17:
              this.avatarList = _context.sent;
              _context.next = 20;
              return util.getData({
                url: '/materials/commenttotals?sources_id=' + disnId,
                method: "get"
              });

            case 20:
              this.commentCount = _context.sent;


              this.designItem.sex = this.designItem.gender == 1 ? "boy" : "girl";
              this.$vux.loading.hide();
              this.pageShow = true;

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {},
  methods: {
    showMenu: function showMenu(designItem) {
      this.menuBoxShow = !this.menuBoxShow;
      this.currentDesignItem = designItem;
    },
    toogleReportPopup: function toogleReportPopup() {
      this.menuBoxShow = false;
      this.showReportPopup = !this.showReportPopup;
    },
    selectReport: function selectReport(report) {
      this.confirmContent = report.title;
      this.reportCellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      report.righticonclass = "icon-xuanzhong";
    },
    reportCommit: function reportCommit() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.confirmContent) {
                  _context2.next = 9;
                  break;
                }

                _this2.$vux.loading.show({
                  text: "Loading"
                });
                _context2.next = 4;
                return util.request({
                  url: '/materials/reports',
                  method: "post",
                  param: {
                    loginid: _this2.userInfo.id,
                    users_mains_id: _this2.currentDesignItem.userid,
                    reasons: _this2.confirmContent,
                    types: 2,
                    targets_id: _this2.disnId
                  }
                });

              case 4:
                data = _context2.sent;

                if (data.return_code == "success") {
                  _this2.$vux.toast.show({
                    text: data.return_data
                  });
                  _this2.showReportPopup = false;
                  _this2.confirmContent = "";
                } else {
                  _this2.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }
                _this2.$vux.loading.hide();
                _context2.next = 10;
                break;

              case 9:
                _this2.$vux.alert.show({
                  title: "提示",
                  content: "请选择举报内容"
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    show: function show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    },
    follow: function follow(users) {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var types, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                types = users.followed ? 0 : 1;

                if (!_this3.userInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 4;
                return util.request({
                  url: '/materials/usersfollows',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this3.userInfo.id,
                    types: types
                  }
                });

              case 4:
                data = _context3.sent;

                if (data.return_code == "success") {
                  users.followed = types;
                }
                _this3.$vux.toast.show({
                  text: data.return_data
                });
                _context3.next = 10;
                break;

              case 9:
                _this3.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this3.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    liking: function liking(users) {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.userInfo) {
                  _context4.next = 15;
                  break;
                }

                if (!(users.score == 1)) {
                  _context4.next = 5;
                  break;
                }

                _this4.$vux.alert.show({
                  title: "提示",
                  content: "已经给过差评了"
                });
                _context4.next = 13;
                break;

              case 5:
                if (!(users.score == 5)) {
                  _context4.next = 9;
                  break;
                }

                _this4.$vux.alert.show({
                  title: "提示",
                  content: "不能重复点赞"
                });
                _context4.next = 13;
                break;

              case 9:
                _context4.next = 11;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this4.userInfo.id,
                    types: 1,
                    scores: 5,
                    targets_id: _this4.disnId
                  }
                });

              case 11:
                data = _context4.sent;

                if (data.return_code == "success") {
                  _this4.$vux.toast.show({
                    text: data.return_data
                  });
                  users.score = 5;
                  users.praisesnums++;
                } else {
                  _this4.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 13:
                _context4.next = 16;
                break;

              case 15:
                _this4.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this4.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    bading: function bading(users) {
      var _this5 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var data;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5.userInfo) {
                  _context5.next = 15;
                  break;
                }

                if (!(users.score == 5)) {
                  _context5.next = 5;
                  break;
                }

                _this5.$vux.alert.show({
                  title: "提示",
                  content: "已经给过好评了"
                });
                _context5.next = 13;
                break;

              case 5:
                if (!(users.score == 1)) {
                  _context5.next = 9;
                  break;
                }

                _this5.$vux.alert.show({
                  title: "提示",
                  content: "不能重复差评"
                });
                _context5.next = 13;
                break;

              case 9:
                _context5.next = 11;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: users.userid,
                    loginid: _this5.userInfo.id,
                    types: 1,
                    scores: 1,
                    targets_id: _this5.disnId
                  }
                });

              case 11:
                data = _context5.sent;

                if (data.return_code == "success") {
                  _this5.$vux.toast.show({
                    text: data.return_data
                  });
                  users.score = 1;
                  users.badsnums++;
                } else {
                  _this5.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 13:
                _context5.next = 16;
                break;

              case 15:
                _this5.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this5.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 16:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    commentsCommit: function commentsCommit() {
      var _this6 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var data;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this6.userInfo) {
                  _context6.next = 3;
                  break;
                }

                _this6.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this6.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });
                return _context6.abrupt('return', false);

              case 3:
                if (_this6.comment) {
                  _context6.next = 6;
                  break;
                }

                _this6.$vux.alert.show({
                  title: "提示",
                  content: "评论内容不能为空"
                });
                return _context6.abrupt('return', false);

              case 6:
                _context6.next = 8;
                return util.request({
                  url: '/materials/comments',
                  method: "post",
                  param: {
                    users_mains_id: _this6.designItem.userid,
                    loginid: _this6.userInfo.id,
                    sources_id: _this6.disnId,
                    comments: _this6.comment
                  }
                });

              case 8:
                data = _context6.sent;

                if (!(data.return_code == "success")) {
                  _context6.next = 16;
                  break;
                }

                _this6.$vux.toast.show({
                  text: data.return_data
                });

                _context6.next = 13;
                return util.getData({
                  url: '/materials/commentslists?sources_id=' + _this6.disnId + '&loginid=' + _this6.userInfo.id,
                  method: "get"
                });

              case 13:
                _this6.commentList = _context6.sent;
                _context6.next = 17;
                break;

              case 16:
                _this6.$vux.alert.show({
                  title: "提示",
                  content: data.return_data
                });

              case 17:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    commentLiking: function commentLiking(comment) {
      var _this7 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var data;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!_this7.userInfo) {
                  _context7.next = 11;
                  break;
                }

                if (!(comment.praised == 1)) {
                  _context7.next = 5;
                  break;
                }

                _this7.$vux.alert.show({
                  title: "提示",
                  content: "不能重复点赞"
                });
                _context7.next = 9;
                break;

              case 5:
                _context7.next = 7;
                return util.request({
                  url: '/materials/scores',
                  method: "post",
                  param: {
                    users_mains_id: comment.userid,
                    loginid: _this7.userInfo.id,
                    types: 2,
                    scores: 5,
                    targets_id: comment.id
                  }
                });

              case 7:
                data = _context7.sent;

                if (data.return_code == "success") {
                  _this7.$vux.toast.show({
                    text: data.return_data
                  });
                  comment.praised = 1;
                  comment.praisesnums++;
                } else {
                  _this7.$vux.alert.show({
                    title: "提示",
                    content: data.return_data
                  });
                }

              case 9:
                _context7.next = 12;
                break;

              case 11:
                _this7.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this7.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    togglePopup: function togglePopup(type) {
      this.popup.type = type;
      this.popup.popupState = !this.popup.popupState;
    },
    rewardSelected: function rewardSelected(index) {
      this.confirmReward = this.rewards.list[index];
      this.rewards.seleted = index;
      this.toPay();
    },
    toPay: function toPay() {
      this.popup.type = "pay";
    },
    backSelectReward: function backSelectReward() {
      this.confirmReward = "";
      this.popup.type = "reward";
    },
    selectPay: function selectPay(cell) {
      this.selectPayMethod = cell.title;
      this.cellArr.forEach(function (item, index) {
        item.righticonclass = "icon-weixuanzhong";
      });
      cell.righticonclass = "icon-xuanzhong";
    },
    payCommit: function payCommit() {
      var _this8 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
        var data, orderstring;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!_this8.userInfo) {
                  _context8.next = 13;
                  break;
                }

                if (_this8.selectPayMethod) {
                  _context8.next = 5;
                  break;
                }

                _this8.$vux.alert.show({
                  title: "提示",
                  content: "请选择付款方式"
                });
                _context8.next = 11;
                break;

              case 5:
                if (!(_this8.selectPayMethod == "支付宝")) {
                  _context8.next = 11;
                  break;
                }

                _context8.next = 8;
                return util.getData({
                  url: '/materials/praisepays',
                  method: "post",
                  param: {
                    loginid: _this8.userInfo.id,
                    users_mains_id: _this8.designItem.userid,
                    moneys: _this8.confirmReward
                  }
                });

              case 8:
                data = _context8.sent;
                orderstring = data;

                window.Alipay.pay(orderstring, function (res) {
                  _this8.$vux.toast.show({
                    text: "打赏成功"
                  });
                }, function (e) {
                  console.error(e);
                });

              case 11:
                _context8.next = 14;
                break;

              case 13:
                _this8.$vux.confirm.show({
                  title: "提示",
                  content: "请先登录",
                  onConfirm: function onConfirm() {
                    _this8.$router.push({
                      path: "/page/user/LoginIndex"
                    });
                  }
                });

              case 14:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },
    onInfinite: function onInfinite(done) {
      var _this9 = this;

      setTimeout(asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
        var detailsUrl, commentListUrl, commentList;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                detailsUrl = void 0, commentListUrl = void 0;

                if (_this9.userInfo) {
                  detailsUrl = '/materials/details?sources_id=' + _this9.disnId + '&loginid=' + _this9.userInfo.id;
                  commentListUrl = '/materials/commentslists?loginid=' + _this9.userInfo.id + '&sources_id=' + _this9.disnId + '&pages=' + _this9.pageNum + '&rowsmaxs=10';
                } else {
                  detailsUrl = '/materials/details?sources_id=' + _this9.disnId;
                  commentListUrl = '/materials/commentslists?sources_id=' + _this9.disnId + '&pages=' + _this9.pageNum + '&rowsmaxs=10';
                }
                _context9.next = 4;
                return util.getData({
                  url: commentListUrl,
                  method: "get"
                });

              case 4:
                commentList = _context9.sent;

                if (!(commentList == '')) {
                  _context9.next = 8;
                  break;
                }

                _this9.$refs.scroller.finishInfinite(2);
                return _context9.abrupt('return', false);

              case 8:
                _this9.commentList = _this9.commentList.concat(commentList);
                _this9.pageNum++, done();

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      })), 1000);
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Swiper: vux_src_components_swiper_swiper,
    XButton: vux_src_components_x_button,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XImg: vux_src_components_x_img,
    Badge: vux_src_components_badge,
    Popup: node_modules_vux_src_components_popup,
    Card: vux_src_components_card,
    Cell: vux_src_components_cell,
    XInput: vux_src_components_x_input
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5576afec","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/take_photo/DesignDetail.vue
var DesignDetail_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pageShow)?_c('div',{staticClass:"DesignDetail"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("详情\n    ")]),_vm._v(" "),_c('scroller',{ref:"scroller",attrs:{"on-infinite":_vm.onInfinite}},[_c('div',{staticClass:"content-box"},[_c('div',{staticClass:"design-list"},[_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":1.7}},[_c('img',{staticClass:"avatar",attrs:{"src":_vm.designItem.users_logos||'static/img/default-avatar.png',"alt":""}})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7.3}},[_c('div',[_c('div',{staticClass:"username"},[_vm._v("\n                "+_vm._s(_vm.designItem.nicknames)+"\n                "),(_vm.designItem.sex == 'girl')?_c('i',{staticClass:"iconfont icon-nvsheng"}):_c('i',{staticClass:"iconfont icon-nansheng"})]),_vm._v(" "),_c('div',{staticClass:"direc"},[_vm._v(_vm._s(_vm.designItem.time))])])]),_vm._v(" "),(_vm.designItem.userid != (_vm.userInfo?_vm.userInfo.id:''))?_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('x-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.designItem.followed),expression:"designItem.followed"}],staticClass:"x-button",attrs:{"mini":"","gradients":['rgb(525,97,66)', 'rgb(525,97,66)']},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(_vm.designItem)}}},[_vm._v("已关注")]),_vm._v(" "),_c('x-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.designItem.followed),expression:"!designItem.followed"}],staticClass:"x-button no-follow",attrs:{"mini":""},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.follow(_vm.designItem)}}},[_vm._v("关注")])],1):_vm._e()],1),_vm._v(" "),_c('flexbox',{staticClass:"design-item-box"},[_c('flexbox-item',{staticClass:"desc"},[_vm._v(_vm._s(_vm.designItem.descriptions))])],1),_vm._v(" "),_c('flexbox',{staticClass:"design-item-box"},[_c('flexbox-item',[_c('swiper',{staticClass:"swiper",attrs:{"height":"calc(300 *2 / 7.5 * 1vw)","loop":"","list":_vm.designImgList}})],1)],1),_vm._v(" "),_c('flexbox',[_c('flexbox-item',[_c('div',{staticClass:"design-item-menus"},[_c('span',{staticClass:"design-item-praise",class:_vm.designItem.score == 5 ? 'liked' : '',on:{"click":function($event){$event.stopPropagation();return _vm.liking(_vm.designItem)}}},[_c('i',{staticClass:"iconfont icon-dianzan"}),_vm._v("\n                "+_vm._s(_vm.designItem.praisesnums)+"\n              ")]),_vm._v(" "),_c('span',{staticClass:"design-item-comment",class:_vm.designItem.score == 1 ? 'liked' : '',on:{"click":function($event){$event.stopPropagation();return _vm.bading(_vm.designItem)}}},[_c('i',{staticClass:"iconfont icon-chaping"}),_vm._v("\n                "+_vm._s(_vm.designItem.badsnums)+"\n              ")]),_vm._v(" "),_c('span',{staticClass:"design-item-menu"},[_c('i',{staticClass:"iconfont icon-gengduo",on:{"click":function($event){$event.stopPropagation();return _vm.showMenu(_vm.designItem)}}})])])])],1),_vm._v(" "),_c('div',{staticClass:"avatar-list"},[_c('flexbox',[_c('flexbox-item',{staticClass:"avatar-item-box",attrs:{"span":9}},[_vm._l((_vm.avatarList),function(avatarItem,index){return _c('img',{key:index,staticClass:"avatar-item",attrs:{"src":avatarItem.users_logos || 'static/img/default-avatar.png',"alt":""}})}),_vm._v(" "),(_vm.avatarList.length>6)?_c('span',[_vm._v(_vm._s(_vm.avatarList.length - 6))]):_vm._e()],2),_vm._v(" "),_c('flexbox-item',{attrs:{"span":3}},[_c('x-button',{staticClass:"avatar-btn",attrs:{"mini":""},nativeOn:{"click":function($event){return _vm.togglePopup('reward')}}},[_vm._v("赞赏")])],1)],1)],1),_vm._v(" "),(!_vm.commentCount)?_c('div',{staticStyle:{"text-align":"center","color":"#ccc"}},[_vm._v("暂时还没有人评论呢")]):_vm._e(),_vm._v(" "),(_vm.commentCount)?_c('div',{staticClass:"comment-title"},[_vm._v(_vm._s(_vm.commentCount)+"条评论")]):_vm._e(),_vm._v(" "),_vm._l((_vm.commentList),function(commentItem,index){return (_vm.commentCount)?_c('div',{key:index,staticClass:"comments-box"},[_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":1.7}},[_c('img',{staticClass:"avatar",attrs:{"src":commentItem.users_logos||'static/img/default-avatar.png',"alt":""}})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7.3}},[_c('div',[_c('div',{staticClass:"username"},[_vm._v(_vm._s(commentItem.nicknames))]),_vm._v(" "),_c('div',{staticClass:"direc"},[_vm._v(_vm._s(commentItem.times))])])]),_vm._v(" "),_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('span',{staticClass:"design-item-comment",class:commentItem.praised == 1 ? 'liked' : ''},[_c('i',{staticClass:"iconfont icon-dianzan",class:commentItem.praised == 1 ? 'liked' : '',on:{"click":function($event){return _vm.commentLiking(commentItem)}}}),_vm._v("\n                "+_vm._s(commentItem.praisesnums)+"\n              ")])])],1),_vm._v(" "),_c('flexbox',{staticClass:"design-item-box"},[_c('flexbox-item',{attrs:{"span":1.7}}),_vm._v(" "),_c('flexbox-item',{staticClass:"desc",attrs:{"span":10.3}},[_vm._v(_vm._s(commentItem.comments))])],1)],1):_vm._e()})],2)])]),_vm._v(" "),_c('div',{staticClass:"comment-box"},[_c('x-input',{staticClass:"comment-input",attrs:{"placeholder":"你的评论可以一针见血"},model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}}),_vm._v(" "),_c('x-button',{staticClass:"comment-commit",attrs:{"mini":""},nativeOn:{"click":function($event){return _vm.commentsCommit($event)}}},[_vm._v("提交")])],1),_vm._v(" "),_c('div',[_c('popup',{staticClass:"reward-popup",staticStyle:{"background-color":"#fff","border-radius":"calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0"},attrs:{"height":"calc(270 *2 / 7.5 * 1vw)"},model:{value:(_vm.popup.popupState),callback:function ($$v) {_vm.$set(_vm.popup, "popupState", $$v)},expression:"popup.popupState"}},[_c('div',{staticClass:"reward-box"},[_c('div',{staticClass:"reward-title-box"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.popup.type=='pay'),expression:"popup.type=='pay'"}],staticClass:"back-reward",on:{"click":_vm.backSelectReward}},[_vm._v("返回")]),_vm._v(" "),(_vm.popup.type=='reward')?_c('span',[_vm._v("选择打赏金额")]):_c('span',[_vm._v("选择支付方式")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-danchuangguanbi",on:{"click":function($event){return _vm.togglePopup('reward')}}})]),_vm._v(" "),(_vm.popup.type=='reward')?_c('div',{staticClass:"reward-content-box"},[_c('flexbox',{staticClass:"reward-content",attrs:{"wrap":"wrap"}},_vm._l((_vm.rewards.list),function(reward,index){return _c('flexbox-item',{key:index,attrs:{"span":4}},[_c('div',{staticClass:"reward-item",class:{selected: index==_vm.rewards.seleted}},[_c('span',{on:{"click":function($event){return _vm.rewardSelected(index)}}},[_vm._v(_vm._s(reward)+"元")])])])}),1),_vm._v(" "),_c('x-input',{staticClass:"reward-input",attrs:{"is-type":"number","placeholder":"输入打赏金额"},model:{value:(_vm.confirmReward),callback:function ($$v) {_vm.confirmReward=$$v},expression:"confirmReward"}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.confirmReward),expression:"confirmReward"}],staticStyle:{"font-size":"calc(12 *2 / 7.5 * 1vw)","color":"rgb(252,97,66)"},attrs:{"slot":"right"},on:{"click":_vm.toPay},slot:"right"},[_vm._v("确认")])])],1):_c('div',{staticClass:"select-pay"},[_c('div',{staticStyle:{"text-align":"center","color":"rgb(252,97,66)"}},[_vm._v(_vm._s(_vm.confirmReward)+"元")]),_vm._v(" "),_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('div',{key:index,on:{"click":function($event){return _vm.selectPay(cell)}}},[_c('cell',{attrs:{"title":cell.title}},[_c('i',{staticClass:"iconfont",class:cell.lefticonclass,attrs:{"slot":"icon"},slot:"icon"}),_vm._v(" "),_c('i',{staticClass:"iconfont",class:cell.righticonclass,attrs:{"slot":"default"},slot:"default"})])],1)}),0)]),_vm._v(" "),_c('x-button',{staticClass:"pay-commit",nativeOn:{"click":function($event){return _vm.payCommit($event)}}},[_vm._v("立即支付")])],1)])])],1),_vm._v(" "),_c('popup',{staticClass:"menu-popup",model:{value:(_vm.menuBoxShow),callback:function ($$v) {_vm.menuBoxShow=$$v},expression:"menuBoxShow"}},[_c('div',{on:{"click":function($event){$event.stopPropagation();return _vm.toogleReportPopup($event)}}},[_vm._v("举报")]),_vm._v(" "),_c('div',{on:{"click":function($event){$event.stopPropagation();return _vm.showMenu($event)}}},[_vm._v("取消")])]),_vm._v(" "),_c('popup',{staticStyle:{"background-color":"#fff","border-radius":"calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0"},attrs:{"height":"calc(330 *2 / 7.5 * 1vw)"},model:{value:(_vm.showReportPopup),callback:function ($$v) {_vm.showReportPopup=$$v},expression:"showReportPopup"}},[_c('div',{staticClass:"reward-box"},[_c('div',{staticClass:"reward-title-box"},[_c('span',[_vm._v("举报")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-danchuangguanbi",on:{"click":function($event){return _vm.toogleReportPopup()}}})]),_vm._v(" "),_c('card',{staticClass:"card report-box"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.reportCellArr),function(cell,index){return _c('div',{key:index,staticClass:"report-item",on:{"click":function($event){return _vm.selectReport(cell)}}},[_c('cell',{attrs:{"title":cell.title}},[_c('i',{staticClass:"iconfont",class:cell.lefticonclass,attrs:{"slot":"icon"},slot:"icon"}),_vm._v(" "),_c('i',{staticClass:"iconfont",class:cell.righticonclass,attrs:{"slot":"default"},slot:"default"})])],1)}),0)])],1),_vm._v(" "),_c('div',[_c('x-button',{staticClass:"report-commit",nativeOn:{"click":function($event){return _vm.reportCommit($event)}}},[_vm._v("确定")])],1)])],1):_vm._e()}
var DesignDetail_staticRenderFns = []
var DesignDetail_esExports = { render: DesignDetail_render, staticRenderFns: DesignDetail_staticRenderFns }
/* harmony default export */ var page_take_photo_DesignDetail = (DesignDetail_esExports);
// CONCATENATED MODULE: ./src/page/take_photo/DesignDetail.vue
function DesignDetail_injectStyle (ssrContext) {
  __webpack_require__("9kfk")
}
var DesignDetail_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var DesignDetail___vue_template_functional__ = false
/* styles */
var DesignDetail___vue_styles__ = DesignDetail_injectStyle
/* scopeId */
var DesignDetail___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DesignDetail___vue_module_identifier__ = null
var DesignDetail_Component = DesignDetail_normalizeComponent(
  take_photo_DesignDetail,
  page_take_photo_DesignDetail,
  DesignDetail___vue_template_functional__,
  DesignDetail___vue_styles__,
  DesignDetail___vue_scopeId__,
  DesignDetail___vue_module_identifier__
)

/* harmony default export */ var src_page_take_photo_DesignDetail = (DesignDetail_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/take_photo/Message.vue





/* harmony default export */ var Message = ({
  data: function data() {
    return {
      designList: [{
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }]
    };
  },

  created: function created() {},
  methods: {},
  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/take_photo/Message.vue





/* harmony default export */ var take_photo_Message = ({
  data: function data() {
    return {
      designList: [{
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }, {
        avatar: "src/assets/img/test/avatar.png",
        username: "齐衡小公爷",
        direc: "2019-02-21 11:10:52",
        message: '打赏10元'
      }]
    };
  },

  created: function created() {},
  methods: {},
  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e0c80de8","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/take_photo/Message.vue
var Message_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Message"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("消息")]),_vm._v(" "),_vm._l((_vm.designList),function(designItem,index){return _c('div',{key:index,staticClass:"design-list"},[_c('flexbox',{staticClass:"flexbox"},[_c('flexbox-item',{attrs:{"span":1.7}},[_c('img',{staticClass:"avatar",attrs:{"src":designItem.avatar,"alt":""}})]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7.3}},[_c('div',[_c('div',{staticClass:"username"},[_vm._v(_vm._s(designItem.username))]),_vm._v(" "),_c('div',{staticClass:"direc"},[_vm._v(_vm._s(designItem.direc))])])]),_vm._v(" "),_c('flexbox-item',{staticClass:"x-button-box",attrs:{"span":3}},[_c('span',{staticClass:"message"},[_vm._v("\n          "+_vm._s(designItem.message)+"\n        ")])])],1)],1)})],2)}
var Message_staticRenderFns = []
var Message_esExports = { render: Message_render, staticRenderFns: Message_staticRenderFns }
/* harmony default export */ var page_take_photo_Message = (Message_esExports);
// CONCATENATED MODULE: ./src/page/take_photo/Message.vue
function Message_injectStyle (ssrContext) {
  __webpack_require__("Tkzw")
}
var Message_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Message___vue_template_functional__ = false
/* styles */
var Message___vue_styles__ = Message_injectStyle
/* scopeId */
var Message___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Message___vue_module_identifier__ = null
var Message_Component = Message_normalizeComponent(
  take_photo_Message,
  page_take_photo_Message,
  Message___vue_template_functional__,
  Message___vue_styles__,
  Message___vue_scopeId__,
  Message___vue_module_identifier__
)

/* harmony default export */ var src_page_take_photo_Message = (Message_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/Release.vue







/* harmony default export */ var Release = ({
  data: function data() {
    return {
      desc: "",
      btnClass: "",
      imgList: []
    };
  },

  created: function created() {
    var params = this.$route.params;
    this.imgList = params.photos;
  },
  methods: {
    next: function next() {
      if (this.desc) {
        this.$router.push({
          path: '/page/release/SelectLabel',
          params: {
            desc: this.desc
          }
        });
        sessionStorage.setItem('imgDesc', this.desc);
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "图片描述不能为空"
        });
      }
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    XTextarea: vux_src_components_x_textarea,
    XButton: vux_src_components_x_button
  },
  watch: {
    desc: function desc(_desc) {
      if (_desc) {
        this.btnClass = "active";
      } else {
        this.btnClass = "";
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/Release.vue







/* harmony default export */ var release_Release = ({
  data: function data() {
    return {
      desc: "",
      btnClass: "",
      imgList: []
    };
  },

  created: function created() {
    var params = this.$route.params;
    this.imgList = params.photos;
  },
  methods: {
    next: function next() {
      if (this.desc) {
        this.$router.push({
          path: '/page/release/SelectLabel',
          params: {
            desc: this.desc
          }
        });
        sessionStorage.setItem('imgDesc', this.desc);
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "图片描述不能为空"
        });
      }
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    XTextarea: vux_src_components_x_textarea,
    XButton: vux_src_components_x_button
  },
  watch: {
    desc: function desc(_desc) {
      if (_desc) {
        this.btnClass = "active";
      } else {
        this.btnClass = "";
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e04f28f0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/release/Release.vue
var Release_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Release"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("发布")]),_vm._v(" "),_c('div',{staticClass:"img-list"},[_c('grid',{staticClass:"grid",attrs:{"cols":4,"show-lr-borders":false,"show-vertical-dividers":false}},_vm._l((_vm.imgList),function(item,index){return _c('grid-item',{key:index,staticClass:"grid-item"},[_c('img',{staticClass:"previewer-demo-img",attrs:{"src":item}})])}),1),_vm._v(" "),_c('x-textarea',{staticClass:"x-textarea",attrs:{"height":30,"placeholder":"说点什么"},model:{value:(_vm.desc),callback:function ($$v) {_vm.desc=$$v},expression:"desc"}}),_vm._v(" "),_c('div',{staticClass:"commit-btn-box"},[_c('x-button',{staticClass:"commit-btn",class:_vm.btnClass,nativeOn:{"click":function($event){return _vm.next($event)}}},[_vm._v("下一步")])],1)],1)],1)}
var Release_staticRenderFns = []
var Release_esExports = { render: Release_render, staticRenderFns: Release_staticRenderFns }
/* harmony default export */ var page_release_Release = (Release_esExports);
// CONCATENATED MODULE: ./src/page/release/Release.vue
function Release_injectStyle (ssrContext) {
  __webpack_require__("z/Mi")
}
var Release_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Release___vue_template_functional__ = false
/* styles */
var Release___vue_styles__ = Release_injectStyle
/* scopeId */
var Release___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Release___vue_module_identifier__ = null
var Release_Component = Release_normalizeComponent(
  release_Release,
  page_release_Release,
  Release___vue_template_functional__,
  Release___vue_styles__,
  Release___vue_scopeId__,
  Release___vue_module_identifier__
)

/* harmony default export */ var src_page_release_Release = (Release_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/SelectAddress.vue









/* harmony default export */ var SelectAddress = ({
  data: function data() {
    return {
      imgInfo: {},
      cellArr: [{
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: "icon-xuanzhong"
      }, {
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: ""
      }, {
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: ""
      }, {
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: ""
      }]
    };
  },

  created: function created() {
    var params = this.$route.params;
    this.imgInfo.desc = params.desc;
  },
  methods: {
    selectAddress: function selectAddress(cell) {
      this.imgInfo.address = cell;
      this.cellArr.forEach(function (el, index) {
        el.selectClass = "";
      });
      cell.selectClass = "icon-xuanzhong";
    },
    next: function next() {
      this.$router.push({
        path: '/page/release/SelectLabel',
        params: {
          imgInfo: this.imgInfo
        }
      });
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Card: vux_src_components_card,
    Cell: vux_src_components_cell,
    Group: vux_src_components_group,
    XButton: vux_src_components_x_button
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/SelectAddress.vue









/* harmony default export */ var release_SelectAddress = ({
  data: function data() {
    return {
      imgInfo: {},
      cellArr: [{
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: "icon-xuanzhong"
      }, {
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: ""
      }, {
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: ""
      }, {
        name: "绿亮科创园",
        address: "上海市虹梅南路2588号",
        righticonclass: "icon-weixuanzhong",
        selectClass: ""
      }]
    };
  },

  created: function created() {
    var params = this.$route.params;
    this.imgInfo.desc = params.desc;
  },
  methods: {
    selectAddress: function selectAddress(cell) {
      this.imgInfo.address = cell;
      this.cellArr.forEach(function (el, index) {
        el.selectClass = "";
      });
      cell.selectClass = "icon-xuanzhong";
    },
    next: function next() {
      this.$router.push({
        path: '/page/release/SelectLabel',
        params: {
          imgInfo: this.imgInfo
        }
      });
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Card: vux_src_components_card,
    Cell: vux_src_components_cell,
    Group: vux_src_components_group,
    XButton: vux_src_components_x_button
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6a765949","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/release/SelectAddress.vue
var SelectAddress_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SelectAddress"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("选择地理位置")]),_vm._v(" "),_c('group',{attrs:{"title":"附近位置"}},[_c('card',{staticClass:"card"},[_c('div',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.cellArr),function(cell,index){return _c('div',{key:index,on:{"click":function($event){return _vm.selectAddress(cell)}}},[_c('cell',{attrs:{"title":cell.name}},[_c('span',{attrs:{"slot":"inline-desc"},slot:"inline-desc"},[_vm._v(_vm._s(cell.address))]),_vm._v(" "),_c('i',{staticClass:"iconfont",class:cell.righticonclass+' '+cell.selectClass,attrs:{"slot":"default"},slot:"default"})])],1)}),0)])],1),_vm._v(" "),_c('div',{staticClass:"commit-btn-box"},[_c('x-button',{staticClass:"commit-btn",nativeOn:{"click":function($event){return _vm.next($event)}}},[_vm._v("下一步")])],1)],1)}
var SelectAddress_staticRenderFns = []
var SelectAddress_esExports = { render: SelectAddress_render, staticRenderFns: SelectAddress_staticRenderFns }
/* harmony default export */ var page_release_SelectAddress = (SelectAddress_esExports);
// CONCATENATED MODULE: ./src/page/release/SelectAddress.vue
function SelectAddress_injectStyle (ssrContext) {
  __webpack_require__("ob0I")
}
var SelectAddress_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SelectAddress___vue_template_functional__ = false
/* styles */
var SelectAddress___vue_styles__ = SelectAddress_injectStyle
/* scopeId */
var SelectAddress___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SelectAddress___vue_module_identifier__ = null
var SelectAddress_Component = SelectAddress_normalizeComponent(
  release_SelectAddress,
  page_release_SelectAddress,
  SelectAddress___vue_template_functional__,
  SelectAddress___vue_styles__,
  SelectAddress___vue_scopeId__,
  SelectAddress___vue_module_identifier__
)

/* harmony default export */ var src_page_release_SelectAddress = (SelectAddress_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/SelectLabel.vue











/* harmony default export */ var SelectLabel = ({
  data: function data() {
    return {
      topicList: [],
      allLabelList: [],
      selectLabelList: [],
      selectTopic: "",
      photos: ""
    };
  },

  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var _this = this;

      var topicList, allLabelList, photos;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return util.getData({
                url: "/materials/topicslists",
                method: "post"
              });

            case 2:
              topicList = _context2.sent;

              topicList.forEach(function (item, index) {
                _this.topicList.push({
                  text: item.tits,
                  id: item.topics_id,
                  selectClass: ""
                });
              });

              _context2.next = 6;
              return util.getData({
                url: "/materials/labelslists",
                method: "post"
              });

            case 6:
              allLabelList = _context2.sent;

              allLabelList.forEach(function (item, index) {
                _this.allLabelList.push({
                  text: item.tits,
                  id: item.id,
                  selectClass: ""
                });
              });

              photos = sessionStorage.getItem("photos");


              if (photos) {
                photos = JSON.parse(photos);
                photos.forEach(function () {
                  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(item, index) {
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return util.convertImg(item, 375, 375);

                          case 2:
                            _context.t0 = _context.sent;
                            _this.photos += "||" + _context.t0;

                          case 4:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    selectLabel: function selectLabel(label) {
      if (label.selectClass == "selected") {
        this.selectLabelList.splice(this.selectLabelList.indexOf(label.id), 1);
      } else {
        if (this.selectLabelList.length >= 5) {
          this.$vux.alert.show({
            title: "提示",
            content: "标签最多选择5个"
          });
          return false;
        }
        this.selectLabelList.push(label.id + '');
      }
      label.selectClass = label.selectClass == "selected" ? "" : "selected";
    },
    selectedTopic: function selectedTopic(topic) {
      if (topic.selectClass == "selected") {
        this.selectTopic = topic.selectClass = "";
      } else {
        this.topicList.forEach(function (item, index) {
          item.selectClass = "";
        });
        topic.selectClass = "selected";
        this.selectTopic = topic.id;
      }
    },
    release: function release() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var userInfo, imgDesc, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userInfo = localStorage.getItem("userInfo");
                imgDesc = sessionStorage.getItem("imgDesc");

                if (userInfo) {
                  userInfo = JSON.parse(userInfo);
                }
                _this2.$vux.loading.show({
                  text: '努力上传中...'
                });
                _context3.next = 6;
                return util.request({
                  url: "/materials/adds",
                  method: "post",
                  param: {
                    loginid: userInfo.id + '',
                    descriptions: imgDesc + '',
                    updata: _this2.photos.slice(2),
                    labels_id: _this2.selectLabelList,
                    topics_id: _this2.selectTopic + ''
                  }
                });

              case 6:
                data = _context3.sent;

                _this2.$vux.loading.hide();
                if (data.return_code == 'success') {
                  _this2.$vux.toast.show({
                    text: data.return_data,
                    type: "text",
                    onHide: function onHide() {
                      _this2.$router.push({
                        path: "/"
                      });
                    }
                  });
                } else {
                  _this2.$vux.alert.show({
                    title: '提示',
                    content: data.return_data
                  });
                }

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Group: vux_src_components_group,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    XButton: vux_src_components_x_button
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/SelectLabel.vue











/* harmony default export */ var release_SelectLabel = ({
  data: function data() {
    return {
      topicList: [],
      allLabelList: [],
      selectLabelList: [],
      selectTopic: "",
      photos: ""
    };
  },

  created: function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var _this = this;

      var topicList, allLabelList, photos;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return util.getData({
                url: "/materials/topicslists",
                method: "post"
              });

            case 2:
              topicList = _context2.sent;

              topicList.forEach(function (item, index) {
                _this.topicList.push({
                  text: item.tits,
                  id: item.topics_id,
                  selectClass: ""
                });
              });

              _context2.next = 6;
              return util.getData({
                url: "/materials/labelslists",
                method: "post"
              });

            case 6:
              allLabelList = _context2.sent;

              allLabelList.forEach(function (item, index) {
                _this.allLabelList.push({
                  text: item.tits,
                  id: item.id,
                  selectClass: ""
                });
              });

              photos = sessionStorage.getItem("photos");


              if (photos) {
                photos = JSON.parse(photos);
                photos.forEach(function () {
                  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(item, index) {
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return util.convertImg(item, 375, 375);

                          case 2:
                            _context.t0 = _context.sent;
                            _this.photos += "||" + _context.t0;

                          case 4:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x, _x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function created() {
      return _ref.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    selectLabel: function selectLabel(label) {
      if (label.selectClass == "selected") {
        this.selectLabelList.splice(this.selectLabelList.indexOf(label.id), 1);
      } else {
        if (this.selectLabelList.length >= 5) {
          this.$vux.alert.show({
            title: "提示",
            content: "标签最多选择5个"
          });
          return false;
        }
        this.selectLabelList.push(label.id + '');
      }
      label.selectClass = label.selectClass == "selected" ? "" : "selected";
    },
    selectedTopic: function selectedTopic(topic) {
      if (topic.selectClass == "selected") {
        this.selectTopic = topic.selectClass = "";
      } else {
        this.topicList.forEach(function (item, index) {
          item.selectClass = "";
        });
        topic.selectClass = "selected";
        this.selectTopic = topic.id;
      }
    },
    release: function release() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var userInfo, imgDesc, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userInfo = localStorage.getItem("userInfo");
                imgDesc = sessionStorage.getItem("imgDesc");

                if (userInfo) {
                  userInfo = JSON.parse(userInfo);
                }
                _this2.$vux.loading.show({
                  text: '努力上传中...'
                });
                _context3.next = 6;
                return util.request({
                  url: "/materials/adds",
                  method: "post",
                  param: {
                    loginid: userInfo.id + '',
                    descriptions: imgDesc + '',
                    updata: _this2.photos.slice(2),
                    labels_id: _this2.selectLabelList,
                    topics_id: _this2.selectTopic + ''
                  }
                });

              case 6:
                data = _context3.sent;

                _this2.$vux.loading.hide();
                if (data.return_code == 'success') {
                  _this2.$vux.toast.show({
                    text: data.return_data,
                    type: "text",
                    onHide: function onHide() {
                      _this2.$router.push({
                        path: "/"
                      });
                    }
                  });
                } else {
                  _this2.$vux.alert.show({
                    title: '提示',
                    content: data.return_data
                  });
                }

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Group: vux_src_components_group,
    Grid: src_components_grid_grid,
    GridItem: src_components_grid_grid_item,
    XButton: vux_src_components_x_button
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7dcc93c5","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/release/SelectLabel.vue
var SelectLabel_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SelectLabel"},[_c('x-header',{staticClass:"x-header",attrs:{"left-options":{backText: ''}}},[_vm._v("选择标签")]),_vm._v(" "),_c('group',{attrs:{"title":"热门标签"}},[_c('grid',{staticClass:"grid",attrs:{"show-lr-borders":false,"show-vertical-dividers":false,"cols":3}},_vm._l((_vm.topicList),function(topic,index){return _c('grid-item',{key:index,staticClass:"grid-item"},[_c('span',{staticClass:"label",class:topic.selectClass,on:{"click":function($event){return _vm.selectedTopic(topic)}}},[_vm._v(_vm._s(topic.text))])])}),1)],1),_vm._v(" "),_c('group',{attrs:{"title":"全部标签"}},[_c('grid',{staticClass:"grid",attrs:{"show-lr-borders":false,"show-vertical-dividers":false,"cols":3}},_vm._l((_vm.allLabelList),function(label,index){return _c('grid-item',{key:index,staticClass:"grid-item"},[_c('span',{staticClass:"label",class:label.selectClass,on:{"click":function($event){return _vm.selectLabel(label)}}},[_vm._v(_vm._s(label.text))])])}),1)],1),_vm._v(" "),_c('div',{staticClass:"commit-btn-box"},[_c('x-button',{staticClass:"commit-btn",nativeOn:{"click":function($event){return _vm.release($event)}}},[_vm._v("发布")])],1)],1)}
var SelectLabel_staticRenderFns = []
var SelectLabel_esExports = { render: SelectLabel_render, staticRenderFns: SelectLabel_staticRenderFns }
/* harmony default export */ var page_release_SelectLabel = (SelectLabel_esExports);
// CONCATENATED MODULE: ./src/page/release/SelectLabel.vue
function SelectLabel_injectStyle (ssrContext) {
  __webpack_require__("vQRc")
}
var SelectLabel_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SelectLabel___vue_template_functional__ = false
/* styles */
var SelectLabel___vue_styles__ = SelectLabel_injectStyle
/* scopeId */
var SelectLabel___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SelectLabel___vue_module_identifier__ = null
var SelectLabel_Component = SelectLabel_normalizeComponent(
  release_SelectLabel,
  page_release_SelectLabel,
  SelectLabel___vue_template_functional__,
  SelectLabel___vue_styles__,
  SelectLabel___vue_scopeId__,
  SelectLabel___vue_module_identifier__
)

/* harmony default export */ var src_page_release_SelectLabel = (SelectLabel_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/ReleaseImgEdit.vue











/* harmony default export */ var ReleaseImgEdit = ({
  data: function data() {
    return {
      imgList: {
        index: 0,
        currentImg: '',
        list: []
      }
    };
  },

  created: function created() {
    var params = this.$route.params;
    if (params) {
      this.imgList.list = params.photos;
      this.imgList.currentImg = this.imgList.list[0];
    }
  },
  methods: {
    back: function back() {
      this.$router.back();
    },
    selectImg: function selectImg(index) {
      this.imgList.index = index;
      this.imgList.currentImg = this.imgList.list[index];
    },
    deleteImg: function deleteImg(index) {
      this.imgList.list.splice(index, 1);
      if (this.imgList.list.length <= 0) {
        this.$router.back();
      }
      if (index == this.imgList.index) {
        this.imgList.currentImg = this.imgList.list[0];
        this.imgList.index = 0;
      }
    },
    takePhoto: function takePhoto() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var photo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.imgList.list.length >= 9)) {
                  _context.next = 4;
                  break;
                }

                _this.$vux.alert.show({
                  title: "提示",
                  content: "单次发布最多9张"
                });
                _context.next = 8;
                break;

              case 4:
                _context.next = 6;
                return takePicture();

              case 6:
                photo = _context.sent;

                _this.imgList.list.push(photo);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    next: function next() {
      this.$router.push({
        path: '/page/release/Release',
        name: 'Release',
        params: {
          photos: this.imgList.list
        }
      });
      sessionStorage.setItem('photos', stringify_default()(this.imgList.list));
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XImg: vux_src_components_x_img
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/release/ReleaseImgEdit.vue











/* harmony default export */ var release_ReleaseImgEdit = ({
  data: function data() {
    return {
      imgList: {
        index: 0,
        currentImg: '',
        list: []
      }
    };
  },

  created: function created() {
    var params = this.$route.params;
    if (params) {
      this.imgList.list = params.photos;
      this.imgList.currentImg = this.imgList.list[0];
    }
  },
  methods: {
    back: function back() {
      this.$router.back();
    },
    selectImg: function selectImg(index) {
      this.imgList.index = index;
      this.imgList.currentImg = this.imgList.list[index];
    },
    deleteImg: function deleteImg(index) {
      this.imgList.list.splice(index, 1);
      if (this.imgList.list.length <= 0) {
        this.$router.back();
      }
      if (index == this.imgList.index) {
        this.imgList.currentImg = this.imgList.list[0];
        this.imgList.index = 0;
      }
    },
    takePhoto: function takePhoto() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var photo;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.imgList.list.length >= 9)) {
                  _context.next = 4;
                  break;
                }

                _this.$vux.alert.show({
                  title: "提示",
                  content: "单次发布最多9张"
                });
                _context.next = 8;
                break;

              case 4:
                _context.next = 6;
                return takePicture();

              case 6:
                photo = _context.sent;

                _this.imgList.list.push(photo);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    next: function next() {
      this.$router.push({
        path: '/page/release/Release',
        name: 'Release',
        params: {
          photos: this.imgList.list
        }
      });
      sessionStorage.setItem('photos', stringify_default()(this.imgList.list));
    }
  },
  components: {
    XHeader: vux_src_components_x_header,
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XImg: vux_src_components_x_img
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fe14b608","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/release/ReleaseImgEdit.vue
var ReleaseImgEdit_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ReleaseImgEdit"},[_c('i',{staticClass:"iconfont icon-danchuangguanbi back",attrs:{"slot":"left"},on:{"click":_vm.back},slot:"left"}),_vm._v(" "),_c('div',{staticClass:"img-box"},[_c('x-img',{staticClass:"select-img",attrs:{"default-src":_vm.imgList.currentImg,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"img-list"},[_c('flexbox',_vm._l((_vm.imgList.list),function(src,index){return _c('flexbox-item',{key:index,attrs:{"span":2.4}},[_c('div',{staticClass:"img-item-box"},[_c('img',{class:_vm.imgList.index == index ? 'selectImg':'',attrs:{"src":src,"alt":""},on:{"click":function($event){return _vm.selectImg(index)}}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-danchuangguanbi",on:{"click":function($event){return _vm.deleteImg(index)}}})])])}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"edit-btn-box"},[_c('div',{staticClass:"go-take-photo"},[_vm._v("点击继续拍照")]),_vm._v(" "),_c('flexbox',[_c('flexbox-item',[_c('div',{staticClass:"flex-demo"},[_c('i',{staticClass:"iconfont icon-lvjing"}),_vm._v("\n          滤镜\n        ")])]),_vm._v(" "),_c('flexbox-item',[_c('div',{staticClass:"flex-demo"},[_c('i',{staticClass:"iconfont icon-xiangji",on:{"click":_vm.takePhoto}})])]),_vm._v(" "),_c('flexbox-item',[_c('div',{staticClass:"flex-demo"},[_c('i',{staticClass:"iconfont icon-xiayibu",on:{"click":_vm.next}})])])],1)],1)])}
var ReleaseImgEdit_staticRenderFns = []
var ReleaseImgEdit_esExports = { render: ReleaseImgEdit_render, staticRenderFns: ReleaseImgEdit_staticRenderFns }
/* harmony default export */ var page_release_ReleaseImgEdit = (ReleaseImgEdit_esExports);
// CONCATENATED MODULE: ./src/page/release/ReleaseImgEdit.vue
function ReleaseImgEdit_injectStyle (ssrContext) {
  __webpack_require__("FxFc")
}
var ReleaseImgEdit_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ReleaseImgEdit___vue_template_functional__ = false
/* styles */
var ReleaseImgEdit___vue_styles__ = ReleaseImgEdit_injectStyle
/* scopeId */
var ReleaseImgEdit___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ReleaseImgEdit___vue_module_identifier__ = null
var ReleaseImgEdit_Component = ReleaseImgEdit_normalizeComponent(
  release_ReleaseImgEdit,
  page_release_ReleaseImgEdit,
  ReleaseImgEdit___vue_template_functional__,
  ReleaseImgEdit___vue_styles__,
  ReleaseImgEdit___vue_scopeId__,
  ReleaseImgEdit___vue_module_identifier__
)

/* harmony default export */ var src_page_release_ReleaseImgEdit = (ReleaseImgEdit_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js
//个人中心相关













//登录注册相关






//随手拍



//发布





/* harmony default export */ var src_router = ([{
  path: '/',
  name: 'TakePhoto',
  component: src_page_TakePhoto,
  meta: {
    index: 0
  }
}, {
  path: '/page/UserIndex',
  name: 'UserIndex',
  component: src_page_UserIndex,
  meta: {
    index: 4
  }
}, {
  path: '/page/user/SetUserInfo',
  name: 'SetUserInfo',
  component: src_page_user_SetUserInfo,
  meta: {
    index: 5
  }
}, {
  path: '/page/MyRelease',
  name: 'MyRelease',
  component: src_page_user_MyRelease,
  meta: {
    index: 6
  }
}, {
  path: '/page/MyFollow',
  name: 'MyFollow',
  component: src_page_user_MyFollow,
  meta: {
    index: 7
  }
}, {
  path: '/page/MyCollect',
  name: 'MyCollect',
  component: src_page_user_MyCollect,
  meta: {
    index: 8
  }
}, {
  path: '/page/MyFan',
  name: 'MyFan',
  component: src_page_user_MyFan,
  meta: {
    index: 9
  }
}, {
  path: '/page/MyIncome',
  name: 'MyIncome',
  component: src_page_user_MyIncome,
  meta: {
    index: 10
  }
}, {
  path: '/page/MySet',
  name: 'MySet',
  component: src_page_user_MySet,
  meta: {
    index: 11
  }
}, {
  path: '/page/AboutUs',
  name: 'AboutUs',
  component: src_page_user_AboutUs,
  meta: {
    index: 12
  }
}, {
  path: '/page/IncomeAccount',
  name: 'IncomeAccount',
  component: src_page_user_IncomeAccount,
  meta: {
    index: 13
  }
}, {
  path: '/page/IncomeRecord',
  name: 'IncomeRecord',
  component: src_page_user_IncomeRecord,
  meta: {
    index: 14
  }
}, {
  path: '/page/ReportOpinion',
  name: 'ReportOpinion',
  component: src_page_user_ReportOpinion,
  meta: {
    index: 15
  }
}, {
  path: '/page/ServicePact',
  name: 'ServicePact',
  component: src_page_user_ServicePact,
  meta: {
    index: 16
  }
}, {
  path: '/page/take_photo/DesignDetail',
  name: 'DesignDetail',
  component: src_page_take_photo_DesignDetail,
  meta: {
    index: 17
  }
}, {
  path: '/page/user/LoginIndex',
  name: 'LoginIndex',
  component: src_page_user_LoginIndex,
  meta: {
    index: 18
  }
}, {
  path: '/page/user/ForgetPwd',
  name: 'ForgetPwd',
  component: src_page_user_ForgetPwd,
  meta: {
    index: 19
  }
}, {
  path: '/page/user/Register',
  name: 'Register',
  component: src_page_user_Register,
  meta: {
    index: 20
  }
}, {
  path: '/page/user/MobileNumLogin',
  name: 'MobileNumLogin',
  component: src_page_user_MobileNumLogin,
  meta: {
    index: 21
  }
}, {
  path: '/page/user/MobileInfoLogin',
  name: 'MobileInfoLogin',
  component: src_page_user_MobileInfoLogin,
  meta: {
    index: 22
  }
}, {
  path: '/page/user/MobileInfoVerification',
  name: 'MobileInfoVerification',
  component: src_page_user_MobileInfoVerification,
  meta: {
    index: 23
  }
}, {
  path: '/page/take_photo/Message',
  name: 'Message',
  component: src_page_take_photo_Message,
  meta: {
    index: 24
  }
}, {
  path: '/page/release/ReleaseImgEdit',
  name: 'ReleaseImgEdit',
  component: src_page_release_ReleaseImgEdit,
  meta: {
    index: 25
  }
}, {
  path: '/page/release/Release',
  name: 'Release',
  component: src_page_release_Release,
  meta: {
    index: 26
  }
}, {
  path: '/page/release/SelectAddress',
  name: 'SelectAddress',
  component: src_page_release_SelectAddress,
  meta: {
    index: 27
  }
}, {
  path: '/page/release/SelectLabel',
  name: 'SelectLabel',
  component: src_page_release_SelectLabel,
  meta: {
    index: 28
  }
}]);
// CONCATENATED MODULE: ./src/store/index.js


vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);
var store_state = { //要设置的全局访问的state对象
  //要设置的初始属性值
  userInfo: {}
};
var getters = {
  //实时监听state值的变化(最新状态)
  userInfo: function userInfo(state) {
    //方法名随意,主要是来承载变化的userInfo的值
    return state.userInfo;
  }
};
var mutations = {
  updateUserInfo: function updateUserInfo(state, userInfo) {
    //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.userInfo = userInfo;
  }
};
var actions = {
  updateUserInfo: function updateUserInfo(context) {
    //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('userInfo');
  }
};
var store = new vuex_esm["a" /* default */].Store({
  state: store_state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./node_modules/vue-scroller/dist/vue-scroller.min.js
var vue_scroller_min = __webpack_require__("POcy");
var vue_scroller_min_default = /*#__PURE__*/__webpack_require__.n(vue_scroller_min);

// EXTERNAL MODULE: ./node_modules/vux/src/plugins/alert/index.js + 1 modules
var plugins_alert = __webpack_require__("Peep");

// EXTERNAL MODULE: ./node_modules/vux/src/plugins/toast/index.js
var plugins_toast = __webpack_require__("3BeM");

// EXTERNAL MODULE: ./node_modules/vux/src/plugins/loading/index.js
var loading = __webpack_require__("Y+qm");

// EXTERNAL MODULE: ./node_modules/vux/src/plugins/confirm/index.js
var plugins_confirm = __webpack_require__("NXWw");

// CONCATENATED MODULE: ./src/main.js











vue_esm["a" /* default */].use(wechatAuth, { appid: 'wx4ec18e420fe44790' });
vue_esm["a" /* default */].use(vue_scroller_min_default.a);






vue_esm["a" /* default */].use(plugins_confirm["a" /* default */]);
vue_esm["a" /* default */].use(plugins_toast["a" /* default */], { position: 'center' });
vue_esm["a" /* default */].use(plugins_alert["a" /* default */]);
vue_esm["a" /* default */].use(loading["a" /* default */]);

vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
var main_router = new vue_router_esm["a" /* default */]({
  routes: src_router
});
fastclick_default.a.attach(document.body);

vue_esm["a" /* default */].config.productionTip = false;
/* eslint-disable no-new */

document.addEventListener('deviceready', function () {
  new vue_esm["a" /* default */]({
    router: main_router,
    store: src_store,
    render: function render(h) {
      return h(src_App);
    }
  }).$mount('#app-box');
  window.navigator.splashscreen.hide();
}, false);

/***/ }),

/***/ "Ozxy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QNAn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Qt30":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RrsV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TEg0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Tkzw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U4t6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UIt7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VXwM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WZUF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XKpp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YxJB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var flexbox = ({
  name: 'flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles: function styles() {
      var styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var flexbox_flexbox = ({
  name: 'flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles: function styles() {
      var styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28eb4a1c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/flexbox/flexbox.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-flexbox",class:{
  'vux-flex-col': _vm.orient === 'vertical',
  'vux-flex-row': _vm.orient === 'horizontal'
},style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_flexbox_flexbox = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/flexbox/flexbox.vue
function injectStyle (ssrContext) {
  __webpack_require__("UIt7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  flexbox_flexbox,
  components_flexbox_flexbox,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_flexbox_flexbox = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ZmDO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Zvmn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cvDh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fNHR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g1BM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g5WP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hGV1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jNmg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jnM/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lOIT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "m3lC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mL5d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mzja":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vux/src/components/x-dialog/index.vue + 3 modules
var x_dialog = __webpack_require__("/kga");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/alert/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_alert = ({
  name: 'alert',
  components: {
    XDialog: x_dialog["a" /* default */]
  },
  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value;
    }
  },

  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    maskZIndex: [Number, String]
  },
  data: function data() {
    return {
      showValue: false
    };
  },

  methods: {
    _onHide: function _onHide() {
      this.showValue = false;
    }
  },
  watch: {
    value: function value(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('input', val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/alert/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var src_components_alert = ({
  name: 'alert',
  components: {
    XDialog: x_dialog["a" /* default */]
  },
  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value;
    }
  },

  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    maskZIndex: [Number, String]
  },
  data: function data() {
    return {
      showValue: false
    };
  },

  methods: {
    _onHide: function _onHide() {
      this.showValue = false;
    }
  },
  watch: {
    value: function value(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('input', val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0222073a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/alert/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-alert"},[_c('x-dialog',{attrs:{"mask-transition":_vm.maskTransition,"dialog-transition":_vm.dialogTransition,"hide-on-blur":_vm.hideOnBlur,"mask-z-index":_vm.maskZIndex},on:{"on-hide":function($event){return _vm.$emit('on-hide')},"on-show":function($event){return _vm.$emit('on-show')}},model:{value:(_vm.showValue),callback:function ($$v) {_vm.showValue=$$v},expression:"showValue"}},[_c('div',{staticClass:"weui-dialog__hd"},[_c('strong',{staticClass:"weui-dialog__title"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"weui-dialog__bd"},[_vm._t("default",[_c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}})])],2),_vm._v(" "),_c('div',{staticClass:"weui-dialog__ft"},[_c('a',{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{"href":"javascript:;"},on:{"click":_vm._onHide}},[_vm._v(_vm._s(_vm.buttonText || '确定'))])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var vux_src_components_alert = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/alert/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("L3+R")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  src_components_alert,
  vux_src_components_alert,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ var node_modules_vux_src_components_alert = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "oWJf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ob0I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rLAy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/safari-fix.js
var safari_fix = __webpack_require__("xNvf");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/toast/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var toast = ({
  name: 'toast',
  mixins: [safari_fix["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data: function data() {
    return {
      show: false
    };
  },
  created: function created() {
    if (this.value) {
      this.show = true;
    }
  },

  computed: {
    currentTransition: function currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass: function toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style: function style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          _this.show = false;
          _this.$emit('input', false);
          _this.$emit('on-hide');
          _this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value: function value(val) {
      this.show = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/toast/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_toast = ({
  name: 'toast',
  mixins: [safari_fix["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data: function data() {
    return {
      show: false
    };
  },
  created: function created() {
    if (this.value) {
      this.show = true;
    }
  },

  computed: {
    currentTransition: function currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass: function toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style: function style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          _this.show = false;
          _this.$emit('input', false);
          _this.$emit('on-hide');
          _this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value: function value(val) {
      this.show = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25afd1ad","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/toast/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-toast"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMask && _vm.show),expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),_vm._v(" "),_c('transition',{attrs:{"name":_vm.currentTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-toast",class:_vm.toastClass,style:({width: _vm.width})},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.type !== 'text'),expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),_vm._v(" "),(_vm.text)?_c('p',{staticClass:"weui-toast__content",style:(_vm.style),domProps:{"innerHTML":_vm._s(_vm.text)}}):_c('p',{staticClass:"weui-toast__content",style:(_vm.style)},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_toast = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/toast/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("g5WP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_toast,
  src_components_toast,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_toast = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "s99l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vQRc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wnd2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "z/Mi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.be09e6f2edd3b74bc244.js.map