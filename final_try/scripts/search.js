function searchUsers() {
    var input, filter, users, userDetail, name, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    users = document.getElementById("users");
    userDetail = users.getElementsByClassName("user-details");

    for (i = 0; i < userDetail.length; i++) {
        name = userDetail[i].getElementsByClassName("Name")[0];
        if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
            userDetail[i].style.display = "";
        } else {
            userDetail[i].style.display = "none";
        }
    }
}
