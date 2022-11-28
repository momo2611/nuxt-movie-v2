<template>
  <v-toolbar class="mt-3 mb-1 rounded" short flat>
    <v-toolbar-title class="pink--text font-weight-medium text-h4">{{
    title
    }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text color="pink" :to="link">See more
      <v-icon right>mdi-chevron-double-right</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style>

</style>