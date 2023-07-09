(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{576:function(t,e,n){"use strict";n.r(e);var r=n(229),o=n(102),c=n(494),l=n(498),d=n(492),h=n(184),_=n(143),v=n(227),m=n(30),f=n(225),w=n(493),x=n(548),k=n(549),C=n(488),S=n(579),y=(n(41),n(19)),M=(n(57),n(42),n(509)),R=n(510),I={head:function(){return{title:this.seriesTitle.name}},data:function(){return{seriesTitle:""}},asyncData:function(t){return Object(y.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$axios,e.prev=1,e.next=4,r.$get("/tv/".concat(n.id,"?append_to_response=credits,videos,images"));case 4:return o=e.sent,e.next=7,r.$get("/tv/".concat(n.id,"/recommendations"));case 7:return c=e.sent,e.abrupt("return",{seriesTitle:o,data:o,dataSeason:o.seasons,recomSeries:c.results.slice(0,6)});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},methods:{getCastAvatar:function(t){return t.profile_path?"https://image.tmdb.org/t/p/w45".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}},components:{LeftMovieInfo:M.default,RightMovieInfo:R.default}},T=n(34),component=Object(T.a)(I,(function(){var t=this,e=t._self._c;return e(l.a,[e(w.a,[e(c.a,{attrs:{cols:"12",sm:"4"}},[e("LeftMovieInfo",{attrs:{data:t.data}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"8"}},[e("div",{staticClass:"d-md-flex align-center"},[e("h2",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(t.data.name))]),t._v(" "),e(C.a),t._v(" "),e("Rating",{attrs:{data:t.data}})],1),t._v(" "),e("SocialShare"),t._v(" "),e(d.a,{staticClass:"mt-8"}),t._v(" "),e(w.a,{staticClass:"mt-2"},[e(c.a,{attrs:{cols:"12",sm:"8"}},[e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Storyline")]),t._v(" "),e("p",{staticClass:"grey--text-darken"},[t._v("\n            "+t._s(t.data.overview)+"\n          ")]),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Photos")]),t._v(" "),e(x.a,{attrs:{multiple:"","show-arrows":""}},t._l(t.data.images.backdrops,(function(image,n){return e(k.a,{key:n,scopedSlots:t._u([{key:"default",fn:function(t){var n=t.toggle;return[e(r.a,{staticClass:"ma-2",on:{click:n}},[e(h.a,{attrs:{cover:"",width:"120",height:"180",src:"https://image.tmdb.org/t/p/w300".concat(image.file_path)}})],1)]}}],null,!0)})})),1),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Top cast")]),t._v(" "),e(f.a,[e(S.a,{attrs:{height:240,"item-height":"48",items:t.data.credits.cast},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.item;return[e(_.a,{key:r.id,attrs:{to:"/actor/".concat(r.id),nuxt:""}},[e(v.a,[e(h.a,{attrs:{src:t.getCastAvatar(r)}})],1),t._v(" "),e(m.c,[t._v(t._s(r.name))]),t._v(" "),e(m.b,[t._v(t._s(r.character))])],1)]}}])})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"4"}},[e("RightMovieInfo",{attrs:{data:t.data}})],1)],1)],1)],1),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Seasons")]),t._v(" "),e(w.a,{staticClass:"mt-2 px-2"},[e(x.a,{attrs:{multiple:"","show-arrows":""}},t._l(t.dataSeason,(function(n,c){return e(k.a,{key:c},[e(r.a,{staticClass:"ma-2",attrs:{"max-width":"160","max-height":"300"}},[e(h.a,{attrs:{cover:"",width:"160",height:"180",src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path)}}),t._v(" "),e(o.d,{staticClass:"text-caption font-weight-medium"},[t._v(t._s(n.name)+" ("+t._s(new Date(n.air_date).getFullYear())+")")])],1)],1)})),1)],1),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title mt-4 px-2"},[t._v("More like this")]),t._v(" "),e(w.a,{staticClass:"mt-1 mb-4 px-2"},t._l(t.recomSeries,(function(n){return e(c.a,{key:n.id,attrs:{cols:"12",xs:"6",sm:"2"}},[e(r.a,{attrs:{"max-width":"160","max-height":"320",to:"/tv/".concat(n.id),nuxt:""}},[e(h.a,{attrs:{width:"160",height:"230",src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path)}}),t._v(" "),e(o.d,{staticClass:"text-caption font-weight-medium"},[t._v(t._s(n.name)+" ("+t._s(new Date(n.first_air_date).getFullYear())+")")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LeftMovieInfo:n(509).default,Rating:n(194).default,SocialShare:n(508).default,RightMovieInfo:n(510).default})}}]);