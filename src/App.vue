<template>
  <div class="app-container">
    <Clock />
    <SettingsIcon />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Clock from '@components/clock';
import { SettingsIcon } from '@components/settings';

@Component({
  components: {
    Clock,
    SettingsIcon
  }
})
export default class App extends Vue {
  public someData = 'Some text';
}
</script>

<style>
.app-container {
  background: black;
  color: white;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

