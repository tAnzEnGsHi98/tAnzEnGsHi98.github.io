webpackJsonp([7],{OIKE:function(t,e){},cVKY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mtWM"),a=i.n(s),n={data:function(){return{image_list:[{id:"001",url:i("vG7x")},{id:"002",url:i("p0UR")},{id:"003",url:i("x31p")},{id:"004",url:i("9ViR")},{id:"006",url:i("/l93")}],recommend_article:[]}},methods:{solve:function(t){console.log(t),this.$router.push({name:"article",query:{id:t,dif:"solve"}})}},created:function(){var t=this;a.a.get("https://www.lvliao.xyz/WxTourChat/Solve?condition=getSolve").then(function(e){t.$data.recommend_article=e.data}).catch(function(t){console.log(t)})}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend_view"},[t._m(0),t._v(" "),t._l(t.recommend_article,function(e,s){return i("div",{staticClass:"recommend_article"},[i("div",[i("img",{staticClass:"title_img",attrs:{src:t.image_list[s%5].url,alt:"图片"}})]),t._v(" "),i("div",{staticClass:"article"},[i("span",{staticClass:"title",on:{click:function(i){return t.solve(e.solve_id)}}},[t._v(" "+t._s(e.title))]),t._v(" "),i("div",{staticClass:"time_view"},[i("span",{staticClass:"time"},[t._v("发布时间："+t._s(e.date))]),t._v(" "),i("span",{staticClass:"time",staticStyle:{"margin-left":"30px"}},[t._v("所属标签："+t._s(e.tag))])]),t._v(" "),i("span",{staticClass:"desc"},[t._v(t._s(e.description))])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"re-lable"},[e("label",{staticStyle:{"margin-left":"10px"}},[this._v("文章列表")])])}]};var c={name:"article_solve",components:{solvelist:i("VU/8")(n,l,!1,function(t){i("peA9")},"data-v-1ee433a1",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("solvelist")],1)},staticRenderFns:[]};var o=i("VU/8")(c,r,!1,function(t){i("OIKE")},"data-v-d043fc62",null);e.default=o.exports},peA9:function(t,e){}});