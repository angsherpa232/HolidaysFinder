<template>
  <div class="header">
    <h1>Know your holidays.</h1>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  margin: 10px 0;
  border-radius: 10px;
}

@media (max-width: 760px) {
  h1 {
    font-size: 22px;
  }
}
</style>
