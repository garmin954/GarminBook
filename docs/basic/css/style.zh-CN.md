---
title: css样式
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/css
  title: css
  order: 100

---

### display
|属性值|作用|
|:-|:-|
|block| 块类型， 宽度和父级一样|
|inline|行内元素类型，默认宽度为内容宽度，不可设置宽高，同行显示,<br/> 不可以设置垂直方向的`padding` 和 `margin`
|inline-block| 	默认宽度为内容宽度，可以设置宽高，同行显示。|
|list-block| 可以配合`list-style`显示延时类似`ul>li`|
|table| 此元素会作为块级表格来显示。|
|table-row| 此元素会作为块级表格tr。|
|table-column| 此元素会作为块级表格td。|
|inherit| 规定应该从父元素继承 `display` 属性的值。|

### 隐藏元素
|属性值|作用|
|:-|:-|
|display: none|1. 渲染树不会渲染对象, <br>2. 非继承属性, <br>3. 会导致回流(reflow)|
|visibility: hidden|1. 元素在页面中仍占据空间，但是不会响应绑定的监听事件, 渲染元素，<br>2. 是继承属性,只是不可见，子孙节点消失是由于继承了`hidden`，通过设置`visibility:visible`可以让子孙节点显示；<br>3. 不会导致回流|
|opacity: 0| 元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件|
|position: absolute|通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。|
|z-index|负值:来使其他元素遮盖住该元素，以此来实现隐藏。|
|clip/clip-path|元素仍在页面中占据位置，但是不会响应绑定的监听事件。|
|transform: scale(0,0)|将元素缩放为 0，元素仍在页面中占据位置，但是不会响应绑定的监听事件。|

### link 和@import 的区别
* link 引用 CSS 时，在页面载入时同时加载； @import 需要页面网页完全载入以后加载。

### transition 和 animation 的区别
**transition**
> 是过度属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。<br/>它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。

**animation**
> 是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。<br/>它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用`@keyframe` 定义）完成动画。


### 伪元素和伪类的区别和作用？
**伪元素**
> 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
 ```css
div::before{
  content: '';
  display: block;
  ...
}
```

**伪类**
> 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
 ```css
div:hover{
  border: 1px solid red;
  ...
}
```

### 对盒模型的理解
> CSS3 中的盒模型有以下两种：标准盒模型、怪异盒模型
标准盒模型和怪异盒模型的区别在于设置 width 和 height 时，所对应的范围不同：
标准盒模型的 width 和 height 属性的范围只包含了 `content`，
怪异盒模型 width 和 height 属性的范围包含了 `border、padding 和 content`。
<br>可以通过修改元素的 `box-sizing` 属性来改变元素的盒模型：
<br>`box-sizing: content-box`表示标准盒模型（默认值）
<br>`box-sizing: border-box`表示 怪异盒模型（IE 盒模型）


### 为什么有时候⽤translate来改变位置⽽不是定位？
`translate` 不会触发浏览器回流和重绘,只会触发复合, 利用GPU效率高
绝对定位会导致重排, 进而触发重绘, 利用CPU效率低

### li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？
> 浏览器的默认行为是把 `inline` 元素间的`空白字符`（空格换行tab）渲染成一个空格，也就是我们上面的代码`<li>`换行后会产生换行字符，而它会变成一个空格，当然空格就占用一个字符的宽度。

* 既然是inline元素的换行生成的空格， 那么可以去掉换行。
* 既然是空格占一个字符的宽度，那我们索性就将`<ul>`内的字符尺寸直接设为 0 `ul{font-size:0px;}`
* 把`<ul>`的字符间距设置负数 ` ul{letter-spacing: -5px;} li{letter-spacing: normal;}` 

### px、em、rem 的区别及使用场景

* px 是固定的像素，一旦设置了就无法因为适应页面大小而改变。
* em 和 rem 相对于 px 更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
* em 是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而 rem 是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

### 对 BFC 的理解，如何创建 BFC