<template>
  <div>
    HOME
    <div>
      board list :
      <div v-if="loading">Loading...</div>
      <div v-else>
        API result : {{ apiRes }}
      </div>
      <div v-if="error">{{ error }}</div>
      <ul>
        <li><router-link to="/b/1">board 1</router-link></li>
        <li><router-link to="/b/2">board 2</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      apiRes: '',
      error: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      axios.get('http://localhost:3000/health')
        .then(res => {
          this.apiRes = res.data
        }).catch(res => {
          this.error = res.response.data
        }).finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
