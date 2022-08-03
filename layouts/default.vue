<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      overlay: false,
    };
  },
  created() {
    this.$nuxt.$on("openOverlay", ($event) => (this.overlay = $event));
  },
  watch: {
    $route(to, from) {
      this.overlay = false;
    },
  },
  components: { Navbar, Footer, Search },
};
</script>
