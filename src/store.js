import Vue from 'vue'
import Vuex from 'vuex'



//import EventService from '@/services/EventService'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [
      {
        "name": 'Vacation',
        "details": 'Going to the beach!',
        "start": '2018-12-29',
        "end": '2019-01-01',
        "color": 'blue',
      }

    ],
    dates: ['Any date', 'today', 'this week', 'pick a date'],
    cal_items: ['Daily', 'Weekly'],
    activeCat: null
  }, //hier kommen daten die wir speichern möchten, die alle Componente benutzen können!
  mutations: {
    setActiveCat(state, item) {
      state.activeCat = item
    },
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, payload) {
      state.events[payload.index] = payload.event
    },
    DELETE_EVENT(state, id) {
      var index = state.events.findIndex(event => event.id == id)//it findes the place of item we are looking for
      state.events.splice(index, 1)
    },
    /*EDIT_EVENT(state, id) {
      var item = state.events.find(event => event.id == id)
      state.events.set(item)
    }*/
  },
  actions: {
    createEvent({ commit }, event) {
      commit('ADD_EVENT', event)

    },
    updateEvent({ commit, state }, event) {
      var index = state.events.findIndex(e => e.id == event.id)
      commit('SET_EVENT', { event, index })
    },
    deletEvent({ commit }, id) {
      commit('DELETE_EVENT', id)
    }
  },

  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }

})

export default store;