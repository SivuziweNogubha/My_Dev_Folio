import { _ as __nuxt_component_0 } from './Container-CxiH9pcA.mjs';
import __nuxt_component_0$1 from './Icon-BCWiBray.mjs';
import { withCtx, createVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './josh-J5cj4Jpy.mjs';
import { _ as _export_sfc } from './server.mjs';
import './index-CKGQAsA0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-2 place-items-center md:pt-8" }, _attrs))}><div class="md:p-24 md:order-1 mx-36"><img class="rounded-full transition-transform transform hover:scale-120"${ssrRenderAttr("src", _imports_0)} alt="Starship starts the engine" loading="eager" format="avif" width="512" height="512"></div><div class="p-10"><h1 class="text-6xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight animate-bounce"> Sivuziwe Nogubha </h1><hr class="border-b-4 border-b-red-600"><p class="text-lg mt-4 text-black max-w-xl"> I am a customer focused, goal-driven, and enthusiastic man. I am eager to exercise my industry experience to gain more technical skills in a challenging work environment while contributing to meet deadlines and produce deliverables expected of me. I enjoy working with and being part of a successful productive team, but also thrive in individual projects. I aim to make meaningful contribution to the organization success when given an opportunity. Read more <a href="/about" class="underline font-bold">about me</a> and explore <a href="/portfolio" class="underline font-bold">my projects</a>. </p><div class="mt-6 flex flex-col sm:flex-row gap-3 text-gray-500"><div class="flex justify-center mt-4 mb-6"><a href="https://instagram.com/your-twitter-handle" target="_blank" rel="noopener" class="mr-4 border-b-2 border-b-red-600">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "text-black hover:text-red-600",
    name: "bx:bxl-twitter",
    size: "24"
  }, null, _parent));
  _push(`</a><a href="https://linkedin.com/in/sivuziwe-nogubha-2b3979212" target="_blank" rel="noopener" class="mr-4 border-b-2 border-b-red-600">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "text-black hover:text-red-600",
    name: "bx:bxl-linkedin",
    size: "24"
  }, null, _parent));
  _push(`</a><a href="https://github.com/SivuziweNogubha" target="_blank" rel="noopener" class="mr-4 border-b-2 border-b-red-600">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "text-black hover:text-blue-600",
    name: "bx:bxl-github",
    size: "24"
  }, null, _parent));
  _push(`</a></div></div><div>DevFolio developed by <a class="font-semibold text-red-700 italic" href="https://github.com/SivuziweNogubha" target="_blank" rel="noopener">sivuziwenogubha</a></div></div></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingHero = __nuxt_component_1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingHero, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingHero)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cf1H_1N7.mjs.map
