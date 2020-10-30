## DropDown 下拉选择菜单

### 介绍
常常使用于筛选排序

### 引入
1.在组件内引入
```javascript
import myDropDown from '@/components/my-drop-down/my-drop-down'
componetns:{
   myDropDown
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```javascript
<my-drop-down-select :options="options"/>
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
options|Array＜Array＞||菜单栏配置项,是一个二维数组对象
active-color|String|#ee0a24|菜单标题和选项的选中态颜色
listBgc|String|white|菜单的背景颜色
top-allow|String|#ee0a24|箭头的颜色
overlay-status|Boolean|true|是否显示遮罩层
close-on-click-overlay|Boolean|true|是否在点击遮罩层后关闭菜单			
close-on-choose|Boolean|true|是否在选中之后关闭菜单

#### options属性
```
[
    [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
]
```
|属性名|类型|说明
---|---|---
text|String|标题
value|String|Number|当前text的标志

### 事件说明 event

|事件名|说明|回调参数
---|---|---
change|EventHandle|(e) e.detail为当前点击菜单标题,e.value为标题的标志value
