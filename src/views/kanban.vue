<script lang="ts">
import { defineComponent } from 'vue'
import KanbanBoard from '../components/kanban/kanban.vue'

export default defineComponent({
    components: {
        KanbanBoard
    },
    name: "Kanban",
    setup() {
        
        const issues = [
            {id: 1, name: "foo", groupId: 1},
            {id: 2, name: "bar", groupId: 1},
            {id: 3, name: "poa", groupId: 2},
            {id: 4, name: "poa", groupId: 2},
            {id: 5, name: "poa", groupId: 2},
            {id: 6, name: "poa", groupId: 2},
            {id: 7, name: "poa", groupId: 2},
            {id: 8, name: "poa", groupId: 2},
            {id: 9, name: "poa", groupId: 2},
            {id: 10, name: "poa", groupId: 2},
        ]

        const lane = [
            {id: 1, name: '첫번째 열'},
            {id: 2, name: '두번째 열'},
            {id: 3, name: '두번째 열'},
            {id: 4, name: '두번째 열'},
            {id: 5, name: '두번째 열'},
            {id: 6, name: '두번째 열'},
        ]

        return {
            issues,
            lane
        }
    },
})
</script>

<template>
    <kanban-board :issues="issues"
                  :lanes="lane"
    />
</template>
