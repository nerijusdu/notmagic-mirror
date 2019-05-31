<template>
  <div>{{ displayTime }}</div>
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Clock extends Vue {
  public displayTime: string = '-';

  public mounted() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  public updateTime() {
    this.displayTime = moment().format('HH:mm:ss');
  }
}
</script>