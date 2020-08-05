const form = document.querySelector('#login-form');
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

username.addEventListener('input', validate);
password.addEventListener('input', validate);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    alert('SUBMITTED');
    return true;
});

function validate(e) {
    if (e.target.name == "password") {
        if (pass_reg.test(e.target.value)) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        }
    }

    if (e.target.name == "username") {
        if (e.target.value.length > 3) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        }
    }
}