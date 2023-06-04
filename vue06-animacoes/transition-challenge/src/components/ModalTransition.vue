<template>
  <div>
    <button @click="ativo = !ativo">Cadastre-se</button>
    <transition name='modal' :duration="500">
      <div class="modal-container" v-if="ativo" @click="fecharModal">
        <div class="modal">
          <h1>Cadastre-se</h1>
          <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">

            <label for="password">Senha</label>
            <input type="password" name="password" id="password">

            <input type="submit" value="Conectar">
          </form>
        </div>
      </div>

    </transition>
  </div>

</template>

<script>
export default {
  name: 'ModalTransition',
  data() {
    return {
      ativo: false
    }
  },
  methods: {
    fecharModal({ currentTarget, target}) {
      if (currentTarget === target) {
        this.ativo = !this.ativo
      }
    }
  }
}
</script>

<style>

  * {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1 {
    margin: 0 0 20px 0;
  }

  .modal-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
  }

  .modal {
    background: gainsboro;
    margin: 120px auto 0 auto;
    padding: 20px;
    max-width: 500px;
    z-index: 10;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, button {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 15px 10px;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  input[type="submit"], button {
    width: 200px;
    background: #5BC0BE;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 20px auto;
    display: block;
    cursor: pointer;
  }

  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.5s;
  }

  .modal-enter, .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-to .modal {
    animation: slide 0.5s;
  }

  .modal-leave-to .modal {
    animation: slide 0.5s reverse;
  }


  @keyframes slide {
    from {
      transform: translate3d(0, -60px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }


</style>
