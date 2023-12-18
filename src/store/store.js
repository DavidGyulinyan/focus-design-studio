import {createStore} from "vuex";

export default createStore({
    state: {
        title: String,
        isActive: Boolean,
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
        classes(state) {
            return {
                'container p-4': true,
                'border-pink-600': state.isActive,
            };
        },
    },
    getters: {},
    actions: {},
    modules: {},
})