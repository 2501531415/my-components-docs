## TabBar 底部导航条

### 介绍
常常使用于底部导航,在小程序中,建议使用原生导航,性能高很多。但是有些凸起的需求,只能进行自定义。凸起等待完善...

### 引入
1.在组件内引入
```javascript
import myTabBar from '@/components/my-tab-bar/my-tab-bar'
componetns:{
   myTabBar
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```javascript
<my-tab-bar :tabBar="tabBar" @change="change"/>
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
tabBar|Object||TabBar的配置项

#### tabBar
- tabBar是一个对象
- tabBar中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。

|属性名|类型|默认值|说明
---|---|---|---
color|HexColor|#444444|tab上的文字默认颜色
selectedColor|HexColor|#f77d8b|tab上的文字选中时的颜色
backgroundColor|HexColor|#ffffff|tab的背景色			
borderStyle|String|black|tabbar上边框的颜色
list|Array＜Object＞|tab的列表，详见 list 属性说明，最少2个、最多5个 tab	
fontSize|String|10px|文字默认大小
<!-- iconWidth|String|20px|图标默认宽度（高度等比例缩放） -->
height|String|50px|tabBar默认高度

### list

- list 接收一个数组，数组中的每个项都是一个对象

|属性名|类型|默认值|说明
---|---|---|---
pagePath|String||页面路径，必须在pages中先定义
iconPath|String||图片路径
selectedIconPath|String||选中时的图片路径
text|String||tab上按钮文字
badge|String||徽标提示

### 事件说明 event

|事件名|说明|回调参数
---|---|---
change|EventHandle|(e) e.detail为当前点击tab标题,e.index为当前索引值
