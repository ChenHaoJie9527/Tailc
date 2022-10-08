import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import type { EchartsOptions } from "../echarts";
interface StateProp {
  chartData: EchartsOptions;
  [key: string]: any;
}
export const lineChartStore = defineStore("lineChartStoreId", () => {
  const state = reactive<StateProp>({
    chartData: {
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
          type: "line",
          stack: "x",
        },
      ],
      tooltip: {
        mainType: "tooltip",
      },
    },
  });
  const getStore = () => state.chartData;
  return {
    ...toRefs(state),
    getStore,
  };
});
