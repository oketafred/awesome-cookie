"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const index_1 = require("../index");
describe('Cookie handling functions', () => {
    it('should set and retrieve a cookie', () => {
        const cookieName = 'testCookie';
        const cookieValue = 'testValue';
        (0, index_1.setCookie)(cookieName, cookieValue);
        const retrievedCookieValue = (0, index_1.getCookie)(cookieName);
        expect(retrievedCookieValue).toBe(cookieValue);
    });
    it('should remove a cookie', () => {
        const cookieName = 'testCookie';
        const cookieValue = 'testValue';
        (0, index_1.setCookie)(cookieName, cookieValue);
        (0, index_1.removeCookie)(cookieName);
        const retrievedCookieValue = (0, index_1.getCookie)(cookieName);
        expect(retrievedCookieValue).toHaveLength(0);
    });
    it('should set a cookie with an expiry date', () => {
        const cookieName = 'testCookie';
        const cookieValue = 'testValue';
        const expiryDate = new Date(Date.now() + 3600 * 1000); // 1 hour from now
        (0, index_1.setCookie)(cookieName, cookieValue, expiryDate);
        const retrievedCookieValue = (0, index_1.getCookie)(cookieName);
        expect(retrievedCookieValue).toBe(cookieValue);
    });
    it('should set a cookie with a path and a domain', () => {
        const cookieName = 'testCookie';
        const cookieValue = 'testValue';
        const path = '/test';
        const domain = 'example.com';
        (0, index_1.setCookie)(cookieName, cookieValue, undefined, path, domain);
        const retrievedCookieValue = (0, index_1.getCookie)(cookieName);
        expect(retrievedCookieValue).toBe(cookieValue);
    });
});
