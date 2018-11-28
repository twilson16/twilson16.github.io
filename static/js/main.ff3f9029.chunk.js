(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/cropped_misery_ridge_adj.498628a4.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/qr-scan.578d66fe.png"},18:function(e,t,a){e.exports=a.p+"static/media/square-game.0cb18269.png"},19:function(e,t,a){e.exports=a.p+"static/media/ChristinaWilsonResume2018.76b4a927.png"},20:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=a(32),o=a(3),s=a(4),m=a(6),u=a(5),p=a(7),h=a(31),d=(a(10),a(33)),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-text-container"},r.a.createElement("div",{className:"header-name"},"Tina Wilson"),r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"menu-bar"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{className:"menu-item"},r.a.createElement(d.a,{to:"/portfolio",className:"menu-link"},"Portfolio")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(d.a,{to:"/about",className:"menu-link"},"About Me")),r.a.createElement("li",{className:"menu-item resume"},r.a.createElement(d.a,{to:"/resume",className:"menu-link"},"Resume")))))))}}]),t}(n.Component),f=a(16),E=a.n(f),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{className:"about-image",src:E.a,alt:"Misery Ridge, OR"})),r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",{className:"about-title"},"About Me"),r.a.createElement("div",{className:"about-info"},r.a.createElement("p",{className:"intro"},"I am a person who likes to have a destination. Even simply going for a walk or a drive, I have an endpoint, a goal, and put a lot of thought into the most efficient way to get to get there. I apply that to my life in general as well, both in pursuing software development, and in my previous social work career. On a daily basis I set goals for myself, and work to reach them despite challenges arise by also valuing the unexpected detours that come with any challenges. This is especially true for work projects and assignments - where I strive for excellence."),r.a.createElement("br",null),r.a.createElement("p",null,"I recently completed a front-end development immersive program with Momentum Learning. Prior to that, I was a social worker in community mental health for 5 years. I truly enjoyed the work I was doing previously, and I wanted to develop new skills that challenge me in different ways."),r.a.createElement("br",null),r.a.createElement("p",{className:"photo-description"},"Above: a photo I took after completing the hike to the top of Misery Ridge in Oregon\u2019s Smith Rock State Park.")))))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={project:[]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.project;return console.log(e.examples),r.a.createElement("div",{className:"single-project"},r.a.createElement("div",{className:"information"},r.a.createElement("div",{className:"project-title"},e.title),r.a.createElement("div",{className:"project-desc"},e.description),r.a.createElement("div",{className:"project-tech"},"Technologies: ",e.tech),r.a.createElement("div",{className:"project-links"},r.a.createElement("p",{className:"project-github"},r.a.createElement("a",{href:e.github,target:"blank"},"Code on Github")),e.live.length>0&&r.a.createElement("p",{className:"live-site-container"},r.a.createElement("span",{className:"space hidden"},"\xa0|\xa0"),r.a.createElement("span",{className:"project-live"},r.a.createElement("a",{href:e.live,target:"blank"},"Live Site"))),""!==e.presentation&&r.a.createElement("p",{className:"presentation-container"},r.a.createElement("span",{className:"space hidden"},"\xa0|\xa0"),r.a.createElement("span",{className:"presentation"},r.a.createElement("a",{href:e.presentation,target:"blank"},"Final Group Presentation"))))),r.a.createElement("div",{className:"project-examples"},r.a.createElement("img",{className:"media",src:e.examples,alt:"Project Example"})))}}]),t}(n.Component),j=a(17),N=a.n(j),k=a(18),w=a.n(k),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={projects:[{title:"Traction App",description:"An app created as our final project for Momentum Learning's immersive program to track the distribution of Naloxone kits. The user is able to either scan a QR code on the Naloxone kit or manually input the kit number, which are then passed to a form that securely documents the personal information per state regulations.",tech:"Ruby on Rails, React, Devise gem, QR code scanner, Heroku",examples:N.a,presentation:"https://www.youtube.com/watch?v=OtG0iYPGEdI",github:"https://github.com/twilson16/HarmReductionTracker",live:"https://harm-reduction-tracker.herokuapp.com/"},{title:"Square Game",description:"A Javascript game we created at the end of Week 3 in immersive program with Momentum Learning.",tech:"Ruby on Rails, React, Devise gem, QR code scanner, Heroku",examples:w.a,presentation:"",github:"https://github.com/twilson16/square-game",live:""}]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"portfolio-container"},r.a.createElement("div",{className:"portfolio-title"},r.a.createElement("h1",null,"Portfolio")),r.a.createElement("div",{className:"project-container"},this.state.projects.map(function(e,t){return r.a.createElement(g,{key:t,project:e})})))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"social"},r.a.createElement("p",{className:"footer-name"},"\xa9 Tina Wilson 2018"),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:christinawilson6@gmail.com",target:"blank",className:"icon"},r.a.createElement("i",{class:"fas fa-envelope"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/tina-wilson16/",target:"blank",className:"icon"},r.a.createElement("i",{class:"fab fa-linkedin-in"})),r.a.createElement("a",{href:"https://github.com/twilson16",target:"blank",className:"icon"},r.a.createElement("i",{class:"fab fa-github"})))),r.a.createElement("div",null,r.a.createElement("hr",{className:"footer-break"})),r.a.createElement("div",{className:"update"},"Check back later for more updates!"))}}]),t}(n.Component),x=a(19),R=a.n(x),I=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:R.a,alt:"resume",className:"resume-img"}))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"board"},r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(h.a,{path:"/about",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(h.a,{path:"/resume",render:function(){return r.a.createElement(I,null)}})),r.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.ff3f9029.chunk.js.map