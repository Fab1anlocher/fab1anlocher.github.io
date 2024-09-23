document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    const formData = new FormData(this); // Formulardaten sammeln

    fetch('https://formsubmit.co/fabianlocher99@gmail.com', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Nachricht gesendet!'); // Erfolgsmeldung
            this.reset(); // Formular zurücksetzen
        } else {
            alert('Fehler beim Senden der Nachricht. Bitte versuche es erneut.'); // Fehlermeldung
        }
    })
    .catch(error => {
        console.error('Fehler:', error); // Fehler in der Konsole protokollieren
        alert('Ein unerwarteter Fehler ist aufgetreten.'); // Fehlermeldung
    });
});
