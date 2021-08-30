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

    <div>
        <h1>{{ name }}</h1>
        <slot></slot>
    </div>

</template>

<style scoped>

</style>