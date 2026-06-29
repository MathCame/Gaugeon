class LeadForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form class="lead-form" id="lead-form">
                <div class="lead-form__group">
                    <label for="lead-name">Name</label>
                    <input
                        id="lead-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required>
                </div>

                <div class="lead-form__group">
                    <label for="lead-email">Email</label>
                    <input
                        id="lead-email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required>
                </div>

                <div class="lead-form__group">
                    <label for="lead-phone">WhatsApp</label>
                    <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        placeholder="+55 19 99944 8998"
                        required>
                </div>

                <button type="submit">Send</button>

                <p class="lead-form__message" aria-live="polite"></p>
            </form>
        `;

        const form = this.querySelector("#lead-form");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(form);

            const lead = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone")
            };

            console.log("New lead", lead);

            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: "lead_form_submit",
                lead_name: lead.name,
                lead_email: lead.email,
                lead_phone: lead.phone
            });

            window.location.href = "gracias.html";
        });
    }
}

customElements.define("lead-form", LeadForm);
