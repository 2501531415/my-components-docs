## BackTop 回到顶部

### 介绍
常常使用于滚动时回到顶部,常常结合onPageScroll以及uni.pageScrollTo使用

### 引入
1.在组件内引入
```javascript
import myBackTop from '@/components/my-back-top/my-back-top'
componetns:{
   myBackTop
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```javascript
<my-back-top :show="show" @backTop="backTop"/>
```
#### 示例
- 监听页面滚动的高度,当滚动到500时,显示按钮
```javascript
onPageScroll(e) {
	if (e.scrollTop > 500) {
		this.show = true
	} else {
		this.show = false
	}
},
```
- 返回顶部
```javascript
backTop(){
	uni.pageScrollTo({
	scrollTop: 0,
	duration: 300
	});
}
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
show|Boolean|false|返回顶部按钮显示|

### 事件说明 event

|事件名|说明|回调参数
---|---|---
backTop|EventHandle|点击回到按钮事件