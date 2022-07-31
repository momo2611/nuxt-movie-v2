<template>
  <div>
    <v-toolbar>
      <v-toolbar-title
        class="d-flex align-center"
        @click="$router.push('/')"
        style="cursor: pointer"
      >
        <v-icon color="pink" size="48px">mdi-movie-open</v-icon>
        <span class="text-h5 ml-2 text--pink">MOMOVIES</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Hamburger navbar -->
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- navbar -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          link
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <!-- Search icon -->
      <v-btn icon @click="$nuxt.$emit('openOverlay', true)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- content mobile nav -->
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in items"
          exact
          :key="index"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", link: "/" },
        { title: "Movies", icon: "mdi-movie-open-outline", link: "/movies" },
        { title: "TV Series", icon: "mdi-movie-roll", link: "/series" },
        { title: "Actors", icon: "mdi-account-multiple", link: "/actors" },
        { title: "Login", icon: "mdi-login", link: "/login" },
        { title: "Logout", icon: "mdi-logout", link: "/logout" },
      ],
      drawer: false,
    };
  },
};
</script>

<style>
</style>