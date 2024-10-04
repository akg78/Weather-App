import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})















// const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=${currentWeatherParams}&hourly=${hourlyParams}`;
// const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;
// const apiUrl = 'https://freetestapi.com/api/v1/weathers'
// const apiUrl = `https://freetestapi.com/api/v1/weathers?search=${searchQuery}`


 // const latitude = 52.52;
    // const longitude = 13.41; 
    // const currentWeatherParams = 'temperature_2m,wind_speed_10m';
    // const hourlyParams = 'temperature_2m,relative_humidity_2m,wind_speed_10m'; 


    // const cityName = "Berlin";
    // const stateCode = "";
    // const countryCode = "DE";
    // const limit = 1;
    // const apiKey = 'fcf76786b115d4d61d5ecafb5560e8e7';