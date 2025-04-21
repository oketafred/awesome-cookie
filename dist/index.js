"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  getCookie: () => getCookie,
  removeCookie: () => removeCookie,
  setCookie: () => setCookie
});
module.exports = __toCommonJS(index_exports);
function getCookie(name) {
  const cookieName = `${encodeURIComponent(name)}=`;
  const cookie = document.cookie;
  let value = null;
  const startIndex = cookie.indexOf(cookieName);
  if (startIndex > -1) {
    let endIndex = cookie.indexOf(";", startIndex);
    if (endIndex === -1) {
      endIndex = cookie.length;
    }
    value = decodeURIComponent(cookie.substring(startIndex + name.length, endIndex));
  }
  if (value) {
    return value.substring(1);
  }
  return value;
}
function setCookie(name, value, expires, path, domain, secure) {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (expires instanceof Date) {
    cookieText += `; expires=${expires.toISOString()}`;
  }
  if (path) cookieText += `; path=${path}`;
  if (domain) cookieText += `; domain=${domain}`;
  if (secure) cookieText += `; secure`;
  document.cookie = cookieText;
}
function removeCookie(name, path, domain, secure) {
  setCookie(name, "", /* @__PURE__ */ new Date(0), path, domain, secure);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCookie,
  removeCookie,
  setCookie
});
