(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{caee:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"800px",width:"100%"}},[a("q-calendar",{staticClass:"calendar-container",staticStyle:{height:"200px","max-width":"800px",width:"100%"},attrs:{view:"day-resource",bordered:"",sticky:"",resources:e.resources,"resource-height":50,locale:"en-us"},scopedSlots:e._u([{key:"resource-intervals",fn:function(t){return[t.resource.events&&t.resource.events.length>0?[e._l(t.resource.events,(function(r,n){return[r.date===t.intervals[0][0].date?[r.time?a("q-badge",{key:n,class:e.badgeClasses(r,"body"),style:e.badgeStyles(r,"body",t.timeStartPosX,t.timeDurationWidth)},[r.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:r.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(r.title))])],1):e._e()]:e._e()]}))]:e._e()]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},n=[],o=a("c47a"),s=a.n(o),i=(a("4917"),a("a481"),a("384e")),l=new Date;function c(e){var t=new Date(l);t.setDate(e);var a=i["e"].parseDate(t);return a.date}var d=/^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;function u(e){if("string"!==typeof e)throw new TypeError("Expected a string");var t=d.exec(e);if(t){var a={r:Math.min(255,parseInt(t[2],10)),g:Math.min(255,parseInt(t[3],10)),b:Math.min(255,parseInt(t[4],10))};return t[1]&&(a.a=Math.min(1,parseFloat(t[5]))),a}return g(e)}function g(e){if("string"!==typeof e)throw new TypeError("Expected a string");e=e.replace(/^#/,""),3===e.length?e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:4===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var t=parseInt(e,16);return e.length>6?{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:Math.round((255&t)/2.55)}:{r:t>>16,g:t>>8&255,b:255&t}}function h(e){if("string"!==typeof e&&(!e||void 0===e.r))throw new TypeError("Expected a string or a {r, g, b} object as color");var t="string"===typeof e?u(e):e,a=t.r/255,r=t.g/255,n=t.b/255,o=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),s=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),i=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4);return.2126*o+.7152*s+.0722*i}var p={data:function(){return{selectedDate:"",resources:[{label:"John",events:[{title:"1st of the Month",details:"Everything is funny as long as it is happening to someone else",date:c(1),bgcolor:"orange"},{title:"Sisters Birthday",details:"Buy a nice present",date:c(4),bgcolor:"green",icon:"fas fa-birthday-cake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:c(l.getDate()),time:"10:00",duration:120,bgcolor:"red",icon:"fas fa-handshake"},{title:"Lunch",details:"Company is paying!",date:c(l.getDate()),time:"12:00",duration:90,bgcolor:"teal",icon:"fas fa-hamburger"},{title:"Visit mom",details:"Always a nice chat with mom",date:c(20),time:"17:00",duration:90,bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Conference",details:"Teaching Javascript 101",date:c(22),time:"08:00",duration:540,bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Girlfriend",details:"Meet GF for dinner at Swanky Restaurant",date:c(22),time:"19:00",duration:180,bgcolor:"teal",icon:"fas fa-utensils"},{title:"Fishing",details:"Time for some weekend R&R",date:c(22),bgcolor:"purple",icon:"fas fa-fish",days:2},{title:"Vacation",details:"Trails and hikes, going camping! Don't forget to bring bear spray!",date:c(29),bgcolor:"purple",icon:"fas fa-plane",days:5}]},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}]}},computed:{eventsMap:function(){var e={};return this.events.forEach((function(t){return(e[t.date]=e[t.date]||[]).push(t)})),e}},methods:{isCssColor:function(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)},badgeClasses:function(e,t){var a=this.isCssColor(e.bgcolor);return s()({},"text-white bg-".concat(e.bgcolor),!a)},badgeStyles:function(e,t,a,r){var n={position:"absolute"};return this.isCssColor(e.bgcolor)&&(n["background-color"]=e.bgcolor,n.color=h(e.bgcolor)>.5?"black":"white"),a&&(n.left=a(e.time)+"px"),r&&(n.width=r(e.duration)+"px"),n["align-items"]="flex-start",n}}},b=p,f=a("2877"),m=a("eebe"),y=a.n(m),v=a("58a8"),w=a("0016"),x=Object(f["a"])(b,r,n,!1,null,null,null);t["default"]=x.exports;y()(x,"components",{QBadge:v["a"],QIcon:w["a"]})}}]);