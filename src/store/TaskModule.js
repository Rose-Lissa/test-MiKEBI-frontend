import axios from "axios";

export const taskModule = {
    state: () => ({
        taskText: "",
        taskConditions: "",
        taskImage: "",
        correctAnswer: "",
        answerOptions: []
    }),
    mutations: {
        setTaskData(state, taskData) {
            state.taskText = taskData.task_text;
            state.taskConditions = taskData.task_conditions;
            state.taskImage = taskData.task_image;
            state.correctAnswer = taskData.correct_answer;
            state.answerOptions = taskData.answer_options;
        }
    },
    actions: {
        async fetchTaskData({ commit }) {
            try {
                const response = await axios.get('/src/assets/task.json');
                const taskData = response.data;
                commit('setTaskData', taskData);
            } catch (error) {
                alert(`Ошибка при получении данных: ${error}`);
            }
        }
    }
}