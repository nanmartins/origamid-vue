<template>
  <div>
    <p>User, {{ aulasCompletas }}</p>
    <!-- {{ $store.state.user}} -->
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas
    }
  }
}
</script>

<style>

</style>
