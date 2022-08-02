<template>
  <div>
    <div class="">
      <h4 class="pink--text title">Director</h4>
      <span v-for="(d, i) in getDirector" :key="i">
        {{ d }}
        <span v-if="getDirector.length - 1 != i">,</span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="pink--text title">Stars</h4>
      <span v-for="(c, i) in data.credits.cast.slice(0, 6)" :key="i"
        >{{ c.name }}
        <span v-if="3 != i">, </span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="pink--text title">Genres</h4>
      <span v-for="(g, i) in data.genres.slice(0, 6)" :key="i"
        >{{ g.name }}
        <span v-if="data.genres.length - 1 != i">, </span>
      </span>
    </div>
    <div class="mt-2" v-if="data.first_air_date">
      <h4 class="pink--text title">First air date</h4>
      <span>{{
        new Date(data.first_air_date).toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      }}</span>
    </div>
    <div class="mt-2" v-else>
      <h4 class="pink--text title">Release Date</h4>
      <span>{{
        new Date(data.release_date).toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      }}</span>
    </div>
    <div class="mt-2" v-if="data.runtime">
      <h4 class="pink--text title">Runtime</h4>
      <span>{{ data.runtime }} mins</span>
    </div>
    <div class="mt-2" v-else-if="data.number_of_seasons">
      <h4 class="pink--text title">Number of seasons</h4>
      <span
        >{{ data.number_of_seasons }}
        {{ data.number_of_seasons > 1 ? "seasons" : "season" }}</span
      >
    </div>
    <div class="mt-2" v-if="data.revenue">
      <h4 class="pink--text title">Gross worldwide</h4>
      <span
        >{{
          data.revenue.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
          })
        }}
        $</span
      >
    </div>
    <div class="mt-2">
      <h4 class="pink--text title">Language</h4>
      <span v-for="(l, i) in data.spoken_languages" :key="i"
        >{{ l.name }}
        <span v-if="data.spoken_languages.length - 1 != i">, </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    getDirector() {
      let directors = [];
      for (const item of this.data.credits.crew) {
        if (item.job === "Director") {
          directors.push(item.name);
        }
      }
      return directors;
    },
  },
};
</script>

<style>
</style>