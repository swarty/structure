


<template lang="pug">


	#app
		h2 {{msg}}



</template>







<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>






<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
	display: flex;
	justify-content: center;
}


</style>
