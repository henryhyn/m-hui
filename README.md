# HUI Mobile [![Build Status](https://travis-ci.org/henryhyn/m-hui.svg?branch=master)](https://travis-ci.org/henryhyn/m-hui) [![npm version](https://img.shields.io/npm/v/m-hui.svg)](https://www.npmjs.org/package/m-hui)

基于 React 开发的移动端轻量 UI 库

## 立即体验

![m-hui](./docs/m-hui-demo.png)

[http://henryhyn.github.io/m-hui](http://henryhyn.github.io/m-hui)

## 立即使用

安装依赖

```
npm install m-hui --save
```

在需要组件的页面, 通过如下解构赋值的方式, 引入需要的页面组件.

```
import { Page, Button } from 'm-hui';
```

## 贡献代码

### 先决条件

-   安装 node, 至少 `v0.12.7`.
-   安装 webpack, 至少 `1.12.14`.
-   安装 WebStorm 集成开发环境.

### 编写代码

克隆代码到本地, 然后进入项目目录, 执行如下命令就可以启动开发服务器.

```
npm start
```

通过 <http://localhost:9999> 查看页面效果.
开发服务器启动了**热加载**功能, 意味着, 你的任意改动都会自动在浏览器中刷新, 方便你查看效果.

## 发布代码

执行如下命令就可以生成演示项目的发布版.

```
npm run build
```
