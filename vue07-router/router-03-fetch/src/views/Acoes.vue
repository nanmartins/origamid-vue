<template>
  <div class="components-main-body">
    <h1>Açoes</h1>
    <div class="nav-links">
      <router-link to="/acoes/aapl">Apple</router-link>
      <router-link to="/acoes/fb">Facebook</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Acoes',
}
</script>

<style>

</style>
