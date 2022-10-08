// 引入 echarts 核心模块 提供 echarts 使用的必要接口
import * as echarts from "echarts/core";

// 引入柱状图 and 折线图 图标后缀都为Chart
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";

// 引入提示框、标题、直角坐标系、数据集、内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent,
} from "echarts/components";

// 引入 自动布局 全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";

// 引入 Canvas 渲染器 注意引入 CanvasRender or SVGRender 是必须的
import { CanvasRenderer } from "echarts/renderers";

export type EchartsOptions = echarts.ComposeOption<
  | LineSeriesOption
  | BarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  BarChart,
]);
// 导出 echarts 类型
export type EchartsType = typeof echarts;
// 导出
export default echarts;
