<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue"; // @ is an alias to /src

@Component({
  components: { Card },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  border: 1px dashed red;
}
</style>
