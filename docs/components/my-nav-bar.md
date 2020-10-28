## NavBar 导航条

### 介绍
常常使用于顶部返回上一层

### 引入
1.在组件内引入
```javascript
import myNavBar from '@/components/my-nav-bar/my-nav-bar'
componetns:{
   myNavBar
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```javascript
<my-nav-bar @left-click="leftClick" border left-text="返回" left-allow />
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
title|String||导航栏中间标题|
leftText|String||导航栏左边问题|
rightText|String||导航栏右边问题|
leftAllow|Boolean|false|导航栏左边是否有返回箭头|
bgc|String|white|导航栏的背景颜色|
border|Boolean|false|是否显示底部边框|

### 插槽自定义
|名称|说明
---|---
left|自定义左侧区域内容
center|自定义标题
right|自定义右侧区域内容

```javascript
<my-nav-bar @left-click="leftClick" border left-text="返回" left-allow >
    <view class="b" slot="center">
		中间
    </view>
	<view class="b" slot="right">
	    右边
    </view>
</my-nav-bar>
    
```
### 事件说明 event

|事件名|说明|回调参数
---|---|---
left-click|EventHandle 点击左侧时触发||
right-click|EventHandle 点击右侧时触发||