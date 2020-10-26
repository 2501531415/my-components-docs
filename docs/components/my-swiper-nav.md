## NavBar 滚动导航条

### 介绍
基于uniapp的swiper-view实现

### 引入
1.在组件内引入
```javascript
import mySwiperNav from '@/components/my-swiper-nav/my-swiper-nav'
componetns:{
   mySwiperNav
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```javascript
<my-swiper-nav :navData="navData"  @navItemClick="navItemClick"/>

```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
nav-data|Array＜Number＞||导航数据数组|
active|Number|0|当前选中标签的标识符|
nav-type|String|line|nav的样式类型|
swiperThreshold|Number|5|滚动阈值|
lineWidth|Number|40|type为line时下划线宽度|
lineWidth|Number|40|type为line时下划线高度|
ellipsis|Boolean|true|文字超出是否隐藏|
scrollView|Boolean|false|切换nav 元素向设置的方向滚动|
color|String|#ee0a24|nav的主题颜色|

### 事件说明 event

|事件名|说明|回调参数
---|---|---
itemClick|EventHandle|(title,index) title为标题,index为索引值|