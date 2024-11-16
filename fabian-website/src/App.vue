<template>

<header>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/timeline">Timeline</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</header>
<main>
  <router-view></router-view> <!-- Hier wird der Inhalt der Routen geladen -->
</main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Basisstyles */
body {
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

/* Kopfzeile */
header {
  background-color: #333;
  padding: 1rem;
}

/* Navigation */
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a,
nav ul li router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav ul li a:hover,
nav ul li router-link:hover {
  color: #f4d03f;
}

/* Hero Styles */
.hero {
  text-align: center;
  padding: 50px;
  background-color: #333;
  color: white;
}

.cta {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f4d03f;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta:hover {
  background-color: #333;
  color: #f4d03f;
}

/* Footer Styles */
footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

/* Weitere Styles */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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
.timeline {
  padding: 50px 0;
  background-color: #f5f5f5;
}

.timeline h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

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
