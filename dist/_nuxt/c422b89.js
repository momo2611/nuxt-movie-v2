(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{504:function(t,e,o){var content=o(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("a3473610",content,!0,{sourceMap:!1})},509:function(t,e,o){"use strict";o.r(e);var r=o(547),n=o(144),l=o(229),c=o(102),d=o(494),f=o(569),v=o(223),h=o(184),m=o(493),_=o(488),w=(o(150),o(3),{props:{data:{type:Object}},data:function(){return{dialog:!1,isVideo:!1,mediaUrl:"",streamUrl:""}},methods:{closeModal:function(){this.dialog=!1,this.isVideo=!1},getTrailer:function(){if(this.data.videos)return"https://www.youtube-nocookie.com/embed/"+this.data.videos.results.find((function(t){return"Trailer"===t.type})).key},getMovie:function(){return"https://moviehab.com/embed/"+this.data.id},openYtModal:function(){this.mediaUrl=this.getTrailer(),this.isVideo=!0},openStModal:function(){this.streamUrl=this.getMovie(),this.isVideo=!0}}}),k=(o(522),o(34)),component=Object(k.a)(w,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{sticky:"",shaped:"",tile:""}},[e(h.a,{attrs:{src:"https://image.tmdb.org/t/p/w500".concat(t.data.poster_path)}}),t._v(" "),e(c.c,{staticClass:"mt-3 pa-0"},[e(f.a,{attrs:{persistent:"","max-width":"800"},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[e(n.a,t._g(t._b({staticClass:"white--text",attrs:{color:"pink",block:"",depressed:""},on:{click:t.openYtModal}},"v-btn",l,!1),r),[e(v.a,[t._v("mdi-information-outline ")]),t._v("\n          Watch trailer\n        ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,[e(c.d,[e("span",{staticClass:"headline"},[t._v(t._s(t.data.title))])]),t._v(" "),e(c.c,[e(l.a,[e(m.a,[e(d.a,{attrs:{cols:"12"}},[e("div",{staticClass:"iframe-container"},[t.isVideo?e("iframe",{attrs:{allowfullscreen:"",src:t.mediaUrl,frameborder:"0"}}):t._e()])])],1)],1)],1),t._v(" "),e(c.a,[e(_.a),t._v(" "),e(n.a,{attrs:{color:"error",text:""},on:{click:t.closeModal}},[t._v("Close")])],1)],1)],1),t._v(" "),e(f.a,{attrs:{persistent:"","max-width":"800"},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[e(n.a,t._g(t._b({staticClass:"white--text mt-2",attrs:{color:"blue lighten-1",block:"",depressed:""},on:{click:t.openStModal}},"v-btn",l,!1),r),[e(v.a,[t._v("mdi-arrow-right-drop-circle-outline ")]),t._v("\n          Streaming now\n        ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,[e(c.d,[e("span",{staticClass:"headline"},[t._v(t._s(t.data.title))])]),t._v(" "),e(c.c,[e(l.a,[e(m.a,[e(d.a,{attrs:{cols:"12"}},[e("div",{staticClass:"iframe-container"},[t.isVideo?e("iframe",{attrs:{allowfullscreen:"",src:t.streamUrl,frameborder:"0",scrolling:"no",allowtransparency:"true"}}):t._e()])])],1)],1)],1),t._v(" "),e(c.a,[e(_.a),t._v(" "),e(n.a,{attrs:{color:"error",text:""},on:{click:t.closeModal}},[t._v("Close")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},522:function(t,e,o){"use strict";o(504)},523:function(t,e,o){var r=o(16)(!1);r.push([t.i,".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{position:absolute;height:100%;left:0;top:0;width:100%}",""]),t.exports=r}}]);