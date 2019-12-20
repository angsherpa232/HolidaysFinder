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
        .get(`https://holidayapi.com/v1/holidays?key=${this.api_key}&country=${country}&year=2018`)
        // eslint-disable-next-line arrow-parens
        .then(res => {
          this.loading = false;
          this.holidays = res.data.holidays;
        })
        .catch(() => {
          this.loading = false;
          this.message = "Check for typos and try again.";
          this.holidays = [];
        });
    }
  }
};

export default fetchDataMixin;
