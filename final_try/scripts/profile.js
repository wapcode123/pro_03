firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      let uid = user.uid;
      
      let userRef = firebase.firestore().collection("users").doc(uid);
      
      userRef.get().then((doc) => {
        if (doc.exists) {
          let userData = doc.data();
          
          document.getElementById("Name").value = userData.Name || "";
          document.getElementById("gender").value = userData.Gender || "";
          document.getElementById("email").value = userData.Email || "";
          document.getElementById("age").value = userData.Age || "";
          document.getElementById("departure").value = userData.Departure || "";
          document.getElementById("destination").value = userData.Destination || "";
          document.getElementById("medialink").value = userData.MediaLinks || "";
          document.getElementById("description").value = userData.Description || "";
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    } else {
      window.location.assign("./email.html");
    }
  } else {
    window.location.assign("./login.html");
  }
});


function update() {
  let Name = document.getElementById("Name").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let departure = document.getElementById("departure").value;
  let destination = document.getElementById("destination").value;
  let medialink = document.getElementById("medialink").value;
  let description = document.getElementById("description").value;

  let uid = firebase.auth().currentUser.uid;

  let data = {
    Name: Name,
    Gender: gender,
    Email: email,
    Age: age,
    Departure: departure,
    Destination: destination,
    MediaLink: medialink,
    Description: description
  };

  firebase.firestore().collection("users").doc(uid)
    .update(data)
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}
