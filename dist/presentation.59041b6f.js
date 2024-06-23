document.getElementById("newsletterForm").addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("email").value;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Por favor, introduce un correo electrónico válido.");return}alert("Correo electrónico enviado a: "+t),document.getElementById("email").value=""});
//# sourceMappingURL=presentation.59041b6f.js.map
