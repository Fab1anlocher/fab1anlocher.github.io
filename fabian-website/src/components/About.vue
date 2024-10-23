<template>
  <div class="about">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about" class="active">About</router-link></li>
          <li><router-link to="/timeline">Timeline</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="intro">
        <h1>Hallo, ich bin Fabian Locher! <span>👋</span></h1>
        <h2>Kaufmann EFZ & zukünftiger IT-Profi</h2>
        <p>
          Wirtschaftsinformatik-Student, Fantasy Football Champion, und
          passionierter Festivalgänger.
        </p>
        <p>
          2026 schließe ich mein Studium ab und bin bereit, in der IT-Welt
          durchzustarten!
        </p>
      </section>

      <section class="skills">
        <h2>Soft Skills</h2>
        <div class="skill-grid">
          <div class="skill-card">
            <h3>Zuverlässigkeit <span>💪</span></h3>
            <p>Ich halte Absprachen ein und arbeite strukturiert.</p>
          </div>
          <div class="skill-card">
            <h3>Kundenorientierung <span>👥</span></h3>
            <p>Die Bedürfnisse der Kunden stehen für mich im Vordergrund.</p>
          </div>
          <div class="skill-card">
            <h3>Kommunikationsstärke <span>📢</span></h3>
            <p>Klare und effektive Kommunikation, immer am Punkt.</p>
          </div>
          <div class="skill-card">
            <h3>Teamfähigkeit <span>🤝</span></h3>
            <p>Ich arbeite gerne im Team und unterstütze andere.</p>
          </div>
        </div>
      </section>

      <section class="hard-skills">
        <h2>Hard Skills</h2>
        <div class="skill">
          <div class="skill-label">MS Office:</div>
          <div class="progress-container">
            <div class="progress-bar" style="width: 90%"></div>
          </div>
        </div>
        <!-- Weitere Hard Skills hier -->
      </section>

      <section class="languages">
        <h2>Sprachen</h2>
        <div class="skill">
          <div class="skill-label">Deutsch:</div>
          <div class="progress-container">
            <div class="progress-bar" style="width: 100%"></div>
          </div>
        </div>
        <!-- Weitere Sprachen hier -->
      </section>

      <section class="hobbies">
        <h2>Hobbys</h2>
        <p>
          In meiner Freizeit reise ich gerne – bisheriger Favorit: Japan! 🎌 Ich
          bin auch großer Sportfan, schaue alles von Fußball (FC Bayern) bis NFL
          und Schweizer Nationalsportarten wie Schwingen. 🏈
        </p>
        <p>
          Fantasy Football ist meine Leidenschaft, und ich bin fest davon
          überzeugt, dass ich dieses Jahr den Berner Kickbase-Titel holen werde.
          🏆 Auch Gaming und Musikfestivals wie das Gurtenfestival gehören zu
          meinem Leben. 🎮🎶
        </p>

        <div class="hobby-images">
          <figure>
            <img src="@/assets/images/travel.jpg" alt="Bild von Japan" />
            <figcaption>Japan - Mein bisheriges Highlight.</figcaption>
          </figure>
          <figure>
            <img
              src="@/assets/images/sports.jpg"
              alt="Schweiz-England Fußballspiel"
            />
            <figcaption>
              EM 2024: Trotz der Niederlage gegen England ein einmaliges
              Erlebnis.
            </figcaption>
          </figure>
          <figure>
            <img
              src="@/assets/images/fantasy-football.jpg"
              alt="Fantasy Football Team"
            />
            <figcaption>
              Mein aktuelles Fantasy-Team – dieses Jahr hol ich den Titel!
            </figcaption>
          </figure>
          <figure>
            <img src="@/assets/images/music.jpg" alt="Musikfestival" />
            <figcaption>
              Gurtenfestival: Jährliches Ritual mit der besten Musik und
              Freunden.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2024 Fabian Locher</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* Hier kannst du alle Stile aus der 'styles.css' einfügen, die spezifisch für die About-Seite sind */
.intro {
  text-align: center;
  padding: 50px;
  background-color: #333;
  color: white;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.skill-card {
  background-color: #f4d03f;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.progress-container {
  width: 100%;
  background: #f3f3f3;
  border-radius: 5px;
}

.progress-bar {
  height: 20px;
  background: #4caf50;
  transition: width 1s;
}

.languages .skill {
  margin-top: 10px;
}

/* Hobbies Styles */
.hobbies {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 50px;
}

.hobby-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.hobby-images figure {
  flex: 1 1 250px;
  max-width: 300px;
}

.hobby-images img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;
}

.hobby-images img:hover {
  transform: scale(1.05);
}

.hobby-images figcaption {
  margin-top: 10px;
  color: #f4d03f;
  font-style: italic;
}
</style>
