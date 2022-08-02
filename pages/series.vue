<template>
  <v-container>
    <h4 class="pink--text text-center mt-2 mb-2 font-weight-bold title text-h3">
      {{ this.getBy[0].toUpperCase() + this.getBy.substring(1) }} Movies
    </h4>
    <div class="text-center mb-6">
      <v-btn value="popular" class="mr-2" @click="handleGetBy('popular')"
        >Popular</v-btn
      >

      <v-btn
        value="airing today"
        class="mr-2"
        @click="handleGetBy('airing_today')"
        >Airing today</v-btn
      >
      <v-btn value="top_rated" class="mr-2" @click="handleGetBy('top_rated')"
        >Top rated</v-btn
      >
    </div>

    <v-row v-if="$fetchState.pending">
      <v-col cols="12" sm="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <SectionMovies v-else :movies="series" />
    <!-- pagination -->
    <v-row>
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
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "TV Series",
    };
  },
  data() {
    return {
      series: [],
      getBy: "popular",
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
      .$get(`/tv/${this.getBy}?page=${this.currentPage}`)
      .then((res) => {
        this.series = res.results;
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
    handleGetBy(value) {
      this.getBy = value;
      this.$fetch();
    },
  },
};
</script>

<style>
</style>