<template>
  <button
      class="uppercase"
      :class="$store.commit('classes')"
      v-for="item in $store.state.menuItems"
      :key="item.title"
      :is-active="$store.state.activeMenu === item.title"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {{ item.title }}
  </button>
</template>

<style scoped>
button {
  width: 140px;
  height: 50px;
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

button span {
  position: absolute;
  background: #ff178f;
}

button span:nth-child(1) {
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 1px;
}

button span:nth-child(2) {
  bottom: -100%;
  right: 0;
  width: 1px;
  height: 100%;
}

button span:nth-child(3) {
  top: 0;
  right: -100%;
  width: 100%;
  height: 1px;
}

button span:nth-child(4) {
  top: -100%;
  left: 0;
  width: 1px;
  height: 100%;
}

button:hover {
  color: #fff;
  border: 1px solid #ff178f;
  transition-delay: .7s;
}

button:hover span:nth-child(1) {
  animation: leftLine .5s linear 0s forwards;
}

button:hover span:nth-child(2) {
  animation: bottomLine .5s linear 0.25s forwards;
}

button:hover span:nth-child(3) {
  animation: rightLine .5s linear 0s forwards;
}

button:hover span:nth-child(4) {
  animation: topLine .5s linear 0.25s forwards;
}

@keyframes topLine {
  to {
    top: 100%;
  }
}

@keyframes bottomLine {
  to {
    bottom: 100%;
  }
}

@keyframes rightLine {
  to {
    right: 100%;
  }
}

@keyframes leftLine {
  to {
    left: 100%;
  }
}

@media (max-width: 1024px) {
  button {
    font-size: initial;
    letter-spacing: normal;
  }
}
</style>
