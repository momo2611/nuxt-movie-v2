<template>
  <div>
    <h4 class="pink--text text-center mt-6 font-weight-bold title text-h3">
      Popular Actors
    </h4>
    <!-- skeleton loading and catch error -->
    <v-row v-if="$fetchState.pending">
      <v-col cols="12" sm="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <!-- row actors -->
    <v-row v-else class="mb-4 mt-2 px-4">
      <v-col cols="12" sm="3" v-for="actor in actors" :key="actor.id">
        <v-card id="card-actor">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="actor.name"></v-card-title>
              <v-row class="ml-4">
                <v-icon color="pink">mdi-account-star-outline</v-icon>
                <v-card-subtitle v-text="actor.popularity"></v-card-subtitle>
              </v-row>

              <v-card-actions>
                <v-btn
                  class="ml-2 mt-3 white--text"
                  height="36px"
                  right
                  color="rgba(0,0,0,0.5)"
                >
                  Known for
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3 rounded-sm" size="125" tile>
              <v-img
                :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`"
              ></v-img>
            </v-avatar>
          </div>
          <!-- user avatar and action -->
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar>
                <v-img
                  class="elevation-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="white--text">Mo Mo</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end" class="white--text">
                <v-icon class="mr-1" color="pink"> mdi-heart </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1"></span>
                <v-icon class="mr-1" color="blue"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- pagination -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            :total-visible="10"
            v-model="currentPage"
            :length="totalPages"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Actors",
    };
  },
  data() {
    return {
      actors: [],
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/person/popular?page=${this.currentPage}`)
      .then((res) => {
        this.actors = res.results;

        this.totalPages = res.total_pages;
        this.totalResults = res.total_results;
        this.$router.push({ query: { page: this.currentPage } });
      });
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
      this.$fetch();
    },
  },
};
</script>

<style>
#card-actor {
  background-image: linear-gradient(135deg, #434343 10%, #000000 100%);
  color: #fff;
}
</style>