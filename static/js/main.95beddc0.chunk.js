(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,a,t){},39:function(e,a,t){e.exports=t.p+"static/media/caye.364ac792.png"},40:function(e,a,t){e.exports=t.p+"static/media/caye-hi.b7b7076d.png"},41:function(e,a,t){e.exports=t.p+"static/media/caye-pc.22373ede.png"},45:function(e,a,t){e.exports=t(59)},50:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=t(17),i=(t(50),t(32)),m=t(83),s=t(82),u=(t(27),t(4)),E=t(39),p=t.n(E),h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-home"},l.a.createElement("img",{src:p.a,alt:"caye",className:"caye"}),l.a.createElement("p",{className:"block"},"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. (Bill Gates)"),l.a.createElement("p",null)),l.a.createElement("p",{className:"quote"},"Hi, I'm Cayetano and this is my portfolio.",l.a.createElement("br",null),"Enjoy it!"))},g=t(40),d=t.n(g),b=function(){return l.a.createElement("div",{className:"contactDiv"},l.a.createElement("img",{src:d.a,alt:"caye",className:"caye"}),l.a.createElement("h1",null,"Contact"),l.a.createElement("a",{className:"iglink",target:"noopener",href:"https://github.com/iamcaye"},"Github : @iamcaye"),l.a.createElement("a",{className:"iglink",target:"noopener",href:"https://www.instagram.com/cayetanobiehler/"},"Instagram : @cayetanobiehler"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{className:"iglink",target:"noopener",href:"mailto:cayetano.biehler@gmail.com"},"Gmail : cayetano.biehler@gmail.com"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{className:"iglink",target:"noopener",href:"https://www.linkedin.com/in/cayetano-biehler-pollaci-0074091b0/"},"LinkedIn: Cayetano Biehler"))},f=t(41),y=t.n(f),v=function(e){if(void 0!==e)return e=e.repos,l.a.createElement("table",{className:"GithubTable"},l.a.createElement("caption",{className:"GithubCaption"},"My Github Repos"),l.a.createElement("thead",null),l.a.createElement("tbody",null,l.a.createElement("tr",{className:"GitHead"},l.a.createElement("th",null,l.a.createElement("p",null,"Name")),l.a.createElement("th",null,l.a.createElement("p",null,"Description")),l.a.createElement("th",null,l.a.createElement("p",null,"Language"))),e.map((function(e){return l.a.createElement("tr",{key:e.id,className:"GithubTableRow"},l.a.createElement("th",null,l.a.createElement("a",{href:e.html_url,target:"noopener"},e.name.toUpperCase())),l.a.createElement("th",null,l.a.createElement("p",{className:"GitDesc"},null==e.description?"-- No description --":e.description)),l.a.createElement("th",null,l.a.createElement("p",null,e.language)))}))),l.a.createElement("tfoot",null))},N=function(e){if(void 0!==e)return e=e.repos,l.a.createElement("div",{className:"gitLiteMain"},l.a.createElement("h2",{className:"GithubCaption"},"My Github Repos"),e.map((function(e){return l.a.createElement("div",{key:e.id,className:"gitContainer"},l.a.createElement("a",{href:e.html_url,target:"noopener"},e.name.toUpperCase()),l.a.createElement("p",null,null==e.description?"-- No description --":e.description),l.a.createElement("p",null,l.a.createElement("b",null,"Language:")," ",e.language))})))},k=function(){var e=l.a.useState([]),a=Object(i.a)(e,2),t=a[0],n=a[1];return l.a.useEffect((function(){var e=new AbortController;return function(e){fetch("https://api.github.com/users/iamcaye/repos",{signal:e}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){return console.error(e)}))}(e.signal),function(){e.abort()}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:y.a,alt:"caye",className:"caye"}),l.a.createElement("span",null,l.a.createElement("h1",null,"About me"),l.a.createElement("p",{className:"quote"},"Currently studying Electronic Engineering (4rd year) in M\xe1laga",l.a.createElement("br",null)," and self-taught software developer."))),l.a.createElement("div",{className:"container"},l.a.createElement("span",null,l.a.createElement("h2",null,"Electronics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"Advanced level on circuit analysis & design")),l.a.createElement("li",null,l.a.createElement("p",null,"Advanced knowledge on the MSP430G2ET microcontroller and its library")),l.a.createElement("li",null,l.a.createElement("p",null,"Advanced knowledge on the TIVA TM4C123G microcontroller and its library")),l.a.createElement("li",null,l.a.createElement("p",null,"Medium level VHDL programming")))),l.a.createElement("span",null,l.a.createElement("h2",null,"Coding"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"Advanced level C programming, used for communication between processes and multi-processing")),l.a.createElement("li",null,l.a.createElement("p",null,"C++11 programming (OOP)")),l.a.createElement("li",null,l.a.createElement("p",null,"Self-taught Python programming (OOP, Django and a little bit of deep learning...)")),l.a.createElement("li",null,l.a.createElement("p",null,"Self-taught Javascript porgramming, currently learning ReactJS for Web Development"))))),l.a.createElement("div",{className:"container"},l.a.createElement(v,{repos:t}),l.a.createElement(N,{repos:t})))},C=function(){return l.a.createElement("nav",{className:"nav-main"},l.a.createElement("p",{className:"nav-title"},"Cayetano Biehler"),l.a.createElement(o.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(o.b,{className:"nav-link",to:"about"},"About"),l.a.createElement(o.b,{className:"nav-link",to:"contact"},"Contact"),l.a.createElement("a",{className:"nav-link-last",href:"https://iamcaye.github.io/blog/",target:"noopener"},"Blog"))},w=function(){var e=l.a.useState(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],r=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&n(e)}};return l.a.createElement("div",{className:"nav-main-lite"},l.a.createElement("p",null,"Cayetano Biehler"),l.a.createElement(m.a,{onClick:r(!0)},"MENU"),l.a.createElement(s.a,{anchor:"top",open:t,onClose:r(!1)},l.a.createElement("p",null,"Cayetano Biehler"),l.a.createElement(o.b,{onClick:r(!1),className:"first-nav-link-l",to:"/"},"Home"),l.a.createElement(o.b,{onClick:r(!1),className:"nav-link-l",to:"about"},"About"),l.a.createElement(o.b,{onClick:r(!1),className:"nav-link-l",to:"contact"},"Contact"),l.a.createElement("a",{onClick:r(!1),className:"nav-link-l",target:"noopener",href:"https://iamcaye.github.io/blog/"},"Blog")))},G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(C,null),l.a.createElement(w,null),l.a.createElement("div",null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(h,null)),l.a.createElement(u.a,{path:"/about"},l.a.createElement(k,null)),l.a.createElement(u.a,{path:"/contact"},l.a.createElement(b,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.hydrate(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,{basename:"/",hashType:"slash"},l.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.95beddc0.chunk.js.map