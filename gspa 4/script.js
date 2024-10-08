var main= document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv =document.querySelector("#image")

// main.addEventListener("click",function(){
//     console.log("event clicked")
// })
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="me hu aditya"
     gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff48" 
     })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
       scale:1,
       backgroundColor: "#fff"
    })
})