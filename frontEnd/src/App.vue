<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { setRandomText } from "./motd_randomiser"


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
  setRandomText();
})
</script>

<template>
      <nav>
      <div class="banner">
          <a href="/"><img class="logo" src="/assets/images/CubyzLogo.png" alt=""></a>
          <br>

          <p id="modt-text">
              "Why is nothing here?" - you (probably)
          </p>          
          <router-link to="."><div class="button">Home</div></router-link> 
          <router-link to="."><div class="button">Features (no page)</div></router-link> 
          <router-link to="information"><div class="button">About</div></router-link> 
          <router-link to="addon"><div class="button">Addon</div></router-link> 
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
