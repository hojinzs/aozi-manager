<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "issues",
    setup() {

        const issues = ref()
        
        return {
            issues
        }
        
    },
})
</script>

<template>
    <div v-for="(issue, index) in issues"
         :key="index"
    />
</template>