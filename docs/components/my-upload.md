## Upload 上传

### 介绍
图片、视频上传组件,核心api是uni.chooseImage,uni.chooseVideo,uni.chooseMedia

### 引入
1.在组件内引入
```
import myUpload from '@/components/my-upload/my-upload'
componetns:{
   myUpload
}
```
2.easycom引入具体详情见uniapp[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) (推荐使用) 

### 代码演示
#### 基础用法
```
<my-upload @beforeRead="beforeRead" @success="success" :file-list="fileList" url="http://192.168.0.149:3000/upload" :width="100" :count="5" accept="media"/>
```
#### 点击预览以及点击删除
预览以及删除具体参数请看事件说明
```
<my-upload @beforeRead="beforeRead" @success="success" @fail="fail" :file-list="fileList" @click-delete="clickDelete" @click-preview="preView"/>
```

### 属性说明props

|属性名|类型|默认值|说明
---|---|---|---
accept|String|image|获取媒体的类型 默认图片|
count|Number|9|最多可以选择的图片张数，默认9,仅当accept为image时生效|
sizeType|Array＜String＞|['original','compressed']|original 原图，compressed 压缩图，默认二者都有,accept为media,mediaType为image时生效|
sourceType|Array＜String＞|['album','camera']|album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项|
compressed|Boolean|true|是否压缩所选的视频源文件，默认值为 true，需要压缩|
maxDuration|Number|10|拍摄视频最长拍摄时间，单位秒。最长支持 60 秒|
camera|String|back|'front'、'back'，默认'back'|
url|String||开发者服务器 url|
name|String|file|文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容|
header|Object||HTTP 请求 Header, header 中不能设置 Referer|
formData|Object||http 携带的额外参数|
mediaType|Array＜String＞|['image', 'video']|当accept为media时的文件类型|
width|Number|100|上传框的宽度,高度与宽度一致|
fileList|Array＜Object＞|[]|图片或者视频的预览数组|
preview-full-image|Boolean|true|是否在点击预览图后展示全屏图片预览|
deletable|Boolean|true|是否展示删除按钮|

#### fileList
file-list 为一个对象数组，数组中的每一个对象包含以下 key
|参数|说明
---|---
|url|图片和视频的网络资源地址


### 事件说明 event
|事件名|说明|回调参数
---|---|---
beforeRead|EventHandle|(e,callback) e为选中的临时文件信息,callback,默认不使用beforeRead,当使用beforRead时,验证不通过需要调用回调函数callback(false),成功时callback(true)
click-preview|EventHandle|(index) 返回当前预览图片的索引值index，点击将展示全屏图片
click-delete|EventHandle|(index) 返回当前将要删除图片的索引值index 需要重新传递fileList,使用splice进行删除操作
success|EventHandle|(file) file为上传成功至服务器的信息，是一个数组
fail|EventHandle|(err) err返回上传错误的信息