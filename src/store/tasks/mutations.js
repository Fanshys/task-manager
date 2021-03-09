export default {
	addNewTask(state, data) {
		state.tasks.push(data)
	},
	updateTasks(state, data) {
		state.tasks = data
	}
}