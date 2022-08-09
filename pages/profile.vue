<template>
  <v-container>
    <v-card class="elevation-4 mt-8">
      <!-- profile initials -->
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            {{ this.$store.state.profileInitials }}
          </h2>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <!-- input field -->
      <v-row align="center" justify="center" class="mt-0 px-2">
        <v-col cols="12" sm="6">
          <v-text-field
            label="First name"
            v-model="fname"
            outlined
            dense
            color="blue"
            autocomplete="false"
            class="mt-14"
          />
          <v-text-field
            label="Last name"
            v-model="lname"
            outlined
            dense
            color="blue"
            autocomplete="false"
          />
          <v-text-field
            label="Email"
            v-model="email"
            outlined
            dense
            disabled
            color="blue"
          />
        </v-col>
      </v-row>
      <!-- btn -->
      <v-row align="center" justify="center" class="mt-0">
        <v-col cols="12" sm="6" class="pt-0 mb-7">
          <v-btn
            class="float-right"
            color="blue"
            @click.prevent="updateProfile"
            dark
            >Save changes</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Profile",
    };
  },
  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSettings");
      console.log("update success");
    },
  },
  computed: {
    fname: {
      get() {
        return this.$store.state.profileFirstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lname: {
      get() {
        return this.$store.state.profileLastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    email() {
      return this.$store.state.profileEmail;
    },
  },
};
</script>

<style>
</style>