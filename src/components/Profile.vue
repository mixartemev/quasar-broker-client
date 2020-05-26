<template>
  <div>
    <div class="q-gutter-sm">
      <q-btn
        align="between"
        :loading="tokenLoading"
        :color="whenTokUpd ? 'positive' : 'negative'"
        @click="tokenUpd"
        icon="vpn_key"
      >
        &nbsp;{{ whenTokUpd || 'Update token' }}
        <template v-slot:loading>
          <q-spinner-facebook class="on-left" />
          Loading...
        </template>
      </q-btn>
      <q-btn :loading="statLoading" color="primary" @click="statLoad" icon="bar_chart">
        Get Stat
        <template v-slot:loading>
          <q-spinner-facebook class="on-left" />
          Loading...
        </template>
      </q-btn>
      <q-btn :loading="ordersLoading" color="secondary" @click="ordersLoad" icon="swap_vert">
        Get Orders
        <template v-slot:loading>
          <q-spinner-facebook class="on-left" />
          Loading...
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: mapGetters(/* 'profile', */['whenTokUpd', 'getStat']),
  methods: {
    ...mapActions(/* 'profile', */['fetchToken', 'fetchPortfolios', 'fetchStat', 'fetchOrders']),
    async statLoad() {
      this.statLoading = true;
      await this.fetchStat('SPBX');
      this.statLoading = false;
    },
    async ordersLoad() {
      this.ordersLoading = true;
      await this.fetchOrders('SBER');
      this.ordersLoading = false;
    },
    async tokenUpd() {
      this.tokenLoading = true;
      await this.fetchToken();
      this.tokenLoading = false;
    },
  },
  data() {
    return {
      tokenLoading: false,
      statLoading: false,
      ordersLoading: false,
    };
  },
};
</script>

<style scoped>

</style>
