# vue3.0

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
### Git :fatal: refusing to merge unrelated histories解决 强制合并命令
```
git pull origin master --allow-unrelated-histories
```
### 项目所有页面缩放 devicePixelRatio

- mac小屏 2880 1440(window.screen.width) 0.7 
- mac大屏 2560 2560(window.screen.width) 1 
- window  1920 2560(window.screen.width) 1.1

```
import DevicePixelRatio from './devicePixelRatio';
```
