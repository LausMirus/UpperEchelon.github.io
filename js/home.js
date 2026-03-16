// const burger = document.getElementById("burger");
// const navLinks = document.getElementById("navLinks");

// burger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

// HTML: <div id="bg"></div>
// function BGreset() {
//     const page = document.getElementById("page1");

// }

// const screenWidth = screen.width;
// console.log(screenWidth);
// if (screenWidth >= '1024') {
    const change = document.querySelector('#page1');
    const title = document.querySelector('#title');
    //_____________________________________________________________________________________________//
    function changeBg1() {
        change.style.backgroundImage = "url('./images/main.jpeg')";
        title.style.opacity = .2;
    }
    function changeBg2() {
        change.style.backgroundImage = "url('./images/app_manager.jpeg')";
        title.style.opacity = .2;
    }
    function changeBg3() {
        change.style.backgroundImage = "url('./images/calender.jpeg')";
        title.style.opacity = .2;
    }
    function changeBg4() {
        change.style.backgroundImage = "url('./images/sysMonitor.jpeg')";
        title.style.opacity = .2;
    }
    function changeBg5() {
        change.style.backgroundImage = "url('./images/terminal.jpeg')";
        title.style.opacity = .2;
    }
    //_____________________________Reset Background ____________________________________________________
    function reset() {
        change.style.backgroundImage = "none";
        title.style.opacity = 1;
    }

function refresh() {
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
}


//_____________________________Redirect______________________________________//
// function about(){
//     window.Location.href ='https://deepwiki.com/Hari-c137/echelon';
// }

