<template>
  <div class="other">
    <h1>Other</h1>
    测试spa prerender
    {{ $route.query }}
    {{ $route.params }}
    <br>
    <br>
    <span>{{msg}}</span>
    <router-link to="/">返回HOME</router-link>
  </div>
</template>
<script>
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
    // props:{
    //     msg1:{
    //         type: String,
    //         default () {
    //             return 1
    //         }
    //     }
    // },
    data() {
        return {
            msg: 0,
        }
    },
    created() {
            // console.log(this.$router.params)
        // this.msg = this.$router.params.msg
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
