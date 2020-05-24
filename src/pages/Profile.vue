<template>
  <q-page padding>
    <Profile/>
    <Stats/>
  </q-page>
</template>

<script>
import Profile from 'components/Profile';
import Stats from 'components/Stats';

export default {
  components: { Profile, Stats },
  name: 'ProfilePage',
};
</script>
