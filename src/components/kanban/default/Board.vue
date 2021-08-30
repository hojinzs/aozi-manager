<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "KanbanBoard",
    props: {
        name: String,
    },
})

</script>

<template>
    <div class="board">
        <div class="board-title">
            {{ name }}
        </div>
        <div class="lanes">
            <div class="lanes-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<style lang="stylus">
.board
    display flex
    flex-direction columns 
    height 100%
    .board-title
        flex 1 0 0
    .lanes
        flex 1
        .lanes-wrapper
            display flex

</style>