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

function setJob(job) {
    currentJob.title = job.innerText;
}

var currentJob = {
    type: "",
    title: "",
    pay: "",
    shift: "",
    expReq: ""
};

function getJob() {
    return currentJob;
}

function startUp() {
    document.getElementById("home").click();    
    var energyBar = document.getElementById("energy-bar");
    var hungerBar = document.getElementById("hunger-bar");

    function resetGame() {
        confirm("You Died! Start Over?");
        energyBar.value = 100;
        hungerBar.value = 100;
        //reset wallet, job, etc.
    }

    function depleteBars() {
        setInterval(function() {
            if (energyBar.value > 0 && hungerBar.value > 0) {
                energyBar.value -= .5;
                hungerBar.value -= 1;
            } else {
                resetGame();
            }
        }, 3000);
    }

    depleteBars();
    document.getElementById("start").style.display = "none";
}