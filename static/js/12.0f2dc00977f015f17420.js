webpackJsonp([12],{C4ny:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=o("mtWM"),n=o.n(l),a={name:"admin_comment",data:function(){return{article_study:[]}},methods:{handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){var o=e.title;n.a.get("https://www.lvliao.xyz/WxTourChat/Revert?condition=delRevert&title="+o).then(function(t){that.$data.article_study=t.data,console.log(t)}).catch(function(t){console.log(t)})}},created:function(){var t=this;n.a.get("https://www.lvliao.xyz/WxTourChat/Revert?condition=getRevert").then(function(e){t.$data.article_study=e.data,console.log(e)}).catch(function(t){console.log(t)})}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"}},[o("el-header",{staticStyle:{"text-align":"right","font-size":"12px","z-index":"888","box-shadow":"0 0 1px 0"}},[o("el-dropdown",[o("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[t._v("查看")]),t._v(" "),o("el-dropdown-item",[t._v("新增")]),t._v(" "),o("el-dropdown-item",[t._v("删除")])],1)],1),t._v(" "),o("span",{staticStyle:{"font-size":"15px"}},[t._v("管理")])],1),t._v(" "),o("el-main",[o("el-table",{attrs:{data:t.article_study}},[o("el-table-column",{attrs:{prop:"title",label:"标题",width:"120","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"revert_text",label:"评论","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"140","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"140","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)},staticRenderFns:[]};var r=o("VU/8")(a,i,!1,function(t){o("R9z4")},"data-v-267efc2f",null);e.default=r.exports},R9z4:function(t,e){}});