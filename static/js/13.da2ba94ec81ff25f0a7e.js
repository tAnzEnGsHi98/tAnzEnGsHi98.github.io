webpackJsonp([13],{GbK6:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("mtWM"),n=e.n(a),l={name:"admin_tag",data:function(){return{tagData:[],dialogFormVisible:!1,form:{name:""},formLabelWidth:"120px"}},methods:{handleEdit:function(t,o){console.log(t,o)},handleDelete:function(t,o){var e=o.tag;n.a.get("http://localhost:8080/WxTourChat/tag?condition=delTag&tag="+e).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},addTag:function(){this.$data.dialogFormVisible=!1;var t=this.$data.form.name;n.a.post("http://localhost:8080/WxTourChat/tag?condition=addTag&tag="+t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},created:function(){var t=this;n.a.get("http://localhost:8080/WxTourChat/tag?condition=getTag").then(function(o){t.$data.tagData=o.data}).catch(function(t){console.log(t)})}},i={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{width:"100%"}},[e("el-container",{staticStyle:{border:"1px solid #eee"}},[e("el-header",{staticStyle:{"text-align":"right","font-size":"12px","z-index":"888","box-shadow":"0 0 1px 0"}},[e("el-dropdown",[e("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[t._v("查看")]),t._v(" "),e("el-dropdown-item",[t._v("新增")]),t._v(" "),e("el-dropdown-item",[t._v("删除")])],1)],1),t._v(" "),e("span",{staticStyle:{"font-size":"15px"}},[t._v("管理")])],1),t._v(" "),e("el-main",[e("el-table",{attrs:{data:t.tagData}},[e("el-table-column",{attrs:{prop:"tag",label:"标签",width:"120","show-overflow-tooltip":""}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(o.$index,o.row)}}},[t._v("删除")])]}}])})],1)],1)],1),t._v(" "),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(o){t.dialogFormVisible=!0}}},[t._v("添加标签")]),t._v(" "),e("el-dialog",{attrs:{title:"添加标签",visible:t.dialogFormVisible},on:{"update:visible":function(o){t.dialogFormVisible=o}}},[e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"标签名称","label-width":t.formLabelWidth}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(o){t.$set(t.form,"name",o)},expression:"form.name"}})],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(o){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.addTag}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=e("VU/8")(l,i,!1,function(t){e("uce7")},"data-v-16b831da",null);o.default=r.exports},uce7:function(t,o){}});