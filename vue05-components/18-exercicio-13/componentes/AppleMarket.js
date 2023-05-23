import DolarReal from './DolarReal.js'

export default {
  name: 'AppleMarket',
  components: {
    DolarReal
  },
  data() {
    return {
      results: ''
    }
  },
  template: `
    <div>
     <h4>Apple marketCap: {{ results }}</h4>
     <hr>
     <dolar-real></dolar-real>
    </div>
  `,
  methods: {
    fetchApi() {
      fetch('https://api.origamid.dev/stock/aapl/quote')
      .then(response => response.json())
      .then(data => this.results = data.marketCap)
    }
  },
  created() {
    this.fetchApi()
  }
}
