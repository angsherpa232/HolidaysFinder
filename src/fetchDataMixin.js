/* eslint-disable next-line, arrow-parens, operator-linebreak */
import axios from "axios";

const fetchDataMixin = {
  data() {
    return {
      holidays: [],
      loading: false,
      api_key: process.env.VUE_APP_API
    };
  },
  methods: {
    fetchData(selectedCountry) {
      this.message = false;
      this.loading = true;
      const country = selectedCountry;
      axios
        .get(
          `https://holidayapi.com/v1/holidays?key=${this.api_key}&country=${country}&year=2018`,
          { timeout: 50000 }
        )
        .then(res => {
          this.loading = false;
          this.holidays = res.data.holidays;
        })
        .catch(err => {
          this.loading = false;
          this.message =
            err.code === "ECONNABORTED"
              ? "Request timeout please try again"
              : "Check for typos and try again.";
          this.holidays = [];
        });
    }
  }
};

export default fetchDataMixin;
