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
        id: 1,
        name: 'Vacation',
        details: 'Going to the beach!',
        img: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
        start: '2018-12-29',
        end: '2019-01-01',
        color: 'blue',
        organizer: 'Adam Jahr',
      },
      {
        id: 2,
        name: 'Meeting',
        details: 'Spending time on how we do not have enough time',
        start: '2019-01-07 09:00',
        end: '2019-01-07 09:30',
        color: 'indigo',
        organizer: 'Adam Jahr',
      },
      {
        id: 3,
        name: 'Large Event',
        details: 'This starts in the middle of an event and spans over multiple events',
        start: '2018-12-31',
        end: '2019-01-04',
        color: 'deep-purple',
        organizer: 'Adam Jahr',
        
      },
      {
        id: 4,
        name: '3rd to 7th',
        details: 'Testing',
        start: '2019-01-03',
        end: '2019-01-07',
        color: 'cyan',
        organizer: 'Adam Jahr',
      },
      {
        id: 5,
        name: 'Big Meeting',
        details: 'A very important meeting about nothing',
        start: '2019-01-07 08:00',
        end: '2019-01-07 11:30',
        color: 'red',
        organizer: 'Adam Jahr',
      },
      {
        id: 6,
        name: 'Another Meeting',
        details: 'Another important meeting about nothing',
        start: '2019-01-07 10:00',
        end: '2019-01-07 13:30',
        color: 'brown',
        organizer: 'Adam Jahr',
      },
      {
        id: 7,
        name: '7th to 8th',
        start: '2019-01-07',
        end: '2019-01-08',
        color: 'blue',
        organizer: 'Adam Jahr',
      },
      {
        id: 8,
        name: 'Lunch',
        details: 'Time to feed',
        start: '2019-01-07 12:00',
        end: '2019-01-07 15:00',
        color: 'deep-orange',
        organizer: 'Adam Jahr',
      },
      {
        id: 9,
        name: '30th Birthday',
        details: 'Celebrate responsibly',
        start: '2019-01-03',
        end: '2019-01-03',
        color: 'teal',
        organizer: 'Adam Jahr',
      },
      {
        id: 10,
        name: 'New Year',
        details: 'Eat chocolate until you pass out',
        start: '2019-01-01',
        end: '2019-01-02',
        color: 'green',
        organizer: 'Adam Jahr',
      },
      {
        id: 11,
        name: 'Conference',
        details: 'The best time of my life',
        start: '2019-01-21',
        end: '2019-01-28',
        color: 'grey darken-1',
        organizer: 'Adam Jahr',
      },
      {
        id: 12,
        name: 'Hackathon',
        details: 'Code like there is no tommorrow',
        start: '2019-01-30 23:00',
        end: '2019-02-01 08:00',
        color: 'black',
        organizer: 'Adam Jahr',
      },
      {
        id: 12,
        name: 'event 1',
        start: '2019-01-14 18:00',
        end: '2019-01-14 19:00',
        color: '#4285F4',
        organizer: 'Adam Jahr',
      },
      {
        id: 14,
        name: 'event 2',
        start: '2019-01-14 18:00',
        end: '2019-01-14 19:00',
        color: '#4285F4',
        organizer: 'Adam Jahr',
      },
      {
        id: 15,
        name: 'event 5',
        start: '2019-01-14 18:00',
        end: '2019-01-14 19:00',
        color: '#4285F4',
        organizer: 'Adam Jahr',
      },
      {
        id: 16,
        name: 'event 3',
        start: '2019-01-14 18:30',
        end: '2019-01-14 20:30',
        color: '#4285F4',
        organizer: 'Adam Jahr',
      },
      {
        id: 15,
        name: 'event 4',
        start: '2019-01-14 19:00',
        end: '2019-01-14 20:00',
        color: '#4285F4',
        organizer: 'Adam Jahr',
      },
      {
        id: 16,
        name: 'event 6',
        start: '2019-01-14 21:00',
        end: '2019-01-14 23:00',
        color: '#4285F4',
        organizer: 'Adam Jahr',
      },
      {
        id: 17,
        name: 'event 7',
        start: '2019-01-14 22:00',
        end: '2019-01-14 23:00',
        color: '#4285F4',
        organizer: 'Adam Jahr',
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