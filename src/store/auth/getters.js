export default {
	isAuthLoading(state) {
		return state.isAuthLoading
	},
	isAuth(state) {
		return state.isAuth
	},
	userInfo(state) {
		return state.user
	},
	authError(state) {
		return state.authError
	}
}