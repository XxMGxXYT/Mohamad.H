// Get skills section
let skillsSec = document.getElementById("allSkills")
// Get all progress span
let allSpans = document.querySelectorAll(".prog span")
// Get the back button
let back = document.getElementById("back_but")
// Get the project div
let proj = document.querySelectorAll(".proj")

let counter = 0
let proj_scroll = 600

// While window scrolling
window.onscroll = function(){
    // Progress bars
    if(window.scrollY >= skillsSec.offsetTop - 480 && window.scrollY <= skillsSec.offsetTop + 500){
        allSpans.forEach((e) => {
            e.style.width = e.dataset.width;
        })
    } else if(window.scrollY <= skillsSec.offsetTop - 480 || window.scrollY >= skillsSec.offsetTop + 500){
        allSpans.forEach((e) => {
            e.style.width = "0%";
        })
    }

    // Fly button
    if(window.scrollY >= 696){
        back.style.right = "10px"
    } else{
        back.style.right = "-60px"
    }

    // Project div
    if(window.scrollY >= proj[0].offsetTop - proj_scroll){
        proj[0].style.opacity = 1;
        proj[0].style.transform = "unset"
    }
    if(window.scrollY >= proj[1].offsetTop - proj_scroll){
        proj[1].style.opacity = 1;
        proj[1].style.transform = "unset"
    }
    if(window.scrollY >= proj[2].offsetTop - proj_scroll){
        proj[2].style.opacity = 1;
        proj[2].style.transform = "unset"
    }
    if(window.scrollY >= proj[3].offsetTop - proj_scroll){
        proj[3].style.opacity = 1;
        proj[3].style.transform = "unset"
    }
    if(window.scrollY >= proj[4].offsetTop - proj_scroll){
        proj[4].style.opacity = 1;
        proj[4].style.transform = "unset"
    }
    if(window.scrollY >= proj[5].offsetTop - proj_scroll){
        proj[5].style.opacity = 1;
        proj[5].style.transform = "unset"
    }
}

// Fly button
back.addEventListener("click", () => window.scrollTo(top))
