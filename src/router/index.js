import Vue from 'vue'
import Router from 'vue-router'
import EntityMain from '@/page/entity/main'
import TheoryMain from '@/page/theory/main'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            // 嵌套路由
            children: [{
                // 这里不设置值，是把main作为默认页面
                path: '/',
                name: 'Main',
                component: EntityMain
            },{
                path: '/user',
                name: 'User',
                component: TheoryMain
            }]
        }
    ]
})
