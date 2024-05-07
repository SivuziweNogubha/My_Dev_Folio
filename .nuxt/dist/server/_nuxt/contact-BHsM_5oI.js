import { _ as __nuxt_component_0 } from "./Container-CxiH9pcA.js";
import { _ as _sfc_main$3 } from "./Sectionhead-DVa-fJRR.js";
import __nuxt_component_0$1 from "./Icon-BCWiBray.js";
import { defineComponent, mergeProps, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "./index-CKGQAsA0.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    size: { default: "md" },
    block: { type: Boolean },
    styleName: { default: "primary" },
    className: {}
  },
  setup(__props) {
    const sizes = {
      md: "px-5 py-2.5",
      lg: "px-6 py-3"
    };
    const styles = {
      outline: "border-2 border-black hover:bg-black text-black hover:text-white",
      primary: "bg-red-600 black text-white hover:bg-black  border-2 border-transparent"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
          _ctx.block && "w-full",
          sizes[_ctx.size],
          styles[_ctx.styleName],
          _ctx.className
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Button.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Contactform",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingButton = _sfc_main$2;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "https://api.web3forms.com/submit",
        method: "POST",
        id: "form",
        class: "needs-validation",
        novalidate: ""
      }, _attrs))}><input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"><input type="checkbox" class="hidden" style="${ssrRenderStyle({ "display": "none" })}" name="botcheck"><div class="mb-5"><input type="text" placeholder="Full Name" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-red-600 ring-gray-100" name="name"><div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"> Please provide your full name. </div></div><div class="mb-5"><label for="email_address" class="sr-only">Email Address</label><input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-red-600 ring-gray-100"><div class="empty-feedback text-red-400 text-sm mt-1"> Please provide your email address. </div><div class="invalid-feedback text-red-400 text-sm mt-1"> Please provide a valid email address. </div></div><div class="mb-3"><textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-red-600 ring-gray-100"></textarea><div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"> How can I help you? </div></div>`);
      _push(ssrRenderComponent(_component_LandingButton, {
        type: "submit",
        size: "lg",
        block: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send Message`);
          } else {
            return [
              createTextVNode("Send Message")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="result" class="mt-3 text-center"></div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Contactform.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$3;
      const _component_Icon = __nuxt_component_0$1;
      const _component_LandingContactform = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Me`);
                } else {
                  return [
                    createTextVNode("Contact Me")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`This is the part where we collaborate. I am here for you.`);
                } else {
                  return [
                    createTextVNode("This is the part where we collaborate. I am here for you.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid md:grid-cols-2 gap-10 md:mx-auto mx-10 md:max-w-4xl mt-16"${_scopeId}><div${_scopeId}><h2 class="font-medium text-2xl text-gray-800"${_scopeId}> Contact Sivuziwe </h2><p class="text-lg leading-relaxed text-gray-800 mt-3"${_scopeId}> I&#39;m your go-to Full Stack Developer! Whether you need assistance with a project or have a question, feel free to reach out by filling out the form below or sending me an email. And don&#39;t worry, I&#39;m a quick replier! </p><div class="mt-5"${_scopeId}><div class="flex items-center mt-2 space-x-2 text-gray-600"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-gray-400 w-4 h-4",
              name: "uil:map-marker"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Gauteng, Sandton, 10 eaton avenue</span></div><div class="flex items-center mt-2 space-x-2 text-gray-600"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-gray-400 w-4 h-4",
              name: "uil:envelope"
            }, null, _parent2, _scopeId));
            _push2(`<a href="mailto:jakobaichmayr@gmail.com"${_scopeId}>nogubhamavij@gmail.com</a></div></div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LandingContactform, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("Contact Me")
                ]),
                desc: withCtx(() => [
                  createTextVNode("This is the part where we collaborate. I am here for you.")
                ]),
                _: 1
              }),
              createVNode("div", { class: "grid md:grid-cols-2 gap-10 md:mx-auto mx-10 md:max-w-4xl mt-16" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "font-medium text-2xl text-gray-800" }, " Contact Sivuziwe "),
                  createVNode("p", { class: "text-lg leading-relaxed text-gray-800 mt-3" }, " I'm your go-to Full Stack Developer! Whether you need assistance with a project or have a question, feel free to reach out by filling out the form below or sending me an email. And don't worry, I'm a quick replier! "),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode("div", { class: "flex items-center mt-2 space-x-2 text-gray-600" }, [
                      createVNode(_component_Icon, {
                        class: "text-gray-400 w-4 h-4",
                        name: "uil:map-marker"
                      }),
                      createVNode("span", null, "Gauteng, Sandton, 10 eaton avenue")
                    ]),
                    createVNode("div", { class: "flex items-center mt-2 space-x-2 text-gray-600" }, [
                      createVNode(_component_Icon, {
                        class: "text-gray-400 w-4 h-4",
                        name: "uil:envelope"
                      }),
                      createVNode("a", { href: "mailto:jakobaichmayr@gmail.com" }, "nogubhamavij@gmail.com")
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_LandingContactform)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-BHsM_5oI.js.map
