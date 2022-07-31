<template>
  <v-container>
    <SectionTitle title="Popular Movies" link="/movies" />
    <SectionMovies v-if="movies.length" :movies="movies" />
    <SectionTitle title="Upcoming Movies" link="/movies" />
    <SectionMovies v-if="upcomingMovies.length" :movies="upcomingMovies" />
  </v-container>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionMovies from "../components/SectionMovies.vue";
export default {
  name: "IndexPage",
  layout: "homepage",
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get("/movie/popular");
      const res_up = await $axios.$get("/movie/upcoming");
      return {
        movies: res.results.slice(0, 12),
        upcomingMovies: res_up.results.slice(0, 12),
      };
    } catch (e) {
      console.log(e);
    }
  },
  components: { MovieCard, SectionTitle, SectionMovies },
};
</script>
