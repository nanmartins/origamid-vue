

export default {
  name: 'TempoApi',
  data() {
    return {
      results: []
    }
  },
  template: `
    <div>
      <h4 style="font-size: 20px;">Temperatura maxima: {{ results }}°C</h4>
    </div>
  `,
  methods: {
    fetchApi() {
      fetch('https://api.origamid.dev/weather/rio')
      .then(response => response.json())
      .then(data => {
        this.results = data.consolidated_weather[0].max_temp.toFixed(2)
      })
    }
  },
  created() {
    this.fetchApi()
  },
}
