export function getCookie(name: string): string | null {
  const cookieName = `${encodeURIComponent(name)}=`;
  const cookie = document.cookie;
  let value: string | null = null;

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

export function setCookie(
  name: string,
  value: string,
  expires?: Date,
  path?: string,
  domain?: string,
  secure?: boolean
): void {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (expires instanceof Date) {
    cookieText += `; expires=${expires.toISOString()}`;
  }

  if (path) cookieText += `; path=${path}`;
  if (domain) cookieText += `; domain=${domain}`;
  if (secure) cookieText += `; secure`;

  document.cookie = cookieText;
}

export function removeCookie(name: string, path?: string, domain?: string, secure?: boolean): void {
  setCookie(name, '', new Date(0), path, domain, secure);
}

export {document}