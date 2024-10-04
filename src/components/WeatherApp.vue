<template>
    <div class="main-container">
        <input type="text" v-model="cityName" placeholder="Enter your city" />
        <button @click="getWeather">Search</button>

        <div class="loading" v-if="weatherStore.loading">Loading...</div>

        <div class="wrap-data" v-if="weatherStore.weatherData">
            <div class="weather-location-block">
                <div class="weather-location">
                    <h1>{{ weatherStore.weatherData.location.name }}</h1>
                    <h1>, {{ weatherStore.weatherData.location.country }}</h1>
                </div>
                <span>{{ weatherStore.weatherData.location.localtime }}</span>
                <div class="small-container">
                    <div class="wrap-temp">
                        <img :src="weatherStore.weatherData.current.condition.icon" alt="Weather Icon" />
                        <div>
                            <h1>{{ weatherStore.weatherData.current.temp_c }} °C</h1>
                            <p>{{ weatherStore.weatherData.current.condition.text }}</p>
                            <p>Feels like {{ weatherStore.weatherData.current.feelslike_c }} °C</p>
                        </div>
                    </div>

                    <div class="small-element">
                        <div class="current-atmos">
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.wind_kph }} km/h</p>
                                <p>Wind</p>
                            </div>
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.humidity }}%</p>
                                <p>Humidity</p>
                            </div>
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.wind_degree }} km/h</p>
                                <p>Wind Degree</p>
                            </div>
                        </div>
                        <div class="current-atmos">
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.cloud }}%</p>
                                <p>Cloud</p>
                            </div>
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.windchill_c }}%</p>
                                <p>Wind Chill</p>
                            </div>
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.pressure_mb }} mb</p>
                                <p>Pressure</p>
                            </div>
                        </div>
                        <div class="current-atmos">
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.uv }}</p>
                                <p>UV</p>
                            </div>
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.vis_km }}%</p>
                                <p>Visibility</p>
                            </div>
                            <div class="content-wrap">
                                <p>{{ weatherStore.weatherData.current.pressure_mb }} mb</p>
                                <p>Pressure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="no-data " v-else>
            <img src="/src/assets/cat.png" alt="Search for cities" id="cat" />
            <h1 class="wrap-data">Search for cities to get weather results.</h1>
        </div>

        <div v-if="weatherStore.error">
            <p>Error: {{ weatherStore.error }}</p>
        </div>
    </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { ref } from 'vue';

const weatherStore = useWeatherStore();
const cityName = ref('');

const getWeather = () => {
    if (cityName.value.trim()) {
        weatherStore.fetchWeather(cityName.value);
    }
};
</script>

<style lang="css" scoped>
.main-container {
    height: 500px;
    width: 1000px;
    margin-top: 40px;
}

.loading {
    color: #ffff;
}

input {
    height: 20px;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
    border: none;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #092c51;
    transition: 0.6s;
}

.wrap-data {
    color: #ffff;
}

.weather-location {
    display: flex;
    align-items: center;
    margin-top: 30px;
    height: 35px;
    text-align: center;
}

.small-container {
    display: flex;
    justify-content: space-between;
    height: 380px;
    width: 100%;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.164);
}

.wrap-temp {
    display: flex;
}

.small-element {
    padding: 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.245);
}

img {
    height: 120px;
    width: 120px;
}

.current-atmos {
    display: flex;
    gap: 30px;
    margin: 6px;
}

span {
    margin-top: 10px;
    font-size: 17px;
}

.content-wrap {
    display: block;
    margin: 0 auto;
    width: 170px;
    padding: 15px;
    text-align: start;
    border-radius: 20px;
    background-color: #092c51;
    opacity: 95%;
}

.weather-location-block {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 30px;
}

.no-data {
    margin-top: 50px;
}

#cat {
    height: 400px;
    width: 500px;
    border-radius: 50px;
}
</style>
