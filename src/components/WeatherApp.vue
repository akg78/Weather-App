<template>
    <div class="main-container">
        <input type="text" v-model="cityName" placeholder="Enter City" />
        <button @click="getWeather">Get Data</button>

        <div v-if="weatherStore.loading">Loading...</div>

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
                                <p>Uv</p>
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

        <div v-if="weatherStore.error">
            <p>Error: {{ weatherStore.error }}</p>
        </div>
    </div>
</template>


<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { ref } from 'vue';


const weatherStore = useWeatherStore();
const cityName = ref('')


const getWeather = () => {
    if (cityName.value.trim()) {
        weatherStore.fetchWeather(cityName.value)
    }
}
</script>


<style lang="css" scoped>
.main-container {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 500px;
    width: 1000px;
    /* border: 1px solid white; */
    margin-top: 40px;
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

}

.wrap-temp {
    display: flex;
    /* border: 1px solid white; */
}

.small-element {
    padding: 5px;
    border-left: 1px solid white;
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
</style>