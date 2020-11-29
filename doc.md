---
title: comfey(0.0.4)简明手册
author: 荀徒之
documentclass: morelull
numbersection: true
indent: true
---

# 用法 #

部署完成后，在脚本中写上：

```javascript
// @resource comfey http://path/to/comfey.<version>.css
// @grant GM_getResourceText
// @grant GM_addStyle

const { GX } = M;

GX.injectCSS("comfey");
```

`GM_getResourceText`和`GM_addStyle`这两项权限是必要的，配合[drifloon](https://github.com/kalxd/drifloon)一齐使用，一行代码就能实现样式注入。

# 配色说明 #

仅支持下列颜色：`red`、`green`、`blue`、`purple`、`orange`、`yellow`、`cyan`。

# 类别 #

## 基本元素 ##

### 按钮 ###

```css
._.button

._.button.@{color}

._.button.disabled, ._.button:disabled
```

### 输入框 ###

```css
select._.input, input._.input
```

### 网络 ###

```css
._.grid {
	.col

	.col.@{size}
}

._.grid.wrap

._.grid.space

._.grid .col.stretch
```

### 容器 ###

```css
._.segment

._.segment.@{color}
```

### 文本 ###

```css
._.text.@{color}

._.text.left
._.text.right
._.text.center
```

## 模块 ##

### 表单 ###

```css
._.input {
	input

	.button
}

._.input.@{color}
```

### 模态对话框 ###

```css
._.dimmer {
	._.modal {
		.title
		.content
		.footer
	}
}

._.dimmer.transparent

._.modal.small
._.modal.mini
._.modal.fit

._.modal.@{color}
```

### 侧边栏 ###

```css
._.sidebar.left
._.sidebar.right

._.sidebar.hide

._.sidebar > .anchor.top

._.sidebar > .anchor.bottom
```
