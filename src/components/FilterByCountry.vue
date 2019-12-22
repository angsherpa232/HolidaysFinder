<template>
  <div>
    <h3>Filter Holidays by country:</h3>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="text" data-country v-model.trim="country" placeholder="Country ..." required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import countries from "country-list";
import fetchDataMixin from "../fetchDataMixin";

export default {
  name: "FilterByCountry",
  data() {
    return {
      country: null
    };
  },
  mixins: [fetchDataMixin],
  methods: {
    onSubmit() {
      // Gets the ISO 3166-1 alpha-2 format for respective country
      this.$emit("submitted", countries.getCode(this.country));
      // Only clears field if data fetched successfully
      this.country = this.holidays.length === 0 ? this.country : "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  margin-bottom: 10px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
