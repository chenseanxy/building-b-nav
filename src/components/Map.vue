<template>
  <v-card class='mx-auto py-0 my-2' max-width="350" min-width="350">
    <baidu-map class="bm-view rounded" :center="{lng: 108.838365, lat: 34.132245}" :mapStyle="style" :zoom=17>
      <bm-walking :start="startCoords" :end="destCoords" autoViewport :panel="false" v-if="valid" v-on:searchcomplete="saveNavResult"></bm-walking>
    </baidu-map>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Map",
  data() {
    return {
      style: {
        styleJson: [
          {
            featureType: "poilabel",
            elementType: "all",
            stylers: {
              visibility: "off"
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(["start", "dest", "valid", "navResult"]),
    startCoords: function(){
      return this.start?.coords;
    },
    destCoords: function(){
      return this.dest?.entrance?.coords;
    },
  },
  methods: {
    saveNavResult: function (event){
      const plans = event.getNumPlans();
      if(plans < 1){
        // TODO: error popup
        console.log(event.getNumPlans());
        return
      }
      const plan = event.getPlan(0);
      const result = {
        distance: plan.getDistance(),
        duration: plan.getDuration(),
      }
      this.$store.commit("updateNavResult", result);
    }
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 270px;
}
</style>