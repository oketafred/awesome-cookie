# Awesome Cookie

This is a simple Javascript API that makes working and manipulating cookies a breeze.

## Installation
```
npm install awesome-cookie
```
## Import

```javascript
import { setCookie, getCookie, removeCookie } from 'awesome-cookie';

setCookie('foo', 'bar');
```
## Basic Usage
Create a cookie, valid across the entire site:
```javascript
setCookie('name', 'value');
```
Read cookie:
```javascript
getCookie('name');
```
Delete cookie:
```javascript
removeCookie('name');
```
## Author
- [Oketa Fred](https://github.com/oketafred)

## License

[MIT](LICENSE)