<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "kanbanFooter",
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
    <div class="footer">
        footer
    </div>
</template>

<style lang="stylus" scoped>
.footer
    text-align center
</style>