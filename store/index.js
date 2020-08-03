import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            api: 'http://127.0.0.1:8000',
            headerData: null
        },
        getters: {
            dataHeader(state) {
                return state.headerData;
            }
        },
        mutations: {
            GET_MENU(state, data) {
                data.logo = JSON.parse(data.logo[0].data);
                state.headerData = data;
            }
        },
        actions: {
            async getMenu({ commit, state }) {
                var vm = this;
                vm.$axios.get(`${state.api}/web/header`).then(res => {
                    commit('GET_MENU', res.data);
                });
            }
        }
    })
}

export default createStore;