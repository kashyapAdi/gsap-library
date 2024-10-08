
 function breaktheText(){
       
var h1= document.querySelector(" #nav h2")



   var h1Text= h1.textContent
   var splittedText=h1Text.split("") 
    var halfValue=splittedText.length/2
   var clutter =""
splittedText.forEach(function(ele,idx){
    if(idx<halfValue){
        clutter += `<span class ="a">${ele}</span>`
    }
    else{
        clutter += `<span class ="b">${ele}</span>`
    }
    
    
  
})
h1.innerHTML=clutter
 }

breaktheText()

gsap.from("#nav h2 .a",{
    y:100,
    
    duartion:0.5,
    delay:0.4,
    stagger:0.15,
    opacity:0,
   
})
gsap.from("#nav h2 .b",{
    y:50,
    opacity:0,
    duartion:1,
    delay:0.9,
    stagger:-0.15,
    
})



var menu= document.querySelector("#nav i")
var back =document.querySelector("#full i")



var tl= gsap.timeline()


tl.to("#full",{
    right:0,
    duration:0.8
})

tl.from("#full h4",{
    x:150,
    duration:1,
    stagger:0.3,
    opacity:0
})


tl.from("#full i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
 
back.addEventListener("click",function(){
    tl.reverse()
})