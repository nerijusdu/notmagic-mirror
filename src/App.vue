<template>
  <div>
    <Clock />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Clock from './clock';

@Component({
  components: {
    Clock
  }
})
export default class App extends Vue {
  public someData = 'Some text';
}
</script>
