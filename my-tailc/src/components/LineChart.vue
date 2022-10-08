<template>
  <div id="main"></div>
  <div id="myChart"></div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import { lineChartStore } from "../store/lineChartStore";
import { EchartsOptions, EchartsType } from "../echarts";
const echarts: EchartsType = inject("echarts")!;
const store = lineChartStore();
// 折线图
const changeType = () => {
  // 获取组件实例
  const lineChart = echarts.init(document.getElementById("myChart")!);
  lineChart.setOption(store.getStore()); // 复制
  // 根据页面大小自动响应图标大小
  window.addEventListener("resize", () => {
    lineChart.resize();
  });
};
onMounted(() => {
  changeType();
});
</script>

<style scoped>
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
}
#myChart {
  max-height: 500px;
  height: 500px;
}
</style>