# VweUI

> WeUI for vue 2.0.
> 使用 Vue.js 2.0 为微信 WeUI(1.0+) 库进行量身设计、封装。目前所有组件均已封装完毕，将会在接下来一段时间陆续更新使用文档。

#### How to install 安装 VweUI
```
npm install vweui --save
```

#### How to use 使用 VweUI
##### ES6
```
// import all components
// 使用所有组件
import * as VweUI from 'vweui'

// import part components
// 使用部分组件
import {Button} from 'vweui'

// or
import Button from 'vweui/components/button'
```
##### CommonJS
```
const VweUI = require('vweui')
const Button = VweUI.Button

// or

const Button = require('vweui/components/button')
```

#### How to Run Example

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```