var firebaseConfig = {
    apiKey: "AIzaSyACwQpSpaPLzD-PBYwYpUJGVC9Nld9WluU",
    authDomain: "chat-app-7e1f5.firebaseapp.com",
    databaseURL: "https://chat-app-7e1f5-default-rtdb.firebaseio.com",
    projectId: "chat-app-7e1f5",
    storageBucket: "chat-app-7e1f5.appspot.com",
    messagingSenderId: "742754840209",
    appId: "1:742754840209:web:d7cff6ebda17272f9c9930"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name -"+ Room_names);
    row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat_page.html"
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}