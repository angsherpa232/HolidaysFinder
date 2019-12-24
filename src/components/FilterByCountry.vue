<template>
  <div>
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
  margin: 10px auto;
  max-width: 300px;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 2px solid #41b883;
  border-radius: 10px;
  outline: 0;
  margin-right: -6px;
  z-index: 10;
  font-size: 22px;
}
input[type="submit"] {
  flex: 3;
  background: #41b883;
  color: #fff;
  border: 1px solid #a75c46;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type="submit"]:focus {
  outline: none;
}

@media (max-width: 760px) {
  input[type="text"] {
    font-size: 12px;
  }
}
</style>
