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
      clipPath: "circle(3500px at 100% -10%)"
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
burger.addEventListener("click", navToggle);