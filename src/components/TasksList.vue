<template>
  <v-item-group>
    <v-container>
      <h2>New tasks</h2>
      <v-row>
        <v-col
            v-for="(task, index) in tasks"
            :key="index"
            cols="12"
            md="12"
        >
          <v-item>
            <v-card class="px-2" :to="'/tasks/' + task.id">
              <v-card-title>{{ task.title }}</v-card-title>
              <v-card-text v-if="task.description">{{ task.description | shortText }}</v-card-text>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default: null
    }
  },

  filters: {
    shortText: function (text) {
      return text.length > 60 ? `${text.slice(0, 60)}...` : text
    }
  },
}
</script>