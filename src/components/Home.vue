<template>
  <div>
    HOME
    <div>
      board list :
      <ul>
        <li><router-link to="/b/1">board 1</router-link></li>
        <li><router-link to="/b/2">board 2</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
