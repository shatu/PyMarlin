(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||s;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},827:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return o},default:function(){return u}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),l={sidebar_label:"basic_stats",title:"utils.stats.basic_stats"},i={unversionedId:"reference/utils/stats/basic_stats",id:"reference/utils/stats/basic_stats",isDocsHomePage:!1,title:"utils.stats.basic_stats",description:"Basic Stats module.",source:"@site/docs/reference/utils/stats/basic_stats.md",sourceDirName:"reference/utils/stats",slug:"/reference/utils/stats/basic_stats",permalink:"/docs/reference/utils/stats/basic_stats",editUrl:"https://github.com/microsoft/PyMarlin/edit/master/website/docs/reference/utils/stats/basic_stats.md",version:"current",sidebar_label:"basic_stats",frontMatter:{sidebar_label:"basic_stats",title:"utils.stats.basic_stats"},sidebar:"referenceSideBar",previous:{title:"utils.misc.misc_utils",permalink:"/docs/reference/utils/misc/misc_utils"},next:{title:"utils.writer",permalink:"/docs/reference/utils/writer/__init__"}},o=[{value:"StatInitArguments Objects",id:"statinitarguments-objects",children:[]},{value:"BasicStats Objects",id:"basicstats-objects",children:[]}],p={toc:o};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Basic Stats module."),(0,s.kt)("h2",{id:"statinitarguments-objects"},"StatInitArguments Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@dataclasses.dataclass\nclass StatInitArguments()\n")),(0,s.kt)("p",null,"Stats Arguments."),(0,s.kt)("h2",{id:"basicstats-objects"},"BasicStats Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class BasicStats()\n")),(0,s.kt)("p",null,"Basis Stats class provides a common place for collects long interval stats and step interval\nstats that can be recorded in the various writers provided at the time of calling rebuild()\nin trainer. This class is used as a Singleton pattern via global_stats provided in the\n",(0,s.kt)("strong",{parentName:"p"},"init"),".py file."),(0,s.kt)("h4",{id:"rebuild"},"rebuild"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | rebuild(args: StatInitArguments, writers: Iterable)\n")),(0,s.kt)("p",null,"Rebuild Stat Args and Writers."),(0,s.kt)("h4",{id:"reset"},"reset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | reset()\n")),(0,s.kt)("p",null,"Reset all stats."),(0,s.kt)("h4",{id:"reset_short"},"reset","_","short"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | reset_short()\n")),(0,s.kt)("p",null,"Reset step interval stats."),(0,s.kt)("h4",{id:"reset_long"},"reset","_","long"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | reset_long()\n")),(0,s.kt)("p",null,"Reset long interval stats."),(0,s.kt)("h4",{id:"update"},"update"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update(k, v, frequent=False)\n")),(0,s.kt)("p",null,"Update step interval and long interval scalar stats."),(0,s.kt)("h4",{id:"update_multi"},"update","_","multi"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_multi(k, v: dict, frequent=False)\n")),(0,s.kt)("p",null,"Update step interval and long interval multiple scalar stats."),(0,s.kt)("h4",{id:"update_matplotlib_figure"},"update","_","matplotlib","_","figure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_matplotlib_figure(fig, tag)\n")),(0,s.kt)("p",null,"Update matplotlib figure."),(0,s.kt)("h4",{id:"update_image"},"update","_","image"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_image(k, v, dataformats='HW')\n")),(0,s.kt)("p",null,"Update image.\nWill be logged with infrequent metric."),(0,s.kt)("h4",{id:"update_pr"},"update","_","pr"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_pr(k, preds, labels)\n")),(0,s.kt)("p",null,"Update pr curve stats.\nOnly binary classification\npreds = probabilities"),(0,s.kt)("h4",{id:"update_histogram"},"update","_","histogram"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_histogram(k, vals, extend=False)\n")),(0,s.kt)("p",null,"Update histogram stats."),(0,s.kt)("h4",{id:"update_embedding"},"update","_","embedding"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_embedding(k, embs, labels)\n")),(0,s.kt)("p",null,"Update embeddings.\nUsed to project embeddings with corresponding labels (numerical)."),(0,s.kt)("h4",{id:"update_system_stats"},"update","_","system","_","stats"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | update_system_stats()\n")),(0,s.kt)("p",null,"Update system stats related to Memory and Compute (CPU and GPUs) usage."),(0,s.kt)("h4",{id:"log_long_stats"},"log","_","long","_","stats"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | log_long_stats(step)\n")),(0,s.kt)("p",null,"Log long interval stats to correponding writers."),(0,s.kt)("h4",{id:"log_args"},"log","_","args"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | log_args(args)\n")),(0,s.kt)("p",null,"Log Arguments to correponding writers."),(0,s.kt)("h4",{id:"log_model"},"log","_","model"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | log_model(step, model, force=False, grad_scale=1)\n")),(0,s.kt)("p",null,"Log model to correponding writers."),(0,s.kt)("h4",{id:"log_graph"},"log","_","graph"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | log_graph(model, device)\n")),(0,s.kt)("p",null,"Log graph to correponding writers."),(0,s.kt)("h4",{id:"finish"},"finish"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | finish()\n")),(0,s.kt)("p",null,"Call finish() on all writers."))}u.isMDXComponent=!0}}]);