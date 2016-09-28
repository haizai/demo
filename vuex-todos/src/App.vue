<template>
	<div id="app">
		<div class="container">
      <div class="title">todos</div>
			<todos></todos>	
		</div>
	</div>
</template>

<script>
	import store from './vuex/store'
  import todos from './components/todos.vue'
	export default {
    components:{
    	todos
    },
		store
	}
</script>
