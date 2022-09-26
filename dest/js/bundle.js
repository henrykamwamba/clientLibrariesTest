(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Khusa = {}));
})(this, (function (exports) { 'use strict';

  const SanitizeApiResponseAsync=async s=>{401!==s.status&&0!==s.status||location.reload(!0);const t=404===s.status?"AnErrorOccurred":await s.json();return {isError:!s.ok,result:t}};

  function OutputMessage(t,e,n){const s=`<div class='card-center ${n?"success":"danger"}'>${e}"<button type='button' class='btn'>Close</button></div>`;document.getElementById(t??"divMessage").innerHTML=s;}

  function GetDatesInMonth(t,e){const n=new Date;t=t??n.getFullYear(),e=e??n.getMonth();const o=new Date(t,e);let a=[];for(;o.getMonth()==e;)a.push(o.getDate()),o.setDate(o.getDate()+1);return a}

  const API={SanitizeApiResponseAsync:SanitizeApiResponseAsync},Helpers={OutputMessage:OutputMessage},Dates={GetDatesInMonth:GetDatesInMonth};

  exports.API = API;
  exports.Dates = Dates;
  exports.Helpers = Helpers;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
