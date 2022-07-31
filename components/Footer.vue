<template>
  <v-footer dark padless>
    <v-card
      full-width
      flat
      tile
      class="blue-grey darken-3 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="item.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Follow us on social network for more latest update!
      </v-card-text>
      <v-card-text class="white--text pt-0">
        We do not claim ownership of any of the images or data in the API. We
        comply with the Digital Millennium Copyright Act (DMCA) and
        expeditiously remove infringing content when properly notified. Any data
        and/or images you upload you expressly grant us a license to use. You
        are prohibited from using the images and/or data in connection with
        libelous, defamatory, obscene, pornographic, abusive or otherwise
        offensive content.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>MoMovies</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-facebook", link: "https://facebook.com" },
      { icon: "mdi-twitter", link: "https://twitter.com" },
      { icon: "mdi-github", link: "https://github.com/momo2611" },
      { icon: "mdi-instagram", link: "https://instagram.com" },
    ],
  }),
};
</script>

<style>
</style>