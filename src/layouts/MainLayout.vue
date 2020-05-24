<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="glossy" :class="$q.dark.isActive ? 'bg-grey-10' : ''">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
            <q-item clickable to="/" exact active-class="text-white">ALOR Client</q-item>
        </q-toolbar-title>

        <q-btn
          round
          dense
          flat
          :icon="$q.dark.isActive ? 'wb_sunny' : 'brightness_3'"
          @click="$q.dark.toggle()"
        />
        <q-btn
          round
          dense
          flat
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          @click="$q.fullscreen.toggle()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      mini-to-overlay
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      elevated
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
  },

  data() {
    return {
      drawer: false,
      miniState: true,
      essentialLinks: [
        {
          title: 'MOEX Stat',
          caption: 'portfolio equity',
          icon: 'timeline',
          link: 'profile',
        },
      ],
    };
  },
};
</script>
