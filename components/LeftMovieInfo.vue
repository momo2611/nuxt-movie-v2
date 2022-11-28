<template>
  <v-banner sticky shaped tile>
    <v-img :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" />
    <v-card-text class="mt-3 pa-0">
      <!-- trailer -->
      <v-dialog v-model="dialog" persistent max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="pink" block depressed class="white--text" v-bind="attrs" v-on="on" @click="openYtModal">
            <v-icon>mdi-information-outline </v-icon>
            Watch trailer
          </v-btn>
        </template>
        <!-- dialog content -->
        <v-card>
          <v-card-title>
            <span class="headline">{{ data.title }}</span>
          </v-card-title>
          <v-card-text>
            <v-card>
              <v-row>
                <v-col cols="12">
                  <div class="iframe-container">
                    <iframe allowfullscreen :src="mediaUrl" frameborder="0" v-if="isVideo"></iframe>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="closeModal">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- streaming -->
      <v-dialog v-model="dialog" persistent max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue lighten-1" block depressed class="white--text mt-2" v-bind="attrs" v-on="on"
            @click="openStModal">
            <v-icon>mdi-arrow-right-drop-circle-outline </v-icon>
            Streaming now
          </v-btn>
        </template>
        <!-- dialog content -->
        <v-card>
          <v-card-title>
            <span class="headline">{{ data.title }}</span>
          </v-card-title>
          <v-card-text>
            <v-card>
              <v-row>
                <v-col cols="12">
                  <div class="iframe-container">
                    <iframe allowfullscreen :src="streamUrl" frameborder="0" v-if="isVideo" scrolling="no"
                      allowtransparency="true"></iframe>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="closeModal">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-banner>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: false,
      isVideo: false,
      mediaUrl: "",
      streamUrl: "",
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
      this.isVideo = false;
    },
    getTrailer() {
      if (!this.data.videos) return;
      const videoTrailer = this.data.videos.results.find((e) => {
        return e.type === "Trailer";
      });
      return "https://www.youtube-nocookie.com/embed/" + videoTrailer.key;
    },
    getMovie() {
      return "https://moviehab.com/embed/" + this.data.id;
    },
    openYtModal() {
      this.mediaUrl = this.getTrailer();
      this.isVideo = true;
    },
    openStModal() {
      this.streamUrl = this.getMovie();
      this.isVideo = true;
    }
  },
};
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}
</style>