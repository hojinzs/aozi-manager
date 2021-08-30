<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "KanbanCard",
    props: {
        name: String
    },
    setup() {
        return {

        }
    }
})
</script>

<template>
    <div class="kanban-card default-kanban-card">
        <h4>{{name}}</h4>
    </div>
</template>

<style lang="stylus" scoped>
.kanban-card
    width 200px

.default-kanban-card
    padding 7px
    background-color #C0C0C0
    border-radius 7px

</style>