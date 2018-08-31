function startUp() {
    
}

function toggleMenu(id) {
    var menuWindow = document.getElementById(id+"-window");
    var getWindows = document.getElementsByClassName("menu-window");
    
    if (menuWindow.style.display == "block") {
        menuWindow.style.display = "none";
    } else {
        for (var i=0; i < getWindows.length; i++) {
            getWindows[i].style.display = "none";
        }
        menuWindow.style.display = "block";
    }
}

function updateStats(number, type) {
    var energyBar = document.getElementById("energy-bar");
    var hungerBar = document.getElementById("hunger-bar");
    var barType = type.className;

    if (barType == "food") {
        hungerBar.value += parseInt(number);
    } else {
        energyBar.value += parseInt(number);
    }

}