webpackJsonp([3],{123:function(a,t,n){var e=n(23)(n(166),n(194),null,null);a.exports=e.exports},153:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(a){return a&&a.isClient?{path:this.getPath()}:{path:""}},methods:{getPath:function(){return window.location.path.split("/").slice(1)}}}},154:function(a,t,n){t=a.exports=n(61)(void 0),t.push([a.i,".menu{overflow:hidden}.menu a{display:table;background:#000;padding:10px;margin:10px;font-size:40px;color:#fff;border:4px solid #000;animation:slide 1s forwards;transition:all .15s ease-in}@keyframe slide{0%{transfor:translateX(-100%)}1000%{transfor:translateX(0)}}.menu a:hover{color:#000;border-color:#000;background:#fff;margin-left:20px}",""])},155:function(a,t,n){t=a.exports=n(61)(void 0),t.push([a.i,".title[data-v-739682cb]{animation:slideLogo 1s forwards;margin-bottom:10px}h1[data-v-739682cb]{display:inline-block;clear:both;margin:0 0 10px;background:#000;color:#fff;padding:10px 20px;z-index:333;font-weight:400;overflow:hidden}#__nuxt[server-rendered] h1[data-v-739682cb]{-ms-transform:translateY(100%);transform:translateY(100%);display:none}@keyframes slideLogo{0%{transform:translateY(100%);display:none}1%{display:block}to{transform:translateY(0)}}.aka span[data-v-739682cb]{padding:0 10px}.aka[data-v-739682cb]{display:block;float:right;font-size:30px;margin-bottom:15px}@media(max-width:600px){.aka[data-v-739682cb]{display:none}}.aka>span[data-v-739682cb]{background:#fff;color:#000;border:2px solid #000;padding-right:0}.aka>span>span[data-v-739682cb]{background:#000;color:#fff}.passions[data-v-739682cb]{overflow:hidden}.passions span[data-v-739682cb]{line-height:50px;font-size:30px;background:#000;color:#fff;margin:0 10px 0 0;padding:10px;display:inline-block;margin-bottom:10px}",""])},157:function(a,t,n){n(162);var e=n(23)(null,n(160),"data-v-739682cb",null);a.exports=e.exports},158:function(a,t,n){n(161);var e=n(23)(n(153),n(159),null,null);a.exports=e.exports},159:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"menu"},[n("nuxt-link",{attrs:{to:"/blog"}},[a._v("Thoughts")]),n("nuxt-link",{attrs:{to:"/experience"}},[a._v("Experiences")]),n("nuxt-link",{attrs:{to:"/me"}},[a._v("Me")])],1)},staticRenderFns:[]}},160:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},staticRenderFns:[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("div",{staticClass:"title"},[n("a",{attrs:{href:"/"}},[n("h1",[a._v("Mauro Mandracchia")]),n("div",{staticClass:"aka"},[n("span",[a._v("aka "),n("span",[a._v("ideabile")])])]),n("div",{staticClass:"passions"},[n("span",[a._v("web")]),n("span",[a._v("cloud apps")]),n("span",[a._v("mobile")]),n("span",[a._v("graphics")])])])])])}]}},161:function(a,t,n){var e=n(154);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n(62)("2be0d477",e,!0)},162:function(a,t,n){var e=n(155);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n(62)("46b2cafa",e,!0)},166:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(158),o=n.n(e),s=n(157),r=n.n(s);t.default={components:{_menu:o.a,logo:r.a}}},194:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"page"},[n("header",[n("_menu")],1),n("content",[n("div",[n("nuxt")],1)]),n("footer",{staticClass:"transparent"},[n("logo")],1)])},staticRenderFns:[]}}});