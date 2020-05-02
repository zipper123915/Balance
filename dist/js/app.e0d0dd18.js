(function(e){function t(t){for(var a,l,i=t[0],s=t[1],u=t[2],m=0,d=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0171":function(e,t,n){"use strict";var a=n("e944"),o=n.n(a);o.a},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"225f":function(e,t,n){},"491b":function(e,t,n){"use strict";var a=n("5210"),o=n.n(a);o.a},5210:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Form",{on:{submitForm:e.onFormSubmit}}),n("TotalBalance"),n("BudgetList")],1)},r=[],l=n("5530"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"budget-list-wrap"},[n("ElCard",{attrs:{header:e.header}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",id:"mode-1",value:"OUTCOME"},domProps:{checked:e._q(e.mode,"OUTCOME")},on:{change:function(t){e.mode="OUTCOME"}}}),n("label",{attrs:{for:"mode-1"}},[e._v("Min")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",id:"mode-2",value:"INCOME"},domProps:{checked:e._q(e.mode,"INCOME")},on:{change:function(t){e.mode="INCOME"}}}),n("label",{attrs:{for:"mode-2"}},[e._v("Plus")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{checked:"",type:"radio",name:"mode",id:"mode-3",value:"ALL"},domProps:{checked:e._q(e.mode,"ALL")},on:{change:function(t){e.mode="ALL"}}}),n("label",{attrs:{for:"mode-3"}},[e._v("All")]),e.isEmpty?n("ElAlert",{attrs:{type:"info",title:e.emptyTitle,closable:!1}}):[e._l(e.filterList,(function(e,t){return[n("BudgetListItem",{key:t,attrs:{list:e}})]}))]],2)],1)},s=[],u=(n("4de4"),n("b64b"),n("07ac"),n("2f62")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item"},[n("i",{class:e.icon}),n("span",{staticClass:"budget-comment"},[e._v(e._s(e.list.comment))]),n("span",{staticClass:"budget-value"},[e._v(e._s(e.list.value))]),n("ElButton",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.deleteItem(e.list.id)}}},[e._v("Delete")])],1)},m=[],d={name:"BudgetListItem",props:{list:{type:Object,default:function(){return{}}}},methods:Object(l["a"])({},Object(u["b"])("mainStore",["deleteListItem"]),{deleteItem:function(e){confirm("Точно хотите удалить?")&&this.deleteListItem(e)}}),computed:{icon:function(){return"OUTCOME"===this.list.type?"el-icon-remove":"el-icon-circle-plus"}}},f=d,p=(n("d3fe"),n("2877")),v=Object(p["a"])(f,c,m,!1,null,"3b32bb11",null),b=v.exports,O={name:"BudgetList",components:{BudgetListItem:b},comments:{BudgetListItem:b},data:function(){return{header:"Budget List",emptyTitle:"Empty List",mode:"ALL"}},computed:Object(l["a"])({},Object(u["c"])("mainStore",["list"]),{isEmpty:function(){return!Object.keys(this.list).length},filterList:function(){var e=this,t=Object(l["a"])({},this.list);return t=Object.values(t).filter((function(t){return"ALL"===e.mode||t.type===e.mode})),t}})},h=O,g=(n("491b"),Object(p["a"])(h,i,s,!1,null,"eeb7c85a",null)),y=g.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"total-value",class:e.classes},[e._v("Balance: "+e._s(e.total))])},_=[],I={name:"TotalBalance",computed:Object(l["a"])({},Object(u["c"])("mainStore",["total"]),{classes:function(){return this.total>0?"plus":"minus"}})},L=I,j=(n("0171"),Object(p["a"])(L,E,_,!1,null,"a67a6f20",null)),C=j.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ElCard",{staticClass:"form-card"},[n("ElForm",{ref:"addItemForm",attrs:{model:e.formData,rules:e.rules,"lable-position":"top"}},[n("ElFormItem",{attrs:{label:"Type",prop:"type"}},[n("ElSelect",{staticClass:"type-select",attrs:{placeholder:"Choose type..."},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},[n("ElOption",{attrs:{lable:"Income",value:"INCOME"}}),n("ElOption",{attrs:{lable:"Outcome",value:"OUTCOME"}})],1)],1),n("ElFormItem",{attrs:{label:"Comments",prop:"comment"}},[n("ElInput",{model:{value:e.formData.comment,callback:function(t){e.$set(e.formData,"comment",t)},expression:"formData.comment"}})],1),n("ElFormItem",{attrs:{label:"Value",prop:"value"}},[n("ElInput",{model:{value:e.formData.value,callback:function(t){e.$set(e.formData,"value",e._n(t))},expression:"formData.value"}})],1),n("ElButton",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Submit")])],1)],1)},S=[],F={name:"Form",data:function(){return{formData:{type:"INCOME",comment:"",value:0},rules:{type:[{required:!0,message:"Please select type",trigger:"blur"}],comment:[{required:!0,message:"Please input comment",trigger:"change"}],value:[{required:!0,message:"Please input value",trigger:"change"},{type:"number",message:"Value must be a number",trigger:"change"}]}}},methods:Object(l["a"])({},Object(u["b"])("mainStore",["addListItem"]),{onSubmit:function(){var e=this;this.$refs.addItemForm.validate((function(t){t&&(console.log(e.formData),e.addListItem(e.formData),e.$refs.addItemForm.resetFields())}))}})},M=F,T=(n("ab46"),Object(p["a"])(M,D,S,!1,null,"5bd23a9a",null)),x=T.exports,w={name:"app",components:{BudgetList:y,TotalBalance:C,Form:x},methods:{onFormSubmit:function(e){var t=Object(l["a"])({},e,{id:String(Math.random())});this.$set(this.list,t.id,t)}}},B=w,k=(n("034f"),Object(p["a"])(B,o,r,!1,null,null,null)),P=k.exports,$=(n("4160"),n("159b"),n("b2d6")),A=n.n($),N=n("4897"),U=n.n(N),q=(n("377f"),n("5c96")),J=[q["Button"],q["Card"],q["Form"],q["FormItem"],q["Input"],q["Select"],q["Option"],q["Alert"]];U.a.use(A.a),J.forEach((function(e){return a["default"].use(e,{locale:U.a})}));n("13d5");var V={namespaced:!0,state:{list:{1:{type:"INCOME",value:100,comment:"Some comment",id:1},2:{type:"OUTCOME",value:-50,comment:"Some outcome comment",id:2}}},mutations:{ADD_FIELD:function(e,t){a["default"].set(e.list,t.id,t)},DELETE_FIELD:function(e,t){var n=e.list;a["default"].delete(n,t)}},actions:{addListItem:function(e,t){var n=e.commit;n("ADD_FIELD",Object(l["a"])({id:String(Math.random())},t))},deleteListItem:function(e,t){console.log(e),e.commit("DELETE_FIELD",t)}},getters:{list:function(e){var t=e.list;return Object.values(t)},total:function(e){var t=e.list;return Object.values(t).reduce((function(e,t){return"OUTCOME"===t.type&&t.value>0?e-t.value:e+t.value}),0)}}},z=V;a["default"].use(u["a"]);var G=new u["a"].Store({state:{},mutations:{},actions:{},modules:{mainStore:z}});a["default"].config.productionTip=!1,new a["default"]({store:G,render:function(e){return e(P)}}).$mount("#app")},5869:function(e,t,n){},"85ec":function(e,t,n){},ab46:function(e,t,n){"use strict";var a=n("225f"),o=n.n(a);o.a},d3fe:function(e,t,n){"use strict";var a=n("5869"),o=n.n(a);o.a},e944:function(e,t,n){}});
//# sourceMappingURL=app.e0d0dd18.js.map