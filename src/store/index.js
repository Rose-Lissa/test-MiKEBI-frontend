import {createStore} from 'vuex'
import {scoreModule} from "./ScoreModule.js";
import {taskModule} from "./TaskModule.js";

export default createStore({
    state: {
        playerName: 'Anton'
    },
    modules: {
        score: scoreModule,
        task: taskModule
    }
})