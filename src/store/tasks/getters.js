export default {
	allTasks(state) {
		return state.tasks
	},
	newTasks(state) {
		const curDate = new Date()
		curDate.setDate(curDate.getDate() - 3)

		return state.tasks.filter(task => {
			const taskDateFormat = task.date.split('.').reverse().join('-')
			const taskDate = new Date(taskDateFormat)

			return taskDate.getTime() > curDate.getTime()
		})
	},
	taskById: (state) => (id) => {
		return state.tasks.find(task => task.id == id)
	}
}