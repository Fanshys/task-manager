<template>
  <component :is="layout"></component>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import EmptyLayout from './layouts/EmptyLayout'
import firebase from '@/firebase'
import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    ...mapActions(['fetchTasks'])
  },
  created() {
    const _this = this
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUserInfo({
          email: user.email,
          name: user.displayName,
          id: user.uid
        })

        firebase.database().ref(`users/${user.uid}/tasks`).on('value', function(res) {
          if (res.val()) {
            const taskIds = Object.keys(res.val());
            _this.fetchTasks(taskIds)
          }
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        })
      }
    });
  }
};
</script>
