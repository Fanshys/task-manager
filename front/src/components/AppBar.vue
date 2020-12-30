<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-tabs>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/tasks">Tasks</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <div class="d-flex" v-if="!isAuth">
      <v-btn outlined to="/login" class="mr-3">Login</v-btn>
      <v-btn outlined to="/register">Register</v-btn>
    </div>

    <div class="d-flex align-center" v-else>
      <span class="mr-3">{{userInfo.email}}</span>
      <v-btn outlined @click="logout">Logout</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuth', 'userInfo'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>