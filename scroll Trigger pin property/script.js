gsap.to("#page2 img",{
    width:'100%',
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        // markers:true,
        start:'top 0',
        end:'top -100%',
        scrub:2,
        pin:true,
    }
})

gsap.to("#page4 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:"#page4",
        scoller:'body',
        start:'top 0',
        end:'top -100%',
        scrub:2,
        pin:true,
    }
})