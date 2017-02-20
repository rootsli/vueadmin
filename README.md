![](https://github.com/rootsli/vueadmin/blob/master/doc/img/logo.png)

vue-admin - A background manager scaffolding base Vue.js
========================================================
<!--[![Build Status](https://api.travis-ci.org/rootsli/vueadmin.svg?branch=master)](https://travis-ci.org/rootsli/vueadmin)-->
[![Packagist](https://img.shields.io/badge/packagist-1.1.2-blue.svg)](https://packagist.org/packages/vueadmin/vue-admin)
[![Vuejs](https://img.shields.io/badge/%20Powered%20by%20-%20Vuejs%201.x.x%20-green.svg?style=flat)](http://cn.vuejs.org/)

A Vue.js background manager scaffolding base vue.js(1.0.x) + Semantic UI + vuex + vue-router + vue-resource(whatwg-fetch) + vue-validator + vue-loader + webpack

使用Vue.js作为基础框架，Semantic UI作为UI层，实现了一个后台管理系统的基础框架。可以基于此框架实现功能复杂的后台管理系统。

[点此查看运行效果](http://vueadmin.duapp.com)（登录名：admin，密码：admin）

```
 已基于 vue2 + webpack2 + elementUI 实现了一套全新的后台管理框架，具体请移步 [https://github.com/rootsli/vue2admin] (http://vueadmin.duapp.com)查看
```

## 主要依赖组件
* vue.js ^1.0.21
* semantic-ui-css ^2.2.2
   由于semantic-ui经过了定制，因此建议将下文“关于semanticUI css的本地化定制”章节附件semantic-ui-custom.rar直接解压到node_modules\semantic-ui-css目录下即可（需先运行npm install）。否则项目跑起来后，界面和截图不一致。
* 百度 echarts3

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

    ### 附：[semantic-ui-custom.rar](https://github.com/rootsli/vueadmin/blob/master/doc/semantic-ui-custom.rar)(可通过右键另存为保存)。另，定制文件请见文件[site.variables](https://github.com/rootsli/vueadmin/blob/master/doc/site.variables)
    ### 如不想自己定制，也可以直接解压semantic-ui-custom.rar内容覆盖掉node_modules\semantic-ui-css目录下内容即可（需先运行npm install）。
## 菜单右侧主页面布局说明
* 典型的布局结构（推荐布局）
```html
    ...
    <breadcrumb :paths="paths"></breadcrumb> <!-- 面包屑 -->
    <div class="page-container"> <!-- 内容区 -->
            <h3 class="ui header">标题</h3> <!-- 标题 -->
            <div style="height:95%;overflow:auto;"> <!-- 主内容 -->
                <div class="ui basic segment"> <!-- 内容段，可以包含多个，至少包含一个 -->
                    <!-- 内容区1 -->
                </div>
                <div class="ui basic segment">
                    <!-- 内容区2 -->
                </div>
            </div>
        </div>
    ...
```

* 界面说明
  ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/container-layout.jpg)

## Change Log
- 20160820
  - 新增表单示例
- 20160812
  - list示例新增项目的新增，编辑case
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
- 20161012
- 整合vue-echarts
- 整合百度echarts3
- 实现基本图形示例
- 页面F5刷新时，菜单展开错误问题修复
- 20161014
- 生产打包js文件生成6位数的hash
- 添加运行效果

## To Do List
  - 报表实例：地图示例

## UI截图
  - 登录界面
  ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/login.jpg)

  - 表格示例
  ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/main.jpg)

  - 表单
  ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/form.jpg)

  - 基本图形
    ![image](https://github.com/rootsli/vueadmin/blob/master/doc/img/basecharts.jpg)
