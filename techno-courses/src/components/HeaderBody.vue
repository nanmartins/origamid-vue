<template>
  <header>
    <h1>
      <nav>
        <div class="logo">
          <router-link to="/">Techno</router-link>
        </div>

        <ul>
          <li>
            <router-link to="/contato">Contato</router-link>
          </li>
          <li>
            <router-link to="/Cursos">Cursos</router-link>
          </li>
        </ul>
      </nav>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderBody',
}
</script>

<style>

</style>
