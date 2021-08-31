import { createRouter, createWebHashHistory } from "vue-router";

import Kanban from "../views/kanban.vue"
import Issues from "../views/issues.vue"

const routes = [
    {path: '/', redirect: '/kanban/name'},
    {path: '/issues/:projects', component: Issues},
    {path: '/kanban/:name', component: Kanban}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router