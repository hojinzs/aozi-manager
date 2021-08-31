import { createApp } from 'vue'
import App from './App.vue'

import DefaultBoard from "./components/kanban/default/Board.vue"
import DefaultLane from "./components/kanban/default/Lane.vue"
import DefaultHeader from "./components/kanban/default/Header.vue"
import DefaultFooter from "./components/kanban/default/Footer.vue"
import DefaultCard from "./components/kanban/default/Card.vue"

import router from "./plugins/router"

const app = createApp(App)

app.use(router)

app.component('default-kanban-board', DefaultBoard)
app.component('default-kanban-lane', DefaultLane)
app.component('default-kanban-header', DefaultHeader)
app.component('default-kanban-footer', DefaultFooter)
app.component('default-kanban-card', DefaultCard)

app.mount('#app')