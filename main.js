// Get skills section
let skillsSec = document.getElementById("allSkills")
// Get all progress span
let allSpans = document.querySelectorAll(".prog span")


// While window scrolling
window.onscroll = function(){
    if(window.scrollY >= skillsSec.offsetTop - 480 && window.scrollY <= skillsSec.offsetTop + 500){
        allSpans.forEach((e) => {
            e.style.width = e.dataset.width;
        })
    } else if(window.scrollY <= skillsSec.offsetTop - 480 || window.scrollY >= skillsSec.offsetTop + 500){
        allSpans.forEach((e) => {
            e.style.width = "0%";
        })
    }
}