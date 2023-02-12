"use strict";(self["webpackChunkmoleculerspa"]=self["webpackChunkmoleculerspa"]||[]).push([[28],{9059:(e,l,t)=>{t.r(l),t.d(l,{default:()=>R});var s=t(3673),a=t(2323);const n=(0,s.HX)("data-v-5ca69de3");(0,s.dD)("data-v-5ca69de3");const o={class:"shadow-11"},d=(0,s.Uk)(" Action ' "),i=(0,s.Uk)("' "),u={class:"content"},r={class:"request"},m=(0,s.Wm)("h4",null,"Request:",-1),p={key:0,class:"parameters"},c=(0,s.Wm)("h4",null,"Parameters:",-1),f={key:1,class:"response"},g=(0,s.Uk)(" Response: ");(0,s.Cn)();const y=n(((e,l,t,y,h,b)=>{const T=(0,s.up)("q-btn"),v=(0,s.up)("q-input"),D=(0,s.up)("q-badge");return(0,s.wg)(),(0,s.j4)("section",null,[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(e.requests,(l=>((0,s.wg)(),(0,s.j4)("fieldset",{key:l.id},[(0,s.Wm)("legend",o,[d,(0,s.Wm)("code",null,(0,a.zw)(l.action),1),i]),(0,s.Wm)("div",u,[(0,s.Wm)("div",r,[m,(0,s.Wm)("code",null,[(0,s.Uk)((0,a.zw)(l.method||"GET")+" ",1),(0,s.Wm)("a",{target:"_blank",href:l.rest},(0,a.zw)(l.rest),9,["href"])]),(0,s.Wm)(T,{color:"secondary",icon:"send",label:"Execute",class:"q-ml-md shadow-11",onClick:t=>e.callAction(l)},null,8,["onClick"])]),l.fields?((0,s.wg)(),(0,s.j4)("div",p,[c,((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(l.fields,(l=>((0,s.wg)(),(0,s.j4)("div",{class:"field",key:l.field},["text"==l.type?((0,s.wg)(),(0,s.j4)(v,{key:0,clearable:"","clear-icon":"close",filled:"",color:"purple-12",modelValue:e.fields[l.model],"onUpdate:modelValue":t=>e.fields[l.model]=t,label:l.label,type:l.type},null,8,["modelValue","onUpdate:modelValue","label","type"])):((0,s.wg)(),(0,s.j4)(v,{key:1,clearable:"","clear-icon":"close",filled:"",color:"purple-12",modelValue:e.fields[l.model],"onUpdate:modelValue":t=>e.fields[l.model]=t,modelModifiers:{number:!0},label:l.label,type:l.type},null,8,["modelValue","onUpdate:modelValue","label","type"]))])))),128))])):(0,s.kq)("",!0),l.status?((0,s.wg)(),(0,s.j4)("div",f,[(0,s.Wm)("h4",null,[g,(0,s.Wm)(D,{color:l.status<400?"green":"red"},{default:n((()=>[(0,s.Uk)((0,a.zw)(l.status),1)])),_:2},1032,["color"]),(0,s.Wm)(D,{color:"black",class:"q-ml-sm"},{default:n((()=>[(0,s.Uk)((0,a.zw)(e.humanize(l.duration)),1)])),_:2},1024)]),(0,s.Wm)("pre",null,[(0,s.Wm)("code",null,(0,a.zw)(l.response),1)])])):(0,s.kq)("",!0)])])))),128))])}));var h=t(1959),b=t(9582),T=t(1768),v=function(e,l,t,s){function a(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,n){function o(e){try{i(s.next(e))}catch(l){n(l)}}function d(e){try{i(s["throw"](e))}catch(l){n(l)}}function i(e){e.done?t(e.value):a(e.value).then(o,d)}i((s=s.apply(e,l||[])).next())}))};let D=(0,h.qj)([{id:"list",action:"v1.messages.list",rest:"/api/v1/messages/",response:null,status:null,duration:null,afterResponse:e=>!(void 0).fields.channelID&&((void 0).fields.channelID=e.rows[0]._id)},{id:"create",action:"v1.messages.create",rest:"/api/v1/messages/",method:"POST",fields:[{field:"title",label:"Message Title",type:"text",paramType:"body",model:"messageTitle"},{field:"content",label:"Message Content",type:"text",paramType:"body",model:"messageContent"},{field:"channel",label:"Channel ID of Message",type:"text",paramType:"body",model:"channelID"}],response:null,status:null,duration:null,afterResponse:e=>(void 0).fields.channelID=e._id},{id:"get",action:"v1.messages.get",rest:"/api/v1/messages/:id",method:"GET",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"messageID"}],response:null,status:null,duration:null},{id:"update",action:"v1.messages.update",rest:"/api/v1/messages/:id",method:"PUT",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"messageID"},{field:"title",label:"Message Title",type:"text",paramType:"body",model:"messageTitle"},{field:"content",label:"Message Content",type:"text",paramType:"body",model:"messageContent"}],response:null,status:null,duration:null},{id:"delete",action:"v1.messages.delete",rest:"/api/v1/messages/:id",method:"DELETE",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"messageID"}],response:null,status:null,duration:null}]);const w={messageID:"",channelID:"",messageTitle:"消息标题",messageContent:"消息内容"};function I(e){return w[e.model]}function k(e){return e>1500?`${(e/1500).toFixed(2)} s`:`${e} ms`}function x(e,l,t){return v(this,void 0,void 0,(function*(){return yield(0,T.axios)({method:l,url:e,data:t})}))}function C(e){const l=Date.now();let t=e.rest;const s=e.method||"GET";let a=null,n=null;return e.fields&&(a={},n={},e.fields.forEach((e=>{const l=I(e);"body"==e.paramType?a[e.field]=l:"param"==e.paramType?n[e.field]=l:"url"==e.paramType&&(t=t.replace(`:${e.field}`,l))})),a&&"GET"==s&&(a=null),n&&(t+="?"+new URLSearchParams(n).toString())),x(t,s,a).then((t=>(e.status=t.status,e.duration=Date.now()-l,e.response=t.data))).catch((t=>{e.status="ERR",e.duration=Date.now()-l,e.response=t.message,console.log(t)}))}const E=(0,s.aZ)({name:"CompositionComponent",setup(){return(0,b.iS)((()=>{D=(0,h.qj)([{id:"list",action:"v1.messages.list",rest:"/api/v1/messages/",response:null,status:null,duration:null,afterResponse:e=>!this.fields.messageID&&(this.fields.messageID=e.rows[0]._id)},{id:"create",action:"v1.messages.create",rest:"/api/v1/messages/",method:"POST",fields:[{field:"title",label:"Message Title",type:"text",paramType:"body",model:"messageTitle"},{field:"content",label:"Message Content",type:"text",paramType:"body",model:"messageContent"},{field:"channel",label:"Channel ID of Message",type:"text",paramType:"body",model:"channelID"}],response:null,status:null,duration:null,afterResponse:e=>this.fields.channelID=e._id},{id:"get",action:"v1.messages.get",rest:"/api/v1/messages/:id",method:"GET",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"channelID"}],response:null,status:null,duration:null},{id:"update",action:"v1.messages.update",rest:"/api/v1/messages/:id",method:"PUT",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"messageID"},{field:"title",label:"Message Title",type:"text",paramType:"body",model:"messageTitle"},{field:"content",label:"Message Content",type:"text",paramType:"body",model:"messageContent"}],response:null,status:null,duration:null},{id:"delete",action:"v1.messages.delete",rest:"/api/v1/messages/:id",method:"DELETE",fields:[{field:"id",label:"ID",type:"text",paramType:"url",model:"messageID"}],response:null,status:null,duration:null}])})),{requests:D,callAction:C,humanize:k,fields:w}}});var W=t(4607),q=t(4842),U=t(9721),j=t(7518),M=t.n(j);E.render=y,E.__scopeId="data-v-5ca69de3";const R=E;M()(E,"components",{QBtn:W.Z,QInput:q.Z,QBadge:U.Z})}}]);