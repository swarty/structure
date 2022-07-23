<template>
  <div class="cc-wrapper">
    <Header />
  </div>
</template>

<script setup>
import Header from './components/header/header.vue';
</script>

<style lang="scss">
  @import '@/assets/style/app.scss';

  .cc-wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
</style>
