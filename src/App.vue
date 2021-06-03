<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>B楼导航系统</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center my-0 py-0">
            <Selection></Selection>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Selection from "./components/Selection";

export default {
  name: 'App',

  components: {
    Selection,
  },

  data: () => ({
    //
  }),
};
</script>
