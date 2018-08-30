function toggleMenu(id) {
    var menuWindow = document.getElementById(id+"-window");
    var getWindows = document.getElementsByClassName("menu-window");
    
    if (menuWindow.style.display == "none") {
        for (var i=0; i < getWindows.length; i++) {
            getWindows[i].style.display = "none";
        }
        menuWindow.style.display = "block";
    } else {
        menuWindow.style.display = "none";
    }
}