(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{572:function(t,e,n){"use strict";n.r(e);var r=n(144),o=n(494),c=n(498),l=n(565),h=n(493),v=n(564),f=n(19),d=(n(57),n(31),n(512)),m=n(507),_={head:function(){return{title:"Movies"}},data:function(){return{movies:[],getBy:"popular",totalResults:1,totalPages:1,currentPage:parseInt(this.$route.query.page)>1?parseInt(this.$route.query.page):1}},fetch:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/movie/".concat(t.getBy,"?page=").concat(t.currentPage)).then((function(e){t.movies=e.results,t.totalPages=e.total_pages,t.totalResults=e.total_results,t.$router.push({query:{page:t.currentPage}})}));case 2:case"end":return e.stop()}}),e)})))()},methods:{handlePageChange:function(t){this.currentPage=t,this.$fetch()},handleGetBy:function(t){this.getBy=t,this.$fetch()}},components:{MovieCard:d.default,SectionMovies:m.default}},y=n(34),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e(c.a,[e("h4",{staticClass:"pink--text text-center mt-2 mb-2 font-weight-bold title text-h3"},[t._v("\n    "+t._s(this.getBy[0].toUpperCase()+this.getBy.substring(1))+" Movies\n  ")]),t._v(" "),e("div",{staticClass:"text-center mb-6"},[e(r.a,{staticClass:"mr-2",attrs:{value:"popular"},on:{click:function(e){return t.handleGetBy("popular")}}},[t._v("Popular")]),t._v(" "),e(r.a,{staticClass:"mr-2",attrs:{value:"upcoming"},on:{click:function(e){return t.handleGetBy("upcoming")}}},[t._v("Upcoming")]),t._v(" "),e(r.a,{staticClass:"mr-2",attrs:{value:"top_rated"},on:{click:function(e){return t.handleGetBy("top_rated")}}},[t._v("Top rated")])],1),t._v(" "),t.$fetchState.pending?e(h.a,t._l(20,(function(s){return e(o.a,{key:s,attrs:{cols:"12",sm:"3"}},[e(v.a,{attrs:{type:"image, list-item-two-line"}})],1)})),1):t.$fetchState.error?e(h.a,[e("h2",{staticClass:"error"},[t._v("An error occurred!")])]):e("SectionMovies",{attrs:{movies:t.movies}}),t._v(" "),e(h.a,[e(o.a,{attrs:{cols:"12"}},[e("div",{staticClass:"text-center"},[e(l.a,{attrs:{"total-visible":10,length:t.totalPages},on:{input:t.handlePageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionMovies:n(507).default})}}]);