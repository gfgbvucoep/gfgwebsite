function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
loco()

var tl = gsap.timeline();

tl.to("#loader img",{
    delay:0.3,
    duration:4,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    duration:1,
    delay:.5,
})

Shery.mouseFollower();  
Shery.makeMagnet(".magnet");

tl.from("#main>.main>.hero",{
    scale:0,
    duration:0.4, 
})

gsap.to("#page3 h1",{
    transform:"translateX(-180%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        scrub:3,
        pin: true,
        start: "top 0%",
        end:"top -200%"
    }
})



gsap.from(".nav-div h3, button",{
    y: -80,
    opacity: 0,
    duration:0.8,
    stagger: 0.2,
})










function time(){
    window.addEventListener("load", function() {
        const loader = document.getElementById("loader");
        const welcomePage = document.getElementById("main");
    
        setTimeout(function() {
            loader.style.display = "none";
            welcomePage.style.display = "block";
        }, 7000);
    });
}



document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.value'); // Select all elements with the class 'value'
    const duration = 2000; // Total duration of the animation in milliseconds
    const interval = 100; // Interval between updates in milliseconds

    // Define the updateCount function using a traditional function declaration
    function updateCount(counter, target, increment) {
        const count = +counter.innerText.replace('+', ''); // Get the current count value
        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + '+'; // Update the counter value
            setTimeout(function() {
                updateCount(counter, target, increment);
            }, interval); // Call updateCount again after the interval
        } else {
            counter.innerText = target + '+'; // Ensure the counter displays the exact target value at the end
        }
    }

    // Loop through each counter element
    for (let i = 0; i < counters.length; i++) {
        const counter = counters[i];
        const target = +counter.getAttribute('data-bs-target'); // Get the target value
        const steps = duration / interval; // Calculate the total number of steps
        const increment = target / steps; // Calculate the increment for each step

        // Start the animation for each counter
        updateCount(counter, target, increment);
    }
});

var div = document.getElementById('show_more');
var display = 0 ;

function hide_show(){
    if(display == 0){
        div.style.transition = '5000s';
        div.style.display = 'block';
        display = 1;
        
    }else{
        div.style.display = 'none';
        display = 0;
    }
}