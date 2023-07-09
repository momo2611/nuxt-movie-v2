(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{502:function(e,t,n){"use strict";var r=n(89),o=n(1);t.a=o.a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},503:function(e,t,n){"use strict";n(26),n(60);var r=n(1);t.a=r.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var n=this;this.clearDelay();var r=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){n.isActive={open:!0,close:!1}[e]},r)}}})},512:function(e,t,n){"use strict";n.r(t);var r=n(229),o=n(102),l=(n(11),n(8),n(14),n(9),n(15),n(23)),c=n(2),h=(n(3),n(10),n(515),n(6)),v=n(69),d=n(49),f=n(28),m=n(88),x=n(22),y=n(82),_=n(70),k=n(151),w=n(7);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=Object(h.a)(f.a,k.a,_.a,x.a,Object(m.a)("chipGroup"),Object(y.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return I(I(I(I({"v-chip":!0},_.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(t){var n=Object(l.a)(t,2),r=n[0],o=n[1];e.$attrs.hasOwnProperty(r)&&Object(w.a)(r,o,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(v.b,e)},genClose:function(){var e=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=I(I({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return e(r,this.setTextColor(o,data),t)}}),$=n(494),S=n(184),j=(n(26),n(235),n(61),n(513),n(503)),z=n(502),H=n(0),B=Object(h.a)(f.a,j.a,z.a,k.a,x.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,o=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:o,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(d.a,this.setTextColor(this.getColor(t),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(H.h)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),E=n(493);n(41),n(42),n(64),n(39),n(29),n(65),n(71),n(40);function P(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var D={props:{movie:{type:Object,required:!0}},methods:{genreTypeName:function(e){var t,n=P(this.$store.state.genres);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id==e)return r.name}}catch(e){n.e(e)}finally{n.f()}}}},F=n(34),component=Object(F.a)(D,(function(){var e=this,t=e._self._c;return e.movie.title?t(r.a,{attrs:{to:"/movie/".concat(e.movie.id),nuxt:""}},[t(S.a,{attrs:{height:"300",src:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path)}}),e._v(" "),e.movie.title?t(o.d,[e._v(e._s(e.movie.title))]):e.movie.name?t(o.d,[e._v(e._s(e.movie.name))]):e._e(),e._v(" "),t(o.c,[t(E.a,{staticClass:"mx-0",attrs:{align:"center","no-gutters":""}},[t($.a,{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[t(B,{attrs:{value:e.movie.vote_average/2,"half-increments":"",length:"5",color:"yellow",dense:"",readonly:"",size:"16"}}),e._v(" "),t("span",{staticClass:"grey--text text--lighten-1 text-caption mr-2 mt-1"},[e._v("\n          "+e._s(e.movie.vote_average)+"\n        ")])],1)],1),e._v(" "),e.$store.state.genres?t(E.a,[t($.a,{attrs:{cols:"12"}},e._l(e.movie.genre_ids,(function(n){return t(O,{key:n,staticClass:"white--text mr-1 mb-sm-2",attrs:{label:"",small:"",color:"pink"}},[e._v("\n          "+e._s(e.genreTypeName(n))+"\n        ")])})),1)],1):e._e()],1)],1):e.movie.name?t(r.a,{attrs:{to:"/tv/".concat(e.movie.id),nuxt:""}},[t(S.a,{attrs:{height:"300",src:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path)}}),e._v(" "),e.movie.title?t(o.d,[e._v(e._s(e.movie.title))]):e.movie.name?t(o.d,[e._v(e._s(e.movie.name))]):e._e(),e._v(" "),t(o.c,[t(E.a,{staticClass:"mx-0",attrs:{align:"center","no-gutters":""}},[t($.a,{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[t(B,{attrs:{value:e.movie.vote_average/2,"half-increments":"",length:"5",color:"yellow",dense:"",readonly:"",size:"16"}}),e._v(" "),t("span",{staticClass:"grey--text text--lighten-1 text-caption mr-2 mt-1"},[e._v("\n          "+e._s(e.movie.vote_average)+"\n        ")])],1)],1),e._v(" "),e.$store.state.genres?t(E.a,[t($.a,{attrs:{cols:"12"}},e._l(e.movie.genre_ids,(function(n){return t(O,{key:n,staticClass:"white--text mr-1 mb-sm-2",attrs:{label:"",small:"",color:"pink"}},[e._v("\n          "+e._s(e.genreTypeName(n))+"\n        ")])})),1)],1):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},513:function(e,t,n){var content=n(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("5939d713",content,!0,{sourceMap:!1})},514:function(e,t,n){var r=n(16)(!1);r.push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e.exports=r},515:function(e,t,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("197fcea4",content,!0,{sourceMap:!1})},516:function(e,t,n){var r=n(16)(!1);r.push([e.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),e.exports=r}}]);