<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KanbanLane",
    props: {
        name: String,
    },
    setup() {

    }
})
</script>

<template>
    <div class="kanban-lane default-kanban-lane">
        <div class="kanban-lane-wrapper">
            <slot />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.default-kanban-lane
    background-color #EAEAEA
    border-radius 7px

.kanban-lane-wrapper
    margin 7px
</style>