(this["webpackJsonpseeds-card-config"]=this["webpackJsonpseeds-card-config"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},13:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);n(13);var a=n(3),c=n(4),r=n(7),i=n(6),o=n(10),s=n(0),u=n.n(s),l=n(9),d=n.n(l),f=n(11),h=(n(18),function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={cardname:"checking"},c}return Object(c.a)(n,[{key:"handleCardChange",value:function(e){this.setState((function(t){return Object(f.a)({},t,{cardname:e})}))}},{key:"render",value:function(){var e=this,t=this.state.cardname;return u.a.createElement("div",null,u.a.createElement("h1",null,"Insert the microservice SERVER_SERVLET_CONTEXT_PATH"),u.a.createElement("label",{htmlFor:"cardname"},"Card name"),u.a.createElement("select",{name:"cardname",value:t,onChange:function(t){return e.handleCardChange(t.target.value)}},u.a.createElement("option",{value:""},"Select a value"),u.a.createElement("option",{value:"checking"},"Checking"),u.a.createElement("option",{value:"creditcard"},"Credit Card"),u.a.createElement("option",{value:"savings"},"Savings")))}}]),n}(s.Component)),m=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).reactRoofRef=u.a.createRef(),e.mountPoint=null,e}return Object(c.a)(n,[{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),d.a.render(u.a.createElement(h,{ref:this.reactRoofRef}),this.mountPoint)}},{key:"config",get:function(){return this.reactRoofRef.current?this.reactRoofRef.current.state:{}},set:function(e){return this.reactRoofRef.current.setState(e)}}]),n}(Object(o.a)(HTMLElement));customElements.get("sd-seeds-card-config")||customElements.define("sd-seeds-card-config",m)}},[[12,1,2]]]);
//# sourceMappingURL=main.2fbc8335.chunk.js.map