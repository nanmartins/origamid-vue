export default {
  name: 'BotaoContador',
  data() {
    return {
      total: 0
    }
  },
  template: `<div>
              <button @click="total++">Contador: {{ total }}</button>
            </div>`
}
