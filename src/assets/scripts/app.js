document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
    }

    alert("Correo electrónico enviado a: " + email);

    document.getElementById("email").value = '';
});