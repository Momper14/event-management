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
<<<<<<< HEAD
        "name": 'Vacation',
        "details": 'Going to the beach!',
        "start": '2018-12-29',
        "end": '2019-01-01',
        "color": 'blue',
=======
        "id": 1,
        "title": "Beach Cleanup",
        "dateS": "2019-09-03",
        "dateE": "2019-09-03",
        "stime": "10:00",
        "etime": "11:00",
        "location": "Daytona Beach",
        "description": "Let's clean up this beach.",
        "organizer": "Adam Jahr",
        "category": "sustainability"
      },
      {
        "id": 2,
        "title": "Park Cleanup",
        "dateS": "2019-09-03",
        "dateE": "2019-09-03",
        "stime": "12:00",
        "etime": "14:00",
        "location": "132 N Magnolia Street, Orlando, Florida",
        "description": "We're going to clean up this park.",
        "organizer": "Adam Jahr",
        "category": "nature"
>>>>>>> 10227ae8304e68b99027a2345247cdeb2312669f
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