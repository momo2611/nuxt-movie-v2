(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{573:function(t,e,r){"use strict";r.r(e);var n=r(144),o=r(494),c=r(498),l=r(565),h=r(493),d=r(564),v=r(19),f=(r(57),r(31),{head:function(){return{title:"TV Series"}},data:function(){return{series:[],getBy:"popular",totalResults:1,totalPages:1,currentPage:parseInt(this.$route.query.page)>1?parseInt(this.$route.query.page):1}},fetch:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/tv/".concat(t.getBy,"?page=").concat(t.currentPage)).then((function(e){t.series=e.results,t.totalPages=e.total_pages,t.totalResults=e.total_results,t.$router.push({query:{page:t.currentPage}})}));case 2:case"end":return e.stop()}}),e)})))()},methods:{handlePageChange:function(t){this.currentPage=t,this.$fetch()},handleGetBy:function(t){this.getBy=t,this.$fetch()}}}),_=r(34),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e(c.a,[e("h4",{staticClass:"pink--text text-center mt-2 mb-2 font-weight-bold title text-h3"},[t._v("\n    "+t._s(this.getBy[0].toUpperCase()+this.getBy.substring(1))+" Movies\n  ")]),t._v(" "),e("div",{staticClass:"text-center mb-6"},[e(n.a,{staticClass:"mr-2",attrs:{value:"popular"},on:{click:function(e){return t.handleGetBy("popular")}}},[t._v("Popular")]),t._v(" "),e(n.a,{staticClass:"mr-2",attrs:{value:"airing today"},on:{click:function(e){return t.handleGetBy("airing_today")}}},[t._v("Airing today")]),t._v(" "),e(n.a,{staticClass:"mr-2",attrs:{value:"top_rated"},on:{click:function(e){return t.handleGetBy("top_rated")}}},[t._v("Top rated")])],1),t._v(" "),t.$fetchState.pending?e(h.a,t._l(20,(function(s){return e(o.a,{key:s,attrs:{cols:"12",sm:"3"}},[e(d.a,{attrs:{type:"image, list-item-two-line"}})],1)})),1):t.$fetchState.error?e(h.a,[e("h2",{staticClass:"error"},[t._v("An error occurred!")])]):e("SectionMovies",{attrs:{movies:t.series}}),t._v(" "),e(h.a,[e(o.a,{attrs:{cols:"12"}},[e("div",{staticClass:"text-center"},[e(l.a,{attrs:{"total-visible":10,length:t.totalPages},on:{input:t.handlePageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionMovies:r(507).default})}}]);