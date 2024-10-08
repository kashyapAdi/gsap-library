// // gsap.from("h1",{
// //       opacity:0,
// //     duration:1,
// //     y:30,
// //     stagger:1,
// //       delay:1
// // })



// gsap.to("#box1",{
//   x:1000,
//   duration:1.5,
//   delay:1,
//   rotate:360,
//   repeat:-1,
//   yoyo:true
//   // backgroundColor: "pink",
//   //borderRadius:"50%",
//   //scale:1,
//   //yoyo:true,
//   //repeat:-1
//  }) 
// gsap.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:2.5,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
//     // rotate:360,
//     // backgroundColor: "pink",
//     // borderRadius:"50%",
//     // scale:0.5
//   }) 
// gsap.to("#box3",{
//     x:1000,
//     duration:2,
//     delay:4,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
//     //rotate:270,
//     // backgroundColor:"yellow",
//     // borderRadius:"100%",
   
//   })
// // //   gsap.from("#box2",{
// // //     x:1000,
// // //     y:100,
// // //     duration:2,
// // //     delay:3
// // //   })
 
var tl = gsap.timeline()

tl.from("h2",{
 y:20,
 opacity:0,
 duration:1,
 delay:0.5
})
tl.from("h4",{
  y:20,
  opacity:0,
  duration:1,
  stagger:0.3
 }) 
 tl.from("h1",{
  y:20,
  opacity:0,
  duration:1,
  scale:0.2
 })
