<template>
  <h1>{{ welcomeMessage }}</h1>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>

<script setup lang="ts">
const welcomeMessage = 'Index page changed';
</script>