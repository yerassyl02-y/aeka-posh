export const state = () => ({
        loggedIn: false,
        openMenu: false
})

export const getters = {
        GET_OPEN_MENU(state) { return state.openMenu }
}

export const actions = {

}

export const mutations = {
        SET_OPEN_MENU(state, payload) {
                state.openMenu = payload
        }
}