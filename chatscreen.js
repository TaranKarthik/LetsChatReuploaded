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
username = localStorage.getItem("NameForChatApp");
room_nAme = localStorage.getItem("Room Name");
console.log(room_nAme);
document.getElementById("placeOfROom").innerHTML = room_nAme;
var input = document.getElementById("MeessagePlace");
var x = document.getElementById("myAudio"); 



function send() {
    TextForMessage = document.getElementById("MeessagePlace").value;
    input.value = "";
    firebase.database().ref(room_nAme).push({
        message: TextForMessage,
        name: username
    });
    x.play(); 

}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        TextForMessage = document.getElementById("MeessagePlace").value;
        input.value = "";
        firebase.database().ref(room_nAme).push({
            message: TextForMessage,
            name: username
        });
        x.play(); 
    }
});

function getData() {
    firebase.database().ref("/" + room_nAme).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);

                var messagee = message_data["message"];
                var nameeeee = message_data["name"];



                var messageePlace = "<p class='message'>" + messagee + "</p>";
                var Namee = "<p class='nameee'>" + nameeeee + "</p>";

                var row = messageePlace + Namee;
                document.getElementById("output").innerHTML += row;






                //End code
            }
        });
    });
}
getData();