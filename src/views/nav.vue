<template>
    <ul>
        <li>
            <router-link to="/kanban/test" tag="li">BOARD</router-link>            
        </li>
        <li>
            <router-link to="/issues/test" tag="li">ISSUE</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "navigation",
    setup() {
        
    },
})
</script>