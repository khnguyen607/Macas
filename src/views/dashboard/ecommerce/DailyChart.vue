<template>
  <b-card v-if="data" no-body class="card-revenue-budget p-2">
    <h4 class="card-title mb-100">Biểu đồ biến động doanh số</h4>
    <vue-apex-charts
      id="revenue-report-chart"
      type="line"
      width="100%"
      :options="revenueReport.chartOptions"
      :series="data.revenueReport.series"
    />
  </b-card>
</template>

<script>
import { BCard } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";

export default {
  components: {
    VueApexCharts,
    BCard,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      revenueReport: {
        chartOptions: {
          chart: {
            type: "line",
            toolbar: { show: false },
          },
          grid: {
            padding: {
              top: -20,
              bottom: -10,
            },
          },
          xaxis: {
            categories: [
              "5",
              "10",
              "15",
              "20",
              "25",
              "30",
            ],
          },
          yaxis: {
            labels: {
              style: {
                colors: "#6E6B7B",
                fontSize: "0.86rem",
                fontFamily: "Montserrat",
              },
            },
          },
          colors: [$themeColors.primary],
        },
      },
    };
  },
};
</script>
