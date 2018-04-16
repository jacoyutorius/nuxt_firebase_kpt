import firebase from "~/plugins/firebase"

export const state = () => ({
  boards: []
})

export const mutations = {
  getBoards () {
    var boardsRef = firebase.database().ref("boards");
    boardsRef.on("value", function(snapshot){
      this.boards = snapshot.val();
    }.bind(this));
  },
  createBoard (state, boardTitle) {
    var key = firebase.database().ref().child('boards').push().key;
    firebase.database().ref("boards/" + key).set({
      title: boardTitle,
      timestamp: Date.now()
    })
  }
}