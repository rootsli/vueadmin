# vue-admin-scaffolding

> A Vue.js background manager scaffolding base vue.js(1.0.x) + Semantic UI(only css) + vue-router + vue-loader + webpack + vue-resource(whatwg-fetch) + vue-validator + vuex

> 使用Vue.js作为基础框架，Semantic UI作为UI层，实现了一个后台管理系统的基础框架。可以基于此框架实现功能复杂的后台管理系统。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
 
## 关于semantic.min.css的定制
- 由于Semantic UI 默认使用的是谷歌提供的字体，并且是直接使用了谷歌的官方链接。因此本项目使用的semantic.min.css是经过本地化定制的。主要变更如下：

![image](https://github.com/rootsli/vueadmin/doc/semantic-css-custom.jpg)

## Change Log
- 20160804
  - 加载进度条改为vuex实现
  - 移除semantic-ui-css模块，使用定制化的SemanticUI