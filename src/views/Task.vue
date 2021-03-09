<template>
  <v-container fluid>
    <template v-if="task">
      <div class="d-flex">
        <h1>{{task.title}}</h1>

        <v-spacer />

        <add-user :id="task.id" />

        <edit-task
          :title="task.title"
          :description="task.description"
          :date="task.date"
          :status="task.status"
          :id="task.id"
        />
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

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    task() {
      return this.$store.getters.taskById(this.id)
    },
  },

  components: {
    EditTask,
    AddUser
  }
}
</script>