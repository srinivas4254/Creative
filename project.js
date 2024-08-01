const tl=gsap.timeline()


tl.set('.h2',{
    x:-300,
    duration:2,
    ease:'linear',
    
    yoyo:true
}).to(".h2",{
    x:0,
    ease:'linear',
    duration:2,
    
})
tl.to(".container",{
  opacity:1,
  duration:2,yoyo:'true',

})

tl.fromTo(".img",{
    x:10,
    opacity:0,
    ease:"linear",
    duration:1,
    repeat:-1,
yoyo:'true'},
{
    ease:"linear",
    opacity:1,
    duration:1,
    yoyo:"true"
})
tl.from("h1",{
    y:1000,
    duration:2
})