<template>
  <div class="app-container" :style="{ 'background-image': 'url(' + background.url + ')' }">
    <Clock />
    <Weather />
    <SettingsIcon />
  </div>
</template>

<script lang="ts">
import Clock from '@components/clock';
import { SettingsIcon } from '@components/settings';
import Weather from '@components/weather';
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Image } from './store/types';

@Component({
  components: {
    Clock,
    SettingsIcon,
    Weather
  }
})
export default class App extends Vue {
  @State(state => state.backgrounds) backgrounds!: Image[];
  @State(state => state.settings.background.changeInterval) changeInterval!: number;
  private index: number = 0;

  get background() {
    if (this.backgrounds.length === 0) {
      return '';
    }

    return this.backgrounds[this.index];
  }

  mounted() {
    setInterval(() => {
      this.index += 1;
      if (this.index >= this.backgrounds.length) {
        this.index = 0;
      }
    }, this.changeInterval);
  }
}
</script>

<style>
.app-container {
  background: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

