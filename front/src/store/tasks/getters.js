export default {
	allTasks(state) {
		return state.tasks
	},
	taskById: (state) => (id) => {
		return state.tasks.find(task => task.id == id)
	}
}