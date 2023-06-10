<template>
  <header>
      <nav>
        <div class="logo">
          <router-link to="/">Techno</router-link>
        </div>

        <ul>
          <li>
            <router-link to="/Cursos">Cursos</router-link>
          </li>
          <li>
            <router-link to="/contato">Contato</router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBody",
};
</script>

<style scoped>
header {
  background: #234;
}

header a {
  color: white;
}

nav {
  display: flex;
  max-width: 800px;
  align-content: space-between;
  margin: 0 auto;
  padding: 20px;
}

.logo {
  flex: 1;
}

a.router-link-active {
  color: #4b8;
}

.logo a {
  font-size: 1.6rem;
  color: white;
}


ul {
  display: flex;
  align-items: center;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}

</style>
