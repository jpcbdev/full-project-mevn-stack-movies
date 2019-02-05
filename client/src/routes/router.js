import VueRouter from 'vue-router';
import TheHome from '../pages/TheHome.vue';
import TheActors from '../pages/TheActors.vue';
import TheGenders from '../pages/TheGenders.vue';
import TheDirectors from '../pages/TheDirectors.vue';
import TheWriters from '../pages/TheWriters.vue';
import TheMovies from '../pages/TheMovies.vue';
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
            path: '/genders',
            name: "genders",
            component: TheGenders
        },
        {
            path: '/directors',
            name: 'directors',
            component: TheDirectors
        },
        {
            path: '/writers',
            name: 'writers',
            component: TheWriters
        },
        {
            path: '/movies',
            name: 'movies',
            component: TheMovies
        },
        {
            path: '*',
            component: TheNotFound
        }
    ]
});
export default Router;