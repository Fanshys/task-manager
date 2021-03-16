<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            v-on="on"
        >
          Add Member
        </v-btn>
      </template>

      <v-card>
        <v-form
            class="d-flex align-center px-2 py-2"
            ref="addMemberForm"
            v-model="valid"
            @submit.prevent="addMember"
        >
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
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    props: {
      id: {
        type: String,
        default: null
      }
    },

    data() {
      return {
        dialog: false,
        valid: false,
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]
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
    }
  }
</script>