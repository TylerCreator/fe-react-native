import * as firebase from "firebase";

const config = { 
  apiKey: "AIzaSyAkkRFGt2gikQ7Gc--VZMH3Ve0OugJqt4k", 
  authDomain: "fast-event.firebaseapp.com", 
  databaseURL: "https://fast-event.firebaseio.com", 
  projectId: "fast-event", 
  storageBucket: "", 
  messagingSenderId: "494696089891" 
  }; 
firebase.initializeApp(config); 

database = firebase.database();

export function getEvents(callback){
  database.ref("/events").off();
  database.ref("/events").on("value", s=>{
    const rawEvents = s.val();
    let events = [];
    Object.keys(rawEvents).map(key => events.push(rawEvents[key]));
    console.log("DTDBG: getEvents", events);
    callback(events.reverse());
  });
}

export function createUser(email,password){
  return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}



export function addEvent(newEvent){
  database.ref("/events").push(newEvent);
}
