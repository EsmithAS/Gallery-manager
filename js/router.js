const routes = [
    {
        name : 'home',
        path : '/',
        component : v_home
    },
    {
        name : 'allFiles',
        path : '/all',
        component : v_files
    },
    {
        name : 'photos',
        path : '/photos',
        component : v_photos
    },
    {
        name : 'shared',
        path : '/shared',
        component : v_photos
    },
    {
        name : 'albums',
        path : '/albums',
        component : v_photos
    },
    {
        name : 'settings',
        path : '/settings',
        component : v_photos
    },
    {
        name : 'Not Found',
        path : '*',
        component : v_files//NOT FOUN
    }
]

const router = new VueRouter( {
    mode : 'history',
    routes : routes,
    base : '/'
} )

new Vue( {
    router : router
} ).$mount('#app')