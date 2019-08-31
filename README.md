![nodejs](/main.jpg)

# Simple Node Server

이번에는 Node.js / Express Framework를 이용하여 웹 서버 구현을 해보고, Database 연동까지 해보는 과제입니다.

## What is Node.js

노드(Node.js)란 브라우저 이외의 곳(예를 들면, 컴퓨터 서버 OS)에서 자바스크립트를 사용할 수 있도록 만들어진 자바스크립트 환경입니다. 그래서 노드는 브라우저에 국한된 자바스크립트 관련 API들을 생략하고 조금 더 전통적인 OS 관련 API(예를 들면, HTTP 관련 혹은 파일 시스템 관련 API)를 제공합니다.

## Pros

뛰어난 성능이 가장 대표적인 장점입니다. 하지만 성능이라는 것은 사실 개발자의 구현 방식에 따라 차이가 생길 수도 있기 때문에, 언제나 뛰어난 성능이 보장되는 것은 아닙니다.

그리고 자바스크립트로 서버를 구현한다는 자체가 주는 장점도 굉장히 큽니다. 프론트엔드와 백엔드를 같은 언어로 만든다는 점은 개발자들에게 매우 큰 장점입니다. 자바스크립트는 비교적 최근에 트렌드를 이끌기 시작한 프로그래밍 언어이기 때문에, 다른 전통있는 언어와는 다르게 굉장히 현대적인 구조와 디자인을 제공합니다. 인기를 끄는 다른 언어들을 이용하여 자바스크립트를 쓰는 것 또한 가능합니다.(CoffeeScript, ClosureScript, Scala, LiveScript 등)

Node Package Manager(NPM)은 재사용 가능한 수백만 혹은 수천만개의 소프트웨어 패키지에 대한 접근을 가능하게 해줍니다. 그리고 또한 매우 뛰어난 dependency resolution 시스템을 보유하고 있고, 빌드 과정을 자동화할 수 있는 기능들도 내재되어 있습니다.

또한 노드는 윈도우, Mac OS, Linux, Solaris, FreeBSD 등에서 실행시킬 수 있는 버젼들이 준비되어 있고, 수많은 웹 호스팅 업체들에서도 지원하고 있으며 굉장히 뛰어나고 상세한 문서를 제공합니다. 그리고 가장 중요한 점은, 노드 관련 개발자 커뮤니티가 굉장히 활성화되어 있다는 점입니다. 무슨 문제라 하더라도 누군가는 여러분을 도와줄 수 있습니다.

## Reading List

### Global object in node.js
  - [global](https://nodejs.org/docs/latest/api/globals.html#globals_global)

Node.js는 브라우저 환경이 아니기 때문에 글로벌 객체가 `window`가 아닙니다. 대신 `global`이라는 객체가 주어집니다. 그리고 파일 상으로 글로벌 scope에 변수를 선언하더라도 글로벌 객체에 선언되지 않습니다.

```js
// app.js
console.log(global);
console.log(global.setTimeout === setTimeout); // true
```

```sh
node app.js
```

### Environment Variables
  - [working with env variables in nodejs](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)

Node.js 어플리케이션을 작업할때는 환경 변수를 이용할 수 있습니다. 환경 변수는 여러분이 원하는 만큼 만들어 사용할 수 있습니다.

일반적인 어플리케이션에는 여러 가지 환경이 있을 수 있습니다. 예를 들면, 실 사용자들이 사용하는 환경(production), 개발자들이 개발을 하는 환경, 테스트 목적의 환경 등입니다. 그리고 환경에 따라 특정 값들을 변경해주어야 하는 경우도 있습니다. 이럴 경우에 우리는 환경 변수를 이용하면 쉽게 작업할 수 있습니다.

```js
// app.js
let API_URL;

if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://api.server-url.com';
} else if (process.env.NODE_ENV === 'development') {
  API_URL = 'https://dev-api.server-url.com';
}

console.log(API_URL);
```

```sh
NODE_ENV=production node app.js
```

### What is `__dirname`?
  - [Modules __dirname](https://nodejs.org/docs/latest/api/modules.html#modules_dirname)
  - [Stackoverflow __dirname](https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)

```js
console.log(__dirname);
```

### Module object
  - [module object](https://nodejs.org/docs/latest/api/modules.html#modules_the_module_object)
  - [require](https://nodejs.org/docs/latest/api/modules.html#modules_require_id)

```js
// app1.js
module.exports = function foo () {};

// app2.js
exports.bar = 1;
exports.baz = 2;

// app3.js
const foo = require('./app1');
const app2Module = require('./app2');

console.log(app2Module.bar); // 1
console.log(app2Module.baz); // 2
```

### File System Module
  - [fs Module](https://nodejs.org/docs/latest/api/fs.html)

fs 모듈에는 파일 시스템 관련 기능들이 포함되어 있습니다. fs 모듈의 메소드를 이용하여 파일 생성, 복사, 수정, 삭제 등 파일 관련 작업들을 할 수 있습니다.

```js
// node.js를 설치하면 fs 모듈은 자동으로 함께 설치되어 있습니다.
const fs = require('fs');

fs.writeFile('message.txt', 'Hello Node.js', 'utf8', function (err) {
  if (err) throw new Error('bad');
  console.log('file created!');
});
```

### Operating System Module
  - [os module](https://nodejs.org/docs/latest/api/os.html)

```js
const os = require('os');

console.log(os.userInfo().username);
```

### request object in pure node.js
  - [incomingMessage](https://nodejs.org/docs/latest/api/http.html#http_class_http_incomingmessage)

### response object in pure node.js
  - [serverresponse](https://nodejs.org/docs/latest/api/http.html#http_class_http_serverresponse)

### Express API Reference (See menu on the left)
  - [English ver.5](https://expressjs.com/en/5x/api.html)
  - [Korean ver.4](https://expressjs.com/ko/4x/api.html)

### Express Middleware
  - [Express middleware](https://expressjs.com/en/guide/using-middleware.html)

### Installing MongoDB on your laptop
  - [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)

### MongoDB
  - [Intro to MongoDB](https://www.sitepoint.com/an-introduction-to-mongodb/)
  - [difference between sql and nosql](https://www.geeksforgeeks.org/difference-between-sql-and-nosql/)
  - [How to use Mongo Shell](https://docs.mongodb.com/manual/mongo/#working-with-the-mongo-shell)

### How to connect to MongoDB from node.js
  - [mongoose quick start](https://mongoosejs.com/docs/index.html)

### Object Relational Mapper vs Object Document Mapper
  - [ODM vs ORM](https://stackoverflow.com/questions/12261866/what-is-the-difference-between-an-orm-and-an-odm)

## How to debug your node.js application

Node.js를 디버깅하는 가장 쉬운 방법은 [node-inspect](https://github.com/nodejs/node-inspect) 모듈을 사용하는 것입니다.

```sh
npm install --global node-inspect # 혹은 yarn global add node-inspect
node-inspect (FILE_NAME).js
```

## How to test http server endpoints

- [POSTMAN](https://www.getpostman.com/)
- [How to use POSTMAN](https://learning.getpostman.com/getting-started/)

## TODO

```sh
# 첫 번째 테스트부터 차근차근 해결해보세요.
yarn test (or npm test)
```
