(this.webpackJsonpkatomi_assessment=this.webpackJsonpkatomi_assessment||[]).push([[0],{78:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=(n(78),n(58)),o=n(17),l=n(18),u=n(24),h=n(21),p=n(125),j=n(121),d=n(117),v=n(122),f=n(123),b=n(5),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange;return Object(b.jsx)(d.a,{children:Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(p.a,{open:!0,fullWidth:!0,maxWidth:"sm",children:[Object(b.jsx)(j.a,{title:"Katomi Test :)"}),Object(b.jsx)("h1",{children:"Welcome To Katomi Test Solution "}),Object(b.jsx)(v.a,{placeholder:"Enter number  in [0,365]",type:"number",label:"Enter Your Lucky numbe X",onChange:n("value"),defaultValue:t.value,margin:"normal",fullWidth:!0}),Object(b.jsx)("br",{}),Object(b.jsx)(f.a,{color:"primary",variant:"contained",onClick:this.continue,children:"Continue"})]})})})}}]),n}(a.Component),O=n(49),x=n.n(O),m=n(60),y=n(62),C=n.n(y),S=n(63),w=n.n(S),k=n(61),T=n.n(k),A=function(e){return Object(b.jsx)("rect",{className:"rect",width:e.width,height:e.height,x:e.x,y:e.y,fill:e.fill,"data-count":e.count,data:e.data})},D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).randomNbr=function(){return Math.floor(201*Math.random())+-100},e.generateMap=function(){for(var t=[],n=0,a=0,r=e.generateAray(),c=0;c<e.props.value;c++)r[c]>=0?(t.push(Object(b.jsx)(A,{width:"8",height:"8",x:n,y:a,"data-count":r[c],fill:"rgb(255 0 0 / "+r[c]+"%)"},c)),a+=11):(t.push(Object(b.jsx)(A,{width:"8",height:"8",x:n,y:a,fill:"rgb(0 255 0 / "+-r[c]+"%)"},c)),a+=11),a%7==0&&(n+=11,a=0);return t},e}return Object(l.a)(n,[{key:"generateAray",value:function(){for(var e=[],t=0;t<this.props.value;t++)e.push(this.randomNbr());return e}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("svg",{width:"auto",height:"auto",className:"js-calendar-graph-svg",children:Object(b.jsx)("g",{children:this.generateMap()})})})}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e.svgToPng=function(e,t,n){return new Promise((function(a,r){var c=document.createElement("canvas");c.width=t,c.height=n;var i=c.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,t,n);var s=(new XMLSerializer).serializeToString(e),o="data:image/svg+xml;utf8,"+encodeURIComponent(s),l=new Image(t,n);l.onload=function(){i.drawImage(l,0,0);var e=c.toDataURL("image/png",1);a(e)},l.onerror=function(){return r()},l.src=o}))},e.handleDownload=Object(m.a)(x.a.mark((function t(){var n,a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.currentChart,a=i.a.findDOMNode(n).children[0],t.next=4,e.svgToPng(a,600,300);case 4:r=t.sent,T.a.saveAs(r,"test.png");case 6:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(d.a,{children:Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(p.a,{open:!0,fullWidth:!0,maxWidth:"sm",children:[Object(b.jsx)(j.a,{title:"Success"}),Object(b.jsx)("h1",{children:" Your Result"}),Object(b.jsx)("b",{children:this.props.values.value>0?"Votre HeatMap ":"X doit etre positive et <> 0"}),".",Object(b.jsx)(D,{ref:function(t){return e.currentChart=t},value:this.props.values.value}),this.props.values.value>0&&Object(b.jsx)(f.a,{variant:"contained",color:"primary",onClick:this.handleDownload,startIcon:Object(b.jsx)(C.a,{}),children:"Save"}),Object(b.jsx)(f.a,{color:"secondary",variant:"contained",onClick:this.back,startIcon:Object(b.jsx)(w.a,{}),children:"Back"})]})})})}}]),n}(a.Component),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={step:1,value:null},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(n){var a=parseFloat(n.target.value);(isNaN(a)||a<0||"0"===n.target.value[0])&&(a=""),e.setState(Object(s.a)({},t,a))}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.step,t={value:this.state.value};switch(e){case 1:return Object(b.jsx)(g,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return Object(b.jsx)(M,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:t});default:console.log("This is a multi-step form ")}}}]),n}(a.Component),F=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(N,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),I()}},[[88,1,2]]]);
//# sourceMappingURL=main.d63bc53f.chunk.js.map