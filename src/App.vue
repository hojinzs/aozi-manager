<script setup lang="ts">
import Kanban from "./components/kanban/kanban.vue";

const data = [
    {id: 1, name: "foo", groupId: 1},
    {id: 2, name: "bar", groupId: 1},
    {id: 3, name: "poa", groupId: 2},

]

const lane = [
    {id: 1, name: '첫번째 열'},
    {id: 2, name: '두번째 열'},
]
</script>

<template>
  <kanban :issues="data"
          :lanes="lane"
  />
</template>

<style lang="stylus">
html, body, #app
  height 100%
  margin 0
</style>