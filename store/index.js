import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// window.fetch() 的 Polyfill
require('whatwg-fetch')

const store = () => new Vuex.Store({
  state: {
    authUser: null
  },

  mutations: {
    SET_USER: function (state, user) {
      state.authUser = user
    }
  },

  actions: {
    nuxtServerInit ({commit}, {req}) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },
    login ({commit}, {username, password}) {
      return fetch('/api/login', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }).then((res) => {
        if (res.status === 401) {
          throw new Error('用户名或密码错误')
        } else {
          return res.json()
        }
      }).then((authUser) => {
        commit('SET_USER', authUser)
      })
    },
    logout ({ commit }) {
      return fetch('/api/logout', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST'
      }).then(() => {
        commit('SET_USER', null)
      })
    }
  }

})

export default store
