(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{c06a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center",staticStyle:{"max-width":"800px",width:"100%",overflow:"hidden"}},[a("q-calendar",{ref:"calendar",staticStyle:{"max-width":"300px"},attrs:{view:"month",locale:"en-us","mini-mode":"",animated:"","transition-prev":"flip-left","transition-next":"flip-right","selected-dates":e.selectedDates},on:{"click:day":e.onToggleDate,"click:date":e.onToggleDate},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},i=[];a("6762"),a("2fdb");function n(e){return 0===e.button}var l={data:function(){return{selectedDate:"",selectedDates:[]}},methods:{classDay:function(e){if(!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier)return this.getBetween(e)},onToggleDate:function(e){if(n(event))if(this.selectedDates.includes(e.date)){for(var t=0;t<this.selectedDates.length;++t)if(e.date===this.selectedDates[t]){this.selectedDates.splice(t,1);break}}else this.selectedDates.push(e.date)}}},c=l,d=a("2877"),o=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=o.exports}}]);