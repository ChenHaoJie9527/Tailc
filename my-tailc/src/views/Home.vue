<template>
  <LineChart />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LineChart from "../components/LineChart.vue";

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
