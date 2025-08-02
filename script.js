function enviarWhatsApp(){

    document.getElementById("ContatoWhatsAppICon").addEventListener("click", function () {
        const url = `https://wa.me/244924945316?text=Gostaria+de+solicitar+um+servi%C3%A7o,+est%C3%A3o+dispon%C3%ADveis+?+%F0%9F%9F%A2`;
        window.open(url, "_blank");
      })
}

enviarWhatsApp()