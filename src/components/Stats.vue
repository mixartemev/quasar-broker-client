<template>
  <v-chart :options="stat" ref="bar"/>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import { mapGetters } from 'vuex';
// import { getStat } from '../store/profile/getters';

export default {
  components: {
    'v-chart': ECharts,
  },
  computed: mapGetters(/* 'profile', */['getStat']),
  name: 'PortfolioStat',
  data() {
    return {
      stat: {
        title: {
          text: 'MOEX',
        },
        xAxis: {
          type: 'category',
          data: [],
          // axisLabel: {
          //   color: 'rgba(255, 255, 255, 0.4)',
          // },
        },
        yAxis: {},
        legend: {
          data: ['line'],
        },
        series: [
          {
            name: 'Cash',
            type: 'bar',
            // showSymbol: false,
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
      this.$refs.bar.mergeOptions({
        xAxis: {
          data: newStat.map((i) => i.time),
        },
        series: [{
          // find series by name
          name: 'Cash',
          data: newStat.map((i) => i.cash),
        }],
      });
    },
  },
};
</script>
