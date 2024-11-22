<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col md="12">
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="6">
        <group-chart :data="data.group" />
      </b-col>

      <!-- Revenue Report Card -->
      <b-col lg="6">
        <daily-chart :data="data.daily" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import { getUserData } from "@/auth/utils";
import DailyChart from "./DailyChart.vue";
import GroupChart from "./GroupChart.vue";
import EcommerceStatistics from "./EcommerceStatistics.vue";

export default {
  components: {
    BRow,
    BCol,

    DailyChart,
    GroupChart,
    EcommerceStatistics,
  },
  data() {
    return {
      data: {},
    };
  },
  created() {
    // data
    this.$http.get("/ecommerce/data").then((response) => {
      this.data = response.data;

      // ? Your API will return name of logged in user or you might just directly get name of logged in user
      // ? This is just for demo purpose
      const userData = getUserData();
      this.data.congratulations.name =
        userData.fullName.split(" ")[0] || userData.username;
    });
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-ecommerce.scss";
@import "@core/scss/vue/libs/chart-apex.scss";
</style>
