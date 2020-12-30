<template>
  <v-container fluid class="pl-4 pr-4">
    <div class="d-flex">
      <h1>Tasks</h1>
      <v-spacer></v-spacer>
      <create-task></create-task>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              Date
            </th>
            <th class="text-left">
              Deadline
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="task in allTasks"
            :key="task.id"
            :class="'task_' + task.status"
          >
            <td>{{ task.title }}</td>
            <td>{{ task.date }}</td>
            <td>{{ task.deadline }}</td>
            <td>{{ task.status }}</td>
            <td><v-btn :to="'/tasks/' + task.id">See more</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import CreateTask from '../components/CreateTask'
export default {
  computed: {
    ...mapGetters(['allTasks'])
  },
  components: {
    CreateTask
  }
}
</script>

<style lang="sass">
  .task
    &_new
      color: #1565C0
    &_work
      color: #F9A825
    &_complete
      color: #388E3C
    &_outdated
      color: #E53935
</style>