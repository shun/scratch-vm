!function(A,B){"object"==typeof exports&&"object"==typeof module?module.exports=B():"function"==typeof define&&define.amd?define([],B):"object"==typeof exports?exports.ScratchSVGRenderer=B():A.ScratchSVGRenderer=B()}(window,(function(){return function(A){var B={};function Q(g){if(B[g])return B[g].exports;var E=B[g]={i:g,l:!1,exports:{}};return A[g].call(E.exports,E,E.exports,Q),E.l=!0,E.exports}return Q.m=A,Q.c=B,Q.d=function(A,B,g){Q.o(A,B)||Object.defineProperty(A,B,{enumerable:!0,get:g})},Q.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},Q.t=function(A,B){if(1&B&&(A=Q(A)),8&B)return A;if(4&B&&"object"==typeof A&&A&&A.__esModule)return A;var g=Object.create(null);if(Q.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:A}),2&B&&"string"!=typeof A)for(var E in A)Q.d(g,E,function(B){return A[B]}.bind(null,E));return g},Q.n=function(A){var B=A&&A.__esModule?function(){return A.default}:function(){return A};return Q.d(B,"a",B),B},Q.o=function(A,B){return Object.prototype.hasOwnProperty.call(A,B)},Q.p="",Q(Q.s=5)}([function(A,B,Q){function g(){}Q(22).mixin(g),g.prototype.write=function(A,B,Q){this.emit("item",A,B,Q)},g.prototype.end=function(){this.emit("end"),this.removeAllListeners()},g.prototype.pipe=function(A){var B=this;function Q(){A.write.apply(A,Array.prototype.slice.call(arguments))}function g(){!A._isStdio&&A.end()}return B.emit("unpipe",A),A.emit("pipe",B),B.on("item",Q),B.on("end",g),B.when("unpipe",(function(E){var C=E===A||void 0===E;return C&&(B.removeListener("item",Q),B.removeListener("end",g),A.emit("unpipe")),C})),A},g.prototype.unpipe=function(A){return this.emit("unpipe",A),this},g.prototype.format=function(A){throw new Error(["Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:","var Minilog = require('minilog');","Minilog","  .pipe(Minilog.backends.console.formatClean)","  .pipe(Minilog.backends.console);"].join("\n"))},g.mixin=function(A){var B,Q=g.prototype;for(B in Q)Q.hasOwnProperty(B)&&(A.prototype[B]=Q[B])},A.exports=g},function(A,B,Q){"use strict";var g=function(){function A(A,B){for(var Q=0;Q<B.length;Q++){var g=B[Q];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}return function(B,Q,g){return Q&&A(B.prototype,Q),g&&A(B,g),B}}();var E=function(){function A(){!function(A,B){if(!(A instanceof B))throw new TypeError("Cannot call a class as a function")}(this,A)}return g(A,null,[{key:"attributeNamespace",value:function(){return{href:A.xlink,xlink:A.xmlns,xmlns:A.xmlns+"/","xmlns:xlink":A.xmlns+"/"}}},{key:"create",value:function(B,Q,g){return A.set(document.createElementNS(A.svg,B),Q,g)}},{key:"get",value:function(B,Q){var g=A.attributeNamespace[Q],E=g?B.getAttributeNS(g,Q):B.getAttribute(Q);return"null"===E?null:E}},{key:"set",value:function(B,Q,g){for(var E in Q){var C=Q[E],w=A.attributeNamespace[E];"number"==typeof C&&g&&(C=g.number(C)),w?B.setAttributeNS(w,E,C):B.setAttribute(E,C)}return B}},{key:"svg",get:function(){return"http://www.w3.org/2000/svg"}},{key:"xmlns",get:function(){return"http://www.w3.org/2000/xmlns"}},{key:"xlink",get:function(){return"http://www.w3.org/1999/xlink"}}]),A}();A.exports=E},function(A,B,Q){"use strict";var g=Q(8).FONTS;A.exports=function(A){if("string"!=typeof A)throw new Error("SVG to be inlined is not a string");for(var B=new Set,Q=/font-family="([^"]*)"/g,E=Q.exec(A);E;)B.add(E[1]),E=Q.exec(A);if(B.size>0){var C="<defs><style>",w=!0,I=!1,Y=void 0;try{for(var F,M=B[Symbol.iterator]();!(w=(F=M.next()).done);w=!0){var D=F.value;g.hasOwnProperty(D)&&(C+=""+g[D])}}catch(A){I=!0,Y=A}finally{try{!w&&M.return&&M.return()}finally{if(I)throw Y}}return C+="</style></defs>",A=A.replace(/<svg[^>]*>/,"$&"+C)}return A}},function(A,B,Q){"use strict";A.exports=function(A){var B=[];!function A(Q){"text"===Q.localName&&B.push(Q);for(var g=0;g<Q.childNodes.length;g++)A(Q.childNodes[g])}(A);var Q=!0,g=!1,E=void 0;try{for(var C,w=B[Symbol.iterator]();!(Q=(C=w.next()).done);Q=!0){var I=C.value;I.getAttribute("font-family")&&"Helvetica"!==I.getAttribute("font-family")?"Mystery"===I.getAttribute("font-family")?I.setAttribute("font-family","Curly"):"Gloria"===I.getAttribute("font-family")?I.setAttribute("font-family","Handwriting"):"Donegal"===I.getAttribute("font-family")&&I.setAttribute("font-family","Serif"):I.setAttribute("font-family","Sans Serif")}}catch(A){g=!0,E=A}finally{try{!Q&&w.return&&w.return()}finally{if(g)throw E}}}},function(A,B){var Q={black:"#000",red:"#c23621",green:"#25bc26",yellow:"#bbbb00",blue:"#492ee1",magenta:"#d338d3",cyan:"#33bbc8",gray:"#808080",purple:"#708"};A.exports=function(A,B){return B?"color: #fff; background: "+Q[A]+";":"color: "+Q[A]+";"}},function(A,B,Q){"use strict";var g=Q(6),E=Q(30),C=Q(2),w=Q(1),I=Q(3);A.exports={BitmapAdapter:E,convertFonts:I,inlineSvgFonts:C,SvgElement:w,SVGRenderer:g}},function(A,B,Q){"use strict";var g=function(){function A(A,B){for(var Q=0;Q<B.length;Q++){var g=B[Q];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}return function(B,Q,g){return Q&&A(B.prototype,Q),g&&A(B,g),B}}();var E=Q(7),C=Q(2),w=Q(1),I=Q(3),Y=Q(16),F=Q(17),M=function(){function A(B){!function(A,B){if(!(A instanceof B))throw new TypeError("Cannot call a class as a function")}(this,A),this._canvas=B||document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._measurements={x:0,y:0,width:0,height:0},this._cachedImage=null,this.loaded=!1}return g(A,[{key:"measure",value:function(A){return this.loadString(A),this._measurements}},{key:"loadString",value:function(A,B){this._cachedImage=null;var Q=new DOMParser;if(A=Y(A),this._svgDom=Q.parseFromString(A,"text/xml"),this._svgDom.childNodes.length<1||"svg"!==this._svgDom.documentElement.localName)throw new Error("Document does not appear to be SVG.");this._svgTag=this._svgDom.documentElement,B&&this._transformGradients(),F(this._svgTag,window),this._transformImages(this._svgTag),B?(this._transformText(),this._transformMeasurements(),this._setGradientStrokeRoundedness()):this._svgTag.getAttribute("viewBox")?this._svgTag.getAttribute("width")&&this._svgTag.getAttribute("height")||(this._svgTag.setAttribute("width",this._svgTag.viewBox.baseVal.width),this._svgTag.setAttribute("height",this._svgTag.viewBox.baseVal.height)):this._transformMeasurements(),this._measurements={width:this._svgTag.viewBox.baseVal.width,height:this._svgTag.viewBox.baseVal.height,x:this._svgTag.viewBox.baseVal.x,y:this._svgTag.viewBox.baseVal.y}}},{key:"loadSVG",value:function(A,B,Q){this.loadString(A,B),this._createSVGImage(Q)}},{key:"_createSVGImage",value:function(A){var B=this;null===this._cachedImage&&(this._cachedImage=new Image);var Q=this._cachedImage;Q.onload=function(){B.loaded=!0,A&&A()};var g=this.toString(!0);Q.src="data:image/svg+xml;utf8,"+encodeURIComponent(g),this.loaded=!1}},{key:"_transformText",value:function(){var A=[];!function B(Q){"text"===Q.localName&&A.push(Q);for(var g=0;g<Q.childNodes.length;g++)B(Q.childNodes[g])}(this._svgTag),I(this._svgTag);var B=!0,Q=!1,g=void 0;try{for(var E,C=A[Symbol.iterator]();!(B=(E=C.next()).done);B=!0){var Y=E.value;Y.removeAttribute("x"),Y.removeAttribute("y"),Y.setAttribute("alignment-baseline","text-before-edge"),Y.setAttribute("xml:space","preserve"),Y.getAttribute("font-size")||Y.setAttribute("font-size","18");var F=Y.textContent,M=parseFloat(Y.getAttribute("font-size")),D=0,c=1.2;if("Handwriting"===Y.getAttribute("font-family")?(c=2,D=-11*M/22):"Scratch"===Y.getAttribute("font-family")?(c=.89,D=-3*M/22):"Curly"===Y.getAttribute("font-family")?(c=1.38,D=-6*M/22):"Marker"===Y.getAttribute("font-family")?(c=1.45,D=-6*M/22):"Sans Serif"===Y.getAttribute("font-family")?(c=1.13,D=-3*M/22):"Serif"===Y.getAttribute("font-family")&&(c=1.25,D=-4*M/22),0===Y.transform.baseVal.numberOfItems){var U=this._svgTag.createSVGTransform();Y.transform.baseVal.appendItem(U)}var G=Y.transform.baseVal.getItem(0).matrix;if(G.e+=2*G.a+G.c*D,G.f+=2*G.b+G.d*D,F&&0===Y.childElementCount){Y.textContent="";var N=F.split("\n");F="";var H=!0,J=!1,R=void 0;try{for(var h,i=N[Symbol.iterator]();!(H=(h=i.next()).done);H=!0){var j=h.value,s=w.create("tspan");s.setAttribute("x","0"),s.setAttribute("style","white-space: pre"),s.setAttribute("dy",c+"em"),s.textContent=j||" ",Y.appendChild(s)}}catch(A){J=!0,R=A}finally{try{!H&&i.return&&i.return()}finally{if(J)throw R}}}}}catch(A){Q=!0,g=A}finally{try{!B&&C.return&&C.return()}finally{if(Q)throw g}}}},{key:"_collectElements",value:function(A){var B=[];return function Q(g){g.localName!==A&&void 0!==A||!g.getAttribute||B.push(g);for(var E=0;E<g.childNodes.length;E++)Q(g.childNodes[E])}(this._svgTag),B}},{key:"_transformGradients",value:function(){var A=this._collectElements("linearGradient"),B=!0,Q=!1,g=void 0;try{for(var E,C=A[Symbol.iterator]();!(B=(E=C.next()).done);B=!0){var w=E.value;w.getAttribute("x2")||w.setAttribute("x2","0")}}catch(A){Q=!0,g=A}finally{try{!B&&C.return&&C.return()}finally{if(Q)throw g}}}},{key:"_transformImages",value:function(){var A=this._collectElements("image"),B="image-rendering: optimizespeed; image-rendering: pixelated;",Q=!0,g=!1,E=void 0;try{for(var C,w=A[Symbol.iterator]();!(Q=(C=w.next()).done);Q=!0){var I=C.value;I.getAttribute("style")?I.setAttribute("style",B+" "+I.getAttribute("style")):I.setAttribute("style",B)}}catch(A){g=!0,E=A}finally{try{!Q&&w.return&&w.return()}finally{if(g)throw E}}}},{key:"_findLargestStrokeWidth",value:function(A){var B=0;return function A(Q){Q.getAttribute&&(Q.getAttribute("stroke")&&(B=Math.max(B,1)),Q.getAttribute("stroke-width")&&(B=Math.max(B,Number(Q.getAttribute("stroke-width"))||0)));for(var g=0;g<Q.childNodes.length;g++)A(Q.childNodes[g])}(A),B}},{key:"_setGradientStrokeRoundedness",value:function(){var A=this._collectElements(),B=!0,Q=!1,g=void 0;try{for(var E,C=A[Symbol.iterator]();!(B=(E=C.next()).done);B=!0){var w=E.value;if(w.style){var I=w.style.stroke||w.getAttribute("stroke");I&&I.match(/^url\(#.*\)$/)&&(w.style["stroke-linejoin"]="round",w.style["stroke-linecap"]="round")}}}catch(A){Q=!0,g=A}finally{try{!B&&C.return&&C.return()}finally{if(Q)throw g}}}},{key:"_transformMeasurements",value:function(){var A=document.createElement("span"),B=this._svgTag.outerHTML,Q=E.sanitize(B,{USE_PROFILES:{svg:!0},FORBID_TAGS:["a","audio","canvas","video"],ADD_DATA_URI_TAGS:["image"]}),g=void 0;try{A.innerHTML=Q,document.body.appendChild(A),g=A.children[0].getBBox()}finally{document.body.removeChild(A)}var C=void 0;C=0===g.width||0===g.height?0:this._findLargestStrokeWidth(this._svgTag)/2;var w=g.width+2*C,I=g.height+2*C,Y=g.x-C,F=g.y-C;this._svgTag.setAttribute("width",w),this._svgTag.setAttribute("height",I),this._svgTag.setAttribute("viewBox",Y+" "+F+" "+w+" "+I)}},{key:"toString",value:function(A){var B=(new XMLSerializer).serializeToString(this._svgDom);return A&&(B=C(B)),B}},{key:"draw",value:function(A){if(!this.loaded)throw new Error("SVG image has not finished loading");this._drawFromImage(A)}},{key:"_drawFromImage",value:function(A){if(null!==this._cachedImage){var B=Number.isFinite(A)?A:1,Q=this._measurements;this._canvas.width=Q.width*B,this._canvas.height=Q.height*B,this._canvas.width<=0||this._canvas.height<=0||this._cachedImage.naturalWidth<=0||this._cachedImage.naturalHeight<=0||(this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._context.setTransform(B,0,0,B,0,0),this._context.drawImage(this._cachedImage,0,0))}}},{key:"canvas",get:function(){return this._canvas}},{key:"size",get:function(){return[this._measurements.width,this._measurements.height]}},{key:"viewOffset",get:function(){return[this._measurements.x,this._measurements.y]}}]),A}();A.exports=M},function(A,B,Q){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
//# sourceMappingURL=scratch-svg-renderer.js.map