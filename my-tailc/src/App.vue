<script setup lang="ts">
import { provide } from "vue";
import * as echarts from "echarts";
console.log(import.meta.env);
provide("echarts", echarts);
</script>

<template>
  <RouterView></RouterView>
</template>

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
