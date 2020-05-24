<template>
  <div>
    <p>token updated: {{whenTokUpd}}</p>
    <button @click="fetchPortfolios()">Portfolios</button>
    <button @click="fetchStat('SPBX', 321)">Stat</button>
    <button @click="actt()">Actt</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: mapGetters('profile', ['getTok', 'whenTokUpd']),
  methods: {
    ...mapActions('profile', ['fetchToken', 'fetchPortfolios', 'fetchStat']),
    actt() {
      // eslint-disable-next-line no-console
      console.log(this);
    },
  },
};
</script>

<style scoped>

</style>
