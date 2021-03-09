<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left" v-for="(title, index) in taskTableHeads" :key="index">
          {{ title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <router-link
          v-for="task in tasks"
          :key="task.id"
          :class="'task task_' + task.status"
          :to="'/tasks/' + task.id"
          tag="tr"
      >
        <td>{{ task.title }}</td>
        <td>{{ task.date }}</td>
        <td>{{ task.deadline }}</td>
        <td>{{ task.status }}</td>
      </router-link>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      taskTableHeads: ['Title', 'Date', 'Deadline', 'Status']
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