<template>
  <v-card :loading="isAuthLoading" class="mx-auto my-auto" max-width="480" width="100%">
		<v-card-title>Registration</v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="register" class="pl-4 pr-4 pb-5">
      <v-text-field
        v-model="name"
        :counter="30"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

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

			<v-text-field
        v-model="passConfirm"
				type="password"
        :rules="passConfirmRules"
        label="Confirm Password"
        required
      ></v-text-field>

      <v-btn color="primary" class="mt-3" type="submit">
        Register
      </v-btn>
    </v-form>
		<v-card-subtitle>
			Arleady registered?
			<router-link to="/login">Login</router-link>
		</v-card-subtitle>
  </v-card>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
			return {
				valid: false,
				name: '',
				nameRules: [
					v => !!v || 'Name is required',
					v => (v && v.length <= 30) || 'Name must be less than 30 characters',
				],
				email: '',
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				],
				pass: '',
				passRules: [
					v => !!v || 'Password is required',
					v => (v && v.length >= 8) || 'Password must be more than 8 characters',
				],
				passConfirm: '',
				passConfirmRules: [
					v => !!v || 'Confirm Password is required',
					v => v === this.pass || 'Passwords must match'
				]
			}
    },

    methods: {
			...mapActions(['registerUser']),
			validate() {
        this.$refs.form.validate()
      },
			register() {
				this.validate()
				if (this.valid) {
					this.registerUser({
						email: this.email,
						name: this.name,
						pass: this.pass
					})
				}
			}
		},
		
		computed: {
			...mapGetters(['isAuthLoading']),
		}
  }
</script>