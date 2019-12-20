<template>
  <div class="hello">
    <Holiday :holidays="holidays" />
  </div>
</template>

<script>
import axios from "axios";
import Holiday from "./Holiday.vue";

export default {
  name: "Holidays",
  data() {
    return {
      holidays: [],
      t: [
        { name: "ang", age: 23 },
        { name: "dawa", age: 34 }
      ]
    };
  },
  components: {
    Holiday
  },
  created() {
    axios
      .get(
        "https://holidayapi.com/v1/holidays?key=f5299a0f-a61c-44d5-808c-51a5569a84c5&country=DE&year=2018"
      )
      // eslint-disable-next-line arrow-parens
      .then(res => {
        this.holidays = res.data.holidays;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
