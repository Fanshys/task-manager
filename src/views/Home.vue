<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <home-info />
      </v-col>
      <v-col cols="12" md="3">
        <notice-list />
      </v-col>
      <v-col cols="12" md="3">
        <tasks-list :tasks="newTasks"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeInfo from '@/components/HomeInfo.vue'
import NoticeList from '@/components/NoticeList.vue'
import TasksList from "@/components/TasksList";
import {mapGetters} from "vuex";

export default {
  components: {
    HomeInfo,
    NoticeList,
    TasksList
  },

  computed: {
    ...mapGetters(['newTasks'])
  },
}
</script>