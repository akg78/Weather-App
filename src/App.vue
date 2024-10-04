<template>
  <div class="app">
    <!-- <h1>The Weather App</h1> -->
    <WeatherApp />
  </div>
</template>

<script setup>
import WeatherApp from './components/WeatherApp.vue';

</script>

<style>
.app {
  height: 758px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  border-radius: 25px;
  background-color: #2934B5;
}
</style>