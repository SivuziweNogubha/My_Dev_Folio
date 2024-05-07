import { _ as __nuxt_component_0 } from "./Container-CxiH9pcA.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "resume",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col min-h-screen items-center justify-center md:px-20 px-16"${_scopeId}><h1 class="text-3xl font-bold text-gray-800 mb-8"${_scopeId}>My Resume</h1><p class="text-lg text-gray-800 mb-8 mt-8"${_scopeId}> As a skilled Full Stack Developer with experience in building web applications, I bring a unique blend of technical expertise and creative problem-solving skills to every project. Let my passion for coding and dedication to excellence help you achieve your goals. </p><a href="SivuziweNogubhaCv.pdf" type="application/pdf" download class="mt-10 hover:text-red-500 text-black border-b-4 border-b-red-500 font-bold py-2 px-4 rounded transition duration-300"${_scopeId}> Download Resume (PDF) </a></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col min-h-screen items-center justify-center md:px-20 px-16" }, [
                createVNode("h1", { class: "text-3xl font-bold text-gray-800 mb-8" }, "My Resume"),
                createVNode("p", { class: "text-lg text-gray-800 mb-8 mt-8" }, " As a skilled Full Stack Developer with experience in building web applications, I bring a unique blend of technical expertise and creative problem-solving skills to every project. Let my passion for coding and dedication to excellence help you achieve your goals. "),
                createVNode("a", {
                  href: "SivuziweNogubhaCv.pdf",
                  type: "application/pdf",
                  download: "",
                  class: "mt-10 hover:text-red-500 text-black border-b-4 border-b-red-500 font-bold py-2 px-4 rounded transition duration-300"
                }, " Download Resume (PDF) ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=resume-DDPaygQn.js.map
