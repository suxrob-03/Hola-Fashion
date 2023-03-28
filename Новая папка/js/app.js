// $(function(){
//     $("button").click(function(){
//         // $("img").hide()
//         $("img").show()
//         $("img").toggle()
//         })

//     })
// hide
// show
// toggle
// })


/////////////////////////////////////

// $(function(){
//     $("button").click(function(){
//         // $(".box").fadeIn(1000)
//         // $(".box").fadeOut(1000)
//         // $(".box").fadeToggle(1000)
//         // $(".box").fadeTo(1000 , .5)


//     });
//     // fadeIn
//     // fadeOut
//     // fadeToggle
//     // fateTo
// });

///////////////////////////////////////////////////

// $(function () {
//     $("button").click(function () {
//         // $(".box").slideDown()
//         // $(".box").slideUp()
//         // $(".box").slideToggle()
//     })
// // slideDown
// // slideUP
// // slideToggle
// })

//////////////////////////////////////////////////

// $(function () {
//     $("button").click(function () {
//         $(".box").animate({
//             width:"+=100px",
//             padding:"+10px",
//             fontsize:"+=2px"
//         }

//         )
//     })

// })



/////////////////////////////////////////////////

let p = document.querySelector("p")
let right = document.querySelector("#right")
let left = document.querySelector("#left")

let img_1 = document.getElementById("cadir1")
let img_2 = document.getElementById("cadir2")

img_1.style.right = "1200px"
img_2.style.right = "0"


function buttonLeft() {
    img_1.style.right = "1200px"
    img_2.style.right = "0"
    left.setAttribute("disabled", "disabled")
    right.removeAttribute("disabled")
    let x = 1
    return p.innerText = `${x} of 2`

}

function buttonRight() {
    img_1.style.right = "0"
    img_2.style.right = "-1199px"
    right.setAttribute("disabled", "disabled")
    left.removeAttribute("disabled")
    let x = 1
    x++
    if (x == 2) {
        return p.innerText = `${x} of 2`
    }

}






