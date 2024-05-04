// Get skills section
let skillsSec = document.getElementById("allSkills")
// Get all progress span
let allSpans = document.querySelectorAll(".prog span")
// Get the back button
let back = document.getElementById("back_but")
// Get the project div
let proj = document.querySelectorAll(".proj")

let counter = 0

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
    if(window.scrollY >= 1100){
        proj[0].style.opacity = 1;
        proj[0].style.transform = "unset"
    }
    if(window.scrollY >= 1200){
        setTimeout(() =>{
            proj[1].style.opacity = 1;
            proj[1].style.transform = "unset"
        }, 500)
    }
    if(window.scrollY >= 1300){
        setTimeout(() =>{
            proj[2].style.opacity = 1;
            proj[2].style.transform = "unset"
        }, 1000)
    }
}

// Fly button
back.addEventListener("click", () => window.scrollTo(top))
