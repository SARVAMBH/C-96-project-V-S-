var firebaseConfig = {
    apiKey: "AIzaSyBpv3d7EjZNBru2CDt9ssagUqLDU5bJT8M",
    authDomain: "lets-chat-web-app-1a10e.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-1a10e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-1a10e",
    storageBucket: "lets-chat-web-app-1a10e.appspot.com",
    messagingSenderId: "997907621054",
    appId: "1:997907621054:web:ff066cfd302645d7ba6aef"
  };
  
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout()
{

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}

function send()
{

       msg = document.getElementById("msg").value;

       firebase.database().ref("/").child(room_name).push({
             name : user_name,
             message : msg,
             like : 0
       });

       document.getElementById("msg").value = "";

}