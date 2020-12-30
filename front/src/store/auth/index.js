import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
	state: {
		isAuth: false,
		isAuthLoading: false,
		user: null,
		authError: ''
  },
  mutations: mutations,
  actions: actions,
	getters: getters
}