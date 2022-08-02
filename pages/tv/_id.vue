<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <LeftMovieInfo :data="data" />
      </v-col>
      <v-col cols="12" sm="8">
        <div class="d-md-flex align-center">
          <h2 class="display-1 font-weight-bold">{{ data.name }}</h2>
          <v-spacer></v-spacer>
          <Rating :data="data" />
        </div>
        <SocialShare />
        <v-divider class="mt-8"></v-divider>
        <v-row class="mt-2">
          <v-col cols="12" sm="8">
            <h4 class="pink--text font-weight-bold title">Storyline</h4>
            <p class="grey--text-darken">
              {{ data.overview }}
            </p>
            <!-- Images preview -->
            <h4 class="pink--text font-weight-bold title">Photos</h4>
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="(image, index) in data.images.backdrops"
                :key="index"
                v-slot="{ toggle }"
              >
                <v-card @click="toggle" class="ma-2">
                  <v-img
                    cover
                    width="120"
                    height="180"
                    :src="`https://image.tmdb.org/t/p/w300${image.file_path}`"
                  />
                </v-card>
              </v-slide-item>
            </v-slide-group>
            <!-- Cast -->
            <h4 class="pink--text font-weight-bold title">Top cast</h4>
            <v-responsive>
              <v-virtual-scroll
                :height="240"
                item-height="48"
                :items="data.credits.cast"
              >
                <template v-slot:default="{ item }">
                  <v-list-item :key="item.id" :to="`/actor/${item.id}`" nuxt>
                    <v-list-item-avatar>
                      <v-img :src="getCastAvatar(item)" />
                    </v-list-item-avatar>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      item.character
                    }}</v-list-item-subtitle>
                  </v-list-item>
                </template>
              </v-virtual-scroll>
            </v-responsive>
          </v-col>
          <v-col cols="12" sm="4">
            <RightMovieInfo :data="data" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- Season -->
    <h4 class="pink--text font-weight-bold title">Seasons</h4>
    <v-row class="mt-2 px-2">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="(season, index) in dataSeason" :key="index">
          <v-card max-width="160" max-height="300" class="ma-2">
            <v-img
              cover
              width="160"
              height="180"
              :src="`https://image.tmdb.org/t/p/w500${season.poster_path}`"
            />
            <v-card-title class="text-caption font-weight-medium"
              >{{ season.name }} ({{
                new Date(season.air_date).getFullYear()
              }})</v-card-title
            >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
    <!-- Recommendation -->
    <h4 class="pink--text font-weight-bold title mt-4 px-2">More like this</h4>
    <v-row class="mt-1 mb-4 px-2">
      <v-col cols="12" xs="6" sm="2" v-for="rc in recomSeries" :key="rc.id">
        <v-card max-width="160" max-height="320" :to="`/tv/${rc.id}`" nuxt>
          <v-img
            width="160"
            height="230"
            :src="`https://image.tmdb.org/t/p/w300${rc.poster_path}`"
          />
          <v-card-title class="text-caption font-weight-medium"
            >{{ rc.name }} ({{
              new Date(rc.first_air_date).getFullYear()
            }})</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftMovieInfo from "../../components/LeftMovieInfo.vue";
import RightMovieInfo from "../../components/RightMovieInfo.vue";
export default {
  head() {
    return {
      title: this.seriesTitle.name,
    };
  },
  data() {
    return {
      seriesTitle: "",
    };
  },
  async asyncData({ params, $axios }) {
    try {
      const res = await $axios.$get(
        `/tv/${params.id}?append_to_response=credits,videos,images`
      );
      const recom = await $axios.$get(`/tv/${params.id}/recommendations`);
      return {
        seriesTitle: res,
        data: res,
        dataSeason: res.seasons,
        recomSeries: recom.results.slice(0, 6),
      };
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    getCastAvatar(item) {
      if (item.profile_path) {
        return `https://image.tmdb.org/t/p/w45${item.profile_path}`;
      }
      return "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
    },
  },
  components: { LeftMovieInfo, RightMovieInfo },
};
</script>

<style>
</style>