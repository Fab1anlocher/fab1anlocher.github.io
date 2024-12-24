document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const formError = document.getElementById('formError');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Verhindert die Standard-Formularübermittlung

            const formData = new FormData(form);

            if (form.action) {
                try {
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        // Benutzerdefinierte Nachricht anzeigen
                        formMessage.textContent = 'Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.';
                        formMessage.style.display = 'block';
                        formError.style.display = 'none';
                        form.reset(); // Setzt das Formular zurück
                        form.style.display = 'none'; // Versteckt das Formular
                    } else {
                        const data = await response.json();
                        if (data.errors) {
                            formError.textContent = data.errors.map(error => error.message).join("\n");
                        } else {
                            formError.textContent = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
                        }
                        formError.style.display = 'block';
                        formMessage.style.display = 'none';
                    }
                } catch (error) {
                    formError.textContent = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
                    formError.style.display = 'block';
                    formMessage.style.display = 'none';
                }
            } else {
                formError.textContent = 'Form action URL is missing.';
                formError.style.display = 'block';
                formMessage.style.display = 'none';
            }
        });
    }
});
