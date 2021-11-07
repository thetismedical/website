function copyToClipboard() {
  var inputc = document.body.appendChild(document.createElement("input"));
  inputc.value = window.location.href;
  inputc.focus();
  inputc.select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
  alert("URL Copied.");
  }

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-bar");

// if (window.innerWidth > 1024) {


// function cursor(e) {
//   mouse.style.top = e.pageY + "px";
//   mouse.style.left = e.pageX + "px";
// }

// function activeCursor(e) {
//   const item = e.target;
//     if (item.id === "logo" || item.classList.contains("burger") || item.classList.contains("big-link") || item.classList.contains("learn-more") || item.classList.contains("landing-link")){
//       mouse.classList.add("nav-active");
//     } else {
//       mouse.classList.remove("nav-active");
//     }
//     if (item.classList.contains("explore")) {
//       mouse.classList.add("explore-active");
  
//       mouseTxt.innerText = "Tap";
//     } else {
//       mouse.classList.remove("explore-active");
//       mouseTxt.innerText = "";
   
//     }
//   }
// }

function navToggle(e) {

  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.25, {
      rotate: "45",
      y: 5,
      background: "white"
    });
    gsap.to(".line2", 0.25, {
      rotate: "-45",
      y: -5,
      background: "white"
    });
    gsap.to("#logo", 1, {
      color: "white"
    });
    gsap.to(".nav-bar", 1, {
      clipPath: "circle(2500px at 100% -10%)"
    });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.25, {
      rotate: "0",
      y: 0,
      background: "black"
    });
    gsap.to(".line2", 0.25, {
      rotate: "0",
      y: 0,
      background: "black"
    });
    gsap.to("#logo", 0.5, {
      color: "black"
    });
    gsap.to(".nav-bar", 0.5, {
      clipPath: "circle(0px at 88% 8%)"
    });
    document.body.classList.remove("hide");
  }
  if(navbar.classList.contains("active")){
    setTimeout(function() {
      navbar.classList.remove("active")
    }, 500);
    
  }
  else{
    navbar.classList.add("active")
  }
}


// function detailAnimation() {
//   controller = new ScrollMagic.Controller();
//   const slides = document.querySelectorAll(".detail-slide");
//   slides.forEach((slide, index, slides) => {
//     const slideTl = gsap.timeline({
//       defaults: {
//         duration: 1
//       }
//     });
//     let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
//     const nextImg = nextSlide.querySelector("img");
//     slideTl.fromTo(slide, {
//       opacity: 1
//     }, {
//       opacity: 0
//     });
//     slideTl.fromTo(nextSlide, {
//       opacity: 0
//     }, {
//       opacity: 1
//     }, "-=1");
//     slideTl.fromTo(nextImg, {
//       x: "50%"
//     }, {
//       x: "0%"
//     });
//     //Scene
//     detailScene = new ScrollMagic.Scene({
//         triggerElement: slide,
//         duration: "100%",
//         triggerHook: 0
//       })
//       .setPin(slide, {
//         pushFollowers: false
//       })
//       .setTween(slideTl)
//       // .addIndicators({
//       //   colorStart: "white",
//       //   colorTrigger: "white",
//       //   name: "detailScene"
//       // })
//       .addTo(controller);
//   });
// }


//Barba Page Transitions
// const logo = document.querySelector("#logo");

// barba.init({
//   views: [{
//       namespace: "home",
//       beforeEnter() {
//         // animateSlides();
//         // logo.href = "./";
//       },
//       beforeLeave() {
//         // slideScene.destroy();
//         // pageScene.destroy();
//         // controller.destroy();
//       }
//     },
//     {
//       namespace: "splint",
//       beforeEnter() {
//         // logo.href = "./night-splint.html";
//         // detailAnimation();
//       },
//       beforeLeave() {
//         // controller.destroy();
//         // detailScene.destroy();
//       }
//     }
//   ],
//   transitions: [
//     {
//       leave({ current, next }) {
//         let done = this.async();
//         //An Animation
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
//         tl.fromTo(
//           ".swipe",
//           0.75,
//           { width: "0%" },
//           { width: "100%", onComplete: done },
//           "-=0.75"
//         );
//       },
//       enter({ current, next }) {
//         let done = this.async();
//         //Scroll to the top
//         window.scrollTo(0, 0);
//         //An Animation
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(
//           ".swipe",
//           1,
//           { width: "0%" },

//           { width: "100%", stagger: 0.2, onComplete: done }
//         );
//         tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//         tl.fromTo(
//           ".nav-header",
//           1,
//           { y: "-100%" },
//           { y: "0%", ease: "power2.inOut" },
//           "-=1"
//         );
//       }
//     }
//   ]
// });


//EventListeners
burger.addEventListener("click", navToggle);