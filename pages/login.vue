<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Log in to Your Account</h2>
                    <h6 class="text-center grey--text">
                      Log in to your account so you can continue building
                      <br />and editing your onboarding flows
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email"
                          v-model="auth.email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        />
                        <v-text-field
                          label="Password"
                          v-model="auth.password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Remember Me"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <a
                              href="/forgotpassword"
                              nuxt
                              class="caption blue--text"
                              >Forgot password</a
                            >
                          </v-col>
                        </v-row>
                        <v-btn
                          color="blue"
                          @click.prevent="signIn"
                          dark
                          block
                          tile
                          nuxt
                          >Log in</v-btn
                        >

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or Log in using
                        </h5>
                        <div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-16
                          "
                        >
                          <v-btn
                            depressed
                            outlined
                            @click.prevent="GoogleIn"
                            color="grey"
                          >
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >mdi-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h2 class="text-center">Don't Have an Account Yet?</h2>
                      <h6 class="text-center">
                        Let's get you all set up so you can start creating your
                        your first<br />
                        onboarding experience
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h2 class="text-center">Already signed up?</h2>
                      <h6 class="text-center">
                        Log in to your account so you can continue building
                        and<br />
                        editing your onboarding flows
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Sign Up for an Account</h2>
                    <h6 class="text-center grey--text">
                      Let's get you all set up so you can start creating your
                      <br />
                      first onboarding experience
                    </h6>
                    <v-row align="center" justify="center" class="mt-12 mb-6">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="First Name"
                              v-model="fname"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Last Name"
                              v-model="lname"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Email"
                          v-model="email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          label="Password"
                          v-model="password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-text-field
                          label="Confirm password"
                          v-model="repassword"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="I Accept AAE"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4"
                              >Terms & Conditions</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn
                          color="blue"
                          @click.prevent="RegisterAccount"
                          dark
                          block
                          tile
                          >Sign up</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "log",
  head() {
    return {
      title: "Login",
    };
  },

  data: () => ({
    step: 1,
    auth: {
      email: "",
      password: "",
    },
    fname: "",
    lname: "",
    email: "",
    password: "",
    repassword: "",
  }),
  props: {
    source: String,
  },
  methods: {
    signIn() {
      const that = this;
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then((user) => {
          that.$router.push({ name: "index" });
          console.log("success login");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    GoogleIn() {
      const that = this;
      this.provider = new this.$fireModule.auth.GoogleAuthProvider();
      this.$fire.auth
        .signInWithPopup(this.provider)
        .then((user) => {
          that.$router.push({ name: "index" });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    async RegisterAccount() {
      const that = this;
      if (this.email !== "" && this.password !== "" && this.repassword !== "") {
        if (this.password === this.repassword) {
          // call
          const createUser =
            await this.$fire.auth.createUserWithEmailAndPassword(
              this.email,
              this.password
            );
          const result = await createUser;
          const dataBase = this.$fire.firestore
            .collection("users")
            .doc(result.user.uid);
          await dataBase.set({
            firstName: this.fname,
            lastName: this.lname,
            email: this.email,
          });
          this.$router.push({ name: "index" });
          return;
        } else {
          console.log("Incorrect confirm password!");
          return;
        }
      } else {
        console.log("Please fill out all the fields!");
        return;
      }
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>