// Get skills section
let skillsSec = document.getElementById("allSkills")
// Get all progress span
let allSpans = document.querySelectorAll(".prog span")
// Get the back button
let back = document.getElementById("back_but")



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
    // Progress bars

    // Fly button
    if(window.scrollY >= 696){
        back.style.right = "10px"
    } else{
        back.style.right = "-60px"
    }
    // Fly button
}