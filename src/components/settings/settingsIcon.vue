<template>
  <div class="settings-icon">
    <v-icon name="settings"></v-icon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SettingsIcon extends Vue {
  
}
</script>

<style scoped>
.settings-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  height: 24px;
  width: 24px;
}
</style>
