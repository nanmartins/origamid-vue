<template>
  <header>
    <h1>
      <nav>
        <div class="logo-div">
          <router-link to="/" class="logo">Techno</router-link>
        </div>

        <ul class="nav-links">
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
  name: "HeaderBody",
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: silver;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.logo {
  font-size: 26px;
}
</style>
