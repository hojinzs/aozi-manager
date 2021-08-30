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
    <div>
        <slot />
    </div>
</template>