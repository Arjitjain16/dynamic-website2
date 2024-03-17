function loco(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();


let tl = gsap.timeline();
    
gsap.from(".img-animated", {
    height:"100vh",
    delay:7.5,
    duration:1.3,
    scrub:true,
})

tl.to(".img1", {
    opacity:1,

})
tl.from(".img1", {
    opacity:0,
    duration:0.01
})
tl.to(".img2", {
    opacity:1
})
tl.from(".img2", {
    opacity:0,
    duration:0.01
   
})
tl.to(".img3", {
    opacity:1
})
tl.from(".img3", {
    opacity:0,
    duration:0.01
 
})
tl.to(".img4", {
    opacity:1
})
tl.from(".img4", {
    opacity:0,
    duration:0.01
    
})

tl.to(".img5", {
    opacity:1
})
tl.from(".img5", {
    opacity:0,
    duration:0.01

})

tl.to(".img6", {
    opacity:1
})
tl.from(".img6", {
    opacity:0,
    duration:0.01
   
})

tl.to(".img7", {
    opacity:1
})
tl.from(".img7", {
    opacity:0,
    duration:0.01


})

tl.to(".img8", {
    opacity:1
})
tl.from(".img8", {
    opacity:0,
    duration:0.01
   
})

tl.to(".img9", {
    opacity:1
})
tl.from(".img9", {
    opacity:0,
    duration:0.01
 
})

tl.to(".img10", {
    opacity:1
})
tl.from(".img10", {
    opacity:0,
    duration:0.01
})

tl.to(".img11", {
    opacity:1
})
tl.from(".img11", {
    opacity:0,
    duration:0.01
})
tl.to(".img12", {
    opacity:1
})
tl.from(".img12", {
    opacity:0,
    duration:0.01
})
tl.to(".img13", {
    opacity:1
})
tl.from(".img13", {
    opacity:0,
    duration:0.01
})
tl.to(".img14", {
    opacity:1
})
tl.from(".img14", {
    opacity:0,
    duration:0.01
})



let tl2 = gsap.timeline();

tl2.from(".hello h1", {
    transform: "translateY(80%)",
    stagger: 0.1,
    duration: 1.4,
    delay:8
})


gsap.to(".page2 video", {
    width:"100%",
    duration:4,
    scrollTrigger:{
        trigger:".page2 video",
        scroller:".main",
        // markers:true,
        start:"top 100%",
        end:"top 0",
        scrub: 2
    }
})

gsap.from(".page3-cont h1,.para h4", {
    transform: "translateY(80%)",
      stagger: 0.8,
      duration: 2,
      opacity:0,
      scrollTrigger:{
        trigger:".page3-content h1,.para h4 ",
        scroller:".main",
        // markers:true,
        start:"top 240%",
        end:"top -70%",
        scrub:2
    }
  
})


const circle = document.querySelector('.circle5')
circle.addEventListener('mouseenter' , ()=>{
    gsap.to(".circle5"<{
        transform : "rotate(-4deg)"
    })
})


var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page6",
        scroller: ".main",
        start: "top 0%",
        end: "top -70%",
        scrub: true,
        pin: true
    }
})
tl5.to(".page6 h1", {
    transform: "translateX(-64%)",
    duration : 5
},)
