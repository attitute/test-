import vuex from 'vuex'
import vue from 'vue'
import login from './module/login'
import createLogger from 'vuex/dist/logger'
vue.use(vuex)
export default new vuex.Store({
    strict: true, // 严格模式下只能操作mutations修改状态
    state:{
        count: 10
    },
    getters:{},
    mutations:{
        globalMutation(state,msg){
            state.count += msg
        },
    },
    actions:{
        syncGlobal(store,msg){
            store.commit('globalMutation',msg)
        }
    },
    modules: {
        login
      },
    plugins: [
        createLogger({
            collapsed: false, // 自动展开记录的 mutation
            filter (mutation, stateBefore, stateAfter) { 
                window.console.log('vuex日志'+JSON.stringify(stateBefore))
                window.console.log('vuex日志'+JSON.stringify(stateAfter))
                // console.log('vuex日志'+JSON.stringify(mutation))
                // 若 mutation 需要被记录，就让它返回 true 即可
                // 顺便，`mutation` 是个 { type, payload } 对象
                return mutation.type !== "aBlacklistedMutation"
            },
            transformer (state) {
                // 在开始记录之前转换状态
                // 例如，只返回指定的子树
                return state.subTree
            },
            mutationTransformer (mutation) {
                // mutation 按照 { type, payload } 格式记录
                // 我们可以按任意方式格式化
                return mutation.type
            },
            logger: console, // 自定义 console 实现，默认为 `console`
      })] // 自带日志插件
})