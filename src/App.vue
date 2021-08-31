<script lang="ts">
import { defineComponent } from 'vue'
import Kanban from "./components/kanban/kanban.vue";
import LayoutTwoColumnSeparation from "./components/layouts/TwoColumnSeparation.vue"
import LocalNavigation from './views/nav.vue';


export default defineComponent({
    components: {
        Kanban,
        LayoutTwoColumnSeparation,
        LocalNavigation,
    }
})
</script>

<template>
    <layout-two-column-separation>

        <template #nav>
            <local-navigation />
        </template>

        <router-view />
    </layout-two-column-separation>
</template>

<style lang="stylus">
html, body, #app
  height 100%
  margin 0
</style>