# Untitled App


## Notes

```ts
import { createPortal } from 'react-dom';
```
必须得用上面这个, 否则 react 不能正常工作.

用 reveal.js 自带的 markdown plugin, markdown 的内容无法动态刷新.
所以我自己实现了 markdown 转 html 的功能, 用 `dangerouslySetInnerHTML` 来渲染.

code highlight doesn't work if update content dynamically.

- ref: https://shotstack.io/learn/use-ffmpeg-to-convert-images-to-video/
- ref https://revealjs.com/installation/
