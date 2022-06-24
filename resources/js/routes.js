
import Vue from 'vue';
import VueRouter from 'vue-router';

import index from './components/pages/home/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            title: 'Home',
            component: index,
            meta : {
                ignoreInMenu : 0
            }
        },
    ]
});

export default router;