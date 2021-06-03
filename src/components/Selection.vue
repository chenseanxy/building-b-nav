<template>
  <v-card class='mx-auto py-0 my-4' max-width="350" min-width="350">
    <v-card-text>
      <v-container class="pa-0">
        <v-row align="center" justify="center">
          <v-col class="py-4 px-5 my-auto">
            <p>宿舍</p>
            <v-autocomplete :items="allStarts" v-model="start"></v-autocomplete>
          </v-col>
          <v-col :cols=2>
            <v-icon>mdi-arrow-right</v-icon>
          </v-col>
          <v-col class="py-4 px-5 my-auto">
            <p>B楼教室</p>
            <v-autocomplete :items="allDests" v-model="dest"></v-autocomplete>
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