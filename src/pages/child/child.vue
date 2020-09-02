<template>
  <div class="child">
    <h1>child</h1>
    {{ $route.query }}
    {{ $route.params }}
    <br>
    <div class="content">
        <span>发送请求</span>
    </div>
    <div class="content" id="box">
    </div>
    <h4 @click="$router.push('test')">jump child-son</h4>
    <h4 @click="$router.push('test1')">jump child-son1</h4>
    <h4 @click="$router.push({name:'permission'})">jump other</h4>
    <router-link to="/">返回HOME</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 0,
        }
    },
    created() {
    },
};
</script>

<style scoped lang="scss">
.child {
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    h1 {
            font-family: 'Courier New', Courier, monospace;
            font-size: 40px;
            line-height: 62px;
        }
    .box {
        width: 100px;
        height: 100px;
    }
    .content {
        width: 500px;
        height: 550px;
        
    }
}
</style>
