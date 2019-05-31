<template>
  <div>
    <h1>Hello from the AppComponent</h1>
    <p>{{ someData }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public someData = 'Some text';
}
</script>
