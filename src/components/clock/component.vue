<template>
  <div class="container">
    <div class="time">{{ displayTime }}</div>
    <div class="day-of-week">{{ displayDOW }}</div>
    <div class="date">{{ displayDate }}</div>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { ClockSettings } from '@components/settings/types';

@Component
export default class Clock extends Vue {
  @State(state => state.settings.clock) settings!: ClockSettings;
  
  public displayTime: string = '-';
  public displayDate: string = '-';
  public displayDOW: string = '-';

  public mounted() {
    this.updateTime();

    setInterval(() => {
      this.updateTime();
    }, 60000);
  }

  public updateTime() {
    const now = moment();
    this.displayTime = now.format(this.settings.timeFormat);
    this.displayDate = now.format(this.settings.dateFormat);
    this.displayDOW = now.format('dddd');
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  width: 30vw;
  min-width: 300px;
}

.time {
  font-size: 10vh;
}

.date {
  margin-top: 10px;
}

.day-of-week {
  font-size: xx-large;
}
</style>
