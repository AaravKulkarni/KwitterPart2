function addUser(){
    var UserName = document.getElementById("username").value;
    localStorage.setItem("User Name", UserName);
    window.location = "kwitterroom.html";
}