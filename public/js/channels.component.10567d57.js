"use strict";(self["webpackChunkmoleculerspa"]=self["webpackChunkmoleculerspa"]||[]).push([[652],{2535:(e,l,n)=>{n.r(l),n.d(l,{default:()=>_});var a=n(3673),t=n(2323);const s=(0,a.HX)("data-v-1e55cc22");(0,a.dD)("data-v-1e55cc22");const o={class:"shadow-11"},d=(0,a.Uk)(" Action ' "),i=(0,a.Uk)("' "),u={class:"content"},c={class:"request"},r=(0,a.Wm)("h4",null,"Request:",-1),p={key:0,class:"parameters"},m=(0,a.Wm)("h4",null,"Parameters:",-1),h={key:1,class:"response"},f=(0,a.Uk)(" Response: ");(0,a.Cn)();const y=s(((e,l,n,y,v,b)=>{const w=(0,a.up)("q-btn"),D=(0,a.up)("q-input"),T=(0,a.up)("q-badge");return(0,a.wg)(),(0,a.j4)("section",null,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.requests,(l=>((0,a.wg)(),(0,a.j4)("fieldset",{key:l.id},[(0,a.Wm)("legend",o,[d,(0,a.Wm)("code",null,(0,t.zw)(l.action),1),i]),(0,a.Wm)("div",u,[(0,a.Wm)("div",c,[r,(0,a.Wm)("code",null,[(0,a.Uk)((0,t.zw)(l.method||"GET")+" ",1),(0,a.Wm)("a",{target:"_blank",href:l.rest},(0,t.zw)(l.rest),9,["href"])]),(0,a.Wm)(w,{color:"secondary",icon:"send",label:"Execute",class:"q-ml-md shadow-11",onClick:n=>e.callAction(l)},null,8,["onClick"])]),l.fields?((0,a.wg)(),(0,a.j4)("div",p,[m,((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(l.fields,(l=>((0,a.wg)(),(0,a.j4)("div",{class:"field",key:l.field},["text"==l.type?((0,a.wg)(),(0,a.j4)(D,{key:0,clearable:"","clear-icon":"close",filled:"",color:"purple-12",modelValue:e.fields[l.model],"onUpdate:modelValue":n=>e.fields[l.model]=n,label:l.label,type:l.type},null,8,["modelValue","onUpdate:modelValue","label","type"])):((0,a.wg)(),(0,a.j4)(D,{key:1,clearable:"","clear-icon":"close",filled:"",color:"purple-12",modelValue:e.fields[l.model],"onUpdate:modelValue":n=>e.fields[l.model]=n,modelModifiers:{number:!0},label:l.label,type:l.type},null,8,["modelValue","onUpdate:modelValue","label","type"]))])))),128))])):(0,a.kq)("",!0),l.status?((0,a.wg)(),(0,a.j4)("div",h,[(0,a.Wm)("h4",null,[f,(0,a.Wm)(T,{color:l.status<400?"green":"red"},{default:s((()=>[(0,a.Uk)((0,t.zw)(l.status),1)])),_:2},1032,["color"]),(0,a.Wm)(T,{color:"black",class:"q-ml-sm"},{default:s((()=>[(0,a.Uk)((0,t.zw)(e.humanize(l.duration)),1)])),_:2},1024)]),(0,a.Wm)("pre",null,[(0,a.Wm)("code",null,(0,t.zw)(l.response),1)])])):(0,a.kq)("",!0)])])))),128))])}));var v=n(1959),b=n(9582),w=n(1768),D=function(e,l,n,a){function t(e){return e instanceof n?e:new n((function(l){l(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{i(a.next(e))}catch(l){s(l)}}function d(e){try{i(a["throw"](e))}catch(l){s(l)}}function i(e){e.done?n(e.value):t(e.value).then(o,d)}i((a=a.apply(e,l||[])).next())}))};let T=(0,v.qj)([{id:"list",action:"v1.channels.list",rest:"/api/v1/channels/",response:null,status:null,duration:null,afterResponse:e=>!(void 0).fields.channelID&&((void 0).fields.channelID=e.rows[0]._id)},{id:"create",action:"v1.channels.create",rest:"/api/v1/channels/",method:"POST",fields:[{field:"name",label:"Name",type:"text",paramType:"body",model:"channelName"}],response:null,status:null,duration:null,afterResponse:e=>(void 0).fields.channelID=e._id},{id:"get",action:"v1.channels.get",rest:"/api/v1/channels/:id",method:"GET",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"}],response:null,status:null,duration:null},{id:"update",action:"v1.channels.update",rest:"/api/v1/channels/:id",method:"PUT",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"},{field:"name",label:"Name",type:"text",paramType:"body",model:"channelName"}],response:null,status:null,duration:null},{id:"delete",action:"v1.channels.delete",rest:"/api/v1/channels/:id",method:"DELETE",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"}],response:null,status:null,duration:null}]);const k={channelID:null,channelName:"板块名称"};function g(e){return k[e.model]}function I(e){return e>1500?`${(e/1500).toFixed(2)} s`:`${e} ms`}function x(e,l,n){return D(this,void 0,void 0,(function*(){return yield(0,w.axios)({method:l,url:e,data:n})}))}function E(e){const l=Date.now();let n=e.rest;const a=e.method||"GET";let t=null,s=null;return e.fields&&(t={},s={},e.fields.forEach((e=>{const l=g(e);"body"==e.paramType?t[e.field]=l:"param"==e.paramType?s[e.field]=l:"url"==e.paramType&&(n=n.replace(`:${e.field}`,l))})),t&&"GET"==a&&(t=null),s&&(n+="?"+new URLSearchParams(s).toString())),x(n,a,t).then((n=>(e.status=n.status,e.duration=Date.now()-l,e.response=n.data))).catch((n=>{e.status="ERR",e.duration=Date.now()-l,e.response=n.message,console.log(n)}))}const W=(0,a.aZ)({name:"CompositionComponent",setup(){return(0,b.iS)((()=>{T=(0,v.qj)([{id:"list",action:"v1.channels.list",rest:"/api/v1/channels/",response:null,status:null,duration:null,afterResponse:e=>!this.fields.channelID&&(this.fields.channelID=e.rows[0]._id)},{id:"create",action:"v1.channels.create",rest:"/api/v1/channels/",method:"POST",fields:[{field:"name",label:"Name",type:"text",paramType:"body",model:"channelName"}],response:null,status:null,duration:null,afterResponse:e=>this.fields.channelID=e._id},{id:"get",action:"v1.channels.get",rest:"/api/v1/channels/:id",method:"GET",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"}],response:null,status:null,duration:null},{id:"update",action:"v1.channels.update",rest:"/api/v1/channels/:id",method:"PUT",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"},{field:"name",label:"Name",type:"text",paramType:"body",model:"channelName"}],response:null,status:null,duration:null},{id:"delete",action:"v1.channels.delete",rest:"/api/v1/channels/:id",method:"DELETE",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"}],response:null,status:null,duration:null}])})),{requests:T,callAction:E,humanize:I,fields:k}}});var q=n(4607),U=n(4842),j=n(9721),N=n(7518),R=n.n(N);W.render=y,W.__scopeId="data-v-1e55cc22";const _=W;R()(W,"components",{QBtn:q.Z,QInput:U.Z,QBadge:j.Z})}}]);