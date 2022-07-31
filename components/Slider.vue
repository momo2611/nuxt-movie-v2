<template>
  <div id="slide-header">
    <v-container>
      <v-row align="center">
        <v-item-group v-model="window" class="shrink mr-6" mandatory>
          <v-item
            v-for="item in playingItems"
            :key="item.id"
            v-slot="{ active, toggle }"
          >
            <div>
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon color="white">mdi-record</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>
        <v-col>
          <v-window v-model="window" dark>
            <v-window-item v-for="item in playingItems" :key="item.id">
              <div>
                <v-row align="center" no-gutters>
                  <v-col cols="12" sm="7" offset-sm="1">
                    <strong
                      class="white--text display-2 text-center font-weight-bold"
                      >{{ item.title }}</strong
                    >
                    <Rating :data="item" />
                    <v-btn
                      color="pink lighten-1"
                      class="white--text"
                      rounded
                      :to="`/movie/${item.id}`"
                      >More details</v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="3" offset-sm1>
                    <v-img
                      :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                    />
                  </v-col>
                </v-row>
              </div>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
export default {
  data() {
    return {
      window: 0,
    };
  },
  computed: {
    playingItems() {
      return this.$store.state.now_playing;
    },
  },
  components: { Rating },
};
</script>

<style>
#slide-header {
  background: rgb(31, 31, 31);
  background: linear-gradient(
    106deg,
    rgba(31, 31, 31, 1) 10%,
    rgb(61, 61, 61) 60%
  );
}
</style>