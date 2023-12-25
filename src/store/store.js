import {createStore} from "vuex";

export default createStore({
    state: {
        title: String,
        isActive: Boolean,
        toggle: Boolean,
        activeMenu: '',
        showMenu: true,
        isView: 3,
        isOpen: false,
        isMobileMenuOpen: false,
        languages: ['Arm'],
        menuItems: [
            {title: 'projects'},
            {title: 'services'},
            {title: 'about us'},
            {title: 'join us'},
            {title: 'contacts'},
        ],
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
