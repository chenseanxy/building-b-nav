<template>
  <v-card class='mx-auto py-0 my-2' max-width="350" min-width="350">
    <v-card-title>概览</v-card-title>
    <v-card-text>
      <v-container class="pa-0">
        <v-row align="center" justify="center">
          <v-col class="py-4 px-5 my-auto">
            <p>步行 | {{navResult.distance}} | {{navResult.duration}} </p>
          </v-col>
          <v-col class="py-4 px-5 my-auto">
            <p>楼梯 | {{dest.direction.level}}层</p>
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

</style>