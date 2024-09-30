// timer.js

// Ziel-Datum für den Abschluss
const targetDate = new Date("2026-07-06T00:00:00").getTime();

// Funktion, um den Countdown zu aktualisieren
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Berechnung der verbleibenden Zeit
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Anzeige der Zeit im HTML
    document.getElementById("countdown").innerHTML = `
        ${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden
    `;

    // Wenn der Countdown abgelaufen ist, zeige eine Nachricht an
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Der Countdown ist abgelaufen!";
    }
}

// Setze eine Standardnachricht
document.getElementById("countdown").innerHTML = "Lade den Countdown...";

// Aktualisiere den Countdown jede Sekunde
const countdownInterval = setInterval(updateCountdown, 1000);
