import VueRouter from 'vue-router';
import TheHome from '../pages/TheHome.vue';
import TheActors from '../pages/TheActors.vue';
import TheNotFound from '../pages/TheNotFound.vue';

const Router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: TheHome
        },
        {
            path: '/actors',
            name: 'actors',
            component: TheActors
        },
        {
            path: '*',
            component: TheNotFound
        }
    ]
});
export default Router;