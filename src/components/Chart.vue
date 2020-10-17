<template lang="pug">
#chart
</template>

<script>
import ApexCharts from "apexcharts";
import { onMounted } from "vue";

export default {
  props: {
    chartData: Object,
  },
  setup({ chartData }) {
    onMounted(() => {
      const options = {
        series: [
          {
            name: "Визитов",
            data: chartData.map((el) => el.visits),
          },
        ],
        chart: {
          toolbar: false,
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Аналитика по визитам",
          align: "center",
        },
        markers: {
          size: 5,
          hover: {
            size: 8,
          },
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "datetime",
          categories: chartData.map((el) => el.date),
          labels: {
            formatter: function(value) {
              return new Date(value).toLocaleDateString("ru-Ru", {
                day: "numeric",
                month: "long",
              });
            },
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
  },
};
</script>

<style lang="sass">
#chart
	max-width: 800px
	margin: auto
</style>
