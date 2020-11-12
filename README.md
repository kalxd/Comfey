# Comfey #

该项目不是完整的CSS框架，只提供极少样式，以达到最小要求的布局、视觉要求；覆盖面不广，她同样不适用于任何网站开发。
她唯一作用便是嵌入到其他网站，作为一种补充而存在——其实就是方便写油猴脚本时快速构建一个界面。

为了能够与其他网站并存，她需要有足够的“包容性”，这也是该项目的追求。

# 安装 #

先安装依赖：

```bash
# 安装依赖
$ npm install
```

# 编译构建 #

```bash
$ npm run build
```

编译之后，能够在`dist/`看到两个css文件，一个带版号，另一个不带。

# 开发 #

```bash
$ npm run watch
```

每次更改都会触发相对应的编译任务。

# 使用协议 #

AGPL v3