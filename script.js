/* Mostrar/ocultar info al hacer click en toda la tarjeta */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const info = card.querySelector(".info");
        info.classList.toggle("activo");
    });
});

/* Formulario -> Gmail */
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        resultado.textContent = "⚠ Todos los campos son obligatorios.";
        resultado.style.color = "yellow";
        return;
    }

    const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1&to=76810673@iestpasm.edu.pe` +
        `&su=Mensaje de ${encodeURIComponent(nombre)}` +
        `&body=${encodeURIComponent("Correo: " + email + "\n\nMensaje:\n" + mensaje)}`;

    window.open(gmailURL, "_blank");

    resultado.textContent = "✔ Gmail se abrió con tu mensaje.";
    resultado.style.color = "#4f7dff";
});
/* Tarjetas independientes */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const info = card.querySelector(".info-overlay");
        info.classList.toggle("activo");
    });
});
/* Cuadro interactivo Sobre Mí */
const cuadroSobreMi = document.getElementById("cuadroSobreMi");

cuadroSobreMi.addEventListener("click", () => {
    cuadroSobreMi.classList.toggle("activo");
});
