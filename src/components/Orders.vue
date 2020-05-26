<template>
  <v-chart :options="orders" ref="bar"/>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import { mapGetters } from 'vuex';
import { date } from 'quasar';

export default {
  components: {
    'v-chart': ECharts,
  },
  computed: mapGetters(['getStat']),
  name: 'PortfolioStat',
  data() {
    return {
      orders: {
        title: { text: 'MOEX' },
        grid: { show: true },
        xAxis: {
          type: 'category',
          axisLabel: { rotate: 90 },
          axisLine: { lineStyle: { color: '#66a' } },
          // splitLine: { lineStyle: { color: '#66a' } },
        },
        yAxis: [
          {
            type: 'value',
            name: 'Vol',
            position: 'left',
            axisLabel: { formatter: '{value} ₽' },
            axisLine: { lineStyle: { color: '#a66' } },
          },
          {
            type: 'value',
            name: 'Price',
            position: 'right',
            axisLabel: { formatter: '{value} %' },
            axisLine: { lineStyle: { color: '#696' } },
          },
        ],
        dataZoom: [{ type: 'slider' }],
        // legend: { data: ['line'] },
        series: [
          {
            name: 'Vol',
            type: 'bar',
            data: [],
            color: '#944',
          },
          {
            name: 'Price',
            type: 'line',
            color: '#696',
            data: [],
          },
        ],
        animationDuration: 1000,
      },
    };
  },
  watch: {
    getOrders(newOrders) {
      // eslint-disable-next-line no-console
      // console.log(ECharts);
      const vals = newOrders.map((i) => i.volume);
      this.$refs.bar.mergeOptions({
        xAxis: {
          data: newOrders.map((i) => date.formatDate(i.time, 'MM.DD')),
        },
        series: [
          {
            // find series by name
            name: 'Vol',
            data: vals,
            yAxisIndex: 0,
          },
          {
            name: 'Price',
            data: newOrders.map((i) => i.price),
            yAxisIndex: 1,
          },
        ],
      });
    },
  },
};
</script>
