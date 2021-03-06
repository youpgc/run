import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function href(...arr) {
    var str = '';
    arr.map((item) => {
        str += '/' + item;
    })
    return () =>
        import ('@/page' + str);
}
export default new Router({
    mode: 'history',
    routes: [{
        path: "*",
        redirect: "/"
    }, {
        path: '/',
        name: 'diaryIndex',
        alias: '/diaryIndex',
        component: href('diary', 'index')
    }, {
        path: '/msgIndex',
        name: 'msgIndex',
        component: href('diary', 'message')
    }, {
        path: '/mine',
        name: 'mine',
        component: href('diary', 'mine')
    },{
        path: '/meal',
        name: 'meal',
        component: href('diary', 'meal')
    }, {
        path: '/plan',
        name: 'plan',
        component: href('diary', 'planEdit')
    }, {
        path: '/exeIndex',
        name: 'exeIndex',
        component: href('exercires', 'index')
    }, {
        path: '/exeSearch',
        name: 'exeSearch',
        component: href('exercires', 'search')
    }, {
        path: '/autoTrack',
        name: 'autoTrack',
        component: href('exercires', 'autoTrack')
    }, {
        path: '/addNewPlan',
        name: 'addNewPlan',
        component: href('exercires', 'addNewPlan')
    }, {
        path: '/moreIndex',
        name: 'moreIndex',
        component: href('more', 'index')
    }, {
        path: '/food_recipes',
        name: 'food_recipes',
        component: href('more', 'food_recipes')
    }, {
        path: '/devices',
        name: 'devices',
        component: href('more', 'devices')
    }, {
        path: '/blog',
        name: 'blog',
        component: href('more', 'blog')
    }, {
        path: '/blogInfo',
        name: 'blogInfo',
        component: href('more', 'blogInfo')
    }, {
        path: '/workIndex',
        name: 'workIndex',
        component: href('workouts', 'index')
    }, {
        path: '/startIndex',
        name: 'startIndex',
        component: href('start', 'index')
    }, {
        path: '/login',
        name: 'login',
        component: href('login', 'login')
    }, {
        path: '/register',
        name: 'register',
        component: href('login', 'register')
    }, {
        path: '/forgot',
        name: 'forgot',
        component: href('login', 'forgot')
    }, {
        path: '/step1',
        name: 'step1',
        component: href('login', 'step1')
    }, {
        path: '/step2',
        name: 'step2',
        component: href('login', 'step2')
    }, {
        path: '/step3',
        name: 'step3',
        component: href('login', 'step3')
    }, {
        path: '/step4',
        name: 'step4',
        component: href('login', 'step4')
    }, {
        path: '/step5',
        name: 'step5',
        component: href('login', 'step5')
    }, {
        path: '/step6',
        name: 'step6',
        component: href('login', 'step6')
    }]
})