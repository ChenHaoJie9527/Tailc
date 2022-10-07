<template>
  <div class="flex justify-start">
    <a href="https://vitejs.dev" class="flex-auto" target="_blank">
      <img src="../assets/vite.svg" class="logo w-full" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" class="flex-auto" target="_blank">
      <img src="../assets/vue.svg" class="logo vue w-full" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button class="btn-indigo" @click="handleClick">Click me</button>
  <Modal ref="modalRef" />
  <LineChart />
</template>

<script setup lang="ts">
import { ref } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "../components/HelloWorld.vue";
import Modal from "../components/Modal.vue";
import LineChart from "../components/LineChart.vue";
const modalRef = ref(Modal);
const handleClick = () => {
  modalRef.value.activeShow();
};
</script>

<style scoped>
.btn-indigo {
  @apply btn-blue;
}
.logo {
  height: 6em;
  padding: 1.5em;
  @apply card;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
