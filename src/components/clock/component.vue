<template>
  <div class="container">
    <div class="time">{{ displayTime }}</div>
    <div class="day-of-week">{{ displayDOW }}</div>
    <div class="date">{{ displayDate }}</div>
  </div>
</template>

<script lang="ts">
import { ClockSettings } from '@components/settings/types';
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

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
  text-shadow: 2px 2px #000000;
  text-align: center;
  font-weight: bolder;
  height: 250px;
  width: 30vw;
  min-width: 300px;
}

.time {
  font-size: 10vh;
}

.date {
  margin-top: 10px;
  font-size: large;
}

.day-of-week {
  font-size: xx-large;
}
</style>
