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


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start Code
                  console.log("The Room Names Are- " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";
                  document.getElementById("output").innerHTML = row;


                  //End code
            });
      });
}
getData();