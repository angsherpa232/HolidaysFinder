<template>
  <div class="message">
    <h4>
      {{ message }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "MesssageDialog",
  props: ["message"]
};
</script>

<style scoped>
.message {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  padding: 10px;
}
</style>
