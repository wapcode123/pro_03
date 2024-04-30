firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (user.emailVerified) {
            firebase.firestore().collection("users").onSnapshot((users) => {
                var userDiv = document.getElementById("users");
                document.getElementById("loaderdiv").style.display = "none";

                users.forEach((userDetail) => {
                    var userDetails = document.createElement("div");
                    userDetails.classList.add("user-details");
                    userDetails.addEventListener("click", () => {
                        showUserDetails(userDetail.data());
                    });

                    var name = userDetail.data().Name;
                    var destination = userDetail.data().Destination;
                    var departure = userDetail.data().Departure;
                    var age = userDetail.data().Age;
                    var gender = userDetail.data().Gender;
                    var medialink = userDetail.data().MediaLinks;

                    var username = document.createElement("p");
                    username.innerHTML = "Name: " + name;
                    userDetails.appendChild(username);

                    userDiv.appendChild(userDetails);
                });
            });
        } else {
            window.location.assign("./pages/email.html");
        }
    } else {
        window.location.assign("./pages/login.html");
    }
});

// 
function showUserDetails(userData) {
    var modal = document.createElement("div");
    modal.classList.add("modal");

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
        closeModal(modal);
    });
    modalContent.appendChild(closeButton);

    var name = document.createElement("p");
    name.innerHTML = "Name: " + userData.Name ;
    modalContent.appendChild(name);

    var destination = document.createElement("p");
    destination.innerHTML = "Destination: " + userData.Destination;
    modalContent.appendChild(destination);

    var departure = document.createElement("p");
    departure.innerHTML = "Departure: " + userData.Departure;
    modalContent.appendChild(departure);

    var age = document.createElement("p");
    age.innerHTML = "Age: " + userData.Age;
    modalContent.appendChild(age);

    var gender = document.createElement("p");
    gender.innerHTML = "Gender: " + userData.Gender;
    modalContent.appendChild(gender);

    // Check if medialink is available
    if (userData.MediaLinks) {
        var mediaLink = document.createElement("p");
        mediaLink.innerHTML = "Media Link: ";
        var link = document.createElement("a");
        link.href = userData.MediaLinks;
        link.textContent = "Click Here";
        link.target = "_blank"; // Open link in a new tab
        mediaLink.appendChild(link);
        modalContent.appendChild(mediaLink);
    }

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}



const logout = () => {
    firebase.auth().signOut().then(() => {
        window.location.assign("./login.js")
    });
};

 // Create popup modal
 function showUserDetails(userData) {
    var modal = document.createElement("div");
    modal.classList.add("modal");

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
        closeModal(modal);
    });
    modalContent.appendChild(closeButton);

    var name = document.createElement("p");
    name.innerHTML = "Name: " + userData.Name + " " + userData.LastName;
    modalContent.appendChild(name);

    var destination = document.createElement("p");
    destination.innerHTML = "Destination: " + userData.Destination;
    modalContent.appendChild(destination);

    var departure = document.createElement("p");
    departure.innerHTML = "Departure: " + userData.Departure;
    modalContent.appendChild(departure);

    var age = document.createElement("p");
    age.innerHTML = "Age: " + userData.Age;
    modalContent.appendChild(age);

    var gender = document.createElement("p");
    gender.innerHTML = "Gender: " + userData.Gender;
    modalContent.appendChild(gender);

    // Check if medialink is available
    if (userData.MediaLinks) {
        var mediaLink = document.createElement("p");
        mediaLink.innerHTML = "Media Link: ";
        var link = document.createElement("a");
        link.href = userData.MediaLinks;
        link.textContent = "Click Here";
        link.target = "_blank"; // Open link in a new tab
        mediaLink.appendChild(link);
        modalContent.appendChild(mediaLink);
    }

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}


function closeModal(modal) {
    // Remove modal from the DOM
    modal.parentNode.removeChild(modal);
}

