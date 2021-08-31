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
    <div class="lane">
        <div class="lane-header">
            <slot name="header" />
        </div>
        <div class="lane-content">
            <slot />
        </div>
        <div class="lane-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.lane
    margin 8px
    background-color #EAEAEA
    box-shadow 3px 3px 8px #e8e8e8
    border-radius 7px
    position relative
</style>