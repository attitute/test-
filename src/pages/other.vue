<template>
  <div class="other resume" ref="resume">
    <h1>Other</h1>
    测试spa prerender
    {{ $route.query }}
    {{ $route.params }}
    <br>
    <span>{{$store.state.login}}</span>
    <br>
    <h3 @click="file()">file--------------</h3>
    <span>{{msg}}</span>
    <!-- 跳转使用了滚动到锚点 -->
    <h4 @click="$router.push('/other/child#box')">jump child</h4>
    <router-link to="/">返回HOME</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import {resume} from './resume.css'
import axios from '../util/http'
export default {
    metaInfo: {
        title: 'other页面标题title',
        meta: [
            {
                name: 'keyWords',
                content: '首页页面可以other1,2,3,4,5,6s',
            },
        ],
    },
    data() {
        return {
            msg: 0,
        }
    },
    methods: {
        file(){
        
            this.handerWord('resume',resume)
        },
        handerWord(name,cssJs){
            let html =document.getElementsByClassName(name)[0].innerHTML;// 获取要导出部分的内容
                console.log('html', html)
            let htmlDom = `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width,initial-scale=1.0">
                    <title>标题</title>
                    <link rel="stylesheet" href="https://cdn.bootcss.com/iview/2.14.0/styles/iview.css" />
                    <style>
                        ${cssJs}
                    </style>
                </head>
                <body>
                    <div class="resume_preview_page" style="margin:0 auto;width:1200px">
                    ${html}
                    </div>
                </body>
                </html>`;
                let htmlDom_ = new Blob([htmlDom],{ "type" : "text/html;charset=utf-8" })
                let formData = new FormData();
                console.log('html', htmlDom_)
                formData.append('uploadFile', htmlDom_, `word.html`);//word.html是设置文件名
                formData.append('docId', -1)
                formData.append('pid', 101092532177)
                formData.append('path', 'huangsiyuan_private/')
                formData.append('name', '1CDRCB_产品管理_系统推广方案及计划 - 副本.docx')
                formData.append('filePath', undefined)
                formData.append('size', 44352)
                formData.append('checkSum', '915716948509a216f6eee5ba5e786496')
                
                axios({
                    method: 'post',
                    url: '/DocSystem/Doc/uploadDoc.do',
                    data: formData,
                    responseType:'blob',//这里如果不设置，下载会打不开文件
                }).then(res=>{
                    console.log('download res',res);
                    // //通过后台返回 的word文件流设置文件名并下载
                    // var blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
                    // var downloadElement = document.createElement('a');
                    // var href = window.URL.createObjectURL(blob); //创建下载的链接
                    // downloadElement.href = href;
                    // downloadElement.download ='s.doc'; //下载后文件名
                    // document.body.appendChild(downloadElement);
                    // downloadElement.click(); //点击下载
                    // document.body.removeChild(downloadElement); //下载完成移除元素
                    // window.URL.revokeObjectURL(href); //释放掉blob对象
                })
        }
      
    },
};
</script>

<style scoped>
.other {
    
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    
}
h1 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 40px;
        line-height: 62px;
    }
    .box {
        width: 100px;
        height: 100px;
    }
</style>
