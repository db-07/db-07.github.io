(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f981e55"],{"53b0":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"time-of"},[e("tittle-one",[t._v("时间提醒")]),e("div",[t._v("(点击对应标题可以重置Cookie) "),e("el-button",{attrs:{size:"mini"},on:{click:t.ZkorSs}},[t._v("展开/收起")])],1),e("el-collapse",{model:{value:t.act,callback:function(s){t.act=s},expression:"act"}},[e("el-collapse-item",{attrs:{title:"树脂提醒",name:"1"}},[t.flagsz?e("div",[e("tittle-two",{attrs:{color:"green"},nativeOn:{click:function(s){return t.reSet(["树脂数","树脂下线时间"])}}},[t._v("树脂提醒")]),e("div",{staticStyle:{width:"100%"}},[t._v("下线树脂数："+t._s(t.szs)+" ")]),e("div",{staticStyle:{width:"100%"}},[t._v("下线时间："+t._s(t.dateFormat(new Date(t.xxsj),t.dafmt)))]),e("div",{staticClass:"cur"},[t._v(" "+t._s(Math.floor(t.curszs)))]),e("div",[t._v(t._s(Math.floor(t.curmin/60)+"分"+Math.floor(t.curmin%60)+"秒")+" 后补充")]),t.show1?e("div",[e("div",[t._v("距离"),e("strong",[t._v(t._s(t.pshow.toszs))]),t._v("树脂："),e("strong",[t._v(t._s(t.getTime(t.pshow.totime,"D天 hh:mm:ss")))])]),e("div",[t._v("推荐上线时间："),e("strong",[t._v(t._s(t.dateFormat(t.pshow.toline,t.tofmt)))])]),e("el-row",{staticClass:"stage"},[e("el-input",{staticClass:"inbox",attrs:{type:"text"},model:{value:t.inszs,callback:function(s){t.inszs=s},expression:"inszs"}}),e("el-button",{attrs:{type:"info",icon:"el-icon-check",circle:""},on:{click:function(s){return t.querySz(t.inszs)}}}),t.chkShow(40)?e("el-button",{attrs:{type:"success",circle:""},on:{click:function(s){return t.querySz(40)}}},[t._v("40")]):t._e(),t.chkShow(80)?e("el-button",{attrs:{type:"primary",circle:""},on:{click:function(s){return t.querySz(80)}}},[t._v("80")]):t._e(),t.chkShow(120)?e("el-button",{staticClass:"thre",attrs:{type:"warning",circle:""},on:{click:function(s){return t.querySz(120)}}},[t._v("120")]):t._e(),t.chkShow(160)?e("el-button",{staticClass:"thre",attrs:{type:"danger",circle:""},on:{click:function(s){return t.querySz(160)}}},[t._v("160")]):t._e()],1)],1):e("div",[t._v(" 满了！请重置~ ")]),t.show?e("div",[e("el-button",{attrs:{type:"success"},on:{click:function(s){t.doOk([{k:"树脂数",v:t.curszs.toFixed(1)},{k:"树脂下线时间",v:(new Date).valueOf()}])}}},[t._v("更新下线")])],1):t._e()],1):e("div",[e("div",{staticStyle:{width:"100%"}},[t._v("请先设置 "),e("i",[t._v("树脂数")]),t._v("(数字) 和 "),e("i",[t._v("下线时间")]),t._v("(日期时间格式) 的cookie")]),e("div",{staticClass:"setting"},[e("div",[t._v(" 树脂数： "),e("el-input",{staticStyle:{"max-width":"30%"},model:{value:t.szs,callback:function(s){t.szs=s},expression:"szs"}})],1),e("div",[t._v("下线时间： "),e("el-date-picker",{staticStyle:{"max-width":"70%"},attrs:{type:"datetime"},model:{value:t.xxsj,callback:function(s){t.xxsj=s},expression:"xxsj"}})],1),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"success"},on:{click:t.setSz}},[t._v("设置")])],1)])])]),e("el-collapse-item",{attrs:{title:"探索派遣",name:"2"}},[t.flagts?e("div",[e("tittle-two",{attrs:{color:"purple"},nativeOn:{click:function(s){return t.reSet(["加成角色","探索下线时间"])}}},[t._v("探索提醒")]),e("div",{staticStyle:{width:"100%"}},[t._v("有无加成角色："+t._s(t.tsjc?"有":"无")+" ")]),e("div",{staticStyle:{width:"100%"}},[t._v("下线时间："+t._s(t.dateFormat(new Date(t.xxsjts),t.dafmt)))]),t.tsjc?e("div",[t._v("加成角色完成时间："),e("strong",[t._v(t._s(t.dateFormat(t.toline1[0],t.tofmt)))])]):t._e(),e("div",[t._v("普通角色完成时间："),e("strong",[t._v(t._s(t.dateFormat(t.toline1[1],t.tofmt)))])])],1):e("div",[e("div",{staticStyle:{width:"100%"}},[t._v("请先设置 "),e("i",[t._v("是否有加成角色")]),t._v("(bool) 和 "),e("br"),e("i",[t._v("下线时间")]),t._v("(日期时间格式) 的cookie")]),e("div",{staticClass:"setting"},[e("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[e("div",[t._v(" 加成角色(-25%)： ")]),e("el-switch",{attrs:{"active-text":"有","inactive-text":"无"},model:{value:t.tsjc,callback:function(s){t.tsjc=s},expression:"tsjc"}})],1),e("div",[t._v("下线时间： "),e("el-date-picker",{staticStyle:{"max-width":"70%"},attrs:{type:"datetime"},model:{value:t.xxsjts,callback:function(s){t.xxsjts=s},expression:"xxsjts"}})],1),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"success"},on:{click:t.setTs}},[t._v("设置")])],1)])])]),e("el-collapse-item",{attrs:{title:"家园提醒",name:"3"}},[e("el-collapse",{model:{value:t.act1,callback:function(s){t.act1=s},expression:"act1"}},[t.flagjy.jybhg?e("div",[e("div",[t._v("家园等级："+t._s(t.jydj)+" 家园仙力："+t._s(t.jyxl))]),e("div",[t._v("壶灵下线时间："+t._s(t.dateFormat(new Date(t.xxsjjy[0]),t.dafmt)))]),e("el-collapse-item",{attrs:{title:"家园币提醒",name:"1"}},[e("tittle-two",{attrs:{color:"gold"},nativeOn:{click:function(s){return t.reSet(["家园等级","家园仙力"])}}},[t._v("家园币提醒")]),t.flagjy.zz?e("div",[e("div",[t._v("宝钱上限"),e("strong",[t._v(t._s(t.bqmx))]),t._v("，产量速度："),e("strong",[t._v(t._s(t.bqsd)+"个/小时")])]),e("div",{staticClass:"cur"},[t._v(" "+t._s(Math.floor(t.curbq))+" ")]),e("div",[t._v(t._s(Math.floor(t.curbqt/60)+"分"+Math.floor(t.curbqt%60)+"秒")+" 后补充")]),e("div",[t._v("预计到期时间："),e("strong",[t._v(t._s(t.dateFormat(t.toline2[0],t.tofmt)))])])]):e("div",[t._v("先设置 "),e("i",[t._v("壶灵下线时间")]),t._v("(日期时间格式)的Cookie")])],1),e("el-collapse-item",{attrs:{title:"好感馈赠提醒",name:"2"}},[e("tittle-two",{attrs:{color:"purple"},nativeOn:{click:function(s){return t.reSet(["家园等级","家园仙力"])}}},[t._v("好感馈赠提醒")]),t.flagjy.zz?e("div",[e("div",[t._v("好感度上限"),e("strong",[t._v(t._s(t.hgmx))]),t._v(",产量速度："),e("strong",[t._v(t._s(t.hgsd)+"点/小时")])]),e("div",{staticClass:"cur"},[t._v(" "+t._s(Math.floor(t.curhg))+" ")]),e("div",[t._v(t._s(Math.floor(t.curhgt/60)+"分"+Math.floor(t.curhgt%60)+"秒")+" 后补充")]),e("div",[t._v("预计到期时间："),e("strong",[t._v(t._s(t.dateFormat(t.toline2[1],t.tofmt)))])])]):e("div",[t._v("先设置 "),e("i",[t._v("壶灵下线时间")]),t._v("(日期时间格式)的Cookie")])],1)],1):e("div",[e("div",{staticStyle:{width:"100%"}},[t._v("请先设置家园信息 "),e("i",[t._v("家园等级")]),t._v("(数字) 和 "),e("i",[t._v("仙力")]),t._v("(数字) 的cookie")]),e("div",{staticClass:"setting"},[e("div",[t._v(" 家园等级： "),e("el-input",{staticStyle:{"max-width":"30%"},model:{value:t.jydj,callback:function(s){t.jydj=s},expression:"jydj"}})],1),e("div",[t._v(" 家园仙力："),e("el-input",{staticStyle:{"max-width":"30%"},model:{value:t.jyxl,callback:function(s){t.jyxl=s},expression:"jyxl"}})],1),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"success"},on:{click:t.setJyxx}},[t._v("设置")])],1)])]),t.flagjy.zz?e("el-collapse-item",{attrs:{title:"家园种植",name:"3"}},[e("tittle-two",{attrs:{color:"green"},nativeOn:{click:function(s){return t.reSet(["壶灵下线时间","种植下线时间"])}}},[t._v("家园种植提醒")]),e("div",[e("div",[t._v("种植下线时间："+t._s(t.dateFormat(new Date(t.xxsjjy[1]),t.dafmt)))]),e("div",[t._v("预计到期时间："),e("strong",[t._v(t._s(t.dateFormat(t.toline2[2],t.tofmt)))])])])],1):e("div",[t._v(" 设置种植下线时间 "),e("div",{staticClass:"setting"},[e("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t._v(" 宝钱和好感度下线时间： "),e("el-date-picker",{staticStyle:{"max-width":"60%"},attrs:{type:"datetime"},model:{value:t.xxsjjy[0],callback:function(s){t.$set(t.xxsjjy,0,s)},expression:"xxsjjy[0]"}})],1),e("div",[t._v("种植下线时间： "),e("el-date-picker",{staticStyle:{"max-width":"60%"},attrs:{type:"datetime"},model:{value:t.xxsjjy[1],callback:function(s){t.$set(t.xxsjjy,1,s)},expression:"xxsjjy[1]"}})],1),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"success"},on:{click:t.setJysj}},[t._v("设置")])],1)])])],1)],1),e("el-collapse-item",{attrs:{title:"参量质变仪",name:"4"}},[t.flagzby?e("div",[e("tittle-two",{attrs:{color:"green"},nativeOn:{click:function(s){return t.reSet(["质变仪下线时间"])}}},[t._v("参量质变仪提醒")]),e("div",{staticStyle:{width:"100%"}},[t._v("下线时间："+t._s(t.dateFormat(new Date(t.xxsjzby),t.dafmt)))]),e("div",[t._v("预计可使用时间："),e("strong",[t._v(t._s(t.dateFormat(t.tolinezby,t.tofmt)))])])],1):e("div",[e("div",{staticStyle:{width:"100%"}},[t._v("请先设置"),e("i",[t._v("下线时间")]),t._v("(日期时间格式) 的cookie")]),e("div",{staticClass:"setting"},[e("div",{staticStyle:{display:"flex"}},[e("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[e("div",{staticStyle:{width:"100%","max-width":"80px"}},[t._v("下线时间：")]),e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime"},model:{value:t.xxsjzby,callback:function(s){t.xxsjzby=s},expression:"xxsjzby"}})],1)]),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"success"},on:{click:t.setZby}},[t._v("设置")])],1)])])]),e("div",{staticStyle:{width:"100%",height:"100px"}})],1)],1)},a=[],c=(e("b680"),e("a9e3"),e("9961")),l=e("1af8"),n=e("96a1"),o=e("7747"),r=e("925a"),v=e("4020"),h=48e4,u="YYYY-MM-DD hh:mm:ss 星期ZHWK",d={name:"TimeOf",components:{TittleTwo:n["a"],TittleOne:c["a"],SearchRole:l["a"]},data:function(){return{dafmt:u,tofmt:"MM-DD hh:mm:ss",inszs:100,pshow:{toszs:160,totime:0,toline:0},totime:[0,0,0,0,0],toline:[0,0,0,0,0],show:!0,show1:!0,szs:0,xxsj:"",curszs:0,curmin:0,tsjc:!0,xxsjts:"",toline1:[0,0],xxsjzby:0,tolinezby:0,jydj:10,jyxl:2e4,bqmx:2400,hgmx:500,bqsd:30,hgsd:5,curbq:0,curhg:0,curbqt:0,curhgt:0,showxx:!0,xxsjjy:["",""],toline2:[0,0,0],flagsz:!1,flagts:!1,flagjy:{jybhg:!1,zz:!1},flagzby:!1,act:["1","2","3","4"],act1:["1","2","3"],zkss:!0}},methods:{dateFormat:r["a"],getTime:r["b"],ZkorSs:function(){this.zkss?(this.act=[],this.act1=[]):(this.act=["1","2","3","4"],this.act1=["1","2","3"]),this.zkss=!this.zkss},flsh:function(){this.$message.success("成功, 即将刷新~"),setTimeout((function(){window.location.reload()}),1e3)},setSz:function(){var t="";t=this.szs?Number(this.szs).toFixed(1):"0",console.log(Number(this.szs),this.xxsj.valueOf()),Object(v["d"])("树脂数",t),Object(v["d"])("树脂下线时间",this.xxsj.valueOf()),this.flsh()},setTs:function(){Object(v["d"])("加成角色",this.tsjc?"1":"0"),Object(v["d"])("探索下线时间",this.xxsjts.valueOf()),this.flsh()},setZby:function(){Object(v["d"])("质变仪下线时间",this.xxsjzby.valueOf()),this.flsh()},setJyxx:function(){Object(v["d"])("家园等级",this.jydj),Object(v["d"])("家园仙力",this.jyxl),this.flagjy.jybhg=!0,this.$message.success("家园信息设置成功~")},setJysj:function(){Object(v["d"])("壶灵下线时间",this.xxsjjy[0].valueOf()),Object(v["d"])("种植下线时间",this.xxsjjy[1].valueOf()),this.flsh()},chkSz:function(t,s){this.curszs=this.szs+Number(((s-t)/h).toFixed(1)),this.curszs=Number(this.curszs);var e=sessionStorage.getItem("risk");if(e){e=JSON.parse(e);var i=Object(o["riskSz"])(e);console.log(e),console.log(i),this.curszs>=i&&(this.curszs-=i)}if(this.curszs>=160)return this.curszs=160,void(this.show1=!1);this.querySz(160)},chkJy:function(){var t=this,s=o["jyInfo"].mx,e=o["jyInfo"].sp;this.toline2[2]=this.xxsjjy[1]+252e6;for(var i=0;i<s.length;++i)if(s[i].lvl===this.jydj){this.bqmx=s[i].bq,this.hgmx=s[i].hg;break}for(var a=0;a<e.length;++a)if(this.jyxl>=e[a].xl){this.bqsd=e[a].bqsd,this.hgsd=e[a].hgsd;break}this.toline2[0]=this.bqmx/this.bqsd*3600*1e3+this.xxsjjy[0],this.toline2[1]=this.hgmx/this.hgsd*3600*1e3+this.xxsjjy[0],this.curbq=((new Date).valueOf()-this.xxsjjy[0])/1e3/3600*this.bqsd,this.curhg=((new Date).valueOf()-this.xxsjjy[1])/1e3/3600*this.hgsd,clearInterval(c),clearInterval(l);var c=setInterval((function(){(new Date).valueOf();t.curbq+=t.bqsd/3600,t.curbqt=Math.floor(3600*(Math.ceil(t.curbq)-t.curbq)/t.bqsd),t.curbq>=t.bqmx&&(console.log("ok"),t.curbq=t.bqmx,clearInterval(c))}),1e3),l=setInterval((function(){(new Date).valueOf();t.curhg+=t.hgsd/3600,t.curhgt=Math.floor(3600*(Math.ceil(t.curhg)-t.curhg)/t.hgsd),t.curhg>=t.hgmx&&(t.curhg=t.hgmx,clearInterval(l))}),1e3)},querySz:function(t){var s=this;(t>160||isNaN(t)||!t||t<this.curszs)&&(this.$message.warning("输入无效！"),t=160),this.pshow.toszs=t,this.pshow.toline=(t-this.szs)*h+this.xxsj,clearInterval(e);var e=setInterval((function(){var t=(new Date).valueOf();s.pshow.totime=s.pshow.toline-t,s.curszs=s.curszs+1e3/h,s.curmin=(s.pshow.totime/1e3%3600%(h/1e3)).toFixed(0),s.curszs>=160&&(s.curszs=160,clearInterval(e))}),1e3)},chkShow:function(t){var s=!0;return t<this.curszs&&t%40===0&&(s=!1),s},reSet:function(t){var s=this,e=JSON.stringify(t);this.$confirm("是否删除这些".concat(e,"的Cookie?"),"提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){for(var e=0;e<t.length;++e)Object(v["a"])(t[e]);s.flsh()})).catch((function(){s.$message({type:"info",message:"已取消"})}))},doOk:function(t){for(var s=0;s<t.length;++s)Object(v["d"])(t[s].k,t[s].v,100);this.flsh()},initCook:function(){var t=Object(v["b"])("树脂数"),s=Number(Object(v["b"])("树脂下线时间"));if(null!==t&&s){this.flagsz=!0,this.szs=Number(t),this.xxsj=s;var e=new Date(this.xxsj).valueOf(),i=(new Date).valueOf();this.chkSz(e,i)}else this.xxsj=new Date;var a=Object(v["b"])("加成角色"),c=Number(Object(v["b"])("探索下线时间"));""!==a&&c?(this.flagts=!0,this.tsjc=a,this.xxsjts=c,a&&(this.toline1[0]=this.xxsjts+54e6),this.toline1[1]=this.xxsjts+72e6):this.xxsjts=new Date;var l=Number(Object(v["b"])("质变仪下线时间"));l?(this.flagzby=!0,this.xxsjzby=l,this.tolinezby=l+6048e5):this.xxsjzby=new Date;var n=Object(v["b"])("家园等级"),o=Object(v["b"])("家园仙力"),r=Number(Object(v["b"])("壶灵下线时间")),h=Number(Object(v["b"])("种植下线时间"));if(r&&h)this.flagjy.zz=!0,this.xxsjjy[0]=r,this.xxsjjy[1]=h;else{var u=new Date;this.xxsjjy[0]=u,this.xxsjjy[1]=u}null!==n&&null!==o&&(this.flagjy.jybhg=!0,this.jydj=Number(n),this.jyxl=Number(o),this.flagjy.zz&&this.chkJy()),console.log(this.jydj,this.jyxl)}},created:function(){this.initCook()}},x=d,f=(e("a441"),e("a6f8"),e("2877")),j=Object(f["a"])(x,i,a,!1,null,"0cbf0670",null);s["default"]=j.exports},"7c48":function(t,s,e){},"9af2":function(t,s,e){},a441:function(t,s,e){"use strict";e("9af2")},a6f8:function(t,s,e){"use strict";e("7c48")}}]);
//# sourceMappingURL=chunk-3f981e55.da6c14e2.js.map