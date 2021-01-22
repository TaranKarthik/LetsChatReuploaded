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



const signIn = document.getElementById('SignIn'),

    loginIn = document.getElementById('login-in');








signIn.addEventListener('click', function () {
    if (document.getElementById("login_inputt").value == "") {
        document.getElementById("warning").innerHTML = "<i class='fas fa-exclamation-triangle'></i>Warning: Please enter a suitable name.";
    } else {
        var UserName = document.getElementById("login_inputt").value;

        localStorage.setItem("NameForChatApp", UserName);
        window.location = "makeroom.html"



    }

});