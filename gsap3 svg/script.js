var path = "M 110 200 Q 350 200 790 200"
var finalPath ="M 110 200 Q 350 200 790 200"

var string = document.querySelector("#string")

// string.addEventListener("mouseenter",function(){
//     console.log("entered")
// })
// string.addEventListener("mouseleave",function(){
//     console.log("leaved")
// }) 
// string.addEventListener("mousemove",function(dets){
//     console.log("moved")
// }) 
// string.addEventListener("mousemove",function(dets){
//     console.log(dets.x)
// }) 
// string.addEventListener("mousemove",function(dets){
//     console.log(dets.y)
// }) 
string.addEventListener("mousemove",function(dets){
    path=`M 110 200 Q ${dets.x} ${dets.y} 790 200`
   
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
}) 

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
       ease: "elastic.out(1,0.2)",
    })
});
