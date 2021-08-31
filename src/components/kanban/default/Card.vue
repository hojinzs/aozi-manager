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
    <div class="default-kanban-card">
        <h4>{{name}}</h4>
    </div>
</template>

<style lang="stylus" scoped>
.default-kanban-card
    margin 8px
    box-shadow 3px 3px 8px #cfcfcf    
    padding 7px
    background-color #C0C0C0
    border-radius 7px
</style>