# css元素居中

- 在网页设计中，让一个`div and text`在页面中居中显示是实现美观且用户友好界面的关键元素

- 笔者将介绍两种流行的 CSS 布局方法——Flexbox 和 Grid，来展示如何实现`div and text`的居中对齐。

//真是惭愧，其实笔者在这段迷惑了很久(￣O￣;),总是将垂直和水平这两个记混

- 这些只是作为个人的学习见解，请以官方参考文档为主

> [MDN-弹性盒布局中的盒对齐方式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) <br>[MDN-块布局中的盒对齐方式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## 元素居中

### Flex and Grid

1. Flexbox 布局

- Flexbox 是一种一维布局模型，适用于一行或一列的布局需求。在 Flexbox 中：

- align-items：用于在交叉轴（垂直方向，如果主轴是水平方向）上对齐项目。常用值包括 center、flex-start、flex-end、baseline 和 stretch。
- justify-content：用于在主轴（水平或垂直方向）上对齐项目。常用值包括 center、flex-start、flex-end、space-between、space-around 和 space-evenly。

```js
.container {
  height: 200px;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
```

2. Grid 布局

- Grid 布局是一种二维布局模型，适用于更复杂的布局需求。在 Grid 布局中：

- align-items 和 justify-content 也存在，但是它们用于不同的上下文：
- align-items：在交叉轴上对齐网格项（类似于 Flexbox）。
- justify-content：在主轴上对齐网格项（类似于 Flexbox）。
<!-- 此外，Grid 布局还提供了其他的对齐属性，比如 align-self 和 justify-self，用于单独对齐网格项。 -->

```js
.container {
  height: 200px;
  display: grid;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
```

### 传统布局

- 传统布局（如 float 和 position）：这些布局方法没有内置的对齐机制，需要使用额外的 CSS 规则来实现居中对齐。
- 例如，使用 margin: auto 来水平居中块级元素。
- 使用绝对定位结合 left、right 和 transform 来实现水平和垂直居中。

```js
.container {
  height: 200px;
  position: relative;
}

.item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## 文本居中

### 常用方法

1. 水平居中

- text-align: center

- 适用于行内元素（如 <span>）或行内块元素（如 <img>）的水平居中。

```js
.container {
  text-align: center; /* 水平居中 */
}
```

2. 垂直居中

- line-height（用于单行文本）

- 当容器的高度已知且文本只有一行时，可以通过设置相同的 line-height 来实现垂直居中。

```js
.container {
  height: 100px; /* 设定容器高度 */
  line-height: 100px; /* 设定行高与容器高度相同 */
  text-align: center; /* 水平居中 */
}

.text {
display: inline-block; /_ 确保容器高度生效 _/
vertical-align: middle; /_ 垂直对齐 _/
}

```

### Flex and Grid

1. Flexbox

```js
.container {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  height: 200px; /* 设定容器高度 */
}
```

2. Grid

```js
.container {
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  height: 200px; /* 设定容器高度 */
}
```
