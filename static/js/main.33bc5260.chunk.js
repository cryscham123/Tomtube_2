(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(28),r=s.n(i),o=(s(38),s(8)),l=(s(39),s(2)),u=(s(40),function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),s=Object(l.e)();return Object(c.jsxs)("form",{className:"input",ref:e,onSubmit:function(c){c.preventDefault();var n=t.current.value;n&&s.push("/search/".concat(n)),window.scroll({top:0,behavior:"smooth"}),e.current.reset()},children:[Object(c.jsx)("input",{className:"input__input",placeholder:"Youtube Search for...",ref:t}),Object(c.jsx)("button",{className:"input__submit",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-search"})})]})}),j=function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)(o.b,{className:"header__title",to:"/",children:[Object(c.jsx)("i",{className:"fab fa-youtube header__title__icon"}),Object(c.jsx)("h3",{className:"header__title__title",children:"TomTube"})]}),Object(c.jsx)(u,{})]})},d=s(32),h=(s(45),s(46),function(e){var t=e.id,s=e.title,n=e.channel,a=e.des,i=e.thumbnails;return Object(c.jsxs)(o.b,{to:{pathname:"/details/".concat(t),state:{id:t,title:s,channel:n,des:a,thumbnails:i,fromNavigation:!0}},className:"item",onClick:window.scroll({top:0,behavior:"smooth"}),children:[Object(c.jsx)("img",{src:i,className:"item__thumb"}),Object(c.jsxs)("div",{className:"item__info",children:[Object(c.jsx)("h3",{className:"item__info__title",children:s}),Object(c.jsx)("p",{className:"item__info__channel",children:n})]})]})}),b=function(e){var t=e.youtube,s=Object(n.useState)([]),a=Object(d.a)(s,2),i=a[0],r=a[1],o=Object(l.f)().pathname;return Object(n.useEffect)((function(){"/"===o||"/details"===o.slice(0,8)?t.mostViewed().then((function(e){return r(e)})):t.search(o.slice(8)).then((function(e){return r(e)}))}),[o]),Object(c.jsxs)("ul",{className:"items",children:[Object(c.jsx)("p",{className:"items__info",children:"/"===o||"/details"===o.slice(0,8)?"Most Viewed...":"Results..."}),i.map((function(e){return Object(c.jsx)(h,{id:"string"===typeof e.id?e.id:e.id.videoId,title:e.snippet.title,channel:e.snippet.channelTitle,des:e.snippet.description,thumbnails:e.snippet.thumbnails.medium.url},"string"===typeof e.id?e.id:e.id.videoId)}))]})},m=s(11),p=s.n(m),f=s(17),_=s(30),O=s(31),x=s.n(O),v=function e(t){var s=this;Object(_.a)(this,e),this.mostViewed=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:24}});case 2:return t=e.sent,c=t.data.items,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)}))),this.search=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.youtube.get("search",{params:{part:"snippet",maxResults:24,q:t,type:"video"}});case 2:return c=e.sent,n=c.data.items,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.youtube=x.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:t}})},N=(s(65),function(e){var t=e.history,s=e.location.state,n=new v("AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg");return void 0===s?(t.push("/"),null):Object(c.jsxs)("div",{className:"details",children:[Object(c.jsxs)("div",{className:"details__video",children:[Object(c.jsx)("button",{className:"details__video__des",children:Object(c.jsx)("i",{className:"fas fa-chevron-down"})}),Object(c.jsx)("iframe",{id:"ytplayer",type:"text/html",width:"720",height:"405",src:"https://www.youtube.com/embed/".concat(s.id),frameborder:"0",allowfullscreen:!0}),Object(c.jsxs)("div",{className:"details__video__info",children:[Object(c.jsx)("h3",{className:"details__video__info__title",children:s.title}),Object(c.jsx)("p",{className:"details__video__info__channel",children:s.channel})]})]}),Object(c.jsx)(b,{youtube:n})]})}),y=(s(66),function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("div",{className:"footer__creator",children:Object(c.jsx)("p",{className:"footer__creator__name",children:"\uae40\ud615\ud6c8"})}),Object(c.jsx)("div",{className:"footer__contacts",children:Object(c.jsxs)("div",{className:"footer__contacts__content",children:[Object(c.jsx)("p",{children:"cryscham123@naver.com"}),Object(c.jsx)("p",{children:"010-0000-0000"})]})}),Object(c.jsx)("div",{className:"footer__policy",children:Object(c.jsxs)("div",{className:"footer__policy__content",children:[Object(c.jsx)("p",{children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(c.jsx)("p",{children:"\uc774\uc6a9\uc57d\uad00"}),Object(c.jsx)("p",{children:"\uc81c\ud734\uc81c\uc548"})]})})]})});var w=function(){var e=new v("AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg");return Object(c.jsxs)("div",{className:"grid",children:[Object(c.jsxs)(o.a,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(l.a,{path:"/",exact:!0,children:Object(c.jsx)(b,{youtube:e})}),Object(c.jsx)(l.a,{path:"/search/:id",children:Object(c.jsx)(b,{youtube:e})}),Object(c.jsx)(l.a,{path:"/details/:id",component:N})]}),Object(c.jsx)(y,{})]})};s(67);r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.33bc5260.chunk.js.map