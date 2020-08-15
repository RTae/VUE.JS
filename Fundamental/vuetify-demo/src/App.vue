<template>
  <v-app>
    <v-app-bar app color="primary black--text" dark>
      <div @click="$router.push('/')" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn outline @click="$router.push('/button')" target="_blank" text>
        <span class="mr-2">Button</span>
      </v-btn>
      <v-btn outline @click="$router.push('/breakpoint')" target="_blank" text>
        <span class="mr-2">Breakpoint</span>
      </v-btn>
      <v-btn outline @click="$router.push('/gridsystem')" target="_blank" text>
        <span class="mr-2">GridSystem</span>
      </v-btn>
      <v-btn outline @click="$router.push('/flex')" target="_blank" text>
        <span class="mr-2">Flex</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
