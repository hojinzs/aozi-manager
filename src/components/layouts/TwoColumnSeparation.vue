<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LayoutTwoColumnSeparation",
    setup() {
        return {
        }
    },
})
</script>

<template>

    <div class="layout-app">
        <nav class="layout-sub">
            <slot name="nav" />
        </nav>
        <div class="layout-main">
            <slot />
        </div>
    </div>
    
</template>

<style lang="stylus" scoped>
    .layout-app
        display grid
        height 100%
        grid-template-columns minmax(180px, 25%) minmax(640px, 75%)
        grid-template-rows 100%
        .layout-main
            overflow hidden
</style>