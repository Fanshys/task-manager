<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <slot>Edit Task</slot>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-btn
          icon
          dark
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Edit</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            dark
            text
            @click="submitCreateTask"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-5 pb-5">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submitCreateTask"
        >
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>

          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Deadline"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>

          <v-textarea
            outlined
            name="description"
            label="Description"
            v-model="description"
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            type="submit"
            @click="validate"
          >
            Save
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: new Date().toISOString().substr(0, 10)
      },
      id: {
        type: String,
        default: null
      },
      status: {
        type: String,
        default: 'new'
      }
    },

    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        valid: true,
        titleRules: [
          v => !!v || 'Name is required',
        ],
        dateFormatted: this.formatDate(this.date),
        menu1: false,
      }
    },

    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      ...mapActions(['createTask']),
      submitCreateTask() {
        this.dialog = false
        this.createTask({
          title: this.title,
          date: this.formatDate(new Date().toISOString().substr(0, 10)),
          deadline: this.dateFormatted,
          status: 'new',
          description: this.description,
          userId: this.userInfo.id
        })
          .then(() => {
            this.title = ''
            this.description = ''
            this.date = new Date().toISOString().substr(0, 10)
          })
      },
      validate () {
        this.$refs.form.validate()
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}.${month}.${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('.')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },

    computed: {
      ...mapGetters(['userInfo']),
    }
  }
</script>