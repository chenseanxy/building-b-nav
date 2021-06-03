<template>
  <v-card class='mx-auto py-0 my-2' max-width="350" min-width="350">
    <v-card-title>B楼指引</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col>
            <p>进入入口后 {{dir(dest.entrance.toStair.direction)}}</p>
            <p v-if="dest.direction.level">上{{dest.direction.level}}层楼梯</p>
            <p>{{dir(dest.direction.direction)}} 第{{dest.direction.roomsToPass+1}}间教室</p>
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
  },
  methods: {
    dir: (text) => {
      const translation = {"left": "左转", "right": "右转", "fwd": "直行"};
      return translation[text];
    }
  }
}
</script>

<style>

</style>