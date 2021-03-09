<template>
  <v-container fluid class="pl-4 pr-4">
    <div class="d-flex">
      <h1>Tasks</h1>
      <v-spacer></v-spacer>
      <create-task></create-task>
    </div>

    <tasks-table :tasks="allTasks"/>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import CreateTask from '@/components/CreateTask'
import TasksTable from "@/components/TasksTable";

export default {
  computed: {
    ...mapGetters(['allTasks'])
  },
  components: {
    CreateTask,
    TasksTable
  }
}
</script>