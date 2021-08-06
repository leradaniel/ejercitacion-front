window.onload = function () {
    var form = document.querySelector('form');
    var fname = document.getElementById('user');
    var lname = document.getElementById('password');
    var submit = document.getElementById('submit');
    var para = document.querySelector('p');
    form.onsubmit = function (e) {
        if (user.value === '') {
            e.preventDefault();
            para.textContent = 'Por favor, ingrese un usuario.';
        }
        else if (!user.value.includes("@")) {
            e.preventDefault();
            para.textContent = 'El usuario debe contener una @';
        }
        else if (password.value === '') {
            e.preventDefault();
            para.textContent = 'Por favor, ingrese una contraseña.';
        }
    }
}