<template>
  <v-container fluid>
    <div class="d-flex">
      <h1>{{task.title}}</h1>
      <v-spacer />
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mr-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Member
            </v-btn>
          </template>

          <v-card>
            <v-form class="d-flex align-center px-2 py-2" ref="addMemberForm" v-model="valid" @submit.prevent="addMember">
              <v-text-field
                label="Email"
                :rules="emailRules"
                hide-details="auto"
                class="mt-0"
                v-model="email"
              ></v-text-field>
              <v-btn
                color="primary"
                text
                type="submit"
              >
                Add
              </v-btn>
            </v-form>
          </v-card>
        </v-dialog>
      </div>
      <edit-task />
    </div>
    <div>{{task.description}}</div>
  </v-container>
</template>

<script>
import EditTask from '@/components/EditTask'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      dialog: false
    }
  },
  methods: {
    addMember() {
      this.validate()
      if (this.valid) {
        this.addMemberToTask({
          id: this.id,
          email: this.email
        })
        this.clearForm()
      }
    },
    validate() {
      this.$refs.addMemberForm.validate()
    },
    clearForm() {
      this.valid = false
      this.email = ''
      this.dialog = false
    },
    ...mapActions(['addMemberToTask'])
  },
  computed: {
    task() {
      return this.$store.getters.taskById(this.id);
    },
  },
  components: {
    EditTask
  }
}
</script>