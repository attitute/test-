<template>
  <div class="hello">
    <div class="content">
      <span>{{ $store.state }}</span
      ><br />
      <button @click="login">Login</button><br />
      <span>count:{{ c }}num:{{ n }}login:{{ l }}</span>
      <h1 @click="$router.replace({ name: 'other', params: { msg: 1 } })">
        jump other nameparams
      </h1>
      <h1 @click="$router.push({ path: '/other', query: { msg: 1 } })">
        jump other1pathquery
      </h1>
      <h1 @click="$router.push({ path: '/word', query: {} })">
        jump word
      </h1>
    </div>
    <span @click="getLogins">发送请求</span>
    <router-link :to="{ path: '/other', query: { msg: 1 } }">11</router-link>
    <div
      id="myChart"
      :style="{ width: '300px', height: '300px', backgroundColor: '#F5F5F5' }"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
// import { getLogin } from '../api/base-api.js'
export default {
  name: "home",
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
          },
        ],
      },
    }
  },
  created() {},
  methods: {
    async getLogins() {
      try {
        this.$axios
          .get(
            "/api/dream/search?appkey=3df92b1d4199d72a&keyword=鞋&pagenum=1&pagesize=10"
          )
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        // let data = await getLogin({appkey:'3df92b1d4199d72a',keyword:'鞋'})
        // console.log(data);
      } catch (error) {
        console.log(error)
      }
    },
    async login() {
      this.globalMutation(10)
      this.syncGlobal(50)
      // this.$store.state.count = 100
      // 直接使用module里面的
      this.$store.commit("login/setLogin", { msg: 1 })
    },
    ...mapMutations(["globalMutation"]),
    ...mapActions(["syncGlobal"]),
  },
  computed: {
    // 正常使用
    // ...mapState(['count']),
    ...mapState({ c: "count" }), // 需要重命名
    // 使用module里面的
    // ...mapState('login',['num','loginMsg']),
    ...mapState("login", { n: "num", l: "loginMsg" }), // 多个重命名
    ...mapGetters("login", ["computedLogin"]),
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("myChart"))
    myChart.setOption(this.option)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
