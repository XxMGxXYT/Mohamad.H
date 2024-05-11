// Get skills section
let skillsSec = document.getElementById("allSkills")
// Get all progress span
let allSpans = document.querySelectorAll(".prog span")
// Get the back button
let back = document.getElementById("back_but")
// Get the project div
let proj = document.querySelectorAll(".proj")
// Get message div
let msg = document.getElementById("msg")
// Get all not_finished features
let not_finished = document.querySelectorAll(".not_finished")
// Get All text_divs
let text_divs = document.querySelectorAll(".text .title")
// Get info div 
let info = document.getElementById("info")

// Standerd projects scrollY
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

    // Info div 
    if(window.scrollY >= skillsSec.offsetTop - 750){
        info.style.opacity = 1;
        info.style.transform = "unset";
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

// Message div
function showMsg(){
    msg.style.display = "flex";
    setTimeout(() => {
        msg.style.opacity = 1;
    }, 300)
    setTimeout(() => {
        msg.style.opacity = 0;
    }, 4000)
    setTimeout(() =>{
        msg.style.display = "none";
    }, 4300)
}
not_finished.forEach((e) => {
    e.addEventListener("click", () => showMsg())
})

// Welcome message divs
let counter = 1

// First time when the website starts
text_divs[0].style.left = "0"
text_divs[0].style.opacity = 1
setTimeout(() => {
    text_divs[0].style.left = "-40%"
    text_divs[0].style.opacity = 0
}, 5000)
// Then looping
setInterval(() => {
    text_divs[counter].style.left = "0"
    text_divs[counter].style.opacity = 1
    setTimeout(() => {
        text_divs[counter].style.left = "-40%"
        text_divs[counter].style.opacity = 0
        if(counter !== text_divs.length - 1){
            counter += 1
        } else{
            counter = 0
        }
    }, 5000)
}, 6000)
