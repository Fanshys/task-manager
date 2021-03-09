<template>
  <v-card :loading="isAuthLoading" class="mx-auto my-auto" max-width="480" width="100%">
		<v-card-title>Login</v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="login" class="pl-4 pr-4 pb-5">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="pass"
				type="password"
        :rules="passRules"
        label="Password"
        required
      ></v-text-field>

      <v-btn color="primary" class="mt-3" type="submit">
        Login
      </v-btn>
    </v-form>
		<v-card-subtitle>First time here? <router-link to="/register">Register</router-link></v-card-subtitle>
		<v-alert
			v-if="authError"
      dense
      type="error"
			class="mb-0"
    >
      {{authError}}
    </v-alert>
  </v-card>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
			return {
				valid: false,
				email: '',
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				],
				pass: '',
				passRules: [
					v => !!v || 'Password is required'
				]
			}
    },

    methods: {
			...mapActions(['loginUser']),
			validate() {
        this.$refs.form.validate()
      },
			login() {
				this.validate()
				if (this.valid) {
					this.loginUser({
						email: this.email,
						pass: this.pass
					})
				}
			}
		},
		
		computed: {
			...mapGetters(['isAuthLoading', 'authError']),
		}
  }
</script>