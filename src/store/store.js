import {createStore} from "vuex";

export default createStore({
    state: {
        toggle: Boolean,
        activeMenu: '',
        showMenu: true,
        isOpen: false,
        isMobileMenuOpen: false,
        menuItems: [
            {title: 'projects'},
            {title: 'services'},
            {title: 'about us'},
            {title: 'join us'},
            {title: 'contacts'}
        ],
        languages: ['Arm'],
    },
    mutations: {
        toggleMenu(state) {
            state.isOpen = !state.isOpen;
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
    },
    getters: {},
    actions: {},
    modules: {},
})