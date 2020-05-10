
var favicon = document.getElementById('favicon');
var allCookie = document.cookie;

function setTheme(themeName) {
localStorage.setItem('theme', themeName);
document.documentElement.className = themeName;
}

function delCookie(name) {
document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function getCookie(name) {
var value = "; " + document.cookie;
var parts = value.split("; " + name + "=");
if (parts.length == 2) return parts.pop().split(";").shift();
}

/* if (getCookie("theme") == "Light") {
favicon.href = "assets/images/0.png";
setTheme('theme-light');
} else if (getCookie("theme") == "Dark") {
favicon.href = "assets/images/1.png";
setTheme('theme-dark');
}*/

        // function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {

    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        favicon.href = "assets/images/0.png";
    } else {
        setTheme('theme-dark');
        favicon.href = "assets/images/1.png";
    }
}





// Immediately invoked function to set the theme on initial load
(function() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;

    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();
