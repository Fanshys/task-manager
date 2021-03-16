<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      class="mb-3"
    ></v-text-field>

    <v-data-table
      :headers="taskTableHeads"
      :items="tasks"
      :search="search"
      :item-class="itemClass"
      :items-per-page="-1"
      :hide-default-footer="true"
      @click:row="goToDetailTask"
    ></v-data-table>
  </div>
</template>

<script>
import router from "@/js/router";

export default {
  props: {
    tasks: {
      type: Array,
      default: null
    }
  },

  data() {
    return {
      search: '',
      taskTableHeads: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Date',
          value: 'date'
        },
        {
          text: 'Deadline',
          value: 'deadline'
        },
        {
          text: 'Status',
          value: 'status'
        }
      ]
    }
  },

  methods: {
    goToDetailTask(task) {
      router.push("/tasks/" + task.id)
    },

    itemClass(item) {
      return `task task_${item.status}`
    }
  }
}
</script>

<style lang="sass">
.task
  cursor: pointer
  &_new
    color: #1565C0
  &_work
    color: #F9A825
  &_complete
    color: #388E3C
  &_outdated
    color: #E53935
</style>