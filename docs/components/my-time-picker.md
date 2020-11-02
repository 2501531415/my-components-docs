## TimePicker 时间选择器

### 介绍
常常使用于表单收集

### 引入
1.在组件内引入
```javascript
import myTimePick from '@/components/my-time-pick/my-time-pick'
componetns:{
   myTimePick
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示

#### 基础用法

```javascript
<my-time-picker :endYear="2060" time-type="normal" @submit="submit"/>
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
time-type|String|normal| 时间选择器的类型 all类型有时分秒
begain-year|Number|1990|开始年份
end-year|Number|当前年份|结束年份
join|String|-|日期的连接符 2000-10-23

### 事件说明 event

|事件名|说明|回调参数
---|---|---
submit|EventHandle|time time为确定选择的时间 2020-10-23
