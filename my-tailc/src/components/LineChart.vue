<template>
  <div id="main"></div>
  <div id="myChart"></div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import { lineChartStore } from "../store/lineChartStore";
import { EchartsType } from "../echarts";
const echarts: EchartsType = inject("echarts")!;
const store = lineChartStore();
// 折线图
const changeType = () => {
  // 获取组件实例
  const lineChart = echarts.init(document.getElementById("myChart")!);

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value),
      ],
    };
  }
  let data: any[] = [];
  let now = new Date(2022, 10, 10);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }
  const options = {
    title: {
      text: "Dynamic Data & Time Axis",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
  };

  lineChart.setOption(options); // 复制
  setInterval(function () {
    for (var i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }
    lineChart.setOption({
      series: [
        {
          data: data,
        },
      ],
    });
  }, 1000);
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