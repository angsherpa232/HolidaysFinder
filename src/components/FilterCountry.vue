<template>
  <div>
    <h3>Filter by country</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model.trim="country" placeholder="Country ..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import countries from "country-list";

export default {
  name: "FilterCountry",
  data() {
    return {
      country: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitted", countries.getCode(this.country));
      this.country = "";
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
