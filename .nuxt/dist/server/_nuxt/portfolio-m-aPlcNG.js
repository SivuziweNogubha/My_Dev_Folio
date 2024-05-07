import { _ as __nuxt_component_0 } from "./Container-CxiH9pcA.js";
import { _ as _sfc_main$1 } from "./Sectionhead-DVa-fJRR.js";
import { withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "Football Match Predictor with Python",
        description: "Developed a full-fledged model which is capable of predicting football match outcomes",
        technologies: "Python, jmespath, pandas, matplotlib"
      },
      {
        title: "A Craigslist for local townships(Local konnect)",
        description: "Designed and built a mobile application for allowing people at small Townships to be able to enlist/ signup as either a Service provider or someone who is seeking service from service providers(e.g gardening services, barber, plumbing services, technicians etc.)",
        technologies: "Flutter, Dart for front-end and firebase for back-end"
      },
      {
        title: "Dev Folio Integration API",
        description: "Created an API for Dev Folio to facilitate seamless integration with recruiting platforms, allowing recruiters to access and manage candidate data more efficiently. Implemented authentication and authorization mechanisms to ensure data security and privacy.",
        technologies: "Node.js, Express, MongoDB, JWT"
      }
    ];
    const certifications = [
      "HackerRank - Programming using python",
      "HackerRank - Programming using java",
      "Sololearn - Java OOP course",
      "Sololearn - Java fundamentals"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Portfolio`);
                } else {
                  return [
                    createTextVNode("Portfolio")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Explore my projects and certifications.`);
                } else {
                  return [
                    createTextVNode("Explore my projects and certifications.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-8 md:mx-auto mx-12 max-w-4xl mt-16"${_scopeId}><h2 class="font-bold text-3xl text-gray-800 border-b-2 border-b-red-600"${_scopeId}>Projects</h2><!--[-->`);
            ssrRenderList(projects, (project, index) => {
              _push2(`<div class="mt-6"${_scopeId}><h3 class="font-semibold text-xl text-gray-800"${_scopeId}>${ssrInterpolate(project.title)}</h3><p class="text-gray-600 mt-2"${_scopeId}>${ssrInterpolate(project.description)}</p><p class="mt-2 font-bold text-red-600"${_scopeId}><span class="text-gray-800 font-normal"${_scopeId}>Technologies Used:</span> ${ssrInterpolate(project.technologies)}</p></div>`);
            });
            _push2(`<!--]--><h2 class="font-bold text-3xl text-gray-800 mt-12 border-b-2 border-b-red-600"${_scopeId}>Certifications</h2><ul class="list-disc list-inside text-gray-600 mt-4 mb-12"${_scopeId}><!--[-->`);
            ssrRenderList(certifications, (certification, index) => {
              _push2(`<li${_scopeId}>${ssrInterpolate(certification)}</li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("Portfolio")
                ]),
                desc: withCtx(() => [
                  createTextVNode("Explore my projects and certifications.")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col gap-8 md:mx-auto mx-12 max-w-4xl mt-16" }, [
                createVNode("h2", { class: "font-bold text-3xl text-gray-800 border-b-2 border-b-red-600" }, "Projects"),
                (openBlock(), createBlock(Fragment, null, renderList(projects, (project, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "mt-6"
                  }, [
                    createVNode("h3", { class: "font-semibold text-xl text-gray-800" }, toDisplayString(project.title), 1),
                    createVNode("p", { class: "text-gray-600 mt-2" }, toDisplayString(project.description), 1),
                    createVNode("p", { class: "mt-2 font-bold text-red-600" }, [
                      createVNode("span", { class: "text-gray-800 font-normal" }, "Technologies Used:"),
                      createTextVNode(" " + toDisplayString(project.technologies), 1)
                    ])
                  ]);
                }), 64)),
                createVNode("h2", { class: "font-bold text-3xl text-gray-800 mt-12 border-b-2 border-b-red-600" }, "Certifications"),
                createVNode("ul", { class: "list-disc list-inside text-gray-600 mt-4 mb-12" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(certifications, (certification, index) => {
                    return createVNode("li", { key: index }, toDisplayString(certification), 1);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=portfolio-m-aPlcNG.js.map
