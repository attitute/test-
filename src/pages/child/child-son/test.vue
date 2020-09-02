<template>
  <div class="child">
    <h1>test</h1>
    {{ $route.query }}
    {{ $route.params }}
    <br>
    <div class="content">
        <span>发送请求</span>
    </div>
    <div class="content" id="box">
    </div>
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
