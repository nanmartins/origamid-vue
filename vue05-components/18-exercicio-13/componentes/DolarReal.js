

export default {
  name: 'DolarReal',
  data() {
    return {
      results: ''
    }
  },
  template: `
    <div>
      <h4>1 Dolar = {{ results }} Reais</h4>
    </div>
  `,
  methods: {
    fetchApi() {
      fetch('https://api.origamid.dev/exchange/usd')
      .then(response => response.json())
      .then(data => this.results = data.rates.BRL)
    }
  },
  created() {
    this.fetchApi()
  }
}
