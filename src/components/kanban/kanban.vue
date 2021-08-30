<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import draggable from 'vuedraggable'
import KanbanLane from "./default/Lane.vue";
import KanbanBoard from "./default/Board.vue";
import KanbanCard from "./default/Card.vue";

interface Issue {
    id: number,
    name: string,
    groupId?: number
}

interface Lane {
    id: number,
    name: string,
}

export default defineComponent({
    name: "Kanban",
    props: {
        issues: {
            type: Array as PropType<Issue[]>,
            default: [],
        },
        lanes: {
            type: Array as PropType<Lane[]>,
            default: [
                {id: 1, name: '기본 열'},
            ]
        }
    },
    components: {
        KanbanBoard,
        KanbanLane,
        KanbanCard,
        draggable,
    },
    setup(props) {
        const drag = ref<boolean>(false)

        const getGroupList = (id: number) => {
            return props.issues.filter(i => i.groupId ?? i.groupId === id)
        }

        const dragStartHandler = (e: any) => {
            drag.value = true
            console.log("start handler => ", e)
        }

        const dragEndHandler = (e: any) => {
            drag.value = false
            console.log("end handler => ", e)
        }

        return {
            drag,
            dragStartHandler,
            dragEndHandler,
            getGroupList,
        }
    }
})

</script>

<template>

    <kanban-board name="Test"
                  class="kanban-board"
    >

        <kanban-lane v-for="lane in lanes"
                     :key="lane.id"
                     class="kanban-lane"
        >

            <draggable
                :list="getGroupList(lane.id)"
                group="people"
                @start="dragStartHandler"
                @end="dragEndHandler"
                item-key="id">

                <template #item="{element}">
                    <kanban-card :name="element.name"
                    />
                </template>

            </draggable>

        </kanban-lane>

    </kanban-board>

</template>

<style lang="stylus" scoped>
.kanban-board
    display block
</style>