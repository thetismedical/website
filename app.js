// function copyToClipboard() {
//   var inputc = document.body.appendChild(document.createElement("input"));
//   inputc.value = window.location.href;
//   inputc.focus();
//   inputc.select();
//   document.execCommand('copy');
//   inputc.parentNode.removeChild(inputc);
//   alert("URL Copied.");
//   }

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
  if (navbar.classList.contains("active")) {
    setTimeout(function () {
      navbar.classList.remove("active")
    }, 500);

  } else {
    navbar.classList.add("active")
  }
}

burger.addEventListener("click", navToggle);

orderCheck = document.getElementById('order-check')
orderWrap = document.getElementsByClassName('order-wrap')[0]

try {
  orderCheck.addEventListener("click", hideOrder);

  function hideOrder() {
    if (orderWrap.classList.contains('hide')) {
      orderWrap.classList.remove('hide')
    } else {
      orderWrap.classList.add('hide')
    }
  }
} catch (e) {
  console.log('Not Contact Us')
}

function loadGSAP() {
  let script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js');
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('integrity', 'sha256-3arngJBQR3FTyeRtL3muAGFaGcL8iHsubYOqq48mBLw=');
  document.head.appendChild(script);
}

function loadMailchimp() {
  validateMailchimp()
  connectMailchimp()
}

const mailchimpInput = document.getElementById('mce-EMAIL')
mailchimpInput.addEventListener("click", loadMailchimp);

function validateMailchimp() {
  let validate = document.getElementById('valmc')
  if (validate == null) {
    console.log('validating mailchimp')
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('id', 'valmc');
    script.setAttribute('src', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js');
    document.head.appendChild(script);
  }
}


function connectMailchimp() {
  let connected = document.getElementById('mjcs')
  if (connected == null) {
    console.log('connecting mailchimp')
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('id', 'mjcs');
    let mcjsScript = `! function (c, h, i, m, p) { m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore( m, p)}(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/c24150147626fd5e19c7684c6/d7e07f4cbe8075f8afbf34db0.js");`
    script.setAttribute('innerHTML', mcjsScript);
    document.head.appendChild(script);
  }
}