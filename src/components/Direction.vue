<template>
  <v-card class='mx-auto py-0 my-2' max-width="350" min-width="350">
    <v-card-title class="pb-0">B楼指引</v-card-title>
    <v-card-text>
      <v-container>
        <v-row v-if="photos.length">
          <v-col>
            <v-carousel hide-delimiters :continuous="false" height=400 class="rounded">
              <v-carousel-item v-for="(item, i) in photos" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              进入入口后 
              <span class="direction-highlighted">{{dir(dest.entrance.toStair.direction)}}</span>
            </p>
            <p v-if="dest.direction.level">
              上 <span class="direction-highlighted">{{dest.direction.level}}层</span> 楼梯
            </p>
            <p class="mb-0">
              <span class="direction-highlighted">{{dir(dest.direction.direction)}}</span> 
              第 <span class="direction-highlighted">{{dest.direction.roomsToPass+1}}</span> 间教室
            </p>
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
    ...mapGetters(["navResult", "dest"]),
    photos: function(){
      const dest = this.dest;
      let result = [];
      for (const i of dest.entrance.photos){
        result.push(`/nav-photos/${i}.jpg`);
      }
      if (dest.direction.level){
        for (const i of dest.entrance.toStair.photos){
          result.push(`/nav-photos/${i}.jpg`);
        }
      }
      return result;
    }
  },
  methods: {
    dir: (text) => {
      const translation = {"left": "左转", "right": "右转", "fwd": "直行", "back": "掉头"};
      return translation[text];
    },
  }
}
</script>

<style>
.direction-highlighted{
  font-size: 200%;
}
</style>