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
            "id": 1,
            "title": "Beach Cleanup",
            "dateS": "2019-09-03",
            "dateE": "2019-09-03",
            "stime": "10:00",
            "etime": "11:00",
            "location": "Daytona Beach",
            "description": "Let's clean up this beach.",
            "organizer": "Adam Jahr",
            "category": "sustainability"},
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
        }

    ],
    activeCat: null
  }, //hier kommen daten die wir speichern möchten, die alle Componente benutzen können!
  mutations: {
    setActiveCat(state, item) {
        state.activeCat = item
      },
      ADD_EVENT(state, event) {
        state.events.push(event)
      },
  },
  actions: {
      getEventById: state => id => {
          return state.events.find(event => event.id === id)
      },
      createEvent({ commit }, event) {
        //EventService.postEvent(event)
        commit('ADD_EVENT', event)
      }
    }
  
  
})

export default store;