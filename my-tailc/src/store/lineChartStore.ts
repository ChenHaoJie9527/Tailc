import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import type { EchartsOptions, EchartsType } from "../echarts";
interface StateProp {
  chartData: EchartsOptions;
  [key: string]: any;
}
let data: any[] = [];
let now = new Date(2022, 10, 10);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
function randomData() {
  now = new Date(+now + oneDay);
  console.log("now", now);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value),
    ],
  };
}
export const lineChartStore = defineStore("lineChartStoreId", () => {
  for (let i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  const state = reactive<StateProp>({
    chartData: {
      title: {
        text: "P&L",
      },
      tooltip: {
        trigger: "axis",
        formatter: function (params) {
          params = params[0];
          const dates = new Date(params.name);
          return (
            dates.getFullYear() +
            "/" +
            (dates.getMonth() + 1) +
            "/" +
            dates.getDate() +
            ":" +
            params.value[1]
          );
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
        splitLine: {
          show: false,
        },
        boundaryGap: [0, "100%"],
      },
      series: [
        {
          name: "P&L",
          type: "line",
          showSymbol: false,
          data: data,
        },
      ],
    },
  });

  const openInterval = () => {
    setInterval(() => {
      for (let i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      state.chartData.series = [{ data }];
    }, 5000);
  };
  const getStore = () => state.chartData;
  return {
    ...toRefs(state),
    getStore,
    openInterval,
  };
});
