<template>
  <div>
    Analysis
    <Chart :option="chartOption" style="height: 200px" />
  </div>
</template>

<script>
import Chart from "../../components/Chart";
export default {
  data() {
    return {
      chartOption: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  components: {
    Chart,
  },
};
</script>

<style></style>
