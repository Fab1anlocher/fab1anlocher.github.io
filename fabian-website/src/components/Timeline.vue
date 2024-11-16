<template>


    <main>
      <section class="countdown">
        <h2>Countdown bis zu meinem Studienabschluss!</h2>
        <!-- Stelle sicher, dass dieses Element existiert -->
        <div id="countdown" class="countdown-timer"></div>
      </section>

      <section class="timeline">
        <h2>Meine Timeline</h2>
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="arrow"></div>
            <div class="circle"></div>
            <div class="timeline-content">
              <h3>Berner Fachhochschule BFH</h3>
              <p>
                Bachelor of Science (BSc), Wirtschaftsinformatik (August 2022 -
                Juli 2026)
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="arrow"></div>
            <div class="circle"></div>
            <div class="timeline-content">
              <h3>Radio neo1</h3>
              <p>Account Manager (Januar 2022 - Present)</p>
              <p><strong>Langnau im Emmental, Bern, Schweiz</strong></p>
              <p>3 Jahre 4 Monate</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="arrow"></div>
            <div class="circle"></div>
            <div class="timeline-content">
              <h3>Nestlé</h3>
              <p>HR-Assistant (August 2020 - Dezember 2020)</p>
              <p><strong>Konolfingen</strong></p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2024 Fabian Locher</p>
    </footer>
</template>

<script>
export default {
  name: "TimelinePage",
  mounted() {
    // Stelle sicher, dass der Countdown erst nach dem Rendern der Seite gestartet wird
    const countdownElement = document.getElementById("countdown");

    if (!countdownElement) {
      console.error("Das Countdown-Element wurde nicht gefunden.");
      return;
    }

    // Ziel-Datum für den Abschluss
    const targetDate = new Date("2026-07-06T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Berechnung der verbleibenden Zeit
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Anzeige der Zeit im HTML
      countdownElement.innerHTML = `
          ${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden
        `;

      // Wenn der Countdown abgelaufen ist, zeige eine Nachricht an
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Der Countdown ist abgelaufen!";
      }
    };

    // Aktualisiere den Countdown jede Sekunde
    const countdownInterval = setInterval(updateCountdown, 1000);
  },
};
</script>

<style scoped>
/* Countdown Styles */
.countdown {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.countdown h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.countdown-timer {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

/* Timeline Styles */
.timeline-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  margin: 20px 0;
  padding-left: 30px;
}

.timeline-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.arrow {
  position: absolute;
  left: 10px;
  top: 20px;
  width: 20px;
  height: 20px;
  border-right: 2px solid #007bff;
  border-bottom: 2px solid #007bff;
  transform: rotate(45deg);
  z-index: 0;
}

.circle {
  position: absolute;
  background: #f4d03f;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 1;
}
</style>
