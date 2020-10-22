## Refresh 拉下刷新

### 介绍
基于uniapp的swiper-view实现

### 引入
1.在组件内引入
```
import myRefresh from '@/components/my-refresh/my-refresh'
componetns:{
   myRefresh
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```
<my-refresh @pullDown="pullDown" @pullUp="pullUp" :total-page="50" :current-page="currentPage" pull-down-type="dot" border-color="red">
    //列表内容
	<view class="list">
		<view class="list-item" v-for="item in 50" :key="item">
		    {{item}}
		</view>
	</view>						
</my-refresh>

```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
pull-down-type|String|loading|下拉样式的类型,可选dot|
pull-down|Boolean|true|是否开启下拉|
pull-up|Boolean|true|是否开启上拉加载更多|
current-page|Number|0|当前页数或者数据条数|
total-page|Number|0|总页数或者总数|
border-color|String|#66A6FF|type为dot时,dot颜色|
pull-down-text|String|下拉加载|下拉的文字提示|
content-text|Object|{contentdown: '上拉显示更多',contentrefresh: '正在加载'contentnomore: '没有更多数据了'}|上拉的文字提示|

### 事件说明 event

|事件名|说明|回调参数
---|---|---
pullDown|EventHandle|(next)接收一个回调函数,请求到数据时，可将下拉回弹|
pullUp|EventHandle|(next)接收一个回调函数,请求到数据时，可完成加载|