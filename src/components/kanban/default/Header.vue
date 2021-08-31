<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "kanbanHeader",
    props: {
        title: String
    },
    setup() {
        return {

        }
    }
})
</script>

<template>
    <div class="header">
        {{ title }}
    </div>
</template>

<style lang="stylus" scoped>
.header
    width 220px;
</style>