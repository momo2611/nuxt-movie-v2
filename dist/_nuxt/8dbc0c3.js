(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{528:function(t,e,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("727eb306",content,!0,{sourceMap:!1})},539:function(t,e,r){"use strict";r(528)},540:function(t,e,r){var n=r(16)(!1);n.push([t.i,"#card-actor{background-image:linear-gradient(135deg,#434343 10%,#000);color:#fff}",""]),t.exports=n},570:function(t,e,r){"use strict";r.r(e);var n=r(228),o=r(144),c=r(229),l=r(102),d=r(494),h=r(223),v=r(184),f=r(143),_=r(227),m=r(30),C=r(565),x=r(493),w=r(564),P=(r(41),r(19)),k=(r(57),{head:function(){return{title:"Actors"}},data:function(){return{actors:[],totalResults:1,totalPages:1,currentPage:parseInt(this.$route.query.page)>1?parseInt(this.$route.query.page):1}},fetch:function(){var t=this;return Object(P.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/person/popular?page=".concat(t.currentPage)).then((function(e){t.actors=e.results,t.totalPages=e.total_pages,t.totalResults=e.total_results,t.$router.push({query:{page:t.currentPage}})}));case 2:case"end":return e.stop()}}),e)})))()},methods:{handlePageChange:function(t){this.currentPage=t,this.$fetch()}}}),y=(r(539),r(34)),component=Object(y.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e("h4",{staticClass:"pink--text text-center mt-6 font-weight-bold title text-h3"},[t._v("\n    Popular Actors\n  ")]),t._v(" "),t.$fetchState.pending?e(x.a,t._l(20,(function(s){return e(d.a,{key:s,attrs:{cols:"12",sm:"3"}},[e(w.a,{attrs:{type:"image"}})],1)})),1):t.$fetchState.error?e(x.a,[e("h2",{staticClass:"error"},[t._v("An error occurred!")])]):e(x.a,{staticClass:"mb-4 mt-2 px-4"},t._l(t.actors,(function(r){return e(d.a,{key:r.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e(c.a,{attrs:{id:"card-actor"}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",[e(l.d,{staticClass:"text-h5",domProps:{textContent:t._s(r.name)}}),t._v(" "),e(x.a,{staticClass:"ml-4"},[e(h.a,{attrs:{color:"pink"}},[t._v("mdi-account-star-outline")]),t._v(" "),e(l.b,{domProps:{textContent:t._s(r.popularity)}})],1),t._v(" "),e(l.a,[e(o.a,{staticClass:"ml-2 mt-3 white--text",attrs:{height:"36px",right:"",color:"rgba(0,0,0,0.5)",to:"/actor/".concat(r.id),nuxt:""}},[t._v("\n                More info\n              ")])],1)],1),t._v(" "),e(n.a,{staticClass:"ma-3 rounded-sm",attrs:{size:"125",tile:""}},[e(v.a,{attrs:{src:"https://image.tmdb.org/t/p/w500".concat(r.profile_path)}})],1)],1),t._v(" "),e(l.a,[e(f.a,{staticClass:"grow"},[e(_.a,[e(v.a,{staticClass:"elevation-6",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}})],1),t._v(" "),e(m.a,[e(m.c,{staticClass:"white--text"},[t._v("Mo Mo")])],1),t._v(" "),e(x.a,{staticClass:"white--text",attrs:{align:"center",justify:"end"}},[e(h.a,{staticClass:"mr-1",attrs:{color:"pink"}},[t._v(" mdi-heart ")]),t._v(" "),e("span",{staticClass:"subheading mr-2"},[t._v("256")]),t._v(" "),e("span",{staticClass:"mr-1"}),t._v(" "),e(h.a,{staticClass:"mr-1",attrs:{color:"blue"}},[t._v(" mdi-share-variant ")]),t._v(" "),e("span",{staticClass:"subheading"},[t._v("45")])],1)],1)],1)],1)],1)})),1),t._v(" "),e(x.a,{staticClass:"mb-4"},[e(d.a,{attrs:{cols:"12"}},[e("div",{staticClass:"text-center"},[e(C.a,{attrs:{"total-visible":10,length:t.totalPages},on:{input:t.handlePageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);