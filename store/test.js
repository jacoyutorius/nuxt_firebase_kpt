import Vue from "vue"
import Vuex from "vuex"
import { firebaseMutations, firebaseAction } from "vuexfire"
import firebase from "~/plugins/firebase"

Vue.use(Vuex);

const db = firebase.database()
const boardsRef = db.ref("/boards")

const store = () => {
  return new Vuex.Store({
    state: {
      boards: []
    },
    mutations: {
      ...firebaseMutations,
    },
    actions: {
      INIT_BOARDS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef("boards", boardsRef)
      }),
      CREATE_BOARD: firebaseAction((context, new_board_name) => {
        boardsRef.push(
          { 
            title: new_board_name, 
            date: "2018.1.23",
            kpt: { 
              keep_content: [],
              problem_content: [],
              try_content: [] 
            } 
          }
        )
      })
    },
    getters: {
      getBoards: state => state.boards
    }
  })
}  