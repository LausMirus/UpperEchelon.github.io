gsap.registerPlugin(ScrollTrigger);
const screenWidth = screen.width;
// let screenSize=MediaQueryList.matches;
console.log(screenWidth);


if (screenWidth >= 1024) {
    gsap.from("#nav-list", {
        y: -50,
        // scale:10,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
    gsap.from("#right", {
        y: -50,
        // scale:10,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
    gsap.from("#title", {
        y: 100,
        scale: 10,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
    gsap.from("#img1", {
        y: 100,
        duration: 2
    })
    gsap.from("#img2", {
        y: 100,
        duration: 2
    })
    gsap.from("#img3", {
        y: 100,
        duration: 2
    })
    gsap.from("#img4", {
        y: 100,
        duration: 2
    })
    gsap.from("#img5", {
        y: 100,
        duration: 2
    })





    // console.log("right");
    // gsap.to("#page1 #title", {
    //     // transform:"translatey(-100px)",
    //     // z: 100,
    //     duration: 1,
    //     opacity: 0,
    //     scale: 2,
    //     scrollTrigger: {
    //         trigger: "#page1 #title",
    //         scroller: "body",
    //         // markers: true,
    //         start: "top 34%",
    //         end: "top 30%",
    //         scrub: 2,
    //     }
    // })

    gsap.fromTo("#title",
        {
            scale: 1,
            opacity: 1
        },
        {
            scale: 3,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: "#page1",
                start: "top top",
                end: "bottom top",
                scrub: 5
            }
        });

    gsap.to("#page1_bg #img1", {
        // transform: "translatey(-60px)",
        duration: .5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1_bg #img1",
            scroller: "body",
            // markers: true,
            start: "top 45%",
            end: "top 40%",
            scrub: 2
        }
    })
    gsap.to("#page1_bg #img2", {
        // transform: "translatey(-100px)",
        duration: .5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1_bg #img2",
            scroller: "body",
            // markers:true,
            start: "top 45%",
            end: "top 40%",
            scrub: 2
        }
    })
    gsap.to("#page1_bg #img3", {
        // transform: "translatey(-100px)",
        duration: .5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1_bg #img3",
            scroller: "body",
            // markers:true,
            start: "top 45%",
            end: "top 40%",
            scrub: 2
        }
    })
    gsap.to("#page1_bg #img4", {
        // transform: "translatey(-100px)",
        duration: .5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1_bg #img4",
            scroller: "body",
            // markers:true,
            start: "top 45%",
            end: "top 40%",
            scrub: 2
        }
    })
    gsap.to("#page1_bg #img5", {
        // transform: "translatey(-100px)",
        duration: .5,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1_bg #img5",
            scroller: "body",
            // markers:true,
            start: "top 45%",
            end: "top 40%",
            scrub: 2
        }
    })
        gsap.from("#title2_div #title2", {
        // transform: "translatey(-100px)",
        duration: 1,
        opacity: 0,
        scale:0,
        scrollTrigger: {
            trigger: "#title2_div #title2",
            scroller: "body",
            // markers:true,
            start: "top 85%",
            end: "top 80%",
            scrub: 2
        }
    })
     gsap.from("#title3_div #title3", {
        // transform: "translatey(-100px)",
        duration: 1,
        opacity: 0,
        scale:0,
        scrollTrigger: {
            trigger: "#title3_div #title3",
            scroller: "body",
            // markers:true,
            start: "top 95%",
            end: "top 90%",
            scrub: 2
        }
    })
    

}
else {
    console.log("wrong ,animation paused");
}
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});