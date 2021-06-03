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
          <v-col class="text-center my-0 py-0" v-if="ready">
            <Overview></Overview>
          </v-col>
          <v-col class="text-center my-0 py-0">
            <Map></Map>
          </v-col>
          <v-col class="text-center my-0 py-0" v-if="ready">
            <Direction></Direction>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>
        已收录{{allStarts.length}}栋宿舍楼, {{allDests.length}}个教室
         -- &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';

import Selection from "./components/Selection";
import Map from "./components/Map";
import Overview from "./components/Overview";
import Direction from "./components/Direction";

export default {
  name: 'App',

  components: {
    Selection,
    Map,
    Overview,
    Direction,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["ready", "allStarts", "allDests"]),
  }
};
</script>
