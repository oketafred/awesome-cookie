"use strict";
function getCookie(name) {
    const cookieName = `${encodeURIComponent(name)}=`;
    const cookie = document.cookie;
    let value = null;
    const startIndex = cookie.indexOf(cookieName);
    if (startIndex > -1) {
        let endIndex = cookie.indexOf(';', startIndex);
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
    if (path)
        cookieText += `; path=${path}`;
    if (domain)
        cookieText += `; domain=${domain}`;
    if (secure)
        cookieText += `; secure`;
    document.cookie = cookieText;
}
function removeCookie(name, path, domain, secure) {
    setCookie(name, '', new Date(0), path, domain, secure);
}
