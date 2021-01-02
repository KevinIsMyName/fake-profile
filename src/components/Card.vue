<template>
    <div class="card">
        <img src="https://www.google.com/logos/doodles/2021/new-years-day-2021-6753651837108820-law.gif"></img>
        <div>{{firstName}} {{lastName}}</div>
        <div>{{description}}</div>
    </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Card",
  props: {},
  setup() {
    const quote = ref(null);

    function getQuote() {
      return "Quote.";
    }

    onMounted(() => {
      getQuote();
    });

    return {
      quote,
    };
  },
  async beforeMount() {
    console.log("Before mount.");
    await axios.get("https://api.kanye.rest").then((response) => {
      this.quote = response;
    });
  },
};
</script>

<style scoped>
.card {
  border: 1px solid red;
}
</style>