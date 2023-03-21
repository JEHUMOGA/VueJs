<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-tittle class="headline text-uppercase">
        <span>VUETIFY</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-tittle>
    </v-toolbar>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
