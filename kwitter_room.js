const firebaseConfig = {
      apiKey: "AIzaSyDqAue-EvYSvvIgCHF2cp3oFKY1lwUKecE",
      authDomain: "kwitter-2a4dc.firebaseapp.com",
      projectId: "kwitter-2a4dc",
      storageBucket: "kwitter-2a4dc.appspot.com",
      messagingSenderId: "657987380575",
      appId: "1:657987380575:web:a5b61dba8075fc4577c2ea"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
