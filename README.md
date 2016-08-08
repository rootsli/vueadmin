# vue-admin-scaffolding

> A Vue.js background manager scaffolding base vue.js(1.0.x) + Semantic UI + vuex + vue-router + vue-resource(whatwg-fetch) + vue-validator + vue-loader + webpack

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
 
## 关于semanticUI css的本地化定制
- 由于Semantic UI 默认使用的是谷歌提供的字体，并且是直接使用了谷歌的官方链接。因此建议对css进行本地化定制。定制方法请参考Semantic UI官方文档，主要变更如下：

![image](https://github.com/rootsli/vueadmin/blob/master/doc/semantic-css-custom.jpg)

## Change Log
- 20160808
  - 菜单支持折叠与隐藏
- 20160805
  - 菜单隐藏使用动画
  - 页面加载支持进度条