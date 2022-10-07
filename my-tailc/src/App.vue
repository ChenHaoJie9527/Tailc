<script setup lang="ts">
import { provide } from "vue";
import * as echarts from "echarts";
console.log(import.meta.env);
provide("echarts", echarts);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
