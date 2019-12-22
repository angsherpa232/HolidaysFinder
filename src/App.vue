<template>
  <div class="container">
    <Header />
    <!-- Refactor if-else statement -->
    <filter-country @submitted="fetchData" />
    <div v-if="message">
      <message-dialog :message="message" />
    </div>
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-if="!loading">
      <Holidays :holidays="holidays" />
    </div>
  </div>
</template>

<script>
import Holidays from "./components/Holidays.vue";
import Header from "./components/Header.vue";
import FilterCountry from "./components/FilterCountry.vue";
import Spinner from "./components/Spinner.vue";
import fetchDataMixin from "./fetchDataMixin";
import MessageDialog from "./components/MessageDialog.vue";

export default {
  name: "app",
  data() {
    return {
      message: false,
      holidays: [],
      loading: false,
      api_key: process.env.VUE_APP_API
    };
  },
  components: {
    Holidays,
    Header,
    FilterCountry,
    Spinner,
    MessageDialog
  },
  mixins: [fetchDataMixin],
  created() {
    this.message = `Search for holidays by entering the country name in the above field.`;
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
  padding: 0 2rem;
}
</style>
