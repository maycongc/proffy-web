(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{38:function(e,a,t){},39:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(30),l=t.n(n),i=(t(38),t(10)),r=t(2),o=t(4),b=t.p+"static/media/logo.29ffb1ae.svg",j=t.p+"static/media/landing.12dc888d.svg",u=t.p+"static/media/purple-heart.f9c387fc.svg",d=t.p+"static/media/study.60518e96.svg",O=t.p+"static/media/give-classes.a6e3fd8d.svg",m=(t(39),t(31)),h=t.n(m).a.create({baseURL:"http://localhost:3333"}),v=t(0),p=function(){var e=Object(c.useState)(0),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){h.get("/connections").then((function(e){var a=e.data.total;s(a)}))}),[]),Object(v.jsx)("div",{id:"page-landing",children:Object(v.jsxs)("div",{id:"page-landing-content",className:"",children:[Object(v.jsxs)("div",{className:"logo-container",children:[Object(v.jsx)("img",{src:b,alt:"Proffy"}),Object(v.jsx)("h2",{children:"Sua plataforma de estudos online!"})]}),Object(v.jsx)("img",{src:j,alt:"Sua plataforma de estudos",className:"hero-image"}),Object(v.jsxs)("div",{className:"buttons-container",children:[Object(v.jsxs)(i.b,{to:"/study",className:"study",children:[Object(v.jsx)("img",{src:d,alt:"Estudar"}),"Estudar"]}),Object(v.jsxs)(i.b,{to:"/give-classes",className:"give-classes",children:[Object(v.jsx)("img",{src:O,alt:"Dar Aula"}),"Dar Aula"]})]}),Object(v.jsxs)("span",{className:"total-connections",children:["Total de ",t," conex\xf5es j\xe1 realizadas",Object(v.jsx)("img",{src:u,alt:"Cora\xe7\xe3o roxo"})]})]})})},x=(t(64),t(65),t.p+"static/media/back.7ead4ae8.svg"),f=function(e){var a=e.title,t=e.description,c=e.children;return Object(v.jsxs)("header",{className:"page-header",children:[Object(v.jsxs)("div",{className:"top-bar-container",children:[Object(v.jsx)(i.b,{to:"/",children:Object(v.jsx)("img",{src:x,alt:"Voltar"})}),Object(v.jsx)("img",{src:b,alt:"Proffy"})]}),Object(v.jsxs)("div",{className:"header-content",children:[Object(v.jsx)("strong",{children:a}),t&&Object(v.jsx)("p",{children:t}),c]})]})},g=(t(66),t.p+"static/media/whatsapp.30459c89.svg"),S=function(e){var a=e.id,t=e.name,c=e.subject,s=e.avatar,n=e.bio,l=e.cost,i=e.whatsapp;return Object(v.jsxs)("article",{className:"teacher-item",children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("img",{src:s,alt:"Professor"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("strong",{children:t}),Object(v.jsx)("span",{children:c})]})]}),Object(v.jsx)("p",{children:n}),Object(v.jsxs)("footer",{children:[Object(v.jsxs)("p",{children:["Valor/hora",Object(v.jsxs)("strong",{children:["R$ ",l]})]}),Object(v.jsxs)("a",{onClick:function(){h.post("/connections",{user_id:a})},href:"https://wa.me/".concat(i),target:"_blank",rel:"noopener noreferrer",children:[Object(v.jsx)("img",{src:g,alt:"Whatsapp"}),"Entrar em contato"]})]})]})},y=t(9),C=t(12),N=(t(67),function(e){var a=e.label,t=e.name,c=Object(C.a)(e,["label","name"]);return Object(v.jsx)("div",{className:"input-block",children:Object(v.jsxs)("label",{htmlFor:t,children:[a,Object(v.jsx)("input",Object(y.a)({type:"text",id:t},c))]})})}),k=(t(68),function(e){var a=e.label,t=e.name,c=e.options,s=Object(C.a)(e,["label","name","options"]);return Object(v.jsx)("div",{className:"select-block",children:Object(v.jsxs)("label",{htmlFor:t,children:[a,Object(v.jsxs)("select",Object(y.a)(Object(y.a)({value:"",id:t},s),{},{children:[Object(v.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Selecione uma op\xe7\xe3o"}),c.map((function(e){return Object(v.jsx)("option",{value:e.value,children:e.label},e.value)}))]}))]})})}),w=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(""),l=Object(o.a)(n,2),i=l[0],r=l[1],b=Object(c.useState)(""),j=Object(o.a)(b,2),u=j[0],d=j[1],O=Object(c.useState)([]),m=Object(o.a)(O,2),p=m[0],x=m[1];return Object(c.useEffect)((function(){var e=!0;""!==i&&""!==u&&""!==t||(e=!1),e&&h.get("/classes",{params:{subject:t,week_day:i,time:u}}).then((function(e){x(e.data)}))}),[i,u,t]),Object(v.jsxs)("div",{id:"page-teacher-list",className:"container",children:[Object(v.jsx)(f,{title:"Estes s\xe3o os proffys dispon\xedveis.",children:Object(v.jsxs)("form",{id:"search-teachers",children:[Object(v.jsx)(k,{label:"Dia da Semana",name:"week_day",value:i,onChange:function(e){e.preventDefault(),r(e.target.value)},options:[{value:"1",label:"Domingo"},{value:"2",label:"Segunda-Feira"},{value:"3",label:"Ter\xe7a-Feira"},{value:"4",label:"Quarta-Feira"},{value:"5",label:"Quinta-Feira"},{value:"6",label:"Sexta-Feira"},{value:"7",label:"S\xe1bado"}]}),Object(v.jsx)(N,{label:"Hora",name:"time",type:"time",value:u,onChange:function(e){e.preventDefault(),d(e.target.value)}}),Object(v.jsx)(k,{label:"Mat\xe9ria",name:"subject",value:t,onChange:function(e){e.preventDefault(),s(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o Fisica",label:"Educa\xe7\xe3o Fisica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Qu\xedmica",label:"Qu\xedmica"}]})]})}),Object(v.jsx)("main",{children:p.map((function(e){return Object(v.jsx)(S,{id:e.id,name:e.name,subject:e.subject,avatar:e.avatar,bio:e.bio,cost:e.cost,whatsapp:e.whatsapp},e.id)}))})]})},F=t(16),D=t(33),E=(t(69),t(70),function(e){var a=e.label,t=e.name,c=Object(C.a)(e,["label","name"]);return Object(v.jsx)("div",{className:"textarea-block",children:Object(v.jsxs)("label",{htmlFor:t,children:[a,Object(v.jsx)("textarea",Object(y.a)({id:t},c))]})})}),A=t.p+"static/media/warning.852df132.svg",Q=function(){var e=Object(r.e)(),a=Object(c.useState)(""),t=Object(o.a)(a,2),s=t[0],n=t[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),b=i[0],j=i[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),O=d[0],m=d[1],p=Object(c.useState)(""),x=Object(o.a)(p,2),g=x[0],S=x[1],C=Object(c.useState)(""),w=Object(o.a)(C,2),Q=w[0],P=w[1],_=Object(c.useState)(""),M=Object(o.a)(_,2),B=M[0],H=M[1],G=Object(c.useState)([{week_day:0,from:"",to:"",key:0}]),T=Object(o.a)(G,2),q=T[0],z=T[1];function I(e,a,t){var c=q.map((function(c,s){return s===e?Object(y.a)(Object(y.a)({},c),{},Object(F.a)({},a,t)):c}));z(c)}return Object(v.jsxs)("div",{id:"page-teacher-form",className:"container",children:[Object(v.jsx)(f,{title:"Que incr\xedvel que voc\xea quer dar aulas!",description:"O primeiro passo, \xe9 preencher esse\r formul\xe1rio de inscri\xe7\xe3o."}),Object(v.jsx)("main",{children:Object(v.jsxs)("form",{onSubmit:function(a){a.preventDefault();var t={name:s,avatar:b,whatsapp:O,bio:g,subject:Q,cost:Number(B),schedule:q};h.post("/classes",t).then((function(){alert("Cadastro realizado com sucesso!"),setTimeout((function(){e.push("/")}),1500)})).catch((function(){alert("Erro ao cadastrar a aula.")}))},children:[Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Seus Dados"}),Object(v.jsx)(N,{label:"Nome completo",name:"name",onChange:function(e){n(e.target.value)}}),Object(v.jsx)(N,{label:"Avatar",name:"avatar",onChange:function(e){j(e.target.value)}}),Object(v.jsx)(N,{label:"Whatsapp",name:"whatsapp",onChange:function(e){m(e.target.value)}}),Object(v.jsx)(E,{label:"Biografia",name:"bio",onChange:function(e){S(e.target.value)}})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Sobre a aula"}),Object(v.jsx)(k,{label:"Mat\xe9ria",name:"subject",onChange:function(e){P(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o Fisica",label:"Educa\xe7\xe3o Fisica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Qu\xedmica",label:"Qu\xedmica"}]}),Object(v.jsx)(N,{label:"Custo da sua hora por aula",name:"cost",onChange:function(e){H(e.target.value)}})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsxs)("legend",{children:["Hor\xe1rios dispon\xedveis",Object(v.jsx)("button",{type:"button",onClick:function(){return function(){var e=[].concat(Object(D.a)(q),[{week_day:0,from:"",to:"",key:q.length}]);z(e)}()},children:"+ Adicionar hor\xe1rio"})]}),q.map((function(e,a){return Object(v.jsxs)("div",{className:"schedule-item",children:[Object(v.jsx)(k,{label:"Dia da Semana",name:"week_day",onChange:function(e){return I(a,"week_day",Number(e.target.value))},options:[{value:"1",label:"Domingo"},{value:"2",label:"Segunda-Feira"},{value:"3",label:"Ter\xe7a-Feira"},{value:"4",label:"Quarta-Feira"},{value:"5",label:"Quinta-Feira"},{value:"6",label:"Sexta-Feira"},{value:"7",label:"S\xe1bado"}]}),Object(v.jsx)(N,{label:"Das",name:"from",type:"time",onChange:function(e){return I(a,"from",e.target.value)}}),Object(v.jsx)(N,{label:"At\xe9",name:"to",type:"time",onChange:function(e){return I(a,"to",e.target.value)}})]},e.key)}))]}),Object(v.jsxs)("footer",{children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("img",{src:A,alt:"Aviso"}),"Importante!",Object(v.jsx)("br",{}),"Preencha todos os dados"]}),Object(v.jsx)("button",{type:"submit",children:"Salvar cadastro"})]})]})})]})},P=function(){return Object(v.jsxs)(i.a,{children:[Object(v.jsx)(r.a,{path:"/",exact:!0,component:p}),Object(v.jsx)(r.a,{path:"/study",component:w}),Object(v.jsx)(r.a,{path:"/give-classes",component:Q})]})},_=function(){return Object(v.jsx)(P,{})};l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.8583a4ee.chunk.js.map