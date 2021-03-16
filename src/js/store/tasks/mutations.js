export default {
	addNewTask(state, data) {
		state.tasks.push(data)
	},
	updateTasks(state, data) {
		state.tasks = data
	},
	deleteTaskLocal(state, data) {
		state.tasks = state.tasks.filter(task => task.id !== data)
	}
}