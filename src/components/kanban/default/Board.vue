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
        <div class="board-header">
            {{ name }}
        </div>
        <div class="board-lanes">
            <slot />
        </div>
    </div>
</template>

<style lang="stylus" scoped>

</style>