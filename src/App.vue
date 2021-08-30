<script setup lang="ts">
import Kanban from "./components/kanban/kanban.vue";

const data = [
    {id: 1, name: "foo", groupId: 1},
    {id: 1, name: "bar", groupId: 2},
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
