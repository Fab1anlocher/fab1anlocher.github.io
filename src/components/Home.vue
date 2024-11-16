<template>
  <div>
    <h1>Willkommen auf meiner Website!</h1>
    <p>Dies ist die Website von Fabian Locher</p>
    <div class="animation-container">
      <div class="animated-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script> <!-- Hier fehlte das schließende Tag -->

<style scoped>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: 20px;
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #42b983;
  animation: moveBox 2s infinite alternate;
}

@keyframes moveBox {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}
</style>
