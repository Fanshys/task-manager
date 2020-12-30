export default {
	setUserInfo(state, data) {
		state.user = data
		state.isAuth = true
	},
	clearUserInfo(state) {
		state.user = null
		state.isAuth = false
	},
	setAuthLoadingStart(state) {
		state.isAuthLoading = true
	},
	setAuthLoadingEnd(state) {
		state.isAuthLoading = false
	},
	setErrorMessage(state, code = 'clear') {
		switch (code) {
			case 'clear':
				state.authError = ''
				break;
			case 'auth/wrong-password':
				state.authError = 'Wrong password'
				break;
			case 'auth/user-not-found':
				state.authError = 'User with this email not found'
				break;
			default:
				state.authError = 'Unknown error'
				break;
		}
	}
}