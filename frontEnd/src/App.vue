<script setup lang="ts">
import { onMounted, ref } from 'vue';

const message = ref("You did it!")
onMounted(async()=>{
  try {
    const res = await fetch("http://localhost:3000/test/1")
    const data = await res.json()
    message.value = data.message
  } catch (error) {
    console.log(error)
    message.value = String(error)
  }
})
</script>

<template>
      <nav>
      <div class="banner">
          <img src="/assets/images/green_purple_crystals.png" alt="">
          <div>
              <img class="logo" src="/assets/textures/pixelguys.png" alt="">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/">Features (no page)</RouterLink>
              <!-- Go add a page i guess? -->
              <RouterLink to="/information">Information</RouterLink>
          </div>
          <p id="modt-text">
              "Why is nothing here?" - you (probably)
          </p> 
      </div>
  </nav>
  <main>
        <RouterView></RouterView>
    </main>
     
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
