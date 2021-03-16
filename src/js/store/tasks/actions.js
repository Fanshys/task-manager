import firebase from '@/js/firebase'
import router from "@/js/router";

export default {
	async createTask({ commit }, data) {
		try {
			const taskRes = await firebase.database().ref(`tasks`).push({
				date: data.date,
				deadline: data.deadline,
				description: data.description,
				title: data.title,
				status: data.status,
				owner: data.userId
			})
			await firebase.database().ref(`users/${data.userId}/tasks/${taskRes.path.pieces_[1]}`).set({ access: 'owner' })
			commit('addNewTask', data)
	
			return taskRes
		} catch (error) {
			console.log(error.message)
		}
	},

	async fetchTasks({ commit }, taskIds) {
		const taskPromises = taskIds.map(id => {
			return firebase.database().ref(`tasks/${id}`).once('value')
		})
		const taskObjs = await Promise.all(taskPromises)
		const tasks = taskObjs.map(task => {
			return {
				...task.val(),
				id: task.ref_.path.pieces_[1]
			}
		})
		commit('updateTasks', tasks)
	},

	async deleteTask({commit}, data) {
		await firebase.database().ref(`tasks/${data.id}`).remove()
		await firebase.database().ref(`users/${data.owner}/tasks/${data.id}`).remove()
		commit('deleteTaskLocal', data.id)
		router.push('/tasks/')
	}
}