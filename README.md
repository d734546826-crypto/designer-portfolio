# Designer Portfolio

这是一个设计师个人作品集静态网站项目。

页面运行时不依赖外部 CDN。Tailwind 样式和 Phosphor 图标字体都已经放在本地 `assets/` 目录里，适合发送给无法访问外网的 HR 或面试官查看。

## 本地预览

```bash
npm run dev
```

成功后，在浏览器打开：

```text
http://localhost:5173
```

## 项目结构

```text
index.html       网站主页面
assets/          本地样式、图标字体和构建入口
package.json     项目命令
.gitignore       Git 忽略规则
README.md        项目说明
```

## 修改样式后重新构建

如果你修改了 `index.html` 里的 Tailwind class，请运行：

```bash
npm run build:css
```

成功后会更新：

```text
assets/styles.css
```

## 下一步建议

1. 替换姓名、邮箱、项目案例和经历。
2. 把占位项目图换成真实作品截图。
3. 检查手机端展示效果。
4. 提交第一版 Git 记录。
