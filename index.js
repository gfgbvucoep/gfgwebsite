// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var tl = gsap.timeline();

gsap.from(".nav-div h3, button",{
    y: -80,
    opacity: 0,
    duration:0.8,
    stagger: 0.2,
})

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

// document.querySelector(".gfgLogo").addEventListener(click, function () {
//     window.location.href = "./index.html"; 
// });


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

