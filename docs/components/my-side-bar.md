## SideBar 侧边栏

### 介绍
侧边栏导航组件,常用于分类页面

### 引入
1.在组件内引入
```javascript
import mySideBar from '@/components/my-side-bar/my-side-bar'
componetns:{
   mySideBar
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示
#### 基础用法
```javascript
<my-side-bar :SideBarList="categoryData" @change="onChange" :activeIndex="3" @badgeClick="badgeClick" activeBorderColor="green" badgeBgC="green"/>
```

徽标提示
设置dot属性后，会在右上角展示一个小红点。设置badge属性后，会在右上角展示相应的徽标
### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
active-index|Number|0|默认选中项的索引|
side-bar-list|Array＜Object＞|[]|侧边栏数据数组,详情如下介绍|
width|Number|85px|侧边栏的宽度|
active-border-color|String|#ee0a24|子项左边框的颜色|
badgeBgC|String|#ee0a24|dot或者是badge颜色|

#### side-bar-list
file-list 为一个对象数组，数组中的每一个对象包含以下 key
|参数|类型|默认|说明|
---|---|---|---
|title|String||子项的标题
|disable|Boolean|false|是否禁用
|badge|String||徽章
|dot|Boolean|false|需要时添加dot:true


### 事件说明 event
|事件名|说明|回调参数
---|---|---
change|EventHandle|(e) e.detail为当前点击标题,e.index为当前索引值
badge-click|EventHandle|(e) 当为badge时,e.detail为徽章内容,e.index为当前索引值,当为dot,仅返回当前的索引值index