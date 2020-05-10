## Vue2Cli初始化项目

vue init webpack my-Project

## Vue3Cli初始化项目

Vue create My-Project

## Axios 安装

cnpm install axios --save

#### Css使用变量的方式

+ --color-text: #666;
+ *使用方法 var(--color-text);*

### VueCli框架起目录别名

创建一个vue.config.js文件(与src文件夹平级)

写入以下内容

```javascript
module.exports = {
 configureWebpack:{
     resolve:{
       alias: {
         'assets': '@/assets',
         'common': '@/common',
         'components': '@/components',
         'network': '@/network',
         'views': '@/views',
       }
     }
  }
}
```

## editconfig.js 	用来控制代码风格

###BetterScroll 好用的滑动

###图片懒加载  vue-lazyload

### px转 vw

+ cnpm install postcss-px-to-viewport --save-dev



## 已完成的

+ 小程序(自己写老师商城的项目)

+ Jquery 两天时间快速的学习了一下

+ 写一个轮播图插件  分别使用了Jq和Vue写了一遍

+ 修复Vue老师轮播图的bug

+ 完成老师的Vue商城项目

  





# 待做的任务



+ 手写Promise核心
+ 发布者 订阅者模式
+ 瀑布流
+ 多态 
+ elmUI  
+ html页面从输入网址开始的流程
+ SVG
+ Node
+ Mysql
+ BootStrapt
+ WebPack
+ Canvas
+ 复习正则
+ 复习 后盾人上的视频
