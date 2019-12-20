<template>
  <div class="container">
    <Header />
    <Holidays />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Holidays from "./components/Holidays.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Holidays,
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
