## 自适应的轮播

### 介绍
自适应轮播图,根据图片的高度进行展示

### 引入
1.在组件内引入
```
import mySwiper from '@/components/my-swiper/my-swiper'
componetns:{
   mySwiper
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示
#### 基础用法
```
<my-swiper :swiperData="swiperData"></my-swiper>
```
#### 点击预览
```
<my-swiper :swiperData="swiperData" @itemClick="itemClick"></my-swiper>
itemClick(item,index){
  uni.previewImage({  //uni.previewImage api
	current: index,
	urls: item,
	indicator: 'number',
	fail(err) {
	uni.showToast({
		title: err,
		icon: 'none'
	})
	}
})  
}
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
swiper-data|Array＜Number＞||轮播图片数组|
use-slot|Boolean|false|自定义底部详情，不开启则使用默认详情|
show|Boolean|true|是否显示默认底部详情|
like-numbe|Number|999|轮播图底部详情|
read-numbe|Number|999|轮播图底部详情|

### 事件说明 event
|事件名|说明|回调参数
---|---|---
itemClick|EventHandle||(item,index) item为数组,元素为所有图片url|,index当前图片的索引值