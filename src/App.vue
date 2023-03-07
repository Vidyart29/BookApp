<script setup>

</script>

<template>
  <div id="navbar" >
    <router-link :to="{name: 'books'}" style="color:aqua">👜Bags of Books📚</router-link>
  </div>
  <br>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container{
  font-size: large;
  font-family: cursive;
  
}
#navbar{
  font-size: 25px;
  font-family: cursive;
  
}
</style>
