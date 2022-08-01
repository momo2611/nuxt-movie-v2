<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-banner sticky shaped tile>
          <v-img :src="`https://image.tmdb.org/t/p/w500${data.profile_path}`" />
        </v-banner>
      </v-col>
      <v-col class="mt-5" cols="12" sm="8">
        <div class="d-md-flex align-center mb-6">
          <h2 class="display-1 font-weight-bold">{{ data.name }}</h2>
        </div>
        <SocialShare />
        <v-divider class="mt-8"></v-divider>
        <h4 class="pink--text font-weight-bold title mt-5">Biography</h4>
        <p class="grey--text-darken mt-2">
          {{ data.biography }}
        </p>
        <p class="grey--text-darken mt-2">
          <span class="pink--text">Known as:</span> {{ called }}
        </p>
        <p v-if="data.deathday" class="grey--text-darken mt-2">
          <span class="pink--text">Died:</span>
          {{
            new Date(data.deathday).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
        <p class="grey--text-darken mt-2">
          <span class="pink--text">Department:</span>
          {{ data.known_for_department }}
        </p>
        <p class="grey--text-darken mt-2">
          <span class="pink--text">Born:</span>
          {{
            new Date(data.birthday).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
          in {{ data.place_of_birth }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <!-- Images preview -->
      <h4 class="pink--text font-weight-bold title">Actor</h4>
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="(cast, index) in casts"
          :key="index"
          v-slot="{ toggle }"
        >
          <v-card
            @click="toggle"
            max-width="160"
            max-height="300"
            class="ma-2"
            :to="`/movie/${cast.id}`"
            nuxt
          >
            <v-img
              cover
              width="160"
              height="180"
              :src="`https://image.tmdb.org/t/p/w500${cast.poster_path}`"
            />
            <v-card-title class="text-caption font-weight-medium"
              >{{ cast.title }} ({{
                new Date(cast.release_date).getFullYear()
              }})</v-card-title
            >
            <v-card-text class="text-caption">{{ cast.character }}</v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.actorTitle.name,
    };
  },
  data() {
    return {
      actorTitle: "",
    };
  },
  async asyncData({ params, $axios }) {
    try {
      const res = await $axios.$get(`/person/${params.id}`);
      const cast = await $axios.$get(`/person/${params.id}/movie_credits`);
      console.log(cast);
      return {
        data: res,
        actorTitle: res,
        casts: cast.cast,
        called: res.also_known_as.toString().replaceAll(",", ", "),
      };
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>