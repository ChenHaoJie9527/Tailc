<template>
  <div id="main"></div>
  <div id="myChart"></div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import { EchartsOptions, EchartsType } from "../echarts";
const echarts: EchartsType = inject("echarts")!;
// 折线图
const changeType = () => {
  // 获取组件实例
  const lineChart = echarts.init(document.getElementById("myChart")!);
  // 设置配置项
  const options: EchartsOptions = {
    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },
    yAxis: {},
    series: [
      {
        data: [10, 20, 30, 40, 50],
        type: "line",
        stack: "x",
      },
      {
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x",
      },
      {
        data: [8, 7, 3, 10, 6],
        type: 'line',
        stack: "x",
      },
    ],
    tooltip: {
      mainType: "tooltip",
    },
  };
  lineChart.setOption(options); // 复制
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
