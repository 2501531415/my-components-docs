## 滚动导航条

### 介绍
基于uniapp的swiper-view实现

### 引入
1.在组件内引入
```
import mySwiperNav from '@/components/my-swiper-nav/my-swiper-nav'
componetns:{
   mySwiperNav
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示
#### 基础用法
```
<my-swiper-nav :navData="navData"  :ellipsis="false" @navItemClick="navItemClick"/>
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
navData|Array＜Number＞||导航数据数组|
useSlot|Boolean|false|自定义底部详情，不开启则使用默认详情|
show|Boolean|true|是否显示默认底部详情|
likeNumbe|Number|999|轮播图底部详情|
readNumbe|Number|999|轮播图底部详情|

### 事件说明 event
|事件名|说明|回调参数
---|---|---
itemClick|EventHandle||(item,index) item为数组,元素为所有图片url|,index当前图片的索引值