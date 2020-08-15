<template>
  <div id="menu">
    <v-container>
      <v-navigation-drawer
        color="color"
        absolute
        permanent
        dark
        app
        src="../../assets/background_menu.jpg"
      >
        <v-img
          src="../../assets/vue_display.jpg"
          alt="vue_disply"
          width="100%"
          @click="onClickMenu('/')"
        />
        <v-list shaped>
          <v-list-item-group v-model="selectedMenu" mandatory color="primary">
            <v-list-item
              class="tile"
              v-for="([icon, title, route], index) in menus"
              :key="index"
              @click="onClickMenu(route)"
            >
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      drawer: true,
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-tag", "About", "/about"]
      ],
      color: "#1c2835"
    };
  },
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      menus => menus[2] == this.$route.path
    );
  },
  methods: {
    onClickMenu(route) {
      this.$router.push(route).catch(err => {
        console.log(err);
      });
    }
  },
  watch: {
    $route(to) {
      this.selectedMenu = this.menus.findIndex(menus => menus[2] == to.path);
    }
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>

<style>
.v-list-item-group .v-list-item--active {
  color: #fff !important;
  font-weight: bold;
}
.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  opacity: 0.5;
}
.title {
  color: white;
}
.title:hover {
  background: green;
}
.title:active {
  background: "#05ab71";
}
</style>
