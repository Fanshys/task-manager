<template>
  <v-container fluid>
    <template v-if="task">
      <div class="d-flex">
        <h1>{{task.title}}</h1>

        <v-spacer />

        <add-user :id="task.id" class="mr-2"/>

        <edit-task
          :task-title="task.title"
          :task-description="task.description"
          :task-date="parseDate(task.date)"
          :task-status="task.status"
          :id="task.id"
        />

        <v-btn class="ml-2" @click="deleteTask({
          id,
          owner: task.owner
        })">Delete task</v-btn>
      </div>

      <div>{{task.description}}</div>
    </template>

    <template v-else>
      the task does not exist or has not been loaded yet
    </template>
  </v-container>
</template>

<script>
import EditTask from '@/components/EditTask'
import AddUser from "@/components/AddUser"
import {parseDate} from "@/js/helpers/dateFormats"
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    task() {
      return this.$store.getters.taskById(this.id)
    }
  },

  methods: {
    parseDate,
    ...mapActions(['deleteTask'])
  },

  components: {
    EditTask,
    AddUser
  }
}
</script>