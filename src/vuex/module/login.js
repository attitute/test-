import {getLogin}from '../../api/base-api'
export default {
    namespaced: true,// 命名空间 使用
    state:{
        loginMsg:{},
        num: 0
    },
    getters: {
        computedLogin(state){// getters['login/computedLogin']
            return state.num+1
        }, 
    },
    mutations:{ 
        setLogin(state,msg){// commit['login/setLogin']
            state.loginMsg = msg
        }
    },
    actions: {
        async asyncLogin({commit},msg){// dispatch['login/setLogin']
            msg = await getLogin()
            commit('setLogin',msg)
            commit('globalMutation',msg,{root:true}) // 访问全局的mutations
        },
        globalAction:{ // 注册全局的action
            root: true,
            handler ({commit}, payload) { 
                commit('globalMutation',payload)
            } // -> 'globalAction'
        }
    }
}