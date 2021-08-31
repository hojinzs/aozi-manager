<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import draggable from 'vuedraggable'

import "../../theme/kanban.stylus"

interface Issue {
    id: number,
    name: string,
    groupId?: number
    sortNum?: number
}

interface Lane {
    id: number,
    name: string,
    items?: Issue[]
    sortNum?: number
}

export default defineComponent({
    name: "Kanban",
    props: {
        issues: {
            type: Array as PropType<Issue[]>,
            default: [],
        },
        laneProp: {
            type: String,
            default: "groupId"
        },
        lanes: {
            type: Array as PropType<Lane[]>,
            default: [
                {id: 1, name: '기본 열'},
            ]
        },
        kanbanName: {
            type: String,
            default: "칸반 보드"
        },
        boardComponent: {
            type: String
        },
        laneComponent: {
            type: String
        },
        cardComponent: {
            type: String
        },
        headerComponent: {
            type: String
        },
        footerComponent: {
            type: String
        }                                
    },
    components: {
        draggable,
    },
    setup(props) {
        const drag = ref<boolean>(false)

        const kanbanLanes = ref<Lane[]>([])

        const dragStartHandler = (e: any) => {
            drag.value = true
            console.log("start handler => ", e)
        }

        const dragEndHandler = (e: any) => {
            drag.value = false
            console.log("end handler => ", e)
            console.log("event item => ", e.to.dataset.laneId, e.from.dataset.laneId, e.item.issueId)
        }

        const refreshData = () => {
            kanbanLanes.value = props.lanes.map(lane => {
                lane.items = props.issues.filter((i: any) => i[props.laneProp] === lane.id)
                return lane
            })
        }

        refreshData()

        return {
            drag,
            kanbanLanes,
            dragStartHandler,
            dragEndHandler,
        }
    }
})

</script>

<template>

    <component :is="boardComponent ?? 'default-kanban-board'"
               class="kanban-board"
               :name="kanbanName"
    >
    
        <draggable class="kanban-lanes-wrapper"
                   :list="kanbanLanes"
                   handle=".kanban-header"
                   group="lane"
                   item-key="id"
        >

            <template #item="lane">

                <component :is="laneComponent ?? 'default-kanban-lane'"
                           class="kanban-lane">

                    <template #header>
                        <component :is="'default-kanban-header'"
                                class="kanban-header"
                                :title="lane.element.name"
                        />
                    </template>

                    <template #default>
                        <draggable class="kanban-content"
                                   group="issues"
                                   :list="lane.element.items"
                                   @start="dragStartHandler"
                                   @end="dragEndHandler"
                                   item-key="id"
                                   :component-data="{'data-lane-id': lane.element.id}"                   
                                   >

                            <template #item="{element}">
                                <component :is="cardComponent ?? 'default-kanban-card'"
                                           class="kanban-card"
                                           :name="element.name"
                                           :data-issue-id="element.id"                                                 
                                />
                            </template>
                                    
                        </draggable>                     
                    </template>             
                    
                    <template #footer>
                        <component :is="footerComponent ?? 'default-kanban-footer'"
                                   class="kanban-footer"
                        />
                    </template>                    

                </component>

            </template>

        </draggable>

    </component>

</template>

<style lang="stylus" scoped>

</style>