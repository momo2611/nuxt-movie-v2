<template>
  <v-app>
    <Navbar />
    <Slider class="hidden-sm-and-down" />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
    <v-overlay :value="overlay" dark opacity="0.95">
      <Search />
      <v-btn v-if="overlay" @click="overlay = false" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
import Slider from "../components/Slider.vue";
export default {
  name: "DefaultLayout",
  head() {
    return {
      title: "Home",
    };
  },
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
  components: { Navbar, Footer, Search, Slider },
};
</script>
