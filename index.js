
let SUV = document.getElementById("suv")
let Hatchback = document.getElementById("hatch")
let Sedan = document.getElementById("sedan")
let FirstDetail = document.querySelector(".cardetail")
let SecondDetail = document.querySelector(".second-cardetail")
let ThirdDetail = document.querySelector(".third-cardetail")


// Adding a click event listner to show the Hatchback section.
Hatchback.addEventListener("click", function(){
    SecondDetail.style.display = "flex"
    FirstDetail.style.display = "none"
    ThirdDetail.style.display = "none"
})

// Adding a click event listner to show the SUV section.
SUV.addEventListener("click", function(){
    FirstDetail.style.display = "flex"
    SecondDetail.style.display = "none"
    ThirdDetail.style.display = "none"
})

// Adding a click event listner to show the Sedan section.
Sedan.addEventListener("click", function(){
    ThirdDetail.style.display = "flex"
    FirstDetail.style.display = "none"
    SecondDetail.style.display = "none"
})