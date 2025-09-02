// mode 
let mode=document.querySelector(".mode i");
let body=document.querySelector("body")
let isBlack = false;
mode.addEventListener("click" ,()=>{
if(!isBlack){
body.style.backgroundColor="#fff"
body.style.color="#1f242d"
mode.classList.add("fa-moon") ;
mode.classList.remove("fa-sun") ;
isBlack = true;
}
else{
body.style.backgroundColor="#1f242d"
body.style.color="#fff"
  mode.classList.add("fa-sun");
    mode.classList.remove("fa-moon");
    isBlack = false;
}
})
// contact form 
document.getElementById("subbtn").addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  let phonenum = document.getElementById("phonenum");

  let valid = true;
  let invalidEmail = false;

  // Reset borders
  name.style.border = "1px solid #ccc";
  email.style.border = "1px solid #ccc";
  subject.style.border = "1px solid #ccc";
  message.style.border = "1px solid #ccc";
  phonenum.style.border = "1px solid #ccc";

  // Regex for only letters & spaces
  let onlyLetters = /^[A-Za-z\s]+$/;

  // Name check
  if (name.value.trim() === "" || !onlyLetters.test(name.value.trim())) {
    name.style.border = "2px solid red";
    valid = false;
  }

  // Email check
  if (email.value.trim() === "") {
    email.style.border = "2px solid red";
    valid = false;
  } else {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.style.border = "2px solid red";
      valid = false;
      invalidEmail = true;
    }
  }

  // Subject check
  if (subject.value.trim() === "" || !onlyLetters.test(subject.value.trim())) {
    subject.style.border = "2px solid red";
    valid = false;
  }

  // Message check
  if (message.value.trim() === "" || !onlyLetters.test(message.value.trim())) {
    message.style.border = "2px solid red";
    valid = false;
  }

  // Final result
  if (!valid) {
    if (invalidEmail) {
      alert("⚠️ Invalid email address.");
    } else {
      alert("⚠️ Please enter valid text (only letters allowed).");
    }
    return;
  }

  alert("✅ Your message has been sent successfully!");

  // Reset form
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  phonenum.value= "";
});

// Toggle menu for mobile
        let menu = document.querySelector('#menu');
        let navbar = document.querySelector('.navbar');

        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        }

// Close menu when clicking on nav links
        document.querySelectorAll('.navbar a').forEach(link => {
            link.onclick = () => {
                menu.classList.remove('fa-times');
                navbar.classList.remove('active');
            }
        });

//Alert 
// let btn =document.querySelector(".submitbtn")
// btn.addEventListener("click", (e) => {
//    e.preventDefault();
//    alert("✅ Your message has been sent successfully!");
// });

// Sticky header on scroll
        window.onscroll = () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }

// Active nav link on scroll
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                };
            });

// Sticky header
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);


        };

//Scroll Reveal
           ScrollReveal({ 
            reset: true ,
            distance:"80px",
            duration:2000,
            delay:200
           });
           ScrollReveal().reveal('.home-content, .heading', {origin:"top"});

// Typed JS
const typed = new Typed('.multiple-text', {
strings: ['Frontend Developer', 'BS Student', 'Web Developer'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop: true


});
