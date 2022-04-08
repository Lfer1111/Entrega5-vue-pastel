import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


/*

counter: 0

cuadrado(state) {

  return state.counter * state.counter

}

downCounter(state, random) {

  state.counter -= random

},

upCounter(state, random) {

  state.counter += random

}

async upCounter({ commit }){

  const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new")

  const result = await res.json()

  commit("upCounter", result)

},

async downCounter({ commit }){

  const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new")

  const result = await res.json()

  commit("downCounter", result)

}


*/