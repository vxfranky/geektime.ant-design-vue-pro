<template>
  <div>
    Analysis
    <Chart :option="chartOption" style="height: 200px" />
  </div>
</template>

<script>
import axios from "axios";
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
      axios
        .get("/api/dashboard/chart", { params: { ID: 12345 } })
        .then((response) => {
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
