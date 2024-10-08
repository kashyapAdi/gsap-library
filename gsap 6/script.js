function breaktheText(){
    var h1= document.querySelector("h1")
   var h1Text= h1.textContent
   var splittedText=h1Text.split("")
    var halfValue= Math.floor (splittedText.length/2)
   var clutter =""
    splittedText.forEach(function(ele,idx){
        if(idx<halfValue){
        clutter+=`<span class="a">${ele}</span>`
        }
        else{
            clutter+=`<span class ="b">${ele}</span>`
        }
    })
    h1.innerHTML=clutter


} 
breaktheText()
gsap.from("h1 .a",{
    y:50,
    duration:0.6,
    delay:0.2,
    stagger:0.15,
    opacity:0
})
gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    delay:0.2,
    stagger:-0.15,
    opacity:0
})






















//var h1= document.querySelector("h1").textContent yeh bhi ek tarika hai text content likhne ka 
//  function breaktheText(){
       // simple test animation ke liye
// var h1= document.querySelector("h1")
//    var h1Text= h1.textContent
//    var splittedText=h1Text.split("") //yha pe split kar diya text ko a,d,i,t,y,a

// var clutter =""
// splittedText.forEach(function(ele){
//    // clutter=clutter+"hey" // isme kya hoga yeh jitna letter hoga text me utne   baar print karega hey
//     //clutter+=ele
//    clutter += `<span>${ele}</span>`
// })
// h1.innerHTML=clutter
//  }

// breaktheText()

// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duartion:0.8,
//     delay:0.4,
//     stagger:0.15
// })