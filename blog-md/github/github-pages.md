# GitHub Pages

## GitHub Pages是什么

GitHub Pages 是 GitHub 提供的一项服务，允许用户通过 GitHub 仓库托管静态网站。
它可以用于创建个人博客、项目展示、文档和其他类型的静态内容网站。

##### GitHub Pages 相较于CMS、建站平台之类的有什么优点呢？

- 他是完全免费的，免费的，免费的～～

- 对于前期构建自己的blog网站还是非常友好的，可以帮你省下一笔排骨钱

- 不用购买云服务（MES）进行搭建，只需按官网步骤一步步操作就行

- 支持的功能多，玩法丰富，你可以绑定你的域名、使用免费的 HTTPS、自己 DIY 网站的主题、使用他人开发好的插件等等

##### 当然了，作为一款免费的服务，我们也是要遵守 GitHub 官方使用建议和限制，在使用的时候项目和网站的大小不要超过 1GB，也不要过于频繁的更新网站的内容（每小时不超过 10 个版本），每个月的也要注意带宽使用上限为 100GB

## 部署前的准备

在开始之前，你需要

- 一个GitHub 账号<br>
- 一个项目（可选
- 一个项目中的gh-pages分支

#### 没有项目的话，就新建一个项目（一定要是公共项目，开会员的话可以使用私人的项目

![dYPXv0N.png](https://iili.io/dYPXv0N.png)

#### 打开设置中的包

![dYsmIne.png](https://iili.io/dYsmIne.png)

#### 选择分支部署和要部署的分支

![dYPXOsR.png](https://iili.io/dYPXOsR.png)

这里的gh-pages一般是一个新的分支，专门为在分支部署的网页准备的

ok,到这里GitHub上面的部署已经基本完成了，剩下的就是在本地中打包项目啦

笔者这里用的是`vite`打包的，需要的时候直接`npm run deploy`

```js
"deploy": "npm run build && push-dir --dir=dist --branch=gh-pages --cleanup"
```

<!-- 添加一条横线 -->
<div style='border-top: 1px solid black;'></div>

## 拓展

[GitHub pages官方文档](https://docs.github.com/zh/pages/quickstart)

[什么是静态网页](/Makar-Web/static-web)
