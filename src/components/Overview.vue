<template>
  <v-card class='mx-auto py-0 my-2' max-width="350" min-width="350">
    <v-card-title>概览</v-card-title>
    <v-card-text>
      <v-container class="pa-0">
        <v-row align="center" justify="center" no-gutters>
          <v-col cols=8 class="pr-0">
            <span>步行</span>
            <span> | </span>
            <span class="overview-highlighted">{{navResult.distance}} - {{navResult.duration}}</span>
          </v-col>
          <v-col class="pl-0 ml-0">
            <span>楼梯</span>
            <span> | </span>
            <span class="overview-highlighted">{{dest.direction.level}}层</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Overview",
  computed: {
    ...mapGetters(["navResult", "dest"])
  }
}
</script>

<style>
.overview-highlighted{
  /* font-weight: bold; */
  font-size: 150%;
}
</style>