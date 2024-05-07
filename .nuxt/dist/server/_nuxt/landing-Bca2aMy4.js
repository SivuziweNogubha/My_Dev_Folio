import { _ as __nuxt_component_0 } from "./Container-CxiH9pcA.js";
import { ref, withCtx, unref, createVNode, openBlock, createBlock, withDirectives, vShow, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const menuitems = [
      {
        title: "Portfolio",
        path: "/portfolio"
      },
      {
        title: "About",
        path: "/about"
      },
      {
        title: "Contact me",
        path: "/contact"
      },
      {
        title: "Resume",
        path: "/resume"
      }
    ];
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="flex flex-col lg:flex-row justify-between items-center p-6 md:px-24"${_scopeId}><div class="flex w-full lg:w-auto items-center justify-between"${_scopeId}><a href="/" class="text-2xl"${_scopeId}><span class="font-bold text-slate-800"${_scopeId}>Dev</span><span class="text-slate-500"${_scopeId}>Folio</span></a><div class="block lg:hidden"${_scopeId}><button class="text-black"${_scopeId}><svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><title${_scopeId}>Menu</title><path style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"${_scopeId}></path><path style="${ssrRenderStyle(!unref(open) ? null : { display: "none" })}" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"${_scopeId}></path></svg></button></div></div><nav class="${ssrRenderClass([{ block: unref(open), hidden: !unref(open) }, "w-full lg:w-auto mt-2 lg:flex lg:mt-0"])}"${_scopeId}><ul class="flex flex-col lg:flex-row lg:gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(menuitems, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.path)} class="transition-transform transform flex lg:px-3 py-2 text-black hover:text-white border-b-4 border-b-red-500 hover:bg-red-500 hover:rounded-full font-semibold text-lg"${_scopeId}>${ssrInterpolate(item.title)}</a></li>`);
            });
            _push2(`<!--]--></ul></nav></header>`);
          } else {
            return [
              createVNode("header", { class: "flex flex-col lg:flex-row justify-between items-center p-6 md:px-24" }, [
                createVNode("div", { class: "flex w-full lg:w-auto items-center justify-between" }, [
                  createVNode("a", {
                    href: "/",
                    class: "text-2xl"
                  }, [
                    createVNode("span", { class: "font-bold text-slate-800" }, "Dev"),
                    createVNode("span", { class: "text-slate-500" }, "Folio")
                  ]),
                  createVNode("div", { class: "block lg:hidden" }, [
                    createVNode("button", {
                      onClick: ($event) => open.value = !unref(open),
                      class: "text-black"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "currentColor",
                        class: "w-4 h-4",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("title", null, "Menu"),
                        withDirectives(createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                        }, null, 512), [
                          [vShow, unref(open)]
                        ]),
                        withDirectives(createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                        }, null, 512), [
                          [vShow, !unref(open)]
                        ])
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("nav", {
                  class: ["w-full lg:w-auto mt-2 lg:flex lg:mt-0", { block: unref(open), hidden: !unref(open) }]
                }, [
                  createVNode("ul", { class: "flex flex-col lg:flex-row lg:gap-3" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(menuitems, (item) => {
                      return createVNode("li", null, [
                        createVNode("a", {
                          href: item.path,
                          class: "transition-transform transform flex lg:px-3 py-2 text-black hover:text-white border-b-4 border-b-red-500 hover:bg-red-500 hover:rounded-full font-semibold text-lg"
                        }, toDisplayString(item.title), 9, ["href"])
                      ]);
                    }), 64))
                  ])
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  landing as default
};
//# sourceMappingURL=landing-Bca2aMy4.js.map
