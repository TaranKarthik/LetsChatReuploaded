var firebaseConfig = {
      apiKey: "AIzaSyBNgF1E5bREl9nPePN0GKGEz9Qr5yzeU8g",
      authDomain: "newdatabaseforchattingapp.firebaseapp.com",
      databaseURL: "https://newdatabaseforchattingapp-default-rtdb.firebaseio.com",
      projectId: "newdatabaseforchattingapp",
      storageBucket: "newdatabaseforchattingapp.appspot.com",
      messagingSenderId: "526414737665",
      appId: "1:526414737665:web:12c76d99f1798a38d3eb00",
      measurementId: "G-NB5DRJP0FZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("greeting_para").innerHTML = "Welcome," + " " + localStorage.getItem("NameForChatApp") + " " + "!";

function addRoom() {
      RoomName = document.getElementById("makeroom_input").value;
      localStorage.setItem("Room Name", RoomName);

      firebase.database().ref("/").child(RoomName).update({
            purpose: "Adding Room Name"
      }).then(function () {
            window.location = "chatscreen.html";
      });






}