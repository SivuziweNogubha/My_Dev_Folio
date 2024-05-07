import { _ as __nuxt_component_0 } from "./Container-CxiH9pcA.js";
import { _ as _sfc_main$1 } from "./Sectionhead-DVa-fJRR.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./josh-J5cj4Jpy.js";
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`About Me`);
                } else {
                  return [
                    createTextVNode("About Me")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col md:flex-row gap-8 items-center mx-auto max-w-4xl mt-12 text-gray-800"${_scopeId}><div class="md:w-1/2 w-96"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="John Wick" class="h-96 w-80 rounded-lg shadow-lg"${_scopeId}></div><div class="md:w-1/2 w-96"${_scopeId}><h2 class="font-bold text-3xl"${_scopeId}>Sivuziwe Nogubha</h2><p class="text-lg leading-relaxed mt-4 border-b-2 border-b-red-500"${_scopeId}> Full Stack Developer, UX Design, Football Fanatic, Anime Fanatic </p><p class="text-lg text-gray-800 leading-relaxed mt-4"${_scopeId}> Two years ago, I embarked on a journey with no prior coding experience. Despite being a high school graduate without university education, I was determined to learn and grow in the field of software development. Through constant learning and seizing the opportunity to join the WeThinkCode program, I started gaining valuable coding experience. </p><p class="text-lg text-gray-800 leading-relaxed mt-4"${_scopeId}> I immersed myself in various programming languages such as Python and Java, and even dabbled in using APIs like Google Calendar. Surprisingly, I found myself excelling in coding, often jokingly saying that I can code better than university graduates. It&#39;s been an incredible journey filled with challenges and triumphs, and I&#39;m excited for what lies ahead in my coding career. </p></div></div><div class="mt-4 mb-6 items-center justify-center mx-10 md:mx-auto md:max-w-4xl border-t-2"${_scopeId}><h3 class="font-bold text-xl mt-8"${_scopeId}>Education</h3><p class="text-lg text-gray-800 leading-relaxed mt-4"${_scopeId}> Wethink Code - 2024 </p><h3 class="font-bold text-xl mt-8"${_scopeId}>Skills</h3><ul class="list-disc text-base text-gray-800 leading-relaxed mt-4 ml-8"${_scopeId}><li${_scopeId}><span class="font-bold text-lg"${_scopeId}>Languages:</span> JavaScript, Python, Java</li><li${_scopeId}><span class="font-bold text-lg"${_scopeId}>Frontend:</span> Flutter, HTML/CSS, Tailwind CSS</li><li${_scopeId}><span class="font-bold text-lg"${_scopeId}>Backend:</span> Node.js, Django, Flask</li><li${_scopeId}><span class="font-bold text-lg"${_scopeId}>Databases:</span> MongoDB, PostgreSQL, MySQL</li><li${_scopeId}><span class="font-bold text-lg"${_scopeId}>Tools &amp; Technologies:</span> Git, Docker, RESTful APIs, GraphQL</li><li${_scopeId}><span class="font-bold text-lg"${_scopeId}>UI/UX Design:</span> Figma, Adobe XD, Sketch</li></ul><h3 class="font-bold text-xl mt-8"${_scopeId}>Experience</h3><div class="text-lg text-gray-800 leading-relaxed mt-4"${_scopeId}><p class="border-b-2 border-b-red-500"${_scopeId}>Full Stack Developer | WeThinkCode_ | 2022 - Present</p><ul class="list-disc pl-8 text-base"${_scopeId}><li${_scopeId}>Led the development of a responsive website using Next.js and TypeScript, resulting in improved performance and user engagement.</li><li${_scopeId}>Designed and implemented a mobile app for allowing Service providers in a small Township to be able advertise and leverage their skills to people who are in need of a service.</li><li${_scopeId}>Developed an API for Dev Folio to facilitate easy integration for recruiters, enabling seamless communication and data exchange.</li></ul></div></div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("About Me")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col md:flex-row gap-8 items-center mx-auto max-w-4xl mt-12 text-gray-800" }, [
                createVNode("div", { class: "md:w-1/2 w-96" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "John Wick",
                    class: "h-96 w-80 rounded-lg shadow-lg"
                  })
                ]),
                createVNode("div", { class: "md:w-1/2 w-96" }, [
                  createVNode("h2", { class: "font-bold text-3xl" }, "Sivuziwe Nogubha"),
                  createVNode("p", { class: "text-lg leading-relaxed mt-4 border-b-2 border-b-red-500" }, " Full Stack Developer, UX Design, Football Fanatic, Anime Fanatic "),
                  createVNode("p", { class: "text-lg text-gray-800 leading-relaxed mt-4" }, " Two years ago, I embarked on a journey with no prior coding experience. Despite being a high school graduate without university education, I was determined to learn and grow in the field of software development. Through constant learning and seizing the opportunity to join the WeThinkCode program, I started gaining valuable coding experience. "),
                  createVNode("p", { class: "text-lg text-gray-800 leading-relaxed mt-4" }, " I immersed myself in various programming languages such as Python and Java, and even dabbled in using APIs like Google Calendar. Surprisingly, I found myself excelling in coding, often jokingly saying that I can code better than university graduates. It's been an incredible journey filled with challenges and triumphs, and I'm excited for what lies ahead in my coding career. ")
                ])
              ]),
              createVNode("div", { class: "mt-4 mb-6 items-center justify-center mx-10 md:mx-auto md:max-w-4xl border-t-2" }, [
                createVNode("h3", { class: "font-bold text-xl mt-8" }, "Education"),
                createVNode("p", { class: "text-lg text-gray-800 leading-relaxed mt-4" }, " Wethink Code - 2024 "),
                createVNode("h3", { class: "font-bold text-xl mt-8" }, "Skills"),
                createVNode("ul", { class: "list-disc text-base text-gray-800 leading-relaxed mt-4 ml-8" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold text-lg" }, "Languages:"),
                    createTextVNode(" JavaScript, Python, Java")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold text-lg" }, "Frontend:"),
                    createTextVNode(" Flutter, HTML/CSS, Tailwind CSS")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold text-lg" }, "Backend:"),
                    createTextVNode(" Node.js, Django, Flask")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold text-lg" }, "Databases:"),
                    createTextVNode(" MongoDB, PostgreSQL, MySQL")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold text-lg" }, "Tools & Technologies:"),
                    createTextVNode(" Git, Docker, RESTful APIs, GraphQL")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-bold text-lg" }, "UI/UX Design:"),
                    createTextVNode(" Figma, Adobe XD, Sketch")
                  ])
                ]),
                createVNode("h3", { class: "font-bold text-xl mt-8" }, "Experience"),
                createVNode("div", { class: "text-lg text-gray-800 leading-relaxed mt-4" }, [
                  createVNode("p", { class: "border-b-2 border-b-red-500" }, "Full Stack Developer | WeThinkCode_ | 2022 - Present"),
                  createVNode("ul", { class: "list-disc pl-8 text-base" }, [
                    createVNode("li", null, "Led the development of a responsive website using Next.js and TypeScript, resulting in improved performance and user engagement."),
                    createVNode("li", null, "Designed and implemented a mobile app for allowing Service providers in a small Township to be able advertise and leverage their skills to people who are in need of a service."),
                    createVNode("li", null, "Developed an API for Dev Folio to facilitate easy integration for recruiters, enabling seamless communication and data exchange.")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BepCIZQ6.js.map
