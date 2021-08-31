import { createRouter, createWebHashHistory } from "vue-router";

import Kanban from "../views/kanban.vue"

const routes = [
    {path: '/', redirect: '/kanban/name'},
    {path: '/kanban/:name', component: Kanban}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router