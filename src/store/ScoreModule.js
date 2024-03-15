export const scoreModule = {
    state: () => ({
        scoreValue: 0
    }),
    mutations: {
        addScore (state) {
            state.scoreValue += 1000;
        }
    },
    actions: {
        increaseScore({ commit }) {
            commit('addScore');
        }
    }
}