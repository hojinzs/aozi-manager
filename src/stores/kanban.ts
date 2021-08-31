import { KanbanOptions } from "../compositions/kanban.d"

interface State {
    kanban: Array<KanbanOptions>
}

const storeKanban = {
    namespaced: true,
    state: (): State => ({
        kanban: [] 
    })
}

export default storeKanban