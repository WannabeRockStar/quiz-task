import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemIndex: null,
    score: 0,
    quizIndex: 0,
    isTrue: false,
    data: [
      {
        "id": 1,
        "isClicked": false,
        "title": "Lorem Ipsum",
        "question": "Which building was set aflame on August 24th, 1812?",
        "correct_answer": {"answer": "The White House", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
        "incorrect_answers": [
          {"answer": "Parliament Building", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "Grand National Assembly Building", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "Palace of the Nation", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "Lorem ipsum", "image": ""},
          {"answer": "Lorem ipsum", "image": ""}
        ]
      },
      {
        "id": 2,
        "isClicked": false,
        "title": 'Lorem Ipsum',
        "question": "When did Norway get its constitution?",
        "correct_answer": {"answer": "1814", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
        "incorrect_answers": [
          {"answer": "1932", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "1905", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "1854", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "1000", "image": ""},
          {"answer": "1001", "image": ""}
        ]
      },
      {
        "id": 3,
        "isClicked": false,
        "title": 'Lorem Ipsum',
        "question": "Which historical conflict killed the most people?",
        "correct_answer": {"answer": "World War II", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
        "incorrect_answers": [
          {"answer": "Taiping Rebellion", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "Three Kingdoms War", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "Mongol conquests", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "Lorem ipsum", "image": ""},
          {"answer": "Lorem ipsum", "image": ""}
        ]
      },
      {
        "id": 4,
        "isClicked": false,
        "title": 'Lorem Ipsum',
        "question": "How many women joined the United States Armed Services during World War II?",
        "correct_answer": {"answer": "350,000", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
        "incorrect_answers": [
          {"answer": "225,000", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "100,000", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "500,000", "image": "https://images4.alphacoders.com/881/thumb-1920-881534.jpg"},
          {"answer": "115,000", "image": ""},
          {"answer": "200,000", "image": ""}
        ]
      }
    ]
  },

  getters: {
    getQuiz(state) {
      return state.data
    },

    getItemIndex(state) {
      return state.itemIndex
    },

    getClass(state) {
      return state.isTrue
    }
  },
  mutations: {
    SET_ITEM_INDEX(state, payload) {
      state.itemIndex = payload
    },

    SET_SCORE(state, payload) {
      state.score += payload
    },

    RESET_SCORE(state, payload) {
      state.score = payload
    },

    SET_CLASS(state, payload) {
      state.isTrue = payload
    },
    SET_QUIZ_INDEX(state, payload) {
      console.log(payload)
      if(payload !== undefined) {
        state.quizIndex = payload
        return
      }
      state.quizIndex++
    },

    RESET_QUIZ_INDEX(state) {
      state.quizIndex = 0
    },

    SET_CLICKED(state, payload) {
      const arr = state.data.map(item => {
        
        item.isClicked = false

        return item
      })

      state.data = arr
    }
  },
  actions: {
  },
  modules: {
  }
})
