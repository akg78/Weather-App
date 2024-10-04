import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weatherStore', () => {
    const weatherData = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const apiKey = "9a7869b17d694c69b97102011240310";

    const fetchWeather = async (cityName) => {
        loading.value = true;
        error.value = null;
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            weatherData.value = data
            // console.log("data", weatherData.value)
        } catch (error) {
            error.value = error.message || 'Failed to fetch weather data'
        }
        finally {
            loading.value = false;
        }
    }
    return {
        weatherData,
        error,
        loading,
        fetchWeather
    }
})


export const useIconStore = defineStore('iconStore', () => {
    const isIconVisible = ref(true);
  
    const toggleIconVisibility = () => {
      isIconVisible.value = !isIconVisible.value;
    };
  
    return {
      isIconVisible,
      toggleIconVisibility
    };
  });