<template>
  <div id="myChart"></div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { inject, onMounted } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { EchartsOptions, EchartsType } from "../echarts";
const echarts: EchartsType = inject("echarts")!;
// 折线图
const changeType = () => {
  // 获取组件实例
  const lineChart = echarts.init(document.getElementById("myChart")!);

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    // const year = dayjs(now).year();
    // const mon = dayjs(now).month() + 1;
    // const _day = dayjs(now).date();
    // console.log(`output`, `${year}/${mon}/${_day}`), `${year}/${mon}/${_day}`;
    return {
      name: dayjs(now).format("YYYY-MM-DD HH:mm:ss"),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value),
      ],
    };
  }
  let data: any[] = [];
  let now = dayjs().toDate();
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 365; i++) {
    data.push(randomData());
  }
  console.log("data", data);
  const options: EchartsOptions = {
    title: {
      text: "Dynamic Data & Time Axis",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        const date = new Date(params.name);
        return (
          date.getFullYear() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getDate() +
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
    dataZoom: [
      {
        orient: "horizontal",
        show: true,
        realtime: true,
        height: 15,
        start: 0,
        bottom: "4%",
        zoomLock: true,
      },
      {
        type: "inside",
        brushSelect: true,
        start: 0,
        end: 100,
        xAxisIndex: [0],
      },
    ],
  };

  lineChart.setOption(options); // 复制
  // useIntervalFn(() => {
  //   for (var i = 0; i < 2; i++) {
  //     data.shift();
  //     data.push(randomData());
  //   }
  //   //很多朋友可能要接后端接口,把数据替换下来既可以了
  //   // axios.get('你的url').then(res => {
  //   //   console.log(res)
  //   // })
  //   console.log("data", data);
  //   lineChart.setOption({
  //     series: [
  //       {
  //         data: data,
  //       },
  //     ],
  //   });
  // }, 5000);

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
  width: 100vw;
  height: 800px;
}
</style>