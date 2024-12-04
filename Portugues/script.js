function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const imagemColegio = document.getElementById("imagem-colegio");
const legendaColegio = document.getElementById("legenda");

imagemColegio.addEventListener("click", function() {
    if (legendaColegio.style.display === "block") {
        legendaColegio.style.display = "none";
    } else {
        legendaColegio.style.display = "block";
    }
});
