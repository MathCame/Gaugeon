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
                        placeholder="+55 12 34567 8910"
                        required>
                </div>

                <button type="submit">Send</button>

                <p class="lead-form__message" aria-live="polite"></p>
            </form>
        `;

        const form = this.querySelector("#lead-form");
        const message = this.querySelector(".lead-form__message");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(form);

            const lead = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone")
            };

            console.log("New lead", lead);

            message.textContent = "Thanks. We received your contact.";
            form.reset();
        });
    }
}

customElements.define("lead-form", LeadForm);
