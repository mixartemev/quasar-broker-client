<template>
  <v-chart :options="stat" ref="bar"/>
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
      stat: {
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
            name: 'Cash',
            position: 'left',
            axisLabel: { formatter: '{value} ₽' },
            axisLine: { lineStyle: { color: '#a66' } },
          },
          {
            type: 'value',
            name: 'Profit',
            position: 'right',
            axisLabel: { formatter: '{value} %' },
            axisLine: { lineStyle: { color: '#696' } },
          },
        ],
        dataZoom: [{ type: 'slider' }],
        // legend: { data: ['line'] },
        series: [
          {
            name: 'Cash',
            type: 'bar',
            data: [],
            color: '#944',
          },
          {
            name: 'Profit',
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
    getStat(newStat) {
      // eslint-disable-next-line no-console
      // console.log(ECharts);
      const vals = newStat.map((i) => i.cash);
      this.$refs.bar.mergeOptions({
        xAxis: {
          data: newStat.map((i) => date.formatDate(i.time, 'MM.DD')),
        },
        series: [
          {
            // find series by name
            name: 'Cash',
            data: vals,
            yAxisIndex: 0,
          },
          {
            name: 'Profit',
            data: newStat.map((i) => i.profit),
            yAxisIndex: 1,
          },
        ],
      });
    },
  },
};
</script>
