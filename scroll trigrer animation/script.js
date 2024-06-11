gsap.to("#page2 h1",{
    Transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:"#page2",
        scoller:'body',
        start:'top 0',
        end:'top -100%',
        scrub:2,
        pin:true,
    }
})