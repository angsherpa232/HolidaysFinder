import axios from "axios";

const fetchDataMixin = {
  data() {
    return {
      holidays: [],
      loading: false
    };
  },
  methods: {
    fetchData(selectedCountry) {
      this.message = false;
      this.loading = true;
      const country = selectedCountry;
      axios
        .get(
          `https://holidayapi.com/v1/holidays?key=f5299a0f-a61c-44d5-808c-51a5569a84c5&country=${country}&year=2018`
        )
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
