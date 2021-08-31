<script lang="ts">
import { defineComponent } from 'vue'
import Kanban from "./components/kanban/kanban.vue";
import LayoutTwoColumnSeparation from "./components/layouts/TwoColumnSeparation.vue"


export default defineComponent({
    components: {
        Kanban,
        LayoutTwoColumnSeparation,
    }
})
</script>

<template>
    <layout-two-column-separation>

        <template #nav>
            NAVIGATION GNB
        </template>

        <router-view />
    </layout-two-column-separation>
</template>

<style lang="stylus">
html, body, #app
  height 100%
  margin 0
</style>