
<template>
  <div>
    <div class="header"></div>
    <div class="container">
      <div class="top">
        <span class="top-left">问卷管理</span>
        <span class="top-right" v-link="{name:'list'}" style="cursor: pointer;">我的主页</span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
	import store from './vuex/store'
	export default {
		store
	}
</script>
