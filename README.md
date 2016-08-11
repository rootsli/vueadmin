![](https://github.com/rootsli/vueadmin/blob/master/doc/img/logo.png)

vue-admin - A background manager scaffolding base Vue.js
========================================================
[![Build Status](https://api.travis-ci.org/rootsli/vueadmin.svg?branch=master)](https://travis-ci.org/rootsli/vueadmin)
[![Packagist](https://img.shields.io/badge/packagist-1.1.2-blue.svg)](https://packagist.org/packages/vueadmin/vue-admin)
[![Vuejs](https://img.shields.io/badge/%20Powered__by%20-%20Vuejs%201.x.x%20-green.svg?style=flat)](http://cn.vuejs.org/)

A Vue.js background manager scaffolding base vue.js(1.0.x) + Semantic UI + vuex + vue-router + vue-resource(whatwg-fetch) + vue-validator + vue-loader + webpack

使用Vue.js作为基础框架，Semantic UI作为UI层，实现了一个后台管理系统的基础框架。可以基于此框架实现功能复杂的后台管理系统。

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
* 本项目虽然使用的是semantic-ui-css，但是由于Semantic UI 默认使用的是谷歌提供的字体，并且是直接使用了谷歌的官方链接。因此建议对css进行本地化定制，使用定制后编译生成的文件替换semantic-ui-css中的文件。
具体定制方法请参考Semantic UI官方文档，主要变更如下：
    * 默认字体改为使用微软雅黑
    
    ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/custom1.jpg)

    * 关闭google字体动态链接
    
    ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/custom2.jpg)

    * 修改控件样式的默认颜色
    
    ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/custom3.jpg)

    * 修改默认背景色
    
    ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/custom4.jpg)

## Change Log
- 20160811
  - 更新README.md
- 20160810
  - 新增翻页组件
  - 新增表格示例
- 20160808
  - 菜单支持折叠与隐藏
- 20160805
  - 菜单隐藏使用动画
  - 页面加载支持进度条
  
## To Do List
  - 表单实例
  - 报表实例
  
## 界面截图
  - 登录界面
  ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/login.jpg)

  - 主页面
  ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/main.jpg)
