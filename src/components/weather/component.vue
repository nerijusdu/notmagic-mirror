<template>
  <div v-if="hasData" class="container">
    <div>
      <div class="fields">
        <div>
          <v-icon name="sun" /> 
          <div>{{ weather.temp }} °C</div>
        </div>
        <div>
          <v-icon name="droplet" />
          <div>{{ weather.humidity }} %</div>
        </div>
        <div>
          <v-icon name="wind" />
          <div>{{ weather.wind }} m/s</div>
        </div>
        <div>
          <v-icon name="cloud" />
          <div>{{ weather.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace, State } from 'vuex-class';

const weatherModule = namespace('weather');

@Component
export default class Weather extends Vue {
  @State(state => state.weather.current) weather?: Weather;
  @weatherModule.Getter('hasData') hasData!: boolean;
}
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  height: 110px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fields {
  text-align: left;
  font-size: 22px;
}

.fields > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
</style>
