import router from '@/js/router'
import firebase from '@/js/firebase'

export default {
	async loginUser({commit}, data) {
		commit('setAuthLoadingStart')

		try {
			const userObj = await firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
			commit('setUserInfo', {
				email: userObj.user.email,
				name: userObj.user.displayName,
				id: userObj.user.uid
			})
			router.push('/')
			commit('setErrorMessage')
		} catch (error) {
			commit('setErrorMessage', error.code)
		}

		commit('setAuthLoadingEnd')
	},
	async registerUser({commit}, data) {
		commit('setAuthLoadingStart')

		try {
			const userRes = await firebase.auth().createUserWithEmailAndPassword(data.email, data.pass)
			await userRes.user.updateProfile({displayName: data.name})
			await firebase.database().ref(`users/${userRes.user.uid}`).set({ email: userRes.user.email })
			commit('setUserInfo', {
				email: userRes.user.email,
				name: userRes.user.displayName,
				id: userRes.user.uid
			})
			router.push('/')
		} catch (error) {
			console.log(error.message)
		}

		commit('setAuthLoadingEnd')
	},
	async logout({commit}) {
		try {
			await firebase.auth().signOut()
			commit('clearUserInfo')
		} catch (error) {
			console.log(error)
		}
	},
	async addMemberToTask({commit}, data) {
		try {
			const user = await firebase.auth().getUserByEmail(data.email)
			console.log(user)
		} catch (error) {
			console.log(error)
			commit('setErrorMessage')
		}
	}
}