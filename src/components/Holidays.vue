<template>
  <div class="holidays">
    <Holiday v-for="item in holidays" :key="item.uuid" :holiday="item" />
  </div>
</template>

<script>
import Holiday from "./Holiday.vue";

export default {
  name: "Holidays",
  props: {
    holidays: {
      type: Array
    }
  },
  components: {
    Holiday
  }
};
</script>

<style scoped>
.holidays {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

@media (max-width: 760px) {
  .holidays {
    grid-template-columns: 1fr;
  }
}
</style>
