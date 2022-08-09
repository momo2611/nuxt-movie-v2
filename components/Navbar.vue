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
        <!-- log in log out -->
        <client-only>
          <v-btn text link v-if="!user" to="/login">Sign In</v-btn>
          <v-btn text link v-if="user" to="/profile">Profile</v-btn>
          <v-btn text link v-if="user" v-on:click="signOut()">Sign Out</v-btn>
        </client-only>
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
        <!-- log in log out -->
        <client-only>
          <v-list-item v-if="!user" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Sign In</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- user -->
          <v-list-item v-if="user" to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ user.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- out -->
          <v-list-item v-if="user">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-on:click="signOut()"
                >Sign Out</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </client-only>
        <!-- end log -->
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
      ],
      drawer: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    signOut() {
      this.$fire.auth.signOut();
      window.location = "/";
    },
  },
};
</script>

<style>
</style>