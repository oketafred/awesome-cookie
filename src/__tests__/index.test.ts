// @ts-ignore
import { setCookie, getCookie, removeCookie } from '../index';
describe('Cookie handling functions', () => {
  it('should set and retrieve a cookie', () => {
    const cookieName: string = 'testCookie';
    const cookieValue: string = 'testValue';
    setCookie(cookieName, cookieValue);

    const retrievedCookieValue: string | null = getCookie(cookieName);
    expect(retrievedCookieValue).toBe(cookieValue);
  });

  it('should remove a cookie', () => {
    const cookieName: string = 'testCookie';
    const cookieValue: string = 'testValue';
    setCookie(cookieName, cookieValue);

    removeCookie(cookieName);

    const retrievedCookieValue: string | null = getCookie(cookieName);
    expect(retrievedCookieValue).toHaveLength(0);
  });

  it('should set a cookie with an expiry date', () => {
    const cookieName: string = 'testCookie';
    const cookieValue: string = 'testValue';
    const expiryDate: Date = new Date(Date.now() + 3600 * 1000); // 1 hour from now
    setCookie(cookieName, cookieValue, expiryDate);

    const retrievedCookieValue: string | null = getCookie(cookieName);
    expect(retrievedCookieValue).toBe(cookieValue);
  });

  it('should set a cookie with a path and a domain', () => {
    const cookieName: string = 'testCookie';
    const cookieValue: string = 'testValue';
    const path: string = '/test';
    const domain: string = 'example.com';
    setCookie(cookieName, cookieValue, undefined, path, domain);

    const retrievedCookieValue: string | null = getCookie(cookieName);
    expect(retrievedCookieValue).toBe(cookieValue);
  });

});
