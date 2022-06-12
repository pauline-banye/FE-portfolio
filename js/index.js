const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelectorAll('.nav-link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('navbar-open');
    });

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('navbar-open');
    })
})

var password = document.getElementById("pwrd"),
confirm_password = document.getElementById("confirm_pwrd");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


const form = document.querySelector('form');
const success = document.querySelector('#reg-subtitle');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  success.classList.add('show');
  setTimeout(() => form.submit(), 5000);
});