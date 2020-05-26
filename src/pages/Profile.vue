<template>
  <q-page padding>
    <Profile/>
    <Stats/>
    <Orders/>
  </q-page>
</template>

<script>
import Profile from 'components/Profile';
import Stats from 'components/Stats';
import Orders from 'components/Orders';

export default {
  components: { Profile, Stats, Orders },
  name: 'ProfilePage',
};
</script>
