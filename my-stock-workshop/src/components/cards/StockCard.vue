<template>
  <v-card ripple id="stockcard">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-2">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle class="subutitle">
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80" :color="avatar_BG">
        <v-icon color="white">{{ avatar_ICON }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "StockCard",
  props: ["title", "subtitle", "avatar_BG", "avatar_ICON"]
};
</script>

<style></style>
