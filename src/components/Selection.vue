<template>
  <v-card class='mx-auto py-0 my-2' max-width="350" min-width="350">
    <v-card-text>
      <v-container class="px-0 py-0">
        <v-row align="center" justify="center">
          <v-col class=" pl-5">
            <p>宿舍</p>
            <v-autocomplete dense :items="allStarts" v-model="start"></v-autocomplete>
          </v-col>
          <v-col :cols=1 class="px-0">
            <v-icon>mdi-arrow-right</v-icon>
          </v-col>
          <v-col class=" pr-5">
            <p>B楼教室</p>
            <v-autocomplete dense :items="allDests" v-model="dest"></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Selection',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters(["allStarts", "allDests"]),
    start: {
      get() {
        return this.$store.state.selectedStart;
      },
      set(value) {
        this.$store.commit("updateSelectedStart", value);
      }
    },
    dest: {
      get() {
        return this.$store.state.selectedDest;
      },
      set(value) {
        this.$store.commit("updateSelectedDest", value);
      }
    }
  }
}
</script>

<style>

</style>