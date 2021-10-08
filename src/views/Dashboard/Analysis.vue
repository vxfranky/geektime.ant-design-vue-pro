<template>
  <div>
    Analysis
    <Chart :option="chartOption" style="height: 200px" />
  </div>
</template>

<script>
import request from "../../utils/request";
import Chart from "../../components/Chart";
export default {
  data() {
    return {
      chartOption: {},
    };
  },
  mounted() {
    this.getChartData();
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        method: "GET",
        params: { ID: 12345 },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((response) => {
        this.chartOption = {
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
              data: response.data,
            },
          ],
        };
      });
    },
  },
  components: {
    Chart,
  },
};
</script>

<style></style>
