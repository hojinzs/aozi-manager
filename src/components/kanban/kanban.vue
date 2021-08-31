<script lang="ts">
import {Component, defineComponent, PropType, ref} from "vue";
import draggable from 'vuedraggable'

import "../../theme/kanban.stylus"

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

        const getGroupList = (id: number) => {
            return props.issues.filter(i => i.groupId === id)
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

    <component :is="boardComponent ?? 'default-kanban-board'"
               class="kanban-board"
               name="Test"
    >
    
        <draggable class="kanban-lanes-wrapper"
                   :list="lanes"
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
                                    :list="getGroupList(lane.element.id)"
                                    @start="dragStartHandler"
                                    @end="dragEndHandler"
                                    item-key="id">

                            <template #item="{element}">
                                <component :is="cardComponent ?? 'default-kanban-card'"
                                        class="kanban-card"
                                        :name="element.name"
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