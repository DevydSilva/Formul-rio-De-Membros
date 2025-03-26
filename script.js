function toggleMinisterioFields() {
    const ministerioSim = document.getElementById("ministerio-sim").checked;
    const camposMinisterio = document.getElementById("campos-ministerio");
    camposMinisterio.style.display = ministerioSim ? "block" : "none";
}

function toggleCargoFields() {
    const cargoSim = document.getElementById("cargo-sim").checked;
    const campoCargo = document.getElementById("campo-cargo");
    campoCargo.style.display = cargoSim ? "block" : "none";
}

async function salvarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const form = document.querySelector("form");
    const formData = new FormData(form);

    let content = "Ficha de Cadastro de Membro\n\n";
    for (const [key, value] of formData.entries()) {
        content += `${key}: ${value}\n`;
    }

    doc.text(content, 10, 10);
    doc.save("Ficha_de_Cadastro.pdf");
}

async function salvarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        format: "a4", // Define o tamanho da folha como A4
        unit: "mm"    // Define a unidade como milímetros
    });

    const form = document.querySelector("form");
    const formData = new FormData(form);

    let content = "Ficha de Cadastro de Membro\n\n";
    for (const [key, value] of formData.entries()) {
        content += `${key}: ${value}\n`;
    }

    doc.text(content, 10, 10); // Ajuste a posição inicial do texto
    doc.save("Ficha_de_Cadastro.pdf");
}