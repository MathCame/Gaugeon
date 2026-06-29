window.dataLayer = window.dataLayer || [];

const whatsappButton = document.getElementById("whatsapp-button");

whatsappButton.addEventListener("click", function () {
    window.dataLayer.push({
        event: "whatsapp_click",
        click_text: "WhatsApp",
        click_url: whatsappButton.href
    });

    console.log("WhatsApp clicked");
});
