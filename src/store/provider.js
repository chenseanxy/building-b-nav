import dest from "./destProvider";
import start from "./startProvider";

const state = {
    dest: {...dest},
    start: {...start},
}

const getters = {
    allStarts: state => Object.keys(state.start),
    allDests: state => Object.keys(state.dest),
}

export default {
    state,
    getters,
}