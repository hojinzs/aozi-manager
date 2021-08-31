import { createStore, StoreOptions } from "vuex";
import storeKanban from "../stores/kanban";

const store = createStore({
    modules: {
        kanban: storeKanban
    }
})

export default store