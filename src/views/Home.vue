<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <MyHelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import MyHelloWorld from '@/components/MyHelloWorld.vue'

export default {
  name: 'home',
  components: {
    MyHelloWorld
  }
}
</script>
