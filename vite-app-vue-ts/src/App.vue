<template>
  <div>
    <img alt="Vue logo" src="./assets/image/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <CHeader />
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import CHeader from './components/header/header.vue';
</script>

<style lang="scss">
  @import '@/assets/style/app.scss';
</style>
