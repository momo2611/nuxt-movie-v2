<template>
  <v-container>
    <v-row align-center justify-center>
      <v-col cols="12">
        <v-card class="elevation-6 mt-10">
          <v-row>
            <v-col cols="12">
              <v-card-text class="mt-12">
                <h2 class="text-center">Reset your password</h2>
                <h6 class="text-center grey--text">
                  An email will send to your email address
                  <br />If you cant find an email from us, that means your email
                  is not registered or existed
                </h6>
                <v-row align="center" class="mx-16 px-10" justify="center">
                  <v-col cols="12" sm="8">
                    <v-text-field
                      label="Email"
                      v-model="auth.email"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-14"
                    />
                    <v-btn
                      @click.prevent="forgotPassword"
                      color="blue"
                      dark
                      block
                      tile
                      >Reset password</v-btn
                    >
                  </v-col>
                </v-row>
                <h5
                  class="text-center grey--text mt-4"
                  align-center
                  justify-center
                >
                  Remember now ?
                  <a href="/login" nuxt class="caption blue--text">Log In</a>
                </h5>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: "Forgot Password",
    };
  },
  data: () => ({
    auth: {
      email: "",
    },
  }),
  methods: {
    forgotPassword() {
      const that = this;
      this.$fire.auth
        .sendPasswordResetEmail(this.auth.email)
        .then(() => {
          console.log(
            "If your account exists, you will receive a email to " +
              that.auth.email
          );
        })
        .catch(() => {
          console.log("User not found or the user may have been deleted");
        });
    },
  },
};
</script>

<style>
</style>